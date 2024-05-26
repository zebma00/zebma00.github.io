import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Righteous Focus',
    'spell_holy_spiritualguidence',
    ['When activated, increases the range of your next Judgement by 20 yards and causes your next Judgement to not incur its cooldown.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    '30 sec cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    'Blessing of Protection',
    'spell_nature_lightningshield',
    [
      'Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min. In addition, when the target blocks a melee attack the attacker will take 14 Holy damage. Players may only have one Blessing on them per Paladin at any one time.',
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '60 Mana',
    '30 yd range',
    'Instant',
    null,
    ['D2']
  ),
  new Talent('Reckoning', 'spell_holy_blessingofstrength', ['Gives you a ', '% chance to gain an extra attack after being the victim of a critical strike or blocking an attack.'], 5, [[10, 20, 30, 40, 50]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
]

export default tier5
