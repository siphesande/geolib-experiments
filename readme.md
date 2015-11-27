# Geolib experiments

Use the supplied geolocations in `locations.json` to experiment with `geolib`.

Take a look at the [geolib](https://github.com/manuelbieh/Geolib) module on GitHub.

## Setup:

It can be used from Node as a module and in the browser.
In the browser be sure to reference it before you use it:

```html
<!-- be sure the src path is correct -->
<script src="geolib.min.js" charset="utf-8"></script>

```

If you would like to use it from Node, install the module like this:

`npm install geolib`

## Examples

The geolib functions returns results like this:

```javascript
geolib.getSpeed(
    {lat: 51.567294, lng: 7.38896, time: 1360231200880},
    {lat: 52.54944, lng: 13.468509, time: 1360245600880},
    {unit: 'mph'}
);
// -> 66.9408 (mph)
```

You should use the results of the function:

```javascript

var speed = geolib.getSpeed(
    {lat: 51.567294, lng: 7.38896, time: 1360231200880},
    {lat: 52.54944, lng: 13.468509, time: 1360245600880},
    {unit: 'mph'}
);
// -> 66.9408 (mph)

console.log(speed);

```

## Use app.js

Use the supplied `app.js` file to experiment with geolib. All the references are set up correctly in the file. There are two utiliy functions:

* one to handle displaying text in the results `div`;
* one to handle button `click` events.


## Functionality to try:

* [Distance between two locations](https://github.com/manuelbieh/Geolib#geolibgetdistanceobject-start-object-end-int-accuracy)
* [The centre of a bunch of coordinates](https://github.com/manuelbieh/Geolib#geolibgetcenterarray-coords)
* [Is a point inside a polygon](https://github.com/manuelbieh/Geolib#geolibispointinsideobject-latlng-array-coords)
* [Order coordinates by distance](https://github.com/manuelbieh/Geolib#geoliborderbydistanceobject-latlng-mixed-coords)
* [Find the nearest location to you](https://github.com/manuelbieh/Geolib#geolibfindnearestobject-latlng-mixed-coords-int-offset-int-limit)
* [Get the speed](https://github.com/manuelbieh/Geolib#geolibgetspeedcoords-coords-options)
* [Is the point inside circle](https://github.com/manuelbieh/Geolib#geolibispointincircleobject-latlng-object-center-integer-radius)
