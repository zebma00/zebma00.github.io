import React from 'react'

import { Item } from '../../data/example-items/Classes'
import { getClassColor } from '../../lib/ui-utils'
import { PlayerClassParam, Stats } from '../../types'
import styles from './index.module.css'

const SingleItemIcon: React.FC<{ img: string }> = ({ img }) => {
  return (
    <div className={styles.singleItemIconWrapper}>
      <div className={styles.singleItemHighlight} style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/icons/border-large.png")` }} />
      <div className={styles.singleItemIcon} style={{ background: `url("https://wow.zamimg.com/images/wow/icons/large/${img}.jpg") 0 0 no-repeat` }} />
      <div />
    </div>
  )
}

const ItemName: React.FC<{ name: string; quality: string }> = ({ name, quality }) => {
  const color = quality === 'epic' ? '#a335ee' : '#0070dd'
  return (
    <div className={styles.itemName} style={{ color }}>
      {name}
    </div>
  )
}

const ItemSlot: React.FC<{ slot: string; itemType: string | null | undefined }> = ({ slot, itemType }) => {
  return (
    <div className={styles.singleItemFlex}>
      <div>{slot}</div>
      <div>{itemType}</div>
    </div>
  )
}

const ItemDmg: React.FC<{ damage: string | null | undefined; speed: string | null; dps: string | null }> = ({ damage, speed, dps }) => {
  return (
    <>
      <div className={styles.singleItemFlex}>
        <div>{speed}</div>
        <div>{damage}</div>
      </div>
      <div className={styles.singleItemFlex}>{dps}</div>
    </>
  )
}

const SingleStat: React.FC<{ stat: string; value: number }> = ({ stat, value }) => {
  const sign = value < 0 ? '-' : '+'
  const capitalKey = stat?.charAt(0).toUpperCase() + stat?.slice(1)

  return (
    <div className={styles.singleItemFlex}>
      {sign}
      {value} {capitalKey}
    </div>
  )
}

const ItemStats: React.FC<{ stats: Stats }> = ({ stats }) => {
  return (
    <>
      {Object.entries(stats).map(([stat, value], index) => {
        if (!!value) return <SingleStat key={index} stat={stat} value={value} />
      })}
    </>
  )
}

const SingleItem: React.FC<Item> = ({ name, img, quality, slot, itemType, damage, speed, dps, stats, description, playerClass, levelRequired }) => {
  const hasDmg = damage && speed && dps

  return (
    <div className={styles.singleItemWrapper}>
      <SingleItemIcon img={img} />
      <div className={styles.singleItemDescription} style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/background/tooltip.png")` }}>
        <ItemName name={name} quality={quality} />
        <ItemSlot slot={slot} itemType={itemType} />
        {hasDmg && <ItemDmg damage={damage} speed={speed} dps={dps} />}
        {stats && <ItemStats stats={stats} />}
        {playerClass && (
          <div className={styles.singleItemPlayerClass}>
            Classes: <span style={{ color: getClassColor(playerClass.toLowerCase() as PlayerClassParam) }}>{playerClass}</span>
          </div>
        )}
        <div className={styles.itemDescription}>{description && description.map((line, i) => <div key={i}>{line}</div>)}</div>
        {levelRequired && <div className={styles.singleItemPlayerClass}>Requires level {levelRequired}</div>}
      </div>
    </div>
  )
}

export default SingleItem
