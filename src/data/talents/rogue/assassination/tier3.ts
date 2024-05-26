import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Relentless Strikes', 'ability_warrior_decisivestrike', ['Your Finishing Moves have a 20% chance per combo point to restore 25 energy.'], 1, [[]]),
  new Talent('Improved Expose Armor', 'ability_warrior_riposte', ['Increases the armor reduction by your Expose Armor by ', '%.'], 2, [[25, 50]]),
  new Talent(
    'Lethality',
    'ability_criticalstrike',
    ['Increases the Critical Strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike and Hemorrhage by ', '%.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 0, y: 2 }]
  ),
  null,
]

export default tier3
