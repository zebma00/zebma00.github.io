import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Serpent Sting', 'ability_hunter_quickshot', ['Increases the damage done by your Serpent Sting by ', '%.'], 3, [[4, 7, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Mortal Shots', 'ability_piercedamage', ['Increases your ranged critical strike damage bonus by ', '%.'], 5, [[6, 12, 18, 24, 30]], [{ x: 1, y: 2 }]),
  null,
]
