import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Improved Cleave', 'ability_warrior_cleave', ['Reduces the rage cost of your Cleave ability by ', '.'], 2, [[2, 4]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Piercing Howl', 'spell_shadow_deathscream', ['Causes enemies within 20 yards of the warrior to be dazed, slowing them by 50% for 6 sec.'], 1, [[]], null, null, '10 Rage', null, 'Instant'),
  new Talent('Blood Craze', 'spell_shadow_summonimp', ['Regenerate ', '% of your total health over 6 sec after being the victim of a critical strike.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Improved Battle shout', 'ability_warrior_battleshout', ['Increases the melee attack power bonus of your Battle Shout by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
]

export default tier3
