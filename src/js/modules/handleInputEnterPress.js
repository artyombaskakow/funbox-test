import addWaypoint from './addWaypoint';

export default function handleInputEnterPress(app){

    $('.map-form__input').on('keypress', function(e){
        if(e.code==='Enter'){
            let address = $(this).val().trim();

            if(address.length==0) return;

            $(this).val('');
            addWaypoint(app, address);
        }
    });
}