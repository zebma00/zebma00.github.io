import React, { ReactNode } from 'react'

import styles from './cell.module.css'

interface TooltipProps {
  value: number
  description: string[] | ReactNode[]
  maxValue: number
  valueIteration: number[][] | string[][]
  manaCost: string | null
  range: string | null
  castTime: string | null
  cooldown: string | null
  name: string
}

const Tooltip: React.FC<TooltipProps> = ({ value, description, maxValue, valueIteration, manaCost, range, castTime, cooldown, name }) => {
  const activeTalent = !!manaCost || !!range || !!castTime || !!cooldown

  const renderDescription: any[] = []

  description.forEach((text, index) => {
    renderDescription.push(text)
    if (value === 0 && index < description.length - 1) {
      renderDescription.push(<span key={Math.random()}>{valueIteration[index][value]}</span>)
    } else if (index < description.length - 1) {
      renderDescription.push(<span key={Math.random()}>{valueIteration[index][value - 1]}</span>)
    }
  })

  const renderDescriptionNext: any[] = []

  if (value < maxValue && !!value) {
    description.forEach((text, index) => {
      renderDescriptionNext.push(<span key={Math.random()}>{text}</span>)
      if (index < description.length - 1) {
        renderDescriptionNext.push(<span key={Math.random()}>{valueIteration[index][value]}</span>)
      }
    })
  }

  return (
    <div
      className={styles.tooltipStyle}
      style={{
        backgroundImage: `url("${process.env.PUBLIC_URL}/img/background/tooltip.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className={styles.tooltipHeader}>
        <div className={styles.tooltipTitle}>{name}</div>
        {!activeTalent && <div className={styles.tooltipRank}>{`Rank ${value}`}</div>}
      </div>
      {activeTalent && (
        <>
          <div className={styles.tooltipActiveRow}>
            <div className={styles.tooltipActiveInfo}>{manaCost}</div>
            <div className={styles.tooltipActiveInfo}>{range}</div>
          </div>
          <div className={styles.tooltipActiveRow}>
            <div className={styles.tooltipActiveInfo}>{castTime}</div>
            <div className={styles.tooltipActiveInfo}>{cooldown}</div>
          </div>
        </>
      )}
      <div className={styles.tooltipDescription}>
        {renderDescription}
        <div>{value < maxValue && !!value && <div className={styles.tooltipNextRank}>Next rank:</div>}</div>
        {renderDescriptionNext}
      </div>
    </div>
  )
}

export default Tooltip
