import { Talent } from '../../Classes'

const tier1 = [
  new Talent('Improved Eviscerate', 'ability_rogue_eviscerate', ['Increases the damage done by your Eviscerate ability by ', '%.'], 3, [[5, 10, 15]]),
  new Talent(
    'Remorseless Attacks',
    'ability_fiegndead',
    ['After killing an opponent that yields experience or honor, gives you a ', '% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike. Lasts 20 sec.'],
    2,
    [[20, 40]]
  ),
  new Talent('Malice', 'ability_racial_bloodrage', ['Increases your critical strike chance by ', '%.'], 5, [[1, 2, 3, 4, 5]], [{ x: null, y: null }], [{ x: 2, y: 2 }], null, null, null, null, ['D2']),
  null,
]

export default tier1
