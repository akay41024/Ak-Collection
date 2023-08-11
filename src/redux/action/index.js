
// For add item to cart

export const addCart = (product) => {
    return ({
        type: "ADDITEM",
        payload: product
    })
}

// For Delete Item from cart

export const delCart = (product) => {
    return ({

        type: "DELITEM",
        payload: product
    })
}

// For Clear Item from cart

export const clrCart = (product) => {
    return ({

        type: "CLRITEM",
        payload: product
    })
}