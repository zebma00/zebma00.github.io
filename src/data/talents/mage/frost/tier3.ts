import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Piercing Ice', 'spell_frost_frostbolt', ['Increases the damage done by your Frost splls by ', '%.'], 3, [[2, 4, 6]]),
  new Talent(
    'Icy Veins',
    'spell_frost_coldhearted',
    ['Hastens your spellcasting, increasing casting speed by 20% and gives you 100% chance to avoid interruption caused by damage while casting. Lasts 20 sec.'],
    1,
    [[]],
    null,
    null,
    '3% of base mana',
    null,
    'Instant',
    '3 min cooldown',
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent('Improved Blizzard', 'spell_frost_icestorm', ["Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by ", '%. Lasts 1.5 sec.'], 3, [[30, 50, 65]]),
]
export default tier3
