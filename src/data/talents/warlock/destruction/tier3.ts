import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Shadowburn',
    'spell_shadow_scourgebuild',
    ['Reagents: Soul Shard. Instantly blasts the target for 91 to 104 shadow damage. If the target dies within 5 sec and yields experience or honor, gain a Soul Shard.'],
    1,
    [[]],
    null,
    null,
    '105 Mana',
    '20 yd range',
    'Instant',
    '15 sec cooldown'
  ),
  new Talent(
    'Improved Soul Fire',
    'spell_fire_fireball02',
    ['Critical strikes from your Fire spells have a ', '% chance to increase the damage of your next Soul Fire by 10% and increase the cast time by 0.2 sec. This effect stacks up to 10 times.'],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent('Devastation', 'spell_fire_flameshock', ['Increases the critical strike chance of your Destruction spells by ', '%.'], 5, [[1, 2, 3, 4, 5]], [{ x: null, y: null }], [{ x: 4, y: 2 }], null, null, null, null, ['D2']),
  null,
]

export default tier3
