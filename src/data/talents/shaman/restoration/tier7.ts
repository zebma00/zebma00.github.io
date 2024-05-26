import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Torrent Totem',
    'ability_shaman_multitotemactivation',
    ["Summons a Torrent Totem at the feet of the caster with health equal to 30% of the Shaman's health for 12 sec that restores 170 mana and health to all party members within 30 yards every 3 sec."],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    null,
    '20 Mana',
    null,
    'Instant',
    '5 min cooldown',
    null,
    { isChanged: false, isMoved: false, isNew: true }
  ),
  null,
  null,
]

export default tier7
