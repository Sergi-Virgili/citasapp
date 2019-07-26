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
            <button id = "logiButton">Login</button>
        </section>
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

    <script src="scripts.js"></script>
</body>
</html>
'
?>