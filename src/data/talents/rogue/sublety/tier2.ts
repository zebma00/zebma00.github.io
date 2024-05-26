import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Sleight of Hand',
    'ability_rogue_feint',
    ['Reduces the chance you are critically hit by enemy melee and ranged attacks by ', '% and reduces the energy cost of your Feint by ', '.'],
    2,
    [
      [2, 4],
      [8, 15],
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
  new Talent('Elusiveness', 'spell_magic_lesserinvisibilty', ['Reduces the cooldown of you Vanish and Blind abilities by ', ' sec.'], 2, [[45, 90]]),
  new Talent('Camouflage', 'ability_stealth', ['Increases your speed while stealthed by ', '% and reduces the cooldown of your Stealth ability by ', ' sec.'], 5, [
    [3, 6, 9, 12, 15],
    [1, 2, 3, 4, 5],
  ]),
  new Talent('Bloodshed', 'ability_druid_ravage', ['Your Garrote and Rupture ticks have a ', '% chance to restore 5 energy.'], 2, [[25, 50]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier2
