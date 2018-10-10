$(".clickcard").click(function(){
    var parent = $(this).parent()[0];
    $(this).toggleClass("flipped");
    parent.style.boxShadow = "none";
    setTimeout(function(){
        parent.style.boxShadow = "1px 1px 5px rgba(0,0,0,.3)";
    },500);
});