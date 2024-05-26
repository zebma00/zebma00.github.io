import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Devotion',
    'ability_racial_avatar',
    [
      <>
        Improves one of your Priest racial abilities. <br />
        <br /> Human: You gain{' '}
      </>,
      <>
        % of the mana and health burned by your Feedback. <br />
        <br />
        Dwarf: Your Chastise increases the next source of direct spell damage to the target by{' '}
      </>,
      <>
        %. <br />
        <br />
        Night Elf: Your Starfall has a{' '}
      </>,
      <>
        % chance to stun the target for 4 sec after the last tick.
        <br />
        <br />
        Troll: Your Shadowguard heals you for{' '}
      </>,
      <>
        % of the damage dealt. <br />
        <br />
        Undead: Your Touch of Weakness gains{' '}
      </>,
      <> additional charges and stacks up to </>,
      <> additional times.</>,
    ],
    2,
    [
      [50, 100],
      [25, 50],
      [50, 100],
      [25, 50],
      [1, 2],
      [1, 2],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent('Mental Strength', 'spell_nature_enchantarmor', ['Increases your maximum Mana by ', '%.'], 5, [[2, 4, 6, 8, 10]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2']),
  new Talent('Divine Spirit', 'spell_holy_divinespirit', ['Holy power infuses the target, increasing their spirit by 17.'], 1, [[]], [{ x: 2, y: 2 }], null, '70 Mana', '30 yd range', 'Instant'),
  null,
]

export default tier5
