import React from 'react'

import styles from './index.module.css'
import classTalents from '../../../data/talents'
import { PlayerClassParam } from '../../../types'

interface SelectWrapperProps {
  selectedClass: PlayerClassParam
  selectClass: (clickedClass: PlayerClassParam) => void
}

const SelectWrapper: React.FC<SelectWrapperProps> = ({ selectedClass, selectClass }) => {
  return (
    <div className={styles.selectWrapper}>
      {Object.keys(classTalents).map((singleClass, i: number) => {
        const isSelected = singleClass === selectedClass
        return (
          <div
            key={i}
            className={styles.iconWrapper}
            style={{
              border: isSelected ? '4px solid rgba(255, 209, 0, 0.8)' : '4px solid transparent',
              filter: isSelected ? 'none' : 'brightness(50%)',
            }}>
            <div className={styles.iconBorder} style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/icons/border.png")` }} />
            <div
              className={styles.iconClass}
              style={{
                background: `url("${process.env.PUBLIC_URL}/img/icons/${singleClass}.jpg") 0 0 no-repeat`,
              }}>
              <button
                className={styles.selectButton}
                onClick={() => {
                  selectClass(singleClass as PlayerClassParam)
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SelectWrapper
