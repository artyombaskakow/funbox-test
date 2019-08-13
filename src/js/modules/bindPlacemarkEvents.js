import renderMapPolyline from './renderMapPolyline';
import updateWayPointDataByPlacemark from './updateWayPointDataByPlacemark';

export default function bindPlacemarkEvents(app, wayPointObj){

    wayPointObj.placemark.events.add('dragend', function(e){
        renderMapPolyline(app, wayPointObj);
        updateWayPointDataByPlacemark(wayPointObj);
    });

    wayPointObj.placemark.events.add('drag', ()=>{
        renderMapPolyline(app, wayPointObj);
    });
}