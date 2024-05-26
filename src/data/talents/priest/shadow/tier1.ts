import { Talent } from '../../Classes'

const tier1 = [
  new Talent(
    'Spirit Tap',
    'spell_shadow_requiem',
    ['Gives you a ', '% chance to gain a 100% bonus to your spirit after killing a target that yields experience or honor. For the duration, your mana will regenerate at a 50% rate while casting. Lasts 15 sec.'],
    3,
    [[33, 67, 100]],
    null,
    [{ x: 0, y: 1 }],
    null,
    null,
    null,
    null,
    ['R1'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Improved Spirit Tap', 'spell_shadow_requiem', ['Gives you a ', '% chance to gain Spirit Tap after dealing Shadow damage.'], 2, [[1, 2]], [{ x: 0, y: 0 }], null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Blackout', 'spell_shadow_gathershadows', ['Your Shadow spells have a ', '% chance to stun the target for 3 sec.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier1
