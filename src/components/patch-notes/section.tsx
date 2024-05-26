import React, { ReactNode, useState } from 'react'

import Paragraph from './paragraph'
import styles from './index.module.css'

interface SectionProps {
  content: {
    title: string
    note: string | ReactNode
    content: any
  }
}

function isArrayOfStrings(value: any): boolean {
  return Array.isArray(value) && value.every(item => typeof item === 'string')
}

const Section: React.FC<SectionProps> = ({ content }) => {
  const [isOpen, setOpen] = useState<boolean>(true)

  const toggleOpen = () => setOpen(!isOpen)

  const renderContent = isArrayOfStrings(content.content) ? (
    <ul>
      {content.content.map((thing: any, index: number) => (
        <li key={index}>{thing}</li>
      ))}
    </ul>
  ) : (
    content.content.map((thing: any, index: number) => <Paragraph key={index} note={thing.note} title={thing.title} content={thing.content} />)
  )

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader} onClick={toggleOpen}>
        <h3 className={styles.sectionTitle}>{content.title}</h3>
        <h3>{isOpen ? '-' : '+'}</h3>
      </div>
      {isOpen && (
        <>
          <p>{content.note}</p>
          {renderContent}
        </>
      )}
    </div>
  )
}

export default Section
