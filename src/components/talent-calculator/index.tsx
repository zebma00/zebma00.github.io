import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'

import SelectWrapper from './talent-calculator-select'
import TalentCalculatorMain from './talent-calculator-main/'
import styles from './index.module.css'
import ChangedSelect from './changed-select'
import { PlayerClassParam, URLParams } from '../../types'

const TalentCalculator: React.FC = () => {
  const { playerClass } = useParams<URLParams>()
  const history = useHistory()

  const selectClass = (clickedClass: PlayerClassParam) => {
    history.replace(`/tc/${clickedClass}`)
  }

  const [displayIsNew, setIsNew] = useState<boolean>(true)
  const [displayIsChanged, setIsChanged] = useState<boolean>(true)
  const [displayIsMoved, setIsMoved] = useState<boolean>(true)

  const toggleIsNew = () => setIsNew(!displayIsNew)
  const toggleIsChanged = () => setIsChanged(!displayIsChanged)
  const toggleIsMoved = () => setIsMoved(!displayIsMoved)

  const displayChanged = {
    displayIsNew,
    displayIsChanged,
    displayIsMoved,
  }

  const toggleChangedObj = {
    toggleIsChanged,
    toggleIsNew,
    toggleIsMoved,
  }

  return (
    <div className={styles.tcWrapper}>
      <SelectWrapper selectClass={selectClass} selectedClass={playerClass} />
      <ChangedSelect toggleChangedObj={toggleChangedObj} displayChanged={displayChanged} />
      <TalentCalculatorMain displayChanged={displayChanged} selectedClass={playerClass} />
    </div>
  )
}

export default TalentCalculator
