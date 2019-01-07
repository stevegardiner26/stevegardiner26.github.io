var websitesDB = [
    {
        title: 'Dedicated Debator',
        shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ' +
            'the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ' +
            'and scrambled it to make a type specimen book.',
        languages: [
            'Javascript',
            'HTML5',
            'CSS3',
            'jQuery',
            'PHP',
        ],
        previewImg: './resources/img/projects/websites/dd.PNG',
    },
    {
        title: 'Coastal Kombi',
        shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ' +
            'the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ' +
            'and scrambled it to make a type specimen book.',
        languages: [
            'Javascript',
            'HTML5',
            'CSS3',
            'jQuery',
            'Bootstrap 4',
        ],
        previewImg: './resources/img/projects/websites/coastal.PNG',
    }
];

var userInterfacesDB = [
    {
        title: 'Mineral Transport UI',
        shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ' +
            'the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type ' +
            'and scrambled it to make a type specimen book.',
        languages: [
            'Javascript',
            'HTML5',
            'CSS3',
            'jQuery',
            'Bootstrap 4',
        ],
        previewImg: './resources/img/projects/userInterfaces/mineral.PNG',
    }

];

var adFormatsDB = [

];

var tutorialsDB = [

];

var otherDB = [

];


var cont, entry, langCont, langEl;
function showWebsites() {
    location.href='./project-menu.html#websites';
    cont = document.getElementById('v-pills-websites');
    cont.innerHTML = '';
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
};

function showUI() {
    location.href='./project-menu.html#ui';
    cont = document.getElementById('v-pills-ui');
    cont.innerHTML = '';
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

function showADS() {
    location.href='./project-menu.html#ads';
}

function showTutorials() {
    location.href='./project-menu.html#tutorial';
}

function showOther() {
    location.href='./project-menu.html#other';
}
