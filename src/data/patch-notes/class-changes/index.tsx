import druid from './classes/druid'
import hunter from './classes/hunter'
import hunterPets from './classes/hunter-pets'
import mage from './classes/mage'
import paladin from './classes/paladin'
import priest from './classes/priest'
import rogue from './classes/rogue'
import shaman from './classes/shaman'
import warlock from './classes/warlock'
// import warlockDemons from './classes/warlock-demons'
import warrior from './classes/warrior'

export default {
  title: 'Class changes',
  note: 'The aim of these class changes is to add diversity and improve specs that are lacking in certain areas of the game. Additionaly, some underused or awkward abilities are targeted to make them more interesting.',
  content: [druid, hunter, hunterPets, mage, paladin, priest, rogue, shaman, warlock, warrior],
}
