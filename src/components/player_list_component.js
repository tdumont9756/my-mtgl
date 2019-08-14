import React, {Component} from 'react';
import Player from './player';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {incrementPointsAction, decrementPointsAction} from './../actions/myActions';


class PlayerListComponent extends Component{

  constructor(props){
    super(props);
    console.log("the props are next:  ");
    console.log(this.props);
    this.state = {points: this.props.points,
                  increment: this.props.incrementPointsAction
                };
  }



  render(){
    return(
      <div>
        <Player
          name="Tommy"
          incrementer={this.state.increment}
          decrementer = {this.props.decrementPointsAction}
          points={this.props.points} />
      </div>

    );
  }
}


const mapStateToProps = (state) => {
  let points = state.pointsReducerKey.points;
  console.log("the value of points in mapStateToProps " + points);
  return {points};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({incrementPointsAction, decrementPointsAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(PlayerListComponent);
