$(document).ready(function() {
  console.log("ready bitch");
  $("submit").on("click", sendForm);

  function sendForm() {
    var xhr = new XMLHttpRequest();
    var url = "/messages";
    var method = "post";
    xhr.open(method,url,true);
    xhr.send();
    var

  }

})
