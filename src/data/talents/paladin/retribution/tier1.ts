import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Improved Blessing of Might', 'spell_holy_fistofjustice', ['Increases the effect of your Blessing of Might by ', '%.'], 5, [[4, 8, 12, 16, 20]]),
  new Talent('Benediction', 'spell_frost_windwalkon', ['Decreases the chance your Seals will be dispelled by ', '%.'], 5, [[15, 30, 45, 60, 75]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
]

export default tier1
