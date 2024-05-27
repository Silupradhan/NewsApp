import React, { Component } from 'react'

export class NewsItem1 extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl, author, date, source } = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!ImageUrl ? "https://th.bing.com/th/id/OIP.0dzPl0BUoR9sKlirIPvhBAHaEb?rs=1&pid=ImgDetMain" : ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
             {source}
             </span>
             
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">Publish by {!author ? "Unknown" : author} on date {new Date(date).toLocaleDateString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem1
