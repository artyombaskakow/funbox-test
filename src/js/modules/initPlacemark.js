export default function initPlacemark(address, coords){
    return new ymaps.Placemark(coords, {
        balloonContent: `<strong>${address}</strong>`
    }, {
        preset: 'islands#circleIcon',
        iconColor: '#023300',
        draggable: true
    });
}