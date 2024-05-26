import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Improved Sayaad', 'ability_warlock_randomizesuccubusincubus', ["Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss by ", '% and increases the duration of Seduction and Invisibility by ', '%.'], 3, [
    [10, 20, 30],
    [10, 20, 30],
  ]),
  new Talent(
    'Fel Domination',
    'spell_nature_removecurse',
    ['Your next summon of Succubus, Incubus, Imp, Felhunter or Void Walker has its casting time reduced by 5.5 sec and Mana cost reduced by 50%.'],
    1,
    [[]],
    null,
    [{ x: 3, y: 1 }],
    null,
    null,
    'Instant',
    '15 min cooldown',
    ['D1']
  ),
  new Talent(
    'Fel Stamina',
    'spell_shadow_antishadow',
    ['Increases the Stamina of your Imp, Succubus, Incubus, Void Walker and Felhunter by ', '% and increases your maximum health by ', '%.'],
    5,
    [
      [3, 6, 9, 12, 15],
      [1, 2, 3, 4, 5],
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
  new Talent('Mana Feed', 'spell_shadow_manafeed', ['When you gain mana from any source, your active demon gains ', '% of the mana you gain.'], 3, [[20, 40, 60]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier3
