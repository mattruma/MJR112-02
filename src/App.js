import React from 'react';

function App() {
  var url = '/api/message';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data.text);
      document.querySelector('h2').textContent = data.text;
    });
  
  return <div><h1>Hello world! - from React App</h1><h2>Message for API</h2></div>;
}

export default App;
