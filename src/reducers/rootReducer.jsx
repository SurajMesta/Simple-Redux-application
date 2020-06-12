const initstate={
    posts:[]
}

export const rootReducer=(state=initstate,action)=>{
    // return{
    //   posts:state.posts,

    
    // }

    switch(action.type){

      case 'ADD_PRODUCT':
        const post=[...state.posts,action.payload]
       return{
         posts:post
       }
    
        break;

      case 'DELETE_POST':
        const posts= state.posts.filter(item=> item.id!==action.payload)
        return{posts}

      default:
        return state
        break;
        


    }

}

