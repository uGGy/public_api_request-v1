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
        fetch12('https://randomuser.me/api/?results=12'),
    
    ]).then(data => { 
        for(let i = 0; i < 12; i++ ){
            console.log(data);

            //Displaying content in the Gallery

            const html = `
                <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${data[0].results[i].picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${data[0].results[i].name.first} ${data[0].results[i].name.last}</h3>
                        <p class="card-text">${data[0].results[i].email}</p>
                        <p class="card-text cap">${data[0].results[i].location.city}, ${data[0].results[i].location.state}</p>
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
                        <img class="modal-img" src="${data[0].results[i].picture.large}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${data[0].results[i].name.first}</h3>
                        <p class="modal-text">${data[0].results[i].email}</p>
                        <p class="modal-text cap">${data[0].results[i].location.city}</p>
                        <hr>
                        <p class="modal-text">${data[0].results[i].cell}</p>
                        <p class="modal-text">${data[0].results[i].location.street.number} ${data[0].results[i].location.street.name}, ${data[0].results[i].location.city}, ${data[0].results[i].location.state} ${data[0].results[i].location.postcode}</p>
                        <p class="modal-text">Birthday: ${data[0].results[i].dob.date[5]}${data[0].results[i].dob.date[6]}/${data[0].results[i].dob.date[8]}${data[0].results[i].dob.date[9]}/${data[0].results[i].dob.date[0]}${data[0].results[i].dob.date[1]}${data[0].results[i].dob.date[2]}${data[0].results[i].dob.date[3]}</p>
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



