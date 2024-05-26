import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Abundance',
    'ability_druid_empoweredrejuvination',
    ['Inreases your damage over time and healing over time done by ', '% and reduces the chance these effects are dispelled by ', '%.'],
    2,
    [
      [5, 10],
      [25, 50],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  null,
  new Talent('Improved Regrowth', 'spell_nature_resistnature', ['Increases the critical effect chance of your Regrowth spell by ', '%.'], 5, [[10, 20, 30, 40, 50]]),
  null,
]

export default tier6
