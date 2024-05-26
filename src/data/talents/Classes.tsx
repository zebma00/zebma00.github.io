import { ReactNode } from 'react'

export class Talent {
  name: string
  icon: string
  description: string[] | ReactNode[]
  value: number
  maxValue: number
  valueIteration: number[][] | string[][]
  required: {
    x: number | null
    y: number | null
  }[]
  requiring: {
    x: number | null
    y: number | null
  }[]
  manaCost: string | null
  range: string | null
  castTime: string | null
  cooldown: string | null
  arrows: string[] | null
  changed: {
    isNew: boolean
    isChanged: boolean
    isMoved: boolean
  }
  constructor(
    name: string,
    icon: string,
    description: string[] | ReactNode[],
    maxValue: number,
    valueIteration: number[][] | string[][],
    required?:
      | {
          x: number | null
          y: number | null
        }[]
      | null,
    requiring?:
      | {
          x: number | null
          y: number | null
        }[]
      | null,
    manaCost?: string | null,
    range?: string | null,
    castTime?: string | null,
    cooldown?: string | null,
    arrows?: string[] | null,
    changed?: {
      isNew: boolean
      isChanged: boolean
      isMoved: boolean
    }
  ) {
    this.name = name
    this.icon = icon
    this.description = description
    this.value = 0
    this.maxValue = maxValue
    this.valueIteration = valueIteration
    this.required = required ? required : [{ x: null, y: null }]
    this.requiring = requiring ? requiring : [{ x: null, y: null }]
    this.manaCost = manaCost ? manaCost : null
    this.range = range ? range : null
    this.castTime = castTime ? castTime : null
    this.cooldown = cooldown ? cooldown : null
    this.arrows = arrows ? arrows : null
    this.changed = changed
      ? changed
      : {
          isNew: false,
          isChanged: false,
          isMoved: false,
        }
  }
  increment() {
    if (this.value < this.maxValue) {
      this.value++
    }
  }
  decrement() {
    if (this.value > 0) {
      this.value--
    }
  }
  reset() {
    this.value = 0
  }
  setValue(value: number) {
    if (value <= this.maxValue) this.value = value
  }
}
