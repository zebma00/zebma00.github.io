import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Demon Armor', 'spell_shadow_ragingscream', ['Causes your Demon Armor to also restore mana equal to ', '% the restored health.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Improved Void Walker', 'spell_shadow_summonvoidwalker', ["Increases the effect of your Void Walker's Torment, Sacrifice, Consume Shadows and Suffering spells by ", '%.'], 3, [[10, 20, 30]]),
  new Talent(
    'Fel Intellect',
    'spell_holy_magicalsentry',
    ['Increases the Intellect of your Imp, Succubus, Incubus, Void Walker and Felhunter by ', '% and increases your maximum mana by ', '%.'],
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
  new Talent('Improved Firestone', 'inv_ammo_firetar', ['Increases the bonus fire damage of your Firestone by ', '%.'], 2, [[25, 50]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
]

export default tier2
