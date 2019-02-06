//50 Word Limit for Short Desc
//Unlimited for LongDetails
var websitesDB, userInterfacesDB, adFormatsDB, tutorialsDB, otherDB, databasesDone;

function loadJSON(url, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    databasesDone = 0;
    loadJSON('./resources/json/websites.json',function(response) {
        // Parse JSON string into object
        websitesDB = JSON.parse(response);
        databasesDone++;
    });
    loadJSON('./resources/json/userInterfaces.json',function(response) {
        // Parse JSON string into object
        userInterfacesDB = JSON.parse(response);
        databasesDone++;
    });
    loadJSON('./resources/json/adFormats.json',function(response) {
        // Parse JSON string into object
        adFormatsDB = JSON.parse(response);
        databasesDone++;
    });
    loadJSON('./resources/json/tutorials.json',function(response) {
        // Parse JSON string into object
        tutorialsDB = JSON.parse(response);
        databasesDone++;
    });
    loadJSON('./resources/json/other.json',function(response) {
        // Parse JSON string into object
        otherDB = JSON.parse(response);
        databasesDone++;
    });
    isDone();
    function isDone() {
        if(databasesDone === 5) {
            navCategoryPost();
        } else {
            setTimeout(isDone, 200);
        }
    }
}

function loadSingleProject() {
    var locat = location.href.substring(location.href.lastIndexOf('#') + 1);
    var locatsplit = locat.split('-');
    var currentDB, id;
    switch (locatsplit[0]){
        case 'web':
            currentDB = websitesDB;
            break;
        case 'ui':
            currentDB = userInterfacesDB;
            break;
        case 'ads':
            currentDB = adFormatsDB;
            break;
        case 'tutorial':
            currentDB = tutorialsDB;
            break;
        case 'other':
            currentDB = otherDB;
            break;
    }
    id = locatsplit[1];

    //Now to populate the fields
    $('.singleTitle')[0].innerHTML = currentDB[id].title;
    $('.shortDesc')[0].innerHTML = currentDB[id].shortDesc;
    $('.longDetails')[0].innerHTML = currentDB[id].longDetails;
    $('.mainImg')[0].style.backgroundImage = 'url(' + currentDB[id].previewImg + ')';

    //inserting links
    var templinks = '';
    for(var i = 0; i < currentDB[id].links.length; i++) {
        templinks += currentDB[id].links[i] + '<br>';
    }
    $('.singleLinks')[0].innerHTML = templinks;

    if(currentDB[id].links.length == 0) {
        $('.linkHead')[0].style.display = 'none';
    }

    for(var v = 0; v < currentDB[id].languages.length; v++) {
        let templang = document.createElement('i');
        templang.innerHTML = currentDB[id].languages[v];
        $('.singleLanguages')[0].appendChild(templang);
    }

    var tempmedia = '';
    for(var m = 0; m < currentDB[id].media.length; m++) {
        tempmedia += currentDB[id].media[m] + '<br>';
    }
    $('.mediaDump')[0].innerHTML = tempmedia;

    $('.dateComplete')[0].innerHTML = currentDB[id].dateEnd;
    $('.dateBegan')[0].innerHTML = currentDB[id].dateStart;
}

var cont, entry, langCont, langEl;
function showWebsites() {
    location.href='./project-menu.html#websites';
    $('.projectSearch')[0].value = '';
    cont = document.getElementById('v-pills-websites');
    cont.innerHTML = '';
    document.getElementsByClassName('noSearch')[0].style.display = 'none';
    getWebsites();
};

function showUI() {
    location.href='./project-menu.html#ui';
    $('.projectSearch')[0].value = '';
    cont = document.getElementById('v-pills-ui');
    cont.innerHTML = '';
    document.getElementsByClassName('noSearch')[0].style.display = 'none';
    getUI();
}

function showADS() {
    location.href='./project-menu.html#ads';
    $('.projectSearch')[0].value = '';
    cont = document.getElementById('v-pills-ads');
    cont.innerHTML = '';
    document.getElementsByClassName('noSearch')[0].style.display = 'none';
    getAds();
}

function showTutorials() {
    location.href='./project-menu.html#tutorial';
    $('.projectSearch')[0].value = '';
    cont = document.getElementById('v-pills-tutorials');
    cont.innerHTML = '';
    document.getElementsByClassName('noSearch')[0].style.display = 'none';
    getTutorial();
}

