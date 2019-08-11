import React, {Component} from 'react';
import Player from './player';
import { connect } from 'react-redux';
import {incrementPointsAction, decrementPointsAction} from './../actions/myActions';


class PlayerListComponent extends Component{

  constructor(props){
    super(props);
    console.log(this.props);
    this.state = {points: this.props.points};
    this.incrementShit = this.testing.bind(this);
  }

  testing = ()=> {console.log("By god ive got it!");};


  render(){
    console.log("is props.increnent def?::::" + this.props.increment);
    return(
      <div>
        <Player
          name="Tommy"
          incrementer={this.props.increment}
          points={this.state.points} />
      </div>

    );
  }
}


const mapStateToProps = (state) => {
  console.log("mapStateToProps is firing" + state);
  return {points: state.points};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("this is the ownProps:;:  " + ownProps.points);
  return {
    // dispatching plain actions
    increment: (points) => dispatch(incrementPointsAction(points)),
    decrement: () => dispatch(decrementPointsAction(ownProps.points))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(PlayerListComponent);
