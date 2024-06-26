import React from 'react'

const NewsItem1 = (props) => {
    let { title, description, ImageUrl, newsUrl, author, date, source,  } = props
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
       
          <img style={{height : "200px", objectFit : "cover"}} src={!ImageUrl ? "https://th.bing.com/th/id/OIP.0dzPl0BUoR9sKlirIPvhBAHaEb?rs=1&pid=ImgDetMain" : ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body" >
            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger" >
              {source}
            </span>

            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">Publish by {!author ? "Unknown" : author} on date {new Date(date).toLocaleDateString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem1
