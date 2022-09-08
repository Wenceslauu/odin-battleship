const countChildElements = function(nodelist) {
    let counter = 0
    nodelist.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE)
            counter += 1
    })

    return counter
}

export default countChildElements