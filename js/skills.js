//For Flipping of Cards
$(".clickcard").click(function(){
    var parent = $(this).parent()[0];
    parent.style.boxShadow = "none";
    if($(this)[0].classList[1] !== 'flipped') {
        setTimeout(function(){
            parent.style.boxShadow = "1px 1px 5px rgba(0,0,0,.3)";
            var progress = parent.children[0].children[1].children[0].children[0].children[0];
            var button = parent.children[0].children[1].children[0].children[6];
            button.style.opacity = 1;
            progress.style.width = progress.getAttribute('aria-valuenow') + '%';
        },500);
    }
    else {
        setTimeout(function(){
            var progress = parent.children[0].children[1].children[0].children[0].children[0];
            var button = parent.children[0].children[1].children[0].children[6];
            button.style.opacity = 0;
            progress.style.width = 0 + '%';
        },500);
    }
    setTimeout(function(){
        parent.style.boxShadow = "1px 1px 5px rgba(0,0,0,.3)";
    },500);
    $(this).toggleClass("flipped");
});