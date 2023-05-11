(function(){
    "use strict";

    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
        event.preventDefault();

        //extract the value from each form field
        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDesc = event.target.elements["description"].value;

        //clear out the form fields
        for (let i = 0; i < detailsForm.length; i++){
            detailsForm.elements[i].value = "";
        }

        // create the card
        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        
        //if need, change the header at the top of the destination list
        const wishListContainer = document.getElementById('destinations_container');

        if (wishListContainer.children.length===0){
            document.getElementById('title').innerHTML = "My Wish List";
        }

        //add the card
        document.querySelector('#destinations_container').appendChild(destCard);


        //run a function that creates the new card
        function createDestinationCard(name, location, photoURL, description){
            const card = document.createElement("div");
            card.className = 'card';

            const img = document.createElement('img');
            img.setAttribute('alt', name);

            const constantPhotoURL = "images/signpost.jpg";

            if(photoURL.length === 0){
                img.setAttribute('src', constantPhotoURL);
            }
            else {
                img.setAttribute('src', photoURL);
            }

            card.appendChild(img);

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const cardTitle = document.createElement("h3");
            cardTitle.innerHTML = name; 
            cardBody.appendChild(cardTitle);

            const cardSubtitle = document.createElement("h4");
            cardSubtitle.innerHTML = location;
            cardBody.appendChild(cardSubtitle);

            if(description.length !== 0){
                var cardText = document.createElement("p");
                cardText.className = "card-text";
                cardText.innerHTML = description; 
                cardBody.appendChild(cardText);
            }

            const cardDeleteBTn = document.createElement("button");
            cardDeleteBTn.innerHTML = "Remove";

            cardDeleteBTn.addEventListener('click', removeDestination);
            cardBody.appendChild(cardDeleteBTn);

            card.appendChild(cardBody);

            return card;
        }

        function removeDestination(event){
            const card = event.target.parentElement.parentElement;
            card.remove();
        }
        //add the card
    }
})();

