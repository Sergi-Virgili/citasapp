<?php
echo '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>App Citas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container"> 
        <section id = "loginSection">
            <input id = "loginName" required type = "text" placeholder = "name">
            <input id = "loginPassword" required type = "password" placeholder = "password">
            <button id = "logiButton" onClick="login()">Login</button>
        </section>
        <p id="userName"></p>
		<h2>List Messages</h2>
		<ul id="messagesList"><ul>


		<section id="sendSection">
            
            <input id = "sendText" type="text-area">
            <button id = "sendButton">Send</button>
		</section>
    </div>
    <section id="sendSection">
            
        <input id = "sendText" type="text-area">
        <button id = "sendButton">Send</button>
    </section>
    
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
    <script src="scripts.js"></script>
</body>
</html>
'
?>