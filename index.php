<?php
echo '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>App R</title>
    <link rel="stylesheet" href="./src/styles.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <div class="container">
            <div class="main">
                <div class="title">App R</div>
                    <div id="loginform"> 
                        <section id="loginSection">
                                <div id="loginerrormessage"></div>
                                <input id ="loginName" required type ="text" placeholder="Name">
                                <input id ="loginPassword" required type="password" placeholder="Password">
                                <button id ="loginButton">Login</button>
                        </section>
                    </div>
                    <div id="messagecards">
                        <section class="messageSection">
                            <h2>List Messages</h2>
                            <ul id="messagesList">
                                    <div class="card">
                                            <div class="card-title"></div>
                                            <div class="card-desc"></div>
                                            <div class="card-actions">
                                                <button type='button' class='card-action-delete'></button>
                                                <button type='button' class='card-action-done'></button>
                                            </div>
                            <ul>
                        </section>
                    </div>        
                    <div class="sendSection">
                        <section id="sendSection">
                            <h2>Request Form</h2>
                            <select name="Trainers">
                                    <option value="David">David</option>
                                    <option value="Edgar">Edgar</option>
                                    <option value="Both">Both</option>
                            </select> 
                            <input id ="sendText" type="text-area">
                            <button id ="sendButton">Send Request</button>
                    </section>
                    </div>
                </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="scripts.js"></script>
</body>
</html>
'
?>
