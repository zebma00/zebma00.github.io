import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Healing Way',
    'classic_spell_nature_healingway',
    ['Your Healing Wave spell has a ', '% chance to increase the effect of subsequent Healing Waves on that target by 6% for 15 sec. This effect stacks up to 3 times.'],
    3,
    [[33, 66, 100]]
  ),
  null,
  new Talent("Nature's Swiftness", 'spell_nature_ravenform', ['When activated, your next Nature spell becomes an instant cast spell.'], 1, [[]], null, null, null, null, 'Instant', '3 min cooldown'),
  null,
]

export default tier5
