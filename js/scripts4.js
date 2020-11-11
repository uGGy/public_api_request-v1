/*
Search Container Section
*/

const $form = $('<form action="#", method="get"></form>');
$form.append('<input type="search" id="search-input" class="search-input" placeholder="Search...">')
     .append('<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">');

$('.search-container').append($form);

// fetch Function

function fetch12(url) {
    return fetch(url)
           .then(response => response.json())
           .catch(error => console.log('Looks there was a problem', error))
    }
    
const gallery = document.getElementById('gallery');


// API Requests, using Promise.all

    Promise.all([
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
        fetch12('https://randomuser.me/api/'),
    ]).then(data => { 
        for(let i = 0; i < data.length; i++ ){
            console.log(data);

            //Displaying content in the Gallery

            const html = `
                <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${data[i].results[0].picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${data[i].results[0].name.first} ${data[i].results[0].name.last}</h3>
                        <p class="card-text">${data[i].results[0].email}</p>
                        <p class="card-text cap">${data[i].results[0].location.city}, ${data[i].results[0].location.state}</p>
                    </div>
                </div>`

            gallery.insertAdjacentHTML('beforeend', html);



            //EventListener -- Modal markup: 

            document.getElementsByClassName('card')[i].addEventListener('click', (e) => {
                const htmlEvent = `

                 <div class="modal-container">
                    <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${data[i].results[0].picture.large}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${data[i].results[0].name.first}</h3>
                        <p class="modal-text">${data[i].results[0].email}</p>
                        <p class="modal-text cap">${data[i].results[0].location.city}</p>
                        <hr>
                        <p class="modal-text">${data[i].results[0].cell}</p>
                        <p class="modal-text">${data[i].results[0].location.street.number} ${data[i].results[0].location.street.name}, ${data[i].results[0].location.city}, ${data[i].results[0].location.state} ${data[i].results[0].location.postcode}</p>
                        <p class="modal-text">Birthday: ${data[i].results[0].dob.date[5]}${data[i].results[0].dob.date[6]}/${data[i].results[0].dob.date[8]}${data[i].results[0].dob.date[9]}/${data[i].results[0].dob.date[0]}${data[i].results[0].dob.date[1]}${data[i].results[0].dob.date[2]}${data[i].results[0].dob.date[3]}</p>
                    </div>
                </div>
                `
                
                gallery.insertAdjacentHTML('afterend', htmlEvent);

                
                

                //Close Button 
    
                    $('#modal-close-btn').click(function() {
                       $('.modal-container').fadeOut(200);
                        
                    })

            });
    
        }


    });



