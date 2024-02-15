import { apiKey, BandSiteApi } from "./band-site-api.js";

const apiClient = new BandSiteApi(apiKey);
let showsItems =[];

const fetchShows = async () => {
    try {
        let showsfetched = await apiClient.getShows();
        showsItems = showsfetched;
        // console.log(showsItems)
        displayShow();
        hideLabelTablet();
    }
    catch (error) {
        console.log(error);
    }
}
fetchShows();

const showSection = document.querySelector(".shows__layout");

//Format date
function formatDate(showDate){
    const date = new Date(showDate);
    const monthArray = ['Jan', 'Feb' ,'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayArray=['Sun', 'Mon', 'Tue', 'Wed','Thu', 'Fri', 'Sat'];
    const day = dayArray[date.getDay()];
    const dateValue = ((String(date.getDate()).length) === 2 ? '' : '0') + date.getDate();
    const month = monthArray[date.getMonth()];
    const year =date.getFullYear();
    return `${day} ${month} ${dateValue} ${year}`;
}

//To disply all the shows
function displayShow() {
    showsItems.forEach((show) => {
        const showData = createShowItems(show);
        //  const showData = addShows(show);
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
//To create elements using DOM
function createShowItems(show) {
    const shows = document.createElement("div");
    shows.classList.add("show__cont"); //sprint 3

    const showCont = document.createElement("div");
    showCont.classList.add("show__item");

    const labelCont = document.createElement("div");
    labelCont.classList.add("show__item--label-tablet-cont")//sprint3
    const dateCont = document.createElement("div");
    dateCont.classList.add("show__item--cont")
    const dateLabel = document.createElement("p");
    dateLabel.classList.add("show__item--label")
    dateLabel.textContent = "date";
    const dateLabelTablet = document.createElement("p");
    dateLabelTablet.classList.add("show__item--label-tablet")
    dateLabelTablet.textContent = "date";

    const dateContent = document.createElement("p");
    dateContent.classList.add("show__item--value")
    dateContent.classList.add("show__item--date-style")
    dateContent.textContent = formatDate(show.date);

// dateCont.appendChild(dateLabel);
// dateCont.appendChild(dateContent);

    

    const venueCont = document.createElement("div");
    venueCont.classList.add("show__item--cont")
    const venueLabel = document.createElement("p");
    venueLabel.classList.add("show__item--label")
    venueLabel.textContent = "venue";
    const venueLabelTablet = document.createElement("p");
    venueLabelTablet.classList.add("show__item--label-tablet")
    venueLabelTablet.textContent = "venue";

    const venueContent = document.createElement("p");
    venueContent.classList.add("show__item--value")
    venueContent.textContent = show.place;

    // venueCont.appendChild(venueLabel);
    // venueCont.appendChild(venueContent);

    const locationCont = document.createElement("div");
    locationCont.classList.add("show__item--cont")
    const locationLabel = document.createElement("p");
    locationLabel.classList.add("show__item--label")
    locationLabel.textContent = "location";
    const locationLabelTablet = document.createElement("p");
    locationLabelTablet.classList.add("show__item--label-tablet")
    locationLabelTablet.textContent = "location";
    const locationContent = document.createElement("p");
    locationContent.classList.add("show__item--value")
    locationContent.textContent = show.location;
    const buttonCont = document.createElement("p");

    // locationCont.appendChild(locationLabel);
    // locationCont.appendChild(locationContent);

    buttonCont.classList.add("show__item--button");
    buttonCont.textContent = "Buy ticket";


   /* showCont.appendChild(dateCont);    
    showCont.appendChild(venueCont);
    showCont.appendChild(locationCont);
    showCont.appendChild(buttonCont);*/

    labelCont.appendChild(dateLabelTablet);
    labelCont.appendChild(venueLabelTablet);
    labelCont.appendChild(locationLabelTablet);




   /* SPRINT 2*/
   showCont.appendChild(dateLabel);
    showCont.appendChild(dateContent);
    showCont.appendChild(venueLabel);
    showCont.appendChild(venueContent);
    showCont.appendChild(locationLabel);
    showCont.appendChild(locationContent);
    showCont.appendChild(buttonCont);

    shows.appendChild(labelCont);
    shows.appendChild(showCont);

    // const tabletLabelCont =document.createElement("div");
    // tabletLabelCont.classList.add('show__layout--label-tablet');
    // showSection.prepend(tabletLabelCont);
    // const tabletDateLabel = document.createElement("p");
    // tabletDateLabel.classList.add('show__layout--label-tablet');
    // tabletDateLabel.textContent= "date";
    // tabletLabelCont.appendChild(tabletDateLabel);
    // const tabletVenueLabel = document.createElement("p");
    // tabletVenueLabel.classList.add('show__layout--label-tablet');
    // tabletVenueLabel.textContent = "venue";
    // tabletLabelCont.appendChild(tabletVenueLabel);
    // const tabletLocationLabel = document.createElement("p");
    // tabletLocationLabel.classList.add('show__layout--label-tablet');
    // tabletLocationLabel.textContent ="location";
    // tabletLabelCont.appendChild(tabletLocationLabel);  

    
    return shows;
}

//Add additional label to labels in tablet and desktop view except for first one. To hide the remaining
function hideLabelTablet(){
    const label = document.querySelectorAll(".show__item--label-tablet-cont");
    console.log(label.length);
    for(let i=1; i<label.length; i++){
        label[i].classList.add('show__item--label-tablet-none');
    }
}
// hideLabelTablet();
//To create labels for tablet view
function addTabletLabel(data) {
    const tabletLabelCont =document.createElement("div");
    tabletLabelCont.classList.add('show__layout--label-tablet');
    showSection.prepend(tabletLabelCont);
    const tabletDateLabel = document.createElement("p");
    tabletDateLabel.classList.add('show__layout--label-tablet');
    tabletDateLabel.textContent= "date";
    tabletLabelCont.appendChild(tabletDateLabel);
    const tabletVenueLabel = document.createElement("p");
    tabletVenueLabel.classList.add('show__layout--label-tablet');
    tabletVenueLabel.textContent = "venue";
    tabletLabelCont.appendChild(tabletVenueLabel);
    const tabletLocationLabel = document.createElement("p");
    tabletLocationLabel.classList.add('show__layout--label-tablet');
    tabletLocationLabel.textContent ="location";
    tabletLabelCont.appendChild(tabletLocationLabel);   
}
// addTabletLabel(showsItems);