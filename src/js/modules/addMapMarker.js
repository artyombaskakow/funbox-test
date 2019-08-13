import getGeoObjectByGeocode from './getGeoObjectByGeocode';
import renderMapPolyline from './renderMapPolyline';
import initPlacemark from './initPlacemark';
import bindPlacemarkEvents from './bindPlacemarkEvents';

export default function addMapMarker(app, wayPointObj, callback){

    getGeoObjectByGeocode(wayPointObj.address, (GeoObject) => {

        let coords = GeoObject.Point.pos.split(' ').reverse();
        let placemark = initPlacemark(wayPointObj.address, coords);
        wayPointObj.placemark = placemark;

        app.map.geoObjects.add( placemark);
        app.map.setCenter(coords);

        if(callback){
            callback();
        }

        bindPlacemarkEvents(app, wayPointObj);
        renderMapPolyline(app, wayPointObj);

    });
    
}
