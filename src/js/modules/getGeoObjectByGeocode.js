export default function getGeoObjectByGeocode(geocode, callback){
    $.ajax({
        type: 'POST',
        url: 'https://geocode-maps.yandex.ru/1.x/',
        data: {
            apikey: '8e6f6e8a-74a4-40eb-8d97-375ec4a1908d',
            geocode: geocode,
            format: 'json'
        },
        success: function(responseObj){

            if(responseObj.response.GeoObjectCollection.featureMember.length){

                let geoObject = responseObj.response.GeoObjectCollection.featureMember[0].GeoObject;
                console.log('geoObject', geoObject);
                
                if(callback){
                    callback(geoObject);
                }

            } else{
                console.log('empy response', response);
            }
        }
    })
}