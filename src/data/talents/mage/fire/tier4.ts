import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Hot Streak',
    'ability_mage_hotstreak',
    ['Your Fire Blast and Scorch criticals have a ', '% chance to reduce the cast time of your next Pyroblast or Flamestrike spell by 3 sec. This effect lasts 10 sec.'],
    2,
    [[25, 50]],
    [{ x: 2, y: 0 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    'Improved Scorch',
    'spell_fire_soulburn',
    ['Your Scorch spell has a ', '% chance to cause your target to be vulnerable to Fire damage. This vulnaribility increases Fire damage taken by the target by 3% and lasts 30 sec. Stacks  up to 5 times.'],
    3,
    [[33, 66, 100]]
  ),
  null,
  new Talent('Master of Elements', 'spell_fire_masterofelements', ['Your Fire and Frost spell criticals refund ', '% of their base mana cost.'], 3, [[10, 20, 30]]),
]
export default tier4
