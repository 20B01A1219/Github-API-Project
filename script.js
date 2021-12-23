let b = document.getElementById('btn');
let un = document.getElementById('uname');
b.addEventListener("click",getDetails());

function getDetails()
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/un.value", true);
    xhr.send();
    xhr.onload = function(){
        if(xhr.status === 200)
        {
            console.log(this.responsetext)
        }
    }
}