import React from 'react'
import {addItem} from '../actions/action'
import {connect} from 'react-redux'
import {addProducts} from '../actions/action'



class Addform extends React.Component{

    state={
        id:null,
        title:'',
        description:''
    }

    handleChange= (e)=>{
        this.setState({
            id:Math.random(),
            [e.target.name]: e.target.value

        })
        console.log(this.state)
           
           
        
        
       
      

    }


    handleSubmit=(e)=>{
      e.preventDefault()
      this.props.addPro(this.state)

      this.setState({
          id:null,
          title:'',
          description:''
      })

      console.log(this.state)
    }
    render(){
        return(
           <React.Fragment>
               <div className="container text-center" style={{width:"350px"}}>
                   <div className="row">
                       <div className="col-xs-12">
                           <h3 style={{textDecoration:'underline'}}><em>Simple Redux App</em></h3>
                       <form onSubmit={(e)=>{
                           this.handleSubmit(e)
                       }}>
                   <div className="form-group">
                       <label htmlFor="">Title:</label>
                       <input type="text" name="title" className="form-control" placeholder="title" value={this.state.title}   required onChange={(e)=>{
                           this.handleChange(e)
                       }}/>
                   </div>

                   <div className="form-group">
                       <label htmlFor="">Descrption:</label>
                       <br/>
                       <textarea name="description" id="" cols="30" rows="10"  className="form-control" value={this.state.description} required onChange={(e)=>{
                           this.handleChange(e)
                       }}></textarea>
                   </div>

                   <div className="form-group">
                      <button className="btn btn-md btn-info">Submit</button>
                    
                   </div>
               </form>
                       </div>
                   </div>
               </div>
          
           </React.Fragment>

        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addPro:(post)=>{
            dispatch(addProducts(post))
        }
    }


}



export default connect(null,mapDispatchToProps)(Addform)
