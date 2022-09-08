// eslint-disable-next-line import/no-extraneous-dependencies
import { jest } from '@jest/globals'
import Gameboard from '../factories/gameboard'
import Ship from '../factories/ship'

describe('creating a gameboard instance',() => {
    test('board squares are displayed', () => {
        expect(Gameboard(3).squares).toStrictEqual([[[0, [null, null]], [0, [null, null]], [0, [null, null]]], [[0, [null, null]], [0, [null, null]], [0, [null, null]]], [[0, [null, null]], [0, [null, null]], [0, [null, null]]]])
    })

    test('gameboard without any ships throws an error', () => {
        expect(() => Gameboard(3).allSunk()).toThrow(Error)
    })
})

describe('placing ships', () => {
    test('single square ship is placed', () => {
        const board = Gameboard(3)
        const ship = Ship(1, 'horizontal')
        board.placeShip([1, 1], ship)
        expect(board.squares).toStrictEqual([[[0, [null, null]], [0, [null, null]], [0, [null, null]]], [[0, [null, null]], [1, [ship, 0]], [0, [null, null]]], [[0, [null, null]], [0, [null, null]], [0, [null, null]]]])
    })

    test('multiple square ship is placed', () => {
        const board = Gameboard(3)
        const ship = Ship(3, 'vertical')
        board.placeShip([0, 0], ship)
        expect(board.squares).toStrictEqual([[[1, [ship, 0]], [0, [null, null]], [0, [null, null]]], [[1, [ship, 1]], [0, [null, null]], [0, [null, null]]], [[1, [ship, 2]], [0, [null, null]], [0, [null, null]]]])
    })

    test('cannot place a ship over another ship', () => {
        const board = Gameboard(3)
        const shipVer = Ship(3, 'vertical')
        const shipHor = Ship(3, 'horizontal')
        board.placeShip([0, 0], shipVer)
        expect(() => board.placeShip([0, 0], shipHor)).toThrow(Error)
    })

    test('ship going past horizontal boundaries throws an error', () => {
        const board = Gameboard(3)
        expect(() => board.placeShip([1, 1], Ship(3, 'horizontal'))).toThrow(Error)
    })

    test('ship going past vertical boundaries throws an error', () => {
        const board = Gameboard(3)
        expect(() => board.placeShip([1, 1], Ship(3, 'vertical'))).toThrow(Error)
    })

    test('no ship is sunk', () => {
        const board = Gameboard(3)
        board.placeShip([1, 1], Ship(1, 'horizontal'))
        expect(board.allSunk()).toBe(false)
    })
})

describe('making random moves', () => {
    let mockRandom;
    beforeEach(() => {
        mockRandom = jest.spyOn(Math, 'random')
    })

    afterEach(() => {
        jest.restoreAllMocks()
    })

    test('placing a single random ship', () => {
        mockRandom.mockReturnValueOnce(0).mockReturnValueOnce(0.99)

        const board = Gameboard(3)
        const ship = Ship(2, 'horizontal')
        board.placeRandomShips([ship])

        expect(board.squares).toStrictEqual([[[0, [null, null]], [0, [null, null]], [0, [null, null]]], [[0, [null, null]], [0, [null, null]], [0, [null, null]]], [[1, [ship, 0]], [1, [ship, 1]], [0, [null, null]]]])
    })

    test('hitting a random attack', () => {
        mockRandom.mockReturnValueOnce(0).mockReturnValueOnce(0.99)

        const board = Gameboard(3)
        const ship = Ship(2, 'horizontal')
        board.placeShip([0, 2], ship)

        board.receiveRandomAttack()

        expect(board.squares).toStrictEqual([[[0, [null, null]], [0, [null, null]], [0, [null, null]]], [[0, [null, null]], [0, [null, null]], [0, [null, null]]], [["X", [ship, 0]], [1, [ship, 1]], [0, [null, null]]]])
    })

    test('missing a random attack', () => {
        mockRandom.mockReturnValueOnce(0).mockReturnValueOnce(0)

        const board = Gameboard(3)
        const ship = Ship(2, 'horizontal')
        board.placeShip([0, 2], ship)

        board.receiveRandomAttack()

        expect(board.squares).toStrictEqual([[['O', [null, null]], [0, [null, null]], [0, [null, null]]], [[0, [null, null]], [0, [null, null]], [0, [null, null]]], [[1, [ship, 0]], [1, [ship, 1]], [0, [null, null]]]])
    })

    test('hitting a random attack after it tries to hit a square that has already been targeted', () => {
        mockRandom.mockReturnValueOnce(0).mockReturnValueOnce(0.99).mockReturnValueOnce(0.5).mockReturnValueOnce(0.99)

        const board = Gameboard(3)
        const ship = Ship(2, 'horizontal')
        board.placeShip([0, 2], ship)
        board.receiveAttack([0, 2])

        board.receiveRandomAttack()

        expect(board.squares).toStrictEqual([[[0, [null, null]], [0, [null, null]], [0, [null, null]]], [[0, [null, null]], [0, [null, null]], [0, [null, null]]], [["X", [ship, 0]], ["X", [ship, 1]], [0, [null, null]]]])
    })
})

describe('attacking ships', () => {
    test('attack hits', () => {
        const board = Gameboard(3)
        const ship = Ship(3, 'vertical')
        board.placeShip([0, 0], ship)
        board.receiveAttack([0, 1])
        expect(board.squares).toStrictEqual([[[1, [ship, 0]], [0, [null, null]], [0, [null, null]]], [['X', [ship, 1]], [0, [null, null]], [0, [null, null]]], [[1, [ship, 2]], [0, [null, null]], [0, [null, null]]]])
    })

    test('attacks at the same square throw an error', () => {
        const board = Gameboard(3)
        const ship = Ship(3, 'vertical')
        board.placeShip([0, 0], ship)
        board.receiveAttack([0, 1])
        expect(() => board.receiveAttack([0, 1])).toThrow(Error)
    })

    test('attack misses', () => {
        const board = Gameboard(3)
        const ship = Ship(3, 'vertical')
        board.placeShip([0, 0], ship)
        board.receiveAttack([1, 1])
        expect(board.squares).toStrictEqual([[[1, [ship, 0]], [0, [null, null]], [0, [null, null]]], [[1, [ship, 1]], ['O', [null, null]], [0, [null, null]]], [[1, [ship, 2]], [0, [null, null]], [0, [null, null]]]])
    })

    test('all sunk', () => {
        const board = Gameboard(3)
        const ship = Ship(3, 'vertical')
        board.placeShip([0, 0], ship)
        board.receiveAttack([0, 0])
        board.receiveAttack([0, 1])
        board.receiveAttack([0, 2])
        expect(board.allSunk()).toBe(true)
    })
})