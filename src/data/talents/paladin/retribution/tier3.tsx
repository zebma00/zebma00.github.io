import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Vindication', 'spell_holy_vindication', ["Gives the Paladin's damaging melee attacks a chance to deal Holy damage and reduce the target's attributes by ", '% for 10 sec.'], 3, [[5, 10, 15]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Conviction', 'spell_holy_retributionaura', ['Increases your chance to get a critical strike with Melee weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]], [{ x: null, y: null }], [{ x: 5, y: 1 }], null, null, null, null, ['D3']),
  new Talent(
    'Seal of Command',
    'ability_warrior_innerrage',
    [
      <>
        Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one seal can be active on the paladin at a time. Lasts 30 sec. <br />
        <br /> Unleashing this Seal's energy will Judge an enemy, instantly causing 68 to 73 Holy damage, 137 to 146 if the target is stunned or incapacitated.
      </>,
    ],
    1,
    [[]],
    null,
    null,
    '65 Mana',
    null,
    'Instant'
  ),
  new Talent('Pursuit of Justice', 'spell_holy_persuitofjustice', ['Increases movement speed and mounted movement speed by ', '%. Does not stack with other movement increasing effects.'], 2, [[4, 8]]),
]

export default tier3
