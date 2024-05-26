import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Aspect of the Hawk', 'spell_nature_ravenform', ['While Aspect of the Hawk is active, all normal ranged attacks have a ', '% chance to increase your ranged attack speed by 30% for 12 sec.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent(
    'Improved Aspect of the Monkey',
    'ability_hunter_aspectofthemonkey',
    ['While Aspect of the Money is active, all normal melee attacks have a ', '% chance to increase your critical strike chance with melee attacks by 10% for 8 sec.'],
    5,
    [[2, 4, 6, 8, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  null,
]
