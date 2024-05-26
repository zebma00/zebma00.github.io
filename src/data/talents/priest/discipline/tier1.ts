import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Unbreakable Will', 'spell_magic_magearmor', ['Increases your chance to resist Fear, Stun and Silence effects by ', '%.'], 5, [[3, 6, 9, 12, 15]]),
  new Talent('Wand Specialization', 'inv_wand_01', ['Increases your damage with wands by up to ', '% of your Spirit.'], 5, [[5, 10, 15, 20, 25]], null, null, null, null, null, null, null, { isNew: false, isChanged: true, isMoved: false }),
  null,
]

export default tier1
