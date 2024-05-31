import React, { useState, useEffect } from 'react'
import NewsItem1 from './NewsItem1'
// import { Spinner } from './Spinner';
import PropTypes from 'prop-types'
import Spinner from './Spinner'


const News1 = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState(0)

  

  const capitalizeLetter = (string) => {  // this fun ction is used to capitalize first letter of the news category
    return string.charAt(0).toUpperCase() + string.slice(1);
  }






  const update = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;

    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    //  console.log(data)
    setArticles(data.articles)
    setLoading(false)
    setTotalResult(data.totalResults)



    props.setProgress(100)

  }

  useEffect(() => {
    document.title = `${capitalizeLetter(props.category)} - DailyNews`;

    update()
  }, [])

  const previousContent = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;

    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();

    setArticles(data.articles)
    setLoading(false)
    setPage(page - 1)



  }

  const nextContent = async() => {
    //  let pageSize = 9
    if (page + 1 > Math.ceil(totalResult / 9)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

      setLoading(true)
      let response = await fetch(url);
      let data = await response.json();

      setArticles(data.articles)
      setLoading(false)
      


    }
   

  }








  let endPage = Math.ceil(totalResult / 9)
  return (
    <div className='container my-3'>
      <h2 className='text-center ' style={{marginTop : "90px",marginBottom :"30px"}}>DailyNews-Top {capitalizeLetter(props.category)} Headline</h2>
      {loading && <Spinner />}  {/*this logic define if this.state.loading is true then show the spinner component*/}




      <div className='row'>
        {!loading && articles.map((element) => {
          /* this.state.loading is false then remove all the NewsItem*/
          // console.log(element)   // return object from api
          return <div className='col-md-4' key={element.url}>
            <NewsItem1 title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 70) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
      </div>

      <div className='container d-flex justify-content-evenly my-5'>
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={previousContent}>&larr; Previous</button>
        <button disabled={page >= endPage} type="button" className="btn btn-dark" onClick={nextContent}>Next &rarr;</button>
      </div>
    </div>
  )
}

News1.default = {
  country: "in",
  pageSize: 6,
  category: "general"

}

News1.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default News1
