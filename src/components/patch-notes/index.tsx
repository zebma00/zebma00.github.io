import React from 'react'

import Section from './section'
import patchNotes from '../../data/patch-notes'
import styles from './index.module.css'

const PatchNotes: React.FC = () => {
	return (
		<div className={styles.patchNotes}>
			<h2>{patchNotes.title}</h2>
			{patchNotes.sections.map((section, index) => (
				<Section key={index} content={section} />
			))}
		</div>
	)
}

export default PatchNotes
