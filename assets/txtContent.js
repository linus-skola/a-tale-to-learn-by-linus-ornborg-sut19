//const app = document.getElementById('one')

//const article = document.createElement('article')

//app.appendChild(article)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/repos/linus-skola/a-tale-to-learn-by-linus-ornborg-sut19/contents/', true)
request.onload = function() {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var count = 1;
  if (request.status >= 200 && request.status < 400){
    data.forEach(repo => {
        var url = repo.download_url;
        const fileName = repo.name;
        //var txt = fileName;

        if(fileName.endsWith(".txt")){
          console.log(fileName);
          getContent(url, count);
          console.log(count);
          count++;
        }
        
    })
  } 
  else 
  {
    const errorMessage = document.createElement('h3')
    errorMessage.textContent = `Error loading repositories :(`
    app.appendChild(errorMessage)
  }
}

request.send()


function getContent(url, txt){

  var jsonFile = new XMLHttpRequest();
      jsonFile.open("GET",url,true);
      jsonFile.send();

      jsonFile.onreadystatechange = function() {
          if (jsonFile.readyState== 4 && jsonFile.status == 200) {
            const app = document.getElementById('one')
    
            const name = document.createElement('p')
            name.setAttribute('align', 'center')
            name.textContent = txt;

            const content = document.createElement('p')
            content.setAttribute('align', 'center')
            content.textContent = jsonFile.responseText;

            app.appendChild(name)
            app.appendChild(content)
              
          }
      }
}


/*function getContent(url, txt){
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        //append(xhttp);
        const app = document.getElementById('one')
    
        const name = document.createElement('p')
        name.textContent = txt;

        const content = document.createElement('p')
        content.setAttribute('align', 'center')
        content.textContent = xhttp.responseText;

        app.appendChild(name)
        app.appendChild(content)
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}*/





//function append(xhttp) {
//    const app = document.getElementById('one')

//    const content = document.createElement('p')
  //  content.setAttribute('align', 'center')
    //content.textContent = xhttp.responseText;

//    app.appendChild(content)

//}