import renderMapPolyline from './renderMapPolyline';

export default function removeWaypoint(app, wayPointObj){
    wayPointObj.listElem.remove();
    app.map.geoObjects.remove(wayPointObj.placemark);
    app.wayPointsList.splice( app.wayPointsList.indexOf(wayPointObj), 1 );
    renderMapPolyline(app);
}