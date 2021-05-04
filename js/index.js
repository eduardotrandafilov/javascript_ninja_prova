(function(){
  window.addEventListener("load", function(event) {
    console.log("Todos os recursos terminaram o carregamento!");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("btn-lotofacil").innerText=myObj.types[0].type;
        document.getElementById("btn-megasena").innerText=myObj.types[1].type;
        document.getElementById("btn-quina").innerText=myObj.types[2].type;
      }
    };
    xmlhttp.open("GET","/json/games.json", true);
    xmlhttp.send();
  });
})();


