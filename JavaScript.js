var i = 0;
var a = true;
document.addEventListener("DOMContentLoaded",
    function (event)
    {
        function sayHello(event)
        {
            document.getElementById("label").innerHTML = (i += 1);

            this.textContent = "Said it!";
            var name = document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";

            document.getElementById("content").innerHTML = message;

            if (name === "student")
            {
                if (a == true)
                {
                    var title = document.querySelector("#title").textContent;
                    title += " & Lovin' it!";
                    document.querySelector("h1").textContent = title;
                    a = false;
                }  
            } 
        }
      // Unobtrusive event binding
      document.querySelector("button").addEventListener("click", sayHello);
  });