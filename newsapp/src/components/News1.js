import React, { Component } from 'react'
import NewsItem1 from './NewsItem1'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'


export class News1 extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
    
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeLetter = (string) => {  // this fun ction is used to capitalize first letter of the news category
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0



    }
    document.title = `${this.capitalizeLetter(this.props.category)} - DailyNews`;
  }



  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let response = await fetch(url);
    let data = await response.json();
    //  console.log(data)
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false


    })
    this.props.setProgress(100)

  }

  previousContent = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false
    })

  }

  nextContent = async () => {
    //  let pageSize = 9
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      })
      let response = await fetch(url);
      let data = await response.json();

      this.setState({
        page: this.state.page + 1,
        articles: data.articles,
        loading: false
      })
    }


  }

  






  render() {
    let endPage = Math.ceil(this.state.totalResults / 9)
    return (
      <div className='container my-3'>
          <h2 className='text-center my-5'>DailyNews-Top {this.capitalizeLetter(this.props.category)} Headline</h2>
          {this.state.loading && <Spinner />}  {/*this logic define if this.state.loading is true then show the spinner component*/}

          
              

            <div className='row'>
              {!this.state.loading && this.state.articles.map((element) => {
                /* this.state.loading is false then remove all the NewsItem*/
                // console.log(element)   // return object from api
                return <div className='col-md-4' key={element.url}>
                  <NewsItem1   title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 70) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>

        <div className='container d-flex justify-content-evenly my-5'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.previousContent}>&larr; Previous</button>
          <button disabled={this.state.page >= endPage} type="button" className="btn btn-dark" onClick={this.nextContent}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News1
