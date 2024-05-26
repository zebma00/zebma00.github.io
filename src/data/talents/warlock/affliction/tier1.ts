import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Suppression', 'spell_shadow_unsummonbuilding', ['Reduces the chance for enemies to resist your Affliction spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Improved Corruption', 'spell_shadow_abominationexplosion', ['Reduces the cast time of your Corruption spell by ', ' sec.'], 5, [[0.4, 0.8, 1.2, 1.6, 2]]),
  null,
]

export default tier1
