import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        {/* this is a news app
        <NewsItem title="News Title" description="News Description"/>
        <NewsItem/>
        <NewsItem/> */}
        <div className='container my-3'>
          <h2>DailyNews-Top Headline</h2>
          <div className='row'>
            <div className='col-md-4'>
            <NewsItem title="News Title" description="News Description"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="News Title" description="News Description"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="News Title" description="News Description"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News