function showOther() {
    location.href='./project-menu.html#other';
    $('.projectSearch')[0].value = '';
    cont = document.getElementById('v-pills-other');
    cont.innerHTML = '';
    document.getElementsByClassName('noSearch')[0].style.display = 'none';
    getOther();
}

function showSearch(value) {
    var locat = location.href.substring(location.href.lastIndexOf('#') + 1);
    if (locat.substring(0, 6) === 'search' || locat === 'all') {
        showAll(true);
        let part = 0;
        $('.projectSearch')[0].value = value;
        let temp = document.getElementById('v-pills-all');
        for (var v = 0; v < temp.childNodes.length; v++) {
            if(temp.childNodes[v].innerHTML.toString().indexOf(value.toString()) === -1) {
                temp.childNodes[v].style.display = 'none';
                part++;
            }
        }
        if (part != temp.childNodes.length) {
            document.getElementsByClassName('noSearch')[0].style.display = 'none';
        } else {
            document.getElementsByClassName('noSearch')[0].style.display = 'block';
        }
    } else {
        let temp = document.getElementById('v-pills-' + locat);
        if (locat === 'tutorial') {
            temp = document.getElementById('v-pills-tutorials');
        }
        for (var n = 0; n < temp.childNodes.length; n++) {
            if(temp.childNodes[n].innerHTML.toString().indexOf(value.toString()) === -1) {
                temp.childNodes[n].style.display = 'none';
            } else {
                temp.childNodes[n].style.display = 'flex';
            }
        }
        for(var o = 0; o < temp.children.length; o++) {
            if(temp.children[o].style.display == 'none') {
                document.getElementsByClassName('noSearch')[0].style.display = 'block';
            } else {
                document.getElementsByClassName('noSearch')[0].style.display = 'none';
            }
        }
    }
}

function showAll(checker) {
    if(!checker) {
        location.href='./project-menu.html#all';
        $('.projectSearch')[0].value = '';
        document.getElementsByClassName('noSearch')[0].style.display = 'none';
    }
    cont = document.getElementById('v-pills-all');
    cont.innerHTML = '';
    getWebsites();
    getUI();
    getAds();
    getTutorial();
    getOther();
}


function getUI() {
    for (var i = 0; i < userInterfacesDB.length; i++) {
        entry = document.createElement('div');
        entry.classList.add('row', 'entry');
        entry.setAttribute('onclick', 'location.href = \'./project-menu.html#ui-' + i + '\';document.location.reload();');
        entry.innerHTML = '<div class="col-md-4 preview-img" style="background-image: url(' + userInterfacesDB[i].previewImg + ') "></div>\n' +
            '                                <div class="col-md-8 details">\n' +
            '                                    <div class="title">\n' +
            '                                        <h3>' + userInterfacesDB[i].title + '</h3>\n' +
            '                                    </div>\n' +
            '                                    <div class="description">\n' +
            '                                        <p>' + userInterfacesDB[i].shortDesc + '</p>\n' +
            '                                    </div>\n' +
            '                                    <div class="languages row">\n' +
            '                                    </div>\n' +
            '                                </div>';
        langCont = entry.getElementsByClassName('languages')[0];
        for(var v = 0; v < userInterfacesDB[i].languages.length; v++) {
            langEl = document.createElement('i');
            langEl.innerHTML = userInterfacesDB[i].languages[v] + ' ';
            langCont.appendChild(langEl);
        }
        cont.appendChild(entry);
    }
}

function getWebsites() {
    for (var i = 0; i < websitesDB.length; i++) {
        entry = document.createElement('div');
        entry.classList.add('row', 'entry');
        entry.setAttribute('onclick', 'location.href = \'./project-menu.html#web-' + i + '\';document.location.reload();');
        entry.innerHTML = '<div class="col-md-4 preview-img" style="background-image: url(' + websitesDB[i].previewImg + ') "></div>\n' +
            '                                <div class="col-md-8 details">\n' +
            '                                    <div class="title">\n' +
            '                                        <h3>' + websitesDB[i].title + '</h3>\n' +
            '                                    </div>\n' +
            '                                    <div class="description">\n' +
            '                                        <p>' + websitesDB[i].shortDesc + '</p>\n' +
            '                                    </div>\n' +
            '                                    <div class="languages row">\n' +
            '                                    </div>\n' +
            '                                </div>';
        langCont = entry.getElementsByClassName('languages')[0];
        for(var v = 0; v < websitesDB[i].languages.length; v++) {
            langEl = document.createElement('i');
            langEl.innerHTML = websitesDB[i].languages[v] + ' ';
            langCont.appendChild(langEl);
        }
        cont.appendChild(entry);
    }
}

