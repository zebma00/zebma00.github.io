import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent(
    'Bane',
    'spell_shadow_deathpact',
    ['Reduces the casting time of your Shadow Bolt and Immolate spells by ', ' sec and your Soul Fire spell by ', ' sec.'],
    5,
    [
      [0.1, 0.2, 0.3, 0.4, 0.5],
      [0.4, 0.8, 1.2, 1.6, 2],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent('Catactlysm', 'spell_fire_windsofwoe', ['Reduces the mana cost of your Destruction spells by ', '%.'], 5, [[2, 4, 6, 8, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
]

export default tier1
