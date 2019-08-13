import getGeoObjectByGeocode from './getGeoObjectByGeocode';

export default function updateWayPointDataByPlacemark(wayPointObj){

    let coords = wayPointObj.placemark.geometry.getCoordinates()
        .map(c => c.toString().replace(',', '.'))
        .reverse()
        .join(',');

    getGeoObjectByGeocode(coords, (geoObject) => {
        wayPointObj.address = geoObject.name;
    });

}