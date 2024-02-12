const showsItems = [
    {
        dateLabel: "date",
        venueLabel: "venue",
        locationLabel: "location",
        dateItem: "Mon Sept 09 2024",
        venueItem: "Ronald Lane",
        locationItem: "San Francisco, CA",
        buttonItem: "Buy Tickets"
    },
    {
        dateLabel: "date",
        venueLabel: "venue",
        locationLabel: "location",
        dateItem: "Tue Sept 17 2024",
        venueItem: "Pier 3 East",
        locationItem: "San Francisco, CA",
        buttonItem: "Buy Tickets"
    },
    {
        dateLabel: "date",
        venueLabel: "venue",
        locationLabel: "location",
        dateItem: "Sat Oct 12 2024",
        venueItem: "View Lounge ",
        locationItem: "San Francisco, CA",
        buttonItem: "Buy Tickets"
    },
    {
        dateLabel: "date",
        venueLabel: "venue",
        locationLabel: "location",
        dateItem: "Sat Nov 16 2024",
        venueItem: "Hyatt Agency",
        locationItem: "San Francisco, CA",
        buttonItem: "Buy Tickets"
    },
    {
        dateLabel: "date",
        venueLabel: "venue",
        locationLabel: "location",
        dateItem: "Fri Nov 29 2024",
        venueItem: "Moscow Center",
        locationItem: "San Francisco, CA",
        buttonItem: "Buy Tickets"
    },
    {
        dateLabel: "date",
        venueLabel: "venue",
        locationLabel: "location",
        dateItem: "Wed Dec 18 2024",
        venueItem: "Press Club",
        locationItem: "San Francisco, CA",
        buttonItem: "Buy Tickets"
    }
];

const showSection = document.querySelector(".shows__layout");

//To create elements using DOM
function createShowItems(show) {
    const showCont = document.createElement("div");
    showCont.classList.add("show__item");
    const dateCont = document.createElement("div");
    dateCont.classList.add("show__item--cont")
    const dateLabel = document.createElement("p");
    dateLabel.classList.add("show__item--label")
    dateLabel.textContent = show.dateLabel;
    const dateContent = document.createElement("p");
    dateContent.classList.add("show__item--value")
    dateContent.classList.add("show__item--date-style")
    dateContent.textContent = show.dateItem;
    const venueCont = document.createElement("div");
    venueCont.classList.add("show__item--cont")
    const venueLabel = document.createElement("p");
    venueLabel.classList.add("show__item--label")
    venueLabel.textContent = show.venueLabel;
    const venueContent = document.createElement("p");
    venueContent.classList.add("show__item--value")
    venueContent.textContent = show.venueItem;
    const locationCont = document.createElement("div");
    locationCont.classList.add("show__item--cont")
    const locationLabel = document.createElement("p");
    locationLabel.classList.add("show__item--label")
    locationLabel.textContent = show.locationLabel;
    const locationContent = document.createElement("p");
    locationContent.classList.add("show__item--value")
    locationContent.textContent = show.locationItem;
    const buttonCont = document.createElement("p");
    buttonCont.classList.add("show__item--button");
    buttonCont.textContent = show.buttonItem;
    showCont.appendChild(dateLabel);
    showCont.appendChild(dateContent);
    showCont.appendChild(venueLabel);
    showCont.appendChild(venueContent);
    showCont.appendChild(locationLabel);
    showCont.appendChild(locationContent);
    showCont.appendChild(buttonCont);
    return showCont;
}

//To disply all the shows
function displayShow() {
    showsItems.forEach((show) => {
        const showData = createShowItems(show);
        showSection.appendChild(showData);
        showData.addEventListener('click', function () {
            const items = document.querySelectorAll('.show__item');
            items.forEach((item) => {
                item.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });
}
displayShow();

//To create labels for tablet view
function addTabletLabel(data) {
    const tabletLabelCont =document.createElement("div");
    tabletLabelCont.classList.add('show__layout--label-tablet');
    showSection.prepend(tabletLabelCont);
    const tabletDateLabel = document.createElement("p");
    tabletDateLabel.classList.add('show__layout--label-tablet');
    tabletDateLabel.textContent= data[0].dateLabel;
    tabletLabelCont.appendChild(tabletDateLabel);
    const tabletVenueLabel = document.createElement("p");
    tabletVenueLabel.classList.add('show__layout--label-tablet');
    tabletVenueLabel.textContent =data[0].venueLabel;
    tabletLabelCont.appendChild(tabletVenueLabel);
    const tabletLocationLabel = document.createElement("p");
    tabletLocationLabel.classList.add('show__layout--label-tablet');
    tabletLocationLabel.textContent =data[0].locationLabel;
    tabletLabelCont.appendChild(tabletLocationLabel);   
}
addTabletLabel(showsItems);