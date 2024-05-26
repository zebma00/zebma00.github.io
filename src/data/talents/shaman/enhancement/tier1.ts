import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Ancestral Knowledge', 'spell_shadow_grimward', ['Increases your maximum mana by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent('Shield Specialization', 'inv_shield_06', ['Increases your chance to block attacks with a shield by ', '% and increases the amount blocked by ', '%.'], 5, [
    [1, 2, 3, 4, 5],
    [5, 10, 15, 20, 15],
  ]),
  null,
]

export default tier1
