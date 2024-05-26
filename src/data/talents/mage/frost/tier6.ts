import { Talent } from '../../Classes'

const tier6 = [
  null,
  null,
  new Talent(
    "Winter's Chill",
    'spell_frost_chillingblast',
    ['Gives your Frost spells a ', "% chance to apply the Winter's Chill effect, which increases the critical strike chance of Frost spells by 2%. This effect stacks up to 5 times and lasts 15 sec."],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  null,
]

export default tier6
