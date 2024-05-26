import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Silence',
    'spell_shadow_impphaseshift',
    ['Silence the target, preventing them from casting spells for 5 sec.'],
    1,
    [[]],
    [
      {
        x: 1,
        y: 0,
      },
    ],
    null,
    '255 Mana',
    '20 yd range',
    'Instant',
    '45 sec cooldown'
  ),
  new Talent(
    'Vampiric Embrace',
    'spell_shadow_unsummonbuilding',
    ['Inflicts the target with Shadow energy, causing all party members to be healed by 20% of the damage you deal to the target.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [
      { x: 4, y: 2 },
      { x: 6, y: 1 },
    ],
    '40 Mana',
    '30 yd range',
    'Instant',
    '10 sec cooldown',
    ['R1', 'D2']
  ),
  new Talent(
    'Improved Vampiric Embrace',
    'spell_shadow_improvedvampiricembrace',
    ['Your Vampiric Embrace also causes party members to restore mana equal to ', '% of damage you deal to the target.'],
    2,
    [[3, 5]],
    [{ x: 4, y: 1 }],
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
  null,
]

export default tier5
