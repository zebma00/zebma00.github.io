import classTalents from '../data/talents'
import { Talent } from '../data/talents/Classes'

export type ClassTalentType = (Talent | null)[][][]

export type ClassSpecType = (Talent | null)[][]

export type SpecDataType = {
  spec: string
  icon: string
  talents: (Talent | null)[][]
}

export type GridDataType = Talent[][]

export type RequiredType = {
  x: number | null
  y: number | null
}[]

export type PatchNotesContent = {
  title: string
  content: string
}

export type Stats = {
  armor: number
  stamina: number
  intellect: number
  strength: number
  agility: number
  spirit: number
}

export type PlayerClassParam = keyof typeof classTalents

export type URLParams = { playerClass: PlayerClassParam; talentPoints: string }
