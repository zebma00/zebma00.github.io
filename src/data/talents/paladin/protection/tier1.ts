import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Improved Devotion Aura', 'spell_holy_devotionaura', ['Increases the armor bonus of your Devotion Aura by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent(
    'Redoubt',
    'ability_defend',
    ['Gives you a ', '% chance to increase your chance to block by 30% after being the victim of a critical strike or parrying an attack. Lasts 10 sec or 5 blocks.'],
    5,
    [[10, 20, 30, 40, 50]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2'],
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
]

export default tier1
