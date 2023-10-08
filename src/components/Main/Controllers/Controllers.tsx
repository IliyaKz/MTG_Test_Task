import './Controllers.css'
import Button from '../Button/Button'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { actionType, controllersPropsType} from '../../../utils/types'
import { decrementPage, decrementPageSkip, incrementPage, incrementPageSkip } from '../../../store/actions'

export class Controllers extends Component<controllersPropsType, {}> {
  checkDecrementDisabled = () => {
    return this.props.review.currentPage === 1;
  }

  checkIncrementDisabled = () => {
    const review = this.props.review;
    return review.currentPage === Math.ceil(review[review.currentLang].length / 10)
  }

  render() {
    return (
      <div className='controllers-container'>
        <Button 
          content='<<'
          onClick={this.props.onDecrementPageSkip}
          key='1'
          isDisable={this.checkDecrementDisabled()}
        />
        <Button
          content='<'
          onClick={this.props.onDecrementPage}
          key='2'
          isDisable={this.checkDecrementDisabled()}
        />
        <div className='current-page'>
          {this.props.review.currentPage}
        </div>
        <Button
          content='>'
          onClick={this.props.onIncrementPage}
          key='3'
          isDisable={this.checkIncrementDisabled()}
        />
        <Button
          content='>>'
          onClick={this.props.onIncrementPageSkip}
          key='4'
          isDisable={this.checkIncrementDisabled()}
        />
      </div>
    )
  }
}

function mapStateToProps(state: controllersPropsType) {
  return {
    review: state.review
  }
}

function mapDispatchToProps(dispatch: (action: actionType) => void) {
  return {
    onIncrementPage: () => {
      return dispatch(incrementPage())
    },
    onDecrementPage: () => {
      return dispatch(decrementPage())
    },
    onDecrementPageSkip: () => {
      return dispatch(decrementPageSkip())
    },
    onIncrementPageSkip: () => {
      return dispatch(incrementPageSkip())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controllers)