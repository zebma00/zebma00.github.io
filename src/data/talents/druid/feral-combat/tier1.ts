import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Ferocity', 'ability_hunter_pet_hyena', ['Reduces the cost of your Maul, Swipe, Claw, and Rake abilities by ', ' Rage or Energy.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent(
    'Feral Aggression',
    'classic_ability_druid_demoralizingroar',
    ['Increases the Attack Power reduction of your Demoralizing Roar by ', '% and the damage caused by your Ferocious Bite by ', '%.'],
    5,
    [
      [8, 16, 24, 32, 40],
      [3, 6, 9, 12, 15],
    ]
  ),
  null,
]

export default tier1
