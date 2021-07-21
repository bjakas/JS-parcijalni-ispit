const inputElement = document.querySelector("[data-input-field]");
const resultElement = document.querySelector("[data-result-field]");
const loadElement = document.querySelector("[data-loading-field]");
const errorElement = document.querySelector("[data-error-field]");

loadElement.innerText = "Please wait while data is loading...";
errorElement.innerText = "";

inputElement.addEventListener("keyup", (event) => {
  const value = event.target.value;

  resultElement.innerHTML = "";
  errorElement.innerText = "";
  loadElement.innerText = "Please wait while data is loading...";

  fetch(`https://itunes.apple.com/search?term=${value}&entity=song`)
    .then(response => {
      return response.json();
      /*if // check if response is ok and console either outcome
       (response.ok) {
        console.log("Success!");
        return response.json();
      } else {
        console.error("Not successful");
      };
    */
    })
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.results.length; i++) {
        const result = data.results[i];
        console.log(result);
        const resultItemElement = document.createElement('li');
        resultItemElement.innerText = `Artist name: ${result.artistName}, song: ${result.trackName}`;
        resultElement.appendChild(resultItemElement);
        loadElement.innerText = "";
      }
    })
    .catch(error => {
      console.error(error);
      loadElement.innerText = "";
      errorElement.innerText = "There has been an error while retrieving data.";
    })
});


