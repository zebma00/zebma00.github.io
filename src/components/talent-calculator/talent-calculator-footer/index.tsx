import React, { useState } from 'react'

import { capitalizer, getClassColor } from '../../../lib/ui-utils'
import { checkPointsPerTree } from '../../../lib/handle-talents'
import styles from './index.module.css'
import { getFlattenedTalentValues } from '../../../lib/talents-url'
import { PlayerClassParam } from '../../../types'

interface TCFooterProps {
  pointsLeft: number
  resetPoints: () => void
  selectedClass: PlayerClassParam
  talentData: any
}

const TCFooter: React.FC<TCFooterProps> = ({ pointsLeft, resetPoints, selectedClass, talentData }) => {
  const [isShareClicked, setIsShareClicked] = useState<boolean>(false)
  const pointsPerTree = talentData && talentData.map((spec: any) => checkPointsPerTree(spec))
  const renderPoints = talentData ? `(${pointsPerTree[0]}/${pointsPerTree[1]}/${pointsPerTree[2]})` : '(0/0/0)'
  const classColor = getClassColor(selectedClass)

  const handleShareTime = () => {
    setIsShareClicked(true)
    setTimeout(() => setIsShareClicked(false), 5000)
  }

  const shareBuild = async () => {
    const flattenedString = getFlattenedTalentValues(talentData).toString().replace(/,/g, '')
    const baseUrl = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'localhost:3000/tc-ts#/tc/' : 'https://djimovanberlo.github.io/tc-ts/#/tc/'
    const url = baseUrl + selectedClass + '/' + flattenedString

    if ('clipboard' in navigator) {
      handleShareTime()
      return await navigator.clipboard.writeText(url)
    } else {
      handleShareTime()
      return document.execCommand('copy', true, url)
    }
  }

  return (
    <div className={styles.tcFooter}>
      <b>
        <span style={{ color: classColor }}>{capitalizer(selectedClass)}</span> {renderPoints}
      </b>
      <span onClick={resetPoints} className={styles.reset}>
        &#x2715;
      </span>
      <div>Points left: {pointsLeft}</div>
      <div>
        <span>{isShareClicked ? 'Copied to clipboard!' : 'Share talent build'}</span>
        <span onClick={shareBuild} className={styles.share}>
          &#10150;
        </span>
      </div>
    </div>
  )
}

export default TCFooter
