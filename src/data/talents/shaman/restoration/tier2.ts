import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Improved Reincarnation',
    'spell_nature_reincarnation',
    ['Reduces the cooldown of your reincarnation spell by ', ' min and increases the amount of health and mana you reincarnate with by an additional ', '%.'],
    2,
    [
      [10, 20],
      [10, 20],
    ]
  ),
  new Talent('Ancestral Healing', 'spell_nature_undyingstrength', ['Increases your targets armor value by ', '% for 15 sec after getting a critical effect from one of your healing spells.'], 3, [
    [8, 16, 25],
  ]),
  new Talent('Totemic Focus', 'spell_nature_moonglow', ['Reduces the mana cost of your totems by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent('Spiritual Blessing', 'spell_nature_natureblessing', ['Increases your healing received by ', '%.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier2
