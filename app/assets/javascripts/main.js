$(document).ready(function() {

  function showMessages() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "/messages", true);
    xhr.onreadystatechange = function() {
      if (this.readyState === 4) {
        var messages = JSON.parse(xhr.response);
        var ul = document.createElement("ul");
        ul.id = "sent-messages";
        var li = document.createElement("li");
        ul.appendChild(li);
        for (var i = 0, i < messages.length, i++) {
          li.textContent = messages[i].message;
        }
      };
    };
    xhr.send(null);
  };







  $("button").on("click", function() {

    $("body").append("messages[title]", "messages[message]");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/messages", false);
    xhr.send(form);
    xhr.setRequestHeader('Content-Type', 'application/json');

  });

});
