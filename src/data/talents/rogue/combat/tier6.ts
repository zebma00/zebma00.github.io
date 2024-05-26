import { Talent } from '../../Classes'

const tier6 = [
  null,
  new Talent('Weapon Expertise', 'spell_holy_blessingofstrength', ['Increases your skill with Swords, Maces, Daggers and Fist Weapons by ', '.'], 2, [[2, 5]], [{ x: 4, y: 1 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Aggression', 'ability_racial_avatar', ['Increases the damage of your Sinister strike and Eviscerate abilites by ', '%.'], 3, [[2, 4, 6]]),
  null,
]

export default tier6
