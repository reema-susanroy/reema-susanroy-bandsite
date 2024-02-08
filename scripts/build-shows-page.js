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


    // const buttonCont = document.createElement("button");
    // buttonCont.classList.add("show__item--button");
    // buttonCont.textContent = show.buttonItem;

    const buttonCont = document.createElement("p");
    buttonCont.classList.add("show__item--button");
    buttonCont.textContent = show.buttonItem;


    dateCont.appendChild(dateLabel);
    dateCont.appendChild(dateContent);
    venueCont.appendChild(venueLabel);
    venueCont.appendChild(venueContent);
    locationCont.appendChild(locationLabel);
    locationCont.appendChild(locationContent);

    showCont.appendChild(dateCont);
    showCont.appendChild(venueCont);
    showCont.appendChild(locationCont);


    /*showCont.appendChild(dateLabel);
    showCont.appendChild(dateContent);
    showCont.appendChild(venueLabel);
    showCont.appendChild(venueContent);
    showCont.appendChild(locationLabel);
    showCont.appendChild(locationContent);*/

    showCont.appendChild(buttonCont);

    return showCont;

}

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


function addTabletLabel() {
    /*
    let date, venue, location;
    const showLayout = document.querySelector(".shows__layout");
    const tabletLabelCont =document.createElement('div');
    tabletLabelCont.classList.add('show__item--label-tablet');
    const tabletDateLabel =document.createElement('p');
    const tabletVenueLabel =document.createElement('p');
    const tabletLocationLabel =document.createElement('p');
    
    showsItems.forEach((item) => {
        date = item.dateLabel,
        venue=item.venueLabel,
        location=item.locationLabel
    });

    tabletDateLabel.textContent=date;
    tabletVenueLabel.textContent=venue;
    tabletLocationLabel.textContent=location;

    tabletLabelCont.appendChild(tabletDateLabel);    
    tabletLabelCont.appendChild(tabletVenueLabel);
    tabletLabelCont.appendChild(tabletLocationLabel);
    console.log(tabletLabelCont);

    showLayout.insertAdjacentElement('beforebegin',tabletLabelCont);
    */

    const tabletLabels = document.querySelectorAll(".show__item--label");
    for (let i = 0; i < 3; i++) {
        tabletLabels[i].classList.add("show__item--label-tablet");
    }
}
addTabletLabel();
