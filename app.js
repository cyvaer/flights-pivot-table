const flights = require('./flight_records');

var flightsDestinationsPivotTable =
    {
        'AA': { 'BNA': 'None', 'DEN': 'None', 'DFW': 'None', 'IAD': 'None', 'MIA': 'None', 'ORD': 'None', 'STL':'None' },
        'UA': { 'BNA': 'None', 'DEN': 'None', 'DFW': 'None', 'IAD': 'None', 'MIA': 'None', 'ORD': 'None', 'STL':'None' }
    };

function updateFlightPivotTable(flight){

    const destinationAccumulator =  flightsDestinationsPivotTable[flight.Carrier][flight.Destination];

    // If flight accumulator is equal to the string 'None',
    // then change it to number equal to zero to be able to sum + 1
    if( typeof destinationAccumulator === 'string' ){
        flightsDestinationsPivotTable[flight.Carrier][flight.Destination] = 0;
    }
    flightsDestinationsPivotTable[flight.Carrier][flight.Destination]++;

}

function getDestinationsPivotTable(){

    flights.forEach(flight => {
        updateFlightPivotTable(flight);
    });
    return flightsDestinationsPivotTable;

}

console.log(getDestinationsPivotTable());
