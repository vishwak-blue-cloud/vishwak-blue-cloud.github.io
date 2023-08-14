var conversations = {};

var currentConversation = {};

var routes = document.getElementById("routes");

var message = document.getElementById("message");

var statusUpdate = document.getElementById("showStatus");

var sendLog = document.getElementById("logs");

var tempMessage = [];

function updateStatus(text){
    try{
        statusUpdate.innerText = 'Instruction - ' + text;
    }
    catch(error){
        console.log(error);
    }
}

function speak(text){
    try{
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }
    catch(error){
        console.log(error);
    }
}

function scrollToBottom()
{
    try{
        var height = document.body.scrollHeight;
        window.scroll(0 , height);
    }
    catch(error){
        console.log(error);
    }
}

function showMessage(who, text){
    try{
        var makeData = {}
        makeData["who"] = who;
        makeData["text"] = text
        tempMessage.push(makeData);
        var makeElements = []
        for(var i = 0;i < tempMessage.length;i++){
            if(tempMessage[i]["who"] == "Captain"){
                makeElements.push('<div class="cell"><p><mark class="markMessageTwo"><b>' + tempMessage[i]["who"] + '</b></mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + tempMessage[i]["text"] + '</p></div>');
            }
            else{
                makeElements.push('<div class="cell"><p><mark class="markMessageOne"><b>' + tempMessage[i]["who"] + '</b></mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + tempMessage[i]["text"] + '</p></div>');
            }
            
        }
        message.innerHTML = makeElements.join("<br>");
    }
    catch(error){
        console.log(error);
    }
}

function routeClick(key, message){
    try{
        showMessage("Captain", message);
        currentConversation = conversations[key];
        updateElements();
    }
    catch(error){
        console.log(error);
    }
}

function showRoutes(route){
    try{
        var makeElements = [];
        if(route.length == 0){
            routes.remove();
            sendLog.remove();
        }
        else{
            for(var i = 0;i < route.length;i++){
                makeElements.push('<p class="padLeft padRight"><a href="javascript:routeClick(\'' + route[i]["key"] + '\',\'' + route[i]["text"] + '\');">' + (i + 1).toString() + '. ' + route[i]["text"] + '</a></p>');
            }
            routes.innerHTML = makeElements.join('<div class="thinline"></div>');
        }
        
    }
    catch(error){
        console.log(error);
    }
}

function getQuery(){
    try{
        var currentUrl = window.location.href;
        var url = new URL(currentUrl);
        var queryParams = url.searchParams;
        if(queryParams.has('link')){
            var link = queryParams.get('link');
            link = atob(link);
            return link
        }
        else{
            return null; 
        }
    }
    catch(error){
        console.log(error);
        return null;
    }
}

function redirect(){
    try{
        window.location.replace("index.html");
    }
    catch(error){
        console.log(error);
    }
}

function updateElements(){
    try{
        speak(currentConversation["text"]);
        updateStatus(currentConversation["instruction"]);
        showMessage("Copilot", currentConversation["text"]);
        showRoutes(currentConversation["route"]);
        scrollToBottom();
    }
    catch(error){
        console.log(error);
    }
}

async function initCall(){
    try{
        const queryLink = getQuery();
        if(queryLink != null){
            const response = await getRequest(queryLink);
            if("start" in response){
                conversations = response;
                currentConversation = response["start"];
                updateElements();
            }
            else{
                redirect();
            }
        }
        else{
            redirect();
        }
        
    }
    catch(error){
        console.log(error);
    }
} 