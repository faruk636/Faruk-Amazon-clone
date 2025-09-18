import {Type} from './action.type'

export const initialState = {
    cart:[]
}

export const reducer = (state,action)=>{
switch (action.type) {
    case Type.ADD_TO_CART:

        const isProductExists = state.cart.find((item)=>item.id === action.item.id)
        if (!isProductExists) {
            return {
                ...state,
                cart:[...state.cart,{...action.item,amount:1}]
            }
        } else {
            const updatedCart = state.cart.map((item)=>{
                return item.id ===action.item.id ? {...item,amount:item.amount+1} :item
            })
            return {
                ...state,
                cart:updatedCart
            }
        }
    case Type.REMOVE_FROM_CART:
        const index= state.cart.findIndex(item=>item.id===action.id)
        let newBasket = [...state.cart]

        if (index >=0) {
            if (newBasket[index].amount > 1) {
                newBasket[index] = {...newBasket[index],amount:newBasket[index].amount-1}
            } else {
                newBasket.splice(index,1)
            }
        } 

        return {
            ...state,
            cart:newBasket
        }


    default:
        return state;
}
}