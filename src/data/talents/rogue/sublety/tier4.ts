import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Setup',
    'spell_nature_mirrorimage',
    ['Gives you a ', '% chance to add a combo point to your current target after dodging their attack or fully resisting one of their spells. This cannot happen more than once per second.'],
    3,
    [[33, 67, 100]],
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
      isMoved: false,
    }
  ),
  new Talent('Improved Sap', 'ability_sap', ['Gives you a ', '% chance to return to stealth mode after using sap.'], 3, [[30, 60, 90]]),
  new Talent(
    'Serrated Blades',
    'inv_sword_17',
    ["Your attacks ignore an amount of your target's armor and increases the damage dealt by your rupture ability by ", '%. The amount of armor ignored increases with your level.'],
    3,
    [[10, 20, 30]],
    null,
    [{ x: 4, y: 3 }],
    null,
    null,
    null,
    null,
    ['R1D1']
  ),
  null,
]

export default tier4
