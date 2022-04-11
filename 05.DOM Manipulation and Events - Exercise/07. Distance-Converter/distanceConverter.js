function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convert);

    //convert to meters
    const convertFrom = {
        km: function(distance) { return distance * 1000},
        m: function(distance) { return distance},
        cm: function(distance) { return distance * 0.01},
        mm: function(distance) { return distance * 0.001},
        mi: function(distance) { return distance * 1609.34},
        yrd: function(distance) { return distance * 0.9144},
        ft: function(distance) { return distance * 0.3048},
        in: function(distance) { return distance * 0.0254},
    }

    //convert from meters to desired distance
    const convertTo = {
        km: function(distance) { return distance / 1000},
        m: function(distance) { return distance},
        cm: function(distance) { return distance * 100},
        mm: function(distance) { return distance * 1000},
        mi: function(distance) { return distance / 1609.34},
        yrd: function(distance) { return distance / 0.9144},
        ft: function(distance) { return distance / 0.3048},
        in: function(distance) { return distance / 0.0254},
    }

    function convert(){
        let distance = Number(document.getElementById('inputDistance').value);
        let inputUnits = document.getElementById('inputUnits').value;
        let convertUnits = document.getElementById('outputUnits').value;
        
        let distaceInMeters = convertFrom[inputUnits](distance);
        let result = convertTo[convertUnits](distaceInMeters);

        document.getElementById('outputDistance').value = result;
    }
}