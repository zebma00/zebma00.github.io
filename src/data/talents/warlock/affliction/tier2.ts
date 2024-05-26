import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Soul Siphon',
    'spell_shadow_lifedrain02',
    ['Increases the amount drained by your Drain Life and Drain Mana spells by an additional ', '% for each Affliction effect on the target, up to a maximum of ', '% additional effect.'],
    2,
    [
      [3, 6],
      [9, 18],
    ],
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
  new Talent(
    'Improved Drain Soul',
    'spell_shadow_haunting',
    ['Gives you a ', '% chance to increase your Mana regeneration by 100% for 10 sec if the target is killed while you drain its soul. In addition your Mana may regenerate while casting at a 50% rate.'],
    2,
    [[50, 100]]
  ),
  new Talent('Improved Life Tap', 'spell_shadow_burningspirit', ['Increases the amount of mana rewarded by your Life Tap spell by ', '%.'], 2, [[10, 20]]),
  new Talent('Eradication', 'ability_warlock_eradication', ['When you deal damage with Corruption, you have a ', '% chance to increase your spell casting speed by 20% for 10 sec.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier2
