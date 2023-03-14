import React, { Component } from 'react';
import './Square.css';
//import X from '../X.svg';
//import O from '../O.svg';

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  HandleVisual()
  {
    if(this.props.value === 'X')
    {
      return 'cross button'

    }else if(this.props.value === 'O')
    {
      return 'circle button'
    }else
    {
      return ''
    }

  }


  render() {

    return(
      <button className='Box' onClick={() => this.props.onClick()}>
      <div className='container'>
      <div className='row'>
        <div className='action-buttons'>
          <div className={this.HandleVisual()}></div>
        </div>
      </div>
    </div>

    </button>

    );
  }
}
export default Square;