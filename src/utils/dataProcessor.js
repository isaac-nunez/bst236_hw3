// Function to parse the JSON data from stations.json
export const parseStationsData = (data) => {
    return data.map(station => ({
        station: station.name,
        min_temp: station.min_temp,
        mean_temp: station.mean_temp,
        max_temp: station.max_temp
    }));
};

// Function to filter stations based on user selection
export const filterStationsBySelection = (stations, selectedStations) => {
    return stations.filter(station => selectedStations.includes(station.station));
};