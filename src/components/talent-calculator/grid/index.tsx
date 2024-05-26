import React from 'react'

import { Talent } from '../../../data/talents/Classes'
import { capitalizer, getBorderColor } from '../../../lib/ui-utils'
import { checkPointsPerTree } from '../../../lib/handle-talents'
import Cell from '../cell'
import styles from './grid.module.css'
import { URLParams } from '../../../types'
import { useParams } from 'react-router-dom'

interface GridProps {
  gridData: Talent[][]
  i: number
  pointsLeft: number
  selectedClass: string
  specName: string
  specIcon: string
  clickHandler: (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => void
  resetTree: (i: number) => void
  displayChanged: {
    displayIsNew: boolean
    displayIsChanged: boolean
    displayIsMoved: boolean
  }
}

const Grid: React.FC<GridProps> = ({ gridData, i, pointsLeft, selectedClass, specName, specIcon, clickHandler, resetTree, displayChanged }) => {
  const { talentPoints } = useParams<URLParams>()
  const currentPoints = checkPointsPerTree(gridData)
  return (
    <div className={styles.tree}>
      <div className={styles.treeHeader}>
        <div className={styles.treeHeaderHead}>
          <div className={styles.treeHeaderIcon}>
            <div className={styles.treeHeaderIconBorder} />
            <div
              className={styles.treeHeaderIconSpec}
              style={{
                background: `url("https://wow.zamimg.com/images/wow/icons/small/${specIcon}.jpg") 0px 0px no-repeat`,
              }}
            />
          </div>
          <div>
            {capitalizer(specName)} ({currentPoints})
          </div>
        </div>
        <div onClick={() => resetTree(i)} className={styles.reset}>
          &#x2715;
        </div>
      </div>
      <div style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/background/${selectedClass}/${specName}.jpg")` }} className={styles.grid}>
        {gridData.map((row, x) => {
          return row.map((cell, y) => {
            if (cell) {
              const color = getBorderColor(gridData, x, y, currentPoints, pointsLeft, talentPoints)
              return <Cell key={`${x}, ${y}`} i={i} x={x} y={y} cellData={cell} color={color} clickHandler={clickHandler} displayChanged={displayChanged} />
            } else {
              return <div key={`${x}, ${y}`} />
            }
          })
        })}
      </div>
    </div>
  )
}
export default Grid
