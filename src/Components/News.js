import React, { useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([
    {"author": "Benjamin Weiser",
    "title": "Trump Sues His Niece and The New York Times Over Leaked Tax Documents - The New York Times",
    "description": "Former President Donald J. Trump filed a lawsuit on Tuesday accusing Mary Trump and three Times reporters of conspiring to publish information about his tax records.",
    "url": "https://www.nytimes.com/2021/09/22/nyregion/mary-trump-taxes-lawsuit.html",
    "urlToImage": "https://static01.nyt.com/images/2021/09/22/multimedia/22dc-trump-lawsuit-02/22dc-trump-lawsuit-02-facebookJumbo.jpg",
    "publishedAt": "2021-09-22T11:59:00Z",
    "content": "In 2019, three Times reporters David Barstow, Susanne Craig and Russ Buettner were awarded a Pulitzer Prize for explanatory reporting for that article and others about Mr. Trumps taxes. In announcing… [+1705 chars]"
    },{"author": null,
    "title": "Gas station clerk murdered for asking a customer to wear a mask - CBS News",
    "description": "One German politician warned of \"an inconceivable level of radicalization,\" saying the worker was killed for simply pointing out a nationwide rule.",
    "url": "https://www.cbsnews.com/news/covid-germany-mask-murder-gas-station-attendant/",
    "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/09/21/bb565088-c2f7-449a-b02f-0686a3b2ddfa/thumbnail/1200x630/108ad30401bbd8d2e526ef895c1ea5bd/germany-mask-murder-1235399530.jpg",
    "publishedAt": "2021-09-22T11:57:11Z",
    "content": "Berlin — Senior politicians in Germany expressed shock over the weekend killing of a young gas station clerk who asked a customer to wear a face mask, and they warned Tuesday against the radicalizati… [+2825 chars]"
    },{"author": null,
    "title": "'It looks personal!' - Max's take on the Ben Simmons news | Keyshawn, JWill & Max - ESPN",
    "description": null,
    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NXF6T3J6bk84azjSAQA?oc=5",
    "urlToImage": "https://www.cbsnews.com/news/willie-garson-dies-age-57-sex-and-the-city-actor-stanford-blatch/",
    "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2021/09/22/63ef71aa-0461-4e41-a3f5-9ef9af00fdc4/thumbnail/1200x630g2/08e3bbb086af242e48316d7a93ee93e4/ap21265005332656.jpg",
    "publishedAt": "2021-09-22T11:51:30Z",
    "content": null
    },{"author": "Jack Guy, CNN Business",
    "title": "Netflix buys rights to Roald Dahl's beloved children's stories - CNN",
    "description": "Netflix says it has acquired the rights to Roald Dahl's stories and plans to create a \"unique universe\" of products based on them.",
    "url": "https://www.cnn.com/2021/09/22/media/netflix-roald-dahl-deal-scli-intl/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210922042630-roald-dahl-james-and-the-giant-peach-file-restricted-super-tease.jpg",
    "publishedAt": "2021-09-22T11:20:00Z",
    "content": null
    },    {"author": "Benjamin Weiser",
    "title": "Trump Sues His Niece and The New York Times Over Leaked Tax Documents - The New York Times",
    "description": "Former President Donald J. Trump filed a lawsuit on Tuesday accusing Mary Trump and three Times reporters of conspiring to publish information about his tax records.",
    "url": "https://www.nytimes.com/2021/09/22/nyregion/mary-trump-taxes-lawsuit.html",
    "urlToImage": "https://static01.nyt.com/images/2021/09/22/multimedia/22dc-trump-lawsuit-02/22dc-trump-lawsuit-02-facebookJumbo.jpg",
    "publishedAt": "2021-09-22T11:59:00Z",
    "content": "In 2019, three Times reporters David Barstow, Susanne Craig and Russ Buettner were awarded a Pulitzer Prize for explanatory reporting for that article and others about Mr. Trumps taxes. In announcing… [+1705 chars]"
    },{"author": null,
    "title": "Gas station clerk murdered for asking a customer to wear a mask - CBS News",
    "description": "One German politician warned of \"an inconceivable level of radicalization,\" saying the worker was killed for simply pointing out a nationwide rule.",
    "url": "https://www.cbsnews.com/news/covid-germany-mask-murder-gas-station-attendant/",
    "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/09/21/bb565088-c2f7-449a-b02f-0686a3b2ddfa/thumbnail/1200x630/108ad30401bbd8d2e526ef895c1ea5bd/germany-mask-murder-1235399530.jpg",
    "publishedAt": "2021-09-22T11:57:11Z",
    "content": "Berlin — Senior politicians in Germany expressed shock over the weekend killing of a young gas station clerk who asked a customer to wear a face mask, and they warned Tuesday against the radicalizati… [+2825 chars]"
    },{"author": null,
    "title": "'It looks personal!' - Max's take on the Ben Simmons news | Keyshawn, JWill & Max - ESPN",
    "description": null,
    "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NXF6T3J6bk84azjSAQA?oc=5",
    "urlToImage": "https://www.cbsnews.com/news/willie-garson-dies-age-57-sex-and-the-city-actor-stanford-blatch/",
    "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2021/09/22/63ef71aa-0461-4e41-a3f5-9ef9af00fdc4/thumbnail/1200x630g2/08e3bbb086af242e48316d7a93ee93e4/ap21265005332656.jpg",
    "publishedAt": "2021-09-22T11:51:30Z",
    "content": null
    },{"author": "Jack Guy, CNN Business",
    "title": "Netflix buys rights to Roald Dahl's beloved children's stories - CNN",
    "description": "Netflix says it has acquired the rights to Roald Dahl's stories and plans to create a \"unique universe\" of products based on them.",
    "url": "https://www.cnn.com/2021/09/22/media/netflix-roald-dahl-deal-scli-intl/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210922042630-roald-dahl-james-and-the-giant-peach-file-restricted-super-tease.jpg",
    "publishedAt": "2021-09-22T11:20:00Z",
    "content": null
    }
  ]);
  const [category, setCategory] = useState("top-headlines");

 /* https: var url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=3fce75e915a7487b89c5dfee5ce937a9";

  var req = new Request(url);

  fetch(req)
    .then((response) => response.json())
    .then((data) => setArticles(data.articles))
    .catch(function (error) {
      console.error(error);
    });*/

  console.log(category);
  return (
    <React.Fragment>
      <div className="nav-comp">
        <ul className="nav-comp-ul">
          <li>
            <button onClick={() => setCategory("top-headlines")}>Latest</button>
          </li>
          <li>
            <button onClick={() => setCategory("business")}>Business</button>
          </li>
          <li>
            <button onClick={() => setCategory("entertainment")}>
              Entertainment
            </button>
          </li>
          <li>
            <button onClick={() => setCategory("health")}>Health</button>
          </li>
          <li>
            <button onClick={() => setCategory("science")}>Science</button>
          </li>
          <li>
            <button onClick={() => setCategory("sports")}>Sport</button>
          </li>
        </ul>
      </div>

      <div className="articles-con">
        {articles.map((a) => (
          <div className="article">
            <img src={a.urlToImage} />
            <div className="article-type">
              <h4>{a.title}</h4>
              <p>{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
