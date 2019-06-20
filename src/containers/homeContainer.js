import React, { Component } from 'react'
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as actionTypes from '../store/actions'
class HomeContainer extends Component {
render() {
  return(
    <div> Home Container
      <Home test={this.props.tst} changeText={this.props.changeText}
      changeText2={this.props.changeText2}/>
    </div>

  )
}
}
const mapDispatchToProps = dispatch => {
  return{
    changeText: () => dispatch({type: actionTypes.CHANGE_TEXT, value: "This is not a test" }),
    changeText2: () => dispatch({type: actionTypes.CHANGE_TEXT2, value: "This is not a test 2" })
  }
}
const mapStateToProps = state => {
  return{
    tst: state.test
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (HomeContainer);
