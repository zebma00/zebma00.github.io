import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Dual Wield Specialization', 'ability_dualwield', ['Increases the damage done by your off-hand weapon by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent('Improved Execute', 'inv_sword_48', ['Reduces the Rage cost of your Execute by ', '.'], 2, [[2, 5]]),
  new Talent(
    'Enrage',
    'spell_shadow_unholyfrenzy',
    ['Gives you a ', '% damage increase for 12 sec or a maximum of 12 swings after being the victim of a critical strike.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Improved Slam', 'ability_warrior_decisivestrike', ['Reduces the casting time of your Slam ability by ', ' sec.'], 5, [[0.1, 0.2, 0.3, 0.4, 0.5]], null, [{ x: 4, y: 3 }], null, null, null, null, ['D1'], {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
]

export default tier4
