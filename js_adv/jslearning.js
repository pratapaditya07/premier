var btn =  document.querySelector("button")
var img11= document.querySelector("#img1")
var img22= document.querySelector("#img2")
btn.addEventListener("click" , function(){
    var src1 = img11.src;
    var src2 = img22.src;

    img11.src= src2;
    img22.src= src1;
})