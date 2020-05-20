// Supporting interface for a type that can be marked on the map
interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(mapDivElementId: string) {
        this.googleMap = new google.maps.Map(document.querySelector(`#${ mapDivElementId }`), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable) : void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
    }
}
