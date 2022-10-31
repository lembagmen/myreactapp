import React from 'react';
import Square from './Square';

class Board extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         onOff: "ON",
         enabled: true,
         isEnabled: true,
         textState: "Hello World"
      }
   }

   createSquare(index){
      return <Square dataIndex={index}/>
   }

   toggleOnOff = () => {
      this.setState({
         onOff: this.state.onOff == "ON" ? "OFF" : "ON",
         // isEnabled: this.state.isEnabled == true ? false : true,
         isEnabled: !this.state.isEnabled,
      })
   }

   setNewValue = (value, event) => {
      this.setState({
         enabled: value,
         textState: value ? "Hello KodeGo" : "Goodnight KodeGo"
      })

      // if(value){
      //    this.setState({
      //       textState: "Hello KodeGo"
      //    })
      // }
      // else{
      //    this.setState({
      //       textState: "Goodnight KodeGo"
      //    })
      // }
   }

   render(){
      return(
         <div>
            <div>
               {this.createSquare(1)}
               {this.createSquare(2)}
               {this.createSquare(3)}
            </div>
            <div>
               {this.createSquare(4)}
               {this.createSquare(5)}
               {this.createSquare(6)}
            </div>
            <div>
               {this.createSquare(7)}
               {this.createSquare(8)}
               {this.createSquare(9)}
            </div>

            <button onClick={this.toggleOnOff} className='btn btn-primary'>Toggle {this.state.onOff}</button>
            <div>Is Enabled? {this.state.isEnabled.toString()}</div>

            <button onClick={(event) => this.setNewValue(!this.state.enabled, event)} className='btn btn-primary'>Set New Value</button>
            {/* <div>{"" + this.state.isEnabled}</div> */}
            <div>{this.state.enabled.toString()}  {this.state.textState}</div>
         </div>
      );
   }
}

export default Board;