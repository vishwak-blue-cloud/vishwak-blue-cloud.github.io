function showPhoneNumberInputBox(data){
    showInputBox("phone",placeHolder[1], "text");
    attachEventListenerForInputBox("yt", showPhoneNumberInputBox, data);
    attachEventListenerForInputBox("phone", showDetailsOnly);
}

function showDetailsOnly(data){
    flushView();
    showNavigationBar(title[0]);
    spacer();
    spacer();
    showSubTitle(subTitle[2]);
    spacer();
    showDetails(data)
}

function showConversationsWithDelay(data){
    let i = 0;
    function loop() {
        if(i < data.length){
            if(data[i]["who"] == "copilot"){
                showMessageOne(data[i]);
                updateStatus(data[i]["current"].toString(), instructions.length.toString(), data[i]["activity"]);
                scrollToBottom();
                
            }
            else{
                showMessageTwo(data[i]);
                updateStatus(data[i]["current"].toString(), instructions.length.toString(), data[i]["activity"]);
                scrollToBottom();
            }
            i++;
            setTimeout(loop, data[i]["delay"]);
            
        }
    }
    loop();
    //delayedLoop(5, 1000);
}