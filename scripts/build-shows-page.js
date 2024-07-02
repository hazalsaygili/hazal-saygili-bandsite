let showsListArr = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },

    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },

    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },

    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },

    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },

    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA",
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
    const footer = document.getElementById("footer");
    showsBody.insertBefore(showListSection, footer);

    const showListWrapper = document.createElement("div");
    showListWrapper.classList.add("shows__wrapper");
    showListSection.appendChild(showListWrapper);

    const showListTitle = document.createElement("h2");
    showListTitle.innerHTML = "Shows";
    showListWrapper.appendChild(showListTitle);


    if (mediaQueryMobile.matches) {

        const showsMobile = document.createElement("div");
        showsMobile.classList.add("shows__mobile");
        showListWrapper.appendChild(showsMobile);

        for (let i = 0; i < showsListArr.length; i++) {

            // const showItem = document.createElement("div");
            // showItem.classList.add("shows__showItem");
            // showsMobile.appendChild(showItem);

            const dates = document.createElement("h3");
            dates.innerText = "DATE";
            showsMobile.appendChild(dates);
            const showDate = document.createElement("p");
            showDate.innerText = showsListArr[i].date;
            showsMobile.appendChild(showDate);

            const venues = document.createElement("h3");
            venues.innerText = "VENUE";
            showsMobile.appendChild(venues);
            const showVenue = document.createElement("p");
            showVenue.innerText = showsListArr[i].venue;
            showsMobile.appendChild(showVenue);

            const locations = document.createElement("h3");
            locations.innerText = "LOCATION";
            showsMobile.appendChild(locations);
            const showLocation = document.createElement("p");
            showLocation.innerText = showsListArr[i].location;
            showsMobile.appendChild(showLocation);

            const buyTicketButton = document.createElement("button");
            buyTicketButton.classList.add("shows__buyTicketsButton");
            buyTicketButton.innerText = "BUY TICKETS";
            showsMobile.appendChild(buyTicketButton);

        }

    }

    else if (mediaQueryTablet.matches) {

        const showsDesktop = document.createElement("div");
        showsDesktop.classList.add("shows__desktop");
        showListWrapper.appendChild(showsDesktop);

        const showsDesktopHeaders = document.createElement("div");
        showsDesktopHeaders.classList.add("shows__desktopHeaderItem");
        showsDesktop.appendChild(showsDesktopHeaders);

        const dates = document.createElement("h3");
        dates.innerText = "DATE";
        showsDesktopHeaders.appendChild(dates);

        const venues = document.createElement("h3");
        venues.innerText = "VENUE";
        showsDesktopHeaders.appendChild(venues);

        const locations = document.createElement("h3");
        locations.innerText = "LOCATION";
        showsDesktopHeaders.appendChild(locations);


        for (let i = 0; i < showsListArr.length; i++) {

            let showItem = document.createElement("div");
            showItem.classList.add("shows__desktopShowItem");
            showsDesktop.appendChild(showItem);

            let showDate = document.createElement("p");
            showDate.innerText = showsListArr[i].date;
            showItem.appendChild(showDate);

            let showVenue = document.createElement("p");
            showVenue.innerText = showsListArr[i].venue;
            showItem.appendChild(showVenue);

            const showLocation = document.createElement("p");
            showLocation.innerText = showsListArr[i].location;
            showItem.appendChild(showLocation);

            const buyTicketButton = document.createElement("button");
            buyTicketButton.classList.add("shows__buyTicketsButton");
            buyTicketButton.innerText = "BUY TICKETS";
            showItem.appendChild(buyTicketButton);

        }

    }


}


