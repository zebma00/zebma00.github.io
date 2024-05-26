import { Talent } from '../../Classes'

export default [
  new Talent(
    'Entrapment',
    'spell_nature_stranglevines',
    ['Gives your Immolation Trap, Frost trap and Explosive Trap a ', '% chance to entrap the target, preventing them from moving for 5 sec.'],
    3,
    [[8, 16, 25]],
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
  new Talent('Savage Strikes', 'ability_racial_bloodrage', ['Increases the critical strike chance of Raptor Strike and Mongoose Bite by ', '%.'], 2, [[10, 20]]),
  new Talent('Improved Wing Clip', 'ability_rogue_trip', ['Gives your Wing Clip a ', '% to immobilize the target for 5 sec.'], 3, [[7, 14, 20]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Melee Weapon Specialization', 'inv_sword_05', ['Increases the damage you deal with melee attacks and abilities by ', '%.'], 3, [[3, 6, 9]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]
