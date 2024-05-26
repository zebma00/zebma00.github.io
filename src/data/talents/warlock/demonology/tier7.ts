import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Soul Link',
    'spell_shadow_gathershadows',
    ['While active, 30% of all damage taken by the Warlock is transferred to the active demon. In addition, both the Warlock and the demon cause 3% more damage. Active as long as a demon is active.'],
    1,
    [[]],
    [{ x: 5, y: 1 }],
    null,
    '20% of base mana',
    '100 yd range',
    'Instant'
  ),
  new Talent(
    'Improved Master Demonologist',
    'spell_shadow_shadowpact',
    ['Grants party members within 30 yards ', '% of your active Master Demonologist effect.'],
    2,
    [[25, 50]],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
]

export default tier7
