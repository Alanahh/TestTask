function loadNews(){
    
    var xhr = new XMLHttpRequest();

  

    xhr.open('GET', 'http://codeit.pro/codeitCandidates/serverFrontendTest/news/getList', true);
    // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    
    xhr.send(); 

    xhr.onload = function() { 
    if (xhr.readyState != 4) return;

  
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
        document.getElementById('text').innerHTML = xhr.status + ': ' + xhr.statusText;
    } else {
      
        var response = JSON.parse(xhr.responseText);
      console.log(response);
      console.log(response.list);
        var output = '';
      
        for (var i in response.list){
   
        //    console.log(response.list[i]);
         
        output +=  
            '<li class="row">'+
            '<div>'+
            '<img src="'+response.list[i].img+'">'+
            '<p>'+response.list[i].description+'</p>'+
            '<ul>'+
            '<li>'+response.list[i].author+'</li>'+
            '<li>'+response.list[i].date+'</li>'+
            '</ul>'+
            '</div>'+
            '</li>';
           
        }
    }  
        document.getElementById('news').innerHTML = output;
   
       
       
    }
    
   
}
loadNews();