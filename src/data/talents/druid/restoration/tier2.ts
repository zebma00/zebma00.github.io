import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Healing Touch', 'spell_nature_healingtouch', ['Reduces the cast time of your Healing Touch spell by ', ' sec.'], 5, [[0.1, 0.2, 0.3, 0.4, 0.5]], [{ x: null, y: null }], [{ x: 4, y: 0 }], null, null, null, null, ['D3']),
  new Talent("Nature's Focus", 'spell_nature_healingwavegreater', ['Gives you a ', '% chance to avoid interruption caused by damage while casting your Healing Touch, Regrowth and Tranquility spells.'], 5, [[14, 28, 42, 56, 70]]),
  new Talent('Improved Rejuvenation', 'spell_nature_rejuvenation', ['Increases the effect of your Rejuvenation spell by ', '%.'], 3, [[5, 10, 15]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  null,
]

export default tier2
