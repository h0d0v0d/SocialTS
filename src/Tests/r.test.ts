import { showRightMass } from "./r";

test('Filter pages count function work right', () => {
    const dataMass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let cP_1 = 1
    let cP_2 = 5
    let cP_3 = 5

    const res = showRightMass(dataMass, cP_1)
    const res1 = showRightMass(dataMass, cP_2)
    const res2 = showRightMass(dataMass, cP_3)
    
    expect(res[0]).toBe(1)
    expect(res[1]).toBe(2) 
    expect(res.length).toBe(4) 

    expect(res1[0]).toBe(2)
    expect(res1[res1.length - 1]).toBe(8)

    console.log(res2)
})