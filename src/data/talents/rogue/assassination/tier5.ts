import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Cut to the Chase',
    'ability_rogue_cuttothechase',
    ['Your Eviscerate and Rupture have a ', '% chance to refresh the duration of your Slice and Dice.'],
    2,
    [[50, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    'Cold Blood',
    'spell_ice_lament',
    ['When activated, increases the critical strike chance of your Sinister Strike, Backstab, Ambush or Eviscerate by 100%.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    'Instant',
    '3 min cooldown',
    ['D1']
  ),
  new Talent('Improved Kidney Shot', 'ability_rogue_kidneyshot', ['While affected by your your Kidney Shot ability, the target receives an additional ', '% damage from all sources.'], 3, [[3, 6, 9]]),
  null,
]

export default tier5
