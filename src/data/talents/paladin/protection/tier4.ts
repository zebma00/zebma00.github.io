import { Talent } from '../../Classes'

const tier4 = [
  null,
  new Talent('Improved Hammer of Justice', 'spell_holy_sealofmight', ['Reduces the cooldown of your Hammer of Justice spell by ', ' sec.'], 3, [[5, 10, 15]]),
  new Talent(
    'Improved Concentration Aura',
    'spell_holy_mindsooth',
    ['Increases the effect of you Concentration Aura by an additional ', '% and gives all group members effected by the aura an additional ', '% chance to resist silence and interrupt effects.'],
    3,
    [
      [5, 10, 15],
      [5, 10, 15],
    ]
  ),
  null,
]

export default tier4
