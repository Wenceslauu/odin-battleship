// eslint-disable-next-line import/no-mutable-exports
let placementDirection = 'horizontal'

const handleDirection = function() {
    const checkbox = document.getElementById('direction')

    checkbox.addEventListener('change', function() {
        if (this.checked)
            placementDirection = 'vertical'
        else
            placementDirection = 'horizontal'
    })
}

export { handleDirection, placementDirection }