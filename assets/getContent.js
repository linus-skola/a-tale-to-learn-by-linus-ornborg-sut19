const app = document.getElementById('one')

<<<<<<< HEAD
var url = "https://raw.githubusercontent.com/linus-skola/a-tale-to-learn-by-linus-ornborg-sut19/master/9_end.txt";
=======
var url = "https://raw.githubusercontent.com/linus-skola/a-tale-to-learn-by-linus-ornborg-sut19/master/1_tale_begins.txt";
>>>>>>> linus
var xhttp;
xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(xhttp);
    }
};
xhttp.open("GET", url, true);
xhttp.send();

function myFunction(xhttp) {
    const content = document.createElement('p')
    content.setAttribute('align', 'center')
    content.textContent = xhttp.responseText;

    app.appendChild(content)
<<<<<<< HEAD
    console.log(content)
=======
>>>>>>> linus

    //document.getElementById("one").innerHTML = xhttp.responseText;
  }