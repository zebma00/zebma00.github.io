import { Talent } from '../../Classes'
//spell_holy_holyprotection
const tier5 = [
  new Talent('Blessed Surge', 'spell_holy_spellwarding', ['Gives your spell critical strikes a ', '% chance to increase your Holy damage by 20% for 8 sec.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent(
    'Divine Favor',
    'spell_holy_heal',
    ['When activated, gives your next Flash of Light, Holy Light or Holy Shock spell a 100% critical effect chance.'],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    [{ x: 6, y: 1 }],
    '4% of base mana',
    null,
    'Instant',
    '2 min cooldown',
    ['D2']
  ),
  new Talent(
    "Light's Grace",
    'spell_holy_lightsgrace',
    ['Gives your Holy Light spell a ', '% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.'],
    3,
    [[33, 67, 100]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
]

export default tier5
