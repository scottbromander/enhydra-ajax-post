$(document).ready(onReady);

let classList = [];

function onReady() {
    console.log('Totes ready!');
    getClassList();

    $('#container').on('click', '.js-btn-getJob', getPersonJob);
    $('#js-btn-addClassMember').on('click', addClassMember);
}

function addClassMember() {
    let newClassMember = $('#newStudent').val();
    $('#newStudent').val('');
    postClassList(newClassMember);
}

function getClassList() {
    //Write a GET AJAX request, that gets the class list from the route
    //Then use .then() to console log out that data!
    $.ajax({
        type: 'GET',
        url: '/enhydra'
    }).then(function (response) {
        classList = response;
        render();
    });
}

function postClassList(newClassMember) {
    let newPersonData = {
        name : newClassMember
    };

    $.ajax({
        type: 'POST',
        url: '/enhydra',
        data: newPersonData
    }).then(function(response){
        getClassList();
    });
}

function getPersonJob() {
    let element = $(this).parent().children().first();
    let name = element.text();
    element.text(`${name} got a job!`);
}

function render() {
    $('#container').empty();
    for (let student of classList) {
        //OLD
        // $('#container').append('<div></div>');
        // let element = $('#container').children().last();
        // element.append('<p>' + student + '</p>')

        //NEW
        $('#container').append(`
            <div>
                <p>${student}</p>
                <p>ENHYDRA!</p>
                <button class="js-btn-getJob">CLICK ME</button>
            </div>
        `);
    }
}