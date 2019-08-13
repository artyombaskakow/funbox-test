import getWaypointElemHtml from './getWaypointElemHtml';
import removeWaypoint from './removeWaypoint';
import WayPoint from './classWayPoint';
import addMapMarker from './addMapMarker';

export default function addWaypoint(app, address){

    let waypointHtml = getWaypointElemHtml({address: address});
    let waypointsListContainer = $(".map-form__waypoints-list");

    let $listElem = waypointsListContainer.append(waypointHtml).children().last();
    let $removeElemBtn = $listElem.find('.map-form__waypoint-remove');
    let waypoint = new WayPoint(address);
    waypoint.listElem = $listElem;

    app.wayPointsList.push(waypoint);

    $removeElemBtn.on('click', function(){
        removeWaypoint(app, waypoint);
    });

    addMapMarker(app, waypoint);

}