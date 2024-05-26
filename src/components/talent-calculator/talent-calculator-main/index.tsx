import React, { useState, useEffect } from 'react'

import TCFooter from '../talent-calculator-footer'
import { ClassTalentType, PlayerClassParam, URLParams } from '../../../types/'
import { talentCalcMaker, specMaker } from '../../../lib/create-talents'
import { checkTotalPoints, rightClick, leftClick } from '../../../lib/handle-talents'
import Grid from '../grid/'
import styles from './index.module.css'
import { flattenTalents, loopTalentsFromUrl } from '../../../lib/talents-url'
import TcPatchNotes from '../tc-patch-notes'
import { useHistory, useParams } from 'react-router-dom'
import classTalents from '../../../data/talents'

interface TalentCalculatorMainProps {
  selectedClass: PlayerClassParam
  displayChanged: {
    displayIsNew: boolean
    displayIsChanged: boolean
    displayIsMoved: boolean
  }
}

const TalentCalculatorMain: React.FC<TalentCalculatorMainProps> = ({ selectedClass, displayChanged }) => {
  const history = useHistory()
  const { playerClass, talentPoints } = useParams<URLParams>()
  const [talentData, setTalentData] = useState<ClassTalentType | null>(talentCalcMaker(classTalents[selectedClass].specs))
  const [specNames, setSpecNames] = useState<string[] | null>(specMaker(classTalents[selectedClass].specs).specNames)
  const [specIcons, setSpecIcons] = useState<string[] | null>(specMaker(classTalents[selectedClass].specs).specIcons)

  useEffect(() => {
    const flatTalents = flattenTalents(talentData).filter(talent => talent)
    if (!flatTalents || !talentPoints || flatTalents.length !== talentPoints.length) return

    history.replace(`/tc/${playerClass}/${talentPoints}`)
    const newTalents = loopTalentsFromUrl(talentData, talentPoints)
    setTalentData(newTalents)
  }, [talentPoints, talentData, history, playerClass])

  useEffect(() => {
    setTalentData(talentCalcMaker(classTalents[selectedClass].specs))
    const { specNames, specIcons } = specMaker(classTalents[selectedClass].specs)
    setSpecNames(specNames)
    setSpecIcons(specIcons)
  }, [selectedClass])

  const clickHandler = (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (!!talentPoints) return

    const newData = [...talentData!]

    if (e.type === 'click') {
      const canLeftClick = leftClick(newData, i, x, y)
      canLeftClick && newData[i][x][y]!.increment()
    } else if (e.type === 'contextmenu') {
      const canRightClick = rightClick(newData, i, x, y)
      canRightClick && newData[i][x][y]!.decrement()
    }
    setTalentData(newData)
  }

  const resetTree = (i: number) => {
    const newData = [...talentData!]
    newData[i].forEach(row => {
      row.forEach(cell => {
        if (cell) {
          cell.reset()
        }
      })
    })
    setTalentData(newData)
  }

  const resetPoints = () => {
    history.replace(`/tc/${playerClass}/`)
    const newData = [...talentData!]
    newData.forEach(grid => {
      grid.forEach(row => {
        row.forEach(cell => {
          if (cell) {
            cell.reset()
          }
        })
      })
    })
    setTalentData(newData)
  }

  const pointsLeft = 51 - checkTotalPoints(talentData!)!

  return (
    <>
      <div className={styles.tcContainer}>
        {talentData?.map((gridData: any, i: number) => {
          return <Grid displayChanged={displayChanged} key={i} i={i} gridData={gridData} pointsLeft={pointsLeft!} selectedClass={selectedClass} specName={specNames![i]} specIcon={specIcons![i]} clickHandler={clickHandler} resetTree={resetTree} />
        })}
        <TcPatchNotes selectedClass={selectedClass} />
      </div>
      <TCFooter pointsLeft={pointsLeft} resetPoints={resetPoints} selectedClass={selectedClass} talentData={talentData} />
    </>
  )
}

export default TalentCalculatorMain
