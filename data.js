// Dataset global de aeropuertos y rutas para el prototipo FlightConnections

const AIRPORTS = [
  // --- North America ---
  { iata: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "United States", lat: 40.6413, lng: -73.7781 },
  { iata: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "United States", lat: 33.9416, lng: -118.4085 },
  { iata: "MIA", name: "Miami International Airport", city: "Miami", country: "United States", lat: 25.7959, lng: -80.2870 },
  { iata: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "United States", lat: 37.6213, lng: -122.3790 },
  { iata: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "United States", lat: 41.9742, lng: -87.9073 },
  { iata: "ATL", name: "Hartsfield-Jackson Atlanta International Airport", city: "Atlanta", country: "United States", lat: 33.6407, lng: -84.4277 },
  { iata: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas", country: "United States", lat: 32.8998, lng: -97.0403 },
  { iata: "DEN", name: "Denver International Airport", city: "Denver", country: "United States", lat: 39.8561, lng: -104.6737 },
  { iata: "SEA", name: "Seattle-Tacoma International Airport", city: "Seattle", country: "United States", lat: 47.4502, lng: -122.3088 },
  { iata: "HNL", name: "Daniel K. Inouye International Airport", city: "Honolulu", country: "United States", lat: 21.3187, lng: -157.9225 },
  
  // --- Canada ---
  { iata: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada", lat: 43.6777, lng: -79.6248 },
  { iata: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada", lat: 49.1967, lng: -123.1815 },
  
  // --- Europe ---
  { iata: "LHR", name: "London Heathrow Airport", city: "London", country: "United Kingdom", lat: 51.4700, lng: -0.4543 },
  { iata: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France", lat: 49.0097, lng: 2.5479 },
  { iata: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", lat: 50.0379, lng: 8.5622 },
  { iata: "MAD", name: "Adolfo Suárez Madrid-Barajas Airport", city: "Madrid", country: "Spain", lat: 40.4839, lng: -3.5680 },
  { iata: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands", lat: 52.3105, lng: 4.7683 },
  { iata: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey", lat: 41.2751, lng: 28.7519 },
  { iata: "FCO", name: "Leonardo da Vinci–Fiumicino Airport", city: "Rome", country: "Italy", lat: 41.8003, lng: 12.2389 },
  { iata: "LIS", name: "Humberto Delgado Airport", city: "Lisbon", country: "Portugal", lat: 38.7742, lng: -9.1342 },
  { iata: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece", lat: 37.9356, lng: 23.9484 },
  { iata: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland", lat: 47.4582, lng: 8.5555 },
  { iata: "DME", name: "Domodedovo International Airport", city: "Moscow", country: "Russia", lat: 55.4088, lng: 37.9061 },
  
  // --- Latin America ---
  { iata: "GRU", name: "São Paulo/Guarulhos International Airport", city: "São Paulo", country: "Brazil", lat: -23.4356, lng: -46.4731 },
  { iata: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina", lat: -34.8222, lng: -58.5358 },
  { iata: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia", lat: 4.7016, lng: -74.1469 },
  { iata: "MEX", name: "Benito Juárez International Airport", city: "Mexico City", country: "Mexico", lat: 19.4363, lng: -99.0721 },
  { iata: "SCL", name: "Arturo Merino Benítez International Airport", city: "Santiago", country: "Chile", lat: -33.3930, lng: -70.7858 },
  { iata: "LIM", name: "Jorge Chávez International Airport", city: "Lima", country: "Peru", lat: -12.0219, lng: -77.1143 },
  { iata: "PTY", name: "Tocumen International Airport", city: "Panama City", country: "Panama", lat: 9.0714, lng: -79.3834 },
  { iata: "CUN", name: "Cancún International Airport", city: "Cancún", country: "Mexico", lat: 21.0365, lng: -86.8771 },
  { iata: "MVD", name: "Carrasco International Airport", city: "Montevideo", country: "Uruguay", lat: -34.8384, lng: -56.0305 },
  
  // --- Middle East ---
  { iata: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates", lat: 25.2532, lng: 55.3657 },
  { iata: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar", lat: 25.2611, lng: 51.5650 },
  
  // --- Asia ---
  { iata: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore", lat: 1.3644, lng: 103.9915 },
  { iata: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan", lat: 35.5494, lng: 139.7798 },
  { iata: "ICN", name: "Seoul Incheon International Airport", city: "Seoul", country: "South Korea", lat: 37.4602, lng: 126.4407 },
  { iata: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "Hong Kong", lat: 22.3080, lng: 113.9185 },
  { iata: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand", lat: 13.6900, lng: 100.7501 },
  { iata: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia", lat: 2.7456, lng: 101.7099 },
  { iata: "DEL", name: "Indira Gandhi International Airport", city: "New Delhi", country: "India", lat: 28.5562, lng: 77.1000 },
  { iata: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", country: "India", lat: 19.0896, lng: 72.8656 },
  { iata: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China", lat: 40.0799, lng: 116.5971 },
  
  // --- Africa ---
  { iata: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa", lat: -26.1367, lng: 28.2411 },
  { iata: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa", lat: -33.9711, lng: 18.6021 },
  { iata: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya", lat: -1.3192, lng: 36.9275 },
  { iata: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt", lat: 30.1219, lng: 31.4056 },
  { iata: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia", lat: 8.9778, lng: 38.7993 },
  { iata: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco", lat: 33.3675, lng: -7.5898 },
  
  // --- Oceania ---
  { iata: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia", lat: -33.9461, lng: 151.1772 },
  { iata: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand", lat: -37.0082, lng: 174.7850 }
];

// Rutas directas (declaradas una sola vez por par; la lógica de la app las tratará como bidireccionales)
const ROUTES = [
  // --- Conexiones de Norteamérica ---
  ["JFK", "LHR"], ["JFK", "LAX"], ["JFK", "MIA"], ["JFK", "GRU"], ["JFK", "FRA"], ["JFK", "CDG"], ["JFK", "DXB"], ["JFK", "SFO"], ["JFK", "ORD"], ["JFK", "ATL"], ["JFK", "YYZ"],
  ["JFK", "DFW"], ["JFK", "DEN"], ["JFK", "DOH"], ["JFK", "FCO"], ["JFK", "LIS"],
  ["LAX", "HND"], ["LAX", "SYD"], ["LAX", "HNL"], ["LAX", "SFO"], ["LAX", "ORD"], ["LAX", "MEX"], ["LAX", "YVR"], ["LAX", "LHR"], ["LAX", "SCL"],
  ["LAX", "ICN"], ["LAX", "HKG"], ["LAX", "DFW"], ["LAX", "DEN"], ["LAX", "SEA"], ["LAX", "PTY"], ["LAX", "ZRH"],
  ["MIA", "GRU"], ["MIA", "EZE"], ["MIA", "BOG"], ["MIA", "MEX"], ["MIA", "LHR"], ["MIA", "MAD"], ["MIA", "CDG"], ["MIA", "SCL"],
  ["MIA", "PTY"], ["MIA", "LIM"], ["MIA", "CUN"], ["MIA", "MVD"], ["MIA", "LIS"], ["MIA", "FCO"], ["MIA", "CMN"],
  ["SFO", "HNL"], ["SFO", "HND"], ["SFO", "YVR"], ["SFO", "ICN"], ["SFO", "HKG"], ["SFO", "SEA"], ["SFO", "DEN"],
  ["ORD", "YYZ"], ["ORD", "ATL"], ["ORD", "DFW"], ["ORD", "DEN"], ["ORD", "SEA"], ["ORD", "CUN"],
  ["ATL", "YYZ"], ["ATL", "AMS"], ["ATL", "DFW"], ["ATL", "DEN"],
  ["DFW", "MEX"], ["DFW", "CUN"], ["DFW", "HND"], ["DFW", "LHR"], ["DFW", "FRA"], ["DFW", "DEN"],
  ["DEN", "SEA"], ["DEN", "LHR"], ["DEN", "HND"],
  ["SEA", "YVR"], ["SEA", "HNL"], ["SEA", "HND"], ["SEA", "ICN"],
  ["HNL", "HND"],

  // --- Conexiones de Canadá ---
  ["YYZ", "FRA"], ["YYZ", "LHR"], ["YYZ", "ATL"], ["YYZ", "YVR"],
  ["YVR", "HND"], ["YVR", "ICN"],

  // --- Conexiones de Europa ---
  ["LHR", "CDG"], ["LHR", "FRA"], ["LHR", "AMS"], ["LHR", "MAD"], ["LHR", "DXB"], ["LHR", "SIN"], ["LHR", "HND"], ["LHR", "JNB"], ["LHR", "DEL"],
  ["LHR", "FCO"], ["LHR", "LIS"], ["LHR", "ATH"], ["LHR", "ZRH"], ["LHR", "ICN"], ["LHR", "HKG"], ["LHR", "BKK"], ["LHR", "KUL"], ["LHR", "BOM"], ["LHR", "DOH"], ["LHR", "ADD"], ["LHR", "CMN"],
  ["CDG", "FRA"], ["CDG", "AMS"], ["CDG", "MAD"], ["CDG", "DXB"], ["CDG", "SIN"], ["CDG", "JNB"], ["CDG", "BOG"], ["CDG", "MEX"],
  ["CDG", "FCO"], ["CDG", "LIS"], ["CDG", "ATH"], ["CDG", "ZRH"], ["CDG", "ICN"], ["CDG", "BKK"], ["CDG", "DOH"], ["CDG", "ADD"], ["CDG", "CMN"],
  ["FRA", "AMS"], ["FRA", "MAD"], ["FRA", "DXB"], ["FRA", "SIN"], ["FRA", "HND"], ["FRA", "DEL"], ["FRA", "PEK"],
  ["FRA", "FCO"], ["FRA", "LIS"], ["FRA", "ATH"], ["FRA", "ZRH"], ["FRA", "HKG"], ["FRA", "DOH"], ["FRA", "CMN"],
  ["MAD", "EZE"], ["MAD", "GRU"], ["MAD", "BOG"], ["MAD", "MEX"], ["MAD", "SCL"], ["MAD", "AMS"], ["MAD", "IST"],
  ["MAD", "FCO"], ["MAD", "LIS"], ["MAD", "ATH"], ["MAD", "ZRH"], ["MAD", "PTY"], ["MAD", "MVD"], ["MAD", "CMN"],
  ["AMS", "DXB"], ["AMS", "SIN"], ["AMS", "PEK"], ["AMS", "FCO"], ["AMS", "LIS"], ["AMS", "ZRH"],
  ["IST", "DXB"], ["IST", "CAI"], ["IST", "DEL"], ["IST", "FCO"], ["IST", "ATH"], ["IST", "DME"],
  ["FCO", "ZRH"], ["FCO", "DXB"], ["FCO", "PTY"],
  ["LIS", "GRU"], ["LIS", "PTY"],
  ["ATH", "DXB"], ["ATH", "DOH"], ["ATH", "CAI"],
  ["ZRH", "DXB"], ["ZRH", "SIN"],
  ["DME", "DXB"], ["DME", "DEL"], ["DME", "PEK"], ["DME", "CAI"],

  // --- Conexiones de Latinoamérica ---
  ["GRU", "EZE"], ["GRU", "BOG"], ["GRU", "SCL"], ["GRU", "LIM"], ["GRU", "PTY"], ["GRU", "MVD"], ["GRU", "DOH"],
  ["EZE", "SCL"], ["EZE", "BOG"], ["EZE", "LIM"], ["EZE", "PTY"], ["EZE", "MVD"],
  ["BOG", "MEX"], ["BOG", "SCL"], ["BOG", "PTY"], ["BOG", "LIM"], ["BOG", "CUN"],
  ["MEX", "SCL"], ["MEX", "PTY"], ["MEX", "LIM"], ["MEX", "CUN"],
  ["SCL", "LIM"], ["SCL", "PTY"], ["SCL", "MVD"],
  ["LIM", "PTY"], ["LIM", "CUN"], ["LIM", "MVD"],
  ["PTY", "CUN"],

  // --- Conexiones de Oriente Medio y Asia ---
  ["DXB", "SIN"], ["DXB", "HND"], ["DXB", "SYD"], ["DXB", "JNB"], ["DXB", "CPT"], ["DXB", "NBO"], ["DXB", "CAI"], ["DXB", "DEL"], ["DXB", "PEK"],
  ["DXB", "DOH"], ["DXB", "BKK"], ["DXB", "KUL"], ["DXB", "BOM"], ["DXB", "ADD"], ["DXB", "CMN"],
  ["DOH", "SIN"], ["DOH", "SYD"], ["DOH", "JNB"], ["DOH", "BKK"], ["DOH", "BOM"], ["DOH", "ADD"],
  ["SIN", "HND"], ["SIN", "SYD"], ["SIN", "AKL"], ["SIN", "DEL"], ["SIN", "PEK"],
  ["SIN", "ICN"], ["SIN", "HKG"], ["SIN", "BKK"], ["SIN", "KUL"], ["SIN", "BOM"],
  ["HND", "PEK"], ["HND", "SYD"], ["HND", "ICN"], ["HND", "HKG"], ["HND", "BKK"], ["HND", "KUL"],
  ["ICN", "PEK"], ["ICN", "HKG"], ["ICN", "SEA"],
  ["HKG", "PEK"], ["HKG", "BKK"], ["HKG", "KUL"], ["HKG", "SYD"],
  ["BKK", "KUL"], ["BKK", "DEL"], ["BKK", "BOM"],
  ["KUL", "SYD"],
  ["DEL", "PEK"], ["DEL", "BOM"],
  ["BOM", "DXB"],

  // --- Conexiones de África ---
  ["JNB", "CPT"], ["JNB", "NBO"], ["JNB", "CAI"], ["JNB", "ADD"],
  ["CPT", "NBO"],
  ["NBO", "CAI"], ["NBO", "ADD"],
  ["CAI", "ADD"], ["CAI", "CMN"],
  ["ADD", "PEK"], ["ADD", "BOM"],

  // --- Conexiones de Oceanía ---
  ["SYD", "AKL"], ["SYD", "SCL"]
];
