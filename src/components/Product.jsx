import React from 'react'
import {connect} from 'react-redux'
import {deleteItem} from '../actions/action'

 class Product extends React.Component{

    handleDel=(id)=>{
     console.log(`The Clicked item id is ${id}`)
     this.props.delPost(id)

    }
    render(){
        const {post}= this.props
        return(
           
               
                <div className="col-md-4 col-lg-4 col-sm-4 col-xs-12">
                    <div className="card card-sm text-center" style={{boxShadow:'1px 2px 3px #000',margin:'10px 10px'}}>
                    <div className="card-title">
                    <em>Title:{post.title}</em>  </div>

                    <div className="card-body">
                    <p><em>Description:{post.description}</em></p>
                    </div>

                    <div className="card-footer">
                        <button style={{border:'none'}} onClick={()=>{
                      this.handleDel(post.id)
                        }} ><i class="fas fa-trash text-danger"></i></button>
                    </div>
                   
                    </div>
              
                </div>
               
    
           
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
        return{
            delPost:(id)=>{
                dispatch(deleteItem(id))
            }
        }
     


}

export default connect(null,mapDispatchToProps)(Product)