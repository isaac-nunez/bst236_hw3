import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import TemperatureChart from './components/TemperatureChart';
import { fetchData } from './utils/dataProcessor';
import './styles/main.css';

const App = () => {
  const [stations, setStations] = useState([]);
  const [selectedStations, setSelectedStations] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setStations(data);
    };
    loadData();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar 
          stations={stations} 
          selectedStations={selectedStations} 
          setSelectedStations={setSelectedStations} 
        />
        <TemperatureChart selectedStations={selectedStations} />
      </div>
      <Footer />
    </div>
  );
};

export default App;