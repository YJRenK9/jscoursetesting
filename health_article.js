// create a new XMLHttpRequest
var xhr = new XMLHttpRequest();
// url for the data
var url = './health_article.json'

// first param means get request, 
// second param is the url to fetch the data, and third param means async is set to true
xhr.open('GET', url, true);
// to ensure the data type is json
xhr.responseType = 'json';

// if you want to load the JSON data onto the webpage, you must call onload function
xhr.onload = function() {
    // get the articles array from the json file
    var articles = xhr.response.articles;
    // get the reference of the articles div from HTML file
    var articlesDiv = document.getElementById('articles');

    // for each article, create an article and add it to the articles list
    articles.forEach(function(article) {
        // create div for article
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        // create title of the article
        var title = document.createElement('h2');
        title.textContent = article.title;

        // create description of the article
        var description = document.createElement('p');
        description.textContent = article.description;

        // create heading 3 called Ways to Achieve
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        // create a list for ways to achieve better health
        var waysList = document.createElement('ul');
        
        // for each way, add one to the ways list
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        // create heading 3 called Benefits
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        // create a list of benefits of improving health
        var benefitsList = document.createElement('ul');
        
        // for each benefit, add one to the benefits list
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // add the article elements to the article
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // add the article to the article list
        articlesDiv.appendChild(articleDiv);
    });

    
}

// used to send the request, so the backend can display the JSON data onto the webpage
xhr.send();