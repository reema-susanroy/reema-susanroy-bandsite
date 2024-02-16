import { apiKey, BandSiteApi } from "./band-site-api.js";

const apiClient = new BandSiteApi(apiKey);
let showsItems =[];

////To make an apicall to get the shows from api
const fetchShows = async () => {
    try {
        let showsfetched = await apiClient.getShows();
        showsItems = showsfetched;
        displayShow();
        hideLabelTablet();
    }
    catch (error) {
        console.log(error);
    }
}
fetchShows();

const showSection = document.querySelector(".shows__layout");

//To format date in "day mon date year" format
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
    console.log({showsItems})
    showsItems.forEach((show) => {
        const showData = createShowItems(show);
        console.log({showData});
        //  const showData = addShows(show);
        showSection.appendChild(showData);

        showData.addEventListener('click', function () {
            const items = document.querySelectorAll(".show__item");
            console.log({items});
            items.forEach((item) => {
                item.classList.remove('selected');
                console.log("selected");
            });
            this.classList.add('selected');
            console.log('removed')
        });
    });
}

function createShowItems(show) {
    const labelCont = document.createElement("div");
    labelCont.classList.add("show__item--label-tablet-cont")
    const dateLabelTablet = document.createElement("p");
    dateLabelTablet.classList.add("show__item--label-tablet")
    const venueLabelTablet = document.createElement("p");
    venueLabelTablet.classList.add("show__item--label-tablet")
    const locationLabelTablet = document.createElement("p");
    locationLabelTablet.classList.add("show__item--label-tablet")


    const showCont = document.createElement("div");
    showCont.classList.add("show__item");
    const dateCont = document.createElement("div");
    dateCont.classList.add("show__item--cont")
    const dateLabel = document.createElement("p");
    dateLabel.classList.add("show__item--label")
    dateLabel.textContent = "date";
    const dateContent = document.createElement("p");
    dateContent.classList.add("show__item--value")
    dateContent.classList.add("show__item--date-style")
    dateContent.textContent = formatDate(show.date);
    const venueCont = document.createElement("div");
    venueCont.classList.add("show__item--cont")
    const venueLabel = document.createElement("p");
    venueLabel.classList.add("show__item--label")
    venueLabel.textContent = "venue";
    const venueContent = document.createElement("p");
    venueContent.classList.add("show__item--value")
    venueContent.textContent = show.place;
    const locationCont = document.createElement("div");
    locationCont.classList.add("show__item--cont")
    const locationLabel = document.createElement("p");
    locationLabel.classList.add("show__item--label")
    locationLabel.textContent = "location";
    const locationContent = document.createElement("p");
    locationContent.classList.add("show__item--value")
    locationContent.textContent = show.location;
    const buttonCont = document.createElement("p");
    buttonCont.classList.add("show__item--button");
    buttonCont.textContent = "buy tickets";

    dateLabelTablet.textContent = "date";
    venueLabelTablet.textContent = "venue";
    locationLabelTablet.textContent = "location";
    labelCont.appendChild(dateLabelTablet);
    labelCont.appendChild(venueLabelTablet);
    labelCont.appendChild(locationLabelTablet);
    showSection.prepend(labelCont);

    showCont.appendChild(dateLabel);
    showCont.appendChild(dateContent);
    showCont.appendChild(venueLabel);
    showCont.appendChild(venueContent);
    showCont.appendChild(locationLabel);
    showCont.appendChild(locationContent);
    showCont.appendChild(buttonCont);
    return showCont;

}
//To create elements using DOM
/*
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

    //sprint3
    dateCont.appendChild(dateLabel);
    dateCont.appendChild(dateContent);

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

    //sprint3
    venueCont.appendChild(venueLabel);
    venueCont.appendChild(venueContent);


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


    //sprint 3
    locationCont.appendChild(locationLabel);
    locationCont.appendChild(locationContent);

    const buttonCont = document.createElement("p");

    buttonCont.classList.add("show__item--button");
    buttonCont.textContent = "Buy ticket";


    showCont.appendChild(dateCont);    
    showCont.appendChild(venueCont);
    showCont.appendChild(locationCont);
    showCont.appendChild(buttonCont);

    labelCont.appendChild(dateLabelTablet);
    labelCont.appendChild(venueLabelTablet);
    labelCont.appendChild(locationLabelTablet);

    // showCont.appendChild(dateLabel);
    // showCont.appendChild(dateContent);
    // showCont.appendChild(venueLabel);
    // showCont.appendChild(venueContent);
    // showCont.appendChild(locationLabel);
    // showCont.appendChild(locationContent);
    // showCont.appendChild(buttonCont);

    shows.appendChild(labelCont);
    shows.appendChild(showCont);
    return shows;
}*/

//Add additional 'tablet-none' label to all the labels except for first one inorder to hide the labels for tablet and desktop view 
function hideLabelTablet(){
    const label = document.querySelectorAll(".show__item--label-tablet-cont");
    console.log(label.length);
    for(let i=1; i<label.length; i++){
        label[i].classList.add('show__item--label-tablet-none');
    }
}