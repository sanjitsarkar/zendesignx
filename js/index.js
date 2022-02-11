//Slider
const slider = document.querySelector("#slider");
const output = document.querySelector("#slider-value");
output.textContent = slider.value; 

slider.oninput = function() {
  output.textContent = this.value;
}

//Modal
const modal = document.querySelector("#modal");

var openModal = document.querySelector("#open-modal");

var close = document.querySelector("#close");

openModal.onclick = function() {
//   modal.style.display = "block";
  modal.classList.add('modal-open')

}

close.onclick = function() {
//   modal.style.display = "none";
  modal.classList.remove('modal-open')


 
}

window.onclick = function(event) {
  if (event.target == modal) {
    // modal.style.display = "none";
  modal.classList.remove('modal-open')

  }
}

//Rating
const rating = document.querySelectorAll('.rating');
console.log(rating);

const clearRating = (n)=>{
    for(var i=n+1;i<5;i++)
    {
        rating[i].classList.remove('rating-active');
    
    }
}
const addRating = (n)=>{
    clearRating(n);
for(var i=0;i<=n;i++)
{
    rating[i].classList.add('rating-active')

}

}



    rating[0].addEventListener("click",()=>{
        
        addRating(0);
    })
    rating[1].addEventListener("click",()=>{
        
        addRating(1);
    })
    rating[2].addEventListener("click",()=>{
        
        addRating(2);
    })
    rating[3].addEventListener("click",()=>{
        
        addRating(3);
    })
    rating[4].addEventListener("click",()=>{
        
        addRating(4);
    })

//Toast

const showToast = (container,duration=1000) => {
const toast = document.querySelector(`#${container}`);
toast.classList.add('toast-open');
setTimeout(()=>{ 
    
    toast.classList.remove('toast-open');
    // toast.classList.add('toast-hide');

},
duration
)


}

function closeAlert(elem){
    elem.parentNode.classList.add('alert-hide');
    setTimeout(()=>{
        elem.parentNode.style.display = 'none';
    elem.parentNode.classList.remove('alert-hide');
    
    
    },300)
    }
