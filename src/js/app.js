import handleInputEnterPress from './modules/handleInputEnterPress';
import addWaypoint from './modules/addWaypoint';
import 'jquery-ui-sortable-npm/jquery-ui-sortable';
import handleSortableList from './modules/handleSortableList';

export default function appInit(){

    let app = {};

    app.map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 12
    });

    app.wayPointsList = [];

    app.polyline = new ymaps.Polyline([], {}, {
        strokeColor: "#000000",
        strokeWidth: 4,
        strokeOpacity: 0.5
    });

    handleInputEnterPress(app);
    app.map.geoObjects.add(app.polyline);
    handleSortableList(app);


    // деомнстрационные данные
    let addresses = ['Москва, ул. Красина 13', 'Москва, Неглинная 3', 'Москва, Арбат', 'Москва, Киевский вокзал'];
    addresses.forEach((addressItem)=>{
        addWaypoint(app, addressItem);
    });

    

}


