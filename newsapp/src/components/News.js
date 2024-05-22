import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "the-hill",
        "name": "The Hill"
      },
      "author": "Miranda Nazzaro",
      "title": "Trump campaign says it will sue filmmakers behind ‘The Apprentice’ movie for including ‘blatantly false assertions’",
      "description": "Former President Trump’s reelection campaign plans to sue the filmmakers behind the new biopic film, “The Apprentice,” which follows the former president’s early years in the real estate business, for including what it calls “blatantly false assertions.”  “We…",
      "url": "https://thehill.com/blogs/in-the-know/4676021-trump-campaign-lawsuit-filmmakers-the-apprentice-film-including-blatantly-false-assertions/",
      "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2024/05/AP24141752784539.jpg?w=1280",
      "publishedAt": "2024-05-21T02:42:59Z",
      "content": "Skip to content\r\nPhoto by Scott A Garfitt/Invision/APGabriel Sherman, from left, Maria Bakalova, director Ali Abbasi, Sebastian Stan, and Martin Donovan pose for photographers upon departure from pre… [+3008 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Ian Duncan, Joyce Sohyun Lee, Samuel Granados, Nilo Tabrizy, Sammy Westfall",
      "title": "Iran’s president was flying in U.S.-designed helicopter when it crashed",
      "description": "The Bell 212 aircraft is a widely used civilian version of the Vietnam-era Huey military helicopter, operated by armed forces and businesses around the globe.",
      "url": "https://www.washingtonpost.com/world/2024/05/20/bell-212-helicopter-crash-iran-president-raisi/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LUN3AUE7A362WCWRTQX2BMDLQA.JPG&w=1440",
      "publishedAt": "2024-05-20T19:30:55Z",
      "content": "The helicopter that crashed while carrying the Iranian president through mountainous fog was a U.S.-designed Bell 212, according to state media and photographs verified by The Washington Post.\r\nThe B… [+5893 chars]"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Sarah Grant",
      "title": "Chef Kylie Kwong quitting restaurant business and closing Lucky Kwong after 30-year career",
      "description": "After a 30-year career as an Australian food icon, Kylie Kwong announces she is closing her restaurant and quitting the business.",
      "url": "https://www.abc.net.au/news/2024-05-20/kylie-kwong-shuts-lucky-kwong-leaves-restaurant-industry/103799850",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/a23af8ddfdaf3dd469607186edb6a082?impolicy=wcms_watermark_news&cropH=1152&cropW=2048&xPos=0&yPos=47&width=862&height=485&imformat=generic",
      "publishedAt": "2024-05-19T21:31:28Z",
      "content": "\u003Cul\u003E\u003Cli\u003EIn short: Kylie Kwong is ending her 30-year career and closing her restaurant.\u003C/li\u003E\u003Cli\u003EThe last day of service at her restaurant Lucky Kwong will be June 26.\u003C/li\u003E\u003Cli\u003EWhat's next? Kwong hopes … [+4001 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Mike Butcher",
      "title": "Checkfirst raises $1.5M pre-seed, applying AI to remote inspections and audits | TechCrunch",
      "description": "Checkfirst enables businesses to schedule inspectors based on geographical location and qualifications, in addition to allowing for remote inspections.",
      "url": "https://techcrunch.com/2024/05/08/checkfirst-raises-1-5m-pre-seed-applying-ai-to-remote-inspections-and-audits/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/Checkfirst-team.jpg?w=960",
      "publishedAt": "2024-05-08T13:02:12Z",
      "content": "Weve all seen them. The inspector with a clipboard, walking around a building, ticking off the last time the fire extinguishers were checked, or if all the lights are working. They work in the TICC (… [+3279 chars]"
    },
    
      
    {
      "source": {
        "id": "australian-financial-review",
        "name": "Australian Financial Review"
      },
      "author": "Jenny Wiggins",
      "title": "TLS ASX: Telstra CEO Vicki Brady dials up cost cutting as business, government demand for professional services tumbles and share price slides",
      "description": "Almost a year into running the telco, chief executive Vicki Brady needs to quickly tackle poorly performing businesses before they become too much of a drag on profit.",
      "url": "http://www.afr.com/companies/telecommunications/telstra-dials-up-cost-cuts-as-big-business-puts-it-on-hold-20240216-p5f5je",
      "urlToImage": "https://static.ffx.io/images/$zoom_0.359%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_219%2C$y_108/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_analysis_no_age_social_wm/d2b4baed1588f3b7322a5d8faf68d143cdebf55b",
      "publishedAt": "2024-02-24T22:37:56Z",
      "content": "Almost a year into her job running Telstra, chief executive Vicki Brady needs to quickly tackle poorly performing businesses before they become too much of a drag on the telecommunications groups pro… [+232 chars]"
    },
    {
      "source": {
        "id": "australian-financial-review",
        "name": "Australian Financial Review"
      },
      "author": "Jenny Wiggins",
      "title": "Telstra share price: Telco shrinks full-year guidance, net profit up 11.5pc as it declares interim dividend of 9¢",
      "description": "Telstra has warned of deteriorating business confidence and shaved $100m from the top of its full-year earnings target. It will pay an interim dividend of 9¢.",
      "url": "http://www.afr.com/companies/telecommunications/telstra-shrinks-full-year-guidance-net-profit-up-11-5pc-20240214-p5f4zf",
      "urlToImage": "https://static.ffx.io/images/$zoom_0.2861%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_12%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_social_wm/l_text:SuecaNano-Semibold.ttf_28:%20FROM%20%2Cg_south_west%2Cy_84%2Cx_325%2Cco_rgb:111111/l_text:SuecaNano-Semibold.ttf_28:%20FEB%20%2Cg_south_west%2Cy_84%2Cx_415%2Cco_rgb:111111/l_text:SuecaNano-Semibold.ttf_56:%202024%20%2Cg_south_west%2Cy_25%2Cx_330%2Cco_rgb:111111/539e8c4a5f4cb9fd673132dfc97d852da8ba60ca",
      "publishedAt": "2024-02-14T21:21:32Z",
      "content": "Telstra has warned of deteriorating business confidence and shrunk its full-year earnings guidance after being surprised by a steep fall in demand for professional services despite delivering an 11.5… [+307 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Alex Fitzpatrick, Kavya Beheraj",
      "title": "The country's new business hot spots, mapped",
      "description": "The Southeastern U.S. is a hotbed of new business activity.",
      "url": "https://www.axios.com/2023/07/13/new-business-hot-spots",
      "urlToImage": "https://images.axios.com/aDr8aF2q-EoHWlnE6VUNLPYxpRE=/0x0:1280x720/1366x768/2023/07/12/1689197791881.png",
      "publishedAt": "2023-07-13T09:30:06Z",
      "content": "The Southeastern U.S. is a hotbed of new business activity, home to nine of the top 10 major metro areas with the most new business applications per 1,000 residents last year.\r\nDriving the news: That… [+1716 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      // loading :false

    }

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
                <NewsItem title={element.title.slice(0, 40)} description={element.description.slice(0, 70)} ImageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}


          </div>
        </div>
      </div>
    )
  }
}

export default News
