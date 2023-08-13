let btn = document.querySelector('.btn')
let cercle = document.querySelector('.cercle')
let icon = document.querySelector('#icon')

btn.addEventListener('click', function(){
 
  if(icon.classList.contains('icon_revers')){

    icon.classList.remove('black_icon')
    icon.classList.add('icon_yellow')
    icon.classList.toggle('icon_active')
    icon.classList.remove('icon_revers')
    cercle.classList.add('cercle_active')
  }
  else{
    
    icon.classList.remove('icon_yellow')
    icon.classList.add('black_icon')
    icon.classList.toggle('icon_revers')
    icon.classList.remove('icon_active')
    cercle.classList.add('cercle_active')
  }   
})

btn.addEventListener('animationend', function(){
 
    cercle.classList.remove('cercle_active')
    
})