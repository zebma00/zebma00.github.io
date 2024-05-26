import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Surge of Light',
    'spell_holy_surgeoflight',
    ['Your offensive spell criticals have a ', '% chance to heal a party member within 30 yard range by 30% of the damage dealt. Prioritizes party members with low health.'],
    2,
    [[50, 100]],
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
  new Talent('Spell Warding', 'spell_holy_spellwarding', ['Reduces all spell damage taken by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent(
    'Divine Fury',
    'spell_holy_sealofwrath',
    ['Reduces the casting time of your Heal, Greater Heal, Smite and Holy Fire spells by ', ' sec.'],
    5,
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  null,
]

export default tier2
