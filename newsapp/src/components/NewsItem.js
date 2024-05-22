import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description,ImageUrl,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width:"18rem"}}>
          <img src={!ImageUrl?"https://www.hindustantimes.com/ht-img/img/2024/05/21/550x309/WhatsApp_Image_2024-05-19_at_20955_PM_1716108049198_1716292531305.jpeg":ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl}  className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