function getAds() {
    for (var i = 0; i < adFormatsDB.length; i++) {
        entry = document.createElement('div');
        entry.classList.add('row', 'entry');
        entry.setAttribute('onclick', 'location.href = \'./project-menu.html#ads-' + i + '\';document.location.reload();');
        entry.innerHTML = '<div class="col-md-4 preview-img" style="background-image: url(' + adFormatsDB[i].previewImg + ') "></div>\n' +
            '                                <div class="col-md-8 details">\n' +
            '                                    <div class="title">\n' +
            '                                        <h3>' + adFormatsDB[i].title + '</h3>\n' +
            '                                    </div>\n' +
            '                                    <div class="description">\n' +
            '                                        <p>' + adFormatsDB[i].shortDesc + '</p>\n' +
            '                                    </div>\n' +
            '                                    <div class="languages row">\n' +
            '                                    </div>\n' +
            '                                </div>';
        langCont = entry.getElementsByClassName('languages')[0];
        for(var v = 0; v < adFormatsDB[i].languages.length; v++) {
            langEl = document.createElement('i');
            langEl.innerHTML = adFormatsDB[i].languages[v] + ' ';
            langCont.appendChild(langEl);
        }
        cont.appendChild(entry);
    }
}

function getTutorial() {
    for (var i = 0; i < tutorialsDB.length; i++) {
        entry = document.createElement('div');
        entry.classList.add('row', 'entry');
        entry.setAttribute('onclick', 'location.href = \'./project-menu.html#tutorial-' + i + '\';document.location.reload();');
        entry.innerHTML = '<div class="col-md-4 preview-img" style="background-image: url(' + tutorialsDB[i].previewImg + ') "></div>\n' +
            '                                <div class="col-md-8 details">\n' +
            '                                    <div class="title">\n' +
            '                                        <h3>' + tutorialsDB[i].title + '</h3>\n' +
            '                                    </div>\n' +
            '                                    <div class="description">\n' +
            '                                        <p>' + tutorialsDB[i].shortDesc + '</p>\n' +
            '                                    </div>\n' +
            '                                    <div class="languages row">\n' +
            '                                    </div>\n' +
            '                                </div>';
        langCont = entry.getElementsByClassName('languages')[0];
        for(var v = 0; v < tutorialsDB[i].languages.length; v++) {
            langEl = document.createElement('i');
            langEl.innerHTML = tutorialsDB[i].languages[v] + ' ';
            langCont.appendChild(langEl);
        }
        cont.appendChild(entry);
    }
}

function getOther() {
    for (var i = 0; i < otherDB.length; i++) {
        entry = document.createElement('div');
        entry.classList.add('row', 'entry');
        entry.setAttribute('onclick', 'location.href = \'./project-menu.html#other-' + i + '\';document.location.reload();');
        entry.innerHTML = '<div class="col-md-4 preview-img" style="background-image: url(' + otherDB[i].previewImg + ') "></div>\n' +
            '                                <div class="col-md-8 details">\n' +
            '                                    <div class="title">\n' +
            '                                        <h3>' + otherDB[i].title + '</h3>\n' +
            '                                    </div>\n' +
            '                                    <div class="description">\n' +
            '                                        <p>' + otherDB[i].shortDesc + '</p>\n' +
            '                                    </div>\n' +
            '                                    <div class="languages row">\n' +
            '                                    </div>\n' +
            '                                </div>';
        langCont = entry.getElementsByClassName('languages')[0];
        for(var v = 0; v < otherDB[i].languages.length; v++) {
            langEl = document.createElement('i');
            langEl.innerHTML = otherDB[i].languages[v] + ' ';
            langCont.appendChild(langEl);
        }
        cont.appendChild(entry);
    }
}
