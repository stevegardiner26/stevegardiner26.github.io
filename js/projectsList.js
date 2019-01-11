//50 Word Limit for Short Desc
//Unlimited for LongDetails
var websitesDB = [
    {
        title: 'Dedicated Debator',
        shortDesc: 'A website that users can anonymously log into a chat room based off of a discussion issue and connect with people' +
            'to debate issues. The goal of this project was to bring people closer together by letting them exchange views and maybe people could' +
            'find common ground.',
        languages: [
            'javascript',
            'html5',
            'css3',
            'jquery',
            'php',
            'heroku',
        ],
        previewImg: './resources/img/projects/websites/dd.PNG',
        longDetails: 'This project was created at a 24 hour NJIT hackathon run by Major League Hacking and was created within the time block. The main goal of my creation' +
            'for this site was so that I could learn backend php and reteach myself heroku two skills which I find very useful to this day.' +
            'The frontend of the site was simply a bootstrap template because I knew frontend at the time and knew I was going to have to spend all my time on backend' +
            'to complete the project within the timeline.',
        links: [
            '<a href="http://dedicated-debator.herokuapp.com/">Click Here to Visit a Demo of the Site</a>',
            '<a href="https://github.com/stevegardiner26/Dedicated-Debator">Click Here to Visit the Github Repository</a>'
        ],
        media: [
            '<div class="mediaImg" style="background-image: url(' + './resources/img/projects/websites/dedicatedHome.PNG' + ')"></div>',
            '<video class="mediaVid" controls src="./resources/vid/dedicatedDebator.mp4"></video>',
        ],
        dateStart: 'November 2018',
        dateEnd: 'November 2018',
    },
    {
        title: 'Coastal Kombi',
        shortDesc: 'A simple single page landing page for the coastal kombi. Fully Dynamic and Responsive. This project includes a virtual tour of the van' +
            'which allows a user to click certain features of the van and it changes the picture of the van.',
        languages: [
            'javascript',
            'heroku',
            'html5',
            'css3',
            'jquery',
            'bootstrap 4',
        ],
        previewImg: './resources/img/projects/websites/coastal.PNG',
        longDetails: '',
        links: [
            '<a href="http://coastal-kombi.herokuapp.com/">Click Here to Visit a Demo of the Site</a>',
        ],
        media: [
            '<video class="mediaVid" controls src="./resources/vid/coastal-kombi.mp4"></video>',
        ],
        dateStart: 'September 2018',
        dateEnd: 'Still Under Development',
    }
];

var userInterfacesDB = [
    {
        title: 'Mineral Transport UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players' +
            ' to select a truck and and then start the job, which would exit the UI and give them the proper truck.',
        languages: [
            'javascript',
            'html5',
            'css3',
            'jquery',
            'bootstrap 4',
        ],
        previewImg: './resources/img/projects/userInterfaces/mineral.PNG',
        longDetails: 'lorem longer details',
        links: [
        ],
        media: [
        ],
        dateStart: 'September 2018',
        dateEnd: 'September 2018',
    },
    {
        title: 'Template UI',
        shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ' +
            'the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ' +
            'and scrambled it to make a type specimen book.',
        languages: [
            'javascript',
            'html5',
            'css3',
            'jquery',
            'bootstrap 4',
        ],
        previewImg: './resources/img/projects/userInterfaces/mineral.PNG',
        longDetails: 'lorem longer details',
        links: [
            '<a href="http://coastal-kombi.herokuapp.com/">Click Here to Visit a Demo of the Site</a>',
            '<a href="http://coastal-kombi.herokuapp.com/">Click Here to Visit a Demo of the Site</a>'
        ],
        media: [
            '<div class="mediaImg" style="background-image: url(' + './resources/img/projectPreview.PNG' + ')"></div>',
            '<video class="mediaVid" controls src="./resources/vid/dedicatedDebator.mp4"></video>',
        ],
        dateStart: 'September 2018',
        dateEnd: 'Still Under Development',
    }

];

var adFormatsDB = [

];

var tutorialsDB = [

];

var otherDB = [

];

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
        $('.projectSearch')[0].value = value;
        let temp = document.getElementById('v-pills-all');
        for (var v = 0; v < temp.childNodes.length; v++) {
            if(temp.childNodes[v].innerHTML.toString().indexOf(value.toString()) === -1) {
                temp.childNodes[v].style.display = 'none';
            }
        }
        for(var q = 0; q < temp.children.length; q++) { //TODO: Fix this is doesnt work properly
            if(temp.children[q].style.display == 'none') {
                document.getElementsByClassName('noSearch')[0].style.display = 'block';
            } else {
                document.getElementsByClassName('noSearch')[0].style.display = 'none';
            }
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
