import { Talent } from '../../Classes'

const tier4 = [
  null,
  new Talent(
    'Improved Fade',
    'spell_magic_lesserinvisibilty',
    ['Reduces the cooldown of your Fade spell by ', ' sec and reduces your threat generated while fade is active by ', '%.'],
    2,
    [
      [3, 6],
      [15, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Shadow Reach', 'spell_shadow_chilltouch', ['Increases the range of your Shadow damage spells by ', '%.'], 3, [[6, 13, 20]]),
  new Talent(
    'Shadow Weaving',
    'spell_shadow_blackplague',
    ['Your Shadow damage spells have a ', '% chance to cause the target to become vulnerable to Shadow damage, increasing Shadow damage taken by 3%. This effect stacks up to 5 sec. Lasts 15 sec.'],
    5,
    [[20, 40, 60, 80, 100]]
  ),
]

export default tier4
