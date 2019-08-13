import getWaypointElemHtml from './getWaypointElemHtml';
import removeWaypoint from './removeWaypoint';
import WayPoint from './classWayPoint';
import addMapMarker from './addMapMarker';

export default function addWaypoint(app, address){

    let waypoint = new WayPoint(address);

    addMapMarker(app, waypoint, ()=>{

        let waypointHtml = getWaypointElemHtml({address: address});
        let waypointsListContainer = $(".map-form__waypoints-list");

        let $listElem = waypointsListContainer.append(waypointHtml).children().last();
        let $removeElemBtn = $listElem.find('.map-form__waypoint-remove');
        
        waypoint.listElem = $listElem;
        app.wayPointsList.push(waypoint);

        $removeElemBtn.on('click', function(){
            removeWaypoint(app, waypoint);
        });

    });

}