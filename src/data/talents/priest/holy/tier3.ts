import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Holy Nova',
    'spell_holy_holynova',
    ['Causes an explosion of Holy light around the caster, dealing 29 to 34 Holy damage to enemies and healing allies for 54 to 63 within 10 yards. The effects cause no threat.'],
    1,
    [[]],
    null,
    null,
    '185 Mana',
    null,
    'Instant'
  ),
  new Talent('Blessed Recovery', 'spell_holy_blessedrecovery', ['After being hit by a ranged or melee critical strike, heal for ', '% of the damage taken over 8 sec.'], 3, [[8, 16, 25]]),
  new Talent('Searing Light', 'spell_holy_searinglightpriest', ['Increases the damage done by your Smite and Holy Fire spells by ', '%.'], 2, [[5, 10]], [{ x: 1, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  new Talent('Inspiration', 'spell_holy_layonhands', ["Increases the target's armor by ", '% for 8 sec after getting a critical hit with Heal, Greater Heal, Flash Heal or Prayer of Healing.'], 3, [[8, 16, 25]]),
]

export default tier3
