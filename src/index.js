import generateMap from "./scripts/map";
import getGDP from "./scripts/data";

document.addEventListener("DOMContentLoaded", () => {
    generateMap();
    getGDP()
    .then(gdp => {
        console.log(gdp, 'we got the gdp back');
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation: ', error);
    }
    );

    // getGDPGrowth()
    // .then(gdp_growth => {
    //     console.log(gdp_growth, 'we got the gdp_growth back');
    // })
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation: ', error);
    // }
    // );
});








