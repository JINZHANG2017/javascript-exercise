function fetchData(url, successCallback, errorCallback) {
  const xmlHttpRequest = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  // debugger;
  xmlHttpRequest.onreadystatechange = function() {
    // console.log(xmlHttpRequest.readyState);
    if (xmlHttpRequest.readyState === 4) {
      if (xmlHttpRequest.status === 200) {
        successCallback(xmlHttpRequest.responseText);
      } else {
        errorCallback(xmlHttpRequest.statusText);
      }
    }
  };
  xmlHttpRequest.open('GET', url);
  xmlHttpRequest.send();
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
