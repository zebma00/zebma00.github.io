import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Eye for an Eye',
    'spell_holy_eyeforaneye',
    ['All spell criticals against you cause ', "% of the damage to be taken by the caster as well. The damage caused by Eye for an Eye will not exceed more than 50% of the Paladin's total health."],
    2,
    [[25, 50]]
  ),
  null,
  new Talent('Improved Retribution Aura', 'spell_holy_auraoflight', ['Increases the damage done by your Retribution Arua by ', '%.'], 2, [[25, 50]]),
  null,
]

export default tier4
