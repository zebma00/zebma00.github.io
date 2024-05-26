import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Initiative', 'spell_shadow_fumble', ['Gives you a ', '% chance to add an additional combo point to your target when using your Ambush, Garrote or Cheap Shot ability.'], 3, [[25, 50, 75]]),
  new Talent(
    'Ghostly Strike',
    'spell_shadow_curse',
    ['A strike that deals 125% weapon damage and increases your chance to dodge by 25% and causes your attacks to ignore 25% armor for 6 sec. Awards 1 combo point.'],
    1,
    [[]],
    null,
    null,
    '40 Energy',
    'Melee Range',
    'Instant',
    '20 sec cooldown',
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Improved Ambush', 'ability_rogue_ambush', ['Increases the critical strike chance of your Ambush ability by ', '%.'], 3, [[15, 30, 45]]),
  null,
]

export default tier3
