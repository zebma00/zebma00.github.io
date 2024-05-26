import { Talent } from '../../Classes'

const tier6 = [
  null,
  null,
  new Talent(
    'Master Demonologist',
    'spell_shadow_shadowpact',
    [
      <>
        Gives the Warlock and the summoned Demon an effect as long as the Demon is active.
        <br />
        <br />
        Imp: increases Fire damage by{' '}
      </>,
      <>
        %. <br />
        <br />
        Void Walker: Restores{' '}
      </>,
      <>
        % of total Health every 4 sec.
        <br />
        <br />
        Succubus/Incubus: increases Shadow damage by{' '}
      </>,
      <>
        %. <br />
        <br />
        Felhunter: Restores{' '}
      </>,
      '% of total Mana every 4 sec.',
    ],
    5,
    [
      [2, 4, 6, 8, 10],
      [0.8, 1.6, 2.4, 3.2, 4],
      [2, 4, 6, 8, 10],
      [0.4, 0.8, 1.2, 1.6, 2],
    ],
    [{ x: 3, y: 2 }],
    [{ x: 6, y: 2 }],
    null,
    null,
    null,
    null,
    ['D1'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
]

export default tier6
