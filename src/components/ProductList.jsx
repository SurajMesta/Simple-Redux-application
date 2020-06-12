import React from 'react'
import Product from './Product'
import {connect} from 'react-redux'

class ProductList extends React.Component{
   
    render(){
   
      
        return(
          
            <div >
                <div className="container">
                <div className="row">
                {this.props.posts.map((item)=>{
                   return <Product key={item.id} post={item}/>
               })}
                </div>
                </div>
              
              
               
            
            </div>
             

        )
    }
}


const mapStateToProps=(state)=>{

    return{
        posts:state.posts
    }

}

export default connect(mapStateToProps)(ProductList)