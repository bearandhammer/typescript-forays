// Supporting interface for a type that can be marked on the map
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
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

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        this.configureMarkerClickHandler(marker, mappable.markerContent());
    }

    private configureMarkerClickHandler(marker: google.maps.Marker, markerContent: string): void {
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markerContent
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
