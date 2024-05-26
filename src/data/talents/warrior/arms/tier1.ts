import { Talent } from '../../Classes'

const tier1 = [
  new Talent('Improved Heroic Strike', 'ability_rogue_ambush', ['Reduces the cost of your Heroic Strike by ', ' rage points.'], 3, [[1, 2, 3]]),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent('Improved Rend', 'ability_gouge', ['Increases the damage bleed damage done by your Rend ability by ', '%.'], 3, [[15, 25, 35]], [{ x: null, y: null }], [{ x: 2, y: 2 }], null, null, null, null, ['D2']),
  null,
]

export default tier1
