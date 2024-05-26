import { Talent } from '../../Classes'

export default [
	new Talent(
		'Improved Feign Death',
		'ability_rogue_feigndeath',
		[
			'Reduces the cooldown of your Feign Death by ',
			' sec and reduces the chance your Feign Death is resisted by ',
			'%.',
		],
		2,
		[
			[2, 4],
			[2, 4],
		],
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
	new Talent(
		'Surefooted',
		'ability_kick',
		['Increases hit chance by ', '% and increases the chance you resist movement impairing efects by ', '%.'],
		3,
		[
			[1, 2, 3],
			[5, 10, 15],
		]
	),
	null,
	null,
]
