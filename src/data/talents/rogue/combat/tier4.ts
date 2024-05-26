import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Kick', 'ability_kick', ['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent('Close Quarters Combat', 'inv_weapon_shortblade_05', ['Increases your critical strike chance and critical strike damage with daggers and fist weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Dual Wield Specialization', 'ability_dualwield', ['Increases the damage of your off-hand weapon by ', '%.'], 5, [[10, 20, 30, 40, 50]], [{ x: 1, y: 2 }]),
  new Talent('Blade Twisting', 'ability_rogue_bladetwisting', ['Gives your Sinister Strike, Backstab, Gouge and Hemorrhage abilities a ', '% chance to Daze the target for 8 sec.'], 2, [[10, 20]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier4
