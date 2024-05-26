import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Firebolt', 'spell_fire_firebolt', ["Reduces the Cast Time of your Imp's Fire Bolt by ", ' sec.'], 2, [[0.5, 1]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  new Talent(
    'Improved Shadow Bolt',
    'spell_shadow_shadowbolt',
    ['Your Shadow Bolt critical strikes increase the shadow damage taken by the target by ', '% until 4 non-periodic damage sources are applied. Lasts a maximum of 12 sec.'],
    5,
    [[4, 8, 12, 16, 20]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent('Aftermath', 'spell_fire_fire', ['Gives your Destruction spells a ', '% chance to daze the target for 5 sec.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Improved Lash of Pain', 'spell_shadow_curse', ["Reduces the cooldown of your Succubus' and Incubus' Lash of Pain by ", ' sec.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
]

export default tier2
