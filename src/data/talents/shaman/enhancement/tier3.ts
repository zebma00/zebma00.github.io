import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Enhancing Totems', 'spell_nature_earthbindtotem', ['Increases the effect of your Grace of Air and Strength of Earth Totems by ', '%'], 2, [[8, 15]]),
  null,
  new Talent('Weapon Specialization', 'inv_axe_10', ['Allows you to use Two-Handed Axes and Two-Handed Maces and allows you to parry enemy melee attacks.'], 1, [[]], null, null, null, null, null, null, null, {
    isNew: true,
    isMoved: false,
    isChanged: false,
  }),
  new Talent('Anticipation', 'spell_nature_mirrorimage', ['Increases your chance to dodge by an additional ', '%.'], 5, [[1, 2, 3, 4, 5, 6]]),
]

export default tier3
