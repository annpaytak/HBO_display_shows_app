import React, { Component } from 'react';
import got from '../resources/images/got.jpeg';

class GOT extends Component {

  constructor(props){
    super(props)
    this.state={

    }
  }

  handleChange(){
    this.setState({
      
    })
  }
  render() {
    return (
      <div className="GOT" onClick={this.handleChange}>
        <img src={got} />
        <div className="gotInfo">
          <div className="gotInfo_header">Game of Thrones</div>
          <div className="gotInfo_seasons">7 SEASONS  
          <div className="gotInfo_episodes">67 EPISODES</div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default GOT;