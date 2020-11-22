window.onload = function(){ 
    var prevSlide = document.querySelector(".prev-slide");
    var nextSlide = document.querySelector(".next-slide");
    var slides = document.querySelector(".slide-itmes").children;
    var total_slides = slides.length;
    index = 0;
    prevSlide.onclick = function () {
        next("prev");
    }
    nextSlide.onclick = function () {
        next("next");
    }

    function next(direction) {
        if(direction == "next"){
            index++;
            if(index==total_slides){
                index = 0;
            }
        }
        else{
            if(index == 0){
                index = total_slides - 1;
            }
            else {
                index--;
            }
        }

        for(i=0; i < total_slides; i++ ){
            slides[i].classList.remove("activate");
        }
        slides[index].classList.add("activate"); 
    }
};
