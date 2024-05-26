import { Talent } from '../data/talents/Classes'
import { SpecDataType } from '../types/'

// organizing & displaying data
export const gridMaker = (spec: (Talent | null)[][]) => {
  const grid: Talent[][] | null[][] = []
  for (let x = 0; x < 7; x++) {
    grid.push([])
    for (let y = 0; y < 4; y++) {
      grid[x][y] = spec[x][y]
    }
  }
  return grid
}

export const talentCalcMaker = (classTalent: SpecDataType[]) => {
  const talentTrees = []
  for (let i = 0; i < 3; i++) {
    talentTrees.push(gridMaker(classTalent[i].talents))
  }
  return talentTrees
}

export const specMaker = (classTalent: SpecDataType[]) => {
  const specNames: string[] = []
  const specIcons: string[] = []
  for (let i = 0; i < 3; i++) {
    specNames.push(classTalent[i].spec)
    specIcons.push(classTalent[i].icon)
  }
  return { specNames, specIcons }
}
