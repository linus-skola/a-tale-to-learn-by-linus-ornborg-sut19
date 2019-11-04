//const app = document.getElementById('one')

//const article = document.createElement('article')

//app.appendChild(article)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/repos/linus-skola/a-tale-to-learn-by-linus-ornborg-sut19/contents/', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400){
    data.forEach(repo => {
        var txt;
        const content = repo.name;
        if(content.endsWith(".txt")){
            console.log(content);
            console.log(repo.download_url);
            getContent(repo.download_url);
        }
        
    })
  } else {
    const errorMessage = document.createElement('h3')
    errorMessage.textContent = `Error loading repositories :(`
    app.appendChild(errorMessage)
  }
}

request.send()

function getContent(url){
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        append(xhttp);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function append(xhttp) {
    const app = document.getElementById('one')
    
    const content = document.createElement('p')
    content.setAttribute('align', 'center')
    content.textContent = xhttp.responseText;

    app.appendChild(content)

}