import React from 'react'
import { Link } from 'react-router-dom'

import styles from './nav-bar.module.css'

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBar}>
      <Link className={styles.navLink} to={location => ({ ...location, pathname: '/tc/druid' })}>
        Talent Calculator
      </Link>
      <Link className={styles.navLink} to='/patch-notes'>
        Patch notes
      </Link>
      {/* <Link className={styles.navLink} to='/items'>
        Example Items
      </Link> */}
    </div>
  )
}

export default NavBar
