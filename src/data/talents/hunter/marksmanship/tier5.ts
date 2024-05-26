import { Talent } from '../../Classes'

export default [
  new Talent(
    'Scatter Shot',
    'ability_golemstormbolt',
    ['A short-range shot that deals 50% weapon damage and disorients the target for 4 sec. Any damage caused will remove the effect. Turns off your attack when used.'],
    1,
    [[]],
    null,
    null,
    '8% of base mana',
    '15 yd range',
    '30 sec cooldown'
  ),
  new Talent(
    'Barrage', 
    'ability_upgrademoonglaive', 
    ['Increases the damage done by your Multi-Shot and Volley spells by ', '%.'], 
    3, 
    [[5, 10, 15]], 
    [{ x: null, y: null }], 
    [{ x: 6, y: 1 }], 
    null, 
    null, 
    null, 
    null, 
    ['D2']
  ),
  new Talent(
    'Improvied Scorpid Sting', 
    'ability_hunter_criticalshot', 
    ['Increases the effect of your Scorpid Sting by ', '%.'], 
    2, 
    [[1, 2]], 
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
  null,
]
