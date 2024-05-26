import { Talent } from '../../Classes'

export default [
  new Talent(
    'Pathfinding',
    'ability_mount_jungletiger',
    ['Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ', '% and increases the outdoor movement speed of your pets by ', '%.'],
    2,
    [
      [3, 6],
      [15, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Fervor', 
    'ability_druid_healinginstincts', 
    ['Restore 100 focus to your pet.'], 
    1, 
    [[]], 
    null, 
    null, 
    '100 yd range', 
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
  new Talent(
    'Unleashed Fury', 
    'ability_bullrush', 
    ['Increases the damage done by your pets by ', '%.'], 
    5, 
    [[4, 8, 12, 16, 20]]
  ),
  null,
]
