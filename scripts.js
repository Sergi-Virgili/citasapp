

const state = {
    user: null,
    
    messageList : [],
    realTimePeriod: 1000,
    realTimeInterval: null
}

//funcion login post controler login


function login() {
   // let name = $('#loginName').value
  //  console.log(name);
    let data = {
        userName: $('#loginName').val()
    }

    let url = 'controlers/controler-login.php'
    $.post(url, data,
        function (response) {
            let obj = JSON.parse(response)
            state.user= obj[0];
            console.log(state.user);
            let html = state.user.name
            render('userName', html)
            msg_request();            
        }    
    );
    
}
 function render(id,html){
    let component = document.getElementById(id);
    component.innerHTML = html
 }

 function msg_request() {
    // let name = $('#loginName').value
   //  console.log(name);
     let data = {
         userId: state.user.id
     }
 
     let url = 'controlers/controler-list-messages.php'
     $.post(url, data,
         function (response) {
             state.messageList = JSON.parse(response)
             console.log(state.messageList)
             let html = '';
             state.MessageList = []
            for (let i = 0; i < state.messageList.length; i++)
                {
                    
                    html += `<li>
                        <div class="team">${state.messageList[i].team}</div>
                        <div class="text">${state.messageList[i].text}</div>
                        <div class="coder">from: ${state.messageList[i].from}</div>
                        <div class="teacher">to: ${state.messageList[i].to}</div>
                        </li>`
                } 
            render('messagesList',html)        
         }    
     );
     
 }

//save data in state
//function request msg to controler list
//render msg
//hide login component 

//Render List in DOM

function renderMessageList() {
  
    let html = ''
    for (let i = 0; i < store.messageList.length; i++)
        {
            html += `<li>${store.messageList[i].nameCoder}</li>`
        }
    let list = document.getElementById('messagesList')
    list.innerHTML = ''
    list.innerHTML = html
}

//MISAGES GET CAPTURE
function getMessages(){
    store.renderMessageList = []
    fetch("ms_coders.json")
        .then(function(res) {
            return res.json();
        })
        .then(function(list){
            store.messageList = list
            renderMessageList()
            console.log(list)
        });
}
  
//INTERVAL REAL TIME

function startRealTime() {
    store.realTimeInterval = setInterval (function(){
        getMessages()
    }, 1000)
}

//startRealTime();