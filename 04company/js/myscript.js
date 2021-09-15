$(document).ready(function(){
    const slider1 = $(".slider").bxSlider({
        controls:false
    });
    $(".toggle").click(function(){
        const toggle = $(".toggle").attr("class"); 
        console.log(toggle);

        if( toggle == "toggle"){
           
            document.getElementsByClassName("toggle")[0].classList.add("active");
            $(".gnb").addClass("view");
        }else{
            
            document.getElementsByClassName("toggle")[0].classList.remove("active");
            $(".gnb").removeClass("view");
        }
    });

   
    
   
});