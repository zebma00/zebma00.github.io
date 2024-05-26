import React, { useState } from 'react'

import { Talent } from '../../../data/talents/Classes'
import Tooltip from './tooltip'
import Arrow from './arrow'
import styles from './cell.module.css'
import ChangedBar from './changed-bar'
import { useParams } from 'react-router-dom'
import { URLParams } from '../../../types'

interface CellProps {
  cellData: Talent
  i: number
  x: number
  y: number
  color: string | null
  clickHandler: (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => void
  displayChanged: {
    displayIsNew: boolean
    displayIsChanged: boolean
    displayIsMoved: boolean
  }
}

const Cell: React.FC<CellProps> = ({ cellData, i, x, y, color, clickHandler, displayChanged }) => {
  const { talentPoints } = useParams<URLParams>()
  const [showTooltip, set_showTooltip] = useState<boolean>(false)
  const { value, maxValue, icon, manaCost, range, castTime, cooldown, name, arrows, changed } = cellData

  const borderColor = !!color ? `2px solid ${color}` : `2px solid black`
  const cellFilter = !color ? 'grayscale(100%)' : 'none'

  // yes: value

  return (
    <div
      className={styles.cellWrapper}
      onMouseEnter={() => {
        set_showTooltip(true)
      }}
      onMouseLeave={() => {
        set_showTooltip(false)
      }}>
      <ChangedBar displayChanged={displayChanged} changed={changed} />
      <div className={styles.cellHighlight} style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/icons/border.png")` }} />
      <div
        style={{
          background: `url("https://wow.zamimg.com/images/wow/icons/medium/${icon}.jpg") 0 0 no-repeat`,
          border: borderColor,
          filter: cellFilter,
        }}
        className={styles.cellIconStyle}>
        <button
          className={styles.cellButtonStyle}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            clickHandler(i, x, y, e)
          }}
          onContextMenu={(e: React.MouseEvent<HTMLElement>) => {
            clickHandler(i, x, y, e)
          }}>
          <div className={styles.cellPointsStyle} style={{ color: color ? 'white' : '#787878' }}>
            {`${value}/${maxValue}`}
          </div>
        </button>
      </div>
      {showTooltip && <Tooltip value={cellData.value} description={cellData.description} maxValue={cellData.maxValue} valueIteration={cellData.valueIteration} manaCost={manaCost} range={range} castTime={castTime} cooldown={cooldown} name={name} />}
      {arrows &&
        arrows.map((arrow, i) => {
          return <Arrow arrowData={arrow} color={color} key={i} />
        })}
    </div>
  )
}

export default Cell
