import React, { useState } from "react";

export default function News() {
  const [articles, setArticles] = useState({
    status: "ok",
    totalResults: 38,
    articles: [
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: "Brad Lendon, CNN",
        title:
          "Damaged US Navy sub was operating in one of world's most difficult undersea environments, analysts say - CNN",
        description:
          "The US Navy submarine that struck an underwater object in the South China Sea last weekend was operating in one of the world's most difficult undersea environments, one filled with noise from ships above and a seabed with constantly shifting contours that can…",
        url: "https://www.cnn.com/2021/10/08/asia/us-navy-submarine-south-china-sea-intl-hnk-ml/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/211007170307-uss-connecticut-file-super-tease.jpg",
        publishedAt: "2021-10-08T07:47:00Z",
        content:
          "Hong Kong (CNN)The US Navy submarine that struck an underwater object in the South China Sea last weekend was operating in one of the world's most difficult undersea environments, one filled with noi… [+4007 chars]",
      },
      {
        source: {
          id: "independent",
          name: "Independent",
        },
        author: "Via AP news wire",
        title:
          "Colorado woman who won’t get vaccinated is denied kidney transplant - The Independent",
        description:
          "A Colorado woman has been denied a kidney transplant because she won't be vaccinated against COVID-19 due to her religious views",
        url: "https://www.independent.co.uk/news/world/americas/transplants-refuse-covid-vaccine-b1934618.html",
        urlToImage:
          "https://static.independent.co.uk/2021/10/08/01/Virus_Outbreak_Kidney_Transplant_14928.jpg?width=1200&auto=webp&quality=75",
        publishedAt: "2021-10-08T07:13:03Z",
        content:
          "When a Colorado woman found out her hospital wouldnt approve her kidney transplant surgery until she got the COVID-19 vaccine, she was left with a difficult decision pitting her health needs against … [+4706 chars]",
      },
      {
        source: {
          id: null,
          name: "CNBC",
        },
        author: "Elliot Smith",
        title:
          "‘A historic moment’: Why a malaria vaccine in Africa will reignite the fight against disease - CNBC",
        description:
          "Policymakers and health experts have welcomed the WHO's authorization of the first ever malaria vaccine, which could be rolled out in sub-Saharan Africa by the end of 2022.",
        url: "https://www.cnbc.com/2021/10/08/a-historic-moment-why-a-malaria-vaccine-in-africa-will-reignite-the-fight-against-disease.html",
        urlToImage:
          "https://image.cnbcfm.com/api/v1/image/106953319-1633535947064-gettyimages-1167832768-AFP_1K9564.jpeg?v=1633536137",
        publishedAt: "2021-10-08T06:31:20Z",
        content:
          "Policymakers and health experts have welcomed the WHO's authorization of the first ever malaria vaccine, which could be rolled out in sub-Saharan Africa by the end of 2022.\r\nThe WHO signed off on wid… [+2932 chars]",
      },
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: "Story by Reuters",
        title:
          "Taiwan does not seek military confrontation but will defend its freedom, President says - CNN",
        description:
          "Taiwan does not seek military confrontation but will do whatever it takes to defend its freedom, President Tsai Ing-wen said on Friday, amid a rise in tensions with China that has sparked alarm around the world.",
        url: "https://www.cnn.com/2021/10/07/asia/taiwan-military-president-intl-hnk/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/211007221216-restricted-tsai-ing-wen-10-05-2021-super-tease.jpg",
        publishedAt: "2021-10-08T05:43:00Z",
        content:
          "(CNN)Taiwan does not seek military confrontation but will do whatever it takes to defend its freedom, President Tsai Ing-wen said on Friday, amid a rise in tensions with China that has sparked alarm … [+1371 chars]",
      },
      {
        source: {
          id: null,
          name: "ESPN",
        },
        author: "Joon Lee",
        title:
          "Randy Arozarena's history-making homer, straight steal of home provide Rays with more MLB playoffs heroics - ESPN",
        description:
          "Rays star Randy Arozarena made history Thursday by becoming the first player in playoff history to steal home and hit a home run in the same game during Tampa Bay's 5-0 victory over Boston Red in Game 1 of the ALDS.",
        url: "https://www.espn.com/mlb/story/_/id/32358699/randy-arozarena-history-making-homer-straight-steal-home-provide-rays-more-october-heroics",
        urlToImage:
          "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1008%2Fr919971_1296x729_16%2D9.jpg",
        publishedAt: "2021-10-08T04:58:17Z",
        content:
          "Randy Arozarena's supply of October magic never seems to end. Arozarena -- the leading candidate for American League Rookie of the Year -- made history Thursday by becoming the first player in playof… [+2173 chars]",
      },
      {
        source: {
          id: null,
          name: "CBS Sports",
        },
        author: "",
        title:
          "Pete Carroll says Russell Wilson has a 'badly sprained' finger, won't put timetable on quarterback's return - CBS Sports",
        description:
          "Willson left Thursday's loss to the Rams early in the fourth quarter",
        url: "https://www.cbssports.com/nfl/news/pete-carroll-says-russell-wilson-has-a-badly-sprained-finger-wont-put-timetable-on-quarterbacks-return/",
        urlToImage:
          "https://sportshub.cbsistatic.com/i/r/2021/10/08/48e14e57-23a1-4b05-8dd0-2d644ca34c3b/thumbnail/1200x675/8bd661a4a0aef16c88b934383c5ef4d2/russell-wilson-seahawks.jpg",
        publishedAt: "2021-10-08T04:34:00Z",
        content:
          "Russell Wilson has never missed a game in his NFL career, even though his streak of 149 consecutive starts may be in jeopardy. Wilson, who left the Seattle Seahawks 26-17 loss to the Los Angeles Rams… [+2145 chars]",
      },
      {
        source: {
          id: "fox-news",
          name: "Fox News",
        },
        author: "Angelica Stabile",
        title:
          "Hannity shames Mitch McConnell for ‘completely caving’ to Dems’ threats: ‘Where is your backbone?’ - Fox News",
        description:
          "'Hannity' host Sean Hannity slams Sen. Mitch McConnell for giving in to the Democrats' massive spending plan.",
        url: "https://www.foxnews.com/media/hannity-mitch-mcconnell-caving-dems",
        urlToImage:
          "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/cce48f6e-image-2.jpg",
        publishedAt: "2021-10-08T04:25:43Z",
        content:
          'Senate Minority Leader Mitch McConnell gave in to the Democrats wishes by raising the debt ceiling amid negotiations to spend $3.5 trillion and "Hannity" host Sean Hannity blasted the Kentucky Republ… [+1950 chars]',
      },
      {
        source: {
          id: null,
          name: "YouTube",
        },
        author: null,
        title:
          "Parts of India to face power outages owing to coal shortage crisis | Power Plants | English News - WION",
        description:
          "Parts of India may face power outages in the near future. This is due to a coal shortage crisis in a majority of Indian power plants. Asia's third-biggest ec...",
        url: "https://www.youtube.com/watch?v=PZBl6FrrUwk",
        urlToImage: "https://i.ytimg.com/vi/PZBl6FrrUwk/maxresdefault.jpg",
        publishedAt: "2021-10-08T03:39:09Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "BBC News",
        },
        author: "https://www.facebook.com/bbcnews",
        title:
          "Tesla: Elon Musk says company headquarters will move to Texas - BBC News",
        description:
          "Elon Musk announces that the most valuable car company in the world is moving away from California.",
        url: "https://www.bbc.com/news/technology-58838874",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/B84A/production/_120987174_tv071138278.jpg",
        publishedAt: "2021-10-08T03:00:22Z",
        content:
          "By James ClaytonNorth America technology reporter\r\nTesla has announced it will move its company headquarters to Texas from California. \r\nChief executive Elon Musk announced the move at the electric c… [+2200 chars]",
      },
      {
        source: {
          id: "usa-today",
          name: "USA Today",
        },
        author: ", USA TODAY",
        title:
          "Ricardo Pepi scores two goals to lift USMNT over Jamaica in World Cup qualifier - USA TODAY",
        description:
          "Ricardo Pepi got a pair of goals early in the second half, becoming at 18 the youngest American to score in consecutive World Cup qualifiers.",
        url: "https://www.usatoday.com/story/sports/soccer/2021/10/07/usmnt-defeats-jamaica-two-ricardo-pepi-goals/6046091001/",
        urlToImage:
          "https://www.gannett-cdn.com/presto/2021/10/08/USAT/1bce5957-517e-4eee-83d2-23006ebd868c-USP_Soccer__CONCACAF_FIFA_World_Cup_Qualifier-Jama.jpg?auto=webp&crop=5030,2829,x0,y101&format=pjpg&width=1200",
        publishedAt: "2021-10-08T02:27:16Z",
        content:
          "AUSTIN, Texas (AP) — Ricardo Pepi got a pair of goals early in the second half, becoming at 18 the youngest American to score in consecutive World Cup qualifiers, and the United States dominated Jama… [+2921 chars]",
      },
      {
        source: {
          id: "cbs-news",
          name: "CBS News",
        },
        author: "Christopher Christopher",
        title:
          "Ndakasi, mountain gorilla in famous selfie, dies in arms of caretaker who saved her - CBS News",
        description:
          "Ndakasi took her final breath being held by her caretaker, who watched over her since she was two months old.",
        url: "https://www.cbsnews.com/news/ndakasi-gorilla-selfie-dies-caretaker/",
        urlToImage:
          "https://cbsnews1.cbsistatic.com/hub/i/r/2021/10/07/42677489-3e77-4d17-8138-816ad05687a2/thumbnail/1200x630/a650277c0ae2cdc1c1e7cdf672c0d137/gettyimages-1345162368.jpg",
        publishedAt: "2021-10-08T02:21:43Z",
        content:
          "A beloved mountain gorilla who in 2019 struck a pose in a selfie seen around the world has died at the age of 14. The Virunga National Park in the Democratic Republic of Congo said that Ndakasi died … [+2595 chars]",
      },
      {
        source: {
          id: "the-verge",
          name: "The Verge",
        },
        author: "Dieter Bohn",
        title:
          "SVP of Android offers open invitation to help Apple put RCS texting on the iPhone - The Verge",
        description:
          "Google’s Hiroshi Lockheimer tweeted an offer to Apple to support the new texting standard RCS, which is becoming the norm on Android. It is designed to replace SMS, but is not supported on the iPhone.",
        url: "https://www.theverge.com/2021/10/7/22715696/svp-android-invitation-apple-rcs-texting-iphone",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/XNLi9aVEG7kKjB6KJ4Bmola-TRM=/0x341:3000x1912/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22909212/1200178032.jpg",
        publishedAt: "2021-10-08T02:10:15Z",
        content:
          "Dont text us, well text you\r\nIn a tweet earlier today, Google SVP Hiroshi Lockheimer called on Apple to support RCS, the next-generation texting standard thats supposed to supplant SMS. He offered an… [+3274 chars]",
      },
      {
        source: {
          id: "associated-press",
          name: "Associated Press",
        },
        author: "Matthew Daly",
        title:
          "Biden to restore 3 national monuments cut by Trump - Associated Press",
        description:
          "WASHINGTON (AP) — President Joe Biden will restore two sprawling national monuments in Utah that have been at the center of a long-running public lands dispute, and a separate marine conservation area in New England that recently has been used for commercial …",
        url: "https://apnews.com/b763897fc47136339bd12360a90079c0/",
        urlToImage:
          "https://storage.googleapis.com/afs-prod/media/6953c21bed33424aa09473b111c609bf/3000.jpeg",
        publishedAt: "2021-10-08T02:03:45Z",
        content:
          "WASHINGTON (AP) President Joe Biden will restore two sprawling national monuments in Utah that have been at the center of a long-running public lands dispute, and a separate marine conservation area … [+7252 chars]",
      },
      {
        source: {
          id: null,
          name: "NBCSports.com",
        },
        author: null,
        title:
          "McCullers bigger problem for Sox than one loss in ALDS - NBC Sports Chicago",
        description:
          "In Game 1 of the ALDS, Astros ace Lance McCullers held the White Sox to four hits in 6 2/3 shutout innings.",
        url: "https://www.nbcsports.com/chicago/white-sox/astros-lance-mccullers-bigger-problem-white-sox-one-loss",
        urlToImage:
          "https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Luis-Robert-chicago-white-sox-USATSI_16908623.jpg",
        publishedAt: "2021-10-08T02:03:45Z",
        content:
          "HOUSTON Orbit, the Astros mascot, made it from the right field gate to centerfield and halfway back before Adam Engle reached the dugout entrance.\r\nOrbit was lugging a giant Astros flag, but Engle wa… [+3769 chars]",
      },
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: "Virginia Langmaid and Naomi Thomas, CNN",
        title:
          "More people are getting Covid-19 vaccine boosters than getting their first shots, CDC data shows - CNN",
        description:
          "More people are receiving a booster dose of a Covid-19 vaccine each day than are getting their first shot or are becoming fully vaccinated each day, CDC data shows.",
        url: "https://www.cnn.com/2021/10/07/health/boosters-outpace-initial-vaccines/index.html",
        urlToImage:
          "https://cdn.cnn.com/cnnnext/dam/assets/211007133156-california-booster-shot-1001-super-tease.jpg",
        publishedAt: "2021-10-08T01:26:00Z",
        content:
          '(CNN)Mark Warschauer, a professor of education at the University of California, Irvine, was "tremendously excited" about the authorization of Covid-19 vaccines, and happy when he became eligible to g… [+4971 chars]',
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "",
        title: "19 states file a challenge to Postal Service changes - NPR",
        description:
          "The changes the Postal Service plans include slower delivery of some first-class mail and higher holiday-period pricing — changes the states want regulators to review.",
        url: "https://www.npr.org/2021/10/07/1044205288/states-complaints-postal-service-cutbacks",
        urlToImage:
          "https://media.npr.org/assets/img/2021/10/07/USPSLogo_wide-43d99fff69193233585d5ee24dbb9415917787fc.jpg?s=1400",
        publishedAt: "2021-10-08T00:56:11Z",
        content:
          "A USPS logo is seen on a mailbox in New York City.\r\nVIEW press/Corbis via Getty Images\r\nAttorneys general in 19 states and the District of Columbia filed an administrative complaint Thursday seeking … [+2004 chars]",
      },
      {
        source: {
          id: null,
          name: "Los Angeles Times",
        },
        author: "Mark Olsen",
        title:
          "How James Bond is changed in Cary Fukunaga's 'No Time to Die' - Los Angeles Times",
        description:
          "Cary Fukunaga steps into directing the James Bond franchise with 'No Time to Die,' bringing his sophisticated sensibility to the emotional conclusion of Daniel Craig's five-film run in the role.",
        url: "https://www.latimes.com/entertainment-arts/movies/story/2021-10-07/no-time-to-die-james-bond-cary-fukunaga",
        urlToImage:
          "https://ca-times.brightspotcdn.com/dims4/default/c1eb849/2147483647/strip/true/crop/4928x2587+0+346/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F07%2F15%2F706ad33b45fab27449168f5698d3%2Fbond-25-js1-9703-2021092853839282-20210928082225-rgb.jpg",
        publishedAt: "2021-10-08T00:47:00Z",
        content:
          "After some 18 months of delays due to the global pandemic, director and co-writer Cary Joji Fukunaga had his doubts that his first entry in the enduring James Bond franchise, No Time to Die, was real… [+9782 chars]",
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Raechal Shewfelt",
        title:
          "Drama at 'The View': 'Shark Tank' star Barbara Corcoran apologizes for making a joke about Whoopi Goldberg's size - Yahoo Entertainment",
        description:
          'The "Shark Tank" judge appeared on Thursday\'s episode of "The View."',
        url: "https://www.yahoo.com/entertainment/the-view-drama-shark-tank-star-barbara-corcoran-apologizes-for-joke-about-whoopi-goldberg-003912888.html",
        urlToImage:
          "https://s.yimg.com/os/creatr-uploaded-images/2021-10/f9a3baa0-27ba-11ec-9d7f-ca9922e3b2e1",
        publishedAt: "2021-10-08T00:40:26Z",
        content:
          "Barbara Corcoran stars on TV's Shark Tank. (Christopher Willard/ABC via Getty Images)\r\nWhat would have been just another appearance by the stars of Shark Tank on The View Thursday both are long-runni… [+2869 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Guardian staff reporter",
        title:
          "Thai restaurant rides wave of success as customers flock to dine in floodwaters - The Guardian",
        description:
          "The rising Chao Phraya river has proved a unique drawcard as footage of diners dodging the wake of passing boats goes viral",
        url: "https://amp.theguardian.com/world/2021/oct/08/thai-restaurant-rides-wave-of-success-as-customers-flock-to-dine-in-floodwaters",
        urlToImage:
          "https://i.guim.co.uk/img/media/40e698c04a87e6fd68a3e0e4f54156e4135f3242/0_278_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d7487b60cc9d0e26da947a4a3aa9427a",
        publishedAt: "2021-10-08T00:37:00Z",
        content:
          "Riverside restaurant owner Titiporn Jutimanon feared that the floods afflicting many parts of Thailand could be the end of a business already struggling from the pandemic.\r\nBut with the rising tide o… [+1627 chars]",
      },
      {
        source: {
          id: "the-hill",
          name: "The Hill",
        },
        author: "Joseph Choi",
        title:
          "Florida Board of Education approves sanctions on eight school districts over coronavirus mandates - The Hill",
        description:
          "The Florida Board of Education on Thursday voted unanimously in favor of sanctioning eight s...",
        url: "https://thehill.com/homenews/state-watch/575877-florida-board-of-education-approves-sanctions-on-eight-school-districts",
        urlToImage:
          "https://thehill.com/sites/default/files/ca_idahocomask_102320getty_6.jpg",
        publishedAt: "2021-10-08T00:19:32Z",
        content:
          "The Florida Board of Education on Thursday voted unanimously in favor of sanctioning eight school districts with mask mandates that do not allow parents to opt out.\r\nThe eight districts  Alachua, Bre… [+2925 chars]",
      },
    ],
  });
  const [source, setSource] = useState("top-headlines");


  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=3fce75e915a7487b89c5dfee5ce937a9"
  );

  request.onload = function () {
    var response = request.response;
    var parsedData = JSON.parse(response);
    setArticles(parsedData);
    console.log(articles);
    
  };
  
    request.send();

  return (
    <React.Fragment>
      <div className="nav-comp">
        <ul className="nav-comp-ul">
          <li>
            <button onClick={() => setSource("cnn")}>CNN</button>
          </li>
          <li>
            <button onClick={() => setSource("independent")}>
              Independent
            </button>
          </li>
          <li>
            <button onClick={() => setSource("fox-news")}>Fox News</button>
          </li>
          <li>
            <button onClick={() => setSource("the-verge")}>The Verge</button>
          </li>
          <li>
            <button onClick={() => setSource("the-hill")}>The Hill</button>
          </li>
          <li>
            <button onClick={() => setSource(null)}>Other Source</button>
          </li>
        </ul>
      </div>

    {articles.status === "error" ? 
      <div  className="articles-error">
        <h2>{articles.message}</h2>
      </div> : 
      <div className="articles-con">
        {articles.articles
          .filter((f) => f.source.id === source)
          .map((a) => (
            <div className="article">
              <img src={a.urlToImage} />
              <div className="article-type">
                <h4>{a.title}</h4>
                <p>{a.description}</p>
              </div>
            </div>
          ))}
      </div>}
    </React.Fragment>
  );
}
