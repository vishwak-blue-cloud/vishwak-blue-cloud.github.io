function getRequest(api){
    return new Promise(function (resolve, reject){
        var http = new XMLHttpRequest();
        http.open("GET", api, true);
        http.ontimeout = function(){
            resolve({});
        };
        http.onerror = function(){
            resolve({});
        };
        http.onload = function(){
            if(http.readyState === 4 && http.status === 200){
                //console.log(http.responseText);
                var jsonResponse = JSON.parse(http.responseText);
                //console.log(jsonResponse);
                resolve(jsonResponse);
            }
            else{
                resolve({});
            }
        };
        http.send();
    })
}