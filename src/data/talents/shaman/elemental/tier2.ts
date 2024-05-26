import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    "Earth's Grasp",
    'spell_nature_stoneclawtotem',
    ['Increases the health of your Stoneclaw Totem by ', '% and the radius of your Earthbind Totem by ', '%.'],
    2,
    [
      [25, 50],
      [20, 40],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent('Spiritual Warding', 'spell_nature_spiritarmor', ['Reduces the damage taken from Frost, Fire and Nature spells and effects by ', '%.'], 3, [[4, 7, 10]]),
  new Talent('Call of Flame', 'spell_fire_immolation', ['Increases damage done by your Fire Totems by ', '%.'], 3, [[5, 10, 15]]),
  null,
]

export default tier2
