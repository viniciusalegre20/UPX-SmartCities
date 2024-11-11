var btn = document.querySelector('#show-hide')
var container = document.querySelector('.chatbot')

btn.addEventListener('click',function(){
    if(container.style.display === 'none'){
        container.style.display = 'block';
    }
    else{
        container.style.display = 'none';
    }
}
)