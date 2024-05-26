import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Static Charge',
    'spell_shaman_staticshock',
    ['Your Lightning spells increase the critical strike chance of all spells made against the target by ', '%. This effect lasts 12 sec.'],
    3,
    [[1, 2, 3]],
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
  new Talent('Lightning Mastery', 'spell_lightning_lightningbolt01', ['Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ', ' sec.'], 2, [[0.25, 0.5]], [{ x: 2, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
]

export default tier6
