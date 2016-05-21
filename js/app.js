//access-control-request-header origin
$(document).ready(function() {

  //--  Variables --//
  var main = $('#main');

  var newArticle = '<article class="article">' +
                      '<section class="featuredImage">' +
                        '<img src="" alt="" />' +
                      '</section>' +
                      '<section class="articleContent">' +
                          '<a href="#"><h3 class="articleTitle"></h3></a><h6 class="articleBody"></h6>' +
                      '</section>' +
                      '<section class="impressions"></section>' +
                      '<div class="clearfix"></div>' +
                    '</article>';

  var article = $('.article');
  var featuredImage = $('.featuredImage');
  var articleTitle = $('.articleTitle');
  var articleContent = $('.articleContent');
  var impressions = $('.impressions');
  var currentSource = $('#currentSource');
  var selectSource = $('#selectSource');
  var articleBody = $('.articleBody');
  //--   API's  --//

  $.ajax({
    url: "http://content.guardianapis.com/search?page-size=20&show-fields=body,wordcount&order-by=newest&type=article&show-elements=image&api-key=f8d79eae-7f6d-430a-bf71-88212201c19b",
    format: 'json',
    method: 'GET',
    success: function(data) {
      $(data.response.results).each(function(index, value) {
        $(main).append(newArticle);
        $(articleBody).append(value.fields.body);

      });
      console.log(data.response.results);
      // $('<section class="articleContent"><a href="#"><h3>').text(guardianResponse.response.object.webTitle).appendTo(main);
    }
  });

  // $.ajax({
  //   url:  "http://api.ft.com/content/search/v1/apiKey=4hagbzxd5ppgurcs5pbk47jw",
  //   format: 'json',
  //   method: 'GET',
  //   success: function(data) {
  //     console.log(data);
  //   }
  // });
  //
  // $.ajax({
  //   url: 'http://www.justice.gov/api/v1/press_releases.json?pagesize=2',
  //   format: 'json',
  //   method: 'GET',
  //   success: function(data) {
  //     console.log(data);
  //   }
  // })


  // $.ajax({
  //   url: 'https://api.newsapi.aylien.com/api/v1/stories?published_at.start=NOW-30DAYS&published_at.end=NOW&categories.id%5B%5D=IAB2-10&categories.taxonomy=iab-qag&language=en&sort_by=social_shares_count',
  //   method: 'GET',
  //   headers: {'X-AYLIEN-NewsAPI-Application-ID': 'fd91fc28', 'X-AYLIEN-NewsAPI-Application-Key': '24ed8df1616666ace5575b369419f4b8'},
  //   success: function(alyienResponse){
  //     console.log(alyien.response.results);
  //   }
  // });
  //
  // $.ajax({
  //   url: 'http://api.ft.com',
  //   method: 'GET',
  //
  //   });



  //--  Events  --//


  // $(selectSource).on('click', 'li', function(event){
  //   var currentFeed = $(this).text();
  //   $(currentSource).html(currentFeed);
  //   displayFeed(currentFeed);
  // });
  // function displayFeed(myCurrentFeed){
  //   switch (currentSource) {
  //     case "The Guardian":
  //
  //       break;
  //     default:
  //
  //   }
  // }





  $.ajax({
    url: "https://yboss.yahooapis.com/ysearch/web?q=yahoo&format=json&key=dj0yJmk9RVQ0S3RuQ3EyYjVUJmQ9WVdrOVUwMDNiRUUwTlRBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03Zg--",
    dataType: 'jsonp',
    method: 'GET',
    success: function(response) {
      console.log(response);
    }
  });



});
