//Search Bar for Courses
var cards = document.getElementsByClassName('card-container')[0].children;
var empty = false;
function searchCourses(val) {
    var title = '';
    var filter;
    filter = val.toUpperCase();
    let temp = document.getElementsByClassName('card');
    for (var v = 0; v < temp.length; v++) {
        if(temp[v].innerHTML.toString().indexOf(val.toLowerCase()) === -1) {
            temp[v].style.display = 'none';
        } else {
            temp[v].style.display = 'inline-block';
        }
    }
    let header = document.getElementsByClassName('header');
    let body = document.getElementsByClassName('body');
    for(var t = 0; t < header.length; t++) {
        empty = true;
        for(var i = 0; i < body[t].children.length; i++) {
            if(body[t].children[i].style.display == 'none') {
                console.log('checked')
            } else {
                empty = false;
            }
        }
        if(empty === true) {
            header[t].style.display = 'none';
        } else {
            header[t].style.display = 'inherit';
        }
    }
}

//Sorts by Syntax via Select Dropdown
function selectCourses(val) {
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
