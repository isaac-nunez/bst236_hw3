import React from 'react';

const Sidebar = ({ stations, selectedStations, onStationSelect }) => {
  const handleStationChange = (event) => {
    const value = Array.from(event.target.selectedOptions, option => option.value);
    onStationSelect(value);
  };

  return (
    <div className="sidebar">
      <h2>Select Stations</h2>
      <select multiple={true} value={selectedStations} onChange={handleStationChange}>
        {stations.map((station) => (
          <option key={station} value={station}>
            {station}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sidebar;