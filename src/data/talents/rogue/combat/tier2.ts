import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Backstab', 'ability_backstab', ['Increases the critical strike chance of your Backstab ability by ', '%.'], 3, [[10, 20, 30]]),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 5, [[1, 2, 3, 4, 5]], null, [{ x: 2, y: 1 }], null, null, null, null, ['D1']),
  new Talent('Precision', 'ability_marksmanship', ['Increases your chance to hit with melee weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]], [{ x: null, y: null }], [{ x: 3, y: 2 }], null, null, null, null, ['D2']),
  new Talent(
    'Brutal Assault',
    'spell_shadow_deathpact',
    ['When you add a combo point using a different ability from your previously added combo point, you have a ', '% chance to regain the energy cost.'],
    2,
    [[15, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier2
