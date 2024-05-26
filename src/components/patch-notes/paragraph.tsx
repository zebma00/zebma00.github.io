import React from 'react'

import styles from './index.module.css'

interface ParagraphProps {
  title: string
  content: string[]
  note?: string
}

const Paragraph: React.FC<ParagraphProps> = ({ title, content, note }) => {
  return (
    <div className={styles.paragraph}>
      <h4>{title}</h4>
      {note && <p>{note}</p>}
      <ul>
        {content.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default Paragraph
