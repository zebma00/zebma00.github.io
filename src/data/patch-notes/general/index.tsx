import world from './general/world'
// import badgeOfJustice from './general/badge-of-justice'
import heroic from './general/heroic'
import serverBalance from './general/server-balance'
import worldBuffs from './general/world-buffs'
import miscellaneous from './general/miscellaneous'

export default {
  title: 'General',
  note: 'The main goal of these proposed changes is to add diversity to World of Warcraft Classic, without trying to reinvent the game that we know and love. All QoL changes that are found in modern classic HC, as well as the new honor system are included.',
  content: [world, heroic, serverBalance, worldBuffs, miscellaneous],
}
