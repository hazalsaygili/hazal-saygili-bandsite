import BandSiteApi from "./band-site-api.js";


let apiKey = "ac51252c-3c39-48f1-ade6-ee3f2ee13241";
const bandSiteApi = new BandSiteApi(apiKey);


let showsListArr = await bandSiteApi.getShows();

const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };


window.addEventListener("load", (event) => {

    displayUpcomingShows();


});

function displayUpcomingShows() {

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


    //create shows mobile design
    const showsMobile = document.createElement("div");
    showsMobile.classList.add("shows__mobile");
    showListWrapper.appendChild(showsMobile);

    for (let i = 0; i < showsListArr.length; i++) {

        const dates = document.createElement("h3");
        dates.innerText = "DATE";
        showsMobile.appendChild(dates);
        const showDate = document.createElement("p");
        showDate.innerText = new Date(showsListArr[i].date).toLocaleDateString('en-us', options).replace(/,/g, "");
        showDate.style.fontWeight = "bold";
        showsMobile.appendChild(showDate);

        const venues = document.createElement("h3");
        venues.innerText = "VENUE";
        showsMobile.appendChild(venues);
        const showVenue = document.createElement("p");
        showVenue.innerText = showsListArr[i].place;
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


    //create shows desktop design
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

    const buyTicketButton = document.createElement("button");
    buyTicketButton.classList.add("shows__buyTicketsButton");
    buyTicketButton.classList.add("shows__buyTicketsButton--hidden");
    buyTicketButton.innerText = "BUY TICKETS";
    showsDesktopHeaders.appendChild(buyTicketButton);


    for (let i = 0; i < showsListArr.length; i++) {

        let showItem = document.createElement("div");
        showItem.classList.add("shows__desktopShowItem");
        showsDesktop.appendChild(showItem);

        let showDate = document.createElement("p");
        showDate.innerText = new Date(showsListArr[i].date).toLocaleDateString('en-us', options).replace(/,/g, "");
        showDate.style.fontWeight = "bold";
        showItem.appendChild(showDate);

        let showVenue = document.createElement("p");
        showVenue.innerText = showsListArr[i].place;
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





