// Dataset global de aeropuertos y rutas para el prototipo FlightConnections

const AIRPORTS = [
  { iata: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "United States", lat: 40.6413, lng: -73.7781 },
  { iata: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "United States", lat: 33.9416, lng: -118.4085 },
  { iata: "MIA", name: "Miami International Airport", city: "Miami", country: "United States", lat: 25.7959, lng: -80.2870 },
  { iata: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "United States", lat: 37.6213, lng: -122.3790 },
  { iata: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "United States", lat: 41.9742, lng: -87.9073 },
  { iata: "ATL", name: "Hartsfield-Jackson Atlanta International Airport", city: "Atlanta", country: "United States", lat: 33.6407, lng: -84.4277 },
  { iata: "HNL", name: "Daniel K. Inouye International Airport", city: "Honolulu", country: "United States", lat: 21.3187, lng: -157.9225 },
  
  { iata: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada", lat: 43.6777, lng: -79.6248 },
  { iata: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada", lat: 49.1967, lng: -123.1815 },
  
  { iata: "LHR", name: "London Heathrow Airport", city: "London", country: "United Kingdom", lat: 51.4700, lng: -0.4543 },
  { iata: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France", lat: 49.0097, lng: 2.5479 },
  { iata: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", lat: 50.0379, lng: 8.5622 },
  { iata: "MAD", name: "Adolfo Suárez Madrid-Barajas Airport", city: "Madrid", country: "Spain", lat: 40.4839, lng: -3.5680 },
  { iata: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands", lat: 52.3105, lng: 4.7683 },
  { iata: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey", lat: 41.2751, lng: 28.7519 },
  
  { iata: "GRU", name: "São Paulo/Guarulhos International Airport", city: "São Paulo", country: "Brazil", lat: -23.4356, lng: -46.4731 },
  { iata: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina", lat: -34.8222, lng: -58.5358 },
  { iata: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia", lat: 4.7016, lng: -74.1469 },
  { iata: "MEX", name: "Benito Juárez International Airport", city: "Mexico City", country: "Mexico", lat: 19.4363, lng: -99.0721 },
  { iata: "SCL", name: "Arturo Merino Benítez International Airport", city: "Santiago", country: "Chile", lat: -33.3930, lng: -70.7858 },
  
  { iata: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates", lat: 25.2532, lng: 55.3657 },
  { iata: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore", lat: 1.3644, lng: 103.9915 },
  { iata: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", lat: 35.5494, lng: 139.7798 },
  { iata: "DEL", name: "Indira Gandhi International Airport", city: "New Delhi", country: "India", lat: 28.5562, lng: 77.1000 },
  { iata: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China", lat: 40.0799, lng: 116.5971 },
  
  { iata: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa", lat: -26.1367, lng: 28.2411 },
  { iata: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa", lat: -33.9711, lng: 18.6021 },
  { iata: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya", lat: -1.3192, lng: 36.9275 },
  { iata: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt", lat: 30.1219, lng: 31.4056 },
  
  { iata: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia", lat: -33.9461, lng: 151.1772 },
  { iata: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand", lat: -37.0082, lng: 174.7850 }
];

// Rutas directas (declaradas una sola vez por par; la lógica de la app las tratará como bidireccionales)
const ROUTES = [
  // Conexiones de Norteamérica
  ["JFK", "LHR"], ["JFK", "LAX"], ["JFK", "MIA"], ["JFK", "GRU"], ["JFK", "FRA"], ["JFK", "CDG"], ["JFK", "DXB"], ["JFK", "SFO"], ["JFK", "ORD"], ["JFK", "ATL"], ["JFK", "YYZ"],
  ["LAX", "HND"], ["LAX", "SYD"], ["LAX", "HNL"], ["LAX", "SFO"], ["LAX", "ORD"], ["LAX", "MEX"], ["LAX", "YVR"], ["LAX", "LHR"], ["LAX", "SCL"],
  ["MIA", "GRU"], ["MIA", "EZE"], ["MIA", "BOG"], ["MIA", "MEX"], ["MIA", "LHR"], ["MIA", "MAD"], ["MIA", "CDG"], ["MIA", "SCL"],
  ["SFO", "HNL"], ["SFO", "HND"], ["SFO", "YVR"],
  ["ORD", "YYZ"], ["ORD", "ATL"],
  ["ATL", "YYZ"], ["ATL", "AMS"],
  ["HNL", "HND"],
  
  // Conexiones de Canadá
  ["YYZ", "FRA"], ["YYZ", "LHR"], ["YYZ", "ATL"],
  ["YVR", "YYZ"], ["YVR", "HND"],
  
  // Conexiones de Europa
  ["LHR", "CDG"], ["LHR", "FRA"], ["LHR", "AMS"], ["LHR", "MAD"], ["LHR", "DXB"], ["LHR", "SIN"], ["LHR", "HND"], ["LHR", "JNB"], ["LHR", "DEL"],
  ["CDG", "FRA"], ["CDG", "AMS"], ["CDG", "MAD"], ["CDG", "DXB"], ["CDG", "SIN"], ["CDG", "JNB"], ["CDG", "BOG"], ["CDG", "MEX"],
  ["FRA", "AMS"], ["FRA", "MAD"], ["FRA", "DXB"], ["FRA", "SIN"], ["FRA", "HND"], ["FRA", "DEL"], ["FRA", "PEK"],
  ["MAD", "EZE"], ["MAD", "GRU"], ["MAD", "BOG"], ["MAD", "MEX"], ["MAD", "SCL"], ["MAD", "AMS"], ["MAD", "IST"],
  ["AMS", "DXB"], ["AMS", "SIN"], ["AMS", "PEK"],
  ["IST", "DXB"], ["IST", "CAI"], ["IST", "DEL"],
  
  // Conexiones de Latinoamérica
  ["GRU", "EZE"], ["GRU", "BOG"], ["GRU", "SCL"],
  ["EZE", "SCL"], ["EZE", "BOG"],
  ["BOG", "MEX"], ["BOG", "SCL"],
  ["MEX", "SCL"],
  
  // Conexiones de Oriente Medio y Asia
  ["DXB", "SIN"], ["DXB", "HND"], ["DXB", "SYD"], ["DXB", "JNB"], ["DXB", "CPT"], ["DXB", "NBO"], ["DXB", "CAI"], ["DXB", "DEL"], ["DXB", "PEK"],
  ["SIN", "HND"], ["SIN", "SYD"], ["SIN", "AKL"], ["SIN", "DEL"], ["SIN", "PEK"],
  ["HND", "PEK"], ["HND", "SYD"],
  ["DEL", "PEK"],
  
  // Conexiones de África
  ["JNB", "CPT"], ["JNB", "NBO"], ["JNB", "CAI"],
  ["CPT", "NBO"],
  ["NBO", "CAI"],
  
  // Conexiones de Oceanía
  ["SYD", "AKL"], ["SYD", "SCL"]
];
