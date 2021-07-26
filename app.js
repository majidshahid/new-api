var a =prompt("enter news name","tesla")

function news1(){
    var a = document.getElementById('new');
    var b =a.value;
    return b
  
  }
  
  
    let news = document.getElementById("news");
  fetch(`https://newsapi.org/v2/everything?q=${a}&from=2021-07-24&sortBy=publishedAt&apiKey=4542f52d23234fb7b1a8f81245b11c68`)
    .then(data => data.json())
    .then(data => {
        console.log(data)
      let abc;
  
      for (var i = 0; i < data.articles.length; i++) {
  
        abc = `<div id="news" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${data.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"> ${data.articles[i].title}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>`
        news.innerHTML += abc
      }
  
  
    }
    )