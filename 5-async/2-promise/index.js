function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xmlHttpRequest = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xmlHttpRequest.onreadystatechange = function() {
      // console.log(xmlHttpRequest.readyState);
      if (xmlHttpRequest.readyState === 4) {
        if (xmlHttpRequest.status === 200) {
          resolve(xmlHttpRequest.responseText);
        } else {
          reject(xmlHttpRequest.statusText);
        }
      }
    };
    xmlHttpRequest.open('GET', url);
    xmlHttpRequest.send();
    // end -->
  });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(JSON.parse(result).name);
  })
  .catch(error => {
    console.error(error);
  });
