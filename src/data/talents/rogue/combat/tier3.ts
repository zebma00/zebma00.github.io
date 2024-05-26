import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Endurance', 'spell_shadow_shadowward', ['Reduces the cooldown of your Evasion and Sprint abilities by ', ' sec.'], 2, [[45, 90]]),
  new Talent(
    'Riposte',
    'ability_warrior_challange',
    ["A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec."],
    1,
    [[]],
    [{ x: 1, y: 1 }],
    null,
    '10 Energy',
    'Melee range',
    'Instant',
    '6 sec cooldown'
  ),
  null,
  new Talent('Improved Sprint', 'ability_rogue_sprint', ['Gives a ', '% chance to remove all movement impairing effects when you activate your Sprint ability.'], 2, [[50, 100]]),
]

export default tier3
