import React from 'react'

import styles from './cell.module.css'

interface ChangedBarProps {
  changed: {
    isNew: boolean
    isChanged: boolean
    isMoved: boolean
  }
  displayChanged: {
    displayIsNew: boolean
    displayIsChanged: boolean
    displayIsMoved: boolean
  }
}

const ChangedIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return <div className={styles.changedIcon} style={{ backgroundColor: !isActive ? 'transparent' : '' }} />
}

const ChangedBar: React.FC<ChangedBarProps> = ({ changed, displayChanged }) => {
  const { isNew, isChanged, isMoved } = changed
  const { displayIsNew, displayIsChanged, displayIsMoved } = displayChanged

  // const isNewOrChanged = isNew || isChanged
  // const displayNewOrChanged = displayIsNew || displayIsChanged

  return (
    <div className={styles.changedBar}>
      <ChangedIcon isActive={isNew && displayIsNew} />
      <ChangedIcon isActive={isChanged && displayIsChanged} />
      <ChangedIcon isActive={isMoved && displayIsMoved} />
    </div>
  )
}

export default ChangedBar
