import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Bloodrage', 'ability_racial_bloodrage', ['Increases the instant Rage generated by your Bloodrage ability by ', '.'], 2, [[2, 5]], [{ x: null, y: null }], [{ x: 2, y: 0 }], null, null, null, null, ['D1']),
  null,
  new Talent(
    'Toughness',
    'spell_holy_devotion',
    ['Increases your armor value from items by ', '% and reduces the duration of movement slowing effects on you by ', '%.'],
    5,
    [
      [2, 4, 6, 8, 10],
      [10, 20, 30, 40, 50],
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
  null,
]

export default tier2
