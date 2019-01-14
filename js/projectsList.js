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
            '<h5>Old Site Before I made the New One</h5>',
            '<video class="mediaVid" controls src="./resources/vid/coastalkombibefore.mp4"></video>',
        ],
        dateStart: 'September 2018',
        dateEnd: 'Still Under Development',
    },
    {
        title: 'My Portfolio Site',
        shortDesc: 'A portfolio page that I created to house all my work and experience. Fully Dynamic and Responsive. ' +
            'The projects listings are dynamically injected from the a JSON object and then categorized and laid out. Making' +
            ' it very easy to add projects.',
        languages: [
            'javascript',
            'html5',
            'css3',
            'jquery',
            'bootstrap 4',
        ],
        previewImg: './resources/img/projects/websites/portfolio.PNG',
        longDetails: '',
        links: [
            '<a href="http://stevegardiner.org/">Click Here to Visit the Site</a>',
        ],
        media: [
        ],
        dateStart: 'September 2018',
        dateEnd: 'Jan 2019',
    },
    {
        title: 'Mafia City Roleplay (Minor Edits)',
        shortDesc: 'I did not create this site however I did do some freelance work on this site. Including incorporating' +
            'a slideshow gallery of youtube videos.',
        languages: [
            'javascript',
            'html5',
            'css3',
            'jquery',
            'bootstrap 4',
        ],
        previewImg: './resources/img/projects/websites/mcrp.PNG',
        longDetails: '',
        links: [
            '<a href="https://mafiacity-rp.com/">Click Here to Visit the Site</a>',
        ],
        media: [
            '<div class="mediaImg" style="background-image: url(' + './resources/img/projects/websites/mcrp2.PNG' + ')"></div>',
        ],
        dateStart: 'September 2018',
        dateEnd: 'N/A',
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
        title: 'Player List UI',
        shortDesc: 'This type of UI, is a short toggleable list mean\'t to be displayed as an overlay on a player\'s ' +
            'screen when they are playing Grand Theft Auto. It takes a list of names and status\'s to display who is' +
            'currently active in game.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/playerList.PNG',
        longDetails: 'The list is scrollable and is getting the data dynamically.',
        links: [
        ],
        media: [
            '<div class="mediaImg" style="background-size: contain !important; background-image: url(' + './resources/img/projects/userInterfaces/playerList.PNG' + ')"></div>',
        ],
        dateStart: 'July 2018',
        dateEnd: 'July 2018',
    },
    {
        title: 'Fish Shop UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'interact with and use for a fishing job that was created alongside it. I was tasked with taking the previous' +
            'UI and creating a better one with the same functionality.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/fishShop.PNG',
        longDetails: 'Another team member created the first edition of this UI, and I was tasked with creating a better' +
            'looking more efficient user interface.',
        links: [
        ],
        media: [
            '<h5>Old Shop UI</h5>',
            '<div class="mediaImg" style="background-size: contain !important; background-image: url(' + './resources/img/projects/userInterfaces/fishShop-old.PNG' + ')"></div>',
            '<h5>New and Improved Shop UI</h5>',
            '<div class="mediaImg" style="background-size: contain !important; background-image: url(' + './resources/img/projects/userInterfaces/fishShop.PNG' + ')"></div>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Trucker Job UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'interact with and use for a trucking job that was created alongside it. I was tasked with creating this UI.' +
            'It allows a user to select a truck and trailer.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/trucker-main.PNG',
        longDetails: 'The UI checks if a user has the proper licenses or not and if they do not it does not allow the user to' +
            'proceed through the user interface. You can so an example of users who have a license and who do not in videos below.' +
            'This UI takes the data of what the user clicks and then passes that data to the backend to spawn in those vehicles.',
        links: [
        ],
        media: [
            '<h5>Main Truck Selection Page</h5>',
            '<div class="mediaImg" style="background-size: contain !important; background-image: url(' + './resources/img/projects/userInterfaces/trucker-main.PNG' + ')"></div>',
            '<h5>Training Page</h5>',
            '<div class="mediaImg" style="background-size: contain !important; background-image: url(' + './resources/img/projects/userInterfaces/trucker-training.PNG' + ')"></div>',
            '<h5>Trailer Selection Page</h5>',
            '<div class="mediaImg" style="background-size: contain !important; background-image: url(' + './resources/img/projects/userInterfaces/trucker-trailer.PNG' + ')"></div>',
            '<h5>Example of User without License</h5>',
            '<video class="mediaVid" controls src="./resources/vid/trucker-noCDL.mp4"></video>',
            '<h5>Example of User with License</h5>',
            '<video class="mediaVid" controls src="./resources/vid/trucker-yesCDL.mp4"></video>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Help Menu UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'interact with and use to get a list of commands, and shortcuts and common information that is often asked to help' +
            'players with their experience.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/helpMenu.PNG',
        longDetails: '',
        links: [
        ],
        media: [
            '<video class="mediaVid" controls src="./resources/vid/helpMenu.mp4"></video>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Job Offer UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'interact with and use for any job, requiring players to agree with the terms and sign their name to proceed.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/jobOffer.PNG',
        longDetails: 'This is programmed in a way that a developer can dynamically add the images, and data to a JSON object' +
            'and then they can select each JSON instance to select which version of the job offer they want to display. The three' +
            'images at the bottom are intended to be advertisements for other companies within the server.',
        links: [
        ],
        media: [
            '<h5>First Instance</h5>',
            '<video class="mediaVid" controls src="./resources/vid/jobOffer.mp4"></video>',
            '<h5>Second Version w/ Restyle</h5>',
            '<div class="mediaImg" style="background-size: contain !important; background-image: url(' + './resources/img/projects/userInterfaces/jobOffer.PNG' + ')"></div>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Elevator UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'interact with and use to navigate an elevator to different floors of a building.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/elevator.PNG',
        longDetails: '',
        links: [
        ],
        media: [
            '<video class="mediaVid" controls src="./resources/vid/hud.mp4"></video>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Heads Up Display UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'consistently view while playing the game, and it will display a live status on several key player stats.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/hud.PNG',
        longDetails: 'The HUD keeps track of the time, money on hand, bank account balance, hunger and the players name. If a player' +
            'enters a vehicle then the extended version of the HUD pops up and shows, the vehicle speedometer, fuel, license plater, and' +
            'vehicle model.',
        links: [
        ],
        media: [
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Radio UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'interact with and use to navigate radio channels, so the player can talk in Voip with other players on the same frequency.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/radio.PNG',
        longDetails: '',
        links: [
        ],
        media: [
            '<video class="mediaVid" controls src="./resources/vid/radio.mp4"></video>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'PD Desk UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'interact with and use to pay off tickets and change their player name.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/pddesk.PNG',
        longDetails: '',
        links: [
        ],
        media: [
            '<video class="mediaVid" controls src="./resources/vid/pddesk.mp4"></video>',
            '<video class="mediaVid" controls src="./resources/vid/pddeskname.mp4"></video>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'License DMV UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'interact with and use to take a road test and get their driving licenses.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/license.PNG',
        longDetails: 'The way this UI works is it detects if a user passed the written test and if they have not it shows the' +
            'main homepage, and offers them a chance to take the exam. Then they are navigated to the exam page and this is' +
            'programmed so that the questions and answers can all be dynamically loaded in via a JSON object. The code also' +
            'grades the test and if a user gets 80% correct then it allows them to continue to the three road test options which' +
            'can be selected. If the user scores less than 80% they are prompted to retry the test.',
        links: [
        ],
        media: [
            '<video class="mediaVid" controls src="./resources/vid/license1.mp4"></video>',
            '<video class="mediaVid" controls src="./resources/vid/license2.mp4"></video>',
            '<video class="mediaVid" controls src="./resources/vid/license3.mp4"></video>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Clothing Shop UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'select a type of clothing they want and it will be previewed on their player and then they can purchase it.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/clothingstore.PNG',
        longDetails: '',
        links: [
        ],
        media: [
            '<h5>First Edition</h5>',
            '<video class="mediaVid" controls src="./resources/vid/clothes1.mp4"></video>',
            '<h5>Revised Edition</h5>',
            '<video class="mediaVid" controls src="./resources/vid/clothes2.mp4"></video>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Inventory UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'display player stats and manage items on their person and in vehicles and on the ground. I modeled this inventory' +
            'pixel by pixel off of images of the game Arma 3\'s inventory.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/inventory.PNG',
        longDetails: 'This detects whether a player is near a vehicle and it detects all items around and allows users to' +
            'manage these items and move them between places.',
        links: [
        ],
        media: [
            '<video class="mediaVid" controls src="./resources/vid/inventory.mp4"></video>',
        ],
        dateStart: 'June 2018',
        dateEnd: 'June 2018',
    },
    {
        title: 'Mobile Database Computer UI',
        shortDesc: 'This is a User Interface created to be used inside Grand Theft Auto V. It is intended for players to ' +
            'who are roleplaying as a Police Officer to manage many things. This is by far my most extensive user interface' +
            'so far consisting of 5000+ lines of code.',
        languages: [
            'javascript',
            'html5',
            'css3',
        ],
        previewImg: './resources/img/projects/userInterfaces/mdc.PNG',
        longDetails: '',
        links: [
        ],
        media: [
            '<h5>First Edition</h5>',
            '<video class="mediaVid" controls src="./resources/vid/mdc.mp4"></video>',
            '<h5>Revised Edition</h5>',
            '<video class="mediaVid" controls src="./resources/vid/newMDC.mp4"></video>',
            '<div class="mediaImg" style="background-size: contain !important; background-image: url(' + './resources/img/projects/userInterfaces/mdcCall.PNG' + ')"></div>',
            '<video class="mediaVid" controls src="./resources/vid/newMDC2.mp4"></video>',
        ],
        dateStart: 'October 2018',
        dateEnd: 'October 2018',
    },

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
