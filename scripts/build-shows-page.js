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

function renderShow() {
    showsItems.forEach((show) => {
        const showData = createShowItems(show);
        showSection.appendChild(showData);


        //when hovered
        showData.addEventListener('mouseover', function () {
            this.classList.add('hovered');
        });

        showData.addEventListener('click', function () {
            document.querySelectorAll('.show-item').forEach(item => {
                item.classList.remove('selected');
            });

            this.classList.add('selected');
        });
    });

}
renderShow();


function addTabletLabel() {
    const tabletLabels = document.querySelectorAll(".show__item--label");
    for (let i = 0; i < 3; i++) {
        tabletLabels[i].classList.add("show__item--label-tablet");
    }
    const one = document.querySelector(".shows__title");
    const two= document.createElement("div");
    two.appendChild(tabletLabels);
    console.log(two);
}
addTabletLabel();

// function createHeader() {
//     const header = document.createElement('p');
//     header.classList.add('show__item--label-tablet');
//     header.textContent = text;
//     return header;
//   }
// for (i=0; i<=3 ; i++){

// }