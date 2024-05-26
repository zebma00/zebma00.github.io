import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Ruthlessness', 'ability_druid_disembowel', ['Gives your finishing moves a ', '% chance to add a combo point to the target.'], 3, [[20, 40, 60]]),
  new Talent('Murder', 'spell_shadow_deathscream', ['Increases all damage done to Humanoid, Dragonkin, Beast and Giant targets by ', '%.'], 2, [[1, 2]]),
  null,
  new Talent('Improved Slice and Dice', 'ability_rogue_slicedice', ['Increases the duration of your Slice and Dice by ', '%.'], 3, [[15, 30, 45]]),
]

export default tier2
