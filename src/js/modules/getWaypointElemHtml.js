export default function getWaypointElemHtml({address: address}){
    return `<li class="map-form__waypoint-item">
                <i class="fas fa-map-marker-alt map-form__icon-marker"></i>
                <div class="map-form__waypoint-text">${address}</div>
                <button class="map-form__waypoint-remove" type="button">
                    <i class="fas fa-times-circle map-form__remove-icon"></i>
                </button>
            </li>`;
}