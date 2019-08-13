
export default function renderMapPolyline({polyline: polyline, wayPointsList: wayPointsList}, wayPointObj = null){

    if(wayPointObj){

        let wpIndex = wayPointsList.indexOf(wayPointObj);
        polyline.geometry.set( wpIndex, wayPointObj.placemark.geometry.getCoordinates() );

    } else {

        let points = [];
        wayPointsList.forEach( wp => wp.placemark ? points.push(wp.placemark.geometry.getCoordinates()) : points );
        polyline.geometry.setCoordinates(points); 

    }

    

    
}