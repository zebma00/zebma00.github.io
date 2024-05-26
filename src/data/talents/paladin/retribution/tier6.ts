import { Talent } from '../../Classes'

const tier6 = [
  null,
  new Talent(
    'Vengeance',
    'ability_racial_avatar',
    ['Gives you a ', '% bonus to your physical and Holy damage and healing for 8 sec after dealing a critical strike from a weapon swing, spell, or ability.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent('Crusade', 'spell_holy_crusade', ['Your Judgement of any seal has a ', '% chance to apply Judgement of the Crusader in addition to its usual effect.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
]

export default tier6
