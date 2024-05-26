import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Blessed Resilience', 'spell_holy_blessedresillience', ['Critical hits against you have a ', '% chance to prevent you from being critically hit again for 6 sec.'], 3, [[20, 40, 60]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent('Spiritual Healing', 'spell_nature_moonglow', ['Increases the amount healed by your healing spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier6
