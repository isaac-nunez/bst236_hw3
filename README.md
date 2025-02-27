# README.md content for the temperature-dashboard project

# Temperature Dashboard

This project is a web application that visualizes temperature data from various train stations around the globe. Users can select multiple stations to view their temperature statistics, including minimum, mean, and maximum temperatures.

## Features

- Interactive temperature chart displaying data for selected stations.
- Sidebar for selecting up to 10 stations.
- Responsive design with a clean and modern layout.

## Project Structure

```
temperature-dashboard
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── Sidebar.js
│   │   └── TemperatureChart.js
│   ├── data
│   │   └── stations.json
│   ├── styles
│   │   └── main.css
│   ├── utils
│   │   └── dataProcessor.js
│   ├── app.js
│   └── index.html
├── tests
│   └── app.test.js
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/temperature-dashboard.git
   ```
2. Navigate to the project directory:
   ```
   cd temperature-dashboard
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application, use the following command:
```
npm start
```
Then open your browser and go to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.