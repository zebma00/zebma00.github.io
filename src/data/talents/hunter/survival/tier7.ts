import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Wyvern Venom',
    'spell_nature_nullifypoison',
    ['When activated, your next succesful melee or ranged attack causes the target to fall asleep for 12 sec. Any damage will cancel the effect. When the target wakes up, the venom causes 500 damage over 12 sec.'],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '115 Mana',
    null,
    'Instant',
    '2 min cooldown',
    null,
    { 
      isNew: true, 
      isChanged: false, 
      isMoved: false 
    }
  ),
]
