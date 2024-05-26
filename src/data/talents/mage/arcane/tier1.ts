import { Talent } from '../../Classes'

const tier1 = [
  new Talent(
    'Arcane Sublety',
    'spell_holy_dispelmagic',
    ["Reduces your target's resistance to all your spells by ", ' and reduces the threat caused by your arcane spells by ', '%.'],
    2,
    [
      [5, 10],
      [20, 40],
    ]
  ),
  new Talent('Arcane Focus', 'spell_holy_devotion', ['Reduces the chance that the opponent can resist your Arcane spells by ', '%.'], 5, [
    [2, 4, 6, 8, 10],
  ]),
  new Talent(
    'Improved Arcane Missiles',
    'spell_nature_starfall',
    ['Gives you a ', '% chance to avoid interruption caused by damage while channeling Arcane Missiles.'],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  null,
]

export default tier1
