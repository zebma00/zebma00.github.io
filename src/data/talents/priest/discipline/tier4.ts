import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Inner Fire', 'spell_holy_innerfire', ['Increases the armor bonus of your Inner Fire spell by ', '%.'], 3, [[10, 20, 30]]),
  new Talent('Mental Agility', 'ability_hibernation', ['Reduces the mana cost of your instant cast spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
  new Talent('Improved Mana Burn', 'spell_shadow_manaburn', ['Reduces the casting time of your Mana Burn spell by ', ' sec.'], 2, [[0.5, 1]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
]

export default tier4
