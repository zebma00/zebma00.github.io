import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Heightened Senses', 'ability_ambush', ['Increases your stealth detection and reduces your chance to be hit by spells and ranged attacks by ', '%.'], 2, [[2, 4]]),
  new Talent(
    'Preperation',
    'spell_shadow_antishadow',
    ['When activated, this ability finishes the cooldown of your other cooldown abilites.'],
    1,
    [[]],
    null,
    [{ x: 6, y: 1 }],
    null,
    null,
    'Instant',
    '10 min cooldown',
    ['D2']
  ),
  new Talent('Dirty Deeds', 'spell_shadow_summonsuccubus', ['Reduces the Energy cost of your Cheap Shot and Garrote abilites by ', '.'], 2, [[10, 20]]),
  new Talent(
    'Hemorrhage',
    'spell_shadow_lifedrain',
    [
      'An instant strike that damages the opponent and causes the target to hemorrhage, increasing any physical damage dealt to the target by up to 25. Lasts 10 charges or 10 sec. Awards 1 combo points.',
    ],
    1,
    [[]],
    [{ x: 3, y: 2 }],
    null,
    '35 Energy',
    'Melee Range',
    'Instant',
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
]

export default tier5
