// document.getElementById('button').addEventListener('click', 
// loadCompanies);

function loadCompanies(){
    
    var xhr = new XMLHttpRequest();

  

    xhr.open('GET', 'http://codeit.pro/codeitCandidates/serverFrontendTest/company/getList', true);
    // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    
   

    xhr.onload = function() { 
    if (xhr.readyState != 4) return;

  
    if (xhr.status != 200) {
        // console.log(xhr.status + ': ' + xhr.statusText);
        document.getElementById('text').innerHTML = xhr.status + ': ' + xhr.statusText;
    } else {
      
        var response = JSON.parse(xhr.responseText)
      
        var name = '';
        var output = '';
        for (var i in response.list){


        //    console.log(response.list[i]);
         
            output +=  '<li onclick="changeclass()"><div  class="bg">'+response.list[i].name+'</div> </li>';
            
      
            for (var j in response.list[i].partners){
                console.log(response.list[i].partners[j].name);
                name +=
            '<li class="list_of_names">'+
            '<div class="item">'+
            '<div class="circ"><span class="val">'+response.list[i].partners[j].value+'</span></div>'+
            '<div class="pipe"></div>'+
            '<div class="rectan"><span>'+response.list[i].partners[j].name+'</span></div>'+
            '</li>';
            }  
        };
          

    }  
        document.getElementById('companies').innerHTML = output;
        document.getElementById('item').innerHTML = name;
       
    }
    
    xhr.send(); 
}


