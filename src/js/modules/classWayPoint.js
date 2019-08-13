export default class WayPoint{
    constructor(address = '', index = 0){
        this.address = address;
        this.index = index;
        this.placemark = null;
        this.listElem = null;
    }

    set address(value){
        value = value.trim();
        this._address = value;

        if(this.placemark){
            this.placemark.properties.set('balloonContent', `<strong>${value}</strong>`);
        }

        if(this.listElem){
            this.listElem.find('.map-form__waypoint-text').html(value);
        }
    }

    get address(){
        return this._address;
    }
}