
import React from "react"





class Product extends React.Component{
    render()
    {
     
        return (

            <div className="card">
                <div className="card-header">
                    <img className="w-100 h-100 " src={this.props.img} />
            </div>
                <div className="card-body text-center">
                    <h2 className="">{this.props.name }</h2>


                    <h6 className="">{this.props.info} </h6>
                    <hr/>
                    <br/>
                    
                    <button  className="btn btn-danger mt-2">{this.props.btn }</button>
            </div>

            </div>


     
        )

    }

}

export default Product