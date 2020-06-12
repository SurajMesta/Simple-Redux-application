
export const addProducts=(post)=>{
    return{
        type:'ADD_PRODUCT',
        payload:post

    }
}


export const deleteItem=(id)=>{
    return{
        type:'DELETE_POST',
        payload:id
    }
}

