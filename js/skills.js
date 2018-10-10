//For Flipping of Cards
$(".clickcard").click(function(){
    var parent = $(this).parent()[0];
    parent.style.boxShadow = "none";
    if($(this)[0].classList[1] !== 'flipped') {
        setTimeout(function(){
            parent.style.boxShadow = "1px 1px 5px rgba(0,0,0,.3)";
            var progress = parent.children[0].children[1].children[1].children[0].children[0];
            var button = parent.children[0].children[1].children[1].children[6];
            button.style.opacity = 1;
            progress.style.width = progress.getAttribute('aria-valuenow') + '%';
        },500);
    }
    else {
        setTimeout(function(){
            var progress = parent.children[0].children[1].children[1].children[0].children[0];
            var button = parent.children[0].children[1].children[1].children[6];
            button.style.opacity = 0;
            progress.style.width = 0 + '%';
        },500);
    }
    setTimeout(function(){
        parent.style.boxShadow = "1px 1px 5px rgba(0,0,0,.3)";
    },500);
    $(this).toggleClass("flipped");
});

//Search Bar for Skills
var cards = document.getElementsByClassName('card-container')[0].children;
function searchSkills(val) {
    var title = '';
    var filter;
    filter = val.toUpperCase();
    for(var i=0;i < cards.length;i++){
        title = cards[i].getElementsByClassName('titleA')[0].innerHTML;
        if (title.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "inline-block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

//Sorts by Skill Level via Select Dropdown
function selectSkills(val) {
    var pbar;
    for(var i=0;i < cards.length;i++) {
        pbar = cards[i].getElementsByClassName('progress-bar')[0];
        if(val > (pbar.getAttribute('aria-valuenow')/10)){
            cards[i].style.display = "none";
        }
        else {
            cards[i].style.display = "inline-block";
        }
    }
}