import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading :false

    }

  }

  async componentDidMount(){
   let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=887b40cf6dcf4746998aefb0cda82f5f";
   let response = await fetch(url);
   let data = await response.json();
  //  console.log(data)
  this.setState({articles : data.articles})
  }

  render() {
    return (
      <div>
        <div className='container my-3'>
          <h2>DailyNews-Top Headline</h2>
          <div className='row'>
            {this.state.articles.map((element) => {
              // console.log(element)   // return object from api
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 70):""} ImageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}


          </div>
        </div>
      </div>
    )
  }
}

export default News
