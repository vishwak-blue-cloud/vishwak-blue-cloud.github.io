var container = document.getElementById("container");

function flushView(){
    try{
        container.innerHTML = '';
    }
    catch(error){
        console.log(error);
    }
}

function spacer(){
    try{
        container.innerHTML += '<br>';
    }
    catch(error){
        console.log(error);
    }
}

function showNavigationBar(title){
    try{
        container.innerHTML += '<nav><div class="title"><a href="#">' + title + '</a></div></nav>';
    }
    catch(error){
        console.log(error);
    }
}

function showSubTitle(title){
    try{
        container.innerHTML += '<div class="subtitle" id="subtitle">' + title + '</div>';
    }
    catch(error){
        console.log(error);
    }
}

function attachEventListenerForInputBox(id, funcWithParameter, data = undefined){
    try{
        
        var inputBox = document.getElementById(id);
        if(data != undefined){
            inputBox.value = data;
        }
        inputBox.addEventListener("keydown", async function(event) {
            if (event.key === "Enter"){
                var inputValue = event.target.value;
                var cleanInput = inputValue.trim();
                if(cleanInput.length > 0){
                    await funcWithParameter(cleanInput);
                }
                else{
                    inputBox.value = "";
                }
            }
        });
    }
    catch(error){
        console.log(error);
    }
}

function showInputBox(id, placeholder, type){
    try{
        container.innerHTML += '<div class="pad"><input type="' + type + '" id="' + id +'" autocomplete="off" placeholder="' + placeholder + '"></div>';
    }
    catch(error){
        console.log(error);
    }
}

function showDetails(data){
    try{
        container.innerHTML += '<br><div class="pad"><div class="cell"><p>A phone call has been initiated From <i>+17626002381</i> To <i>' + data + '</i>.  If you have missed the call, then make a call From <i>' + data + '</i> To <i>+17626002381</i>.</p><div class="thinline"></div><p><a href="live.html" target="_blank"><i><u>Tap here</u></i></a> to view the live conversation of the recipe.</p><div class="thinline"></div><p><a href="instructions.html" target="_blank"><i><u>Tap here</u></i></a> to view the step-by-step instructions of the recipe.</p></div></div>';
    }
    catch(error){
        console.log(error);
    }
}

function showInstructions(data, source){
    try{
        var makeList = [];
        for(var i = 0; i < data.length; i++){
            makeList.push('<p><a href="' + source + '" target="_blank"><mark><b>' + data[i]["timestamp"] + '</b></mark></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data[i]["instruction"] + '</p>');
        }
        container.innerHTML += '<br><div class="pad"><div class="cell">' + makeList.join('<div class="thinline"></div>') + '</div></div>';
    }
    catch(error){
        console.log(error);
    }
}

function showMessageOne(data){
    try{
        container.innerHTML += '<br><div class="pad"><div class="msg"><p><mark class="markMessageOne"><b>Copilot</b></mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data["message"] + '</p></div></div>';
    }
    catch(error){
        console.log(error);
    }
}

function showMessageTwo(data){
    try{
        container.innerHTML += '<br><div class="pad"><div class="msg"><p><mark class="markMessageTwo"><b>Captain</b></mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data["message"] + '</p></div></div>';
    }
    catch(error){
        console.log(error);
    }
}

function showStatus(current, total, activity){
    try{
        container.innerHTML += '<br><div class="status shortMsg" id="showStatus"><b>' + activity + ' - ' + current + ' / ' + total + '</b></div>'
    }
    catch(error){
        console.log(error);
    }
}

function updateStatus(current, total, activity){
    try{
        document.getElementById("showStatus").innerHTML = '<b>' + activity + ' - ' + current + ' / ' + total + '</b>';
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