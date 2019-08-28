/* This code allows a user to change the background color of  a page when they click a button. It also displays the color value in the console log each time the button is clicked on */
function changeBackgroundColor() {
  let json;
  let hexCode;

  /* This code sends a new XMLHttpRequest to the server and from that sends a get request and from that checks to make sure that request was successful. */
  http = new XMLHttpRequest();
  http.open('GET', 'https://api.noopschallenge.com/hexbot', true)
  http.send();

  /* This code shows that the http function is ready to be used in order for this to work. */
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)

/* This code shows the responseText of the color value each time the button is clicked on and displays this data in the console log rather than on the HTML page.*/
    {
      console.log(this.responseText)

      /* This code passes the responseText for each color value when the button is clicked on and from this displays each backgroundColor when the button is clciked on in the HTML page. */
      json = JSON.parse(this.responseText);

      /* This code shows an array of colors and the value of each colour displayed at 0. It also shows that the backgroundColor of the document body will chnage color each time from using the hexCode it got from the success of the get request earlier in the code. */
      hexCode = json['colors'][0]['value'];
      document.body.style.backgroundColor = hexCode;
    }
  };
}
