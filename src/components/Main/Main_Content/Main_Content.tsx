import React, { Component } from 'react'
import { connect } from 'react-redux'
import Review from '../Review/Review'
import { mainStateType, reviewType } from '../../../utils/types'
import './MainContent.css'
import Controllers from '../Controllers/Controllers'

const data = {
  "name": "Петрова Ольга Викторовна",
  "review": "Не ожидала, что такой вкусный продукт можно купить по такой низкой цене.",
  "date": "20.02.2021"
}

export class Main_Content extends Component<mainStateType, {}> {
  getReviewChunk = (): reviewType[] => {
    const currentReviews: reviewType[]  = this.props.review[this.props.review.currentLang];
    const startChunk = (this.props.review.currentPage - 1) * 10;
    const endChunk = startChunk + 10;
    const chunk = currentReviews.slice(startChunk, endChunk);
    return chunk
  }

  render() {
    return (
      <main className='main'>
        <div className='review-list'>
          {this.getReviewChunk().map((item, index) => {
            return <Review data={item} key={index} />
          })} 
        </div>
        <Controllers />
      </main>
    )
  }
}

function mapStateToProps(state: mainStateType) {
  return {
    review: state.review
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Main_Content)