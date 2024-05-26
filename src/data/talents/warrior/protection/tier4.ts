import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Sunder Armor', 'ability_warrior_sunder', ['Reduces the cost of your Sunder Armor by ', ' rage point.'], 3, [[1, 2, 3]]),
  new Talent(
    'Improved Disarm',
    'ability_warrior_disarm',
    ['Reduces the rage cost of your Disarm ability by ', ' and increases the duration by ', ' sec.'],
    3,
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Improved Taunt', 'spell_nature_reincarnation', ['Reduces the cooldown of your Taunt ability by ', ' sec.'], 2, [[1, 2]]),
  null,
]

export default tier4
