const cart = [];

const updateLocalStorage = (data) => {
    localStorage.setItem('Cart', JSON.stringify(data));
}

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if Product is Already Exist
                const exist = state.find((x)=> x.id === product.id);
                
                if(exist){
                    // Increase the Quantity
                    // return state.map((x)=>
                    // x.id === product.id ? {...x, qty: x.qty + 1} : x 
                    // );
                    const output =  state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty + 1} : x 
                    );
                    updateLocalStorage(output);
                    return output;

                }
                else{
                    const product = action.payload;

                    const output = [
                        ...state,
                        {
                            ...product,
                            qty: 1,
                        }
                    ]
                    updateLocalStorage(output);
                    // localStorage.setItem('Cart', JSON.stringify(output));
                    return output;
                }


            // break;

            case "DELITEM":
                const exist1 = state.find((x)=> x.id === product.id);
                if(exist1.qty === 1){
                    const output =  state.filter((x)=> x.id !== exist1.id);
                    updateLocalStorage(output);
                    return output;
                }
                else{
                    const output = state.map((x)=>
                        x.id === product.id ? {...x, qty: x.qty-1} : x
                    );
                    updateLocalStorage(output);
                    return output;
                }
                // break;

            case "CLRITEM":
                const output = state.filter((x)=> x.id !== product.id);
                updateLocalStorage(output);
                return output;
    
        default:
            return state
            // break;
    }
}

export default handleCart;