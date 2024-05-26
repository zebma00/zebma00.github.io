import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Elemental Focus',
    'spell_shadow_manaburn',
    ['After landing a critical strike with a Fire, Frost or Nature damage spell, you enter a Clearcasting state. The Clearcasting state reduces the mana cost of your next 2 damage spells by 40%.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Reverberation', 'spell_frost_frostward', ['Reduces the cooldown of your Shock spells by ', ' sec.'], 5, [[0.2, 0.4, 0.6, 0.8, 1]]),
  new Talent(
    'Call of Thunder',
    'spell_nature_callstorm',
    ['Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ', '%.'],
    5,
    [[1, 2, 3, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  new Talent('Ice and Fire', 'spell_fire_masterofelements', ['Increases critical strike chance and damage of your Fire and Frost spells and effects by ', '%.'], 5, [[1, 2, 3, 4, 5]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier3
