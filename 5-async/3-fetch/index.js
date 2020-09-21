function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  // end -->
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .catch(function(e) {
      return e;
    });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
