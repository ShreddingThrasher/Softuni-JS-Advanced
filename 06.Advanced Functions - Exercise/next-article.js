function getArticleGenerator(articles) {
    
    let articlesArr = articles;

    function showNext(){

        if(articlesArr.length > 0){
            let articleElement = document.createElement('article');
            articleElement.textContent = articlesArr.shift();
            document.getElementById('content').appendChild(articleElement);
        }
    }

    return showNext;
}