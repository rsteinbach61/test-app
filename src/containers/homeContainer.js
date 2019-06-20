import React, { Component } from 'react'
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomeContainer extends Component {
render() {
  return(
    <div> Home Container
      <Home test={this.props.tst} changeText={this.props.changeText}/>
    </div>

  )
}
}
const mapDispatchToProps = dispatch => {
  return{
    changeText: () => dispatch({type: 'CHANGE_TEXT'})
  }
}
const mapStateToProps = state => {
  return{
    tst: state.test
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (HomeContainer);
