import './Review.css'
import React, { Component } from 'react'
import { reviewType } from '../../../utils/types';

export default class Review extends Component<{data: reviewType}, {}> {

  transformName = (name: string): string => {
    if (!name) return '';
    const nameSplit = name.split(' ');
    const firstName = nameSplit[0];
    const secondName = nameSplit[1] ? `${nameSplit[1][0]}.` : '';
    return `${firstName} ${secondName}`
  }

  render() {
    return (
      <div className='review-container'>
        <p className='review-item  review-name'>{this.transformName(this.props.data.name)}</p>
        <p className='review-item'>{this.props.data.review}</p>
        <p className='review-item'>{this.props.data.date}</p>
      </div>
    )
  }
}
