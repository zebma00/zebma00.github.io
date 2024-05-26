import { Talent } from '../../Classes'

export default [
  new Talent(
    "Improved Hunter's Mark", 
    'ability_hunter_snipershot', 
    ['Causes ', "% of your Hunter's Mark ability to apply to melee attack power as well."], 
    2, 
    [[50, 100]], 
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  new Talent(
    'Improved Concussive Shot', 
    'spell_frost_stun', 
    ['Gives your Concussive Shot a ', '% chance to stun the target for 3 sec.'], 
    5, 
    [[4, 8, 12, 16, 20]]
  ),
  new Talent(
    'Efficiency', 
    'spell_frost_wizardmark', 
    ['Reduces the Mana cost of your Shots and Stings by ', '%.'], 
    5, 
    [[2, 4, 6, 8, 10]]
  ),
  null,
]
