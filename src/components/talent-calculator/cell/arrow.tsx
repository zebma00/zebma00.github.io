import React from 'react'

import styles from './cell.module.css'

interface ArrowProps {
  arrowData: string
  color: string | null
}

const Arrow: React.FC<ArrowProps> = ({ arrowData, color }) => {
  const yellow = color === 'rgba(255, 209, 0, 0.8)'

  if (arrowData === 'L1') {
    return (
      <div className={styles.arrowL1Wrapper}>
        <div className={styles.arrowL1}>
          <img alt='' src={yellow ? process.env.PUBLIC_URL + '/img/arrows/arrow-left-yellow.png' : process.env.PUBLIC_URL + '/img/arrows/arrow-left.png'} />
        </div>
      </div>
    )
  } else if (arrowData === 'R1') {
    return (
      <div className={styles.arrowR1Wrapper}>
        <div className={styles.arrowR1}>
          <img alt='' src={yellow ? process.env.PUBLIC_URL + '/img/arrows/arrow-right-yellow.png' : process.env.PUBLIC_URL + '/img/arrows/arrow-right.png'} />
        </div>
      </div>
    )
  } else if (arrowData === 'D1') {
    return (
      <div className={yellow ? styles.arrowD1WrapperYellow : styles.arrowD1Wrapper}>
        <div className={yellow ? styles.arrowD1Yellow : styles.arrowD1}>
          <img alt='' src={yellow ? process.env.PUBLIC_URL + '/img/arrows/arrow-down-yellow.png' : process.env.PUBLIC_URL + '/img/arrows/arrow-down.png'} />
        </div>
      </div>
    )
  } else if (arrowData === 'D2') {
    return (
      <div className={yellow ? styles.arrowD2WrapperYellow : styles.arrowD2Wrapper}>
        <div className={yellow ? styles.arrowD2Yellow : styles.arrowD2}>
          <img alt='' src={yellow ? process.env.PUBLIC_URL + '/img/arrows/arrow-down-yellow.png' : process.env.PUBLIC_URL + '/img/arrows/arrow-down.png'} />
        </div>
      </div>
    )
  } else if (arrowData === 'D3') {
    return (
      <div className={yellow ? styles.arrowD3WrapperYellow : styles.arrowD3Wrapper}>
        <div className={yellow ? styles.arrowD3Yellow : styles.arrowD3}>
          <img alt='' src={yellow ? process.env.PUBLIC_URL + '/img/arrows/arrow-down-yellow.png' : process.env.PUBLIC_URL + '/img/arrows/arrow-down.png'} />
        </div>
      </div>
    )
  } else if (arrowData === 'R1D1') {
    return (
      <>
        <div className={styles.arrowR1D1rightWrapper}>
          <div className={styles.arrowR1D1right}>
            <img alt='' src={yellow ? process.env.PUBLIC_URL + '/img/arrows/arrow-right-down-yellow.png' : process.env.PUBLIC_URL + '/img/arrows/arrow-right-down.png'} />
          </div>
        </div>
        <div className={yellow ? styles.arrowR1D1downWrapperYellow : styles.arrowR1D1downWrapper}>
          <div className={yellow ? styles.arrowR1D1downYellow : styles.arrowR1D1down}>
            <img alt='' src={yellow ? process.env.PUBLIC_URL + '/img/arrows/arrow-down-yellow.png' : process.env.PUBLIC_URL + '/img/arrows/arrow-down.png'} />
          </div>
        </div>
      </>
    )
  }
  return <></>
}

export default Arrow
