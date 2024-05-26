import { Talent } from '../../Classes'

const tier4 = [
  null,
  new Talent('Holy Reach', 'spell_holy_purify', ['ncreases the range of Smite and Holy Fire and the radius of Holy Nova and Prayer of Healing by ', '%.'], 2, [[10, 20]]),
  new Talent('Spiritual Guidance', 'spell_holy_spiritualguidence', ['Increases healing and spell damage by ', '% of your total Spirit.'], 5, [[3, 6, 9, 12, 15]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  null,
]

export default tier4
