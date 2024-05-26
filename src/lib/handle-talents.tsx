import { Talent } from '../data/talents/Classes'
import { ClassTalentType, ClassSpecType } from '../types/'

export const checkPointsPerTree = (specData: ClassSpecType) => {
  return [...specData!]
    .map(row => {
      return checkPointsPerRow(row)!
    })
    .reduce((a, b) => {
      return a! + b!
    })
}

export const checkTotalPoints = (talentData: ClassTalentType) => {
  const totalPointsArray: number[] = [0, 0]
  if (!!talentData) {
    for (let i = 0; i < 3; i++) {
      totalPointsArray.push(checkPointsPerTree(talentData[i]))
    }
  }
  const totalPoints = totalPointsArray.reduce((a, b) => a! + b!)
  return totalPoints
}

export const checkPointsPerRow = (specRow: (Talent | null)[]) => {
  const pts =
    specRow &&
    specRow!
      .filter(talent => {
        return !!talent
      })
      .map(talent => {
        return talent?.value
      })
      .reduce((a, b) => {
        return a! + b!
      })

  if (!!pts && pts! >= 0) {
    return pts
  } else {
    return 0
  }
}

export const checkAnyValue = (talent: Talent | null) => {
  return talent?.value! > 0
}

export const checkMaxedValue = (talent: Talent | null) => {
  return talent?.value === talent?.maxValue
}

export const checkZeroValue = (talent: Talent | null) => {
  return talent?.value === 0
}

export const getConnectedTalent = (specData: ClassSpecType | null, connectedX: number, connectedY: number) => {
  if (connectedX !== null && connectedY !== null) return specData![connectedX][connectedY]
}

export const checkRowHasPoints = (specRow: (Talent | null)[]) => {
  const hasPoints: any[] = []

  specRow.forEach(talent => {
    if (!!talent) return hasPoints.push(checkAnyValue(talent))
  })

  const rowHasPoints = hasPoints.some(value => {
    return value === true
  })

  return rowHasPoints
}

export const getRowsBelowX = (specData: ClassSpecType | null, rowWithPts: number | undefined) => {
  return specData?.filter((_, index) => index < rowWithPts!)
}

export const checkEnoughPointsRow = (specData: ClassSpecType | null, x: number, y: number) => {
  const firstRowWithPts = specData?.findIndex((row, rowIndex) => {
    return checkRowHasPoints(row) && rowIndex > x
  })

  if (firstRowWithPts === -1) {
    return true
  }

  const rowsBelowX = getRowsBelowX(specData, firstRowWithPts)?.filter(row => !!row)

  const pointsRows = rowsBelowX?.map(row => checkPointsPerRow(row!))
  const sumPoints = pointsRows?.reduce((a, b) => a! + b!)

  if (sumPoints! > firstRowWithPts! * 5) {
    return true
  } else {
    return false
  }
}

export const checkEnoughPointsForRightClick = (specData: ClassSpecType, x: number) => {
  const lastRowWithPts = specData?.map(row => checkRowHasPoints(row)).lastIndexOf(true)

  const ptsInLastRow = checkPointsPerRow(specData[lastRowWithPts])

  const pointsInTree = checkPointsPerTree(specData)

  if (lastRowWithPts === x) {
    return true
  }

  if (pointsInTree - ptsInLastRow! >= lastRowWithPts * 5 + 1) {
    return true
  } else {
    return false
  }
}

export const checkRequiredTalentsAreMaxed = (specData: ClassSpecType | null, x: number, y: number) => {
  const allRequiredTalents = specData![x][y]?.required.map(reqTalent => {
    return getConnectedTalent(specData, reqTalent.x!, reqTalent.y!)
  })

  const isRequiredMaxed: any[] = []

  allRequiredTalents?.forEach(talent => {
    if (!!talent) return isRequiredMaxed.push(checkMaxedValue(talent))
  })

  const requiredTalentsAreMaxed = isRequiredMaxed!.every(talent => talent === true)

  return requiredTalentsAreMaxed
}

export const checkRequiringTalentsAreZero = (specData: ClassSpecType | null, x: number, y: number) => {
  const allRequiringTalents = specData![x][y]?.requiring.map(reqTalent => {
    return getConnectedTalent(specData, reqTalent.x!, reqTalent.y!)
  })

  const isRequiringZero: any[] = []

  allRequiringTalents?.forEach(talent => {
    if (!!talent) return isRequiringZero.push(checkZeroValue(talent))
  })

  const requiringTalentsAreZero = isRequiringZero!.every(talent => talent === true)

  return requiringTalentsAreZero
}

// click boys

export const leftClick = (talentData: ClassTalentType, i: number, x: number, y: number) => {
  const pointsLeft = checkTotalPoints(talentData)
  const enoughPointsLeft = pointsLeft < 51

  const isMaxedValue = checkMaxedValue(talentData[i][x][y])

  const enoughPointsInTree = checkPointsPerTree(talentData![i]) >= x * 5

  const requiredTalentsAreMaxed = checkRequiredTalentsAreMaxed(talentData[i], x, y)

  if (enoughPointsLeft && !isMaxedValue && enoughPointsInTree && requiredTalentsAreMaxed) {
    return true
  } else {
    return false
  }
}

export const rightClick = (talentData: ClassTalentType, i: number, x: number, y: number) => {
  const pointsLeft = checkTotalPoints(talentData!)
  const enoughPointsLeft = pointsLeft > 0

  if (!enoughPointsLeft) {
    return false
  }

  const isZeroValue = checkZeroValue(talentData[i][x][y])

  const enoughPointsRows = checkEnoughPointsRow(talentData[i], x, y)

  const requiringTalentsAreZero = checkRequiringTalentsAreZero(talentData[i], x, y)

  const enoughPtsForRightCLick = checkEnoughPointsForRightClick(talentData[i], x)

  if (enoughPointsLeft && !isZeroValue && requiringTalentsAreZero && enoughPointsRows && enoughPtsForRightCLick) {
    return true
  } else {
    return false
  }
}
