import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Annihilation', 'ability_creature_cursed_03', ['Gives your spell critical strikes a ', '% chance to reduce the cooldown of your Soulshatter by 5 sec.'], 3, [[30, 60, 90]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent('Emberstorm', 'spell_fire_selfdestruct', ['Increases the damage done by your Fire spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier6
