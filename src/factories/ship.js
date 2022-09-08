const Ship = function(size, direction) {
    const health = Array.from({length: size}, () => 1)
    const isSunk = function() {
        return !health.includes(1)
    }

    const hit = function(index) {
        if (Number.isNaN(index) || index > size - 1) throw new Error('range invalid')

        health.splice(index, 1, 'X')
    }

    return {
        direction,
        health,
        isSunk,
        hit,
    }
}

export default Ship
