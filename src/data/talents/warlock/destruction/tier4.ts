import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Intensity',
    'spell_fire_lavaspawn',
    ['Gives you a ', '% chance to avoid interruption caused by damage while casting Rain of Fire, Hellfire or Soul Fire.'],
    2,
    [[35, 70]],
    [{ x: null, y: null }],
    [{ x: 4, y: 0 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Destructive Reach', 'spell_shadow_corpseexplode', ['Increases the range of your Destruction spells by ', '%.'], 2, [[10, 20]]),
  null,
  new Talent('Improved Searing Pain', 'spell_fire_soulburn', ['Increases the critical strike chance of your Searing Pain spell by ', '%.'], 3, [[4, 7, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
]

export default tier4
