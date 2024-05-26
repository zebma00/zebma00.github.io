import { Talent } from '../../Classes'

const tier6 = [
  null,
  new Talent('Arcane Instability', 'spell_shadow_teleport', ['Increases your spell damage and critical strike chance by ', '%.'], 3, [[1, 2, 3]], [{ x: 4, y: 1 }], [{ x: 6, y: 1 }], null, null, null, null, ['D1']),
  new Talent('Arcanist', 'spell_arcane_arcanepotency', ['Increases the damage done by your Arcane spells by ', '%.'], 3, [[3, 6, 9]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
]

export default tier6
