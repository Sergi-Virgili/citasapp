

const store = {
    userName: '',
    userPassword: '',
    userRol: '',
    messageList : [],
    realTimePeriod: 1000,
    realTimeInterval: null
}

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

startRealTime();