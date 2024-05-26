import React from 'react'

import exampleItems from '../../data/example-items'
import SingleItem from './single-item'
import styles from './index.module.css'

const ExampleItems: React.FC = () => {
	return (
		<div className={styles.exampleItems}>
			{exampleItems.map((item, index) => {
				const {
					name,
					img,
					quality,
					slot,
					itemType,
					damage,
					speed,
					dps,
					stats,
					description,
					playerClass,
					levelRequired,
				} = item
				return (
					<SingleItem
						key={index}
						name={name}
						img={img}
						quality={quality}
						slot={slot}
						itemType={itemType}
						damage={damage}
						speed={speed}
						dps={dps}
						stats={stats}
						description={description}
						playerClass={playerClass}
						levelRequired={levelRequired}
					/>
				)
			})}
		</div>
	)
}

export default ExampleItems
