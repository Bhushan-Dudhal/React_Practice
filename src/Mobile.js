import React from "react";



class Mobile extends React.Component {
    render() {
        

        return (
            

               <div className="card">
                <div className="card-header">
                    <img className="w-100" src={this.props.img} />
            </div>
                <div className="card-body text-center">
                    <h2 className="">{this.props.name }</h2>


                    <h6 className="">{this.props.info} </h6>
                    
                    <button  className="btn btn-danger">{this.props.btn }</button>
            </div>

            </div>


            
        )
    }
}


export default Mobile