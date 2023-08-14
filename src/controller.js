function initializeIndex(){
    flushView();
    showNavigationBar(title[0]);
    spacer();
    spacer();
    showSubTitle(subTitle[0]);
    spacer();
    showInputBox("yt",placeHolder[0], "text");
    spacer();
    attachEventListenerForInputBox("yt", showPhoneNumberInputBox);
}

function initializeLive(){
    flushView();
    showNavigationBar(title[0]);
    spacer();
    spacer();
    showSubTitle(subTitle[1]);
    showStatus(conversations[0]["current"].toString(), conversations.length.toString(), conversations[0]["activity"]);
    showConversationsWithDelay(conversations);
    
}

function initializeInstructions(){
    flushView();
    showNavigationBar(title[0]);
    spacer();
    spacer();
    showSubTitle(recipeName);
    spacer();
    showInstructions(instructions, source);
}