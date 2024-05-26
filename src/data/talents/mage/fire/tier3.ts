import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Incinerate',
    'spell_fire_flameshock',
    ['Increases the critical strike chance of your Scorch and Fire Blast spells by ', '%.'],
    2,
    [[2, 4]],
    null,
    [{ x: 3, y: 0 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Improved Flamestrike', 'spell_fire_selfdestruct', ['Increases the critical strike chance of your Flamestrike spell by ', '%.'], 3, [[5, 10, 15]]),
  new Talent(
    'Pyroblast',
    'spell_fire_fireball02',
    ['Hurl an immense fiery boulder that causes 148 Fire damage and an additional 56 Fire damage over 12 sec.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    '125 Mana',
    '35 yd range',
    '6 sec cast',
    null,
    ['D2']
  ),
  new Talent(
    'Burning Soul',
    'spell_fire_fire',
    ['Gives your Fire spells a ', '% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by ', '%.'],
    2,
    [
      [35, 70],
      [15, 30],
    ]
  ),
]

export default tier3
