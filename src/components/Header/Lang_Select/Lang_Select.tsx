import './Lang_Select.css'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { selectLang } from '../../../store/actions'
import { actionType, selectPropsType } from '../../../utils/types'

export class Lang_Select extends Component<selectPropsType> {
  render() {
    return (
      <div>
        <select id="selectLang" onChange={e => this.props.onSelect(e.target.value)}>
          <option value="ru">Русский</option>
          <option value="en" >English</option>
        </select>
      </div>
    )
  }
}

function mapStateToProps(state: selectPropsType) {
  return {
    review: state.review
  }
}

function mapDispatchToProps(dispatch: (action: actionType) => void) {
  return {
    onSelect: (value: string) => {
      return dispatch(selectLang(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lang_Select)