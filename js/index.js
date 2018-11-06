

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = {
        name: document.getElementById('name').value,
        secondname: document.getElementById('secondname').value,
        email: document.getElementById('email').value,
        gender: document.getElementById('gender').value,
        pass: document. getElementById('pass').value
    }
    // 
    sendHttpForm(form);
    
})
console.dir(form.gender);
    
function sendHttpForm(form){
    console.log(JSON.stringify(form));
    var xhr = new XMLHttpRequest();

  

    xhr.open('POST', 'http://codeit.pro/codeitCandidates/serverFrontendTest/user/registration', true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(`name=${form.name}&secondname=${form.secondname}&email=${form.email}&gender=1&pass=${form.pass}`); 

    xhr.onreadystatechange = function() { 
    if (xhr.readyState != 4) return;

  
    if (xhr.status != 200) {
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        console.log(xhr.responseText);
    }

    }

}

    
