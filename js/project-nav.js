function navCategory(category) {
    switch (category){
        case 'websites':
            location.href='./project-menu.html#websites';
            break;
        case 'userInterface':
            location.href='./project-menu.html#ui';
            break;
        case 'adFormats':
            location.href='./project-menu.html#ads';
            break;
        case 'tutorial':
            location.href='./project-menu.html#tutorial';
            break;
        case 'other':
            location.href='./project-menu.html#other';
            break;
        default:
            break;
    }
}

function navCategoryPost() {
    var locat = location.href.substring(location.href.lastIndexOf('#') + 1);
    var sublocat;
    if(locat.substring(0,6) === 'search') {
        sublocat = locat;
        locat = 'search';
    }
    switch  (locat){
        case 'websites':
            $('#v-pills-websites-tab').addClass('active');
            $('#v-pills-websites-tab').attr('aria-selected', 'true');
            $('#v-pills-websites').addClass('active');
            $('#v-pills-websites').addClass('show');
            showWebsites();
            break;
        case 'ui':
            $('#v-pills-ui-tab').addClass('active');
            $('#v-pills-ui-tab').attr('aria-selected', 'true');
            $('#v-pills-ui').addClass('active');
            $('#v-pills-ui').addClass('show');
            showUI();
            break;
        case 'ads':
            $('#v-pills-ads-tab').addClass('active');
            $('#v-pills-ads-tab').attr('aria-selected', 'true');
            $('#v-pills-ads').addClass('active');
            $('#v-pills-ads').addClass('show');
            showADS();
            break;
        case 'tutorial':
            $('#v-pills-tutorials-tab').addClass('active');
            $('#v-pills-tutorials-tab').attr('aria-selected', 'true');
            $('#v-pills-tutorials').addClass('active');
            $('#v-pills-tutorials').addClass('show');
            showTutorials();
            break;
        case 'other':
            $('#v-pills-other-tab').addClass('active');
            $('#v-pills-other-tab').attr('aria-selected', 'true');
            $('#v-pills-other').addClass('active');
            $('#v-pills-other').addClass('show');
            showOther();
            break;
        case 'search':
            $('#v-pills-all-tab').addClass('active');
            $('#v-pills-all-tab').attr('aria-selected', 'true');
            $('#v-pills-all').addClass('active');
            $('#v-pills-all').addClass('show');
            $('.projectSearch')[0].setAttribute('value', (sublocat.substring(7) + ''));
            showSearch(sublocat.substring(7));
            break;
        case 'all':
            $('#v-pills-all-tab').addClass('active');
            $('#v-pills-all-tab').attr('aria-selected', 'true');
            $('#v-pills-all').addClass('active');
            $('#v-pills-all').addClass('show');
            showAll();
            break;
        default:
            $('.projectLists').hide();
            $('.singleProject').show();
            loadSingleProject();
            break;
    }
}

