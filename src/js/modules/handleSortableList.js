import renderMapPolyline from './renderMapPolyline';

export default function handleSortableList(app){

    $( ".map-form__waypoints-list" ).sortable({
        stop: function( event, ui ) {
            if(app.wayPointsList.length){
                let domList = app.wayPointsList.map(item => item.listElem[0]);

                $( ".map-form__waypoints-list .map-form__waypoint-item" ).each(function(i){
                    let index = domList.indexOf($(this)[0]);
                    app.wayPointsList[index].index = i; 
                });

                app.wayPointsList.sort((a, b) => a.index - b.index);
                renderMapPolyline(app);
                
            }
        }
    });

    $( ".map-form__waypoints-list" ).disableSelection();
}

