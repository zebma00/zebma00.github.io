import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Improved Weapon Totems',
    'spell_fire_enchantweapon',
    ['Causes your Windfury Totem effect to also increase attack speed by ', '% and your Flametongue Totem effect to also increase spell damage by ', '%.'],
    2,
    [
      [2, 4],
      [2, 4],
    ],
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
      isMoved: false,
    }
  ),
  new Talent(
    'Elemental Weapons',
    'spell_fire_flametounge',
    [
      <>
        Grants an additional effect to your weapon enhancements. <br />
        <br />
        Rockbiter: reduces physical damage taken by{' '}
      </>,
      <>
        %. <br />
        <br />
        Windfury: increases attack speed by{' '}
      </>,
      <>
        %. <br />
        <br />
        Flametongue: increases spell damage by{' '}
      </>,
      <>
        %. <br />
        <br />
        Frostbrand: reduces the mana cost of your spells by{' '}
      </>,
      '%.',
    ],
    3,
    [
      [4, 7, 10],
      [4, 7, 10],
      [4, 7, 10],
      [4, 7, 10],
    ],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Totemic Fury',
    'spell_fire_totemofwrath',
    ['Your critical strikes with melee attacks increase the effect of your totems that affect friendly targets by 30% for 8 sec and reduce the cooldown of your totems that are on cooldown by 1 sec.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  null,
]

export default tier5
