import { Talent } from '../../Classes'

const tier1 = [
  new Talent('Healing Focus', 'spell_holy_healingfocus', ['Gives you a ', '% chance to avoid interruption caused by damage when casting any healing spell.'], 2, [[35, 70]]),
  new Talent('Improved Renew', 'spell_holy_renew', ['Increases the amount healed by your Renew spell by ', '%.'], 3, [[5, 10, 15]]),
  new Talent('Holy Specialization', 'spell_holy_sealofsalvation', ['Increases the critical effect chance of your Holy spells by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
]

export default tier1
