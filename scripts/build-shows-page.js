let showsListArr = [
    {
        "date": "Mon Sept 09 2024",
        "venue": "Ronald Lane",
        "location": "San Francisco, CA}",
    },

    {
        "date": "Tue Sept 17 2024",
        "venue": "Pier 3 East",
        "location": "San Francisco, CA}",
    },

    {
        "date": "Sat Oct 12 2024",
        "venue": "View Lounge",
        "location": "San Francisco, CA}",
    },

    {
        "date": "Sat Nov 16 2024",
        "venue": "Hyatt Agency",
        "location": "San Francisco, CA}",
    },

    {
        "date": "Fri Nov 29 2024",
        "venue": "Moscow Center",
        "location": "San Francisco, CA}",
    },

    {
        "date": "Wed Dec 18 2024",
        "venue": "Press Club",
        "location": "San Francisco, CA}",
    },

]

window.addEventListener("load", (event) => {

    displayUpcomingShows();

});


function displayUpcomingShows() {

    const mediaQueryMobile = window.matchMedia('(max-width: 768px)');
    const mediaQueryTablet = window.matchMedia('(min-width: 768px)');
    const mediaQueryDesktop = window.matchMedia('(min-width: 1280px)');

    const showListSection = document.createElement("section");
    showListSection.classList.add("shows", "container");

    const showsBody = document.getElementById("home");
    const footer = document.getElementsByTagName("footer");
    showsBody.insertBefore(showListSection, footer);

    const showListWrapper = document.createElement("div");
    showListWrapper.classList.add("shows__wrapper");
    showListSection.appendChild(showListWrapper);

    const showListTitle = document.createElement("h2");
    showListTitle.innerText("Shows");
    showListWrapper.appendChild(showListTitle);


    if (mediaQueryMobile.matches) {

        for (let i=0; i<showsListArr.length; i++ ) {
            
        const showsMobile = document.createElement("div");
        showsMobile.classList.add("shows__mobile");
        showListWrapper.appendChild(showListWrapper);

        const dates = document.createElement("h3");
        dates.innerText("Date");
        showListWrapper.appendChild(dates);
        const showDate = document.createElement("p");
        showDate.innerText(showsListArr[i].date);
        showListWrapper.appendChild(showDate);

        const venues = document.createElement("h3");
        venues.innerText("Venue");
        showListWrapper.appendChild(venues);
        const showVenue = document.createElement("p");
        showVenue.innerText(showsListArr[i].venue);
        showListWrapper.appendChild(showVenue);

        const locations = document.createElement("h3");
        locations.innerText("Location");
        showListWrapper.appendChild(locations);
        const showLocation = document.createElement("p");
        showLocation.innerText(showsListArr[i].location);
        showListWrapper.appendChild(showLocation);

        const buyTicketButton = document.createElement("button");
        buyTicketButton.classList.add("shows__buyTicketsButton");
        showLocation.innerText("BUY TICKETS");
        showListWrapper.appendChild(showListWrapper);

        }

    }

    if (mediaQueryTablet.matches) {


    }


}


