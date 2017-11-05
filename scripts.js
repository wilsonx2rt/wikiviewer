
// when called performs fetch to wikipedia api and displays data
function doWikiSearch() {
  let searchText = document.querySelector('#search').value;
  let searchURL = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchText}&format=json&origin=*`;
  fetch(searchURL)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let output = '<h2 class="m-4">Wikipedia Search Results</h2>';
      //loop through the data and display to page
      for (var i = 0; i < data[1].length; i++) {
        let cardUrl = data[3][i];
        output +=
          `<a href="${cardUrl}" target="_blank">` +
          '<div class="card mb-3" style="width: 70vw;">' +
          '<div class="card-body">' +
          '<h4 class="card-title">' + data[1][i] + '</h4>' +
          '<p class="card-text">' + data[2][i] + '</p>' +
          '</div> <!-- end card-body -->' +
          '</div> <!-- end card -->' +
          '</a>';
      }
      document.querySelector('.card-deck').innerHTML = output;
    });
}
// call to delete content of search field
function clearSearch() {
  document.querySelector('#search').value = "";
}
// buttons and search input event listeners
document.querySelector('#search').addEventListener('keydown', function handleKeyPress(e){if (e.keyCode === 13) {doWikiSearch();}});
document.querySelector('#search-button').addEventListener('click', doWikiSearch);
document.querySelector('#delete-button').addEventListener('click', clearSearch);
