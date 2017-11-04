// when called performs fetch to wikipedia api and displays data
function doWikiSearch() {
  let searchText = document.querySelector('#search').value;
  let searchURL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchText}&format=json&origin=*`;
  fetch(searchURL)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      for (var i = 0; i < data[1].length; i++) {
        createContentCard();
        document.querySelector('.card-title').innerHTML = data[1][i];
        document.querySelector('.card-text').innerHTML = data[2][i];
        document.querySelector('.btn-primary').href = data[3][i];
      }

    });
}
// call to delete content of search field
function clearSearch() {
  document.querySelector('#search').value = "";
}

//call to create content card for search results
function createContentCard() {
  var card = '<div class=\"card\" style=\"width: 100vh;\"><div class=\"card-body\"><h4 class=\"card-title\">Card title</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p><a href=\"#\" class=\"btn btn-primary\">Go somewhere</a></div></div>';
  document.querySelector('.card-deck').innerHTML += card;
}
// buttons and search input event listeners
document.querySelector('#search').addEventListener('keydown', function handleKeyPress(e){if (e.keyCode === 13) {doWikiSearch();}});
document.querySelector('#search-button').addEventListener('click', doWikiSearch);
document.querySelector('#delete-button').addEventListener('click', clearSearch);
