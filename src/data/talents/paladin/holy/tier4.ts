import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Sacred Seals', 'spell_holy_divinepurpose', ['Increases the effect of your Seal and Judgement of Light and Seal and Judgement of Wisdom spells by ', '%.'], 2, [[10, 20]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent(
    'Illumination',
    'spell_holy_greaterheal',
    ['After getting a critical effect from your Flash of Light, Holy Light or Holy Shock spell, gives you a ', '% chance to gain mana equal to the base cost of the spell.'],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: null, y: null }],
    [{ x: 4, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Improved Blessing of Wisdom', 'spell_holy_sealofwisdom', ['Increases the effect of your Blessing of Wisdom spell by ', '%.'], 2, [[10, 20]]),
  null,
]

export default tier4
