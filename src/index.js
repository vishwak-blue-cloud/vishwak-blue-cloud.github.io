var lists = document.getElementById("lists");

function showRecipes(data){
    try{
        for(var i = 0;i < data.length;i++){
            lists.innerHTML += '<br><div class="pad"><div class="cell"><p><mark><a href="call.html?link=' + btoa(data[i]["conversation"]) + '" target="_blank"><b>Make Call</b></a></mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + data[i]["name"] + '</p></div></div>';
        }
    }
    catch(error){
        console.log(error);
    }
}

async function initIndex(){
    try{
        const response = await getRequest(recipesApi);
        showRecipes(response);
    }
    catch(error){
        console.log(error);
    }
}
