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
}
