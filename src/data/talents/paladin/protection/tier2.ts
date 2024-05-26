import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Holy Guidance', 'ability_rogue_ambush', ['Increases your chance to hit with melee attacks and spells by ', '%.'], 3, [[1, 2, 3]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent(
    "Guardian's Favor",
    'spell_holy_sealofprotection',
    ['Reduces the cooldown of your Blessing of Protection by  ', ' sec and increases the duration of your Blessing of Freedom by ', ' sec.'],
    2,
    [
      [60, 120],
      [3, 6],
    ]
  ),
  null,
  new Talent(
    'Toughness',
    'spell_holy_devotion',
    ['Increases your armor by ', '% and reduces the duration of movement slowing effects on you by ', '%.'],
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
]

export default tier2
