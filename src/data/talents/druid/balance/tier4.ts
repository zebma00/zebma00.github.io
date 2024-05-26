import { Talent } from '../../Classes'

const tier4 = [
  null,
  new Talent('Vengeance', 'spell_nature_purge', ['Increases the critical strike damage bonus of your Starfire, Moonfire and Wrath by ', '%.'], 5, [[20, 40, 60, 80, 100]], [{ x: 1, y: 1 }]),
  new Talent(
    'Celestial Focus',
    'spell_arcane_starfire',
    ['Gives you Starfire a ', "% chance to stun the target for 3 sec and increases the chance you'll resist spell interruption when casting your Wrath spell by ", '%.'],
    2,
    [
      [8, 15],
      [35, 70],
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
]

export default tier4
