import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,


    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=887b40cf6dcf4746998aefb0cda82f5f&page=1&pageSize=9";
    let response = await fetch(url);
    let data = await response.json();
    //  console.log(data)
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults

    })
  }

  previousContent = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=887b40cf6dcf4746998aefb0cda82f5f&page=${this.state.page - 1}&pageSize=9`;
    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      page: this.state.page - 1,
      articles: data.articles
    })
  }

  nextContent = async () => {
    //  let pageSize = 9
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=887b40cf6dcf4746998aefb0cda82f5f&page=${this.state.page + 1}&pageSize=9`;
      let response = await fetch(url);
      let data = await response.json();

      this.setState({
        page: this.state.page + 1,
        articles: data.articles
      })
    }

  }






  render() {
    let endPage = Math.ceil(this.state.totalResults / 9)
    return (
      <div>
        <div className='container my-3'>
          <h2>DailyNews-Top Headline</h2>
          <div className='row'>
            {this.state.articles.map((element) => {
              // console.log(element)   // return object from api
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 70) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
        </div>
        <div className='container d-flex justify-content-evenly my-5'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousContent}>&larr; Previous</button>
          <button disabled={this.state.page >= endPage} type="button" className="btn btn-dark" onClick={this.nextContent}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
