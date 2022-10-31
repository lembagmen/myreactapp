import React from 'react';

class Square extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         backgroundColor: "gray",
         enabled: true,
         }
   }

   clickHandler = () => {
      this.setState({
         backgroundColor: "white",
         enabled: false,
      });
   }

   render(){
      return(
         <div onClick={this.clickHandler} className={"square " + this.state.backgroundColor} data-index={this.props.dataIndex}>{this.props.textContent}{this.props.dataIndex}{this.state.enabled ? 1 : 0}</div>
      )
   }
}

export default Square;