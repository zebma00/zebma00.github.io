import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Thunder Strike', 'spell_nature_thunderclap', ['Increases the damage of your Thunder Clap by ', '% when hitting only one target.'], 3, [[100, 200, 300]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent('Improved Hamstring', 'ability_shockwave', ['Gives your Hamstring a ', '% chance to immobilize the target for 5 sec.'], 3, [[10, 20, 30]]),
  null,
]

export default tier6
