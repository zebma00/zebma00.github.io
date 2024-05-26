import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Two-Handed Weapon Specialization', 'inv_hammer_04', ['Increases the damage you deal with two-handed melee weapons by ', '%.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null),
  null,
  new Talent(
    'Holy Fervor',
    'spell_holy_blessedresillience',
    ['Your melee critical strikes refresh all Judgement effects on the target and increase the effect of Judgement effects on the target by 30% for 8 sec.'],
    1,
    [[]],
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

export default tier5
