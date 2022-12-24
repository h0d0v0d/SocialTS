export function showRightMass (dataMass: Array<any>, cP: number) {
    return dataMass.filter(el => cP - el > 3 ? false : el - cP < 4 ? true : false)
}

console.log()