import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Holy Shield',
    'spell_holy_blessingofprotection',
    [
      'Increases chance to block by 30% for 10 sec, and deals 65 Holy damage for each attack blocked while active. Damage caused by Holy Shield causes 20% additional threat. Each block expends a charge. 4 charges.',
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '150 Mana',
    null,
    'Instant',
    '10 sec cooldown'
  ),
]

export default tier7
