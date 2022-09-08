import Ship from '../factories/ship'

describe('creating a ship instance',() => {
    test('ship spawns undamaged', () => {
        expect(Ship(3, 'horizontal').health).toStrictEqual([1, 1, 1])
    })

    test('ship does not spawn sunk', () => {
        expect(Ship(5, 'horizontal').isSunk()).toBe(false)
    })
})

describe('damaging a ship', () => {
    const damagedShip = Ship(4, 'horizontal')
    damagedShip.hit(3)

    test('ship takes 1 damage', () => {
        expect(damagedShip.health).toStrictEqual([1, 1, 1, 'X'])
    })

    test('damage was not enough to sink the ship', () => {
        expect(damagedShip.isSunk()).toBe(false)
    })

    test('ship hit out of range throws an error', () => {
        expect(() => damagedShip.hit(4)).toThrow(Error)
    })
})

describe('sinking a ship', () => {
    const sunkShip = Ship(2, 'horizontal') // I'm not so sure about these lines, do they fit as a mock?
    sunkShip.hit(0) // I sould probably make hit return the updated health so as not to call the method outside of the tests, yet 
    sunkShip.hit(1) // I don't fell like changing it right now

    test('ship takes damage on every square', () => {
        expect(sunkShip.health).toStrictEqual(['X', 'X'])
    })

    test('ship is sunk', () => {
        expect(sunkShip.isSunk()).toBe(true)
    })
})