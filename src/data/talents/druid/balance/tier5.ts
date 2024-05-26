import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Celestial Spark',
    'ability_druid_dreamstate',
    ['Gives your Starfire hits a ', '% and your Wrath and Moonfire hits a ', '% chance to reduce the cooldown of your Barkskin and Hurricane spells by 2 sec.'],
    2,
    [
      [50, 100],
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
  new Talent(
    "Nature's Grace",
    'spell_nature_naturesblessing',
    ['All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.'],
    1,
    [[1]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Moonglow', 'spell_nature_sentinal', ['Reduces the mana cost of your Starfire, Moonfire, Wrath, Healing Touch, Rejuvenation and Regrowth spells by ', '%.'], 3, [[3, 6, 9]]),
  null,
]

export default tier5
