// Dataset mundial completo de aeropuertos y rutas comerciales (OpenFlights + Curated Global Network)

const AIRPORTS = [
  {
    "iata": "DWD",
    "name": "King Salman Abdulaziz Airport",
    "city": "",
    "country": "Saudi Arabia",
    "lat": 24.4499,
    "lng": 44.1212,
    "tier": 3
  },
  {
    "iata": "AAL",
    "name": "Aalborg Airport",
    "city": "Aalborg",
    "country": "Denmark",
    "lat": 57.0928,
    "lng": 9.8492,
    "tier": 2
  },
  {
    "iata": "AAR",
    "name": "Aarhus Airport",
    "city": "Aarhus",
    "country": "Denmark",
    "lat": 56.3,
    "lng": 10.619,
    "tier": 2
  },
  {
    "iata": "JEG",
    "name": "Aasiaat Airport",
    "city": "Aasiaat",
    "country": "Greenland",
    "lat": 68.7218,
    "lng": -52.7847,
    "tier": 3
  },
  {
    "iata": "ABD",
    "name": "Abadan Airport",
    "city": "Abadan",
    "country": "Iran",
    "lat": 30.3711,
    "lng": 48.2283,
    "tier": 2
  },
  {
    "iata": "ABA",
    "name": "Abakan Airport",
    "city": "Abakan",
    "country": "Russia",
    "lat": 53.74,
    "lng": 91.385,
    "tier": 3
  },
  {
    "iata": "YXX",
    "name": "Abbotsford Airport",
    "city": "Abbotsford",
    "country": "Canada",
    "lat": 49.0253,
    "lng": -122.361,
    "tier": 3
  },
  {
    "iata": "ABR",
    "name": "Aberdeen Regional Airport",
    "city": "Aberdeen",
    "country": "United States",
    "lat": 45.4491,
    "lng": -98.4218,
    "tier": 3
  },
  {
    "iata": "ABZ",
    "name": "Aberdeen Dyce Airport",
    "city": "Aberdeen",
    "country": "United Kingdom",
    "lat": 57.2019,
    "lng": -2.1978,
    "tier": 1
  },
  {
    "iata": "AHB",
    "name": "Abha Regional Airport",
    "city": "Abha",
    "country": "Saudi Arabia",
    "lat": 18.2404,
    "lng": 42.6566,
    "tier": 2
  },
  {
    "iata": "ABJ",
    "name": "Port Bouet Airport",
    "city": "Abidjan",
    "country": "Cote d'Ivoire",
    "lat": 5.2614,
    "lng": -3.9263,
    "tier": 1
  },
  {
    "iata": "ABI",
    "name": "Abilene Regional Airport",
    "city": "Abilene",
    "country": "United States",
    "lat": 32.4113,
    "lng": -99.6819,
    "tier": 3
  },
  {
    "iata": "MTV",
    "name": "Mota Lava Airport",
    "city": "Ablow",
    "country": "Vanuatu",
    "lat": -13.666,
    "lng": 167.712,
    "tier": 3
  },
  {
    "iata": "AUH",
    "name": "Abu Dhabi International Airport",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "lat": 24.433,
    "lng": 54.6511,
    "tier": 1
  },
  {
    "iata": "AZI",
    "name": "Bateen Airport",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "lat": 24.4283,
    "lng": 54.4581,
    "tier": 3
  },
  {
    "iata": "ABS",
    "name": "Abu Simbel Airport",
    "city": "Abu Simbel",
    "country": "Egypt",
    "lat": 22.376,
    "lng": 31.6117,
    "tier": 3
  },
  {
    "iata": "ABV",
    "name": "Nnamdi Azikiwe International Airport",
    "city": "Abuja",
    "country": "Nigeria",
    "lat": 9.0068,
    "lng": 7.2632,
    "tier": 1
  },
  {
    "iata": "ACA",
    "name": "General Juan N Alvarez International Airport",
    "city": "Acapulco",
    "country": "Mexico",
    "lat": 16.7571,
    "lng": -99.754,
    "tier": 2
  },
  {
    "iata": "ACC",
    "name": "Kotoka International Airport",
    "city": "Accra",
    "country": "Ghana",
    "lat": 5.6052,
    "lng": -0.1668,
    "tier": 1
  },
  {
    "iata": "ADK",
    "name": "Adak Airport",
    "city": "Adak Island",
    "country": "United States",
    "lat": 51.878,
    "lng": -176.646,
    "tier": 3
  },
  {
    "iata": "ADA",
    "name": "Adana Airport",
    "city": "Adana",
    "country": "Turkey",
    "lat": 36.9822,
    "lng": 35.2804,
    "tier": 2
  },
  {
    "iata": "ADD",
    "name": "Addis Ababa Bole International Airport",
    "city": "Addis Ababa",
    "country": "Ethiopia",
    "lat": 8.9779,
    "lng": 38.7993,
    "tier": 1
  },
  {
    "iata": "ADL",
    "name": "Adelaide International Airport",
    "city": "Adelaide",
    "country": "Australia",
    "lat": -34.945,
    "lng": 138.531,
    "tier": 1
  },
  {
    "iata": "ADE",
    "name": "Aden International Airport",
    "city": "Aden",
    "country": "Yemen",
    "lat": 12.8295,
    "lng": 45.0288,
    "tier": 2
  },
  {
    "iata": "ADF",
    "name": "Adıyaman Airport",
    "city": "Adiyaman",
    "country": "Turkey",
    "lat": 37.7314,
    "lng": 38.4689,
    "tier": 3
  },
  {
    "iata": "AZR",
    "name": "Touat Cheikh Sidi Mohamed Belkebir Airport",
    "city": "Adrar",
    "country": "Algeria",
    "lat": 27.8376,
    "lng": -0.1864,
    "tier": 3
  },
  {
    "iata": "AGA",
    "name": "Al Massira Airport",
    "city": "Agadir",
    "country": "Morocco",
    "lat": 30.325,
    "lng": -9.4131,
    "tier": 1
  },
  {
    "iata": "GUM",
    "name": "Antonio B. Won Pat International Airport",
    "city": "Agana",
    "country": "Guam",
    "lat": 13.4834,
    "lng": 144.796,
    "tier": 1
  },
  {
    "iata": "IXA",
    "name": "Agartala Airport",
    "city": "Agartala",
    "country": "India",
    "lat": 23.887,
    "lng": 91.2404,
    "tier": 2
  },
  {
    "iata": "AGX",
    "name": "Agatti Airport",
    "city": "Agatti Island",
    "country": "India",
    "lat": 10.8237,
    "lng": 72.176,
    "tier": 3
  },
  {
    "iata": "AGF",
    "name": "Agen-La Garenne Airport",
    "city": "Agen",
    "country": "France",
    "lat": 44.1747,
    "lng": 0.5906,
    "tier": 3
  },
  {
    "iata": "AGR",
    "name": "Agra Airport",
    "city": "Agra",
    "country": "India",
    "lat": 27.1558,
    "lng": 77.9609,
    "tier": 3
  },
  {
    "iata": "AJI",
    "name": "Ağrı Airport",
    "city": "Agri",
    "country": "Turkey",
    "lat": 39.6545,
    "lng": 43.026,
    "tier": 3
  },
  {
    "iata": "BQN",
    "name": "Rafael Hernandez Airport",
    "city": "Aguadilla",
    "country": "Puerto Rico",
    "lat": 18.4949,
    "lng": -67.1294,
    "tier": 3
  },
  {
    "iata": "AGU",
    "name": "Jesús Terán Paredo International Airport",
    "city": "Aguascalientes",
    "country": "Mexico",
    "lat": 21.7056,
    "lng": -102.318,
    "tier": 2
  },
  {
    "iata": "AHE",
    "name": "Ahe Airport",
    "city": "Ahe",
    "country": "French Polynesia",
    "lat": -14.4281,
    "lng": -146.257,
    "tier": 3
  },
  {
    "iata": "AMD",
    "name": "Sardar Vallabhbhai Patel International Airport",
    "city": "Ahmedabad",
    "country": "India",
    "lat": 23.0772,
    "lng": 72.6347,
    "tier": 1
  },
  {
    "iata": "AWZ",
    "name": "Ahwaz Airport",
    "city": "Ahwaz",
    "country": "Iran",
    "lat": 31.3374,
    "lng": 48.762,
    "tier": 2
  },
  {
    "iata": "AIT",
    "name": "Aitutaki Airport",
    "city": "Aitutaki",
    "country": "Cook Islands",
    "lat": -18.8309,
    "lng": -159.764,
    "tier": 3
  },
  {
    "iata": "AJL",
    "name": "Lengpui Airport",
    "city": "Aizwal",
    "country": "India",
    "lat": 23.8406,
    "lng": 92.6197,
    "tier": 2
  },
  {
    "iata": "AJA",
    "name": "Ajaccio-Napoléon Bonaparte Airport",
    "city": "Ajaccio",
    "country": "France",
    "lat": 41.9236,
    "lng": 8.8029,
    "tier": 1
  },
  {
    "iata": "AKK",
    "name": "Akhiok Airport",
    "city": "Akhiok",
    "country": "United States",
    "lat": 56.9387,
    "lng": -154.183,
    "tier": 3
  },
  {
    "iata": "AXT",
    "name": "Akita Airport",
    "city": "Akita",
    "country": "Japan",
    "lat": 39.6156,
    "lng": 140.219,
    "tier": 2
  },
  {
    "iata": "CAK",
    "name": "Akron Canton Regional Airport",
    "city": "Akron",
    "country": "United States",
    "lat": 40.9161,
    "lng": -81.4422,
    "tier": 2
  },
  {
    "iata": "AKU",
    "name": "Aksu Airport",
    "city": "Aksu",
    "country": "China",
    "lat": 41.2625,
    "lng": 80.2917,
    "tier": 3
  },
  {
    "iata": "SCO",
    "name": "Aktau Airport",
    "city": "Aktau",
    "country": "Kazakhstan",
    "lat": 43.8601,
    "lng": 51.092,
    "tier": 2
  },
  {
    "iata": "AKX",
    "name": "Aktobe Airport",
    "city": "Aktyubinsk",
    "country": "Kazakhstan",
    "lat": 50.2458,
    "lng": 57.2067,
    "tier": 2
  },
  {
    "iata": "AKV",
    "name": "Akulivik Airport",
    "city": "Akulivik",
    "country": "Canada",
    "lat": 60.8186,
    "lng": -78.1486,
    "tier": 3
  },
  {
    "iata": "AEY",
    "name": "Akureyri Airport",
    "city": "Akureyri",
    "country": "Iceland",
    "lat": 65.66,
    "lng": -18.0727,
    "tier": 3
  },
  {
    "iata": "KQA",
    "name": "Akutan Seaplane Base",
    "city": "Akutan",
    "country": "United States",
    "lat": 54.1338,
    "lng": -165.7789,
    "tier": 3
  },
  {
    "iata": "AAN",
    "name": "Al Ain International Airport",
    "city": "Al Ain",
    "country": "United Arab Emirates",
    "lat": 24.2617,
    "lng": 55.6092,
    "tier": 3
  },
  {
    "iata": "LAQ",
    "name": "La Abraq Airport",
    "city": "Al Bayda'",
    "country": "Libya",
    "lat": 32.7887,
    "lng": 21.9643,
    "tier": 3
  },
  {
    "iata": "AAY",
    "name": "Al Ghaidah International Airport",
    "city": "Al Ghaidah Intl",
    "country": "Yemen",
    "lat": 16.1917,
    "lng": 52.175,
    "tier": 3
  },
  {
    "iata": "AHU",
    "name": "Cherif Al Idrissi Airport",
    "city": "Al Hociema",
    "country": "Morocco",
    "lat": 35.1771,
    "lng": -3.8395,
    "tier": 3
  },
  {
    "iata": "AJF",
    "name": "Al-Jawf Domestic Airport",
    "city": "Al-Jawf",
    "country": "Saudi Arabia",
    "lat": 29.7851,
    "lng": 40.1,
    "tier": 3
  },
  {
    "iata": "ULH",
    "name": "Majeed Bin Abdulaziz Airport",
    "city": "Al-Ula",
    "country": "Saudi Arabia",
    "lat": 26.48,
    "lng": 38.1289,
    "tier": 3
  },
  {
    "iata": "HOF",
    "name": "Al Ahsa Airport",
    "city": "Al-ahsa",
    "country": "Saudi Arabia",
    "lat": 25.2853,
    "lng": 49.4852,
    "tier": 3
  },
  {
    "iata": "AUK",
    "name": "Alakanuk Airport",
    "city": "Alakanuk",
    "country": "United States",
    "lat": 62.68,
    "lng": -164.6599,
    "tier": 3
  },
  {
    "iata": "ALS",
    "name": "San Luis Valley Regional Bergman Field",
    "city": "Alamosa",
    "country": "United States",
    "lat": 37.4349,
    "lng": -105.867,
    "tier": 2
  },
  {
    "iata": "GZP",
    "name": "Gazipaşa Airport",
    "city": "Alanya",
    "country": "Turkey",
    "lat": 36.2992,
    "lng": 32.3006,
    "tier": 2
  },
  {
    "iata": "ABY",
    "name": "Southwest Georgia Regional Airport",
    "city": "Albany",
    "country": "United States",
    "lat": 31.5355,
    "lng": -84.1945,
    "tier": 3
  },
  {
    "iata": "ALB",
    "name": "Albany International Airport",
    "city": "Albany",
    "country": "United States",
    "lat": 42.7483,
    "lng": -73.8017,
    "tier": 1
  },
  {
    "iata": "ALH",
    "name": "Albany Airport",
    "city": "Albany",
    "country": "Australia",
    "lat": -34.9433,
    "lng": 117.809,
    "tier": 3
  },
  {
    "iata": "ABQ",
    "name": "Albuquerque International Sunport",
    "city": "Albuquerque",
    "country": "United States",
    "lat": 35.0402,
    "lng": -106.609,
    "tier": 1
  },
  {
    "iata": "ABX",
    "name": "Albury Airport",
    "city": "Albury",
    "country": "Australia",
    "lat": -36.0678,
    "lng": 146.958,
    "tier": 3
  },
  {
    "iata": "ACI",
    "name": "Alderney Airport",
    "city": "Alderney",
    "country": "Guernsey",
    "lat": 49.7061,
    "lng": -2.2147,
    "tier": 3
  },
  {
    "iata": "AES",
    "name": "Ålesund Airport",
    "city": "Alesund",
    "country": "Norway",
    "lat": 62.5625,
    "lng": 6.1197,
    "tier": 2
  },
  {
    "iata": "AEX",
    "name": "Alexandria International Airport",
    "city": "Alexandria",
    "country": "United States",
    "lat": 31.3274,
    "lng": -92.5498,
    "tier": 2
  },
  {
    "iata": "HBE",
    "name": "Borg El Arab International Airport",
    "city": "Alexandria",
    "country": "Egypt",
    "lat": 30.9177,
    "lng": 29.6964,
    "tier": 1
  },
  {
    "iata": "AXD",
    "name": "Dimokritos Airport",
    "city": "Alexandroupolis",
    "country": "Greece",
    "lat": 40.8559,
    "lng": 25.9563,
    "tier": 3
  },
  {
    "iata": "AHO",
    "name": "Alghero-Fertilia Airport",
    "city": "Alghero",
    "country": "Italy",
    "lat": 40.6321,
    "lng": 8.2908,
    "tier": 1
  },
  {
    "iata": "ALG",
    "name": "Houari Boumediene Airport",
    "city": "Algier",
    "country": "Algeria",
    "lat": 36.691,
    "lng": 3.2154,
    "tier": 1
  },
  {
    "iata": "ALC",
    "name": "Alicante International Airport",
    "city": "Alicante",
    "country": "Spain",
    "lat": 38.2822,
    "lng": -0.5582,
    "tier": 1
  },
  {
    "iata": "ASP",
    "name": "Alice Springs Airport",
    "city": "Alice Springs",
    "country": "Australia",
    "lat": -23.8067,
    "lng": 133.902,
    "tier": 2
  },
  {
    "iata": "BIM",
    "name": "South Bimini Airport",
    "city": "Alice Town",
    "country": "Bahamas",
    "lat": 25.6999,
    "lng": -79.2647,
    "tier": 3
  },
  {
    "iata": "IXD",
    "name": "Allahabad Airport",
    "city": "Allahabad",
    "country": "India",
    "lat": 25.4401,
    "lng": 81.7339,
    "tier": 3
  },
  {
    "iata": "AET",
    "name": "Allakaket Airport",
    "city": "Allakaket",
    "country": "United States",
    "lat": 66.5518,
    "lng": -152.622,
    "tier": 3
  },
  {
    "iata": "ABE",
    "name": "Lehigh Valley International Airport",
    "city": "Allentown",
    "country": "United States",
    "lat": 40.6521,
    "lng": -75.4408,
    "tier": 2
  },
  {
    "iata": "AIA",
    "name": "Alliance Municipal Airport",
    "city": "Alliance",
    "country": "United States",
    "lat": 42.0532,
    "lng": -102.804,
    "tier": 3
  },
  {
    "iata": "LLU",
    "name": "Alluitsup Paa Heliport",
    "city": "Alluitsup Paa",
    "country": "Greenland",
    "lat": 60.4644,
    "lng": -45.5692,
    "tier": 3
  },
  {
    "iata": "ALA",
    "name": "Almaty Airport",
    "city": "Alma-ata",
    "country": "Kazakhstan",
    "lat": 43.3521,
    "lng": 77.0405,
    "tier": 1
  },
  {
    "iata": "MEU",
    "name": "Monte Dourado Airport",
    "city": "Almeirim",
    "country": "Brazil",
    "lat": -0.8898,
    "lng": -52.6022,
    "tier": 3
  },
  {
    "iata": "LEI",
    "name": "Almería International Airport",
    "city": "Almeria",
    "country": "Spain",
    "lat": 36.8439,
    "lng": -2.3701,
    "tier": 2
  },
  {
    "iata": "IUE",
    "name": "Niue International Airport",
    "city": "Alofi",
    "country": "Niue",
    "lat": -19.079,
    "lng": -169.9256,
    "tier": 3
  },
  {
    "iata": "AOR",
    "name": "Sultan Abdul Halim Airport",
    "city": "Alor Setar",
    "country": "Malaysia",
    "lat": 6.1897,
    "lng": 100.398,
    "tier": 3
  },
  {
    "iata": "APN",
    "name": "Alpena County Regional Airport",
    "city": "Alpena",
    "country": "United States",
    "lat": 45.0781,
    "lng": -83.5603,
    "tier": 3
  },
  {
    "iata": "ALF",
    "name": "Alta Airport",
    "city": "Alta",
    "country": "Norway",
    "lat": 69.9761,
    "lng": 23.3717,
    "tier": 2
  },
  {
    "iata": "AFL",
    "name": "Piloto Osvaldo Marques Dias Airport",
    "city": "Alta Floresta",
    "country": "Brazil",
    "lat": -9.8664,
    "lng": -56.105,
    "tier": 3
  },
  {
    "iata": "LTI",
    "name": "Altai Airport",
    "city": "Altai",
    "country": "Mongolia",
    "lat": 46.3764,
    "lng": 96.2211,
    "tier": 3
  },
  {
    "iata": "ATM",
    "name": "Altamira Airport",
    "city": "Altamira",
    "country": "Brazil",
    "lat": -3.2539,
    "lng": -52.254,
    "tier": 3
  },
  {
    "iata": "AAT",
    "name": "Altay Air Base",
    "city": "Altay",
    "country": "China",
    "lat": 47.7499,
    "lng": 88.0858,
    "tier": 3
  },
  {
    "iata": "ACH",
    "name": "St Gallen Altenrhein Airport",
    "city": "Altenrhein",
    "country": "Switzerland",
    "lat": 47.485,
    "lng": 9.5608,
    "tier": 3
  },
  {
    "iata": "AOO",
    "name": "Altoona Blair County Airport",
    "city": "Altoona",
    "country": "United States",
    "lat": 40.2964,
    "lng": -78.32,
    "tier": 3
  },
  {
    "iata": "ASJ",
    "name": "Amami Airport",
    "city": "Amami",
    "country": "Japan",
    "lat": 28.4306,
    "lng": 129.713,
    "tier": 3
  },
  {
    "iata": "AMA",
    "name": "Rick Husband Amarillo International Airport",
    "city": "Amarillo",
    "country": "United States",
    "lat": 35.2194,
    "lng": -101.706,
    "tier": 2
  },
  {
    "iata": "ABM",
    "name": "Northern Peninsula Airport",
    "city": "Amberley",
    "country": "Australia",
    "lat": -10.9508,
    "lng": 142.459,
    "tier": 3
  },
  {
    "iata": "ABL",
    "name": "Ambler Airport",
    "city": "Ambler",
    "country": "United States",
    "lat": 67.1063,
    "lng": -157.857,
    "tier": 3
  },
  {
    "iata": "AMQ",
    "name": "Pattimura Airport, Ambon",
    "city": "Ambon",
    "country": "Indonesia",
    "lat": -3.7103,
    "lng": 128.089,
    "tier": 2
  },
  {
    "iata": "ASV",
    "name": "Amboseli Airport",
    "city": "Amboseli National Park",
    "country": "Kenya",
    "lat": -2.6451,
    "lng": 37.2531,
    "tier": 3
  },
  {
    "iata": "ULB",
    "name": "Uléi Airport",
    "city": "Ambryn Island",
    "country": "Vanuatu",
    "lat": -16.3297,
    "lng": 168.3011,
    "tier": 3
  },
  {
    "iata": "SID",
    "name": "Amílcar Cabral International Airport",
    "city": "Amilcar Cabral",
    "country": "Cape Verde",
    "lat": 16.7414,
    "lng": -22.9494,
    "tier": 2
  },
  {
    "iata": "AMM",
    "name": "Queen Alia International Airport",
    "city": "Amman",
    "country": "Jordan",
    "lat": 31.7226,
    "lng": 35.9932,
    "tier": 1
  },
  {
    "iata": "ATQ",
    "name": "Sri Guru Ram Dass Jee International Airport",
    "city": "Amritsar",
    "country": "India",
    "lat": 31.7096,
    "lng": 74.7973,
    "tier": 2
  },
  {
    "iata": "AMS",
    "name": "Amsterdam Airport Schiphol",
    "city": "Amsterdam",
    "country": "Netherlands",
    "lat": 52.3086,
    "lng": 4.7639,
    "tier": 1
  },
  {
    "iata": "DYR",
    "name": "Ugolny Airport",
    "city": "Anadyr",
    "country": "Russia",
    "lat": 64.7349,
    "lng": 177.741,
    "tier": 3
  },
  {
    "iata": "YAA",
    "name": "Anahim Lake Airport",
    "city": "Anahim Lake",
    "country": "Canada",
    "lat": 52.4525,
    "lng": -125.303,
    "tier": 3
  },
  {
    "iata": "AKP",
    "name": "Anaktuvuk Pass Airport",
    "city": "Anaktuvuk Pass",
    "country": "United States",
    "lat": 68.1336,
    "lng": -151.743,
    "tier": 3
  },
  {
    "iata": "AAQ",
    "name": "Anapa Vityazevo Airport",
    "city": "Anapa",
    "country": "Russia",
    "lat": 45.0021,
    "lng": 37.3473,
    "tier": 3
  },
  {
    "iata": "ANC",
    "name": "Ted Stevens Anchorage International Airport",
    "city": "Anchorage",
    "country": "United States",
    "lat": 61.1744,
    "lng": -149.996,
    "tier": 1
  },
  {
    "iata": "AOI",
    "name": "Ancona Falconara Airport",
    "city": "Ancona",
    "country": "Italy",
    "lat": 43.6163,
    "lng": 13.3623,
    "tier": 2
  },
  {
    "iata": "ANS",
    "name": "Andahuaylas Airport",
    "city": "Andahuaylas",
    "country": "Peru",
    "lat": -13.7064,
    "lng": -73.3504,
    "tier": 3
  },
  {
    "iata": "AZN",
    "name": "Andizhan Airport",
    "city": "Andizhan",
    "country": "Uzbekistan",
    "lat": 40.7277,
    "lng": 72.294,
    "tier": 3
  },
  {
    "iata": "ANX",
    "name": "Andøya Airport",
    "city": "Andoya",
    "country": "Norway",
    "lat": 69.2925,
    "lng": 16.1442,
    "tier": 3
  },
  {
    "iata": "AUY",
    "name": "Aneityum Airport",
    "city": "Anelghowhat",
    "country": "Vanuatu",
    "lat": -20.2492,
    "lng": 169.771,
    "tier": 3
  },
  {
    "iata": "CRK",
    "name": "Diosdado Macapagal International Airport",
    "city": "Angeles City",
    "country": "Philippines",
    "lat": 15.186,
    "lng": 120.56,
    "tier": 2
  },
  {
    "iata": "VLY",
    "name": "Anglesey Airport",
    "city": "Angelsey",
    "country": "United Kingdom",
    "lat": 53.2481,
    "lng": -4.5353,
    "tier": 3
  },
  {
    "iata": "YAX",
    "name": "Wapekeka Airport",
    "city": "Angling Lake",
    "country": "Canada",
    "lat": 53.8492,
    "lng": -89.5794,
    "tier": 3
  },
  {
    "iata": "AGN",
    "name": "Angoon Seaplane Base",
    "city": "Angoon",
    "country": "United States",
    "lat": 57.5036,
    "lng": -134.585,
    "tier": 3
  },
  {
    "iata": "ANG",
    "name": "Angoulême-Brie-Champniers Airport",
    "city": "Angouleme",
    "country": "France",
    "lat": 45.7292,
    "lng": 0.2215,
    "tier": 3
  },
  {
    "iata": "ANI",
    "name": "Aniak Airport",
    "city": "Aniak",
    "country": "United States",
    "lat": 61.5816,
    "lng": -159.543,
    "tier": 2
  },
  {
    "iata": "AWD",
    "name": "Aniwa Airport",
    "city": "Aniwa",
    "country": "Vanuatu",
    "lat": -19.2346,
    "lng": 169.6009,
    "tier": 3
  },
  {
    "iata": "ESB",
    "name": "Esenboğa International Airport",
    "city": "Ankara",
    "country": "Turkey",
    "lat": 40.1281,
    "lng": 32.9951,
    "tier": 1
  },
  {
    "iata": "AAE",
    "name": "Rabah Bitat Airport",
    "city": "Annaba",
    "country": "Algeria",
    "lat": 36.8222,
    "lng": 7.8092,
    "tier": 2
  },
  {
    "iata": "AQG",
    "name": "Anqing Tianzhushan Airport",
    "city": "Anqing",
    "country": "China",
    "lat": 30.5822,
    "lng": 117.05,
    "tier": 2
  },
  {
    "iata": "AOG",
    "name": "Anshan Air Base",
    "city": "Anshan",
    "country": "China",
    "lat": 41.1053,
    "lng": 122.854,
    "tier": 3
  },
  {
    "iata": "AVA",
    "name": "Anshun Huangguoshu Airport",
    "city": "Anshun",
    "country": "China",
    "lat": 26.2606,
    "lng": 105.8733,
    "tier": 3
  },
  {
    "iata": "ATA",
    "name": "Comandante FAP German Arias Graziani Airport",
    "city": "Anta",
    "country": "Peru",
    "lat": -9.3474,
    "lng": -77.5984,
    "tier": 3
  },
  {
    "iata": "ANM",
    "name": "Antsirabato Airport",
    "city": "Antalaha",
    "country": "Madagascar",
    "lat": -14.9994,
    "lng": 50.3202,
    "tier": 3
  },
  {
    "iata": "AYT",
    "name": "Antalya International Airport",
    "city": "Antalya",
    "country": "Turkey",
    "lat": 36.8987,
    "lng": 30.8005,
    "tier": 1
  },
  {
    "iata": "TNR",
    "name": "Ivato Airport",
    "city": "Antananarivo",
    "country": "Madagascar",
    "lat": -18.7969,
    "lng": 47.4788,
    "tier": 1
  },
  {
    "iata": "ANU",
    "name": "V.C. Bird International Airport",
    "city": "Antigua",
    "country": "Antigua and Barbuda",
    "lat": 17.1367,
    "lng": -61.7927,
    "tier": 1
  },
  {
    "iata": "ANF",
    "name": "Andrés Sabella Gálvez International Airport",
    "city": "Antofagasta",
    "country": "Chile",
    "lat": -23.4445,
    "lng": -70.4451,
    "tier": 2
  },
  {
    "iata": "DIE",
    "name": "Arrachart Airport",
    "city": "Antsiranana",
    "country": "Madagascar",
    "lat": -12.3494,
    "lng": 49.2917,
    "tier": 3
  },
  {
    "iata": "ANR",
    "name": "Antwerp International Airport (Deurne)",
    "city": "Antwerp",
    "country": "Belgium",
    "lat": 51.1894,
    "lng": 4.4603,
    "tier": 3
  },
  {
    "iata": "ANV",
    "name": "Anvik Airport",
    "city": "Anvik",
    "country": "United States",
    "lat": 62.6467,
    "lng": -160.191,
    "tier": 3
  },
  {
    "iata": "AOJ",
    "name": "Aomori Airport",
    "city": "Aomori",
    "country": "Japan",
    "lat": 40.7347,
    "lng": 140.691,
    "tier": 3
  },
  {
    "iata": "KVK",
    "name": "Kirovsk-Apatity Airport",
    "city": "Apatity",
    "country": "Russia",
    "lat": 67.4633,
    "lng": 33.5883,
    "tier": 3
  },
  {
    "iata": "ATW",
    "name": "Appleton International Airport",
    "city": "Appleton",
    "country": "United States",
    "lat": 44.2581,
    "lng": -88.5191,
    "tier": 2
  },
  {
    "iata": "AQJ",
    "name": "Aqaba King Hussein International Airport",
    "city": "Aqaba",
    "country": "Jordan",
    "lat": 29.6116,
    "lng": 35.0181,
    "tier": 3
  },
  {
    "iata": "AJU",
    "name": "Santa Maria Airport",
    "city": "Aracaju",
    "country": "Brazil",
    "lat": -10.984,
    "lng": -37.0703,
    "tier": 2
  },
  {
    "iata": "ARU",
    "name": "Araçatuba Airport",
    "city": "Aracatuba",
    "country": "Brazil",
    "lat": -21.1413,
    "lng": -50.4247,
    "tier": 3
  },
  {
    "iata": "ARW",
    "name": "Arad International Airport",
    "city": "Arad",
    "country": "Romania",
    "lat": 46.1766,
    "lng": 21.262,
    "tier": 3
  },
  {
    "iata": "AUX",
    "name": "Araguaína Airport",
    "city": "Araguaina",
    "country": "Brazil",
    "lat": -7.2279,
    "lng": -48.2405,
    "tier": 3
  },
  {
    "iata": "RAE",
    "name": "Arar Domestic Airport",
    "city": "Arar",
    "country": "Saudi Arabia",
    "lat": 30.9066,
    "lng": 41.1382,
    "tier": 3
  },
  {
    "iata": "ACR",
    "name": "Araracuara Airport",
    "city": "Araracuara",
    "country": "Colombia",
    "lat": -0.5833,
    "lng": -72.4083,
    "tier": 3
  },
  {
    "iata": "AQA",
    "name": "Araraquara Airport",
    "city": "Araracuara",
    "country": "Brazil",
    "lat": -21.812,
    "lng": -48.133,
    "tier": 3
  },
  {
    "iata": "AUC",
    "name": "Santiago Perez Airport",
    "city": "Arauca",
    "country": "Colombia",
    "lat": 7.0689,
    "lng": -70.7369,
    "tier": 3
  },
  {
    "iata": "AAX",
    "name": "Romeu Zema Airport",
    "city": "Araxa",
    "country": "Brazil",
    "lat": -19.5632,
    "lng": -46.9604,
    "tier": 3
  },
  {
    "iata": "AMH",
    "name": "Arba Minch Airport",
    "city": "Arba Minch",
    "country": "Ethiopia",
    "lat": 6.0394,
    "lng": 37.5905,
    "tier": 3
  },
  {
    "iata": "ACV",
    "name": "California Redwood Coast-Humboldt County Airport",
    "city": "Arcata CA",
    "country": "United States",
    "lat": 40.9781,
    "lng": -124.109,
    "tier": 3
  },
  {
    "iata": "YAB",
    "name": "Old Arctic Bay Airport",
    "city": "Arctic Bay",
    "country": "Canada",
    "lat": 73.0059,
    "lng": -85.0325,
    "tier": 3
  },
  {
    "iata": "ARC",
    "name": "Arctic Village Airport",
    "city": "Arctic Village",
    "country": "United States",
    "lat": 68.1147,
    "lng": -145.579,
    "tier": 3
  },
  {
    "iata": "ADU",
    "name": "Ardabil Airport",
    "city": "Ardabil",
    "country": "Iran",
    "lat": 38.3257,
    "lng": 48.4244,
    "tier": 3
  },
  {
    "iata": "AQP",
    "name": "Rodríguez Ballón International Airport",
    "city": "Arequipa",
    "country": "Peru",
    "lat": -16.3411,
    "lng": -71.5831,
    "tier": 2
  },
  {
    "iata": "PUG",
    "name": "Port Augusta Airport",
    "city": "Argyle",
    "country": "Australia",
    "lat": -32.5069,
    "lng": 137.717,
    "tier": 3
  },
  {
    "iata": "ARI",
    "name": "Chacalluta Airport",
    "city": "Arica",
    "country": "Chile",
    "lat": -18.3485,
    "lng": -70.3387,
    "tier": 3
  },
  {
    "iata": "ARH",
    "name": "Talagi Airport",
    "city": "Arkhangelsk",
    "country": "Russia",
    "lat": 64.6003,
    "lng": 40.7167,
    "tier": 2
  },
  {
    "iata": "AXM",
    "name": "El Eden Airport",
    "city": "Armenia",
    "country": "Colombia",
    "lat": 4.4528,
    "lng": -75.7664,
    "tier": 3
  },
  {
    "iata": "ARM",
    "name": "Armidale Airport",
    "city": "Armidale",
    "country": "Australia",
    "lat": -30.5281,
    "lng": 151.617,
    "tier": 3
  },
  {
    "iata": "ACE",
    "name": "Lanzarote Airport",
    "city": "Arrecife",
    "country": "Spain",
    "lat": 28.9455,
    "lng": -13.6052,
    "tier": 1
  },
  {
    "iata": "ATC",
    "name": "Arthur's Town Airport",
    "city": "Arthur's Town",
    "country": "Bahamas",
    "lat": 24.6294,
    "lng": -75.6738,
    "tier": 3
  },
  {
    "iata": "RUA",
    "name": "Arua Airport",
    "city": "Arua",
    "country": "Uganda",
    "lat": 3.05,
    "lng": 30.917,
    "tier": 3
  },
  {
    "iata": "ARK",
    "name": "Arusha Airport",
    "city": "Arusha",
    "country": "Tanzania",
    "lat": -3.3678,
    "lng": 36.6333,
    "tier": 3
  },
  {
    "iata": "AXR",
    "name": "Arutua Airport",
    "city": "Arutua",
    "country": "French Polynesia",
    "lat": -15.2483,
    "lng": -146.617,
    "tier": 3
  },
  {
    "iata": "AJR",
    "name": "Arvidsjaur Airport",
    "city": "Arvidsjaur",
    "country": "Sweden",
    "lat": 65.5903,
    "lng": 19.2819,
    "tier": 3
  },
  {
    "iata": "YIE",
    "name": "Arxan Yi'ershi Airport",
    "city": "Arxan",
    "country": "China",
    "lat": 47.3106,
    "lng": 119.9117,
    "tier": 3
  },
  {
    "iata": "ABB",
    "name": "Asaba International Airport",
    "city": "Asaba",
    "country": "Nigeria",
    "lat": 6.2042,
    "lng": 6.6653,
    "tier": 3
  },
  {
    "iata": "AKJ",
    "name": "Asahikawa Airport",
    "city": "Asahikawa",
    "country": "Japan",
    "lat": 43.6708,
    "lng": 142.447,
    "tier": 2
  },
  {
    "iata": "AVL",
    "name": "Asheville Regional Airport",
    "city": "Asheville",
    "country": "United States",
    "lat": 35.4362,
    "lng": -82.5418,
    "tier": 2
  },
  {
    "iata": "ASB",
    "name": "Ashgabat International Airport",
    "city": "Ashkhabad",
    "country": "Turkmenistan",
    "lat": 37.9868,
    "lng": 58.361,
    "tier": 2
  },
  {
    "iata": "ASM",
    "name": "Asmara International Airport",
    "city": "Asmara",
    "country": "Eritrea",
    "lat": 15.2919,
    "lng": 38.9107,
    "tier": 2
  },
  {
    "iata": "ASO",
    "name": "Asosa Airport",
    "city": "Asosa",
    "country": "Ethiopia",
    "lat": 10.0185,
    "lng": 34.5863,
    "tier": 3
  },
  {
    "iata": "ASE",
    "name": "Aspen-Pitkin Co/Sardy Field",
    "city": "Aspen",
    "country": "United States",
    "lat": 39.2232,
    "lng": -106.869,
    "tier": 3
  },
  {
    "iata": "ASF",
    "name": "Astrakhan Airport",
    "city": "Astrakhan",
    "country": "Russia",
    "lat": 46.2833,
    "lng": 48.0063,
    "tier": 2
  },
  {
    "iata": "JTY",
    "name": "Astypalaia Airport",
    "city": "Astypalaia",
    "country": "Greece",
    "lat": 36.5799,
    "lng": 26.3758,
    "tier": 3
  },
  {
    "iata": "ASU",
    "name": "Silvio Pettirossi International Airport",
    "city": "Asuncion",
    "country": "Paraguay",
    "lat": -25.24,
    "lng": -57.52,
    "tier": 2
  },
  {
    "iata": "ASW",
    "name": "Aswan International Airport",
    "city": "Aswan",
    "country": "Egypt",
    "lat": 23.9644,
    "lng": 32.82,
    "tier": 3
  },
  {
    "iata": "ATZ",
    "name": "Assiut International Airport",
    "city": "Asyut",
    "country": "Egypt",
    "lat": 27.0465,
    "lng": 31.012,
    "tier": 2
  },
  {
    "iata": "AXK",
    "name": "Ataq Airport",
    "city": "Ataq",
    "country": "Yemen",
    "lat": 14.5513,
    "lng": 46.8262,
    "tier": 3
  },
  {
    "iata": "AHN",
    "name": "Athens Ben Epps Airport",
    "city": "Athens",
    "country": "United States",
    "lat": 33.9486,
    "lng": -83.3263,
    "tier": 3
  },
  {
    "iata": "ATH",
    "name": "Eleftherios Venizelos International Airport",
    "city": "Athens",
    "country": "Greece",
    "lat": 37.9364,
    "lng": 23.9445,
    "tier": 1
  },
  {
    "iata": "AIU",
    "name": "Enua Airport",
    "city": "Atiu Island",
    "country": "Cook Islands",
    "lat": -19.9678,
    "lng": -158.119,
    "tier": 3
  },
  {
    "iata": "AKB",
    "name": "Atka Airport",
    "city": "Atka",
    "country": "United States",
    "lat": 52.2203,
    "lng": -174.206,
    "tier": 3
  },
  {
    "iata": "ATL",
    "name": "Hartsfield Jackson Atlanta International Airport",
    "city": "Atlanta",
    "country": "United States",
    "lat": 33.6367,
    "lng": -84.4281,
    "tier": 1
  },
  {
    "iata": "ACY",
    "name": "Atlantic City International Airport",
    "city": "Atlantic City",
    "country": "United States",
    "lat": 39.4576,
    "lng": -74.5772,
    "tier": 2
  },
  {
    "iata": "ATD",
    "name": "Uru Harbour Airport",
    "city": "Atoifi",
    "country": "Solomon Islands",
    "lat": -8.8733,
    "lng": 161.011,
    "tier": 3
  },
  {
    "iata": "ATK",
    "name": "Atqasuk Edward Burnell Sr Memorial Airport",
    "city": "Atqasuk",
    "country": "United States",
    "lat": 70.4673,
    "lng": -157.436,
    "tier": 3
  },
  {
    "iata": "YAT",
    "name": "Attawapiskat Airport",
    "city": "Attawapiskat",
    "country": "Canada",
    "lat": 52.9275,
    "lng": -82.4319,
    "tier": 3
  },
  {
    "iata": "GUW",
    "name": "Atyrau Airport",
    "city": "Atyrau",
    "country": "Kazakhstan",
    "lat": 47.1219,
    "lng": 51.8214,
    "tier": 2
  },
  {
    "iata": "AKL",
    "name": "Auckland International Airport",
    "city": "Auckland",
    "country": "New Zealand",
    "lat": -37.0081,
    "lng": 174.792,
    "tier": 1
  },
  {
    "iata": "AGB",
    "name": "Augsburg Airport",
    "city": "Augsburg",
    "country": "Germany",
    "lat": 48.4253,
    "lng": 10.9317,
    "tier": 3
  },
  {
    "iata": "AUG",
    "name": "Augusta State Airport",
    "city": "Augusta",
    "country": "United States",
    "lat": 44.3206,
    "lng": -69.7973,
    "tier": 3
  },
  {
    "iata": "YPJ",
    "name": "Aupaluk Airport",
    "city": "Aupaluk",
    "country": "Canada",
    "lat": 59.2967,
    "lng": -69.5997,
    "tier": 3
  },
  {
    "iata": "IXU",
    "name": "Aurangabad Airport",
    "city": "Aurangabad",
    "country": "India",
    "lat": 19.8627,
    "lng": 75.3981,
    "tier": 3
  },
  {
    "iata": "AUR",
    "name": "Aurillac Airport",
    "city": "Aurillac",
    "country": "France",
    "lat": 44.8914,
    "lng": 2.4219,
    "tier": 3
  },
  {
    "iata": "AUU",
    "name": "Aurukun Airport",
    "city": "Aurukun",
    "country": "Australia",
    "lat": -13.3541,
    "lng": 141.7207,
    "tier": 3
  },
  {
    "iata": "AUS",
    "name": "Austin Bergstrom International Airport",
    "city": "Austin",
    "country": "United States",
    "lat": 30.1945,
    "lng": -97.6699,
    "tier": 1
  },
  {
    "iata": "AVV",
    "name": "Avalon Airport",
    "city": "Avalon",
    "country": "Australia",
    "lat": -38.0394,
    "lng": 144.469,
    "tier": 3
  },
  {
    "iata": "RAR",
    "name": "Rarotonga International Airport",
    "city": "Avarua",
    "country": "Cook Islands",
    "lat": -21.2027,
    "lng": -159.806,
    "tier": 2
  },
  {
    "iata": "AVN",
    "name": "Avignon-Caumont Airport",
    "city": "Avignon",
    "country": "France",
    "lat": 43.9073,
    "lng": 4.9018,
    "tier": 3
  },
  {
    "iata": "OVD",
    "name": "Asturias Airport",
    "city": "Aviles",
    "country": "Spain",
    "lat": 43.5636,
    "lng": -6.0346,
    "tier": 2
  },
  {
    "iata": "AXU",
    "name": "Axum Airport",
    "city": "Axum",
    "country": "Ethiopia",
    "lat": 14.1468,
    "lng": 38.7728,
    "tier": 3
  },
  {
    "iata": "AYP",
    "name": "Coronel FAP Alfredo Mendivil Duarte Airport",
    "city": "Ayacucho",
    "country": "Peru",
    "lat": -13.1548,
    "lng": -74.2044,
    "tier": 3
  },
  {
    "iata": "TRI",
    "name": "Tri-Cities Regional TN/VA Airport",
    "city": "BRISTOL",
    "country": "United States",
    "lat": 36.4752,
    "lng": -82.4074,
    "tier": 2
  },
  {
    "iata": "ROR",
    "name": "Babelthuap Airport",
    "city": "Babelthuap",
    "country": "Palau",
    "lat": 7.3673,
    "lng": 134.5442,
    "tier": 2
  },
  {
    "iata": "BXB",
    "name": "Babo Airport",
    "city": "Babo",
    "country": "Indonesia",
    "lat": -2.5322,
    "lng": 133.439,
    "tier": 3
  },
  {
    "iata": "BCD",
    "name": "Bacolod-Silay Airport",
    "city": "Bacolod",
    "country": "Philippines",
    "lat": 10.7764,
    "lng": 123.015,
    "tier": 2
  },
  {
    "iata": "BJZ",
    "name": "Badajoz Airport",
    "city": "Badajoz",
    "country": "Spain",
    "lat": 38.8913,
    "lng": -6.8213,
    "tier": 3
  },
  {
    "iata": "NYU",
    "name": "Bagan Airport",
    "city": "Bagan",
    "country": "Burma",
    "lat": 21.1788,
    "lng": 94.9302,
    "tier": 2
  },
  {
    "iata": "BGW",
    "name": "Baghdad International Airport",
    "city": "Baghdad",
    "country": "Iraq",
    "lat": 33.2625,
    "lng": 44.2346,
    "tier": 2
  },
  {
    "iata": "IXB",
    "name": "Bagdogra Airport",
    "city": "Baghdogra",
    "country": "India",
    "lat": 26.6812,
    "lng": 88.3286,
    "tier": 2
  },
  {
    "iata": "YBG",
    "name": "CFB Bagotville",
    "city": "Bagotville",
    "country": "Canada",
    "lat": 48.3306,
    "lng": -70.9964,
    "tier": 3
  },
  {
    "iata": "BJR",
    "name": "Bahir Dar Airport",
    "city": "Bahar Dar",
    "country": "Ethiopia",
    "lat": 11.6081,
    "lng": 37.3216,
    "tier": 3
  },
  {
    "iata": "BHV",
    "name": "Bahawalpur Airport",
    "city": "Bahawalpur",
    "country": "Pakistan",
    "lat": 29.3481,
    "lng": 71.718,
    "tier": 3
  },
  {
    "iata": "BHI",
    "name": "Comandante Espora Airport",
    "city": "Bahia Blanca",
    "country": "Argentina",
    "lat": -38.725,
    "lng": -62.1693,
    "tier": 3
  },
  {
    "iata": "BSC",
    "name": "José Celestino Mutis Airport",
    "city": "Bahia Solano",
    "country": "Colombia",
    "lat": 6.2029,
    "lng": -77.3947,
    "tier": 3
  },
  {
    "iata": "BAH",
    "name": "Bahrain International Airport",
    "city": "Bahrain",
    "country": "Bahrain",
    "lat": 26.2708,
    "lng": 50.6336,
    "tier": 1
  },
  {
    "iata": "BAY",
    "name": "Tautii Magheraus Airport",
    "city": "Baia Mare",
    "country": "Romania",
    "lat": 47.6584,
    "lng": 23.47,
    "tier": 3
  },
  {
    "iata": "YBC",
    "name": "Baie Comeau Airport",
    "city": "Baie Comeau",
    "country": "Canada",
    "lat": 49.1325,
    "lng": -68.2044,
    "tier": 2
  },
  {
    "iata": "AEB",
    "name": "Baise Youjiang Airport",
    "city": "Baise",
    "country": "China",
    "lat": 23.7206,
    "lng": 106.96,
    "tier": 3
  },
  {
    "iata": "NBS",
    "name": "Changbaishan Airport",
    "city": "Baishan",
    "country": "China",
    "lat": 42.0669,
    "lng": 127.6022,
    "tier": 3
  },
  {
    "iata": "BKM",
    "name": "Bakalalan Airport",
    "city": "Bakalalan",
    "country": "Malaysia",
    "lat": 3.974,
    "lng": 115.618,
    "tier": 3
  },
  {
    "iata": "YBK",
    "name": "Baker Lake Airport",
    "city": "Baker Lake",
    "country": "Canada",
    "lat": 64.2989,
    "lng": -96.0778,
    "tier": 2
  },
  {
    "iata": "BFL",
    "name": "Meadows Field",
    "city": "Bakersfield",
    "country": "United States",
    "lat": 35.4336,
    "lng": -119.057,
    "tier": 2
  },
  {
    "iata": "KSH",
    "name": "Shahid Ashrafi Esfahani Airport",
    "city": "Bakhtaran",
    "country": "Iran",
    "lat": 34.3459,
    "lng": 47.1581,
    "tier": 2
  },
  {
    "iata": "GYD",
    "name": "Heydar Aliyev International Airport",
    "city": "Baku",
    "country": "Azerbaijan",
    "lat": 40.4675,
    "lng": 50.0467,
    "tier": 1
  },
  {
    "iata": "EDO",
    "name": "Balıkesir Körfez Airport",
    "city": "Balikesir Korfez",
    "country": "Turkey",
    "lat": 39.5546,
    "lng": 27.0138,
    "tier": 3
  },
  {
    "iata": "BPN",
    "name": "Sultan Aji Muhamad Sulaiman Airport",
    "city": "Balikpapan",
    "country": "Indonesia",
    "lat": -1.2683,
    "lng": 116.894,
    "tier": 1
  },
  {
    "iata": "BNK",
    "name": "Ballina Byron Gateway Airport",
    "city": "Ballina Byron Bay",
    "country": "Australia",
    "lat": -28.8339,
    "lng": 153.562,
    "tier": 3
  },
  {
    "iata": "BBA",
    "name": "Balmaceda Airport",
    "city": "Balmaceda",
    "country": "Chile",
    "lat": -45.9161,
    "lng": -71.6895,
    "tier": 3
  },
  {
    "iata": "BWI",
    "name": "Baltimore/Washington International Thurgood Marshall Airport",
    "city": "Baltimore",
    "country": "United States",
    "lat": 39.1754,
    "lng": -76.6683,
    "tier": 1
  },
  {
    "iata": "BXR",
    "name": "Bam Airport",
    "city": "Bam",
    "country": "Iran",
    "lat": 29.0842,
    "lng": 58.45,
    "tier": 3
  },
  {
    "iata": "BKO",
    "name": "Modibo Keita International Airport",
    "city": "Bamako",
    "country": "Mali",
    "lat": 12.5335,
    "lng": -7.9499,
    "tier": 1
  },
  {
    "iata": "BTJ",
    "name": "Sultan Iskandar Muda International Airport",
    "city": "Banda Aceh",
    "country": "Indonesia",
    "lat": 5.5229,
    "lng": 95.4206,
    "tier": 3
  },
  {
    "iata": "BND",
    "name": "Bandar Abbas International Airport",
    "city": "Bandar Abbas",
    "country": "Iran",
    "lat": 27.2183,
    "lng": 56.3778,
    "tier": 2
  },
  {
    "iata": "TKG",
    "name": "Radin Inten II (Branti) Airport",
    "city": "Bandar Lampung-Sumatra Island",
    "country": "Indonesia",
    "lat": -5.2406,
    "lng": 105.1756,
    "tier": 3
  },
  {
    "iata": "BDH",
    "name": "Bandar Lengeh Airport",
    "city": "Bandar Lengeh",
    "country": "Iran",
    "lat": 26.532,
    "lng": 54.8248,
    "tier": 3
  },
  {
    "iata": "MRX",
    "name": "Mahshahr Airport",
    "city": "Bandar Mahshahr",
    "country": "Iran",
    "lat": 30.5562,
    "lng": 49.1519,
    "tier": 3
  },
  {
    "iata": "BWN",
    "name": "Brunei International Airport",
    "city": "Bandar Seri Begawan",
    "country": "Brunei",
    "lat": 4.9442,
    "lng": 114.928,
    "tier": 2
  },
  {
    "iata": "BDO",
    "name": "Husein Sastranegara International Airport",
    "city": "Bandung",
    "country": "Indonesia",
    "lat": -6.9006,
    "lng": 107.576,
    "tier": 2
  },
  {
    "iata": "BLR",
    "name": "Kempegowda International Airport",
    "city": "Bangalore",
    "country": "India",
    "lat": 13.1979,
    "lng": 77.7063,
    "tier": 1
  },
  {
    "iata": "BPX",
    "name": "Qamdo Bangda Airport",
    "city": "Bangda",
    "country": "China",
    "lat": 30.5536,
    "lng": 97.1083,
    "tier": 3
  },
  {
    "iata": "BKK",
    "name": "Suvarnabhumi Airport",
    "city": "Bangkok",
    "country": "Thailand",
    "lat": 13.6811,
    "lng": 100.747,
    "tier": 1
  },
  {
    "iata": "DMK",
    "name": "Don Mueang International Airport",
    "city": "Bangkok",
    "country": "Thailand",
    "lat": 13.9126,
    "lng": 100.607,
    "tier": 1
  },
  {
    "iata": "BGR",
    "name": "Bangor International Airport",
    "city": "Bangor",
    "country": "United States",
    "lat": 44.8074,
    "lng": -68.8281,
    "tier": 2
  },
  {
    "iata": "BGF",
    "name": "Bangui M'Poko International Airport",
    "city": "Bangui",
    "country": "Central African Republic",
    "lat": 4.3985,
    "lng": 18.5188,
    "tier": 3
  },
  {
    "iata": "BNX",
    "name": "Banja Luka International Airport",
    "city": "Banja Luka",
    "country": "Bosnia and Herzegovina",
    "lat": 44.9414,
    "lng": 17.2975,
    "tier": 3
  },
  {
    "iata": "BDJ",
    "name": "Syamsudin Noor Airport",
    "city": "Banjarmasin",
    "country": "Indonesia",
    "lat": -3.4424,
    "lng": 114.763,
    "tier": 2
  },
  {
    "iata": "BJL",
    "name": "Banjul International Airport",
    "city": "Banjul",
    "country": "Gambia",
    "lat": 13.338,
    "lng": -16.6522,
    "tier": 2
  },
  {
    "iata": "BSD",
    "name": "Baoshan Yunduan Airport",
    "city": "Baoshan",
    "country": "China",
    "lat": 25.0533,
    "lng": 99.1683,
    "tier": 3
  },
  {
    "iata": "BAV",
    "name": "Baotou Airport",
    "city": "Baotou",
    "country": "China",
    "lat": 40.56,
    "lng": 109.997,
    "tier": 1
  },
  {
    "iata": "BHB",
    "name": "Hancock County-Bar Harbor Airport",
    "city": "Bar Harbor",
    "country": "United States",
    "lat": 44.45,
    "lng": -68.3615,
    "tier": 3
  },
  {
    "iata": "BCI",
    "name": "Barcaldine Airport",
    "city": "Barcaldine",
    "country": "Australia",
    "lat": -23.5653,
    "lng": 145.307,
    "tier": 3
  },
  {
    "iata": "BCN",
    "name": "Barcelona International Airport",
    "city": "Barcelona",
    "country": "Spain",
    "lat": 41.2971,
    "lng": 2.0785,
    "tier": 1
  },
  {
    "iata": "BLA",
    "name": "General José Antonio Anzoategui International Airport",
    "city": "Barcelona",
    "country": "Venezuela",
    "lat": 10.1111,
    "lng": -64.6922,
    "tier": 2
  },
  {
    "iata": "BAZ",
    "name": "Barcelos Airport",
    "city": "Barcelos",
    "country": "Brazil",
    "lat": -0.9813,
    "lng": -62.9196,
    "tier": 3
  },
  {
    "iata": "BDU",
    "name": "Bardufoss Airport",
    "city": "Bardufoss",
    "country": "Norway",
    "lat": 69.0558,
    "lng": 18.5404,
    "tier": 3
  },
  {
    "iata": "BRI",
    "name": "Bari Karol Wojtyła Airport",
    "city": "Bari",
    "country": "Italy",
    "lat": 41.1389,
    "lng": 16.7606,
    "tier": 1
  },
  {
    "iata": "BNS",
    "name": "Barinas Airport",
    "city": "Barinas",
    "country": "Venezuela",
    "lat": 8.615,
    "lng": -70.2142,
    "tier": 3
  },
  {
    "iata": "BBN",
    "name": "Bario Airport",
    "city": "Bario",
    "country": "Malaysia",
    "lat": 3.7339,
    "lng": 115.479,
    "tier": 3
  },
  {
    "iata": "BZL",
    "name": "Barisal Airport",
    "city": "Barisal",
    "country": "Bangladesh",
    "lat": 22.801,
    "lng": 90.3012,
    "tier": 3
  },
  {
    "iata": "BAX",
    "name": "Barnaul Airport",
    "city": "Barnaul",
    "country": "Russia",
    "lat": 53.3638,
    "lng": 83.5385,
    "tier": 3
  },
  {
    "iata": "HYA",
    "name": "Barnstable Municipal Boardman Polando Field",
    "city": "Barnstable",
    "country": "United States",
    "lat": 41.6693,
    "lng": -70.2804,
    "tier": 3
  },
  {
    "iata": "BDQ",
    "name": "Vadodara Airport",
    "city": "Baroda",
    "country": "India",
    "lat": 22.3362,
    "lng": 73.2263,
    "tier": 3
  },
  {
    "iata": "BRM",
    "name": "Barquisimeto International Airport",
    "city": "Barquisimeto",
    "country": "Venezuela",
    "lat": 10.0427,
    "lng": -69.3586,
    "tier": 3
  },
  {
    "iata": "BRR",
    "name": "Barra Airport",
    "city": "Barra",
    "country": "United Kingdom",
    "lat": 57.0228,
    "lng": -7.4431,
    "tier": 3
  },
  {
    "iata": "EJA",
    "name": "Yariguíes Airport",
    "city": "Barrancabermeja",
    "country": "Colombia",
    "lat": 7.0243,
    "lng": -73.8068,
    "tier": 3
  },
  {
    "iata": "BAQ",
    "name": "Ernesto Cortissoz International Airport",
    "city": "Barranquilla",
    "country": "Colombia",
    "lat": 10.8896,
    "lng": -74.7808,
    "tier": 2
  },
  {
    "iata": "BRA",
    "name": "Barreiras Airport",
    "city": "Barreiras",
    "country": "Brazil",
    "lat": -12.0789,
    "lng": -45.009,
    "tier": 2
  },
  {
    "iata": "BRW",
    "name": "Wiley Post Will Rogers Memorial Airport",
    "city": "Barrow",
    "country": "United States",
    "lat": 71.2854,
    "lng": -156.766,
    "tier": 2
  },
  {
    "iata": "BTI",
    "name": "Barter Island LRRS Airport",
    "city": "Barter Island",
    "country": "United States",
    "lat": 70.134,
    "lng": -143.582,
    "tier": 3
  },
  {
    "iata": "BSO",
    "name": "Basco Airport",
    "city": "Basco",
    "country": "Philippines",
    "lat": 20.4513,
    "lng": 121.98,
    "tier": 3
  },
  {
    "iata": "BSR",
    "name": "Basrah International Airport",
    "city": "Basrah",
    "country": "Iraq",
    "lat": 30.5491,
    "lng": 47.6621,
    "tier": 2
  },
  {
    "iata": "SKB",
    "name": "Robert L. Bradshaw International Airport",
    "city": "Basse Terre",
    "country": "Saint Kitts and Nevis",
    "lat": 17.3112,
    "lng": -62.7187,
    "tier": 2
  },
  {
    "iata": "BIA",
    "name": "Bastia-Poretta Airport",
    "city": "Bastia",
    "country": "France",
    "lat": 42.5527,
    "lng": 9.4837,
    "tier": 1
  },
  {
    "iata": "BSG",
    "name": "Bata Airport",
    "city": "Bata",
    "country": "Equatorial Guinea",
    "lat": 1.9055,
    "lng": 9.8057,
    "tier": 3
  },
  {
    "iata": "SUK",
    "name": "Sakkyryr Airport",
    "city": "Batagay-Alyta",
    "country": "Russia",
    "lat": 67.792,
    "lng": 130.394,
    "tier": 3
  },
  {
    "iata": "BTH",
    "name": "Hang Nadim International Airport",
    "city": "Batam",
    "country": "Indonesia",
    "lat": 1.121,
    "lng": 104.119,
    "tier": 1
  },
  {
    "iata": "BHS",
    "name": "Bathurst Airport",
    "city": "Bathurst",
    "country": "Australia",
    "lat": -33.4094,
    "lng": 149.652,
    "tier": 3
  },
  {
    "iata": "ZBF",
    "name": "Bathurst Airport",
    "city": "Bathurst",
    "country": "Canada",
    "lat": 47.6297,
    "lng": -65.7389,
    "tier": 3
  },
  {
    "iata": "BAL",
    "name": "Batman Airport",
    "city": "Batman",
    "country": "Turkey",
    "lat": 37.929,
    "lng": 41.1166,
    "tier": 3
  },
  {
    "iata": "BLJ",
    "name": "Batna Airport",
    "city": "Batna",
    "country": "Algeria",
    "lat": 35.7521,
    "lng": 6.3086,
    "tier": 3
  },
  {
    "iata": "BTR",
    "name": "Baton Rouge Metropolitan Airport",
    "city": "Baton Rouge",
    "country": "United States",
    "lat": 30.5332,
    "lng": -91.1496,
    "tier": 2
  },
  {
    "iata": "BJF",
    "name": "Båtsfjord Airport",
    "city": "Batsfjord",
    "country": "Norway",
    "lat": 70.6005,
    "lng": 29.6914,
    "tier": 3
  },
  {
    "iata": "BTC",
    "name": "Batticaloa Airport",
    "city": "Batticaloa",
    "country": "Sri Lanka",
    "lat": 7.7058,
    "lng": 81.6788,
    "tier": 3
  },
  {
    "iata": "BUS",
    "name": "Batumi International Airport",
    "city": "Batumi",
    "country": "Georgia",
    "lat": 41.6103,
    "lng": 41.5997,
    "tier": 2
  },
  {
    "iata": "BUW",
    "name": "Betoambari Airport",
    "city": "Bau-Bau",
    "country": "Indonesia",
    "lat": -5.4869,
    "lng": 122.569,
    "tier": 3
  },
  {
    "iata": "JTC",
    "name": "Bauru - Arealva Airport",
    "city": "Bauru",
    "country": "Brazil",
    "lat": -22.1669,
    "lng": -49.0503,
    "tier": 3
  },
  {
    "iata": "BYN",
    "name": "Bayankhongor Airport",
    "city": "Bayankhongor",
    "country": "Mongolia",
    "lat": 46.1633,
    "lng": 100.704,
    "tier": 3
  },
  {
    "iata": "RLK",
    "name": "Bayannur Tianjitai Airport",
    "city": "Bayannur",
    "country": "China",
    "lat": 40.926,
    "lng": 107.7428,
    "tier": 3
  },
  {
    "iata": "XBE",
    "name": "Bearskin Lake Airport",
    "city": "Bearskin Lake",
    "country": "Canada",
    "lat": 53.9656,
    "lng": -91.0272,
    "tier": 3
  },
  {
    "iata": "BPT",
    "name": "Southeast Texas Regional Airport",
    "city": "Beaumont",
    "country": "United States",
    "lat": 29.9508,
    "lng": -94.0207,
    "tier": 3
  },
  {
    "iata": "BVA",
    "name": "Paris Beauvais Tillé Airport",
    "city": "Beauvais",
    "country": "France",
    "lat": 49.4544,
    "lng": 2.1128,
    "tier": 1
  },
  {
    "iata": "WBQ",
    "name": "Beaver Airport",
    "city": "Beaver",
    "country": "United States",
    "lat": 66.3622,
    "lng": -147.407,
    "tier": 3
  },
  {
    "iata": "BKW",
    "name": "Raleigh County Memorial Airport",
    "city": "Beckley",
    "country": "United States",
    "lat": 37.7873,
    "lng": -81.1242,
    "tier": 3
  },
  {
    "iata": "BEU",
    "name": "Bedourie Airport",
    "city": "Bedourie",
    "country": "Australia",
    "lat": -24.3461,
    "lng": 139.46,
    "tier": 3
  },
  {
    "iata": "BHY",
    "name": "Beihai Airport",
    "city": "Beihai",
    "country": "China",
    "lat": 21.5394,
    "lng": 109.294,
    "tier": 2
  },
  {
    "iata": "NAY",
    "name": "Beijing Nanyuan Airport",
    "city": "Beijing",
    "country": "China",
    "lat": 39.7828,
    "lng": 116.388,
    "tier": 1
  },
  {
    "iata": "PEK",
    "name": "Beijing Capital International Airport",
    "city": "Beijing",
    "country": "China",
    "lat": 40.0801,
    "lng": 116.585,
    "tier": 1
  },
  {
    "iata": "BEW",
    "name": "Beira Airport",
    "city": "Beira",
    "country": "Mozambique",
    "lat": -19.7964,
    "lng": 34.9076,
    "tier": 2
  },
  {
    "iata": "BEY",
    "name": "Beirut Rafic Hariri International Airport",
    "city": "Beirut",
    "country": "Lebanon",
    "lat": 33.8209,
    "lng": 35.4884,
    "tier": 1
  },
  {
    "iata": "BJA",
    "name": "Soummam Airport",
    "city": "Bejaja",
    "country": "Algeria",
    "lat": 36.712,
    "lng": 5.0699,
    "tier": 2
  },
  {
    "iata": "BEL",
    "name": "Val de Cans/Júlio Cezar Ribeiro International Airport",
    "city": "Belem",
    "country": "Brazil",
    "lat": -1.3793,
    "lng": -48.4763,
    "tier": 1
  },
  {
    "iata": "BFS",
    "name": "Belfast International Airport",
    "city": "Belfast",
    "country": "United Kingdom",
    "lat": 54.6575,
    "lng": -6.2158,
    "tier": 1
  },
  {
    "iata": "BHD",
    "name": "George Best Belfast City Airport",
    "city": "Belfast",
    "country": "United Kingdom",
    "lat": 54.6181,
    "lng": -5.8725,
    "tier": 2
  },
  {
    "iata": "IXG",
    "name": "Belgaum Airport",
    "city": "Belgaum",
    "country": "India",
    "lat": 15.8593,
    "lng": 74.6183,
    "tier": 3
  },
  {
    "iata": "EGO",
    "name": "Belgorod International Airport",
    "city": "Belgorod",
    "country": "Russia",
    "lat": 50.6438,
    "lng": 36.5901,
    "tier": 2
  },
  {
    "iata": "BEG",
    "name": "Belgrade Nikola Tesla Airport",
    "city": "Belgrade",
    "country": "Serbia",
    "lat": 44.8184,
    "lng": 20.3091,
    "tier": 1
  },
  {
    "iata": "BZE",
    "name": "Philip S. W. Goldson International Airport",
    "city": "Belize City",
    "country": "Belize",
    "lat": 17.5391,
    "lng": -88.3082,
    "tier": 2
  },
  {
    "iata": "QBC",
    "name": "Bella Coola Airport",
    "city": "Bella Coola",
    "country": "Canada",
    "lat": 52.3875,
    "lng": -126.596,
    "tier": 3
  },
  {
    "iata": "BLV",
    "name": "Scott AFB/Midamerica Airport",
    "city": "Belleville",
    "country": "United States",
    "lat": 38.5452,
    "lng": -89.8352,
    "tier": 3
  },
  {
    "iata": "BLI",
    "name": "Bellingham International Airport",
    "city": "Bellingham",
    "country": "United States",
    "lat": 48.7928,
    "lng": -122.538,
    "tier": 2
  },
  {
    "iata": "CNF",
    "name": "Tancredo Neves International Airport",
    "city": "Belo Horizonte",
    "country": "Brazil",
    "lat": -19.6244,
    "lng": -43.9719,
    "tier": 1
  },
  {
    "iata": "PLU",
    "name": "Pampulha - Carlos Drummond de Andrade Airport",
    "city": "Belo Horizonte",
    "country": "Brazil",
    "lat": -19.8512,
    "lng": -43.9506,
    "tier": 2
  },
  {
    "iata": "EYK",
    "name": "Beloyarskiy Airport",
    "city": "Beloyarsky",
    "country": "Russia",
    "lat": 63.6869,
    "lng": 66.6986,
    "tier": 3
  },
  {
    "iata": "BJI",
    "name": "Bemidji Regional Airport",
    "city": "Bemidji",
    "country": "United States",
    "lat": 47.5094,
    "lng": -94.9337,
    "tier": 3
  },
  {
    "iata": "BEB",
    "name": "Benbecula Airport",
    "city": "Benbecula",
    "country": "United Kingdom",
    "lat": 57.4811,
    "lng": -7.3628,
    "tier": 3
  },
  {
    "iata": "BEN",
    "name": "Benina International Airport",
    "city": "Benghazi",
    "country": "Libya",
    "lat": 32.0968,
    "lng": 20.2695,
    "tier": 2
  },
  {
    "iata": "BKS",
    "name": "Fatmawati Soekarno Airport",
    "city": "Bengkulu",
    "country": "Indonesia",
    "lat": -3.8637,
    "lng": 102.339,
    "tier": 3
  },
  {
    "iata": "BNC",
    "name": "Beni Airport",
    "city": "Beni",
    "country": "Congo (Kinshasa)",
    "lat": 0.575,
    "lng": 29.4739,
    "tier": 3
  },
  {
    "iata": "BNI",
    "name": "Benin Airport",
    "city": "Benin",
    "country": "Nigeria",
    "lat": 6.317,
    "lng": 5.5995,
    "tier": 3
  },
  {
    "iata": "XNA",
    "name": "Northwest Arkansas Regional Airport",
    "city": "Bentonville",
    "country": "United States",
    "lat": 36.2819,
    "lng": -94.3068,
    "tier": 2
  },
  {
    "iata": "BBO",
    "name": "Berbera Airport",
    "city": "Berbera",
    "country": "Somalia",
    "lat": 10.3892,
    "lng": 44.9411,
    "tier": 2
  },
  {
    "iata": "BGY",
    "name": "Il Caravaggio International Airport",
    "city": "Bergamo",
    "country": "Italy",
    "lat": 45.6739,
    "lng": 9.7042,
    "tier": 1
  },
  {
    "iata": "BGO",
    "name": "Bergen Airport Flesland",
    "city": "Bergen",
    "country": "Norway",
    "lat": 60.2934,
    "lng": 5.2181,
    "tier": 1
  },
  {
    "iata": "EGC",
    "name": "Bergerac-Roumanière Airport",
    "city": "Bergerac",
    "country": "France",
    "lat": 44.8253,
    "lng": 0.5186,
    "tier": 2
  },
  {
    "iata": "BVG",
    "name": "Berlevåg Airport",
    "city": "Berlevag",
    "country": "Norway",
    "lat": 70.8714,
    "lng": 29.0342,
    "tier": 3
  },
  {
    "iata": "SXF",
    "name": "Berlin-Schönefeld Airport",
    "city": "Berlin",
    "country": "Germany",
    "lat": 52.38,
    "lng": 13.5225,
    "tier": 1
  },
  {
    "iata": "TXL",
    "name": "Berlin-Tegel Airport",
    "city": "Berlin",
    "country": "Germany",
    "lat": 52.5597,
    "lng": 13.2877,
    "tier": 1
  },
  {
    "iata": "BDA",
    "name": "L.F. Wade International International Airport",
    "city": "Bermuda",
    "country": "Bermuda",
    "lat": 32.364,
    "lng": -64.6787,
    "tier": 2
  },
  {
    "iata": "BRN",
    "name": "Bern Belp Airport",
    "city": "Bern",
    "country": "Switzerland",
    "lat": 46.9141,
    "lng": 7.4971,
    "tier": 2
  },
  {
    "iata": "OGZ",
    "name": "Beslan Airport",
    "city": "Beslan",
    "country": "Russia",
    "lat": 43.2051,
    "lng": 44.6066,
    "tier": 3
  },
  {
    "iata": "BET",
    "name": "Bethel Airport",
    "city": "Bethel",
    "country": "United States",
    "lat": 60.7798,
    "lng": -161.838,
    "tier": 2
  },
  {
    "iata": "BTT",
    "name": "Bettles Airport",
    "city": "Bettles",
    "country": "United States",
    "lat": 66.9139,
    "lng": -151.529,
    "tier": 3
  },
  {
    "iata": "BZR",
    "name": "Béziers-Vias Airport",
    "city": "Beziers",
    "country": "France",
    "lat": 43.3235,
    "lng": 3.3539,
    "tier": 2
  },
  {
    "iata": "BWA",
    "name": "Gautam Buddha Airport",
    "city": "Bhairawa",
    "country": "Nepal",
    "lat": 27.5057,
    "lng": 83.4163,
    "tier": 3
  },
  {
    "iata": "BHR",
    "name": "Bharatpur Airport",
    "city": "Bharatpur",
    "country": "Nepal",
    "lat": 27.6781,
    "lng": 84.4294,
    "tier": 3
  },
  {
    "iata": "BHU",
    "name": "Bhavnagar Airport",
    "city": "Bhaunagar",
    "country": "India",
    "lat": 21.7522,
    "lng": 72.1852,
    "tier": 3
  },
  {
    "iata": "BHO",
    "name": "Raja Bhoj International Airport",
    "city": "Bhopal",
    "country": "India",
    "lat": 23.2875,
    "lng": 77.3374,
    "tier": 2
  },
  {
    "iata": "BBI",
    "name": "Biju Patnaik Airport",
    "city": "Bhubaneswar",
    "country": "India",
    "lat": 20.2444,
    "lng": 85.8178,
    "tier": 2
  },
  {
    "iata": "BHJ",
    "name": "Bhuj Airport",
    "city": "Bhuj",
    "country": "India",
    "lat": 23.2878,
    "lng": 69.6702,
    "tier": 3
  },
  {
    "iata": "BIK",
    "name": "Frans Kaisiepo Airport",
    "city": "Biak",
    "country": "Indonesia",
    "lat": -1.19,
    "lng": 136.108,
    "tier": 3
  },
  {
    "iata": "BIQ",
    "name": "Biarritz-Anglet-Bayonne Airport",
    "city": "Biarritz-bayonne",
    "country": "France",
    "lat": 43.4683,
    "lng": -1.5311,
    "tier": 2
  },
  {
    "iata": "YTL",
    "name": "Big Trout Lake Airport",
    "city": "Big Trout Lake",
    "country": "Canada",
    "lat": 53.8178,
    "lng": -89.8969,
    "tier": 3
  },
  {
    "iata": "BFJ",
    "name": "Bijie Feixiong Airport",
    "city": "Bijie",
    "country": "China",
    "lat": 27.2671,
    "lng": 105.4721,
    "tier": 2
  },
  {
    "iata": "BIO",
    "name": "Bilbao Airport",
    "city": "Bilbao",
    "country": "Spain",
    "lat": 43.3011,
    "lng": -2.9106,
    "tier": 1
  },
  {
    "iata": "BIL",
    "name": "Billings Logan International Airport",
    "city": "Billings",
    "country": "United States",
    "lat": 45.8077,
    "lng": -108.543,
    "tier": 2
  },
  {
    "iata": "BLL",
    "name": "Billund Airport",
    "city": "Billund",
    "country": "Denmark",
    "lat": 55.7403,
    "lng": 9.1518,
    "tier": 1
  },
  {
    "iata": "BMU",
    "name": "Muhammad Salahuddin Airport",
    "city": "Bima",
    "country": "Indonesia",
    "lat": -8.5396,
    "lng": 118.687,
    "tier": 3
  },
  {
    "iata": "BGM",
    "name": "Greater Binghamton/Edwin A Link field",
    "city": "Binghamton",
    "country": "United States",
    "lat": 42.2087,
    "lng": -75.9798,
    "tier": 3
  },
  {
    "iata": "BGG",
    "name": "Bingöl Çeltiksuyu Airport",
    "city": "Bingol",
    "country": "Turkey",
    "lat": 38.8593,
    "lng": 40.596,
    "tier": 3
  },
  {
    "iata": "BTU",
    "name": "Bintulu Airport",
    "city": "Bintulu",
    "country": "Malaysia",
    "lat": 3.1239,
    "lng": 113.02,
    "tier": 2
  },
  {
    "iata": "BIR",
    "name": "Biratnagar Airport",
    "city": "Biratnagar",
    "country": "Nepal",
    "lat": 26.4815,
    "lng": 87.264,
    "tier": 3
  },
  {
    "iata": "BVI",
    "name": "Birdsville Airport",
    "city": "Birdsville",
    "country": "Australia",
    "lat": -25.8975,
    "lng": 139.348,
    "tier": 3
  },
  {
    "iata": "XBJ",
    "name": "Birjand Airport",
    "city": "Birjand",
    "country": "Iran",
    "lat": 32.8981,
    "lng": 59.2661,
    "tier": 3
  },
  {
    "iata": "BHM",
    "name": "Birmingham-Shuttlesworth International Airport",
    "city": "Birmingham",
    "country": "United States",
    "lat": 33.5629,
    "lng": -86.7535,
    "tier": 1
  },
  {
    "iata": "BHX",
    "name": "Birmingham International Airport",
    "city": "Birmingham",
    "country": "United Kingdom",
    "lat": 52.4539,
    "lng": -1.748,
    "tier": 1
  },
  {
    "iata": "BHH",
    "name": "Bisha Airport",
    "city": "Bisha",
    "country": "Saudi Arabia",
    "lat": 19.9844,
    "lng": 42.6209,
    "tier": 3
  },
  {
    "iata": "FRU",
    "name": "Manas International Airport",
    "city": "Bishkek",
    "country": "Kyrgyzstan",
    "lat": 43.0613,
    "lng": 74.4776,
    "tier": 1
  },
  {
    "iata": "BSK",
    "name": "Biskra Airport",
    "city": "Biskra",
    "country": "Algeria",
    "lat": 34.7933,
    "lng": 5.7382,
    "tier": 3
  },
  {
    "iata": "BIS",
    "name": "Bismarck Municipal Airport",
    "city": "Bismarck",
    "country": "United States",
    "lat": 46.7727,
    "lng": -100.746,
    "tier": 2
  },
  {
    "iata": "OXB",
    "name": "Osvaldo Vieira International Airport",
    "city": "Bissau",
    "country": "Guinea-Bissau",
    "lat": 11.8948,
    "lng": -15.6537,
    "tier": 2
  },
  {
    "iata": "BKQ",
    "name": "Blackall Airport",
    "city": "Blackall",
    "country": "Australia",
    "lat": -24.4278,
    "lng": 145.429,
    "tier": 3
  },
  {
    "iata": "BLK",
    "name": "Blackpool International Airport",
    "city": "Blackpool",
    "country": "United Kingdom",
    "lat": 53.7717,
    "lng": -3.0286,
    "tier": 2
  },
  {
    "iata": "BQS",
    "name": "Ignatyevo Airport",
    "city": "Blagoveschensk",
    "country": "Russia",
    "lat": 50.4254,
    "lng": 127.412,
    "tier": 3
  },
  {
    "iata": "BLZ",
    "name": "Chileka International Airport",
    "city": "Blantyre",
    "country": "Malawi",
    "lat": -15.6791,
    "lng": 34.974,
    "tier": 3
  },
  {
    "iata": "BFN",
    "name": "Bram Fischer International Airport",
    "city": "Bloemfontein",
    "country": "South Africa",
    "lat": -29.0927,
    "lng": 26.3024,
    "tier": 3
  },
  {
    "iata": "BMI",
    "name": "Central Illinois Regional Airport at Bloomington-Normal",
    "city": "Bloomington",
    "country": "United States",
    "lat": 40.4771,
    "lng": -88.9159,
    "tier": 2
  },
  {
    "iata": "BVB",
    "name": "Atlas Brasil Cantanhede Airport",
    "city": "Boa Vista",
    "country": "Brazil",
    "lat": 2.8414,
    "lng": -60.6922,
    "tier": 3
  },
  {
    "iata": "BVC",
    "name": "Rabil Airport",
    "city": "Boa Vista",
    "country": "Cape Verde",
    "lat": 16.1365,
    "lng": -22.8889,
    "tier": 2
  },
  {
    "iata": "BOY",
    "name": "Bobo Dioulasso Airport",
    "city": "Bobo-dioulasso",
    "country": "Burkina Faso",
    "lat": 11.1601,
    "lng": -4.331,
    "tier": 3
  },
  {
    "iata": "BOC",
    "name": "Bocas Del Toro International Airport",
    "city": "Bocas Del Toro",
    "country": "Panama",
    "lat": 9.3408,
    "lng": -82.2508,
    "tier": 3
  },
  {
    "iata": "ODO",
    "name": "Bodaybo Airport",
    "city": "Bodaibo",
    "country": "Russia",
    "lat": 57.8661,
    "lng": 114.243,
    "tier": 3
  },
  {
    "iata": "BOO",
    "name": "Bodø Airport",
    "city": "Bodo",
    "country": "Norway",
    "lat": 67.2692,
    "lng": 14.3653,
    "tier": 2
  },
  {
    "iata": "BJV",
    "name": "Milas Bodrum International Airport",
    "city": "Bodrum",
    "country": "Turkey",
    "lat": 37.2506,
    "lng": 27.6643,
    "tier": 1
  },
  {
    "iata": "BNB",
    "name": "Boende Airport",
    "city": "Boende",
    "country": "Congo (Kinshasa)",
    "lat": -0.217,
    "lng": 20.85,
    "tier": 3
  },
  {
    "iata": "BOG",
    "name": "El Dorado International Airport",
    "city": "Bogota",
    "country": "Colombia",
    "lat": 4.7016,
    "lng": -74.1469,
    "tier": 1
  },
  {
    "iata": "BYO",
    "name": "Bonito Airport",
    "city": "Bointo",
    "country": "Brazil",
    "lat": -21.2473,
    "lng": -56.4525,
    "tier": 3
  },
  {
    "iata": "BOI",
    "name": "Boise Air Terminal/Gowen Field",
    "city": "Boise",
    "country": "United States",
    "lat": 43.5644,
    "lng": -116.223,
    "tier": 2
  },
  {
    "iata": "BJB",
    "name": "Bojnord Airport",
    "city": "Bojnourd",
    "country": "Iran",
    "lat": 37.493,
    "lng": 57.3082,
    "tier": 3
  },
  {
    "iata": "BPL",
    "name": "Alashankou Bole (Bortala) airport",
    "city": "Bole",
    "country": "China",
    "lat": 44.895,
    "lng": 82.3,
    "tier": 3
  },
  {
    "iata": "BLQ",
    "name": "Bologna Guglielmo Marconi Airport",
    "city": "Bologna",
    "country": "Italy",
    "lat": 44.5354,
    "lng": 11.2887,
    "tier": 1
  },
  {
    "iata": "BZO",
    "name": "Bolzano Airport",
    "city": "Bolzano",
    "country": "Italy",
    "lat": 46.4602,
    "lng": 11.3264,
    "tier": 3
  },
  {
    "iata": "LAZ",
    "name": "Bom Jesus da Lapa Airport",
    "city": "Bom Jesus Da Lapa",
    "country": "Brazil",
    "lat": -13.2621,
    "lng": -43.4081,
    "tier": 3
  },
  {
    "iata": "YVB",
    "name": "Bonaventure Airport",
    "city": "Bonaventure",
    "country": "Canada",
    "lat": 48.0711,
    "lng": -65.4603,
    "tier": 3
  },
  {
    "iata": "TGP",
    "name": "Podkamennaya Tunguska Airport",
    "city": "Bor",
    "country": "Russia",
    "lat": 61.5897,
    "lng": 89.994,
    "tier": 3
  },
  {
    "iata": "BOB",
    "name": "Bora Bora Airport",
    "city": "Bora Bora",
    "country": "French Polynesia",
    "lat": -16.4444,
    "lng": -151.751,
    "tier": 2
  },
  {
    "iata": "BOD",
    "name": "Bordeaux-Mérignac Airport",
    "city": "Bordeaux",
    "country": "France",
    "lat": 44.8283,
    "lng": -0.7156,
    "tier": 1
  },
  {
    "iata": "BMW",
    "name": "Bordj Badji Mokhtar Airport",
    "city": "Bordj Badji Mokhtar",
    "country": "Algeria",
    "lat": 21.375,
    "lng": 0.9239,
    "tier": 3
  },
  {
    "iata": "BLE",
    "name": "Borlange Airport",
    "city": "Borlange",
    "country": "Sweden",
    "lat": 60.422,
    "lng": 15.5152,
    "tier": 3
  },
  {
    "iata": "BSA",
    "name": "Bosaso Airport",
    "city": "Bosaso",
    "country": "Somalia",
    "lat": 11.2753,
    "lng": 49.1494,
    "tier": 3
  },
  {
    "iata": "BOS",
    "name": "General Edward Lawrence Logan International Airport",
    "city": "Boston",
    "country": "United States",
    "lat": 42.3643,
    "lng": -71.0052,
    "tier": 1
  },
  {
    "iata": "BQL",
    "name": "Boulia Airport",
    "city": "Boulia",
    "country": "Australia",
    "lat": -22.9133,
    "lng": 139.9,
    "tier": 3
  },
  {
    "iata": "BOJ",
    "name": "Burgas Airport",
    "city": "Bourgas",
    "country": "Bulgaria",
    "lat": 42.5696,
    "lng": 27.5152,
    "tier": 2
  },
  {
    "iata": "BOH",
    "name": "Bournemouth Airport",
    "city": "Bournemouth",
    "country": "United Kingdom",
    "lat": 50.78,
    "lng": -1.8425,
    "tier": 2
  },
  {
    "iata": "BZN",
    "name": "Gallatin Field",
    "city": "Bozeman",
    "country": "United States",
    "lat": 45.7775,
    "lng": -111.153,
    "tier": 2
  },
  {
    "iata": "BWK",
    "name": "Bol Airport",
    "city": "Brac",
    "country": "Croatia",
    "lat": 43.2857,
    "lng": 16.6797,
    "tier": 3
  },
  {
    "iata": "BFD",
    "name": "Bradford Regional Airport",
    "city": "Bradford",
    "country": "United States",
    "lat": 41.8031,
    "lng": -78.6401,
    "tier": 3
  },
  {
    "iata": "BRD",
    "name": "Brainerd Lakes Regional Airport",
    "city": "Brainerd",
    "country": "United States",
    "lat": 46.3983,
    "lng": -94.1381,
    "tier": 3
  },
  {
    "iata": "YBR",
    "name": "Brandon Municipal Airport",
    "city": "Brandon",
    "country": "Canada",
    "lat": 49.91,
    "lng": -99.9519,
    "tier": 3
  },
  {
    "iata": "BKG",
    "name": "Branson Airport",
    "city": "Branson",
    "country": "United States",
    "lat": 36.5321,
    "lng": -93.2005,
    "tier": 3
  },
  {
    "iata": "BSB",
    "name": "Presidente Juscelino Kubistschek International Airport",
    "city": "Brasilia",
    "country": "Brazil",
    "lat": -15.8692,
    "lng": -47.9208,
    "tier": 1
  },
  {
    "iata": "BTS",
    "name": "M. R. Štefánik Airport",
    "city": "Bratislava",
    "country": "Slovakia",
    "lat": 48.1702,
    "lng": 17.2127,
    "tier": 2
  },
  {
    "iata": "BTK",
    "name": "Bratsk Airport",
    "city": "Bratsk",
    "country": "Russia",
    "lat": 56.3706,
    "lng": 101.698,
    "tier": 3
  },
  {
    "iata": "BZV",
    "name": "Maya-Maya Airport",
    "city": "Brazzaville",
    "country": "Congo (Brazzaville)",
    "lat": -4.2517,
    "lng": 15.253,
    "tier": 1
  },
  {
    "iata": "BRE",
    "name": "Bremen Airport",
    "city": "Bremen",
    "country": "Germany",
    "lat": 53.0475,
    "lng": 8.7867,
    "tier": 1
  },
  {
    "iata": "BES",
    "name": "Brest Bretagne Airport",
    "city": "Brest",
    "country": "France",
    "lat": 48.4479,
    "lng": -4.4185,
    "tier": 2
  },
  {
    "iata": "BVS",
    "name": "Breves Airport",
    "city": "Breves",
    "country": "Brazil",
    "lat": -1.6365,
    "lng": -50.4436,
    "tier": 3
  },
  {
    "iata": "KTS",
    "name": "Brevig Mission Airport",
    "city": "Brevig Mission",
    "country": "United States",
    "lat": 65.3313,
    "lng": -166.466,
    "tier": 3
  },
  {
    "iata": "BGI",
    "name": "Sir Grantley Adams International Airport",
    "city": "Bridgetown",
    "country": "Barbados",
    "lat": 13.0746,
    "lng": -59.4925,
    "tier": 2
  },
  {
    "iata": "BDS",
    "name": "Brindisi – Salento Airport",
    "city": "Brindisi",
    "country": "Italy",
    "lat": 40.6576,
    "lng": 17.947,
    "tier": 2
  },
  {
    "iata": "BNE",
    "name": "Brisbane International Airport",
    "city": "Brisbane",
    "country": "Australia",
    "lat": -27.3842,
    "lng": 153.117,
    "tier": 1
  },
  {
    "iata": "BRS",
    "name": "Bristol Airport",
    "city": "Bristol",
    "country": "United Kingdom",
    "lat": 51.3827,
    "lng": -2.7191,
    "tier": 1
  },
  {
    "iata": "BVE",
    "name": "Brive Souillac Airport",
    "city": "Brive",
    "country": "France",
    "lat": 45.0397,
    "lng": 1.4856,
    "tier": 3
  },
  {
    "iata": "BRQ",
    "name": "Brno-Tuřany Airport",
    "city": "Brno",
    "country": "Czech Republic",
    "lat": 49.1513,
    "lng": 16.6944,
    "tier": 3
  },
  {
    "iata": "BHQ",
    "name": "Broken Hill Airport",
    "city": "Broken Hill",
    "country": "Australia",
    "lat": -32.0014,
    "lng": 141.472,
    "tier": 3
  },
  {
    "iata": "BNN",
    "name": "Brønnøysund Airport",
    "city": "Bronnoysund",
    "country": "Norway",
    "lat": 65.4611,
    "lng": 12.2175,
    "tier": 3
  },
  {
    "iata": "BME",
    "name": "Broome International Airport",
    "city": "Broome",
    "country": "Australia",
    "lat": -17.9447,
    "lng": 122.232,
    "tier": 2
  },
  {
    "iata": "YVM",
    "name": "Qikiqtarjuaq Airport",
    "city": "Broughton Island",
    "country": "Canada",
    "lat": 67.5458,
    "lng": -64.0314,
    "tier": 3
  },
  {
    "iata": "BRO",
    "name": "Brownsville South Padre Island International Airport",
    "city": "Brownsville",
    "country": "United States",
    "lat": 25.9068,
    "lng": -97.4259,
    "tier": 3
  },
  {
    "iata": "BQK",
    "name": "Brunswick Golden Isles Airport",
    "city": "Brunswick",
    "country": "United States",
    "lat": 31.2588,
    "lng": -81.4665,
    "tier": 3
  },
  {
    "iata": "BRU",
    "name": "Brussels Airport",
    "city": "Brussels",
    "country": "Belgium",
    "lat": 50.9014,
    "lng": 4.4844,
    "tier": 1
  },
  {
    "iata": "BQB",
    "name": "Busselton Regional Airport",
    "city": "Brusselton",
    "country": "Australia",
    "lat": -33.6884,
    "lng": 115.4016,
    "tier": 3
  },
  {
    "iata": "BGA",
    "name": "Palonegro Airport",
    "city": "Bucaramanga",
    "country": "Colombia",
    "lat": 7.1265,
    "lng": -73.1848,
    "tier": 3
  },
  {
    "iata": "OTP",
    "name": "Henri Coandă International Airport",
    "city": "Bucharest",
    "country": "Romania",
    "lat": 44.5711,
    "lng": 26.085,
    "tier": 1
  },
  {
    "iata": "BKC",
    "name": "Buckland Airport",
    "city": "Buckland",
    "country": "United States",
    "lat": 65.9816,
    "lng": -161.149,
    "tier": 3
  },
  {
    "iata": "BUD",
    "name": "Budapest Liszt Ferenc International Airport",
    "city": "Budapest",
    "country": "Hungary",
    "lat": 47.4298,
    "lng": 19.2611,
    "tier": 1
  },
  {
    "iata": "BUN",
    "name": "Gerardo Tobar López Airport",
    "city": "Buenaventura",
    "country": "Colombia",
    "lat": 3.8196,
    "lng": -76.9898,
    "tier": 3
  },
  {
    "iata": "AEP",
    "name": "Jorge Newbery Airpark",
    "city": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.5592,
    "lng": -58.4156,
    "tier": 1
  },
  {
    "iata": "EZE",
    "name": "Ministro Pistarini International Airport",
    "city": "Buenos Aires",
    "country": "Argentina",
    "lat": -34.8222,
    "lng": -58.5358,
    "tier": 1
  },
  {
    "iata": "BUF",
    "name": "Buffalo Niagara International Airport",
    "city": "Buffalo",
    "country": "United States",
    "lat": 42.9405,
    "lng": -78.7322,
    "tier": 1
  },
  {
    "iata": "UUA",
    "name": "Bugulma Airport",
    "city": "Bugulma",
    "country": "Russia",
    "lat": 54.64,
    "lng": 52.8017,
    "tier": 3
  },
  {
    "iata": "BJM",
    "name": "Bujumbura International Airport",
    "city": "Bujumbura",
    "country": "Burundi",
    "lat": -3.324,
    "lng": 29.3185,
    "tier": 2
  },
  {
    "iata": "BUA",
    "name": "Buka Airport",
    "city": "Buka Island",
    "country": "Papua New Guinea",
    "lat": -5.4223,
    "lng": 154.673,
    "tier": 3
  },
  {
    "iata": "BKY",
    "name": "Bukavu Kavumu Airport",
    "city": "Bukavu/kavumu",
    "country": "Congo (Kinshasa)",
    "lat": -2.309,
    "lng": 28.8088,
    "tier": 3
  },
  {
    "iata": "BHK",
    "name": "Bukhara Airport",
    "city": "Bukhara",
    "country": "Uzbekistan",
    "lat": 39.775,
    "lng": 64.4833,
    "tier": 2
  },
  {
    "iata": "BKZ",
    "name": "Bukoba Airport",
    "city": "Bukoba",
    "country": "Tanzania",
    "lat": -1.332,
    "lng": 31.8212,
    "tier": 3
  },
  {
    "iata": "BUQ",
    "name": "Joshua Mqabuko Nkomo International Airport",
    "city": "Bulawayo",
    "country": "Zimbabwe",
    "lat": -20.0174,
    "lng": 28.6179,
    "tier": 3
  },
  {
    "iata": "BUL",
    "name": "Bulolo Airport",
    "city": "Bulolo",
    "country": "Papua New Guinea",
    "lat": -7.2163,
    "lng": 146.6495,
    "tier": 3
  },
  {
    "iata": "BDB",
    "name": "Bundaberg Airport",
    "city": "Bundaberg",
    "country": "Australia",
    "lat": -24.9039,
    "lng": 152.319,
    "tier": 3
  },
  {
    "iata": "BUX",
    "name": "Bunia Airport",
    "city": "Bunia",
    "country": "Congo (Kinshasa)",
    "lat": 1.5657,
    "lng": 30.2208,
    "tier": 3
  },
  {
    "iata": "BMV",
    "name": "Buon Ma Thuot Airport",
    "city": "Buonmethuot",
    "country": "Vietnam",
    "lat": 12.6683,
    "lng": 108.12,
    "tier": 2
  },
  {
    "iata": "BUR",
    "name": "Bob Hope Airport",
    "city": "Burbank",
    "country": "United States",
    "lat": 34.2007,
    "lng": -118.359,
    "tier": 2
  },
  {
    "iata": "RGS",
    "name": "Burgos Airport",
    "city": "Burgos",
    "country": "Spain",
    "lat": 42.3576,
    "lng": -3.6208,
    "tier": 3
  },
  {
    "iata": "BFV",
    "name": "Buri Ram Airport",
    "city": "Buri Ram",
    "country": "Thailand",
    "lat": 15.2295,
    "lng": 103.253,
    "tier": 3
  },
  {
    "iata": "BUC",
    "name": "Burketown Airport",
    "city": "Burketown",
    "country": "Australia",
    "lat": -17.7486,
    "lng": 139.534,
    "tier": 3
  },
  {
    "iata": "BRL",
    "name": "Southeast Iowa Regional Airport",
    "city": "Burlington",
    "country": "United States",
    "lat": 40.7832,
    "lng": -91.1255,
    "tier": 3
  },
  {
    "iata": "BTV",
    "name": "Burlington International Airport",
    "city": "Burlington",
    "country": "United States",
    "lat": 44.4719,
    "lng": -73.1533,
    "tier": 2
  },
  {
    "iata": "BWT",
    "name": "Wynyard Airport",
    "city": "Burnie",
    "country": "Australia",
    "lat": -40.9989,
    "lng": 145.731,
    "tier": 3
  },
  {
    "iata": "PUS",
    "name": "Gimhae International Airport",
    "city": "Busan",
    "country": "South Korea",
    "lat": 35.1795,
    "lng": 128.938,
    "tier": 1
  },
  {
    "iata": "AGS",
    "name": "Augusta Regional At Bush Field",
    "city": "Bush Field",
    "country": "United States",
    "lat": 33.3699,
    "lng": -81.9645,
    "tier": 2
  },
  {
    "iata": "BUZ",
    "name": "Bushehr Airport",
    "city": "Bushehr",
    "country": "Iran",
    "lat": 28.9448,
    "lng": 50.8346,
    "tier": 3
  },
  {
    "iata": "USU",
    "name": "Francisco B. Reyes Airport",
    "city": "Busuanga",
    "country": "Philippines",
    "lat": 12.1215,
    "lng": 120.1,
    "tier": 3
  },
  {
    "iata": "BTM",
    "name": "Bert Mooney Airport",
    "city": "Butte",
    "country": "United States",
    "lat": 45.9548,
    "lng": -112.497,
    "tier": 3
  },
  {
    "iata": "BXU",
    "name": "Bancasi Airport",
    "city": "Butuan",
    "country": "Philippines",
    "lat": 8.9515,
    "lng": 125.4788,
    "tier": 3
  },
  {
    "iata": "BZG",
    "name": "Bydgoszcz Ignacy Jan Paderewski Airport",
    "city": "Bydgoszcz",
    "country": "Poland",
    "lat": 53.0968,
    "lng": 17.9777,
    "tier": 3
  },
  {
    "iata": "CBH",
    "name": "Béchar Boudghene Ben Ali Lotfi Airport",
    "city": "Béchar",
    "country": "Algeria",
    "lat": 31.6457,
    "lng": -2.2699,
    "tier": 3
  },
  {
    "iata": "CAH",
    "name": "Cà Mau Airport",
    "city": "Ca Mau",
    "country": "Vietnam",
    "lat": 9.1777,
    "lng": 105.1778,
    "tier": 3
  },
  {
    "iata": "CAB",
    "name": "Cabinda Airport",
    "city": "Cabinda",
    "country": "Angola",
    "lat": -5.597,
    "lng": 12.1884,
    "tier": 3
  },
  {
    "iata": "CFB",
    "name": "Cabo Frio Airport",
    "city": "Cabo Frio",
    "country": "Brazil",
    "lat": -22.9217,
    "lng": -42.0743,
    "tier": 3
  },
  {
    "iata": "CFC",
    "name": "Caçador Airport",
    "city": "Cacador",
    "country": "Brazil",
    "lat": -26.7884,
    "lng": -50.9398,
    "tier": 3
  },
  {
    "iata": "OAL",
    "name": "Cacoal Airport",
    "city": "Cacoal",
    "country": "Brazil",
    "lat": -11.496,
    "lng": -61.4508,
    "tier": 3
  },
  {
    "iata": "CFR",
    "name": "Caen-Carpiquet Airport",
    "city": "Caen",
    "country": "France",
    "lat": 49.1733,
    "lng": -0.45,
    "tier": 3
  },
  {
    "iata": "CGY",
    "name": "Laguindingan Airport",
    "city": "Cagayan de Oro City",
    "country": "Philippines",
    "lat": 8.6122,
    "lng": 124.4565,
    "tier": 2
  },
  {
    "iata": "CAG",
    "name": "Cagliari Elmas Airport",
    "city": "Cagliari",
    "country": "Italy",
    "lat": 39.2515,
    "lng": 9.0543,
    "tier": 1
  },
  {
    "iata": "CNS",
    "name": "Cairns International Airport",
    "city": "Cairns",
    "country": "Australia",
    "lat": -16.8858,
    "lng": 145.755,
    "tier": 1
  },
  {
    "iata": "CAI",
    "name": "Cairo International Airport",
    "city": "Cairo",
    "country": "Egypt",
    "lat": 30.1219,
    "lng": 31.4056,
    "tier": 1
  },
  {
    "iata": "CJA",
    "name": "Mayor General FAP Armando Revoredo Iglesias Airport",
    "city": "Cajamarca",
    "country": "Peru",
    "lat": -7.1392,
    "lng": -78.4894,
    "tier": 3
  },
  {
    "iata": "CBQ",
    "name": "Margaret Ekpo International Airport",
    "city": "Calabar",
    "country": "Nigeria",
    "lat": 4.976,
    "lng": 8.3472,
    "tier": 3
  },
  {
    "iata": "CJC",
    "name": "El Loa Airport",
    "city": "Calama",
    "country": "Chile",
    "lat": -22.4982,
    "lng": -68.9036,
    "tier": 2
  },
  {
    "iata": "CYP",
    "name": "Calbayog Airport",
    "city": "Calbayog City",
    "country": "Philippines",
    "lat": 12.0727,
    "lng": 124.545,
    "tier": 3
  },
  {
    "iata": "CLV",
    "name": "Nelson Ribeiro Guimarães Airport",
    "city": "Caldas Novas",
    "country": "Brazil",
    "lat": -17.7253,
    "lng": -48.6075,
    "tier": 3
  },
  {
    "iata": "YYC",
    "name": "Calgary International Airport",
    "city": "Calgary",
    "country": "Canada",
    "lat": 51.1139,
    "lng": -114.02,
    "tier": 1
  },
  {
    "iata": "CLO",
    "name": "Alfonso Bonilla Aragon International Airport",
    "city": "Cali",
    "country": "Colombia",
    "lat": 3.5432,
    "lng": -76.3816,
    "tier": 1
  },
  {
    "iata": "CCJ",
    "name": "Calicut International Airport",
    "city": "Calicut",
    "country": "India",
    "lat": 11.1368,
    "lng": 75.9553,
    "tier": 1
  },
  {
    "iata": "CLY",
    "name": "Calvi-Sainte-Catherine Airport",
    "city": "Calvi",
    "country": "France",
    "lat": 42.5244,
    "lng": 8.7931,
    "tier": 2
  },
  {
    "iata": "CMW",
    "name": "Ignacio Agramonte International Airport",
    "city": "Camaguey",
    "country": "Cuba",
    "lat": 21.4203,
    "lng": -77.8475,
    "tier": 3
  },
  {
    "iata": "YCB",
    "name": "Cambridge Bay Airport",
    "city": "Cambridge Bay",
    "country": "Canada",
    "lat": 69.1081,
    "lng": -105.138,
    "tier": 2
  },
  {
    "iata": "CGM",
    "name": "Camiguin Airport",
    "city": "Camiguin",
    "country": "Philippines",
    "lat": 9.2535,
    "lng": 124.707,
    "tier": 3
  },
  {
    "iata": "YBL",
    "name": "Campbell River Airport",
    "city": "Campbell River",
    "country": "Canada",
    "lat": 49.9508,
    "lng": -125.271,
    "tier": 3
  },
  {
    "iata": "CAL",
    "name": "Campbeltown Airport",
    "city": "Campbeltown",
    "country": "United Kingdom",
    "lat": 55.4372,
    "lng": -5.6864,
    "tier": 3
  },
  {
    "iata": "CPE",
    "name": "Ingeniero Alberto Acuña Ongay International Airport",
    "city": "Campeche",
    "country": "Mexico",
    "lat": 19.8168,
    "lng": -90.5003,
    "tier": 3
  },
  {
    "iata": "CPV",
    "name": "Presidente João Suassuna Airport",
    "city": "Campina Grande",
    "country": "Brazil",
    "lat": -7.2699,
    "lng": -35.8964,
    "tier": 3
  },
  {
    "iata": "VCP",
    "name": "Viracopos International Airport",
    "city": "Campinas",
    "country": "Brazil",
    "lat": -23.0074,
    "lng": -47.1345,
    "tier": 1
  },
  {
    "iata": "CGR",
    "name": "Campo Grande Airport",
    "city": "Campo Grande",
    "country": "Brazil",
    "lat": -20.4687,
    "lng": -54.6725,
    "tier": 2
  },
  {
    "iata": "CAW",
    "name": "Bartolomeu Lisandro Airport",
    "city": "Campos",
    "country": "Brazil",
    "lat": -21.6983,
    "lng": -41.3017,
    "tier": 3
  },
  {
    "iata": "VCA",
    "name": "Can Tho International Airport",
    "city": "Can Tho",
    "country": "Vietnam",
    "lat": 10.0851,
    "lng": 105.712,
    "tier": 3
  },
  {
    "iata": "CAJ",
    "name": "Canaima Airport",
    "city": "Canaima",
    "country": "Venezuela",
    "lat": 6.232,
    "lng": -62.8544,
    "tier": 3
  },
  {
    "iata": "CKZ",
    "name": "Çanakkale Airport",
    "city": "Canakkale",
    "country": "Turkey",
    "lat": 40.1377,
    "lng": 26.4268,
    "tier": 3
  },
  {
    "iata": "CBR",
    "name": "Canberra International Airport",
    "city": "Canberra",
    "country": "Australia",
    "lat": -35.3069,
    "lng": 149.195,
    "tier": 2
  },
  {
    "iata": "CUN",
    "name": "Cancún International Airport",
    "city": "Cancun",
    "country": "Mexico",
    "lat": 21.0365,
    "lng": -86.8771,
    "tier": 1
  },
  {
    "iata": "CAP",
    "name": "Cap Haitien International Airport",
    "city": "Cap Haitien",
    "country": "Haiti",
    "lat": 19.733,
    "lng": -72.1947,
    "tier": 3
  },
  {
    "iata": "CSK",
    "name": "Cap Skirring Airport",
    "city": "Cap Skiring",
    "country": "Senegal",
    "lat": 12.3953,
    "lng": -16.748,
    "tier": 3
  },
  {
    "iata": "YTE",
    "name": "Cape Dorset Airport",
    "city": "Cape Dorset",
    "country": "Canada",
    "lat": 64.23,
    "lng": -76.5267,
    "tier": 3
  },
  {
    "iata": "CGI",
    "name": "Cape Girardeau Regional Airport",
    "city": "Cape Girardeau",
    "country": "United States",
    "lat": 37.2253,
    "lng": -89.5708,
    "tier": 3
  },
  {
    "iata": "LUR",
    "name": "Cape Lisburne LRRS Airport",
    "city": "Cape Lisburne",
    "country": "United States",
    "lat": 68.8751,
    "lng": -166.11,
    "tier": 3
  },
  {
    "iata": "CPT",
    "name": "Cape Town International Airport",
    "city": "Cape Town",
    "country": "South Africa",
    "lat": -33.9648,
    "lng": 18.6017,
    "tier": 1
  },
  {
    "iata": "CCS",
    "name": "Simón Bolívar International Airport",
    "city": "Caracas",
    "country": "Venezuela",
    "lat": 10.6012,
    "lng": -66.9912,
    "tier": 1
  },
  {
    "iata": "CCF",
    "name": "Carcassonne Airport",
    "city": "Carcassonne",
    "country": "France",
    "lat": 43.216,
    "lng": 2.3063,
    "tier": 2
  },
  {
    "iata": "CWL",
    "name": "Cardiff International Airport",
    "city": "Cardiff",
    "country": "United Kingdom",
    "lat": 51.3967,
    "lng": -3.3433,
    "tier": 1
  },
  {
    "iata": "APO",
    "name": "Antonio Roldan Betancourt Airport",
    "city": "Carepa",
    "country": "Colombia",
    "lat": 7.812,
    "lng": -76.7164,
    "tier": 3
  },
  {
    "iata": "CLD",
    "name": "Mc Clellan-Palomar Airport",
    "city": "Carlsbad",
    "country": "United States",
    "lat": 33.1283,
    "lng": -117.28,
    "tier": 3
  },
  {
    "iata": "CNM",
    "name": "Cavern City Air Terminal",
    "city": "Carlsbad",
    "country": "United States",
    "lat": 32.3375,
    "lng": -104.263,
    "tier": 3
  },
  {
    "iata": "CTG",
    "name": "Rafael Nuñez International Airport",
    "city": "Cartagena",
    "country": "Colombia",
    "lat": 10.4424,
    "lng": -75.513,
    "tier": 2
  },
  {
    "iata": "CMN",
    "name": "Mohammed V International Airport",
    "city": "Casablanca",
    "country": "Morocco",
    "lat": 33.3675,
    "lng": -7.59,
    "tier": 1
  },
  {
    "iata": "CAC",
    "name": "Cascavel Airport",
    "city": "Cascavel",
    "country": "Brazil",
    "lat": -25.0003,
    "lng": -53.5008,
    "tier": 3
  },
  {
    "iata": "CPR",
    "name": "Casper-Natrona County International Airport",
    "city": "Casper",
    "country": "United States",
    "lat": 42.908,
    "lng": -106.464,
    "tier": 3
  },
  {
    "iata": "YCG",
    "name": "Castlegar/West Kootenay Regional Airport",
    "city": "Castlegar",
    "country": "Canada",
    "lat": 49.2964,
    "lng": -117.632,
    "tier": 3
  },
  {
    "iata": "DCM",
    "name": "Castres-Mazamet Airport",
    "city": "Castres",
    "country": "France",
    "lat": 43.5563,
    "lng": 2.2892,
    "tier": 3
  },
  {
    "iata": "SLU",
    "name": "George F. L. Charles Airport",
    "city": "Castries",
    "country": "Saint Lucia",
    "lat": 14.0202,
    "lng": -60.9929,
    "tier": 2
  },
  {
    "iata": "MHC",
    "name": "Mocopulli Airport",
    "city": "Castro",
    "country": "Chile",
    "lat": -42.3404,
    "lng": -73.7157,
    "tier": 3
  },
  {
    "iata": "TBI",
    "name": "New Bight Airport",
    "city": "Cat Island",
    "country": "Bahamas",
    "lat": 24.3153,
    "lng": -75.4523,
    "tier": 3
  },
  {
    "iata": "YAC",
    "name": "Cat Lake Airport",
    "city": "Cat Lake",
    "country": "Canada",
    "lat": 51.7272,
    "lng": -91.8244,
    "tier": 3
  },
  {
    "iata": "CTC",
    "name": "Catamarca Airport",
    "city": "Catamarca",
    "country": "Argentina",
    "lat": -28.5956,
    "lng": -65.7517,
    "tier": 3
  },
  {
    "iata": "CTA",
    "name": "Catania-Fontanarossa Airport",
    "city": "Catania",
    "country": "Italy",
    "lat": 37.4668,
    "lng": 15.0664,
    "tier": 1
  },
  {
    "iata": "CRM",
    "name": "Catarman National Airport",
    "city": "Catarman",
    "country": "Philippines",
    "lat": 12.5024,
    "lng": 124.636,
    "tier": 3
  },
  {
    "iata": "MPH",
    "name": "Godofredo P. Ramos Airport",
    "city": "Caticlan",
    "country": "Philippines",
    "lat": 11.9245,
    "lng": 121.954,
    "tier": 3
  },
  {
    "iata": "CBT",
    "name": "Catumbela Airport",
    "city": "Catumbela",
    "country": "Angola",
    "lat": -12.4792,
    "lng": 13.4869,
    "tier": 3
  },
  {
    "iata": "CYZ",
    "name": "Cauayan Airport",
    "city": "Cauayan",
    "country": "Philippines",
    "lat": 16.9299,
    "lng": 121.753,
    "tier": 3
  },
  {
    "iata": "CXJ",
    "name": "Hugo Cantergiani Regional Airport",
    "city": "Caxias Do Sul",
    "country": "Brazil",
    "lat": -29.1971,
    "lng": -51.1875,
    "tier": 3
  },
  {
    "iata": "CAY",
    "name": "Cayenne-Rochambeau Airport",
    "city": "Cayenne",
    "country": "French Guiana",
    "lat": 4.8198,
    "lng": -52.3604,
    "tier": 2
  },
  {
    "iata": "CYB",
    "name": "Gerrard Smith International Airport",
    "city": "Cayman Brac",
    "country": "Cayman Islands",
    "lat": 19.687,
    "lng": -79.8828,
    "tier": 3
  },
  {
    "iata": "CYO",
    "name": "Vilo Acuña International Airport",
    "city": "Cayo Largo del Sur",
    "country": "Cuba",
    "lat": 21.6165,
    "lng": -81.546,
    "tier": 3
  },
  {
    "iata": "CEB",
    "name": "Mactan Cebu International Airport",
    "city": "Cebu",
    "country": "Philippines",
    "lat": 10.3075,
    "lng": 123.979,
    "tier": 1
  },
  {
    "iata": "CDC",
    "name": "Cedar City Regional Airport",
    "city": "Cedar City",
    "country": "United States",
    "lat": 37.701,
    "lng": -113.099,
    "tier": 3
  },
  {
    "iata": "CID",
    "name": "The Eastern Iowa Airport",
    "city": "Cedar Rapids",
    "country": "United States",
    "lat": 41.8847,
    "lng": -91.7108,
    "tier": 2
  },
  {
    "iata": "CED",
    "name": "Ceduna Airport",
    "city": "Ceduna",
    "country": "Australia",
    "lat": -32.1306,
    "lng": 133.71,
    "tier": 3
  },
  {
    "iata": "CEM",
    "name": "Central Airport",
    "city": "Central",
    "country": "United States",
    "lat": 65.5738,
    "lng": -144.783,
    "tier": 3
  },
  {
    "iata": "CDR",
    "name": "Chadron Municipal Airport",
    "city": "Chadron",
    "country": "United States",
    "lat": 42.8376,
    "lng": -103.095,
    "tier": 3
  },
  {
    "iata": "ZBR",
    "name": "Konarak Airport",
    "city": "Chah Bahar",
    "country": "Iran",
    "lat": 25.4433,
    "lng": 60.3821,
    "tier": 2
  },
  {
    "iata": "CIK",
    "name": "Chalkyitsik Airport",
    "city": "Chalkyitsik",
    "country": "United States",
    "lat": 66.645,
    "lng": -143.74,
    "tier": 3
  },
  {
    "iata": "XCR",
    "name": "Châlons-Vatry Airport",
    "city": "Chalons",
    "country": "France",
    "lat": 48.7733,
    "lng": 4.2061,
    "tier": 3
  },
  {
    "iata": "CMI",
    "name": "University of Illinois Willard Airport",
    "city": "Champaign",
    "country": "United States",
    "lat": 40.0392,
    "lng": -88.2781,
    "tier": 3
  },
  {
    "iata": "IXC",
    "name": "Chandigarh Airport",
    "city": "Chandigarh",
    "country": "India",
    "lat": 30.6735,
    "lng": 76.7885,
    "tier": 2
  },
  {
    "iata": "BDP",
    "name": "Bhadrapur Airport",
    "city": "Chandragarhi",
    "country": "Nepal",
    "lat": 26.5708,
    "lng": 88.0796,
    "tier": 3
  },
  {
    "iata": "CSX",
    "name": "Changsha Huanghua International Airport",
    "city": "Changcha",
    "country": "China",
    "lat": 28.1892,
    "lng": 113.22,
    "tier": 1
  },
  {
    "iata": "CGQ",
    "name": "Longjia Airport",
    "city": "Changchun",
    "country": "China",
    "lat": 43.9962,
    "lng": 125.685,
    "tier": 1
  },
  {
    "iata": "CGD",
    "name": "Changde Airport",
    "city": "Changde",
    "country": "China",
    "lat": 28.9189,
    "lng": 111.64,
    "tier": 2
  },
  {
    "iata": "CHX",
    "name": "Cap Manuel Niño International Airport",
    "city": "Changuinola",
    "country": "Panama",
    "lat": 9.459,
    "lng": -82.5151,
    "tier": 3
  },
  {
    "iata": "CIH",
    "name": "Changzhi Airport",
    "city": "Changzhi",
    "country": "China",
    "lat": 36.2475,
    "lng": 113.126,
    "tier": 2
  },
  {
    "iata": "CZX",
    "name": "Changzhou Benniu Airport",
    "city": "Changzhou",
    "country": "China",
    "lat": 31.9197,
    "lng": 119.779,
    "tier": 1
  },
  {
    "iata": "CHQ",
    "name": "Chania International Airport",
    "city": "Chania",
    "country": "Greece",
    "lat": 35.5317,
    "lng": 24.1497,
    "tier": 1
  },
  {
    "iata": "CHG",
    "name": "Chaoyang Airport",
    "city": "Chaoyang",
    "country": "China",
    "lat": 41.5381,
    "lng": 120.435,
    "tier": 3
  },
  {
    "iata": "XAP",
    "name": "Serafin Enoss Bertaso Airport",
    "city": "Chapeco",
    "country": "Brazil",
    "lat": -27.1342,
    "lng": -52.6566,
    "tier": 3
  },
  {
    "iata": "CRL",
    "name": "Brussels South Charleroi Airport",
    "city": "Charleroi",
    "country": "Belgium",
    "lat": 50.4592,
    "lng": 4.4538,
    "tier": 1
  },
  {
    "iata": "CHS",
    "name": "Charleston Air Force Base-International Airport",
    "city": "Charleston",
    "country": "United States",
    "lat": 32.8986,
    "lng": -80.0405,
    "tier": 1
  },
  {
    "iata": "CRW",
    "name": "Yeager Airport",
    "city": "Charleston",
    "country": "United States",
    "lat": 38.3731,
    "lng": -81.5932,
    "tier": 2
  },
  {
    "iata": "NEV",
    "name": "Vance W. Amory International Airport",
    "city": "Charlestown",
    "country": "Saint Kitts and Nevis",
    "lat": 17.2057,
    "lng": -62.5899,
    "tier": 2
  },
  {
    "iata": "CTL",
    "name": "Charleville Airport",
    "city": "Charlieville",
    "country": "Australia",
    "lat": -26.4133,
    "lng": 146.262,
    "tier": 3
  },
  {
    "iata": "YCL",
    "name": "Charlo Airport",
    "city": "Charlo",
    "country": "Canada",
    "lat": 47.9908,
    "lng": -66.3303,
    "tier": 3
  },
  {
    "iata": "CLT",
    "name": "Charlotte Douglas International Airport",
    "city": "Charlotte",
    "country": "United States",
    "lat": 35.214,
    "lng": -80.9431,
    "tier": 1
  },
  {
    "iata": "CHO",
    "name": "Charlottesville Albemarle Airport",
    "city": "Charlottesville VA",
    "country": "United States",
    "lat": 38.1386,
    "lng": -78.4529,
    "tier": 2
  },
  {
    "iata": "YYG",
    "name": "Charlottetown Airport",
    "city": "Charlottetown",
    "country": "Canada",
    "lat": 46.29,
    "lng": -63.1211,
    "tier": 3
  },
  {
    "iata": "CHA",
    "name": "Lovell Field",
    "city": "Chattanooga",
    "country": "United States",
    "lat": 35.0353,
    "lng": -85.2038,
    "tier": 2
  },
  {
    "iata": "CSY",
    "name": "Cheboksary Airport",
    "city": "Cheboksary",
    "country": "Russia",
    "lat": 56.0903,
    "lng": 47.3473,
    "tier": 3
  },
  {
    "iata": "CYF",
    "name": "Chefornak Airport",
    "city": "Chefornak",
    "country": "United States",
    "lat": 60.1492,
    "lng": -164.286,
    "tier": 3
  },
  {
    "iata": "CJU",
    "name": "Jeju International Airport",
    "city": "Cheju",
    "country": "South Korea",
    "lat": 33.5113,
    "lng": 126.493,
    "tier": 1
  },
  {
    "iata": "CEK",
    "name": "Chelyabinsk Balandino Airport",
    "city": "Chelyabinsk",
    "country": "Russia",
    "lat": 55.3058,
    "lng": 61.5033,
    "tier": 2
  },
  {
    "iata": "CTU",
    "name": "Chengdu Shuangliu International Airport",
    "city": "Chengdu",
    "country": "China",
    "lat": 30.5785,
    "lng": 103.947,
    "tier": 1
  },
  {
    "iata": "CEE",
    "name": "Cherepovets Airport",
    "city": "Cherepovets",
    "country": "Russia",
    "lat": 59.2736,
    "lng": 38.0158,
    "tier": 2
  },
  {
    "iata": "CYX",
    "name": "Cherskiy Airport",
    "city": "Cherskiy",
    "country": "Russia",
    "lat": 68.7406,
    "lng": 161.338,
    "tier": 3
  },
  {
    "iata": "YCS",
    "name": "Chesterfield Inlet Airport",
    "city": "Chesterfield Inlet",
    "country": "Canada",
    "lat": 63.3469,
    "lng": -90.7311,
    "tier": 2
  },
  {
    "iata": "CTM",
    "name": "Chetumal International Airport",
    "city": "Chetumal",
    "country": "Mexico",
    "lat": 18.5047,
    "lng": -88.3268,
    "tier": 3
  },
  {
    "iata": "VAK",
    "name": "Chevak Airport",
    "city": "Chevak",
    "country": "United States",
    "lat": 61.5409,
    "lng": -165.6005,
    "tier": 3
  },
  {
    "iata": "YHR",
    "name": "Chevery Airport",
    "city": "Chevery",
    "country": "Canada",
    "lat": 50.4689,
    "lng": -59.6367,
    "tier": 3
  },
  {
    "iata": "CYS",
    "name": "Cheyenne Regional Jerry Olson Field",
    "city": "Cheyenne",
    "country": "United States",
    "lat": 41.1557,
    "lng": -104.812,
    "tier": 2
  },
  {
    "iata": "CNX",
    "name": "Chiang Mai International Airport",
    "city": "Chiang Mai",
    "country": "Thailand",
    "lat": 18.7668,
    "lng": 98.9626,
    "tier": 1
  },
  {
    "iata": "CEI",
    "name": "Chiang Rai International Airport",
    "city": "Chiang Rai",
    "country": "Thailand",
    "lat": 19.9523,
    "lng": 99.8829,
    "tier": 2
  },
  {
    "iata": "YMT",
    "name": "Chapais Airport",
    "city": "Chibougamau",
    "country": "Canada",
    "lat": 49.7719,
    "lng": -74.5281,
    "tier": 3
  },
  {
    "iata": "MDW",
    "name": "Chicago Midway International Airport",
    "city": "Chicago",
    "country": "United States",
    "lat": 41.786,
    "lng": -87.7524,
    "tier": 1
  },
  {
    "iata": "ORD",
    "name": "Chicago O'Hare International Airport",
    "city": "Chicago",
    "country": "United States",
    "lat": 41.9786,
    "lng": -87.9048,
    "tier": 1
  },
  {
    "iata": "CIX",
    "name": "Capitan FAP Jose A Quinones Gonzales International Airport",
    "city": "Chiclayo",
    "country": "Peru",
    "lat": -6.7875,
    "lng": -79.8281,
    "tier": 3
  },
  {
    "iata": "CIC",
    "name": "Chico Municipal Airport",
    "city": "Chico",
    "country": "United States",
    "lat": 39.7954,
    "lng": -121.858,
    "tier": 3
  },
  {
    "iata": "CIF",
    "name": "Chifeng Airport",
    "city": "Chifeng",
    "country": "China",
    "lat": 42.235,
    "lng": 118.908,
    "tier": 2
  },
  {
    "iata": "CUU",
    "name": "General Roberto Fierro Villalobos International Airport",
    "city": "Chihuahua",
    "country": "Mexico",
    "lat": 28.7029,
    "lng": -105.965,
    "tier": 2
  },
  {
    "iata": "CIT",
    "name": "Shymkent Airport",
    "city": "Chimkent",
    "country": "Kazakhstan",
    "lat": 42.3642,
    "lng": 69.4789,
    "tier": 2
  },
  {
    "iata": "VPY",
    "name": "Chimoio Airport",
    "city": "Chimoio",
    "country": "Mozambique",
    "lat": -19.1513,
    "lng": 33.429,
    "tier": 3
  },
  {
    "iata": "JKH",
    "name": "Chios Island National Airport",
    "city": "Chios",
    "country": "Greece",
    "lat": 38.3432,
    "lng": 26.1406,
    "tier": 2
  },
  {
    "iata": "CIP",
    "name": "Chipata Airport",
    "city": "Chipata",
    "country": "Zambia",
    "lat": -13.5583,
    "lng": 32.5872,
    "tier": 3
  },
  {
    "iata": "YKU",
    "name": "Chisasibi Airport",
    "city": "Chisasibi",
    "country": "Canada",
    "lat": 53.8056,
    "lng": -78.9169,
    "tier": 3
  },
  {
    "iata": "KIV",
    "name": "Chişinău International Airport",
    "city": "Chisinau",
    "country": "Moldova",
    "lat": 46.9277,
    "lng": 28.931,
    "tier": 1
  },
  {
    "iata": "HTA",
    "name": "Chita-Kadala Airport",
    "city": "Chita",
    "country": "Russia",
    "lat": 52.0263,
    "lng": 113.306,
    "tier": 2
  },
  {
    "iata": "CJL",
    "name": "Chitral Airport",
    "city": "Chitral",
    "country": "Pakistan",
    "lat": 35.8866,
    "lng": 71.8006,
    "tier": 3
  },
  {
    "iata": "CGP",
    "name": "Shah Amanat International Airport",
    "city": "Chittagong",
    "country": "Bangladesh",
    "lat": 22.2496,
    "lng": 91.8133,
    "tier": 2
  },
  {
    "iata": "JUH",
    "name": "Jiuhuashan Airport",
    "city": "Chizhou",
    "country": "China",
    "lat": 30.7403,
    "lng": 117.6856,
    "tier": 2
  },
  {
    "iata": "COQ",
    "name": "Choibalsan Airport",
    "city": "Choibalsan",
    "country": "Mongolia",
    "lat": 48.1357,
    "lng": 114.646,
    "tier": 3
  },
  {
    "iata": "CHY",
    "name": "Choiseul Bay Airport",
    "city": "Choiseul Bay",
    "country": "Solomon Islands",
    "lat": -6.7119,
    "lng": 156.3961,
    "tier": 3
  },
  {
    "iata": "CKH",
    "name": "Chokurdakh Airport",
    "city": "Chokurdah",
    "country": "Russia",
    "lat": 70.6231,
    "lng": 147.902,
    "tier": 3
  },
  {
    "iata": "CJJ",
    "name": "Cheongju International Airport/Cheongju Air Base (K-59/G-513)",
    "city": "Chongju",
    "country": "South Korea",
    "lat": 36.717,
    "lng": 127.4987,
    "tier": 2
  },
  {
    "iata": "CKG",
    "name": "Chongqing Jiangbei International Airport",
    "city": "Chongqing",
    "country": "China",
    "lat": 29.7192,
    "lng": 106.642,
    "tier": 1
  },
  {
    "iata": "CHC",
    "name": "Christchurch International Airport",
    "city": "Christchurch",
    "country": "New Zealand",
    "lat": -43.4894,
    "lng": 172.532,
    "tier": 1
  },
  {
    "iata": "XCH",
    "name": "Christmas Island Airport",
    "city": "Christmas Island",
    "country": "Christmas Island",
    "lat": -10.4506,
    "lng": 105.69,
    "tier": 3
  },
  {
    "iata": "VCL",
    "name": "Chu Lai International Airport",
    "city": "Chu Lai",
    "country": "Vietnam",
    "lat": 15.4033,
    "lng": 108.706,
    "tier": 3
  },
  {
    "iata": "CHU",
    "name": "Chuathbaluk Airport",
    "city": "Chuathbaluk",
    "country": "United States",
    "lat": 61.5791,
    "lng": -159.216,
    "tier": 3
  },
  {
    "iata": "CJM",
    "name": "Chumphon Airport",
    "city": "Chumphon",
    "country": "Thailand",
    "lat": 10.7112,
    "lng": 99.3617,
    "tier": 3
  },
  {
    "iata": "YYQ",
    "name": "Churchill Airport",
    "city": "Churchill",
    "country": "Canada",
    "lat": 58.7392,
    "lng": -94.065,
    "tier": 2
  },
  {
    "iata": "ZUM",
    "name": "Churchill Falls Airport",
    "city": "Churchill Falls",
    "country": "Canada",
    "lat": 53.5619,
    "lng": -64.1064,
    "tier": 3
  },
  {
    "iata": "TKK",
    "name": "Chuuk International Airport",
    "city": "Chuuk",
    "country": "Micronesia",
    "lat": 7.4619,
    "lng": 151.843,
    "tier": 3
  },
  {
    "iata": "ICI",
    "name": "Cicia Airport",
    "city": "Cicia",
    "country": "Fiji",
    "lat": -17.7433,
    "lng": -179.342,
    "tier": 3
  },
  {
    "iata": "CVG",
    "name": "Cincinnati Northern Kentucky International Airport",
    "city": "Cincinnati",
    "country": "United States",
    "lat": 39.0488,
    "lng": -84.6678,
    "tier": 1
  },
  {
    "iata": "LUK",
    "name": "Cincinnati Municipal Airport Lunken Field",
    "city": "Cincinnati",
    "country": "United States",
    "lat": 39.1033,
    "lng": -84.4186,
    "tier": 3
  },
  {
    "iata": "IRC",
    "name": "Circle City /New/ Airport",
    "city": "Circle",
    "country": "United States",
    "lat": 65.8305,
    "lng": -144.076,
    "tier": 3
  },
  {
    "iata": "CME",
    "name": "Ciudad del Carmen International Airport",
    "city": "Ciudad Del Carmen",
    "country": "Mexico",
    "lat": 18.6537,
    "lng": -91.799,
    "tier": 3
  },
  {
    "iata": "CJS",
    "name": "Abraham González International Airport",
    "city": "Ciudad Juarez",
    "country": "Mexico",
    "lat": 31.6361,
    "lng": -106.429,
    "tier": 2
  },
  {
    "iata": "CEN",
    "name": "Ciudad Obregón International Airport",
    "city": "Ciudad Obregon",
    "country": "Mexico",
    "lat": 27.3926,
    "lng": -109.833,
    "tier": 3
  },
  {
    "iata": "CVM",
    "name": "General Pedro Jose Mendez International Airport",
    "city": "Ciudad Victoria",
    "country": "Mexico",
    "lat": 23.7033,
    "lng": -98.9565,
    "tier": 3
  },
  {
    "iata": "AGT",
    "name": "Guarani International Airport",
    "city": "Ciudad del Este",
    "country": "Paraguay",
    "lat": -25.4545,
    "lng": -54.8427,
    "tier": 3
  },
  {
    "iata": "CKB",
    "name": "North Central West Virginia Airport",
    "city": "Clarksburg",
    "country": "United States",
    "lat": 39.2966,
    "lng": -80.2281,
    "tier": 3
  },
  {
    "iata": "CFE",
    "name": "Clermont-Ferrand Auvergne Airport",
    "city": "Clermont-Ferrand",
    "country": "France",
    "lat": 45.7867,
    "lng": 3.1692,
    "tier": 2
  },
  {
    "iata": "CLE",
    "name": "Cleveland Hopkins International Airport",
    "city": "Cleveland",
    "country": "United States",
    "lat": 41.4117,
    "lng": -81.8498,
    "tier": 1
  },
  {
    "iata": "CNJ",
    "name": "Cloncurry Airport",
    "city": "Cloncurry",
    "country": "Australia",
    "lat": -20.6686,
    "lng": 140.504,
    "tier": 3
  },
  {
    "iata": "CLJ",
    "name": "Cluj-Napoca International Airport",
    "city": "Cluj-napoca",
    "country": "Romania",
    "lat": 46.7852,
    "lng": 23.6862,
    "tier": 2
  },
  {
    "iata": "YCY",
    "name": "Clyde River Airport",
    "city": "Clyde River",
    "country": "Canada",
    "lat": 70.4861,
    "lng": -68.5167,
    "tier": 3
  },
  {
    "iata": "CIZ",
    "name": "Coari Airport",
    "city": "Coari",
    "country": "Brazil",
    "lat": -4.1341,
    "lng": -63.1326,
    "tier": 3
  },
  {
    "iata": "CIJ",
    "name": "Capitán Aníbal Arab Airport",
    "city": "Cobija",
    "country": "Bolivia",
    "lat": -11.0404,
    "lng": -68.783,
    "tier": 3
  },
  {
    "iata": "OCC",
    "name": "Francisco De Orellana Airport",
    "city": "Coca",
    "country": "Ecuador",
    "lat": -0.4629,
    "lng": -76.9868,
    "tier": 3
  },
  {
    "iata": "CBB",
    "name": "Jorge Wilsterman International Airport",
    "city": "Cochabamba",
    "country": "Bolivia",
    "lat": -17.4211,
    "lng": -66.1771,
    "tier": 2
  },
  {
    "iata": "GDT",
    "name": "JAGS McCartney International Airport",
    "city": "Cockburn Town",
    "country": "Turks and Caicos Islands",
    "lat": 21.4445,
    "lng": -71.1423,
    "tier": 3
  },
  {
    "iata": "ZSA",
    "name": "San Salvador Airport",
    "city": "Cockburn Town",
    "country": "Bahamas",
    "lat": 24.0633,
    "lng": -74.524,
    "tier": 3
  },
  {
    "iata": "CCK",
    "name": "Cocos (Keeling) Islands Airport",
    "city": "Cocos Keeling Island",
    "country": "Cocos (Keeling) Islands",
    "lat": -12.1883,
    "lng": 96.8339,
    "tier": 3
  },
  {
    "iata": "COD",
    "name": "Yellowstone Regional Airport",
    "city": "Cody",
    "country": "United States",
    "lat": 44.5202,
    "lng": -109.024,
    "tier": 3
  },
  {
    "iata": "CUQ",
    "name": "Coen Airport",
    "city": "Coen",
    "country": "Australia",
    "lat": -13.7611,
    "lng": 143.1133,
    "tier": 3
  },
  {
    "iata": "CFS",
    "name": "Coffs Harbour Airport",
    "city": "Coff's Harbour",
    "country": "Australia",
    "lat": -30.3206,
    "lng": 153.116,
    "tier": 3
  },
  {
    "iata": "CJB",
    "name": "Coimbatore International Airport",
    "city": "Coimbatore",
    "country": "India",
    "lat": 11.03,
    "lng": 77.0434,
    "tier": 2
  },
  {
    "iata": "CDB",
    "name": "Cold Bay Airport",
    "city": "Cold Bay",
    "country": "United States",
    "lat": 55.2061,
    "lng": -162.725,
    "tier": 3
  },
  {
    "iata": "CLQ",
    "name": "Licenciado Miguel de la Madrid Airport",
    "city": "Colima",
    "country": "Mexico",
    "lat": 19.277,
    "lng": -103.577,
    "tier": 3
  },
  {
    "iata": "CLL",
    "name": "Easterwood Field",
    "city": "College Station",
    "country": "United States",
    "lat": 30.5886,
    "lng": -96.3638,
    "tier": 3
  },
  {
    "iata": "CGN",
    "name": "Cologne Bonn Airport",
    "city": "Cologne",
    "country": "Germany",
    "lat": 50.8659,
    "lng": 7.1427,
    "tier": 1
  },
  {
    "iata": "CMB",
    "name": "Bandaranaike International Colombo Airport",
    "city": "Colombo",
    "country": "Sri Lanka",
    "lat": 7.1808,
    "lng": 79.8841,
    "tier": 1
  },
  {
    "iata": "CRI",
    "name": "Colonel Hill Airport",
    "city": "Colonel Hill",
    "country": "Bahamas",
    "lat": 22.7456,
    "lng": -74.1824,
    "tier": 3
  },
  {
    "iata": "COS",
    "name": "City of Colorado Springs Municipal Airport",
    "city": "Colorado Springs",
    "country": "United States",
    "lat": 38.8058,
    "lng": -104.701,
    "tier": 2
  },
  {
    "iata": "CAE",
    "name": "Columbia Metropolitan Airport",
    "city": "Columbia",
    "country": "United States",
    "lat": 33.9388,
    "lng": -81.1195,
    "tier": 2
  },
  {
    "iata": "COU",
    "name": "Columbia Regional Airport",
    "city": "Columbia",
    "country": "United States",
    "lat": 38.8181,
    "lng": -92.2196,
    "tier": 3
  },
  {
    "iata": "CMH",
    "name": "John Glenn Columbus International Airport",
    "city": "Columbus",
    "country": "United States",
    "lat": 39.998,
    "lng": -82.8919,
    "tier": 1
  },
  {
    "iata": "CSG",
    "name": "Columbus Metropolitan Airport",
    "city": "Columbus",
    "country": "United States",
    "lat": 32.5163,
    "lng": -84.9389,
    "tier": 3
  },
  {
    "iata": "LCK",
    "name": "Rickenbacker International Airport",
    "city": "Columbus",
    "country": "United States",
    "lat": 39.8138,
    "lng": -82.9278,
    "tier": 3
  },
  {
    "iata": "GTR",
    "name": "Golden Triangle Regional Airport",
    "city": "Columbus Mississippi",
    "country": "United States",
    "lat": 33.4503,
    "lng": -88.5914,
    "tier": 3
  },
  {
    "iata": "CIY",
    "name": "Comiso Airport",
    "city": "Comiso",
    "country": "Italy",
    "lat": 36.9946,
    "lng": 14.6072,
    "tier": 2
  },
  {
    "iata": "CRD",
    "name": "General E. Mosconi Airport",
    "city": "Comodoro Rivadavia",
    "country": "Argentina",
    "lat": -45.7853,
    "lng": -67.4655,
    "tier": 2
  },
  {
    "iata": "YQQ",
    "name": "Comox Airport",
    "city": "Comox",
    "country": "Canada",
    "lat": 49.7108,
    "lng": -124.887,
    "tier": 2
  },
  {
    "iata": "CKY",
    "name": "Conakry International Airport",
    "city": "Conakry",
    "country": "Guinea",
    "lat": 9.5769,
    "lng": -13.612,
    "tier": 2
  },
  {
    "iata": "CDJ",
    "name": "Conceição do Araguaia Airport",
    "city": "Conceicao Do Araguaia",
    "country": "Brazil",
    "lat": -8.3483,
    "lng": -49.3015,
    "tier": 3
  },
  {
    "iata": "CCP",
    "name": "Carriel Sur Airport",
    "city": "Concepcion",
    "country": "Chile",
    "lat": -36.7727,
    "lng": -73.0631,
    "tier": 3
  },
  {
    "iata": "NOC",
    "name": "Ireland West Knock Airport",
    "city": "Connaught",
    "country": "Ireland",
    "lat": 53.9103,
    "lng": -8.8185,
    "tier": 2
  },
  {
    "iata": "VCS",
    "name": "Co Ong Airport",
    "city": "Conson",
    "country": "Vietnam",
    "lat": 8.7318,
    "lng": 106.633,
    "tier": 3
  },
  {
    "iata": "CND",
    "name": "Mihail Kogălniceanu International Airport",
    "city": "Constanta",
    "country": "Romania",
    "lat": 44.3622,
    "lng": 28.4883,
    "tier": 3
  },
  {
    "iata": "CZL",
    "name": "Mohamed Boudiaf International Airport",
    "city": "Constantine",
    "country": "Algeria",
    "lat": 36.276,
    "lng": 6.6204,
    "tier": 2
  },
  {
    "iata": "CPD",
    "name": "Coober Pedy Airport",
    "city": "Coober Pedy",
    "country": "Australia",
    "lat": -29.04,
    "lng": 134.721,
    "tier": 3
  },
  {
    "iata": "OOL",
    "name": "Gold Coast Airport",
    "city": "Coolangatta",
    "country": "Australia",
    "lat": -28.1644,
    "lng": 153.505,
    "tier": 1
  },
  {
    "iata": "CPH",
    "name": "Copenhagen Kastrup Airport",
    "city": "Copenhagen",
    "country": "Denmark",
    "lat": 55.6179,
    "lng": 12.656,
    "tier": 1
  },
  {
    "iata": "CPO",
    "name": "Desierto de Atacama Airport",
    "city": "Copiapo",
    "country": "Chile",
    "lat": -27.2612,
    "lng": -70.7792,
    "tier": 3
  },
  {
    "iata": "YCO",
    "name": "Kugluktuk Airport",
    "city": "Coppermine",
    "country": "Canada",
    "lat": 67.8167,
    "lng": -115.144,
    "tier": 3
  },
  {
    "iata": "YZS",
    "name": "Coral Harbour Airport",
    "city": "Coral Harbour",
    "country": "Canada",
    "lat": 64.1933,
    "lng": -83.3594,
    "tier": 3
  },
  {
    "iata": "COR",
    "name": "Ingeniero Ambrosio Taravella Airport",
    "city": "Cordoba",
    "country": "Argentina",
    "lat": -31.3236,
    "lng": -64.208,
    "tier": 2
  },
  {
    "iata": "CDV",
    "name": "Merle K (Mudhole) Smith Airport",
    "city": "Cordova",
    "country": "United States",
    "lat": 60.4918,
    "lng": -145.478,
    "tier": 3
  },
  {
    "iata": "ORK",
    "name": "Cork Airport",
    "city": "Cork",
    "country": "Ireland",
    "lat": 51.8413,
    "lng": -8.4911,
    "tier": 1
  },
  {
    "iata": "CZE",
    "name": "José Leonardo Chirinos Airport",
    "city": "Coro",
    "country": "Venezuela",
    "lat": 11.4149,
    "lng": -69.6809,
    "tier": 3
  },
  {
    "iata": "CZU",
    "name": "Las Brujas Airport",
    "city": "Corozal",
    "country": "Colombia",
    "lat": 9.3327,
    "lng": -75.2856,
    "tier": 3
  },
  {
    "iata": "CRP",
    "name": "Corpus Christi International Airport",
    "city": "Corpus Christi",
    "country": "United States",
    "lat": 27.7704,
    "lng": -97.5012,
    "tier": 3
  },
  {
    "iata": "CEZ",
    "name": "Cortez Municipal Airport",
    "city": "Cortez",
    "country": "United States",
    "lat": 37.303,
    "lng": -108.628,
    "tier": 3
  },
  {
    "iata": "CMG",
    "name": "Corumbá International Airport",
    "city": "Corumba",
    "country": "Brazil",
    "lat": -19.0119,
    "lng": -57.6714,
    "tier": 3
  },
  {
    "iata": "CVU",
    "name": "Corvo Airport",
    "city": "Corvo",
    "country": "Portugal",
    "lat": 39.6715,
    "lng": -31.1136,
    "tier": 3
  },
  {
    "iata": "CBO",
    "name": "Awang Airport",
    "city": "Cotabato",
    "country": "Philippines",
    "lat": 7.1652,
    "lng": 124.21,
    "tier": 3
  },
  {
    "iata": "COO",
    "name": "Cadjehoun Airport",
    "city": "Cotonou",
    "country": "Benin",
    "lat": 6.3572,
    "lng": 2.3844,
    "tier": 1
  },
  {
    "iata": "CXB",
    "name": "Cox's Bazar Airport",
    "city": "Cox's Bazar",
    "country": "Bangladesh",
    "lat": 21.4522,
    "lng": 91.9639,
    "tier": 3
  },
  {
    "iata": "CZM",
    "name": "Cozumel International Airport",
    "city": "Cozumel",
    "country": "Mexico",
    "lat": 20.5224,
    "lng": -86.9256,
    "tier": 2
  },
  {
    "iata": "CCV",
    "name": "Craig Cove Airport",
    "city": "Craig Cove",
    "country": "Vanuatu",
    "lat": -16.265,
    "lng": 167.924,
    "tier": 3
  },
  {
    "iata": "CRA",
    "name": "Craiova Airport",
    "city": "Craiova",
    "country": "Romania",
    "lat": 44.3181,
    "lng": 23.8886,
    "tier": 3
  },
  {
    "iata": "YXC",
    "name": "Cranbrook/Canadian Rockies International Airport",
    "city": "Cranbrook",
    "country": "Canada",
    "lat": 49.6108,
    "lng": -115.782,
    "tier": 3
  },
  {
    "iata": "CEC",
    "name": "Jack Mc Namara Field Airport",
    "city": "Crescent City",
    "country": "United States",
    "lat": 41.7802,
    "lng": -124.237,
    "tier": 3
  },
  {
    "iata": "CCM",
    "name": "Diomício Freitas Airport",
    "city": "Criciuma",
    "country": "Brazil",
    "lat": -28.7244,
    "lng": -49.4214,
    "tier": 3
  },
  {
    "iata": "CZS",
    "name": "Cruzeiro do Sul Airport",
    "city": "Cruzeiro do Sul",
    "country": "Brazil",
    "lat": -7.5999,
    "lng": -72.7695,
    "tier": 3
  },
  {
    "iata": "CUC",
    "name": "Camilo Daza International Airport",
    "city": "Cucuta",
    "country": "Colombia",
    "lat": 7.9276,
    "lng": -72.5115,
    "tier": 3
  },
  {
    "iata": "CUE",
    "name": "Mariscal Lamar Airport",
    "city": "Cuenca",
    "country": "Ecuador",
    "lat": -2.8895,
    "lng": -78.9844,
    "tier": 3
  },
  {
    "iata": "CGB",
    "name": "Marechal Rondon Airport",
    "city": "Cuiaba",
    "country": "Brazil",
    "lat": -15.6529,
    "lng": -56.1167,
    "tier": 1
  },
  {
    "iata": "CPX",
    "name": "Benjamin Rivera Noriega Airport",
    "city": "Culebra Island",
    "country": "Puerto Rico",
    "lat": 18.3133,
    "lng": -65.3043,
    "tier": 3
  },
  {
    "iata": "CUL",
    "name": "Bachigualato Federal International Airport",
    "city": "Culiacan",
    "country": "Mexico",
    "lat": 24.7645,
    "lng": -107.475,
    "tier": 2
  },
  {
    "iata": "CUM",
    "name": "Cumaná (Antonio José de Sucre) Airport",
    "city": "Cumana",
    "country": "Venezuela",
    "lat": 10.4503,
    "lng": -64.1305,
    "tier": 3
  },
  {
    "iata": "CCC",
    "name": "Jardines Del Rey Airport",
    "city": "Cunagua",
    "country": "Cuba",
    "lat": 22.461,
    "lng": -78.3284,
    "tier": 2
  },
  {
    "iata": "CUF",
    "name": "Cuneo International Airport",
    "city": "Cuneo",
    "country": "Italy",
    "lat": 44.547,
    "lng": 7.6232,
    "tier": 3
  },
  {
    "iata": "CMA",
    "name": "Cunnamulla Airport",
    "city": "Cunnamulla",
    "country": "Australia",
    "lat": -28.03,
    "lng": 145.622,
    "tier": 3
  },
  {
    "iata": "CWB",
    "name": "Afonso Pena Airport",
    "city": "Curitiba",
    "country": "Brazil",
    "lat": -25.5285,
    "lng": -49.1758,
    "tier": 1
  },
  {
    "iata": "CUZ",
    "name": "Alejandro Velasco Astete International Airport",
    "city": "Cuzco",
    "country": "Peru",
    "lat": -13.5357,
    "lng": -71.9388,
    "tier": 2
  },
  {
    "iata": "JNX",
    "name": "Naxos Airport",
    "city": "Cyclades Islands",
    "country": "Greece",
    "lat": 37.0811,
    "lng": 25.3681,
    "tier": 3
  },
  {
    "iata": "DRV",
    "name": "Dharavandhoo Airport",
    "city": "DHARAVANDHOO",
    "country": "Maldives",
    "lat": 5.1561,
    "lng": 73.1302,
    "tier": 3
  },
  {
    "iata": "DKR",
    "name": "Léopold Sédar Senghor International Airport",
    "city": "Dakar",
    "country": "Senegal",
    "lat": 14.7397,
    "lng": -17.4902,
    "tier": 1
  },
  {
    "iata": "VIL",
    "name": "Dakhla Airport",
    "city": "Dakhla",
    "country": "Western Sahara",
    "lat": 23.7183,
    "lng": -15.932,
    "tier": 3
  },
  {
    "iata": "DLM",
    "name": "Dalaman International Airport",
    "city": "Dalaman",
    "country": "Turkey",
    "lat": 36.7131,
    "lng": 28.7925,
    "tier": 1
  },
  {
    "iata": "DLZ",
    "name": "Dalanzadgad Airport",
    "city": "Dalanzadgad",
    "country": "Mongolia",
    "lat": 43.5917,
    "lng": 104.43,
    "tier": 3
  },
  {
    "iata": "DLI",
    "name": "Lien Khuong Airport",
    "city": "Dalat",
    "country": "Vietnam",
    "lat": 11.75,
    "lng": 108.367,
    "tier": 3
  },
  {
    "iata": "DBA",
    "name": "Dalbandin Airport",
    "city": "Dalbandin",
    "country": "Pakistan",
    "lat": 28.8783,
    "lng": 64.3998,
    "tier": 3
  },
  {
    "iata": "DLU",
    "name": "Dali Airport",
    "city": "Dali",
    "country": "China",
    "lat": 25.6494,
    "lng": 100.319,
    "tier": 2
  },
  {
    "iata": "DLC",
    "name": "Zhoushuizi Airport",
    "city": "Dalian",
    "country": "China",
    "lat": 38.9657,
    "lng": 121.539,
    "tier": 1
  },
  {
    "iata": "DAL",
    "name": "Dallas Love Field",
    "city": "Dallas",
    "country": "United States",
    "lat": 32.8471,
    "lng": -96.8518,
    "tier": 1
  },
  {
    "iata": "DFW",
    "name": "Dallas Fort Worth International Airport",
    "city": "Dallas-Fort Worth",
    "country": "United States",
    "lat": 32.8968,
    "lng": -97.038,
    "tier": 1
  },
  {
    "iata": "DMM",
    "name": "King Fahd International Airport",
    "city": "Dammam",
    "country": "Saudi Arabia",
    "lat": 26.4712,
    "lng": 49.7979,
    "tier": 1
  },
  {
    "iata": "DAD",
    "name": "Da Nang International Airport",
    "city": "Danang",
    "country": "Vietnam",
    "lat": 16.0439,
    "lng": 108.199,
    "tier": 1
  },
  {
    "iata": "DDG",
    "name": "Dandong Airport",
    "city": "Dandong",
    "country": "China",
    "lat": 40.0247,
    "lng": 124.286,
    "tier": 3
  },
  {
    "iata": "DCY",
    "name": "Daocheng Yading Airport",
    "city": "Daocheng",
    "country": "China",
    "lat": 29.3231,
    "lng": 100.0533,
    "tier": 3
  },
  {
    "iata": "DQA",
    "name": "Saertu Airport",
    "city": "Daqing",
    "country": "China",
    "lat": 46.7464,
    "lng": 125.1406,
    "tier": 3
  },
  {
    "iata": "DAR",
    "name": "Julius Nyerere International Airport",
    "city": "Dar Es Salaam",
    "country": "Tanzania",
    "lat": -6.8781,
    "lng": 39.2026,
    "tier": 1
  },
  {
    "iata": "DAU",
    "name": "Daru Airport",
    "city": "Daru",
    "country": "Papua New Guinea",
    "lat": -9.0868,
    "lng": 143.208,
    "tier": 3
  },
  {
    "iata": "DRW",
    "name": "Darwin International Airport",
    "city": "Darwin",
    "country": "Australia",
    "lat": -12.4147,
    "lng": 130.877,
    "tier": 1
  },
  {
    "iata": "SRY",
    "name": "Dasht-e Naz Airport",
    "city": "Dasht-e-naz",
    "country": "Iran",
    "lat": 36.6358,
    "lng": 53.1936,
    "tier": 2
  },
  {
    "iata": "DAT",
    "name": "Datong Airport",
    "city": "Datong",
    "country": "China",
    "lat": 40.0603,
    "lng": 113.482,
    "tier": 2
  },
  {
    "iata": "DVO",
    "name": "Francisco Bangoy International Airport",
    "city": "Davao",
    "country": "Philippines",
    "lat": 7.1255,
    "lng": 125.646,
    "tier": 2
  },
  {
    "iata": "DAV",
    "name": "Enrique Malek International Airport",
    "city": "David",
    "country": "Panama",
    "lat": 8.391,
    "lng": -82.435,
    "tier": 3
  },
  {
    "iata": "TVY",
    "name": "Dawei Airport",
    "city": "Dawei",
    "country": "Burma",
    "lat": 14.1039,
    "lng": 98.2036,
    "tier": 3
  },
  {
    "iata": "YDQ",
    "name": "Dawson Creek Airport",
    "city": "Dawson Creek",
    "country": "Canada",
    "lat": 55.7423,
    "lng": -120.183,
    "tier": 3
  },
  {
    "iata": "DYG",
    "name": "Dayong Airport",
    "city": "Dayong",
    "country": "China",
    "lat": 29.1028,
    "lng": 110.443,
    "tier": 2
  },
  {
    "iata": "DAY",
    "name": "James M Cox Dayton International Airport",
    "city": "Dayton",
    "country": "United States",
    "lat": 39.9024,
    "lng": -84.2194,
    "tier": 1
  },
  {
    "iata": "DAB",
    "name": "Daytona Beach International Airport",
    "city": "Daytona Beach",
    "country": "United States",
    "lat": 29.1799,
    "lng": -81.0581,
    "tier": 3
  },
  {
    "iata": "DAX",
    "name": "Dachuan Airport",
    "city": "Dazhou",
    "country": "China",
    "lat": 31.1302,
    "lng": 107.4295,
    "tier": 2
  },
  {
    "iata": "LGI",
    "name": "Deadman's Cay Airport",
    "city": "Dead Man's Cay",
    "country": "Bahamas",
    "lat": 23.179,
    "lng": -75.0936,
    "tier": 3
  },
  {
    "iata": "SCC",
    "name": "Deadhorse Airport",
    "city": "Deadhorse",
    "country": "United States",
    "lat": 70.1947,
    "lng": -148.465,
    "tier": 3
  },
  {
    "iata": "DOL",
    "name": "Deauville-Saint-Gatien Airport",
    "city": "Deauville",
    "country": "France",
    "lat": 49.3653,
    "lng": 0.1543,
    "tier": 3
  },
  {
    "iata": "DEB",
    "name": "Debrecen International Airport",
    "city": "Debrecen",
    "country": "Hungary",
    "lat": 47.4889,
    "lng": 21.6153,
    "tier": 3
  },
  {
    "iata": "DEC",
    "name": "Decatur Airport",
    "city": "Decatur",
    "country": "United States",
    "lat": 39.8346,
    "lng": -88.8657,
    "tier": 3
  },
  {
    "iata": "YDF",
    "name": "Deer Lake Airport",
    "city": "Deer Lake",
    "country": "Canada",
    "lat": 49.2108,
    "lng": -57.3914,
    "tier": 2
  },
  {
    "iata": "YVZ",
    "name": "Deer Lake Airport",
    "city": "Deer Lake",
    "country": "Canada",
    "lat": 52.6558,
    "lng": -94.0614,
    "tier": 3
  },
  {
    "iata": "DRG",
    "name": "Deering Airport",
    "city": "Deering",
    "country": "United States",
    "lat": 66.0696,
    "lng": -162.766,
    "tier": 3
  },
  {
    "iata": "DED",
    "name": "Dehradun Airport",
    "city": "Dehra Dun",
    "country": "India",
    "lat": 30.1897,
    "lng": 78.1803,
    "tier": 3
  },
  {
    "iata": "BJX",
    "name": "Del Bajío International Airport",
    "city": "Del Bajio",
    "country": "Mexico",
    "lat": 20.9935,
    "lng": -101.481,
    "tier": 2
  },
  {
    "iata": "DEL",
    "name": "Indira Gandhi International Airport",
    "city": "Delhi",
    "country": "India",
    "lat": 28.5665,
    "lng": 77.1031,
    "tier": 1
  },
  {
    "iata": "YWJ",
    "name": "Déline Airport",
    "city": "Deline",
    "country": "Canada",
    "lat": 65.2111,
    "lng": -123.436,
    "tier": 3
  },
  {
    "iata": "DNZ",
    "name": "Çardak Airport",
    "city": "Denizli",
    "country": "Turkey",
    "lat": 37.7856,
    "lng": 29.7013,
    "tier": 3
  },
  {
    "iata": "DPS",
    "name": "Ngurah Rai (Bali) International Airport",
    "city": "Denpasar",
    "country": "Indonesia",
    "lat": -8.7482,
    "lng": 115.167,
    "tier": 1
  },
  {
    "iata": "DEN",
    "name": "Denver International Airport",
    "city": "Denver",
    "country": "United States",
    "lat": 39.8617,
    "lng": -104.673,
    "tier": 1
  },
  {
    "iata": "DEA",
    "name": "Dera Ghazi Khan Airport",
    "city": "Dera Ghazi Khan",
    "country": "Pakistan",
    "lat": 29.961,
    "lng": 70.4859,
    "tier": 3
  },
  {
    "iata": "DSK",
    "name": "Dera Ismael Khan Airport",
    "city": "Dera Ismael Khan",
    "country": "Pakistan",
    "lat": 31.9094,
    "lng": 70.8966,
    "tier": 3
  },
  {
    "iata": "DCN",
    "name": "RAAF Base Curtin",
    "city": "Derby",
    "country": "Australia",
    "lat": -17.5814,
    "lng": 123.828,
    "tier": 3
  },
  {
    "iata": "DSM",
    "name": "Des Moines International Airport",
    "city": "Des Moines",
    "country": "United States",
    "lat": 41.534,
    "lng": -93.6631,
    "tier": 1
  },
  {
    "iata": "DTW",
    "name": "Detroit Metropolitan Wayne County Airport",
    "city": "Detroit",
    "country": "United States",
    "lat": 42.2124,
    "lng": -83.3534,
    "tier": 1
  },
  {
    "iata": "DPO",
    "name": "Devonport Airport",
    "city": "Devonport",
    "country": "Australia",
    "lat": -41.1697,
    "lng": 146.43,
    "tier": 3
  },
  {
    "iata": "DEF",
    "name": "Dezful Airport",
    "city": "Dezful",
    "country": "Iran",
    "lat": 32.4344,
    "lng": 48.3976,
    "tier": 3
  },
  {
    "iata": "DAC",
    "name": "Hazrat Shahjalal International Airport",
    "city": "Dhaka",
    "country": "Bangladesh",
    "lat": 23.8433,
    "lng": 90.3978,
    "tier": 1
  },
  {
    "iata": "DHI",
    "name": "Dhangarhi Airport",
    "city": "Dhangarhi",
    "country": "Nepal",
    "lat": 28.7533,
    "lng": 80.5819,
    "tier": 3
  },
  {
    "iata": "DIK",
    "name": "Dickinson Theodore Roosevelt Regional Airport",
    "city": "Dickinson",
    "country": "United States",
    "lat": 46.7974,
    "lng": -102.802,
    "tier": 3
  },
  {
    "iata": "DIN",
    "name": "Dien Bien Phu Airport",
    "city": "Dienbienphu",
    "country": "Vietnam",
    "lat": 21.3975,
    "lng": 103.008,
    "tier": 3
  },
  {
    "iata": "DIJ",
    "name": "Dijon-Bourgogne Airport",
    "city": "Dijon",
    "country": "France",
    "lat": 47.2689,
    "lng": 5.09,
    "tier": 3
  },
  {
    "iata": "DIL",
    "name": "Presidente Nicolau Lobato International Airport",
    "city": "Dili",
    "country": "East Timor",
    "lat": -8.5464,
    "lng": 125.526,
    "tier": 3
  },
  {
    "iata": "DLG",
    "name": "Dillingham Airport",
    "city": "Dillingham",
    "country": "United States",
    "lat": 59.0447,
    "lng": -158.505,
    "tier": 3
  },
  {
    "iata": "DLY",
    "name": "Dillon's Bay Airport",
    "city": "Dillon's Bay",
    "country": "Vanuatu",
    "lat": -18.7694,
    "lng": 169.001,
    "tier": 3
  },
  {
    "iata": "DMU",
    "name": "Dimapur Airport",
    "city": "Dimapur",
    "country": "India",
    "lat": 25.8839,
    "lng": 93.7711,
    "tier": 3
  },
  {
    "iata": "DNR",
    "name": "Dinard-Pleurtuit-Saint-Malo Airport",
    "city": "Dinard",
    "country": "France",
    "lat": 48.5877,
    "lng": -2.08,
    "tier": 3
  },
  {
    "iata": "DPL",
    "name": "Dipolog Airport",
    "city": "Dipolog",
    "country": "Philippines",
    "lat": 8.602,
    "lng": 123.3419,
    "tier": 3
  },
  {
    "iata": "DIR",
    "name": "Aba Tenna Dejazmach Yilma International Airport",
    "city": "Dire Dawa",
    "country": "Ethiopia",
    "lat": 9.6247,
    "lng": 41.8542,
    "tier": 3
  },
  {
    "iata": "DIU",
    "name": "Diu Airport",
    "city": "Diu",
    "country": "India",
    "lat": 20.7131,
    "lng": 70.9211,
    "tier": 3
  },
  {
    "iata": "DIY",
    "name": "Diyarbakir Airport",
    "city": "Diyabakir",
    "country": "Turkey",
    "lat": 37.8939,
    "lng": 40.201,
    "tier": 2
  },
  {
    "iata": "DJG",
    "name": "Djanet Inedbirene Airport",
    "city": "Djanet",
    "country": "Algeria",
    "lat": 24.2928,
    "lng": 9.4524,
    "tier": 3
  },
  {
    "iata": "DJE",
    "name": "Djerba Zarzis International Airport",
    "city": "Djerba",
    "country": "Tunisia",
    "lat": 33.875,
    "lng": 10.7755,
    "tier": 1
  },
  {
    "iata": "JIB",
    "name": "Djibouti-Ambouli Airport",
    "city": "Djibouti",
    "country": "Djibouti",
    "lat": 11.5473,
    "lng": 43.1595,
    "tier": 2
  },
  {
    "iata": "DNK",
    "name": "Dnipropetrovsk International Airport",
    "city": "Dnepropetrovsk",
    "country": "Ukraine",
    "lat": 48.3572,
    "lng": 35.1006,
    "tier": 2
  },
  {
    "iata": "DOB",
    "name": "Rar Gwamar Airport",
    "city": "Dobo",
    "country": "Indonesia",
    "lat": -5.7722,
    "lng": 134.212,
    "tier": 3
  },
  {
    "iata": "DDC",
    "name": "Dodge City Regional Airport",
    "city": "Dodge City",
    "country": "United States",
    "lat": 37.7634,
    "lng": -99.9656,
    "tier": 3
  },
  {
    "iata": "DOH",
    "name": "Hamad International Airport",
    "city": "Doha",
    "country": "Qatar",
    "lat": 25.2731,
    "lng": 51.6081,
    "tier": 1
  },
  {
    "iata": "DLE",
    "name": "Dole-Tavaux Airport",
    "city": "Dole",
    "country": "France",
    "lat": 47.0427,
    "lng": 5.4351,
    "tier": 3
  },
  {
    "iata": "DOM",
    "name": "Douglas-Charles Airport",
    "city": "Dominica",
    "country": "Dominica",
    "lat": 15.547,
    "lng": -61.3,
    "tier": 2
  },
  {
    "iata": "DSA",
    "name": "Robin Hood Doncaster Sheffield Airport",
    "city": "Doncaster, Sheffield",
    "country": "United Kingdom",
    "lat": 53.4805,
    "lng": -1.0107,
    "tier": 2
  },
  {
    "iata": "DOK",
    "name": "Donetsk International Airport",
    "city": "Donetsk",
    "country": "Ukraine",
    "lat": 48.0736,
    "lng": 37.7397,
    "tier": 2
  },
  {
    "iata": "VDH",
    "name": "Dong Hoi Airport",
    "city": "Dong Hoi",
    "country": "Vietnam",
    "lat": 17.515,
    "lng": 106.5906,
    "tier": 3
  },
  {
    "iata": "CFN",
    "name": "Donegal Airport",
    "city": "Dongloe",
    "country": "Ireland",
    "lat": 55.0442,
    "lng": -8.341,
    "tier": 3
  },
  {
    "iata": "DSN",
    "name": "Ordos Ejin Horo Airport",
    "city": "Dongsheng",
    "country": "China",
    "lat": 39.49,
    "lng": 109.8614,
    "tier": 2
  },
  {
    "iata": "DOY",
    "name": "Dongying Shengli Airport",
    "city": "Dongying",
    "country": "China",
    "lat": 37.5086,
    "lng": 118.788,
    "tier": 2
  },
  {
    "iata": "DMD",
    "name": "Doomadgee Airport",
    "city": "Doomadgee",
    "country": "Australia",
    "lat": -17.9403,
    "lng": 138.822,
    "tier": 3
  },
  {
    "iata": "DTM",
    "name": "Dortmund Airport",
    "city": "Dortmund",
    "country": "Germany",
    "lat": 51.5183,
    "lng": 7.6122,
    "tier": 1
  },
  {
    "iata": "DHN",
    "name": "Dothan Regional Airport",
    "city": "Dothan",
    "country": "United States",
    "lat": 31.3213,
    "lng": -85.4496,
    "tier": 3
  },
  {
    "iata": "DLA",
    "name": "Douala International Airport",
    "city": "Douala",
    "country": "Cameroon",
    "lat": 4.0061,
    "lng": 9.7195,
    "tier": 1
  },
  {
    "iata": "DOU",
    "name": "Dourados Airport",
    "city": "Dourados",
    "country": "Brazil",
    "lat": -22.2019,
    "lng": -54.9266,
    "tier": 3
  },
  {
    "iata": "DRS",
    "name": "Dresden Airport",
    "city": "Dresden",
    "country": "Germany",
    "lat": 51.1328,
    "lng": 13.7672,
    "tier": 2
  },
  {
    "iata": "YHD",
    "name": "Dryden Regional Airport",
    "city": "Dryden",
    "country": "Canada",
    "lat": 49.8317,
    "lng": -92.7442,
    "tier": 3
  },
  {
    "iata": "DUJ",
    "name": "DuBois Regional Airport",
    "city": "Du Bois",
    "country": "United States",
    "lat": 41.1783,
    "lng": -78.8987,
    "tier": 3
  },
  {
    "iata": "DWC",
    "name": "Al Maktoum International Airport",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "lat": 24.8964,
    "lng": 55.1614,
    "tier": 1
  },
  {
    "iata": "DXB",
    "name": "Dubai International Airport",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "lat": 25.2528,
    "lng": 55.3644,
    "tier": 1
  },
  {
    "iata": "DBO",
    "name": "Dubbo City Regional Airport",
    "city": "Dubbo",
    "country": "Australia",
    "lat": -32.2167,
    "lng": 148.575,
    "tier": 3
  },
  {
    "iata": "DUB",
    "name": "Dublin Airport",
    "city": "Dublin",
    "country": "Ireland",
    "lat": 53.4213,
    "lng": -6.2701,
    "tier": 1
  },
  {
    "iata": "DBV",
    "name": "Dubrovnik Airport",
    "city": "Dubrovnik",
    "country": "Croatia",
    "lat": 42.5614,
    "lng": 18.2682,
    "tier": 1
  },
  {
    "iata": "DBQ",
    "name": "Dubuque Regional Airport",
    "city": "Dubuque IA",
    "country": "United States",
    "lat": 42.402,
    "lng": -90.7095,
    "tier": 3
  },
  {
    "iata": "DUS",
    "name": "Düsseldorf Airport",
    "city": "Duesseldorf",
    "country": "Germany",
    "lat": 51.2895,
    "lng": 6.7668,
    "tier": 1
  },
  {
    "iata": "DLH",
    "name": "Duluth International Airport",
    "city": "Duluth",
    "country": "United States",
    "lat": 46.8421,
    "lng": -92.1936,
    "tier": 3
  },
  {
    "iata": "DGT",
    "name": "Sibulan Airport",
    "city": "Dumaguete",
    "country": "Philippines",
    "lat": 9.3337,
    "lng": 123.3,
    "tier": 3
  },
  {
    "iata": "DND",
    "name": "Dundee Airport",
    "city": "Dundee",
    "country": "United Kingdom",
    "lat": 56.4525,
    "lng": -3.0258,
    "tier": 3
  },
  {
    "iata": "DUD",
    "name": "Dunedin Airport",
    "city": "Dunedin",
    "country": "New Zealand",
    "lat": -45.9281,
    "lng": 170.198,
    "tier": 3
  },
  {
    "iata": "DNH",
    "name": "Dunhuang Airport",
    "city": "Dunhuang",
    "country": "China",
    "lat": 40.1611,
    "lng": 94.8092,
    "tier": 2
  },
  {
    "iata": "DGO",
    "name": "General Guadalupe Victoria International Airport",
    "city": "Durango",
    "country": "Mexico",
    "lat": 24.1242,
    "lng": -104.528,
    "tier": 3
  },
  {
    "iata": "DRO",
    "name": "Durango La Plata County Airport",
    "city": "Durango",
    "country": "United States",
    "lat": 37.1515,
    "lng": -107.754,
    "tier": 3
  },
  {
    "iata": "DUR",
    "name": "King Shaka International Airport",
    "city": "Durban",
    "country": "South Africa",
    "lat": -29.6144,
    "lng": 31.1197,
    "tier": 2
  },
  {
    "iata": "DYU",
    "name": "Dushanbe Airport",
    "city": "Dushanbe",
    "country": "Tajikistan",
    "lat": 38.5433,
    "lng": 68.825,
    "tier": 1
  },
  {
    "iata": "DZA",
    "name": "Dzaoudzi Pamandzi International Airport",
    "city": "Dzaoudzi",
    "country": "Mayotte",
    "lat": -12.8047,
    "lng": 45.2811,
    "tier": 2
  },
  {
    "iata": "DMB",
    "name": "Taraz Airport",
    "city": "Dzhambul",
    "country": "Kazakhstan",
    "lat": 42.8536,
    "lng": 71.3036,
    "tier": 3
  },
  {
    "iata": "ELS",
    "name": "Ben Schoeman Airport",
    "city": "East London",
    "country": "South Africa",
    "lat": -33.0356,
    "lng": 27.8259,
    "tier": 3
  },
  {
    "iata": "EMA",
    "name": "East Midlands Airport",
    "city": "East Midlands",
    "country": "United Kingdom",
    "lat": 52.8311,
    "lng": -1.3281,
    "tier": 1
  },
  {
    "iata": "IPC",
    "name": "Mataveri Airport",
    "city": "Easter Island",
    "country": "Chile",
    "lat": -27.1648,
    "lng": -109.422,
    "tier": 3
  },
  {
    "iata": "ZEM",
    "name": "Eastmain River Airport",
    "city": "Eastmain River",
    "country": "Canada",
    "lat": 52.2264,
    "lng": -78.5225,
    "tier": 3
  },
  {
    "iata": "ESD",
    "name": "Orcas Island Airport",
    "city": "Eastsound",
    "country": "United States",
    "lat": 48.7082,
    "lng": -122.91,
    "tier": 3
  },
  {
    "iata": "EAU",
    "name": "Chippewa Valley Regional Airport",
    "city": "Eau Claire",
    "country": "United States",
    "lat": 44.8658,
    "lng": -91.4843,
    "tier": 3
  },
  {
    "iata": "CFK",
    "name": "Ech Cheliff Airport",
    "city": "Ech-cheliff",
    "country": "Algeria",
    "lat": 36.2127,
    "lng": 1.3318,
    "tier": 3
  },
  {
    "iata": "EOI",
    "name": "Eday Airport",
    "city": "Eday",
    "country": "United Kingdom",
    "lat": 59.1906,
    "lng": -2.7722,
    "tier": 3
  },
  {
    "iata": "EDI",
    "name": "Edinburgh Airport",
    "city": "Edinburgh",
    "country": "United Kingdom",
    "lat": 55.95,
    "lng": -3.3725,
    "tier": 1
  },
  {
    "iata": "YEG",
    "name": "Edmonton International Airport",
    "city": "Edmonton",
    "country": "Canada",
    "lat": 53.3097,
    "lng": -113.58,
    "tier": 1
  },
  {
    "iata": "EEK",
    "name": "Eek Airport",
    "city": "Eek",
    "country": "United States",
    "lat": 60.2137,
    "lng": -162.0439,
    "tier": 3
  },
  {
    "iata": "EGX",
    "name": "Egegik Airport",
    "city": "Egegik",
    "country": "United States",
    "lat": 58.1855,
    "lng": -157.375,
    "tier": 3
  },
  {
    "iata": "EGS",
    "name": "Egilsstaðir Airport",
    "city": "Egilsstadir",
    "country": "Iceland",
    "lat": 65.2833,
    "lng": -14.4014,
    "tier": 3
  },
  {
    "iata": "EIN",
    "name": "Eindhoven Airport",
    "city": "Eindhoven",
    "country": "Netherlands",
    "lat": 51.4501,
    "lng": 5.3745,
    "tier": 1
  },
  {
    "iata": "ERN",
    "name": "Eirunepé Airport",
    "city": "Eirunepe",
    "country": "Brazil",
    "lat": -6.6395,
    "lng": -69.8798,
    "tier": 3
  },
  {
    "iata": "EUN",
    "name": "Hassan I Airport",
    "city": "El Aaiún",
    "country": "Western Sahara",
    "lat": 27.1517,
    "lng": -13.2192,
    "tier": 3
  },
  {
    "iata": "NDR",
    "name": "Nador International Airport",
    "city": "El Aroui",
    "country": "Morocco",
    "lat": 34.9888,
    "lng": -3.0282,
    "tier": 2
  },
  {
    "iata": "EBH",
    "name": "El Bayadh Airport",
    "city": "El Bayadh",
    "country": "Algeria",
    "lat": 33.7217,
    "lng": 1.0925,
    "tier": 3
  },
  {
    "iata": "FTE",
    "name": "El Calafate Airport",
    "city": "El Calafate",
    "country": "Argentina",
    "lat": -50.2803,
    "lng": -72.0531,
    "tier": 3
  },
  {
    "iata": "ELD",
    "name": "South Arkansas Regional At Goodwin Field",
    "city": "El Dorado",
    "country": "United States",
    "lat": 33.221,
    "lng": -92.8133,
    "tier": 3
  },
  {
    "iata": "ELF",
    "name": "El Fasher Airport",
    "city": "El Fasher",
    "country": "Sudan",
    "lat": 13.6149,
    "lng": 25.3246,
    "tier": 3
  },
  {
    "iata": "ELG",
    "name": "El Golea Airport",
    "city": "El Golea",
    "country": "Algeria",
    "lat": 30.5713,
    "lng": 2.8596,
    "tier": 3
  },
  {
    "iata": "ELP",
    "name": "El Paso International Airport",
    "city": "El Paso",
    "country": "United States",
    "lat": 31.8072,
    "lng": -106.378,
    "tier": 2
  },
  {
    "iata": "VIG",
    "name": "Juan Pablo Pérez Alfonso Airport",
    "city": "El Vigía",
    "country": "Venezuela",
    "lat": 8.6241,
    "lng": -71.6727,
    "tier": 3
  },
  {
    "iata": "ABT",
    "name": "Al Baha Airport",
    "city": "El-baha",
    "country": "Saudi Arabia",
    "lat": 20.2961,
    "lng": 41.6343,
    "tier": 3
  },
  {
    "iata": "ETH",
    "name": "Eilat Airport",
    "city": "Elat",
    "country": "Israel",
    "lat": 29.5613,
    "lng": 34.9601,
    "tier": 3
  },
  {
    "iata": "EZS",
    "name": "Elazığ Airport",
    "city": "Elazig",
    "country": "Turkey",
    "lat": 38.6069,
    "lng": 39.2914,
    "tier": 2
  },
  {
    "iata": "ELC",
    "name": "Elcho Island Airport",
    "city": "Elcho Island",
    "country": "Australia",
    "lat": -12.0194,
    "lng": 135.571,
    "tier": 3
  },
  {
    "iata": "EDL",
    "name": "Eldoret International Airport",
    "city": "Eldoret",
    "country": "Kenya",
    "lat": 0.4045,
    "lng": 35.2389,
    "tier": 3
  },
  {
    "iata": "ELV",
    "name": "Elfin Cove Seaplane Base",
    "city": "Elfin Cove",
    "country": "United States",
    "lat": 58.1952,
    "lng": -136.347,
    "tier": 3
  },
  {
    "iata": "ELI",
    "name": "Elim Airport",
    "city": "Elim",
    "country": "United States",
    "lat": 64.6147,
    "lng": -162.272,
    "tier": 3
  },
  {
    "iata": "ESL",
    "name": "Elista Airport",
    "city": "Elista",
    "country": "Russia",
    "lat": 46.3739,
    "lng": 44.3309,
    "tier": 3
  },
  {
    "iata": "EKO",
    "name": "Elko Regional Airport",
    "city": "Elko",
    "country": "United States",
    "lat": 40.8249,
    "lng": -115.792,
    "tier": 3
  },
  {
    "iata": "ELM",
    "name": "Elmira Corning Regional Airport",
    "city": "Elmira",
    "country": "United States",
    "lat": 42.1599,
    "lng": -76.8916,
    "tier": 2
  },
  {
    "iata": "EMD",
    "name": "Emerald Airport",
    "city": "Emerald",
    "country": "Australia",
    "lat": -23.5675,
    "lng": 148.179,
    "tier": 3
  },
  {
    "iata": "EMK",
    "name": "Emmonak Airport",
    "city": "Emmonak",
    "country": "United States",
    "lat": 62.7861,
    "lng": -164.491,
    "tier": 3
  },
  {
    "iata": "ENE",
    "name": "Ende (H Hasan Aroeboesman) Airport",
    "city": "Ende",
    "country": "Indonesia",
    "lat": -8.8493,
    "lng": 121.661,
    "tier": 3
  },
  {
    "iata": "NBE",
    "name": "Enfidha - Hammamet International Airport",
    "city": "Enfidha",
    "country": "Tunisia",
    "lat": 36.0758,
    "lng": 10.4386,
    "tier": 1
  },
  {
    "iata": "ENH",
    "name": "Enshi Airport",
    "city": "Enshi",
    "country": "China",
    "lat": 30.3203,
    "lng": 109.485,
    "tier": 3
  },
  {
    "iata": "EBB",
    "name": "Entebbe International Airport",
    "city": "Entebbe",
    "country": "Uganda",
    "lat": 0.0424,
    "lng": 32.4435,
    "tier": 1
  },
  {
    "iata": "ENU",
    "name": "Akanu Ibiam International Airport",
    "city": "Enugu",
    "country": "Nigeria",
    "lat": 6.4743,
    "lng": 7.562,
    "tier": 3
  },
  {
    "iata": "QFG",
    "name": "Eqalugaarsuit Heliport",
    "city": "Eqalugaarsuit",
    "country": "Greenland",
    "lat": 60.6197,
    "lng": -45.9141,
    "tier": 3
  },
  {
    "iata": "EBL",
    "name": "Erbil International Airport",
    "city": "Erbil",
    "country": "Iraq",
    "lat": 36.2376,
    "lng": 43.9632,
    "tier": 1
  },
  {
    "iata": "ERM",
    "name": "Erechim Airport",
    "city": "Erechim",
    "country": "Brazil",
    "lat": -27.6619,
    "lng": -52.2683,
    "tier": 3
  },
  {
    "iata": "ERL",
    "name": "Erenhot Saiwusu International Airport",
    "city": "Erenhot",
    "country": "China",
    "lat": 43.4225,
    "lng": 112.0967,
    "tier": 3
  },
  {
    "iata": "ERF",
    "name": "Erfurt Airport",
    "city": "Erfurt",
    "country": "Germany",
    "lat": 50.9798,
    "lng": 10.9581,
    "tier": 2
  },
  {
    "iata": "ERI",
    "name": "Erie International Tom Ridge Field",
    "city": "Erie",
    "country": "United States",
    "lat": 42.0831,
    "lng": -80.1739,
    "tier": 3
  },
  {
    "iata": "ERC",
    "name": "Erzincan Airport",
    "city": "Erzincan",
    "country": "Turkey",
    "lat": 39.7102,
    "lng": 39.527,
    "tier": 3
  },
  {
    "iata": "ERZ",
    "name": "Erzurum International Airport",
    "city": "Erzurum",
    "country": "Turkey",
    "lat": 39.9565,
    "lng": 41.1702,
    "tier": 3
  },
  {
    "iata": "EBJ",
    "name": "Esbjerg Airport",
    "city": "Esbjerg",
    "country": "Denmark",
    "lat": 55.5259,
    "lng": 8.5534,
    "tier": 3
  },
  {
    "iata": "ESC",
    "name": "Delta County Airport",
    "city": "Escanaba",
    "country": "United States",
    "lat": 45.7227,
    "lng": -87.0937,
    "tier": 3
  },
  {
    "iata": "IFN",
    "name": "Esfahan Shahid Beheshti International Airport",
    "city": "Esfahan",
    "country": "Iran",
    "lat": 32.7508,
    "lng": 51.8613,
    "tier": 2
  },
  {
    "iata": "YEK",
    "name": "Arviat Airport",
    "city": "Eskimo Point",
    "country": "Canada",
    "lat": 61.0942,
    "lng": -94.0708,
    "tier": 2
  },
  {
    "iata": "AOE",
    "name": "Anadolu Airport",
    "city": "Eskissehir",
    "country": "Turkey",
    "lat": 39.8099,
    "lng": 30.5194,
    "tier": 3
  },
  {
    "iata": "ESM",
    "name": "General Rivadeneira Airport",
    "city": "Esmeraldas",
    "country": "Ecuador",
    "lat": 0.9785,
    "lng": -79.6266,
    "tier": 3
  },
  {
    "iata": "EPR",
    "name": "Esperance Airport",
    "city": "Esperance",
    "country": "Australia",
    "lat": -33.6844,
    "lng": 121.823,
    "tier": 3
  },
  {
    "iata": "EQS",
    "name": "Brigadier Antonio Parodi Airport",
    "city": "Esquel",
    "country": "Argentina",
    "lat": -42.908,
    "lng": -71.1395,
    "tier": 3
  },
  {
    "iata": "ESU",
    "name": "Mogador Airport",
    "city": "Essadouira",
    "country": "Morocco",
    "lat": 31.3975,
    "lng": -9.6817,
    "tier": 3
  },
  {
    "iata": "EUG",
    "name": "Mahlon Sweet Field",
    "city": "Eugene",
    "country": "United States",
    "lat": 44.1246,
    "lng": -123.212,
    "tier": 2
  },
  {
    "iata": "EVV",
    "name": "Evansville Regional Airport",
    "city": "Evansville",
    "country": "United States",
    "lat": 38.037,
    "lng": -87.5324,
    "tier": 2
  },
  {
    "iata": "EXT",
    "name": "Exeter International Airport",
    "city": "Exeter",
    "country": "United Kingdom",
    "lat": 50.7344,
    "lng": -3.4139,
    "tier": 2
  },
  {
    "iata": "VDB",
    "name": "Leirin Airport",
    "city": "Fagernes",
    "country": "Norway",
    "lat": 61.0156,
    "lng": 9.2881,
    "tier": 3
  },
  {
    "iata": "FAI",
    "name": "Fairbanks International Airport",
    "city": "Fairbanks",
    "country": "United States",
    "lat": 64.8151,
    "lng": -147.856,
    "tier": 2
  },
  {
    "iata": "LYP",
    "name": "Faisalabad International Airport",
    "city": "Faisalabad",
    "country": "Pakistan",
    "lat": 31.365,
    "lng": 72.9948,
    "tier": 3
  },
  {
    "iata": "FKQ",
    "name": "Fakfak Airport",
    "city": "Fak Fak",
    "country": "Indonesia",
    "lat": -2.9202,
    "lng": 132.267,
    "tier": 3
  },
  {
    "iata": "FAV",
    "name": "Fakarava Airport",
    "city": "Fakarava",
    "country": "French Polynesia",
    "lat": -16.0541,
    "lng": -145.657,
    "tier": 3
  },
  {
    "iata": "APW",
    "name": "Faleolo International Airport",
    "city": "Faleolo",
    "country": "Samoa",
    "lat": -13.83,
    "lng": -172.008,
    "tier": 3
  },
  {
    "iata": "KFP",
    "name": "False Pass Airport",
    "city": "False Pass",
    "country": "United States",
    "lat": 54.8474,
    "lng": -163.41,
    "tier": 3
  },
  {
    "iata": "FAR",
    "name": "Hector International Airport",
    "city": "Fargo",
    "country": "United States",
    "lat": 46.9207,
    "lng": -96.8158,
    "tier": 2
  },
  {
    "iata": "FMN",
    "name": "Four Corners Regional Airport",
    "city": "Farmington",
    "country": "United States",
    "lat": 36.7412,
    "lng": -108.23,
    "tier": 2
  },
  {
    "iata": "FAO",
    "name": "Faro Airport",
    "city": "Faro",
    "country": "Portugal",
    "lat": 37.0144,
    "lng": -7.9659,
    "tier": 1
  },
  {
    "iata": "FAY",
    "name": "Fayetteville Regional Grannis Field",
    "city": "Fayetteville",
    "country": "United States",
    "lat": 34.9912,
    "lng": -78.8803,
    "tier": 2
  },
  {
    "iata": "TTT",
    "name": "Taitung Airport",
    "city": "Fengnin",
    "country": "Taiwan",
    "lat": 22.755,
    "lng": 121.102,
    "tier": 3
  },
  {
    "iata": "FRE",
    "name": "Fera/Maringe Airport",
    "city": "Fera Island",
    "country": "Solomon Islands",
    "lat": -8.1075,
    "lng": 159.577,
    "tier": 3
  },
  {
    "iata": "FEG",
    "name": "Fergana International Airport",
    "city": "Fergana",
    "country": "Uzbekistan",
    "lat": 40.3588,
    "lng": 71.745,
    "tier": 2
  },
  {
    "iata": "FEN",
    "name": "Fernando de Noronha Airport",
    "city": "Fernando Do Noronha",
    "country": "Brazil",
    "lat": -3.8549,
    "lng": -32.4233,
    "tier": 3
  },
  {
    "iata": "FEZ",
    "name": "Saïss Airport",
    "city": "Fes",
    "country": "Morocco",
    "lat": 33.9273,
    "lng": -4.978,
    "tier": 2
  },
  {
    "iata": "FSC",
    "name": "Figari Sud-Corse Airport",
    "city": "Figari",
    "country": "France",
    "lat": 41.5006,
    "lng": 9.0978,
    "tier": 2
  },
  {
    "iata": "FLG",
    "name": "Flagstaff Pulliam Airport",
    "city": "Flagstaff",
    "country": "United States",
    "lat": 35.1385,
    "lng": -111.671,
    "tier": 3
  },
  {
    "iata": "YFO",
    "name": "Flin Flon Airport",
    "city": "Flin Flon",
    "country": "Canada",
    "lat": 54.6781,
    "lng": -101.682,
    "tier": 3
  },
  {
    "iata": "FLS",
    "name": "Flinders Island Airport",
    "city": "Flinders Island",
    "country": "Australia",
    "lat": -40.0917,
    "lng": 147.993,
    "tier": 3
  },
  {
    "iata": "FNT",
    "name": "Bishop International Airport",
    "city": "Flint",
    "country": "United States",
    "lat": 42.9654,
    "lng": -83.7436,
    "tier": 2
  },
  {
    "iata": "FLO",
    "name": "Florence Regional Airport",
    "city": "Florence",
    "country": "United States",
    "lat": 34.1854,
    "lng": -79.7239,
    "tier": 3
  },
  {
    "iata": "FLR",
    "name": "Peretola Airport",
    "city": "Florence",
    "country": "Italy",
    "lat": 43.81,
    "lng": 11.2051,
    "tier": 1
  },
  {
    "iata": "FLA",
    "name": "Gustavo Artunduaga Paredes Airport",
    "city": "Florencia",
    "country": "Colombia",
    "lat": 1.5892,
    "lng": -75.5644,
    "tier": 3
  },
  {
    "iata": "FLW",
    "name": "Flores Airport",
    "city": "Flores",
    "country": "Portugal",
    "lat": 39.4553,
    "lng": -31.1314,
    "tier": 3
  },
  {
    "iata": "FRS",
    "name": "Mundo Maya International Airport",
    "city": "Flores",
    "country": "Guatemala",
    "lat": 16.9138,
    "lng": -89.8664,
    "tier": 3
  },
  {
    "iata": "FLN",
    "name": "Hercílio Luz International Airport",
    "city": "Florianopolis",
    "country": "Brazil",
    "lat": -27.6703,
    "lng": -48.5525,
    "tier": 2
  },
  {
    "iata": "FRO",
    "name": "Florø Airport",
    "city": "Floro",
    "country": "Norway",
    "lat": 61.5836,
    "lng": 5.0247,
    "tier": 3
  },
  {
    "iata": "FMA",
    "name": "Formosa Airport",
    "city": "Formosa",
    "country": "Argentina",
    "lat": -26.2127,
    "lng": -58.2281,
    "tier": 3
  },
  {
    "iata": "YFA",
    "name": "Fort Albany Airport",
    "city": "Fort Albany",
    "country": "Canada",
    "lat": 52.2014,
    "lng": -81.6969,
    "tier": 3
  },
  {
    "iata": "YPY",
    "name": "Fort Chipewyan Airport",
    "city": "Fort Chipewyan",
    "country": "Canada",
    "lat": 58.7672,
    "lng": -111.117,
    "tier": 3
  },
  {
    "iata": "YAG",
    "name": "Fort Frances Municipal Airport",
    "city": "Fort Frances",
    "country": "Canada",
    "lat": 48.6542,
    "lng": -93.4397,
    "tier": 3
  },
  {
    "iata": "YGH",
    "name": "Fort Good Hope Airport",
    "city": "Fort Good Hope",
    "country": "Canada",
    "lat": 66.2408,
    "lng": -128.651,
    "tier": 3
  },
  {
    "iata": "YFH",
    "name": "Fort Hope Airport",
    "city": "Fort Hope",
    "country": "Canada",
    "lat": 51.5619,
    "lng": -87.9078,
    "tier": 3
  },
  {
    "iata": "FLL",
    "name": "Fort Lauderdale Hollywood International Airport",
    "city": "Fort Lauderdale",
    "country": "United States",
    "lat": 26.0726,
    "lng": -80.1527,
    "tier": 1
  },
  {
    "iata": "TBN",
    "name": "Waynesville-St. Robert Regional Forney field",
    "city": "Fort Leonardwood",
    "country": "United States",
    "lat": 37.7416,
    "lng": -92.1407,
    "tier": 3
  },
  {
    "iata": "YMM",
    "name": "Fort McMurray Airport",
    "city": "Fort Mcmurray",
    "country": "Canada",
    "lat": 56.6533,
    "lng": -111.222,
    "tier": 2
  },
  {
    "iata": "ZFM",
    "name": "Fort Mcpherson Airport",
    "city": "Fort Mcpherson",
    "country": "Canada",
    "lat": 67.4075,
    "lng": -134.861,
    "tier": 3
  },
  {
    "iata": "RSW",
    "name": "Southwest Florida International Airport",
    "city": "Fort Myers",
    "country": "United States",
    "lat": 26.5362,
    "lng": -81.7552,
    "tier": 1
  },
  {
    "iata": "YYE",
    "name": "Fort Nelson Airport",
    "city": "Fort Nelson",
    "country": "Canada",
    "lat": 58.8364,
    "lng": -122.597,
    "tier": 3
  },
  {
    "iata": "YXJ",
    "name": "Fort St John Airport",
    "city": "Fort Saint John",
    "country": "Canada",
    "lat": 56.2381,
    "lng": -120.74,
    "tier": 2
  },
  {
    "iata": "YER",
    "name": "Fort Severn Airport",
    "city": "Fort Severn",
    "country": "Canada",
    "lat": 56.0189,
    "lng": -87.6761,
    "tier": 3
  },
  {
    "iata": "YFS",
    "name": "Fort Simpson Airport",
    "city": "Fort Simpson",
    "country": "Canada",
    "lat": 61.7602,
    "lng": -121.237,
    "tier": 3
  },
  {
    "iata": "FSM",
    "name": "Fort Smith Regional Airport",
    "city": "Fort Smith",
    "country": "United States",
    "lat": 35.3366,
    "lng": -94.3674,
    "tier": 3
  },
  {
    "iata": "YSM",
    "name": "Fort Smith Airport",
    "city": "Fort Smith",
    "country": "Canada",
    "lat": 60.0203,
    "lng": -111.962,
    "tier": 3
  },
  {
    "iata": "FWA",
    "name": "Fort Wayne International Airport",
    "city": "Fort Wayne",
    "country": "United States",
    "lat": 40.9785,
    "lng": -85.1951,
    "tier": 2
  },
  {
    "iata": "FYU",
    "name": "Fort Yukon Airport",
    "city": "Fort Yukon",
    "country": "United States",
    "lat": 66.5715,
    "lng": -145.25,
    "tier": 2
  },
  {
    "iata": "FDF",
    "name": "Martinique Aimé Césaire International Airport",
    "city": "Fort-de-france",
    "country": "Martinique",
    "lat": 14.591,
    "lng": -61.0032,
    "tier": 2
  },
  {
    "iata": "FOR",
    "name": "Pinto Martins International Airport",
    "city": "Fortaleza",
    "country": "Brazil",
    "lat": -3.7763,
    "lng": -38.5326,
    "tier": 1
  },
  {
    "iata": "FUO",
    "name": "Foshan Shadi Airport",
    "city": "Foshan",
    "country": "China",
    "lat": 23.0833,
    "lng": 113.07,
    "tier": 3
  },
  {
    "iata": "IGU",
    "name": "Cataratas International Airport",
    "city": "Foz Do Iguacu",
    "country": "Brazil",
    "lat": -25.6003,
    "lng": -54.485,
    "tier": 2
  },
  {
    "iata": "FRW",
    "name": "Francistown Airport",
    "city": "Francistown",
    "country": "Botswana",
    "lat": -21.1596,
    "lng": 27.4745,
    "tier": 3
  },
  {
    "iata": "FRA",
    "name": "Frankfurt am Main Airport",
    "city": "Frankfurt",
    "country": "Germany",
    "lat": 50.0333,
    "lng": 8.5706,
    "tier": 1
  },
  {
    "iata": "FKL",
    "name": "Venango Regional Airport",
    "city": "Franklin",
    "country": "United States",
    "lat": 41.3779,
    "lng": -79.8604,
    "tier": 3
  },
  {
    "iata": "YFC",
    "name": "Fredericton Airport",
    "city": "Fredericton",
    "country": "Canada",
    "lat": 45.8689,
    "lng": -66.5372,
    "tier": 3
  },
  {
    "iata": "FPO",
    "name": "Grand Bahama International Airport",
    "city": "Freeport",
    "country": "Bahamas",
    "lat": 26.5587,
    "lng": -78.6956,
    "tier": 2
  },
  {
    "iata": "FNA",
    "name": "Lungi International Airport",
    "city": "Freetown",
    "country": "Sierra Leone",
    "lat": 8.6164,
    "lng": -13.1955,
    "tier": 2
  },
  {
    "iata": "FAT",
    "name": "Fresno Yosemite International Airport",
    "city": "Fresno",
    "country": "United States",
    "lat": 36.7762,
    "lng": -119.718,
    "tier": 2
  },
  {
    "iata": "FRD",
    "name": "Friday Harbor Airport",
    "city": "Friday Harbor",
    "country": "United States",
    "lat": 48.522,
    "lng": -123.024,
    "tier": 3
  },
  {
    "iata": "FDH",
    "name": "Friedrichshafen Airport",
    "city": "Friedrichshafen",
    "country": "Germany",
    "lat": 47.6713,
    "lng": 9.5115,
    "tier": 2
  },
  {
    "iata": "FUE",
    "name": "Fuerteventura Airport",
    "city": "Fuerteventura",
    "country": "Spain",
    "lat": 28.4527,
    "lng": -13.8638,
    "tier": 1
  },
  {
    "iata": "FJR",
    "name": "Fujairah International Airport",
    "city": "Fujeirah",
    "country": "United Arab Emirates",
    "lat": 25.1122,
    "lng": 56.324,
    "tier": 3
  },
  {
    "iata": "FUJ",
    "name": "Fukue Airport",
    "city": "Fukue",
    "country": "Japan",
    "lat": 32.6663,
    "lng": 128.833,
    "tier": 3
  },
  {
    "iata": "FUK",
    "name": "Fukuoka Airport",
    "city": "Fukuoka",
    "country": "Japan",
    "lat": 33.5859,
    "lng": 130.451,
    "tier": 1
  },
  {
    "iata": "FKS",
    "name": "Fukushima Airport",
    "city": "Fukushima",
    "country": "Japan",
    "lat": 37.2274,
    "lng": 140.431,
    "tier": 3
  },
  {
    "iata": "FUN",
    "name": "Funafuti International Airport",
    "city": "Funafuti",
    "country": "Tuvalu",
    "lat": -8.525,
    "lng": 179.196,
    "tier": 3
  },
  {
    "iata": "FNC",
    "name": "Madeira Airport",
    "city": "Funchal",
    "country": "Portugal",
    "lat": 32.6979,
    "lng": -16.7745,
    "tier": 1
  },
  {
    "iata": "FTA",
    "name": "Futuna Airport",
    "city": "Futuna Island",
    "country": "Vanuatu",
    "lat": -19.5164,
    "lng": 170.232,
    "tier": 3
  },
  {
    "iata": "FUT",
    "name": "Pointe Vele Airport",
    "city": "Futuna Island",
    "country": "Wallis and Futuna",
    "lat": -14.3114,
    "lng": -178.066,
    "tier": 3
  },
  {
    "iata": "FUG",
    "name": "Fuyang Xiguan Airport",
    "city": "Fuyang",
    "country": "China",
    "lat": 32.8822,
    "lng": 115.7344,
    "tier": 2
  },
  {
    "iata": "FOC",
    "name": "Fuzhou Changle International Airport",
    "city": "Fuzhou",
    "country": "China",
    "lat": 25.9351,
    "lng": 119.663,
    "tier": 1
  },
  {
    "iata": "GBE",
    "name": "Sir Seretse Khama International Airport",
    "city": "Gaberone",
    "country": "Botswana",
    "lat": -24.5552,
    "lng": 25.9182,
    "tier": 2
  },
  {
    "iata": "GAE",
    "name": "Gabès Matmata International Airport",
    "city": "Gabes",
    "country": "Tunisia",
    "lat": 33.8769,
    "lng": 10.1033,
    "tier": 3
  },
  {
    "iata": "GCH",
    "name": "Gachsaran Airport",
    "city": "Gachsaran",
    "country": "Iran",
    "lat": 30.3376,
    "lng": 50.828,
    "tier": 3
  },
  {
    "iata": "GAF",
    "name": "Gafsa Ksar International Airport",
    "city": "Gafsa",
    "country": "Tunisia",
    "lat": 34.422,
    "lng": 8.8225,
    "tier": 3
  },
  {
    "iata": "GNV",
    "name": "Gainesville Regional Airport",
    "city": "Gainesville",
    "country": "United States",
    "lat": 29.6901,
    "lng": -82.2718,
    "tier": 2
  },
  {
    "iata": "GPS",
    "name": "Seymour Airport",
    "city": "Galapagos",
    "country": "Ecuador",
    "lat": -0.4538,
    "lng": -90.2659,
    "tier": 3
  },
  {
    "iata": "GLK",
    "name": "Galcaio Airport",
    "city": "Galcaio",
    "country": "Somalia",
    "lat": 6.7808,
    "lng": 47.4547,
    "tier": 3
  },
  {
    "iata": "GAL",
    "name": "Edward G. Pitka Sr Airport",
    "city": "Galena",
    "country": "United States",
    "lat": 64.7362,
    "lng": -156.937,
    "tier": 2
  },
  {
    "iata": "GEV",
    "name": "Gällivare Airport",
    "city": "Gallivare",
    "country": "Sweden",
    "lat": 67.1324,
    "lng": 20.8146,
    "tier": 2
  },
  {
    "iata": "GAM",
    "name": "Gambell Airport",
    "city": "Gambell",
    "country": "United States",
    "lat": 63.7668,
    "lng": -171.733,
    "tier": 3
  },
  {
    "iata": "GMB",
    "name": "Gambella Airport",
    "city": "Gambella",
    "country": "Ethiopia",
    "lat": 8.1288,
    "lng": 34.5631,
    "tier": 3
  },
  {
    "iata": "YRA",
    "name": "Rae Lakes Airport",
    "city": "Gamètì",
    "country": "Canada",
    "lat": 64.1161,
    "lng": -117.31,
    "tier": 3
  },
  {
    "iata": "GAN",
    "name": "Gan International Airport",
    "city": "Gan Island",
    "country": "Maldives",
    "lat": -0.6933,
    "lng": 73.1556,
    "tier": 3
  },
  {
    "iata": "YQX",
    "name": "Gander International Airport",
    "city": "Gander",
    "country": "Canada",
    "lat": 48.9369,
    "lng": -54.5681,
    "tier": 3
  },
  {
    "iata": "KVD",
    "name": "Ganja Airport",
    "city": "Ganja",
    "country": "Azerbaijan",
    "lat": 40.7377,
    "lng": 46.3176,
    "tier": 3
  },
  {
    "iata": "KOW",
    "name": "Ganzhou Airport",
    "city": "Ganzhou",
    "country": "China",
    "lat": 25.8533,
    "lng": 114.7789,
    "tier": 2
  },
  {
    "iata": "GCK",
    "name": "Garden City Regional Airport",
    "city": "Garden City",
    "country": "United States",
    "lat": 37.9275,
    "lng": -100.724,
    "tier": 3
  },
  {
    "iata": "GOU",
    "name": "Garoua International Airport",
    "city": "Garoua",
    "country": "Cameroon",
    "lat": 9.3359,
    "lng": 13.3701,
    "tier": 3
  },
  {
    "iata": "YGP",
    "name": "Gaspé (Michel-Pouliot) Airport",
    "city": "Gaspe",
    "country": "Canada",
    "lat": 48.7753,
    "lng": -64.4786,
    "tier": 3
  },
  {
    "iata": "ELQ",
    "name": "Gassim Airport",
    "city": "Gassim",
    "country": "Saudi Arabia",
    "lat": 26.3028,
    "lng": 43.7744,
    "tier": 2
  },
  {
    "iata": "ZGU",
    "name": "Gaua Island Airport",
    "city": "Gaua Island",
    "country": "Vanuatu",
    "lat": -14.2181,
    "lng": 167.587,
    "tier": 3
  },
  {
    "iata": "GZT",
    "name": "Gaziantep International Airport",
    "city": "Gaziantep",
    "country": "Turkey",
    "lat": 36.9472,
    "lng": 37.4787,
    "tier": 2
  },
  {
    "iata": "GDN",
    "name": "Gdańsk Lech Wałęsa Airport",
    "city": "Gdansk",
    "country": "Poland",
    "lat": 54.3776,
    "lng": 18.4662,
    "tier": 1
  },
  {
    "iata": "GDZ",
    "name": "Gelendzhik Airport",
    "city": "Gelendzhik",
    "country": "Russia",
    "lat": 44.5821,
    "lng": 38.0125,
    "tier": 3
  },
  {
    "iata": "GMA",
    "name": "Gemena Airport",
    "city": "Gemena",
    "country": "Congo (Kinshasa)",
    "lat": 3.2354,
    "lng": 19.7713,
    "tier": 3
  },
  {
    "iata": "EGN",
    "name": "Geneina Airport",
    "city": "Geneina",
    "country": "Sudan",
    "lat": 13.4817,
    "lng": 22.4672,
    "tier": 3
  },
  {
    "iata": "GVA",
    "name": "Geneva Cointrin International Airport",
    "city": "Geneva",
    "country": "Switzerland",
    "lat": 46.2381,
    "lng": 6.109,
    "tier": 1
  },
  {
    "iata": "GOA",
    "name": "Genoa Cristoforo Colombo Airport",
    "city": "Genoa",
    "country": "Italy",
    "lat": 44.4133,
    "lng": 8.8375,
    "tier": 2
  },
  {
    "iata": "GRJ",
    "name": "George Airport",
    "city": "George",
    "country": "South Africa",
    "lat": -34.0056,
    "lng": 22.3789,
    "tier": 3
  },
  {
    "iata": "GCM",
    "name": "Owen Roberts International Airport",
    "city": "Georgetown",
    "country": "Cayman Islands",
    "lat": 19.2928,
    "lng": -81.3577,
    "tier": 1
  },
  {
    "iata": "GEO",
    "name": "Cheddi Jagan International Airport",
    "city": "Georgetown",
    "country": "Guyana",
    "lat": 6.4985,
    "lng": -58.2541,
    "tier": 2
  },
  {
    "iata": "OGL",
    "name": "Eugene F. Correira International Airport",
    "city": "Georgetown",
    "country": "Guyana",
    "lat": 6.8063,
    "lng": -58.1059,
    "tier": 3
  },
  {
    "iata": "GET",
    "name": "Geraldton Airport",
    "city": "Geraldton",
    "country": "Australia",
    "lat": -28.7961,
    "lng": 114.707,
    "tier": 3
  },
  {
    "iata": "GRO",
    "name": "Girona Airport",
    "city": "Gerona",
    "country": "Spain",
    "lat": 41.901,
    "lng": 2.7606,
    "tier": 1
  },
  {
    "iata": "LTD",
    "name": "Ghadames East Airport",
    "city": "Ghadames",
    "country": "Libya",
    "lat": 30.1517,
    "lng": 9.7153,
    "tier": 3
  },
  {
    "iata": "GHA",
    "name": "Noumérat - Moufdi Zakaria Airport",
    "city": "Ghardaia",
    "country": "Algeria",
    "lat": 32.3841,
    "lng": 3.7941,
    "tier": 3
  },
  {
    "iata": "GHT",
    "name": "Ghat Airport",
    "city": "Ghat",
    "country": "Libya",
    "lat": 25.1456,
    "lng": 10.1426,
    "tier": 3
  },
  {
    "iata": "MUW",
    "name": "Ghriss Airport",
    "city": "Ghriss",
    "country": "Algeria",
    "lat": 35.2077,
    "lng": 0.1471,
    "tier": 3
  },
  {
    "iata": "GIB",
    "name": "Gibraltar Airport",
    "city": "Gibraltar",
    "country": "Gibraltar",
    "lat": 36.1512,
    "lng": -5.3497,
    "tier": 2
  },
  {
    "iata": "GIL",
    "name": "Gilgit Airport",
    "city": "Gilgit",
    "country": "Pakistan",
    "lat": 35.9188,
    "lng": 74.3336,
    "tier": 3
  },
  {
    "iata": "YGX",
    "name": "Gillam Airport",
    "city": "Gillam",
    "country": "Canada",
    "lat": 56.3575,
    "lng": -94.7106,
    "tier": 3
  },
  {
    "iata": "GCC",
    "name": "Gillette Campbell County Airport",
    "city": "Gillette",
    "country": "United States",
    "lat": 44.3489,
    "lng": -105.539,
    "tier": 3
  },
  {
    "iata": "PNP",
    "name": "Girua Airport",
    "city": "Girua",
    "country": "Papua New Guinea",
    "lat": -8.8045,
    "lng": 148.309,
    "tier": 3
  },
  {
    "iata": "GIS",
    "name": "Gisborne Airport",
    "city": "Gisborne",
    "country": "New Zealand",
    "lat": -38.6633,
    "lng": 177.978,
    "tier": 3
  },
  {
    "iata": "GIZ",
    "name": "Jizan Regional Airport",
    "city": "Gizan",
    "country": "Saudi Arabia",
    "lat": 16.9011,
    "lng": 42.5858,
    "tier": 2
  },
  {
    "iata": "GZO",
    "name": "Nusatupe Airport",
    "city": "Gizo",
    "country": "Solomon Islands",
    "lat": -8.0978,
    "lng": 156.864,
    "tier": 3
  },
  {
    "iata": "YHK",
    "name": "Gjoa Haven Airport",
    "city": "Gjoa Haven",
    "country": "Canada",
    "lat": 68.6356,
    "lng": -95.8497,
    "tier": 3
  },
  {
    "iata": "GLT",
    "name": "Gladstone Airport",
    "city": "Gladstone",
    "country": "Australia",
    "lat": -23.8697,
    "lng": 151.223,
    "tier": 3
  },
  {
    "iata": "GGW",
    "name": "Wokal Field Glasgow International Airport",
    "city": "Glasgow",
    "country": "United States",
    "lat": 48.2125,
    "lng": -106.615,
    "tier": 3
  },
  {
    "iata": "GLA",
    "name": "Glasgow International Airport",
    "city": "Glasgow",
    "country": "United Kingdom",
    "lat": 55.8719,
    "lng": -4.4331,
    "tier": 1
  },
  {
    "iata": "GDV",
    "name": "Dawson Community Airport",
    "city": "Glendive",
    "country": "United States",
    "lat": 47.1387,
    "lng": -104.807,
    "tier": 3
  },
  {
    "iata": "GOI",
    "name": "Dabolim Airport",
    "city": "Goa",
    "country": "India",
    "lat": 15.3808,
    "lng": 73.8314,
    "tier": 1
  },
  {
    "iata": "GDE",
    "name": "Gode Airport",
    "city": "Gode",
    "country": "Ethiopia",
    "lat": 5.9351,
    "lng": 43.5786,
    "tier": 3
  },
  {
    "iata": "GOH",
    "name": "Godthaab / Nuuk Airport",
    "city": "Godthaab",
    "country": "Greenland",
    "lat": 64.1909,
    "lng": -51.6781,
    "tier": 2
  },
  {
    "iata": "GYN",
    "name": "Santa Genoveva Airport",
    "city": "Goiania",
    "country": "Brazil",
    "lat": -16.632,
    "lng": -49.2207,
    "tier": 2
  },
  {
    "iata": "GLF",
    "name": "Golfito Airport",
    "city": "Golfito",
    "country": "Costa Rica",
    "lat": 8.654,
    "lng": -83.1822,
    "tier": 3
  },
  {
    "iata": "GOQ",
    "name": "Golmud Airport",
    "city": "Golmud",
    "country": "China",
    "lat": 36.4006,
    "lng": 94.7861,
    "tier": 3
  },
  {
    "iata": "GLO",
    "name": "Gloucestershire Airport",
    "city": "Golouchestershire",
    "country": "United Kingdom",
    "lat": 51.8942,
    "lng": -2.1672,
    "tier": 3
  },
  {
    "iata": "GLV",
    "name": "Golovin Airport",
    "city": "Golovin",
    "country": "United States",
    "lat": 64.5505,
    "lng": -163.007,
    "tier": 3
  },
  {
    "iata": "GOM",
    "name": "Goma International Airport",
    "city": "Goma",
    "country": "Congo (Kinshasa)",
    "lat": -1.6708,
    "lng": 29.2385,
    "tier": 3
  },
  {
    "iata": "GMO",
    "name": "Gombe Lawanti International Airport",
    "city": "Gombe",
    "country": "Nigeria",
    "lat": 10.2983,
    "lng": 10.8964,
    "tier": 3
  },
  {
    "iata": "GDQ",
    "name": "Gonder Airport",
    "city": "Gondar",
    "country": "Ethiopia",
    "lat": 12.5199,
    "lng": 37.434,
    "tier": 3
  },
  {
    "iata": "YYR",
    "name": "Goose Bay Airport",
    "city": "Goose Bay",
    "country": "Canada",
    "lat": 53.3192,
    "lng": -60.4258,
    "tier": 2
  },
  {
    "iata": "GOP",
    "name": "Gorakhpur Airport",
    "city": "Gorakhpur",
    "country": "India",
    "lat": 26.7397,
    "lng": 83.4497,
    "tier": 3
  },
  {
    "iata": "GBT",
    "name": "Gorgan Airport",
    "city": "Gorgan",
    "country": "Iran",
    "lat": 36.9094,
    "lng": 54.4013,
    "tier": 2
  },
  {
    "iata": "RGK",
    "name": "Gorno-Altaysk Airport",
    "city": "Gorno-Altaysk",
    "country": "Russia",
    "lat": 51.9667,
    "lng": 85.8333,
    "tier": 3
  },
  {
    "iata": "GKA",
    "name": "Goroka Airport",
    "city": "Goroka",
    "country": "Papua New Guinea",
    "lat": -6.0817,
    "lng": 145.392,
    "tier": 3
  },
  {
    "iata": "GTO",
    "name": "Jalaluddin Airport",
    "city": "Gorontalo",
    "country": "Indonesia",
    "lat": 0.6371,
    "lng": 122.85,
    "tier": 3
  },
  {
    "iata": "GOT",
    "name": "Gothenburg-Landvetter Airport",
    "city": "Gothenborg",
    "country": "Sweden",
    "lat": 57.6628,
    "lng": 12.2798,
    "tier": 1
  },
  {
    "iata": "GSE",
    "name": "Gothenburg City Airport",
    "city": "Gothenborg",
    "country": "Sweden",
    "lat": 57.7747,
    "lng": 11.8704,
    "tier": 2
  },
  {
    "iata": "GOV",
    "name": "Gove Airport",
    "city": "Gove",
    "country": "Australia",
    "lat": -12.2694,
    "lng": 136.818,
    "tier": 3
  },
  {
    "iata": "GVR",
    "name": "Coronel Altino Machado de Oliveira Airport",
    "city": "Governador Valadares",
    "country": "Brazil",
    "lat": -18.8952,
    "lng": -41.9822,
    "tier": 3
  },
  {
    "iata": "GHB",
    "name": "Governor's Harbour Airport",
    "city": "Governor's Harbor",
    "country": "Bahamas",
    "lat": 25.2847,
    "lng": -76.331,
    "tier": 3
  },
  {
    "iata": "GRW",
    "name": "Graciosa Airport",
    "city": "Graciosa Island",
    "country": "Portugal",
    "lat": 39.0922,
    "lng": -28.0298,
    "tier": 3
  },
  {
    "iata": "GFN",
    "name": "Grafton Airport",
    "city": "Grafton",
    "country": "Australia",
    "lat": -29.7594,
    "lng": 153.03,
    "tier": 3
  },
  {
    "iata": "LPA",
    "name": "Gran Canaria Airport",
    "city": "Gran Canaria",
    "country": "Spain",
    "lat": 27.9319,
    "lng": -15.3866,
    "tier": 1
  },
  {
    "iata": "GRX",
    "name": "Federico Garcia Lorca Airport",
    "city": "Granada",
    "country": "Spain",
    "lat": 37.1887,
    "lng": -3.7774,
    "tier": 2
  },
  {
    "iata": "GCN",
    "name": "Grand Canyon National Park Airport",
    "city": "Grand Canyon",
    "country": "United States",
    "lat": 35.9524,
    "lng": -112.147,
    "tier": 3
  },
  {
    "iata": "GFK",
    "name": "Grand Forks International Airport",
    "city": "Grand Forks",
    "country": "United States",
    "lat": 47.9493,
    "lng": -97.1761,
    "tier": 3
  },
  {
    "iata": "GRI",
    "name": "Central Nebraska Regional Airport",
    "city": "Grand Island",
    "country": "United States",
    "lat": 40.9675,
    "lng": -98.3096,
    "tier": 3
  },
  {
    "iata": "GJT",
    "name": "Grand Junction Regional Airport",
    "city": "Grand Junction",
    "country": "United States",
    "lat": 39.1224,
    "lng": -108.527,
    "tier": 2
  },
  {
    "iata": "GRR",
    "name": "Gerald R. Ford International Airport",
    "city": "Grand Rapids",
    "country": "United States",
    "lat": 42.8808,
    "lng": -85.5228,
    "tier": 1
  },
  {
    "iata": "YQU",
    "name": "Grande Prairie Airport",
    "city": "Grande Prairie",
    "country": "Canada",
    "lat": 55.1797,
    "lng": -118.885,
    "tier": 3
  },
  {
    "iata": "GRZ",
    "name": "Graz Airport",
    "city": "Graz",
    "country": "Austria",
    "lat": 46.9911,
    "lng": 15.4396,
    "tier": 2
  },
  {
    "iata": "GGT",
    "name": "Exuma International Airport",
    "city": "Great Exuma",
    "country": "Bahamas",
    "lat": 23.5626,
    "lng": -75.878,
    "tier": 2
  },
  {
    "iata": "GTF",
    "name": "Great Falls International Airport",
    "city": "Great Falls",
    "country": "United States",
    "lat": 47.482,
    "lng": -111.371,
    "tier": 2
  },
  {
    "iata": "GRB",
    "name": "Austin Straubel International Airport",
    "city": "Green Bay",
    "country": "United States",
    "lat": 44.4851,
    "lng": -88.1296,
    "tier": 2
  },
  {
    "iata": "GSO",
    "name": "Piedmont Triad International Airport",
    "city": "Greensboro",
    "country": "United States",
    "lat": 36.0978,
    "lng": -79.9373,
    "tier": 1
  },
  {
    "iata": "GLH",
    "name": "Mid Delta Regional Airport",
    "city": "Greenville",
    "country": "United States",
    "lat": 33.4829,
    "lng": -90.9856,
    "tier": 3
  },
  {
    "iata": "GSP",
    "name": "Greenville Spartanburg International Airport",
    "city": "Greenville",
    "country": "United States",
    "lat": 34.8957,
    "lng": -82.2189,
    "tier": 1
  },
  {
    "iata": "PGV",
    "name": "Pitt Greenville Airport",
    "city": "Greenville",
    "country": "United States",
    "lat": 35.6352,
    "lng": -77.3853,
    "tier": 3
  },
  {
    "iata": "GFF",
    "name": "Griffith Airport",
    "city": "Griffith",
    "country": "Australia",
    "lat": -34.2508,
    "lng": 146.067,
    "tier": 3
  },
  {
    "iata": "YGZ",
    "name": "Grise Fiord Airport",
    "city": "Grise Fiord",
    "country": "Canada",
    "lat": 76.4261,
    "lng": -82.9092,
    "tier": 3
  },
  {
    "iata": "GRQ",
    "name": "Eelde Airport",
    "city": "Groningen",
    "country": "Netherlands",
    "lat": 53.1197,
    "lng": 6.5794,
    "tier": 2
  },
  {
    "iata": "GTE",
    "name": "Groote Eylandt Airport",
    "city": "Groote Eylandt",
    "country": "Australia",
    "lat": -13.975,
    "lng": 136.46,
    "tier": 3
  },
  {
    "iata": "GDL",
    "name": "Don Miguel Hidalgo Y Costilla International Airport",
    "city": "Guadalajara",
    "country": "Mexico",
    "lat": 20.5218,
    "lng": -103.311,
    "tier": 1
  },
  {
    "iata": "GJA",
    "name": "La Laguna Airport",
    "city": "Guanaja",
    "country": "Honduras",
    "lat": 16.4454,
    "lng": -85.9066,
    "tier": 3
  },
  {
    "iata": "GNM",
    "name": "Guanambi Airport",
    "city": "Guanambi",
    "country": "Brazil",
    "lat": -14.2082,
    "lng": -42.7461,
    "tier": 3
  },
  {
    "iata": "GYS",
    "name": "Guangyuan Airport",
    "city": "Guangyuan",
    "country": "China",
    "lat": 32.3911,
    "lng": 105.702,
    "tier": 2
  },
  {
    "iata": "CAN",
    "name": "Guangzhou Baiyun International Airport",
    "city": "Guangzhou",
    "country": "China",
    "lat": 23.3924,
    "lng": 113.299,
    "tier": 1
  },
  {
    "iata": "GAO",
    "name": "Mariana Grajales Airport",
    "city": "Guantanamo",
    "country": "Cuba",
    "lat": 20.0853,
    "lng": -75.1583,
    "tier": 3
  },
  {
    "iata": "GPI",
    "name": "Juan Casiano Airport",
    "city": "Guapi",
    "country": "Colombia",
    "lat": 2.5701,
    "lng": -77.8986,
    "tier": 3
  },
  {
    "iata": "GPB",
    "name": "Tancredo Thomas de Faria Airport",
    "city": "Guarapuava",
    "country": "Brazil",
    "lat": -25.3875,
    "lng": -51.5202,
    "tier": 3
  },
  {
    "iata": "GUA",
    "name": "La Aurora Airport",
    "city": "Guatemala City",
    "country": "Guatemala",
    "lat": 14.5833,
    "lng": -90.5275,
    "tier": 1
  },
  {
    "iata": "PZO",
    "name": "General Manuel Carlos Piar International Airport",
    "city": "Guayana",
    "country": "Venezuela",
    "lat": 8.2885,
    "lng": -62.7604,
    "tier": 2
  },
  {
    "iata": "GYE",
    "name": "José Joaquín de Olmedo International Airport",
    "city": "Guayaquil",
    "country": "Ecuador",
    "lat": -2.1574,
    "lng": -79.8836,
    "tier": 1
  },
  {
    "iata": "GYA",
    "name": "Capitán de Av. Emilio Beltrán Airport",
    "city": "Guayaramerín",
    "country": "Bolivia",
    "lat": -10.8206,
    "lng": -65.3456,
    "tier": 3
  },
  {
    "iata": "ELU",
    "name": "Guemar Airport",
    "city": "Guemar",
    "country": "Algeria",
    "lat": 33.5114,
    "lng": 6.7768,
    "tier": 3
  },
  {
    "iata": "GCI",
    "name": "Guernsey Airport",
    "city": "Guernsey",
    "country": "Guernsey",
    "lat": 49.435,
    "lng": -2.602,
    "tier": 2
  },
  {
    "iata": "KWL",
    "name": "Guilin Liangjiang International Airport",
    "city": "Guilin",
    "country": "China",
    "lat": 25.2181,
    "lng": 110.039,
    "tier": 1
  },
  {
    "iata": "KWE",
    "name": "Longdongbao Airport",
    "city": "Guiyang",
    "country": "China",
    "lat": 26.5385,
    "lng": 106.801,
    "tier": 1
  },
  {
    "iata": "GPT",
    "name": "Gulfport Biloxi International Airport",
    "city": "Gulfport",
    "country": "United States",
    "lat": 30.4073,
    "lng": -89.0701,
    "tier": 2
  },
  {
    "iata": "GUC",
    "name": "Gunnison Crested Butte Regional Airport",
    "city": "Gunnison",
    "country": "United States",
    "lat": 38.5339,
    "lng": -106.933,
    "tier": 3
  },
  {
    "iata": "URY",
    "name": "Gurayat Domestic Airport",
    "city": "Guriat",
    "country": "Saudi Arabia",
    "lat": 31.4124,
    "lng": 37.2789,
    "tier": 3
  },
  {
    "iata": "GUR",
    "name": "Gurney Airport",
    "city": "Gurney",
    "country": "Papua New Guinea",
    "lat": -10.3115,
    "lng": 150.334,
    "tier": 3
  },
  {
    "iata": "GRP",
    "name": "Gurupi Airport",
    "city": "Gurupi",
    "country": "Brazil",
    "lat": -11.7396,
    "lng": -49.1322,
    "tier": 3
  },
  {
    "iata": "SBH",
    "name": "Gustaf III Airport",
    "city": "Gustavia",
    "country": "France",
    "lat": 17.9044,
    "lng": -62.8436,
    "tier": 2
  },
  {
    "iata": "GST",
    "name": "Gustavus Airport",
    "city": "Gustavus",
    "country": "United States",
    "lat": 58.4253,
    "lng": -135.707,
    "tier": 3
  },
  {
    "iata": "GAU",
    "name": "Lokpriya Gopinath Bordoloi International Airport",
    "city": "Guwahati",
    "country": "India",
    "lat": 26.1061,
    "lng": 91.5859,
    "tier": 1
  },
  {
    "iata": "GWD",
    "name": "Gwadar International Airport",
    "city": "Gwadar",
    "country": "Pakistan",
    "lat": 25.2333,
    "lng": 62.3295,
    "tier": 3
  },
  {
    "iata": "GWL",
    "name": "Gwalior Airport",
    "city": "Gwalior",
    "country": "India",
    "lat": 26.2933,
    "lng": 78.2278,
    "tier": 3
  },
  {
    "iata": "MQT",
    "name": "Sawyer International Airport",
    "city": "Gwinn",
    "country": "United States",
    "lat": 46.3536,
    "lng": -87.3954,
    "tier": 3
  },
  {
    "iata": "LWN",
    "name": "Gyumri Shirak Airport",
    "city": "Gyumri",
    "country": "Armenia",
    "lat": 40.7504,
    "lng": 43.8593,
    "tier": 3
  },
  {
    "iata": "HAQ",
    "name": "Hanimaadhoo Airport",
    "city": "Haa Dhaalu Atoll",
    "country": "Maldives",
    "lat": 6.7442,
    "lng": 73.1705,
    "tier": 3
  },
  {
    "iata": "HAC",
    "name": "Hachijojima Airport",
    "city": "Hachijojima",
    "country": "Japan",
    "lat": 33.115,
    "lng": 139.786,
    "tier": 3
  },
  {
    "iata": "AQI",
    "name": "Al Qaisumah/Hafr Al Batin Airport",
    "city": "Hafr Al-batin",
    "country": "Saudi Arabia",
    "lat": 28.3352,
    "lng": 46.1251,
    "tier": 3
  },
  {
    "iata": "HGR",
    "name": "Hagerstown Regional Richard A Henson Field",
    "city": "Hagerstown",
    "country": "United States",
    "lat": 39.7079,
    "lng": -77.7295,
    "tier": 3
  },
  {
    "iata": "HFS",
    "name": "Hagfors Airport",
    "city": "Hagfors",
    "country": "Sweden",
    "lat": 60.0201,
    "lng": 13.5789,
    "tier": 3
  },
  {
    "iata": "HHN",
    "name": "Frankfurt-Hahn Airport",
    "city": "Hahn",
    "country": "Germany",
    "lat": 49.9487,
    "lng": 7.2639,
    "tier": 1
  },
  {
    "iata": "HFA",
    "name": "Haifa International Airport",
    "city": "Haifa",
    "country": "Israel",
    "lat": 32.8094,
    "lng": 35.0431,
    "tier": 3
  },
  {
    "iata": "HAK",
    "name": "Haikou Meilan International Airport",
    "city": "Haikou",
    "country": "China",
    "lat": 19.9349,
    "lng": 110.459,
    "tier": 1
  },
  {
    "iata": "HAS",
    "name": "Ha'il Airport",
    "city": "Hail",
    "country": "Saudi Arabia",
    "lat": 27.4379,
    "lng": 41.6863,
    "tier": 3
  },
  {
    "iata": "HLD",
    "name": "Dongshan Airport",
    "city": "Hailar",
    "country": "China",
    "lat": 49.205,
    "lng": 119.825,
    "tier": 2
  },
  {
    "iata": "HNS",
    "name": "Haines Airport",
    "city": "Haines",
    "country": "United States",
    "lat": 59.2438,
    "lng": -135.524,
    "tier": 3
  },
  {
    "iata": "HPH",
    "name": "Cat Bi International Airport",
    "city": "Haiphong",
    "country": "Vietnam",
    "lat": 20.8194,
    "lng": 106.725,
    "tier": 3
  },
  {
    "iata": "HKD",
    "name": "Hakodate Airport",
    "city": "Hakodate",
    "country": "Japan",
    "lat": 41.77,
    "lng": 140.822,
    "tier": 2
  },
  {
    "iata": "YHZ",
    "name": "Halifax / Stanfield International Airport",
    "city": "Halifax",
    "country": "Canada",
    "lat": 44.8808,
    "lng": -63.5086,
    "tier": 1
  },
  {
    "iata": "YUX",
    "name": "Hall Beach Airport",
    "city": "Hall Beach",
    "country": "Canada",
    "lat": 68.7761,
    "lng": -81.2425,
    "tier": 3
  },
  {
    "iata": "HAD",
    "name": "Halmstad Airport",
    "city": "Halmstad",
    "country": "Sweden",
    "lat": 56.6911,
    "lng": 12.8202,
    "tier": 3
  },
  {
    "iata": "HDM",
    "name": "Hamadan Airport",
    "city": "Hamadan",
    "country": "Iran",
    "lat": 34.8692,
    "lng": 48.5525,
    "tier": 3
  },
  {
    "iata": "HAM",
    "name": "Hamburg Airport",
    "city": "Hamburg",
    "country": "Germany",
    "lat": 53.6304,
    "lng": 9.9882,
    "tier": 1
  },
  {
    "iata": "XFW",
    "name": "Hamburg-Finkenwerder Airport",
    "city": "Hamburg",
    "country": "Germany",
    "lat": 53.5353,
    "lng": 9.8356,
    "tier": 3
  },
  {
    "iata": "HMI",
    "name": "Hami Airport",
    "city": "Hami",
    "country": "China",
    "lat": 42.8414,
    "lng": 93.6692,
    "tier": 2
  },
  {
    "iata": "HLZ",
    "name": "Hamilton International Airport",
    "city": "Hamilton",
    "country": "New Zealand",
    "lat": -37.8667,
    "lng": 175.332,
    "tier": 3
  },
  {
    "iata": "YHM",
    "name": "John C. Munro Hamilton International Airport",
    "city": "Hamilton",
    "country": "Canada",
    "lat": 43.1736,
    "lng": -79.935,
    "tier": 3
  },
  {
    "iata": "HTI",
    "name": "Hamilton Island Airport",
    "city": "Hamilton Island",
    "country": "Australia",
    "lat": -20.3581,
    "lng": 148.952,
    "tier": 2
  },
  {
    "iata": "HFT",
    "name": "Hammerfest Airport",
    "city": "Hammerfest",
    "country": "Norway",
    "lat": 70.6797,
    "lng": 23.6686,
    "tier": 2
  },
  {
    "iata": "HNM",
    "name": "Hana Airport",
    "city": "Hana",
    "country": "United States",
    "lat": 20.7956,
    "lng": -156.014,
    "tier": 3
  },
  {
    "iata": "HNA",
    "name": "Hanamaki Airport",
    "city": "Hanamaki",
    "country": "Japan",
    "lat": 39.4286,
    "lng": 141.135,
    "tier": 3
  },
  {
    "iata": "CMX",
    "name": "Houghton County Memorial Airport",
    "city": "Hancock",
    "country": "United States",
    "lat": 47.1684,
    "lng": -88.4891,
    "tier": 3
  },
  {
    "iata": "HDG",
    "name": "Handan Airport",
    "city": "Handan",
    "country": "China",
    "lat": 36.5258,
    "lng": 114.4256,
    "tier": 2
  },
  {
    "iata": "HGH",
    "name": "Hangzhou Xiaoshan International Airport",
    "city": "Hangzhou",
    "country": "China",
    "lat": 30.2295,
    "lng": 120.434,
    "tier": 1
  },
  {
    "iata": "HAJ",
    "name": "Hannover Airport",
    "city": "Hannover",
    "country": "Germany",
    "lat": 52.4611,
    "lng": 9.6851,
    "tier": 1
  },
  {
    "iata": "HAN",
    "name": "Noi Bai International Airport",
    "city": "Hanoi",
    "country": "Vietnam",
    "lat": 21.2212,
    "lng": 105.807,
    "tier": 1
  },
  {
    "iata": "HOI",
    "name": "Hao Airport",
    "city": "Hao Island",
    "country": "French Polynesia",
    "lat": -18.0748,
    "lng": -140.946,
    "tier": 3
  },
  {
    "iata": "HRE",
    "name": "Robert Gabriel Mugabe International Airport",
    "city": "Harare",
    "country": "Zimbabwe",
    "lat": -17.9318,
    "lng": 31.0928,
    "tier": 1
  },
  {
    "iata": "HRB",
    "name": "Taiping Airport",
    "city": "Harbin",
    "country": "China",
    "lat": 45.6234,
    "lng": 126.25,
    "tier": 1
  },
  {
    "iata": "HGA",
    "name": "Egal International Airport",
    "city": "Hargeisa",
    "country": "Somalia",
    "lat": 9.5182,
    "lng": 44.0888,
    "tier": 2
  },
  {
    "iata": "HRL",
    "name": "Valley International Airport",
    "city": "Harlingen",
    "country": "United States",
    "lat": 26.2285,
    "lng": -97.6544,
    "tier": 2
  },
  {
    "iata": "MDT",
    "name": "Harrisburg International Airport",
    "city": "Harrisburg",
    "country": "United States",
    "lat": 40.1935,
    "lng": -76.7634,
    "tier": 2
  },
  {
    "iata": "HRO",
    "name": "Boone County Airport",
    "city": "Harrison",
    "country": "United States",
    "lat": 36.2615,
    "lng": -93.1547,
    "tier": 3
  },
  {
    "iata": "EVE",
    "name": "Harstad/Narvik Airport, Evenes",
    "city": "Harstad/Narvik",
    "country": "Norway",
    "lat": 68.4913,
    "lng": 16.6781,
    "tier": 2
  },
  {
    "iata": "HME",
    "name": "Oued Irara Airport",
    "city": "Hassi Messaoud",
    "country": "Algeria",
    "lat": 31.673,
    "lng": 6.1404,
    "tier": 2
  },
  {
    "iata": "HAA",
    "name": "Hasvik Airport",
    "city": "Hasvik",
    "country": "Norway",
    "lat": 70.4867,
    "lng": 22.1397,
    "tier": 3
  },
  {
    "iata": "HDY",
    "name": "Hat Yai International Airport",
    "city": "Hat Yai",
    "country": "Thailand",
    "lat": 6.9332,
    "lng": 100.393,
    "tier": 2
  },
  {
    "iata": "HTY",
    "name": "Hatay Airport",
    "city": "Hatay",
    "country": "Turkey",
    "lat": 36.3628,
    "lng": 36.2822,
    "tier": 2
  },
  {
    "iata": "PIB",
    "name": "Hattiesburg Laurel Regional Airport",
    "city": "Hattiesburg/Laurel",
    "country": "United States",
    "lat": 31.4671,
    "lng": -89.3371,
    "tier": 3
  },
  {
    "iata": "HAU",
    "name": "Haugesund Airport",
    "city": "Haugesund",
    "country": "Norway",
    "lat": 59.3453,
    "lng": 5.2084,
    "tier": 2
  },
  {
    "iata": "HAV",
    "name": "José Martí International Airport",
    "city": "Havana",
    "country": "Cuba",
    "lat": 22.9892,
    "lng": -82.4091,
    "tier": 1
  },
  {
    "iata": "HVR",
    "name": "Havre City County Airport",
    "city": "Havre",
    "country": "United States",
    "lat": 48.543,
    "lng": -109.762,
    "tier": 3
  },
  {
    "iata": "YGV",
    "name": "Havre St Pierre Airport",
    "city": "Havre-Saint-Pierre",
    "country": "Canada",
    "lat": 50.2819,
    "lng": -63.6114,
    "tier": 3
  },
  {
    "iata": "CEG",
    "name": "Hawarden Airport",
    "city": "Hawarden",
    "country": "United Kingdom",
    "lat": 53.1781,
    "lng": -2.9778,
    "tier": 3
  },
  {
    "iata": "YHY",
    "name": "Hay River / Merlyn Carter Airport",
    "city": "Hay River",
    "country": "Canada",
    "lat": 60.8397,
    "lng": -115.783,
    "tier": 3
  },
  {
    "iata": "HDN",
    "name": "Yampa Valley Airport",
    "city": "Hayden",
    "country": "United States",
    "lat": 40.4812,
    "lng": -107.218,
    "tier": 3
  },
  {
    "iata": "HFE",
    "name": "Hefei Luogang International Airport",
    "city": "Hefei",
    "country": "China",
    "lat": 31.78,
    "lng": 117.298,
    "tier": 1
  },
  {
    "iata": "HEH",
    "name": "Heho Airport",
    "city": "Heho",
    "country": "Burma",
    "lat": 20.747,
    "lng": 96.792,
    "tier": 2
  },
  {
    "iata": "HEK",
    "name": "Heihe Airport",
    "city": "Heihe",
    "country": "China",
    "lat": 50.1716,
    "lng": 127.3089,
    "tier": 3
  },
  {
    "iata": "HLN",
    "name": "Helena Regional Airport",
    "city": "Helena",
    "country": "United States",
    "lat": 46.6068,
    "lng": -111.983,
    "tier": 3
  },
  {
    "iata": "HEL",
    "name": "Helsinki Vantaa Airport",
    "city": "Helsinki",
    "country": "Finland",
    "lat": 60.3172,
    "lng": 24.9633,
    "tier": 1
  },
  {
    "iata": "HMV",
    "name": "Hemavan Airport",
    "city": "Hemavan",
    "country": "Sweden",
    "lat": 65.8061,
    "lng": 15.0828,
    "tier": 3
  },
  {
    "iata": "HER",
    "name": "Heraklion International Nikos Kazantzakis Airport",
    "city": "Heraklion",
    "country": "Greece",
    "lat": 35.3397,
    "lng": 25.1803,
    "tier": 1
  },
  {
    "iata": "HEA",
    "name": "Herat Airport",
    "city": "Herat",
    "country": "Afghanistan",
    "lat": 34.21,
    "lng": 62.2283,
    "tier": 2
  },
  {
    "iata": "HDF",
    "name": "Heringsdorf Airport",
    "city": "Heringsdorf",
    "country": "Germany",
    "lat": 53.8787,
    "lng": 14.1523,
    "tier": 3
  },
  {
    "iata": "HMO",
    "name": "General Ignacio P. Garcia International Airport",
    "city": "Hermosillo",
    "country": "Mexico",
    "lat": 29.0959,
    "lng": -111.048,
    "tier": 2
  },
  {
    "iata": "HVB",
    "name": "Hervey Bay Airport",
    "city": "Hervey Bay",
    "country": "Australia",
    "lat": -25.3189,
    "lng": 152.88,
    "tier": 3
  },
  {
    "iata": "UVF",
    "name": "Hewanorra International Airport",
    "city": "Hewandorra",
    "country": "Saint Lucia",
    "lat": 13.7332,
    "lng": -60.9526,
    "tier": 2
  },
  {
    "iata": "HIB",
    "name": "Range Regional Airport",
    "city": "Hibbing",
    "country": "United States",
    "lat": 47.3866,
    "lng": -92.839,
    "tier": 3
  },
  {
    "iata": "VDE",
    "name": "Hierro Airport",
    "city": "Hierro",
    "country": "Spain",
    "lat": 27.8148,
    "lng": -17.8871,
    "tier": 3
  },
  {
    "iata": "YOJ",
    "name": "High Level Airport",
    "city": "High Level",
    "country": "Canada",
    "lat": 58.6214,
    "lng": -117.165,
    "tier": 3
  },
  {
    "iata": "ITO",
    "name": "Hilo International Airport",
    "city": "Hilo",
    "country": "United States",
    "lat": 19.7214,
    "lng": -155.048,
    "tier": 3
  },
  {
    "iata": "HHH",
    "name": "Hilton Head Airport",
    "city": "Hilton Head Island",
    "country": "United States",
    "lat": 32.2244,
    "lng": -80.6975,
    "tier": 3
  },
  {
    "iata": "HIJ",
    "name": "Hiroshima Airport",
    "city": "Hiroshima",
    "country": "Japan",
    "lat": 34.4361,
    "lng": 132.919,
    "tier": 2
  },
  {
    "iata": "AUQ",
    "name": "Hiva Oa-Atuona Airport",
    "city": "Hiva-oa",
    "country": "French Polynesia",
    "lat": -9.7688,
    "lng": -139.011,
    "tier": 3
  },
  {
    "iata": "SGN",
    "name": "Tan Son Nhat International Airport",
    "city": "Ho Chi Minh City",
    "country": "Vietnam",
    "lat": 10.8188,
    "lng": 106.652,
    "tier": 1
  },
  {
    "iata": "HBA",
    "name": "Hobart International Airport",
    "city": "Hobart",
    "country": "Australia",
    "lat": -42.8361,
    "lng": 147.51,
    "tier": 2
  },
  {
    "iata": "HOB",
    "name": "Lea County Regional Airport",
    "city": "Hobbs",
    "country": "United States",
    "lat": 32.6875,
    "lng": -103.217,
    "tier": 3
  },
  {
    "iata": "HOD",
    "name": "Hodeidah International Airport",
    "city": "Hodeidah",
    "country": "Yemen",
    "lat": 14.753,
    "lng": 42.9763,
    "tier": 3
  },
  {
    "iata": "HDS",
    "name": "Hoedspruit Air Force Base Airport",
    "city": "Hoedspruit",
    "country": "South Africa",
    "lat": -24.3686,
    "lng": 31.0487,
    "tier": 3
  },
  {
    "iata": "HET",
    "name": "Baita International Airport",
    "city": "Hohhot",
    "country": "China",
    "lat": 40.8514,
    "lng": 111.824,
    "tier": 1
  },
  {
    "iata": "HKK",
    "name": "Hokitika Airfield",
    "city": "Hokitika",
    "country": "New Zealand",
    "lat": -42.7136,
    "lng": 170.985,
    "tier": 3
  },
  {
    "iata": "HOG",
    "name": "Frank Pais International Airport",
    "city": "Holguin",
    "country": "Cuba",
    "lat": 20.7856,
    "lng": -76.3151,
    "tier": 2
  },
  {
    "iata": "YHI",
    "name": "Ulukhaktok Holman Airport",
    "city": "Holman Island",
    "country": "Canada",
    "lat": 70.7628,
    "lng": -117.806,
    "tier": 3
  },
  {
    "iata": "HCR",
    "name": "Holy Cross Airport",
    "city": "Holy Cross",
    "country": "United States",
    "lat": 62.1883,
    "lng": -159.775,
    "tier": 3
  },
  {
    "iata": "HOM",
    "name": "Homer Airport",
    "city": "Homer",
    "country": "United States",
    "lat": 59.6456,
    "lng": -151.477,
    "tier": 3
  },
  {
    "iata": "HKG",
    "name": "Hong Kong International Airport",
    "city": "Hong Kong",
    "country": "Hong Kong",
    "lat": 22.3089,
    "lng": 113.915,
    "tier": 1
  },
  {
    "iata": "HIR",
    "name": "Honiara International Airport",
    "city": "Honiara",
    "country": "Solomon Islands",
    "lat": -9.428,
    "lng": 160.055,
    "tier": 2
  },
  {
    "iata": "HVG",
    "name": "Valan Airport",
    "city": "Honningsvag",
    "country": "Norway",
    "lat": 71.0097,
    "lng": 25.9836,
    "tier": 3
  },
  {
    "iata": "HNL",
    "name": "Daniel K Inouye International Airport",
    "city": "Honolulu",
    "country": "United States",
    "lat": 21.3206,
    "lng": -157.9242,
    "tier": 1
  },
  {
    "iata": "MQJ",
    "name": "Moma Airport",
    "city": "Honuu",
    "country": "Russia",
    "lat": 66.4509,
    "lng": 143.2616,
    "tier": 3
  },
  {
    "iata": "HNH",
    "name": "Hoonah Airport",
    "city": "Hoonah",
    "country": "United States",
    "lat": 58.0961,
    "lng": -135.4101,
    "tier": 3
  },
  {
    "iata": "HPB",
    "name": "Hooper Bay Airport",
    "city": "Hooper Bay",
    "country": "United States",
    "lat": 61.5239,
    "lng": -166.147,
    "tier": 3
  },
  {
    "iata": "YHO",
    "name": "Hopedale Airport",
    "city": "Hopedale",
    "country": "Canada",
    "lat": 55.4483,
    "lng": -60.2286,
    "tier": 3
  },
  {
    "iata": "HID",
    "name": "Horn Island Airport",
    "city": "Horn Island",
    "country": "Australia",
    "lat": -10.5864,
    "lng": 142.29,
    "tier": 3
  },
  {
    "iata": "HOR",
    "name": "Horta Airport",
    "city": "Horta",
    "country": "Portugal",
    "lat": 38.5199,
    "lng": -28.7159,
    "tier": 2
  },
  {
    "iata": "HKN",
    "name": "Kimbe Airport",
    "city": "Hoskins",
    "country": "Papua New Guinea",
    "lat": -5.4622,
    "lng": 150.405,
    "tier": 2
  },
  {
    "iata": "HOT",
    "name": "Memorial Field",
    "city": "Hot Springs",
    "country": "United States",
    "lat": 34.478,
    "lng": -93.0962,
    "tier": 3
  },
  {
    "iata": "HTN",
    "name": "Hotan Airport",
    "city": "Hotan",
    "country": "China",
    "lat": 37.0385,
    "lng": 79.8649,
    "tier": 2
  },
  {
    "iata": "HOU",
    "name": "William P Hobby Airport",
    "city": "Houston",
    "country": "United States",
    "lat": 29.6454,
    "lng": -95.2789,
    "tier": 1
  },
  {
    "iata": "IAH",
    "name": "George Bush Intercontinental Houston Airport",
    "city": "Houston",
    "country": "United States",
    "lat": 29.9844,
    "lng": -95.3414,
    "tier": 1
  },
  {
    "iata": "HUH",
    "name": "Huahine-Fare Airport",
    "city": "Huahine Island",
    "country": "French Polynesia",
    "lat": -16.6872,
    "lng": -151.022,
    "tier": 3
  },
  {
    "iata": "HIA",
    "name": "Lianshui Airport",
    "city": "Huai An",
    "country": "China",
    "lat": 33.7908,
    "lng": 119.125,
    "tier": 2
  },
  {
    "iata": "HUN",
    "name": "Hualien Airport",
    "city": "Hualien",
    "country": "Taiwan",
    "lat": 24.0231,
    "lng": 121.618,
    "tier": 3
  },
  {
    "iata": "NOV",
    "name": "Nova Lisboa Airport",
    "city": "Huambo",
    "country": "Angola",
    "lat": -12.8089,
    "lng": 15.7605,
    "tier": 3
  },
  {
    "iata": "TXN",
    "name": "Tunxi International Airport",
    "city": "Huangshan",
    "country": "China",
    "lat": 29.7333,
    "lng": 118.256,
    "tier": 1
  },
  {
    "iata": "HYN",
    "name": "Huangyan Luqiao Airport",
    "city": "Huangyan",
    "country": "China",
    "lat": 28.5622,
    "lng": 121.429,
    "tier": 2
  },
  {
    "iata": "HUX",
    "name": "Bahías de Huatulco International Airport",
    "city": "Huatulco",
    "country": "Mexico",
    "lat": 15.7753,
    "lng": -96.2626,
    "tier": 3
  },
  {
    "iata": "HOE",
    "name": "Ban Huoeisay Airport",
    "city": "Huay Xai",
    "country": "Laos",
    "lat": 20.2573,
    "lng": 100.437,
    "tier": 3
  },
  {
    "iata": "HBX",
    "name": "Hubli Airport",
    "city": "Hubli",
    "country": "India",
    "lat": 15.3617,
    "lng": 75.0849,
    "tier": 3
  },
  {
    "iata": "HUI",
    "name": "Phu Bai Airport",
    "city": "Hue",
    "country": "Vietnam",
    "lat": 16.4015,
    "lng": 107.703,
    "tier": 3
  },
  {
    "iata": "HUS",
    "name": "Hughes Airport",
    "city": "Hughes",
    "country": "United States",
    "lat": 66.0411,
    "lng": -154.263,
    "tier": 3
  },
  {
    "iata": "HUY",
    "name": "Humberside Airport",
    "city": "Humberside",
    "country": "United Kingdom",
    "lat": 53.5744,
    "lng": -0.3508,
    "tier": 3
  },
  {
    "iata": "HTS",
    "name": "Tri-State/Milton J. Ferguson Field",
    "city": "Huntington",
    "country": "United States",
    "lat": 38.3667,
    "lng": -82.558,
    "tier": 3
  },
  {
    "iata": "HSV",
    "name": "Huntsville International Carl T Jones Field",
    "city": "Huntsville",
    "country": "United States",
    "lat": 34.6372,
    "lng": -86.7751,
    "tier": 2
  },
  {
    "iata": "HRG",
    "name": "Hurghada International Airport",
    "city": "Hurghada",
    "country": "Egypt",
    "lat": 27.1783,
    "lng": 33.7994,
    "tier": 1
  },
  {
    "iata": "HON",
    "name": "Huron Regional Airport",
    "city": "Huron",
    "country": "United States",
    "lat": 44.3852,
    "lng": -98.2285,
    "tier": 3
  },
  {
    "iata": "HSL",
    "name": "Huslia Airport",
    "city": "Huslia",
    "country": "United States",
    "lat": 65.6979,
    "lng": -156.351,
    "tier": 3
  },
  {
    "iata": "HUU",
    "name": "Alferez Fap David Figueroa Fernandini Airport",
    "city": "Huánuco",
    "country": "Peru",
    "lat": -9.8788,
    "lng": -76.2048,
    "tier": 3
  },
  {
    "iata": "HYG",
    "name": "Hydaburg Seaplane Base",
    "city": "Hydaburg",
    "country": "United States",
    "lat": 55.2063,
    "lng": -132.828,
    "tier": 3
  },
  {
    "iata": "HYD",
    "name": "Rajiv Gandhi International Airport",
    "city": "Hyderabad",
    "country": "India",
    "lat": 17.2313,
    "lng": 78.4299,
    "tier": 1
  },
  {
    "iata": "TLN",
    "name": "Toulon-Hyères Airport",
    "city": "Hyeres",
    "country": "France",
    "lat": 43.0973,
    "lng": 6.146,
    "tier": 3
  },
  {
    "iata": "IAS",
    "name": "Iaşi Airport",
    "city": "Iasi",
    "country": "Romania",
    "lat": 47.1785,
    "lng": 27.6206,
    "tier": 2
  },
  {
    "iata": "IBA",
    "name": "Ibadan Airport",
    "city": "Ibadan",
    "country": "Nigeria",
    "lat": 7.3625,
    "lng": 3.9783,
    "tier": 3
  },
  {
    "iata": "IBE",
    "name": "Perales Airport",
    "city": "Ibague",
    "country": "Colombia",
    "lat": 4.4216,
    "lng": -75.1333,
    "tier": 3
  },
  {
    "iata": "IBR",
    "name": "Hyakuri Airport",
    "city": "Ibaraki",
    "country": "Japan",
    "lat": 36.1811,
    "lng": 140.415,
    "tier": 3
  },
  {
    "iata": "IBZ",
    "name": "Ibiza Airport",
    "city": "Ibiza",
    "country": "Spain",
    "lat": 38.8729,
    "lng": 1.3731,
    "tier": 1
  },
  {
    "iata": "IDA",
    "name": "Idaho Falls Regional Airport",
    "city": "Idaho Falls",
    "country": "United States",
    "lat": 43.5146,
    "lng": -112.071,
    "tier": 3
  },
  {
    "iata": "IAA",
    "name": "Igarka Airport",
    "city": "Igarka",
    "country": "Russia",
    "lat": 67.4372,
    "lng": 86.6219,
    "tier": 3
  },
  {
    "iata": "IGD",
    "name": "Iğdır Airport",
    "city": "Igdir",
    "country": "Turkey",
    "lat": 39.9766,
    "lng": 43.8766,
    "tier": 3
  },
  {
    "iata": "IGG",
    "name": "Igiugig Airport",
    "city": "Igiugig",
    "country": "United States",
    "lat": 59.324,
    "lng": -155.902,
    "tier": 3
  },
  {
    "iata": "YGT",
    "name": "Igloolik Airport",
    "city": "Igloolik",
    "country": "Canada",
    "lat": 69.3647,
    "lng": -81.8161,
    "tier": 3
  },
  {
    "iata": "IGR",
    "name": "Cataratas Del Iguazú International Airport",
    "city": "Iguazu Falls",
    "country": "Argentina",
    "lat": -25.7373,
    "lng": -54.4734,
    "tier": 3
  },
  {
    "iata": "JIK",
    "name": "Ikaria Airport",
    "city": "Ikaria",
    "country": "Greece",
    "lat": 37.6827,
    "lng": 26.3471,
    "tier": 3
  },
  {
    "iata": "IKI",
    "name": "Iki Airport",
    "city": "Iki",
    "country": "Japan",
    "lat": 33.749,
    "lng": 129.785,
    "tier": 3
  },
  {
    "iata": "IIL",
    "name": "Ilam Airport",
    "city": "Ilam",
    "country": "Iran",
    "lat": 33.5866,
    "lng": 46.4048,
    "tier": 3
  },
  {
    "iata": "YGR",
    "name": "Îles-de-la-Madeleine Airport",
    "city": "Iles De La Madeleine",
    "country": "Canada",
    "lat": 47.4247,
    "lng": -61.7781,
    "tier": 3
  },
  {
    "iata": "IOS",
    "name": "Bahia - Jorge Amado Airport",
    "city": "Ilheus",
    "country": "Brazil",
    "lat": -14.816,
    "lng": -39.0332,
    "tier": 2
  },
  {
    "iata": "ILI",
    "name": "Iliamna Airport",
    "city": "Iliamna",
    "country": "United States",
    "lat": 59.7544,
    "lng": -154.911,
    "tier": 3
  },
  {
    "iata": "ILO",
    "name": "Iloilo International Airport",
    "city": "Iloilo",
    "country": "Philippines",
    "lat": 10.833,
    "lng": 122.4934,
    "tier": 2
  },
  {
    "iata": "ILR",
    "name": "Ilorin International Airport",
    "city": "Ilorin",
    "country": "Nigeria",
    "lat": 8.4402,
    "lng": 4.4939,
    "tier": 3
  },
  {
    "iata": "JAV",
    "name": "Ilulissat Airport",
    "city": "Ilulissat",
    "country": "Greenland",
    "lat": 69.2432,
    "lng": -51.0571,
    "tier": 3
  },
  {
    "iata": "QOW",
    "name": "Sam Mbakwe International Airport",
    "city": "Imo",
    "country": "Nigeria",
    "lat": 5.4271,
    "lng": 7.206,
    "tier": 3
  },
  {
    "iata": "IMP",
    "name": "Prefeito Renato Moreira Airport",
    "city": "Imperatriz",
    "country": "Brazil",
    "lat": -5.5313,
    "lng": -47.46,
    "tier": 2
  },
  {
    "iata": "IPL",
    "name": "Imperial County Airport",
    "city": "Imperial",
    "country": "United States",
    "lat": 32.8342,
    "lng": -115.579,
    "tier": 3
  },
  {
    "iata": "IMF",
    "name": "Imphal Airport",
    "city": "Imphal",
    "country": "India",
    "lat": 24.76,
    "lng": 93.8967,
    "tier": 2
  },
  {
    "iata": "INZ",
    "name": "In Salah Airport",
    "city": "In Salah",
    "country": "Algeria",
    "lat": 27.251,
    "lng": 2.512,
    "tier": 3
  },
  {
    "iata": "IND",
    "name": "Indianapolis International Airport",
    "city": "Indianapolis",
    "country": "United States",
    "lat": 39.7173,
    "lng": -86.2944,
    "tier": 1
  },
  {
    "iata": "IDR",
    "name": "Devi Ahilyabai Holkar Airport",
    "city": "Indore",
    "country": "India",
    "lat": 22.7218,
    "lng": 75.8011,
    "tier": 2
  },
  {
    "iata": "INH",
    "name": "Inhambane Airport",
    "city": "Inhambane",
    "country": "Mozambique",
    "lat": -23.8764,
    "lng": 35.4085,
    "tier": 3
  },
  {
    "iata": "INN",
    "name": "Innsbruck Airport",
    "city": "Innsbruck",
    "country": "Austria",
    "lat": 47.2602,
    "lng": 11.344,
    "tier": 2
  },
  {
    "iata": "INL",
    "name": "Falls International Airport",
    "city": "International Falls",
    "country": "United States",
    "lat": 48.5662,
    "lng": -93.4031,
    "tier": 3
  },
  {
    "iata": "YPH",
    "name": "Inukjuak Airport",
    "city": "Inukjuak",
    "country": "Canada",
    "lat": 58.4719,
    "lng": -78.0769,
    "tier": 3
  },
  {
    "iata": "YEV",
    "name": "Inuvik Mike Zubko Airport",
    "city": "Inuvik",
    "country": "Canada",
    "lat": 68.3042,
    "lng": -133.483,
    "tier": 2
  },
  {
    "iata": "IVC",
    "name": "Invercargill Airport",
    "city": "Invercargill",
    "country": "New Zealand",
    "lat": -46.4124,
    "lng": 168.313,
    "tier": 3
  },
  {
    "iata": "INV",
    "name": "Inverness Airport",
    "city": "Inverness",
    "country": "United Kingdom",
    "lat": 57.5425,
    "lng": -4.0475,
    "tier": 2
  },
  {
    "iata": "IOA",
    "name": "Ioannina Airport",
    "city": "Ioannina",
    "country": "Greece",
    "lat": 39.6964,
    "lng": 20.8225,
    "tier": 3
  },
  {
    "iata": "IPN",
    "name": "Usiminas Airport",
    "city": "Ipatinga",
    "country": "Brazil",
    "lat": -19.4707,
    "lng": -42.4876,
    "tier": 3
  },
  {
    "iata": "IPI",
    "name": "San Luis Airport",
    "city": "Ipiales",
    "country": "Colombia",
    "lat": 0.8619,
    "lng": -77.6718,
    "tier": 3
  },
  {
    "iata": "IPH",
    "name": "Sultan Azlan Shah Airport",
    "city": "Ipoh",
    "country": "Malaysia",
    "lat": 4.568,
    "lng": 101.092,
    "tier": 3
  },
  {
    "iata": "IPA",
    "name": "Ipota Airport",
    "city": "Ipota",
    "country": "Vanuatu",
    "lat": -18.8564,
    "lng": 169.2833,
    "tier": 3
  },
  {
    "iata": "YFB",
    "name": "Iqaluit Airport",
    "city": "Iqaluit",
    "country": "Canada",
    "lat": 63.7564,
    "lng": -68.5558,
    "tier": 2
  },
  {
    "iata": "IQQ",
    "name": "Diego Aracena Airport",
    "city": "Iquique",
    "country": "Chile",
    "lat": -20.5352,
    "lng": -70.1813,
    "tier": 2
  },
  {
    "iata": "IQT",
    "name": "Coronel FAP Francisco Secada Vignetta International Airport",
    "city": "Iquitos",
    "country": "Peru",
    "lat": -3.7847,
    "lng": -73.3088,
    "tier": 2
  },
  {
    "iata": "IKT",
    "name": "Irkutsk Airport",
    "city": "Irkutsk",
    "country": "Russia",
    "lat": 52.268,
    "lng": 104.389,
    "tier": 1
  },
  {
    "iata": "IMT",
    "name": "Ford Airport",
    "city": "Iron Mountain",
    "country": "United States",
    "lat": 45.8184,
    "lng": -88.1145,
    "tier": 3
  },
  {
    "iata": "IFJ",
    "name": "Ísafjörður Airport",
    "city": "Isafjordur",
    "country": "Iceland",
    "lat": 66.0581,
    "lng": -23.1353,
    "tier": 3
  },
  {
    "iata": "ISG",
    "name": "New Ishigaki Airport",
    "city": "Ishigaki",
    "country": "Japan",
    "lat": 24.3964,
    "lng": 124.245,
    "tier": 2
  },
  {
    "iata": "IRP",
    "name": "Matari Airport",
    "city": "Isiro",
    "country": "Congo (Kinshasa)",
    "lat": 2.8276,
    "lng": 27.5883,
    "tier": 3
  },
  {
    "iata": "ISB",
    "name": "New Islamabad International Airport",
    "city": "Islamabad",
    "country": "Pakistan",
    "lat": 33.5607,
    "lng": 72.8516,
    "tier": 1
  },
  {
    "iata": "ILY",
    "name": "Islay Airport",
    "city": "Islay",
    "country": "United Kingdom",
    "lat": 55.6819,
    "lng": -6.2567,
    "tier": 3
  },
  {
    "iata": "IOM",
    "name": "Isle of Man Airport",
    "city": "Isle Of Man",
    "country": "Isle of Man",
    "lat": 54.0833,
    "lng": -4.6239,
    "tier": 2
  },
  {
    "iata": "ISP",
    "name": "Long Island Mac Arthur Airport",
    "city": "Islip",
    "country": "United States",
    "lat": 40.7952,
    "lng": -73.1002,
    "tier": 2
  },
  {
    "iata": "ISE",
    "name": "Süleyman Demirel International Airport",
    "city": "Isparta",
    "country": "Turkey",
    "lat": 37.8554,
    "lng": 30.3684,
    "tier": 3
  },
  {
    "iata": "IST",
    "name": "Istanbul Airport",
    "city": "Istanbul",
    "country": "Turkey",
    "lat": 41.2753,
    "lng": 28.7519,
    "tier": 1
  },
  {
    "iata": "SAW",
    "name": "Sabiha Gökçen International Airport",
    "city": "Istanbul",
    "country": "Turkey",
    "lat": 40.8986,
    "lng": 29.3092,
    "tier": 1
  },
  {
    "iata": "ITB",
    "name": "Itaituba Airport",
    "city": "Itaituba",
    "country": "Brazil",
    "lat": -4.2423,
    "lng": -56.0007,
    "tier": 3
  },
  {
    "iata": "ITH",
    "name": "Ithaca Tompkins Regional Airport",
    "city": "Ithaca",
    "country": "United States",
    "lat": 42.491,
    "lng": -76.4584,
    "tier": 3
  },
  {
    "iata": "OBY",
    "name": "Ittoqqortoormiit Heliport",
    "city": "Ittoqqortoormiit",
    "country": "Greenland",
    "lat": 70.4882,
    "lng": -21.9717,
    "tier": 3
  },
  {
    "iata": "IVL",
    "name": "Ivalo Airport",
    "city": "Ivalo",
    "country": "Finland",
    "lat": 68.6073,
    "lng": 27.4053,
    "tier": 3
  },
  {
    "iata": "IFO",
    "name": "Ivano-Frankivsk International Airport",
    "city": "Ivano-Frankivsk",
    "country": "Ukraine",
    "lat": 48.8842,
    "lng": 24.6861,
    "tier": 3
  },
  {
    "iata": "YIK",
    "name": "Ivujivik Airport",
    "city": "Ivujivik",
    "country": "Canada",
    "lat": 62.4173,
    "lng": -77.9253,
    "tier": 3
  },
  {
    "iata": "IWK",
    "name": "Iwakuni Marine Corps Air Station",
    "city": "Iwakuni",
    "country": "Japan",
    "lat": 34.1439,
    "lng": 132.236,
    "tier": 3
  },
  {
    "iata": "IWJ",
    "name": "Iwami Airport",
    "city": "Iwami",
    "country": "Japan",
    "lat": 34.6764,
    "lng": 131.79,
    "tier": 3
  },
  {
    "iata": "IJK",
    "name": "Izhevsk Airport",
    "city": "Izhevsk",
    "country": "Russia",
    "lat": 56.8281,
    "lng": 53.4575,
    "tier": 3
  },
  {
    "iata": "ADB",
    "name": "Adnan Menderes International Airport",
    "city": "Izmir",
    "country": "Turkey",
    "lat": 38.2924,
    "lng": 27.157,
    "tier": 1
  },
  {
    "iata": "IZO",
    "name": "Izumo Airport",
    "city": "Izumo",
    "country": "Japan",
    "lat": 35.4136,
    "lng": 132.89,
    "tier": 3
  },
  {
    "iata": "JLR",
    "name": "Jabalpur Airport",
    "city": "Jabalpur",
    "country": "India",
    "lat": 23.1778,
    "lng": 80.052,
    "tier": 3
  },
  {
    "iata": "JAC",
    "name": "Jackson Hole Airport",
    "city": "Jacksn Hole",
    "country": "United States",
    "lat": 43.6073,
    "lng": -110.738,
    "tier": 3
  },
  {
    "iata": "JAN",
    "name": "Jackson-Medgar Wiley Evers International Airport",
    "city": "Jackson",
    "country": "United States",
    "lat": 32.3112,
    "lng": -90.0759,
    "tier": 2
  },
  {
    "iata": "MKL",
    "name": "McKellar-Sipes Regional Airport",
    "city": "Jackson",
    "country": "United States",
    "lat": 35.5999,
    "lng": -88.9156,
    "tier": 3
  },
  {
    "iata": "JAX",
    "name": "Jacksonville International Airport",
    "city": "Jacksonville",
    "country": "United States",
    "lat": 30.4941,
    "lng": -81.6879,
    "tier": 1
  },
  {
    "iata": "OAJ",
    "name": "Albert J Ellis Airport",
    "city": "Jacksonville NC",
    "country": "United States",
    "lat": 34.8292,
    "lng": -77.6121,
    "tier": 2
  },
  {
    "iata": "JAI",
    "name": "Jaipur International Airport",
    "city": "Jaipur",
    "country": "India",
    "lat": 26.8242,
    "lng": 75.8122,
    "tier": 2
  },
  {
    "iata": "CGK",
    "name": "Soekarno-Hatta International Airport",
    "city": "Jakarta",
    "country": "Indonesia",
    "lat": -6.1256,
    "lng": 106.656,
    "tier": 1
  },
  {
    "iata": "JAL",
    "name": "El Lencero Airport",
    "city": "Jalapa",
    "country": "Mexico",
    "lat": 19.4751,
    "lng": -96.7975,
    "tier": 3
  },
  {
    "iata": "DJB",
    "name": "Sultan Thaha Airport",
    "city": "Jambi",
    "country": "Indonesia",
    "lat": -1.638,
    "lng": 103.644,
    "tier": 2
  },
  {
    "iata": "JHW",
    "name": "Chautauqua County-Jamestown Airport",
    "city": "Jamestown",
    "country": "United States",
    "lat": 42.1534,
    "lng": -79.258,
    "tier": 3
  },
  {
    "iata": "IXJ",
    "name": "Jammu Airport",
    "city": "Jammu",
    "country": "India",
    "lat": 32.6891,
    "lng": 74.8374,
    "tier": 2
  },
  {
    "iata": "JGA",
    "name": "Jamnagar Airport",
    "city": "Jamnagar",
    "country": "India",
    "lat": 22.4655,
    "lng": 70.0126,
    "tier": 3
  },
  {
    "iata": "JKR",
    "name": "Janakpur Airport",
    "city": "Janakpur",
    "country": "Nepal",
    "lat": 26.7088,
    "lng": 85.9224,
    "tier": 3
  },
  {
    "iata": "JQE",
    "name": "Jaqué Airport",
    "city": "Jaqué",
    "country": "Panama",
    "lat": 7.5178,
    "lng": -78.1572,
    "tier": 3
  },
  {
    "iata": "JAU",
    "name": "Francisco Carle Airport",
    "city": "Jauja",
    "country": "Peru",
    "lat": -11.7831,
    "lng": -75.4734,
    "tier": 3
  },
  {
    "iata": "DJJ",
    "name": "Sentani International Airport",
    "city": "Jayapura",
    "country": "Indonesia",
    "lat": -2.577,
    "lng": 140.516,
    "tier": 2
  },
  {
    "iata": "JED",
    "name": "King Abdulaziz International Airport",
    "city": "Jeddah",
    "country": "Saudi Arabia",
    "lat": 21.6796,
    "lng": 39.1565,
    "tier": 1
  },
  {
    "iata": "XRY",
    "name": "Jerez Airport",
    "city": "Jerez",
    "country": "Spain",
    "lat": 36.7446,
    "lng": -6.0601,
    "tier": 2
  },
  {
    "iata": "JER",
    "name": "Jersey Airport",
    "city": "Jersey",
    "country": "Jersey",
    "lat": 49.2079,
    "lng": -2.1955,
    "tier": 1
  },
  {
    "iata": "JSR",
    "name": "Jessore Airport",
    "city": "Jessore",
    "country": "Bangladesh",
    "lat": 23.1838,
    "lng": 89.1608,
    "tier": 3
  },
  {
    "iata": "JPR",
    "name": "Ji-Paraná Airport",
    "city": "Ji-Paraná",
    "country": "Brazil",
    "lat": -10.8708,
    "lng": -61.8465,
    "tier": 3
  },
  {
    "iata": "JGD",
    "name": "Jiagedaqi Airport",
    "city": "Jiagedaqi District",
    "country": "China",
    "lat": 50.3714,
    "lng": 124.1175,
    "tier": 3
  },
  {
    "iata": "JMU",
    "name": "Jiamusi Airport",
    "city": "Jiamusi",
    "country": "China",
    "lat": 46.8434,
    "lng": 130.465,
    "tier": 2
  },
  {
    "iata": "JGS",
    "name": "Jinggangshan Airport",
    "city": "Jian",
    "country": "China",
    "lat": 26.8569,
    "lng": 114.737,
    "tier": 2
  },
  {
    "iata": "JGN",
    "name": "Jiayuguan Airport",
    "city": "Jiayuguan",
    "country": "China",
    "lat": 39.8569,
    "lng": 98.3414,
    "tier": 2
  },
  {
    "iata": "JIJ",
    "name": "Wilwal International Airport",
    "city": "Jijiga",
    "country": "Ethiopia",
    "lat": 9.3325,
    "lng": 42.9121,
    "tier": 3
  },
  {
    "iata": "JIM",
    "name": "Jimma Airport",
    "city": "Jimma",
    "country": "Ethiopia",
    "lat": 7.6661,
    "lng": 36.8166,
    "tier": 3
  },
  {
    "iata": "TNA",
    "name": "Yaoqiang Airport",
    "city": "Jinan",
    "country": "China",
    "lat": 36.8572,
    "lng": 117.216,
    "tier": 1
  },
  {
    "iata": "JIC",
    "name": "Jinchuan Airport",
    "city": "Jinchuan",
    "country": "China",
    "lat": 38.5422,
    "lng": 102.3483,
    "tier": 2
  },
  {
    "iata": "JDZ",
    "name": "Jingdezhen Airport",
    "city": "Jingdezhen",
    "country": "China",
    "lat": 29.3386,
    "lng": 117.176,
    "tier": 2
  },
  {
    "iata": "JHG",
    "name": "Xishuangbanna Gasa Airport",
    "city": "Jinghonggasa",
    "country": "China",
    "lat": 21.9739,
    "lng": 100.76,
    "tier": 2
  },
  {
    "iata": "JNG",
    "name": "Jining Qufu Airport",
    "city": "Jining",
    "country": "China",
    "lat": 35.2928,
    "lng": 116.3467,
    "tier": 2
  },
  {
    "iata": "JNZ",
    "name": "Jinzhou Airport",
    "city": "Jinzhou",
    "country": "China",
    "lat": 41.1014,
    "lng": 121.062,
    "tier": 3
  },
  {
    "iata": "JIU",
    "name": "Jiujiang Lushan Airport",
    "city": "Jiujiang",
    "country": "China",
    "lat": 29.4769,
    "lng": 115.8011,
    "tier": 2
  },
  {
    "iata": "JZH",
    "name": "Jiuzhai Huanglong Airport",
    "city": "Jiuzhaigou",
    "country": "China",
    "lat": 32.8533,
    "lng": 103.6822,
    "tier": 2
  },
  {
    "iata": "JXA",
    "name": "Jixi Xingkaihu Airport",
    "city": "Jixi",
    "country": "China",
    "lat": 45.293,
    "lng": 131.193,
    "tier": 2
  },
  {
    "iata": "JCB",
    "name": "Santa Terezinha Airport",
    "city": "Joacaba",
    "country": "Brazil",
    "lat": -27.1714,
    "lng": -51.5533,
    "tier": 3
  },
  {
    "iata": "JPA",
    "name": "Presidente Castro Pinto International Airport",
    "city": "Joao Pessoa",
    "country": "Brazil",
    "lat": -7.1458,
    "lng": -34.9486,
    "tier": 2
  },
  {
    "iata": "JDH",
    "name": "Jodhpur Airport",
    "city": "Jodhpur",
    "country": "India",
    "lat": 26.2511,
    "lng": 73.0489,
    "tier": 2
  },
  {
    "iata": "JKG",
    "name": "Jönköping Airport",
    "city": "Joenkoeping",
    "country": "Sweden",
    "lat": 57.7576,
    "lng": 14.0687,
    "tier": 3
  },
  {
    "iata": "JOE",
    "name": "Joensuu Airport",
    "city": "Joensuu",
    "country": "Finland",
    "lat": 62.6629,
    "lng": 29.6075,
    "tier": 3
  },
  {
    "iata": "HLA",
    "name": "Lanseria Airport",
    "city": "Johannesburg",
    "country": "South Africa",
    "lat": -25.9385,
    "lng": 27.9261,
    "tier": 3
  },
  {
    "iata": "JNB",
    "name": "OR Tambo International Airport",
    "city": "Johannesburg",
    "country": "South Africa",
    "lat": -26.1392,
    "lng": 28.246,
    "tier": 1
  },
  {
    "iata": "JST",
    "name": "John Murtha Johnstown Cambria County Airport",
    "city": "Johnstown",
    "country": "United States",
    "lat": 40.3161,
    "lng": -78.8339,
    "tier": 3
  },
  {
    "iata": "JHB",
    "name": "Senai International Airport",
    "city": "Johor Bahru",
    "country": "Malaysia",
    "lat": 1.6413,
    "lng": 103.67,
    "tier": 2
  },
  {
    "iata": "JOI",
    "name": "Lauro Carneiro de Loyola Airport",
    "city": "Joinville",
    "country": "Brazil",
    "lat": -26.2245,
    "lng": -48.7974,
    "tier": 3
  },
  {
    "iata": "JOL",
    "name": "Jolo Airport",
    "city": "Jolo",
    "country": "Philippines",
    "lat": 6.0537,
    "lng": 121.011,
    "tier": 3
  },
  {
    "iata": "JBR",
    "name": "Jonesboro Municipal Airport",
    "city": "Jonesboro",
    "country": "United States",
    "lat": 35.8317,
    "lng": -90.6464,
    "tier": 3
  },
  {
    "iata": "JLN",
    "name": "Joplin Regional Airport",
    "city": "Joplin",
    "country": "United States",
    "lat": 37.1518,
    "lng": -94.4983,
    "tier": 3
  },
  {
    "iata": "JOS",
    "name": "Yakubu Gowon Airport",
    "city": "Jos",
    "country": "Nigeria",
    "lat": 9.6398,
    "lng": 8.8691,
    "tier": 3
  },
  {
    "iata": "JDO",
    "name": "Orlando Bezerra de Menezes Airport",
    "city": "Juazeiro Do Norte",
    "country": "Brazil",
    "lat": -7.219,
    "lng": -39.2701,
    "tier": 3
  },
  {
    "iata": "JUB",
    "name": "Juba International Airport",
    "city": "Juba",
    "country": "South Sudan",
    "lat": 4.872,
    "lng": 31.6011,
    "tier": 2
  },
  {
    "iata": "IZA",
    "name": "Zona da Mata Regional Airport",
    "city": "Juiz de Fora",
    "country": "Brazil",
    "lat": -21.5131,
    "lng": -43.1731,
    "tier": 3
  },
  {
    "iata": "JUJ",
    "name": "Gobernador Horacio Guzman International Airport",
    "city": "Jujuy",
    "country": "Argentina",
    "lat": -24.3928,
    "lng": -65.0978,
    "tier": 3
  },
  {
    "iata": "JCK",
    "name": "Julia Creek Airport",
    "city": "Julia Creek",
    "country": "Australia",
    "lat": -20.6683,
    "lng": 141.723,
    "tier": 3
  },
  {
    "iata": "JUL",
    "name": "Inca Manco Capac International Airport",
    "city": "Juliaca",
    "country": "Peru",
    "lat": -15.4671,
    "lng": -70.1582,
    "tier": 2
  },
  {
    "iata": "JNU",
    "name": "Juneau International Airport",
    "city": "Juneau",
    "country": "United States",
    "lat": 58.355,
    "lng": -134.576,
    "tier": 2
  },
  {
    "iata": "JYV",
    "name": "Jyvaskyla Airport",
    "city": "Jyvaskyla",
    "country": "Finland",
    "lat": 62.3995,
    "lng": 25.6783,
    "tier": 3
  },
  {
    "iata": "KDM",
    "name": "Kaadedhdhoo Airport",
    "city": "Kaadedhdhoo",
    "country": "Maldives",
    "lat": 0.4881,
    "lng": 72.9969,
    "tier": 3
  },
  {
    "iata": "KBL",
    "name": "Hamid Karzai International Airport",
    "city": "Kabul",
    "country": "Afghanistan",
    "lat": 34.5659,
    "lng": 69.2123,
    "tier": 1
  },
  {
    "iata": "KAD",
    "name": "Kaduna Airport",
    "city": "Kaduna",
    "country": "Nigeria",
    "lat": 10.696,
    "lng": 7.3201,
    "tier": 3
  },
  {
    "iata": "KGE",
    "name": "Kaghau Airport",
    "city": "Kagau Island",
    "country": "Solomon Islands",
    "lat": -7.3305,
    "lng": 157.585,
    "tier": 3
  },
  {
    "iata": "KOJ",
    "name": "Kagoshima Airport",
    "city": "Kagoshima",
    "country": "Japan",
    "lat": 31.8034,
    "lng": 130.719,
    "tier": 2
  },
  {
    "iata": "KCM",
    "name": "Kahramanmaraş Airport",
    "city": "Kahramanmaras",
    "country": "Turkey",
    "lat": 37.5388,
    "lng": 36.9535,
    "tier": 3
  },
  {
    "iata": "OGG",
    "name": "Kahului Airport",
    "city": "Kahului",
    "country": "United States",
    "lat": 20.8986,
    "lng": -156.43,
    "tier": 1
  },
  {
    "iata": "KNG",
    "name": "Kaimana Airport",
    "city": "Kaimana",
    "country": "Indonesia",
    "lat": -3.6445,
    "lng": 133.696,
    "tier": 3
  },
  {
    "iata": "KAT",
    "name": "Kaitaia Airport",
    "city": "Kaitaia",
    "country": "New Zealand",
    "lat": -35.07,
    "lng": 173.285,
    "tier": 3
  },
  {
    "iata": "KAJ",
    "name": "Kajaani Airport",
    "city": "Kajaani",
    "country": "Finland",
    "lat": 64.2855,
    "lng": 27.6924,
    "tier": 3
  },
  {
    "iata": "KLX",
    "name": "Kalamata Airport",
    "city": "Kalamata",
    "country": "Greece",
    "lat": 37.0683,
    "lng": 22.0255,
    "tier": 2
  },
  {
    "iata": "AZO",
    "name": "Kalamazoo Battle Creek International Airport",
    "city": "Kalamazoo",
    "country": "United States",
    "lat": 42.2349,
    "lng": -85.5521,
    "tier": 2
  },
  {
    "iata": "FMI",
    "name": "Kalemie Airport",
    "city": "Kalemie",
    "country": "Congo (Kinshasa)",
    "lat": -5.8756,
    "lng": 29.25,
    "tier": 3
  },
  {
    "iata": "KGI",
    "name": "Kalgoorlie Boulder Airport",
    "city": "Kalgoorlie",
    "country": "Australia",
    "lat": -30.7894,
    "lng": 121.462,
    "tier": 3
  },
  {
    "iata": "KLO",
    "name": "Kalibo International Airport",
    "city": "Kalibo",
    "country": "Philippines",
    "lat": 11.6794,
    "lng": 122.376,
    "tier": 2
  },
  {
    "iata": "KGD",
    "name": "Khrabrovo Airport",
    "city": "Kaliningrad",
    "country": "Russia",
    "lat": 54.89,
    "lng": 20.5926,
    "tier": 2
  },
  {
    "iata": "FCA",
    "name": "Glacier Park International Airport",
    "city": "Kalispell",
    "country": "United States",
    "lat": 48.3105,
    "lng": -114.256,
    "tier": 3
  },
  {
    "iata": "KLR",
    "name": "Kalmar Airport",
    "city": "Kalkmar",
    "country": "Sweden",
    "lat": 56.6855,
    "lng": 16.2876,
    "tier": 3
  },
  {
    "iata": "KLG",
    "name": "Kalskag Airport",
    "city": "Kalskag",
    "country": "United States",
    "lat": 61.5363,
    "lng": -160.341,
    "tier": 3
  },
  {
    "iata": "KAL",
    "name": "Kaltag Airport",
    "city": "Kaltag",
    "country": "United States",
    "lat": 64.3191,
    "lng": -158.741,
    "tier": 3
  },
  {
    "iata": "JKL",
    "name": "Kalymnos Airport",
    "city": "Kalymnos",
    "country": "Greece",
    "lat": 36.9633,
    "lng": 26.9406,
    "tier": 2
  },
  {
    "iata": "KME",
    "name": "Kamembe Airport",
    "city": "Kamembe",
    "country": "Rwanda",
    "lat": -2.4622,
    "lng": 28.9079,
    "tier": 3
  },
  {
    "iata": "YKA",
    "name": "Kamloops Airport",
    "city": "Kamloops",
    "country": "Canada",
    "lat": 50.7022,
    "lng": -120.444,
    "tier": 3
  },
  {
    "iata": "MUE",
    "name": "Waimea Kohala Airport",
    "city": "Kamuela",
    "country": "United States",
    "lat": 20.0013,
    "lng": -155.668,
    "tier": 3
  },
  {
    "iata": "KGA",
    "name": "Kananga Airport",
    "city": "Kananga",
    "country": "Congo (Kinshasa)",
    "lat": -5.9001,
    "lng": 22.4692,
    "tier": 3
  },
  {
    "iata": "KMQ",
    "name": "Komatsu Airport",
    "city": "Kanazawa",
    "country": "Japan",
    "lat": 36.3946,
    "lng": 136.407,
    "tier": 2
  },
  {
    "iata": "KDH",
    "name": "Kandahar Airport",
    "city": "Kandahar",
    "country": "Afghanistan",
    "lat": 31.5058,
    "lng": 65.8478,
    "tier": 3
  },
  {
    "iata": "KGT",
    "name": "Kangding Airport",
    "city": "Kangding",
    "country": "China",
    "lat": 30.1575,
    "lng": 101.7347,
    "tier": 3
  },
  {
    "iata": "XGR",
    "name": "Kangiqsualujjuaq (Georges River) Airport",
    "city": "Kangiqsualujjuaq",
    "country": "Canada",
    "lat": 58.7114,
    "lng": -65.9928,
    "tier": 3
  },
  {
    "iata": "YWB",
    "name": "Kangiqsujuaq (Wakeham Bay) Airport",
    "city": "Kangiqsujuaq",
    "country": "Canada",
    "lat": 61.5886,
    "lng": -71.9294,
    "tier": 3
  },
  {
    "iata": "YKG",
    "name": "Kangirsuk Airport",
    "city": "Kangirsuk",
    "country": "Canada",
    "lat": 60.0272,
    "lng": -69.9992,
    "tier": 3
  },
  {
    "iata": "DHM",
    "name": "Kangra Airport",
    "city": "Kangra",
    "country": "India",
    "lat": 32.1651,
    "lng": 76.2634,
    "tier": 3
  },
  {
    "iata": "KAN",
    "name": "Mallam Aminu International Airport",
    "city": "Kano",
    "country": "Nigeria",
    "lat": 12.0476,
    "lng": 8.5246,
    "tier": 2
  },
  {
    "iata": "KNU",
    "name": "Kanpur Airport",
    "city": "Kanpur",
    "country": "India",
    "lat": 26.4043,
    "lng": 80.4101,
    "tier": 3
  },
  {
    "iata": "MCI",
    "name": "Kansas City International Airport",
    "city": "Kansas City",
    "country": "United States",
    "lat": 39.2976,
    "lng": -94.7139,
    "tier": 1
  },
  {
    "iata": "KAZ",
    "name": "Kao Airport",
    "city": "Kao",
    "country": "Indonesia",
    "lat": 1.1853,
    "lng": 127.896,
    "tier": 3
  },
  {
    "iata": "KHH",
    "name": "Kaohsiung International Airport",
    "city": "Kaohsiung",
    "country": "Taiwan",
    "lat": 22.5771,
    "lng": 120.35,
    "tier": 1
  },
  {
    "iata": "YYU",
    "name": "Kapuskasing Airport",
    "city": "Kapuskasing",
    "country": "Canada",
    "lat": 49.4139,
    "lng": -82.4675,
    "tier": 3
  },
  {
    "iata": "KHI",
    "name": "Jinnah International Airport",
    "city": "Karachi",
    "country": "Pakistan",
    "lat": 24.9065,
    "lng": 67.1608,
    "tier": 1
  },
  {
    "iata": "KGF",
    "name": "Sary-Arka Airport",
    "city": "Karaganda",
    "country": "Kazakhstan",
    "lat": 49.6708,
    "lng": 73.3344,
    "tier": 2
  },
  {
    "iata": "KRY",
    "name": "Karamay Airport",
    "city": "Karamay",
    "country": "China",
    "lat": 45.4665,
    "lng": 84.9527,
    "tier": 3
  },
  {
    "iata": "KLV",
    "name": "Karlovy Vary International Airport",
    "city": "Karlovy Vary",
    "country": "Czech Republic",
    "lat": 50.203,
    "lng": 12.915,
    "tier": 3
  },
  {
    "iata": "FKB",
    "name": "Karlsruhe Baden-Baden Airport",
    "city": "Karlsruhe/Baden-Baden",
    "country": "Germany",
    "lat": 48.7794,
    "lng": 8.0805,
    "tier": 2
  },
  {
    "iata": "KSD",
    "name": "Karlstad Airport",
    "city": "Karlstad",
    "country": "Sweden",
    "lat": 59.4447,
    "lng": 13.3374,
    "tier": 3
  },
  {
    "iata": "KYK",
    "name": "Karluk Airport",
    "city": "Karluk",
    "country": "United States",
    "lat": 57.5671,
    "lng": -154.45,
    "tier": 3
  },
  {
    "iata": "AOK",
    "name": "Karpathos Airport",
    "city": "Karpathos",
    "country": "Greece",
    "lat": 35.4214,
    "lng": 27.146,
    "tier": 2
  },
  {
    "iata": "KTA",
    "name": "Karratha Airport",
    "city": "Karratha",
    "country": "Australia",
    "lat": -20.7122,
    "lng": 116.773,
    "tier": 2
  },
  {
    "iata": "KSY",
    "name": "Kars Airport",
    "city": "Kars",
    "country": "Turkey",
    "lat": 40.5622,
    "lng": 43.115,
    "tier": 3
  },
  {
    "iata": "KRP",
    "name": "Karup Airport",
    "city": "Karup",
    "country": "Denmark",
    "lat": 56.2975,
    "lng": 9.1246,
    "tier": 3
  },
  {
    "iata": "XKS",
    "name": "Kasabonika Airport",
    "city": "Kasabonika",
    "country": "Canada",
    "lat": 53.5247,
    "lng": -88.6428,
    "tier": 3
  },
  {
    "iata": "KAA",
    "name": "Kasama Airport",
    "city": "Kasama",
    "country": "Zambia",
    "lat": -10.2167,
    "lng": 31.1333,
    "tier": 3
  },
  {
    "iata": "BBK",
    "name": "Kasane Airport",
    "city": "Kasane",
    "country": "Botswana",
    "lat": -17.8329,
    "lng": 25.1624,
    "tier": 3
  },
  {
    "iata": "KSE",
    "name": "Kasese Airport",
    "city": "Kasese",
    "country": "Uganda",
    "lat": 0.183,
    "lng": 30.1,
    "tier": 3
  },
  {
    "iata": "ZKE",
    "name": "Kashechewan Airport",
    "city": "Kashechewan",
    "country": "Canada",
    "lat": 52.2825,
    "lng": -81.6778,
    "tier": 3
  },
  {
    "iata": "KHG",
    "name": "Kashgar Airport",
    "city": "Kashi",
    "country": "China",
    "lat": 39.5429,
    "lng": 76.02,
    "tier": 2
  },
  {
    "iata": "KUK",
    "name": "Kasigluk Airport",
    "city": "Kasigluk",
    "country": "United States",
    "lat": 60.8744,
    "lng": -162.524,
    "tier": 3
  },
  {
    "iata": "KSJ",
    "name": "Kasos Airport",
    "city": "Kasos",
    "country": "Greece",
    "lat": 35.4214,
    "lng": 26.91,
    "tier": 3
  },
  {
    "iata": "KSF",
    "name": "Kassel-Calden Airport",
    "city": "Kassel",
    "country": "Germany",
    "lat": 51.4173,
    "lng": 9.385,
    "tier": 3
  },
  {
    "iata": "KFS",
    "name": "Kastamonu Airport",
    "city": "Kastamonu",
    "country": "Turkey",
    "lat": 41.3142,
    "lng": 33.7958,
    "tier": 3
  },
  {
    "iata": "KZS",
    "name": "Kastelorizo Airport",
    "city": "Kastelorizo",
    "country": "Greece",
    "lat": 36.1417,
    "lng": 29.5764,
    "tier": 3
  },
  {
    "iata": "KSO",
    "name": "Kastoria National Airport",
    "city": "Kastoria",
    "country": "Greece",
    "lat": 40.4463,
    "lng": 21.2822,
    "tier": 3
  },
  {
    "iata": "KTM",
    "name": "Tribhuvan International Airport",
    "city": "Kathmandu",
    "country": "Nepal",
    "lat": 27.6966,
    "lng": 85.3591,
    "tier": 1
  },
  {
    "iata": "KTW",
    "name": "Katowice International Airport",
    "city": "Katowice",
    "country": "Poland",
    "lat": 50.4743,
    "lng": 19.08,
    "tier": 1
  },
  {
    "iata": "KKR",
    "name": "Kaukura Airport",
    "city": "Kaukura Atoll",
    "country": "French Polynesia",
    "lat": -15.6633,
    "lng": -146.885,
    "tier": 3
  },
  {
    "iata": "KUN",
    "name": "Kaunas International Airport",
    "city": "Kaunas",
    "country": "Lithuania",
    "lat": 54.9639,
    "lng": 24.0848,
    "tier": 2
  },
  {
    "iata": "KVA",
    "name": "Alexander the Great International Airport",
    "city": "Kavala",
    "country": "Greece",
    "lat": 40.9133,
    "lng": 24.6192,
    "tier": 2
  },
  {
    "iata": "KVG",
    "name": "Kavieng Airport",
    "city": "Kavieng",
    "country": "Papua New Guinea",
    "lat": -2.5794,
    "lng": 150.808,
    "tier": 3
  },
  {
    "iata": "KAW",
    "name": "Kawthoung Airport",
    "city": "Kawthoung",
    "country": "Burma",
    "lat": 10.0493,
    "lng": 98.538,
    "tier": 3
  },
  {
    "iata": "ASR",
    "name": "Kayseri Erkilet Airport",
    "city": "Kayseri",
    "country": "Turkey",
    "lat": 38.7704,
    "lng": 35.4954,
    "tier": 2
  },
  {
    "iata": "KZN",
    "name": "Kazan International Airport",
    "city": "Kazan",
    "country": "Russia",
    "lat": 55.6062,
    "lng": 49.2787,
    "tier": 1
  },
  {
    "iata": "KEW",
    "name": "Keewaywin Airport",
    "city": "Keewaywin",
    "country": "Canada",
    "lat": 52.9911,
    "lng": -92.8364,
    "tier": 3
  },
  {
    "iata": "EFL",
    "name": "Kefallinia Airport",
    "city": "Keffallinia",
    "country": "Greece",
    "lat": 38.1201,
    "lng": 20.5005,
    "tier": 2
  },
  {
    "iata": "KEF",
    "name": "Keflavik International Airport",
    "city": "Keflavik",
    "country": "Iceland",
    "lat": 63.985,
    "lng": -22.6056,
    "tier": 1
  },
  {
    "iata": "ZKG",
    "name": "Kegaska Airport",
    "city": "Kegaska",
    "country": "Canada",
    "lat": 50.1958,
    "lng": -61.2658,
    "tier": 3
  },
  {
    "iata": "YLW",
    "name": "Kelowna International Airport",
    "city": "Kelowna",
    "country": "Canada",
    "lat": 49.9561,
    "lng": -119.378,
    "tier": 2
  },
  {
    "iata": "KEM",
    "name": "Kemi-Tornio Airport",
    "city": "Kemi",
    "country": "Finland",
    "lat": 65.7787,
    "lng": 24.5821,
    "tier": 3
  },
  {
    "iata": "KEJ",
    "name": "Kemerovo Airport",
    "city": "Kemorovo",
    "country": "Russia",
    "lat": 55.2701,
    "lng": 86.1072,
    "tier": 3
  },
  {
    "iata": "ENA",
    "name": "Kenai Municipal Airport",
    "city": "Kenai",
    "country": "United States",
    "lat": 60.5731,
    "lng": -151.245,
    "tier": 3
  },
  {
    "iata": "KDI",
    "name": "Wolter Monginsidi Airport",
    "city": "Kendari",
    "country": "Indonesia",
    "lat": -4.0816,
    "lng": 122.418,
    "tier": 3
  },
  {
    "iata": "KET",
    "name": "Kengtung Airport",
    "city": "Kengtung",
    "country": "Burma",
    "lat": 21.3016,
    "lng": 99.636,
    "tier": 3
  },
  {
    "iata": "YQK",
    "name": "Kenora Airport",
    "city": "Kenora",
    "country": "Canada",
    "lat": 49.7883,
    "lng": -94.3631,
    "tier": 3
  },
  {
    "iata": "KKE",
    "name": "Kerikeri Airport",
    "city": "Kerikeri",
    "country": "New Zealand",
    "lat": -35.2628,
    "lng": 173.912,
    "tier": 3
  },
  {
    "iata": "CFU",
    "name": "Ioannis Kapodistrias International Airport",
    "city": "Kerkyra/corfu",
    "country": "Greece",
    "lat": 39.6019,
    "lng": 19.9117,
    "tier": 1
  },
  {
    "iata": "KER",
    "name": "Kerman Airport",
    "city": "Kerman",
    "country": "Iran",
    "lat": 30.2744,
    "lng": 56.9511,
    "tier": 3
  },
  {
    "iata": "KIR",
    "name": "Kerry Airport",
    "city": "Kerry",
    "country": "Ireland",
    "lat": 52.1809,
    "lng": -9.5238,
    "tier": 2
  },
  {
    "iata": "KTE",
    "name": "Kerteh Airport",
    "city": "Kerteh",
    "country": "Malaysia",
    "lat": 4.5372,
    "lng": 103.427,
    "tier": 3
  },
  {
    "iata": "KTG",
    "name": "Ketapang(Rahadi Usman) Airport",
    "city": "Ketapang",
    "country": "Indonesia",
    "lat": -1.8166,
    "lng": 109.963,
    "tier": 3
  },
  {
    "iata": "KTN",
    "name": "Ketchikan International Airport",
    "city": "Ketchikan",
    "country": "United States",
    "lat": 55.3556,
    "lng": -131.714,
    "tier": 2
  },
  {
    "iata": "EYW",
    "name": "Key West International Airport",
    "city": "Key West",
    "country": "United States",
    "lat": 24.5561,
    "lng": -81.7596,
    "tier": 2
  },
  {
    "iata": "KHV",
    "name": "Khabarovsk-Novy Airport",
    "city": "Khabarovsk",
    "country": "Russia",
    "lat": 48.528,
    "lng": 135.188,
    "tier": 1
  },
  {
    "iata": "HJR",
    "name": "Khajuraho Airport",
    "city": "Khajuraho",
    "country": "India",
    "lat": 24.8172,
    "lng": 79.9186,
    "tier": 3
  },
  {
    "iata": "PGU",
    "name": "Persian Gulf International Airport",
    "city": "Khalije Fars",
    "country": "Iran",
    "lat": 27.3796,
    "lng": 52.7377,
    "tier": 3
  },
  {
    "iata": "KSQ",
    "name": "Karshi Khanabad Airport",
    "city": "Khanabad",
    "country": "Uzbekistan",
    "lat": 38.8336,
    "lng": 65.9215,
    "tier": 3
  },
  {
    "iata": "HMA",
    "name": "Khanty Mansiysk Airport",
    "city": "Khanty-Mansiysk",
    "country": "Russia",
    "lat": 61.0285,
    "lng": 69.0861,
    "tier": 2
  },
  {
    "iata": "HRK",
    "name": "Kharkiv International Airport",
    "city": "Kharkov",
    "country": "Ukraine",
    "lat": 49.9248,
    "lng": 36.29,
    "tier": 2
  },
  {
    "iata": "KRT",
    "name": "Khartoum International Airport",
    "city": "Khartoum",
    "country": "Sudan",
    "lat": 15.5895,
    "lng": 32.5532,
    "tier": 1
  },
  {
    "iata": "KHS",
    "name": "Khasab Air Base",
    "city": "Khasab",
    "country": "Oman",
    "lat": 26.171,
    "lng": 56.2406,
    "tier": 3
  },
  {
    "iata": "KKC",
    "name": "Khon Kaen Airport",
    "city": "Khon Kaen",
    "country": "Thailand",
    "lat": 16.4666,
    "lng": 102.784,
    "tier": 3
  },
  {
    "iata": "KHD",
    "name": "Khoram Abad Airport",
    "city": "Khorram Abad",
    "country": "Iran",
    "lat": 33.4354,
    "lng": 48.2829,
    "tier": 3
  },
  {
    "iata": "HVD",
    "name": "Khovd Airport",
    "city": "Khovd",
    "country": "Mongolia",
    "lat": 47.9541,
    "lng": 91.6282,
    "tier": 3
  },
  {
    "iata": "KHY",
    "name": "Khoy Airport",
    "city": "Khoy",
    "country": "Iran",
    "lat": 38.4275,
    "lng": 44.9736,
    "tier": 3
  },
  {
    "iata": "LBD",
    "name": "Khudzhand Airport",
    "city": "Khudzhand",
    "country": "Tajikistan",
    "lat": 40.2154,
    "lng": 69.6947,
    "tier": 1
  },
  {
    "iata": "IAN",
    "name": "Bob Baker Memorial Airport",
    "city": "Kiana",
    "country": "United States",
    "lat": 66.976,
    "lng": -160.437,
    "tier": 3
  },
  {
    "iata": "IEV",
    "name": "Kiev Zhuliany International Airport",
    "city": "Kiev",
    "country": "Ukraine",
    "lat": 50.4019,
    "lng": 30.4519,
    "tier": 2
  },
  {
    "iata": "KBP",
    "name": "Boryspil International Airport",
    "city": "Kiev",
    "country": "Ukraine",
    "lat": 50.345,
    "lng": 30.8947,
    "tier": 1
  },
  {
    "iata": "KGL",
    "name": "Kigali International Airport",
    "city": "Kigali",
    "country": "Rwanda",
    "lat": -1.9686,
    "lng": 30.1395,
    "tier": 1
  },
  {
    "iata": "JRO",
    "name": "Kilimanjaro International Airport",
    "city": "Kilimanjaro",
    "country": "Tanzania",
    "lat": -3.4294,
    "lng": 37.0745,
    "tier": 2
  },
  {
    "iata": "GRK",
    "name": "Robert Gray  Army Air Field Airport",
    "city": "Killeen",
    "country": "United States",
    "lat": 31.0672,
    "lng": -97.8289,
    "tier": 2
  },
  {
    "iata": "KIM",
    "name": "Kimberley Airport",
    "city": "Kimberley",
    "country": "South Africa",
    "lat": -28.8028,
    "lng": 24.7652,
    "tier": 3
  },
  {
    "iata": "YLC",
    "name": "Kimmirut Airport",
    "city": "Kimmirut",
    "country": "Canada",
    "lat": 62.85,
    "lng": -69.8833,
    "tier": 3
  },
  {
    "iata": "KND",
    "name": "Kindu Airport",
    "city": "Kindu",
    "country": "Congo (Kinshasa)",
    "lat": -2.9192,
    "lng": 25.9154,
    "tier": 3
  },
  {
    "iata": "KVC",
    "name": "King Cove Airport",
    "city": "King Cove",
    "country": "United States",
    "lat": 55.1163,
    "lng": -162.266,
    "tier": 3
  },
  {
    "iata": "KNS",
    "name": "King Island Airport",
    "city": "King Island",
    "country": "Australia",
    "lat": -39.8775,
    "lng": 143.878,
    "tier": 3
  },
  {
    "iata": "AKN",
    "name": "King Salmon Airport",
    "city": "King Salmon",
    "country": "United States",
    "lat": 58.6768,
    "lng": -156.649,
    "tier": 2
  },
  {
    "iata": "KIF",
    "name": "Kingfisher Lake Airport",
    "city": "Kingfisher Lake",
    "country": "Canada",
    "lat": 53.0125,
    "lng": -89.8553,
    "tier": 3
  },
  {
    "iata": "KGC",
    "name": "Kingscote Airport",
    "city": "Kingscote",
    "country": "Australia",
    "lat": -35.7139,
    "lng": 137.521,
    "tier": 3
  },
  {
    "iata": "KIN",
    "name": "Norman Manley International Airport",
    "city": "Kingston",
    "country": "Jamaica",
    "lat": 17.9357,
    "lng": -76.7875,
    "tier": 1
  },
  {
    "iata": "YGK",
    "name": "Kingston Norman Rogers Airport",
    "city": "Kingston",
    "country": "Canada",
    "lat": 44.2253,
    "lng": -76.5969,
    "tier": 3
  },
  {
    "iata": "SVD",
    "name": "Argyle International Airport",
    "city": "Kingstown",
    "country": "Saint Vincent and the Grenadines",
    "lat": 13.1567,
    "lng": -61.1499,
    "tier": 3
  },
  {
    "iata": "KNH",
    "name": "Kinmen Airport",
    "city": "Kinmen",
    "country": "Taiwan",
    "lat": 24.4279,
    "lng": 118.359,
    "tier": 3
  },
  {
    "iata": "FIH",
    "name": "Ndjili International Airport",
    "city": "Kinshasa",
    "country": "Congo (Kinshasa)",
    "lat": -4.3857,
    "lng": 15.4446,
    "tier": 1
  },
  {
    "iata": "KPN",
    "name": "Kipnuk Airport",
    "city": "Kipnuk",
    "country": "United States",
    "lat": 59.933,
    "lng": -164.031,
    "tier": 3
  },
  {
    "iata": "IRA",
    "name": "Ngorangora Airport",
    "city": "Kirakira",
    "country": "Solomon Islands",
    "lat": -10.4497,
    "lng": 161.898,
    "tier": 3
  },
  {
    "iata": "KCK",
    "name": "Kirensk Airport",
    "city": "Kirensk",
    "country": "Russia",
    "lat": 57.773,
    "lng": 108.064,
    "tier": 3
  },
  {
    "iata": "CXI",
    "name": "Cassidy International Airport",
    "city": "Kiritimati",
    "country": "Kiribati",
    "lat": 1.9862,
    "lng": -157.35,
    "tier": 3
  },
  {
    "iata": "KKN",
    "name": "Kirkenes Airport (Høybuktmoen)",
    "city": "Kirkenes",
    "country": "Norway",
    "lat": 69.7258,
    "lng": 29.8913,
    "tier": 2
  },
  {
    "iata": "IRK",
    "name": "Kirksville Regional Airport",
    "city": "Kirksville",
    "country": "United States",
    "lat": 40.0935,
    "lng": -92.5449,
    "tier": 3
  },
  {
    "iata": "KOI",
    "name": "Kirkwall Airport",
    "city": "Kirkwall",
    "country": "United Kingdom",
    "lat": 58.9578,
    "lng": -2.905,
    "tier": 2
  },
  {
    "iata": "KVX",
    "name": "Pobedilovo Airport",
    "city": "Kirov",
    "country": "Russia",
    "lat": 58.5033,
    "lng": 49.3483,
    "tier": 3
  },
  {
    "iata": "KRN",
    "name": "Kiruna Airport",
    "city": "Kiruna",
    "country": "Sweden",
    "lat": 67.822,
    "lng": 20.3368,
    "tier": 3
  },
  {
    "iata": "FKI",
    "name": "Bangoka International Airport",
    "city": "Kisangani",
    "country": "Congo (Kinshasa)",
    "lat": 0.4816,
    "lng": 25.338,
    "tier": 3
  },
  {
    "iata": "KIH",
    "name": "Kish International Airport",
    "city": "Kish Island",
    "country": "Iran",
    "lat": 26.5262,
    "lng": 53.9802,
    "tier": 2
  },
  {
    "iata": "KIS",
    "name": "Kisumu Airport",
    "city": "Kisumu",
    "country": "Kenya",
    "lat": -0.0861,
    "lng": 34.7289,
    "tier": 3
  },
  {
    "iata": "KKJ",
    "name": "Kitakyūshū Airport",
    "city": "Kitakyushu",
    "country": "Japan",
    "lat": 33.8459,
    "lng": 131.035,
    "tier": 3
  },
  {
    "iata": "KTL",
    "name": "Kitale Airport",
    "city": "Kitale",
    "country": "Kenya",
    "lat": 0.972,
    "lng": 34.9586,
    "tier": 3
  },
  {
    "iata": "KIT",
    "name": "Kithira Airport",
    "city": "Kithira",
    "country": "Greece",
    "lat": 36.2743,
    "lng": 23.017,
    "tier": 3
  },
  {
    "iata": "KTT",
    "name": "Kittilä Airport",
    "city": "Kittila",
    "country": "Finland",
    "lat": 67.701,
    "lng": 24.8468,
    "tier": 3
  },
  {
    "iata": "UNG",
    "name": "Kiunga Airport",
    "city": "Kiunga",
    "country": "Papua New Guinea",
    "lat": -6.1257,
    "lng": 141.282,
    "tier": 3
  },
  {
    "iata": "KVL",
    "name": "Kivalina Airport",
    "city": "Kivalina",
    "country": "United States",
    "lat": 67.7362,
    "lng": -164.563,
    "tier": 3
  },
  {
    "iata": "KLU",
    "name": "Klagenfurt Airport",
    "city": "Klagenfurt",
    "country": "Austria",
    "lat": 46.6425,
    "lng": 14.3377,
    "tier": 2
  },
  {
    "iata": "LMT",
    "name": "Crater Lake-Klamath Regional Airport",
    "city": "Klamath Falls",
    "country": "United States",
    "lat": 42.1561,
    "lng": -121.733,
    "tier": 3
  },
  {
    "iata": "KLW",
    "name": "Klawock Airport",
    "city": "Klawock",
    "country": "United States",
    "lat": 55.5792,
    "lng": -133.076,
    "tier": 3
  },
  {
    "iata": "TYS",
    "name": "McGhee Tyson Airport",
    "city": "Knoxville",
    "country": "United States",
    "lat": 35.811,
    "lng": -83.994,
    "tier": 1
  },
  {
    "iata": "USM",
    "name": "Samui Airport",
    "city": "Ko Samui",
    "country": "Thailand",
    "lat": 9.5478,
    "lng": 100.062,
    "tier": 2
  },
  {
    "iata": "UKB",
    "name": "Kobe Airport",
    "city": "Kobe",
    "country": "Japan",
    "lat": 34.6328,
    "lng": 135.224,
    "tier": 2
  },
  {
    "iata": "OBU",
    "name": "Kobuk Airport",
    "city": "Kobuk",
    "country": "United States",
    "lat": 66.9123,
    "lng": -156.897,
    "tier": 3
  },
  {
    "iata": "COK",
    "name": "Cochin International Airport",
    "city": "Kochi",
    "country": "India",
    "lat": 10.152,
    "lng": 76.4019,
    "tier": 1
  },
  {
    "iata": "KCZ",
    "name": "Kōchi Ryōma Airport",
    "city": "Kochi",
    "country": "Japan",
    "lat": 33.5461,
    "lng": 133.669,
    "tier": 3
  },
  {
    "iata": "ADQ",
    "name": "Kodiak Airport",
    "city": "Kodiak",
    "country": "United States",
    "lat": 57.75,
    "lng": -152.494,
    "tier": 3
  },
  {
    "iata": "KGP",
    "name": "Kogalym International Airport",
    "city": "Kogalym",
    "country": "Russia",
    "lat": 62.1904,
    "lng": 74.5338,
    "tier": 3
  },
  {
    "iata": "KCT",
    "name": "Koggala Airport",
    "city": "Koggala",
    "country": "Sri Lanka",
    "lat": 5.9937,
    "lng": 80.3203,
    "tier": 3
  },
  {
    "iata": "KOV",
    "name": "Kokshetau Airport",
    "city": "Kokshetau",
    "country": "Kazakhstan",
    "lat": 53.3291,
    "lng": 69.5946,
    "tier": 3
  },
  {
    "iata": "CCU",
    "name": "Netaji Subhash Chandra Bose International Airport",
    "city": "Kolkata",
    "country": "India",
    "lat": 22.6547,
    "lng": 88.4467,
    "tier": 1
  },
  {
    "iata": "KOA",
    "name": "Ellison Onizuka Kona International At Keahole Airport",
    "city": "Kona",
    "country": "United States",
    "lat": 19.7388,
    "lng": -156.0456,
    "tier": 2
  },
  {
    "iata": "KNQ",
    "name": "Koné Airport",
    "city": "Kone",
    "country": "New Caledonia",
    "lat": -21.0543,
    "lng": 164.837,
    "tier": 3
  },
  {
    "iata": "KKH",
    "name": "Kongiganak Airport",
    "city": "Kongiganak",
    "country": "United States",
    "lat": 59.9608,
    "lng": -162.881,
    "tier": 3
  },
  {
    "iata": "KOO",
    "name": "Kongolo Airport",
    "city": "Kongolo",
    "country": "Congo (Kinshasa)",
    "lat": -5.3944,
    "lng": 26.99,
    "tier": 3
  },
  {
    "iata": "KYA",
    "name": "Konya Airport",
    "city": "Konya",
    "country": "Turkey",
    "lat": 37.979,
    "lng": 32.5619,
    "tier": 3
  },
  {
    "iata": "GKK",
    "name": "Kooddoo Airport",
    "city": "Kooddoo",
    "country": "Maldives",
    "lat": 0.7324,
    "lng": 73.4336,
    "tier": 3
  },
  {
    "iata": "KRL",
    "name": "Korla Airport",
    "city": "Korla",
    "country": "China",
    "lat": 41.6978,
    "lng": 86.1289,
    "tier": 2
  },
  {
    "iata": "KGS",
    "name": "Kos Airport",
    "city": "Kos",
    "country": "Greece",
    "lat": 36.7933,
    "lng": 27.0917,
    "tier": 1
  },
  {
    "iata": "KSC",
    "name": "Košice Airport",
    "city": "Kosice",
    "country": "Slovakia",
    "lat": 48.6631,
    "lng": 21.2411,
    "tier": 3
  },
  {
    "iata": "KSA",
    "name": "Kosrae International Airport",
    "city": "Kosrae",
    "country": "Micronesia",
    "lat": 5.357,
    "lng": 162.958,
    "tier": 3
  },
  {
    "iata": "KSN",
    "name": "Kostanay West Airport",
    "city": "Kostanay",
    "country": "Kazakhstan",
    "lat": 53.2069,
    "lng": 63.5503,
    "tier": 3
  },
  {
    "iata": "KBR",
    "name": "Sultan Ismail Petra Airport",
    "city": "Kota Bahru",
    "country": "Malaysia",
    "lat": 6.1669,
    "lng": 102.293,
    "tier": 2
  },
  {
    "iata": "BKI",
    "name": "Kota Kinabalu International Airport",
    "city": "Kota Kinabalu",
    "country": "Malaysia",
    "lat": 5.9372,
    "lng": 116.051,
    "tier": 1
  },
  {
    "iata": "KOT",
    "name": "Kotlik Airport",
    "city": "Kotlik",
    "country": "United States",
    "lat": 63.0306,
    "lng": -163.533,
    "tier": 3
  },
  {
    "iata": "OTZ",
    "name": "Ralph Wien Memorial Airport",
    "city": "Kotzebue",
    "country": "United States",
    "lat": 66.8847,
    "lng": -162.599,
    "tier": 2
  },
  {
    "iata": "KOC",
    "name": "Koumac Airport",
    "city": "Koumac",
    "country": "New Caledonia",
    "lat": -20.5463,
    "lng": 164.256,
    "tier": 3
  },
  {
    "iata": "KWM",
    "name": "Kowanyama Airport",
    "city": "Kowanyama",
    "country": "Australia",
    "lat": -15.4856,
    "lng": 141.751,
    "tier": 3
  },
  {
    "iata": "KKA",
    "name": "Koyuk Alfred Adams Airport",
    "city": "Koyuk",
    "country": "United States",
    "lat": 64.9395,
    "lng": -161.154,
    "tier": 3
  },
  {
    "iata": "KYU",
    "name": "Koyukuk Airport",
    "city": "Koyukuk",
    "country": "United States",
    "lat": 64.8761,
    "lng": -157.727,
    "tier": 3
  },
  {
    "iata": "KZI",
    "name": "Filippos Airport",
    "city": "Kozani",
    "country": "Greece",
    "lat": 40.2861,
    "lng": 21.8408,
    "tier": 3
  },
  {
    "iata": "KBV",
    "name": "Krabi Airport",
    "city": "Krabi",
    "country": "Thailand",
    "lat": 8.0991,
    "lng": 98.9862,
    "tier": 2
  },
  {
    "iata": "KRK",
    "name": "Kraków John Paul II International Airport",
    "city": "Krakow",
    "country": "Poland",
    "lat": 50.0777,
    "lng": 19.7848,
    "tier": 1
  },
  {
    "iata": "BON",
    "name": "Flamingo International Airport",
    "city": "Kralendijk",
    "country": "Netherlands Antilles",
    "lat": 12.131,
    "lng": -68.2685,
    "tier": 2
  },
  {
    "iata": "KRF",
    "name": "Kramfors Sollefteå Airport",
    "city": "Kramfors",
    "country": "Sweden",
    "lat": 63.0486,
    "lng": 17.7689,
    "tier": 3
  },
  {
    "iata": "KRR",
    "name": "Krasnodar Pashkovsky International Airport",
    "city": "Krasnodar",
    "country": "Russia",
    "lat": 45.0347,
    "lng": 39.1705,
    "tier": 1
  },
  {
    "iata": "KJA",
    "name": "Yemelyanovo Airport",
    "city": "Krasnoyarsk",
    "country": "Russia",
    "lat": 56.1729,
    "lng": 92.4933,
    "tier": 1
  },
  {
    "iata": "KRS",
    "name": "Kristiansand Airport",
    "city": "Kristiansand",
    "country": "Norway",
    "lat": 58.2042,
    "lng": 8.0854,
    "tier": 2
  },
  {
    "iata": "KID",
    "name": "Kristianstad Airport",
    "city": "Kristianstad",
    "country": "Sweden",
    "lat": 55.9217,
    "lng": 14.0855,
    "tier": 3
  },
  {
    "iata": "KSU",
    "name": "Kristiansund Airport (Kvernberget)",
    "city": "Kristiansund",
    "country": "Norway",
    "lat": 63.1118,
    "lng": 7.8245,
    "tier": 2
  },
  {
    "iata": "KOK",
    "name": "Kokkola-Pietarsaari Airport",
    "city": "Kruunupyy",
    "country": "Finland",
    "lat": 63.7212,
    "lng": 23.1431,
    "tier": 3
  },
  {
    "iata": "KUL",
    "name": "Kuala Lumpur International Airport",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "lat": 2.7456,
    "lng": 101.71,
    "tier": 1
  },
  {
    "iata": "SZB",
    "name": "Sultan Abdul Aziz Shah International Airport",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "lat": 3.1306,
    "lng": 101.549,
    "tier": 1
  },
  {
    "iata": "TGG",
    "name": "Sultan Mahmud Airport",
    "city": "Kuala Terengganu",
    "country": "Malaysia",
    "lat": 5.3826,
    "lng": 103.103,
    "tier": 2
  },
  {
    "iata": "KUA",
    "name": "Kuantan Airport",
    "city": "Kuantan",
    "country": "Malaysia",
    "lat": 3.7754,
    "lng": 103.209,
    "tier": 3
  },
  {
    "iata": "KCH",
    "name": "Kuching International Airport",
    "city": "Kuching",
    "country": "Malaysia",
    "lat": 1.4847,
    "lng": 110.347,
    "tier": 1
  },
  {
    "iata": "KUD",
    "name": "Kudat Airport",
    "city": "Kudat",
    "country": "Malaysia",
    "lat": 6.9225,
    "lng": 116.836,
    "tier": 3
  },
  {
    "iata": "AKF",
    "name": "Kufra Airport",
    "city": "Kufra",
    "country": "Libya",
    "lat": 24.1787,
    "lng": 23.314,
    "tier": 3
  },
  {
    "iata": "SVP",
    "name": "Kuito Airport",
    "city": "Kuito",
    "country": "Angola",
    "lat": -12.4046,
    "lng": 16.9474,
    "tier": 3
  },
  {
    "iata": "KUU",
    "name": "Kullu Manali Airport",
    "city": "Kulu",
    "country": "India",
    "lat": 31.8767,
    "lng": 77.1544,
    "tier": 3
  },
  {
    "iata": "TJU",
    "name": "Kulob Airport",
    "city": "Kulyab",
    "country": "Tajikistan",
    "lat": 37.9881,
    "lng": 69.805,
    "tier": 2
  },
  {
    "iata": "KMJ",
    "name": "Kumamoto Airport",
    "city": "Kumamoto",
    "country": "Japan",
    "lat": 32.8373,
    "lng": 130.855,
    "tier": 2
  },
  {
    "iata": "KMS",
    "name": "Kumasi Airport",
    "city": "Kumasi",
    "country": "Ghana",
    "lat": 6.7146,
    "lng": -1.5908,
    "tier": 3
  },
  {
    "iata": "UEO",
    "name": "Kumejima Airport",
    "city": "Kumejima",
    "country": "Japan",
    "lat": 26.3635,
    "lng": 126.714,
    "tier": 3
  },
  {
    "iata": "CMU",
    "name": "Chimbu Airport",
    "city": "Kundiawa",
    "country": "Papua New Guinea",
    "lat": -6.0243,
    "lng": 144.971,
    "tier": 3
  },
  {
    "iata": "KMG",
    "name": "Kunming Changshui International Airport",
    "city": "Kunming",
    "country": "China",
    "lat": 25.1019,
    "lng": 102.9292,
    "tier": 1
  },
  {
    "iata": "KUV",
    "name": "Kunsan Air Base",
    "city": "Kunsan",
    "country": "South Korea",
    "lat": 35.9038,
    "lng": 126.616,
    "tier": 3
  },
  {
    "iata": "KNX",
    "name": "Kununurra Airport",
    "city": "Kununurra",
    "country": "Australia",
    "lat": -15.7781,
    "lng": 128.708,
    "tier": 2
  },
  {
    "iata": "KUO",
    "name": "Kuopio Airport",
    "city": "Kuopio",
    "country": "Finland",
    "lat": 63.0071,
    "lng": 27.7978,
    "tier": 3
  },
  {
    "iata": "KOE",
    "name": "El Tari Airport",
    "city": "Kupang",
    "country": "Indonesia",
    "lat": -10.1716,
    "lng": 123.671,
    "tier": 2
  },
  {
    "iata": "KCA",
    "name": "Kuqa Airport",
    "city": "Kuqa",
    "country": "China",
    "lat": 41.6779,
    "lng": 82.8729,
    "tier": 3
  },
  {
    "iata": "URE",
    "name": "Kuressaare Airport",
    "city": "Kuressaare",
    "country": "Estonia",
    "lat": 58.2299,
    "lng": 22.5095,
    "tier": 3
  },
  {
    "iata": "KRO",
    "name": "Kurgan Airport",
    "city": "Kurgan",
    "country": "Russia",
    "lat": 55.4753,
    "lng": 65.4156,
    "tier": 3
  },
  {
    "iata": "KQT",
    "name": "Qurghonteppa International Airport",
    "city": "Kurgan Tyube",
    "country": "Tajikistan",
    "lat": 37.8664,
    "lng": 68.8647,
    "tier": 3
  },
  {
    "iata": "URS",
    "name": "Kursk East Airport",
    "city": "Kursk",
    "country": "Russia",
    "lat": 51.7506,
    "lng": 36.2956,
    "tier": 3
  },
  {
    "iata": "KUH",
    "name": "Kushiro Airport",
    "city": "Kushiro",
    "country": "Japan",
    "lat": 43.041,
    "lng": 144.193,
    "tier": 3
  },
  {
    "iata": "KZR",
    "name": "Zafer Airport",
    "city": "Kutahya",
    "country": "Turkey",
    "lat": 39.1131,
    "lng": 30.1281,
    "tier": 3
  },
  {
    "iata": "KUT",
    "name": "Kopitnari Airport",
    "city": "Kutaisi",
    "country": "Georgia",
    "lat": 42.1767,
    "lng": 42.4826,
    "tier": 2
  },
  {
    "iata": "YGW",
    "name": "Kuujjuarapik Airport",
    "city": "Kuujjuarapik",
    "country": "Canada",
    "lat": 55.2819,
    "lng": -77.7653,
    "tier": 2
  },
  {
    "iata": "KAO",
    "name": "Kuusamo Airport",
    "city": "Kuusamo",
    "country": "Finland",
    "lat": 65.9876,
    "lng": 29.2394,
    "tier": 3
  },
  {
    "iata": "KWI",
    "name": "Kuwait International Airport",
    "city": "Kuwait",
    "country": "Kuwait",
    "lat": 29.2266,
    "lng": 47.9689,
    "tier": 1
  },
  {
    "iata": "KWA",
    "name": "Bucholz Army Air Field",
    "city": "Kwajalein",
    "country": "Marshall Islands",
    "lat": 8.7201,
    "lng": 167.732,
    "tier": 3
  },
  {
    "iata": "KWJ",
    "name": "Gwangju Airport",
    "city": "Kwangju",
    "country": "South Korea",
    "lat": 35.1232,
    "lng": 126.8054,
    "tier": 3
  },
  {
    "iata": "KWT",
    "name": "Kwethluk Airport",
    "city": "Kwethluk",
    "country": "United States",
    "lat": 60.7903,
    "lng": -161.444,
    "tier": 3
  },
  {
    "iata": "KWK",
    "name": "Kwigillingok Airport",
    "city": "Kwigillingok",
    "country": "United States",
    "lat": 59.8765,
    "lng": -163.169,
    "tier": 3
  },
  {
    "iata": "KYP",
    "name": "Kyaukpyu Airport",
    "city": "Kyaukpyu",
    "country": "Burma",
    "lat": 19.4264,
    "lng": 93.5348,
    "tier": 3
  },
  {
    "iata": "KYZ",
    "name": "Kyzyl Airport",
    "city": "Kyzyl",
    "country": "Russia",
    "lat": 51.6694,
    "lng": 94.4006,
    "tier": 3
  },
  {
    "iata": "KZO",
    "name": "Kzyl-Orda Southwest Airport",
    "city": "Kzyl-Orda",
    "country": "Kazakhstan",
    "lat": 44.7069,
    "lng": 65.5925,
    "tier": 3
  },
  {
    "iata": "LCE",
    "name": "Goloson International Airport",
    "city": "La Ceiba",
    "country": "Honduras",
    "lat": 15.7425,
    "lng": -86.853,
    "tier": 2
  },
  {
    "iata": "LCG",
    "name": "A Coruña Airport",
    "city": "La Coruna",
    "country": "Spain",
    "lat": 43.3021,
    "lng": -8.3773,
    "tier": 2
  },
  {
    "iata": "LSE",
    "name": "La Crosse Municipal Airport",
    "city": "La Crosse",
    "country": "United States",
    "lat": 43.879,
    "lng": -91.2567,
    "tier": 3
  },
  {
    "iata": "FON",
    "name": "Arenal Airport",
    "city": "La Fortuna/San Carlos",
    "country": "Costa Rica",
    "lat": 10.478,
    "lng": -84.6345,
    "tier": 3
  },
  {
    "iata": "LFR",
    "name": "La Fria Airport",
    "city": "La Fria",
    "country": "Venezuela",
    "lat": 8.2392,
    "lng": -72.271,
    "tier": 3
  },
  {
    "iata": "GMZ",
    "name": "La Gomera Airport",
    "city": "La Gomera",
    "country": "Spain",
    "lat": 28.0296,
    "lng": -17.2146,
    "tier": 3
  },
  {
    "iata": "YGL",
    "name": "La Grande Rivière Airport",
    "city": "La Grande Riviere",
    "country": "Canada",
    "lat": 53.6253,
    "lng": -77.7042,
    "tier": 3
  },
  {
    "iata": "JBQ",
    "name": "La Isabela International Airport",
    "city": "La Isabela",
    "country": "Dominican Republic",
    "lat": 18.5725,
    "lng": -69.9856,
    "tier": 3
  },
  {
    "iata": "LAP",
    "name": "Manuel Márquez de León International Airport",
    "city": "La Paz",
    "country": "Mexico",
    "lat": 24.0727,
    "lng": -110.362,
    "tier": 2
  },
  {
    "iata": "LPB",
    "name": "El Alto International Airport",
    "city": "La Paz",
    "country": "Bolivia",
    "lat": -16.5133,
    "lng": -68.1923,
    "tier": 1
  },
  {
    "iata": "LPD",
    "name": "La Pedrera Airport",
    "city": "La Pedrera",
    "country": "Colombia",
    "lat": -1.3286,
    "lng": -69.5797,
    "tier": 3
  },
  {
    "iata": "IRJ",
    "name": "Capitan V A Almonacid Airport",
    "city": "La Rioja",
    "country": "Argentina",
    "lat": -29.3816,
    "lng": -66.7958,
    "tier": 3
  },
  {
    "iata": "LRH",
    "name": "La Rochelle-Île de Ré Airport",
    "city": "La Rochelle",
    "country": "France",
    "lat": 46.1792,
    "lng": -1.1953,
    "tier": 2
  },
  {
    "iata": "ZGS",
    "name": "La Romaine Airport",
    "city": "La Romaine",
    "country": "Canada",
    "lat": 50.2597,
    "lng": -60.6794,
    "tier": 2
  },
  {
    "iata": "LRM",
    "name": "Casa De Campo International Airport",
    "city": "La Romana",
    "country": "Dominican Republic",
    "lat": 18.4507,
    "lng": -68.9118,
    "tier": 2
  },
  {
    "iata": "LSC",
    "name": "La Florida Airport",
    "city": "La Serena",
    "country": "Chile",
    "lat": -29.9162,
    "lng": -71.1995,
    "tier": 2
  },
  {
    "iata": "ZLT",
    "name": "La Tabatière Airport",
    "city": "La Tabatière",
    "country": "Canada",
    "lat": 50.8308,
    "lng": -58.9756,
    "tier": 3
  },
  {
    "iata": "LOH",
    "name": "Camilo Ponce Enriquez Airport",
    "city": "La Toma (Catamayo)",
    "country": "Ecuador",
    "lat": -3.9959,
    "lng": -79.3719,
    "tier": 3
  },
  {
    "iata": "RLG",
    "name": "Rostock-Laage Airport",
    "city": "Laage",
    "country": "Germany",
    "lat": 53.9182,
    "lng": 12.2783,
    "tier": 3
  },
  {
    "iata": "KDO",
    "name": "Kadhdhoo Airport",
    "city": "Laamu Atoll",
    "country": "Maldives",
    "lat": 1.8592,
    "lng": 73.5219,
    "tier": 3
  },
  {
    "iata": "LBU",
    "name": "Labuan Airport",
    "city": "Labuan",
    "country": "Malaysia",
    "lat": 5.3007,
    "lng": 115.25,
    "tier": 3
  },
  {
    "iata": "LBJ",
    "name": "Komodo Airport",
    "city": "Labuhan Bajo",
    "country": "Indonesia",
    "lat": -8.4867,
    "lng": 119.889,
    "tier": 3
  },
  {
    "iata": "LFT",
    "name": "Lafayette Regional Airport",
    "city": "Lafayette",
    "country": "United States",
    "lat": 30.2053,
    "lng": -91.9876,
    "tier": 2
  },
  {
    "iata": "LOS",
    "name": "Murtala Muhammed International Airport",
    "city": "Lagos",
    "country": "Nigeria",
    "lat": 6.5774,
    "lng": 3.3212,
    "tier": 1
  },
  {
    "iata": "LDU",
    "name": "Lahad Datu Airport",
    "city": "Lahad Datu",
    "country": "Malaysia",
    "lat": 5.0322,
    "lng": 118.324,
    "tier": 3
  },
  {
    "iata": "JHM",
    "name": "Kapalua Airport",
    "city": "Lahania-kapalua",
    "country": "United States",
    "lat": 20.9629,
    "lng": -156.673,
    "tier": 3
  },
  {
    "iata": "LHE",
    "name": "Alama Iqbal International Airport",
    "city": "Lahore",
    "country": "Pakistan",
    "lat": 31.5216,
    "lng": 74.4036,
    "tier": 1
  },
  {
    "iata": "TER",
    "name": "Lajes Airport",
    "city": "Lajes (terceira Island)",
    "country": "Portugal",
    "lat": 38.7618,
    "lng": -27.0908,
    "tier": 2
  },
  {
    "iata": "LCH",
    "name": "Lake Charles Regional Airport",
    "city": "Lake Charles",
    "country": "United States",
    "lat": 30.1261,
    "lng": -93.2233,
    "tier": 3
  },
  {
    "iata": "LMA",
    "name": "Minchumina Airport",
    "city": "Lake Minchumina",
    "country": "United States",
    "lat": 63.886,
    "lng": -152.302,
    "tier": 3
  },
  {
    "iata": "LKB",
    "name": "Lakeba Island Airport",
    "city": "Lakeba Island",
    "country": "Fiji",
    "lat": -18.1992,
    "lng": -178.817,
    "tier": 3
  },
  {
    "iata": "LKL",
    "name": "Banak Airport",
    "city": "Lakselv",
    "country": "Norway",
    "lat": 70.0688,
    "lng": 24.9735,
    "tier": 3
  },
  {
    "iata": "LLI",
    "name": "Lalibella Airport",
    "city": "Lalibella",
    "country": "Ethiopia",
    "lat": 11.975,
    "lng": 38.98,
    "tier": 3
  },
  {
    "iata": "LPM",
    "name": "Lamap Airport",
    "city": "Lamap",
    "country": "Vanuatu",
    "lat": -16.4611,
    "lng": 167.8293,
    "tier": 3
  },
  {
    "iata": "LBS",
    "name": "Labasa Airport",
    "city": "Lambasa",
    "country": "Fiji",
    "lat": -16.4667,
    "lng": 179.34,
    "tier": 3
  },
  {
    "iata": "LNB",
    "name": "Lamen Bay Airport",
    "city": "Lamen Bay",
    "country": "Vanuatu",
    "lat": -16.5842,
    "lng": 168.159,
    "tier": 3
  },
  {
    "iata": "LFM",
    "name": "Lamerd Airport",
    "city": "Lamerd",
    "country": "Iran",
    "lat": 27.3727,
    "lng": 53.1888,
    "tier": 3
  },
  {
    "iata": "SUF",
    "name": "Lamezia Terme Airport",
    "city": "Lamezia",
    "country": "Italy",
    "lat": 38.9054,
    "lng": 16.2423,
    "tier": 1
  },
  {
    "iata": "LPT",
    "name": "Lampang Airport",
    "city": "Lampang",
    "country": "Thailand",
    "lat": 18.2709,
    "lng": 99.5042,
    "tier": 3
  },
  {
    "iata": "LMP",
    "name": "Lampedusa Airport",
    "city": "Lampedusa",
    "country": "Italy",
    "lat": 35.4979,
    "lng": 12.6181,
    "tier": 3
  },
  {
    "iata": "LAU",
    "name": "Manda Airstrip",
    "city": "Lamu",
    "country": "Kenya",
    "lat": -2.2524,
    "lng": 40.9131,
    "tier": 3
  },
  {
    "iata": "LNY",
    "name": "Lanai Airport",
    "city": "Lanai",
    "country": "United States",
    "lat": 20.7856,
    "lng": -156.951,
    "tier": 3
  },
  {
    "iata": "LNS",
    "name": "Lancaster Airport",
    "city": "Lancaster",
    "country": "United States",
    "lat": 40.1217,
    "lng": -76.2961,
    "tier": 3
  },
  {
    "iata": "LEQ",
    "name": "Land's End Airport",
    "city": "Land's End",
    "country": "United Kingdom",
    "lat": 50.1028,
    "lng": -5.6706,
    "tier": 3
  },
  {
    "iata": "LUV",
    "name": "Dumatumbun Airport",
    "city": "Langgur-Kei Islands",
    "country": "Indonesia",
    "lat": -5.6616,
    "lng": 132.731,
    "tier": 3
  },
  {
    "iata": "LGK",
    "name": "Langkawi International Airport",
    "city": "Langkawi",
    "country": "Malaysia",
    "lat": 6.3297,
    "lng": 99.7287,
    "tier": 2
  },
  {
    "iata": "LLK",
    "name": "Lankaran International Airport",
    "city": "Lankaran",
    "country": "Azerbaijan",
    "lat": 38.7464,
    "lng": 48.818,
    "tier": 3
  },
  {
    "iata": "LAI",
    "name": "Lannion-Côte de Granit Airport",
    "city": "Lannion",
    "country": "France",
    "lat": 48.7544,
    "lng": -3.4717,
    "tier": 3
  },
  {
    "iata": "YLH",
    "name": "Lansdowne House Airport",
    "city": "Lansdowne House",
    "country": "Canada",
    "lat": 52.1956,
    "lng": -87.9342,
    "tier": 3
  },
  {
    "iata": "LAN",
    "name": "Capital City Airport",
    "city": "Lansing",
    "country": "United States",
    "lat": 42.7787,
    "lng": -84.5874,
    "tier": 2
  },
  {
    "iata": "LHW",
    "name": "Lanzhou Zhongchuan Airport",
    "city": "Lanzhou",
    "country": "China",
    "lat": 36.5152,
    "lng": 103.62,
    "tier": 1
  },
  {
    "iata": "LAO",
    "name": "Laoag International Airport",
    "city": "Laoag",
    "country": "Philippines",
    "lat": 18.1781,
    "lng": 120.532,
    "tier": 3
  },
  {
    "iata": "LPP",
    "name": "Lappeenranta Airport",
    "city": "Lappeenranta",
    "country": "Finland",
    "lat": 61.0446,
    "lng": 28.1447,
    "tier": 3
  },
  {
    "iata": "LRR",
    "name": "Lar Airport",
    "city": "Lar",
    "country": "Iran",
    "lat": 27.6747,
    "lng": 54.3833,
    "tier": 2
  },
  {
    "iata": "LAR",
    "name": "Laramie Regional Airport",
    "city": "Laramie",
    "country": "United States",
    "lat": 41.3121,
    "lng": -105.675,
    "tier": 3
  },
  {
    "iata": "LRD",
    "name": "Laredo International Airport",
    "city": "Laredo",
    "country": "United States",
    "lat": 27.5438,
    "lng": -99.4616,
    "tier": 3
  },
  {
    "iata": "LCA",
    "name": "Larnaca International Airport",
    "city": "Larnaca",
    "country": "Cyprus",
    "lat": 34.8751,
    "lng": 33.6249,
    "tier": 1
  },
  {
    "iata": "KLN",
    "name": "Larsen Bay Airport",
    "city": "Larsen Bay",
    "country": "United States",
    "lat": 57.5351,
    "lng": -153.978,
    "tier": 3
  },
  {
    "iata": "LAS",
    "name": "McCarran International Airport",
    "city": "Las Vegas",
    "country": "United States",
    "lat": 36.0801,
    "lng": -115.152,
    "tier": 1
  },
  {
    "iata": "LTX",
    "name": "Cotopaxi International Airport",
    "city": "Latacunga",
    "country": "Ecuador",
    "lat": -0.9068,
    "lng": -78.6158,
    "tier": 3
  },
  {
    "iata": "LBE",
    "name": "Arnold Palmer Regional Airport",
    "city": "Latrobe",
    "country": "United States",
    "lat": 40.2759,
    "lng": -79.4048,
    "tier": 3
  },
  {
    "iata": "LST",
    "name": "Launceston Airport",
    "city": "Launceston",
    "country": "Australia",
    "lat": -41.5453,
    "lng": 147.214,
    "tier": 2
  },
  {
    "iata": "LWY",
    "name": "Lawas Airport",
    "city": "Lawas",
    "country": "Malaysia",
    "lat": 4.8492,
    "lng": 115.408,
    "tier": 3
  },
  {
    "iata": "LAW",
    "name": "Lawton Fort Sill Regional Airport",
    "city": "Lawton",
    "country": "United States",
    "lat": 34.5677,
    "lng": -98.4166,
    "tier": 3
  },
  {
    "iata": "LZC",
    "name": "Lázaro Cárdenas Airport",
    "city": "Lazard Cardenas",
    "country": "Mexico",
    "lat": 18.0017,
    "lng": -102.221,
    "tier": 3
  },
  {
    "iata": "LEH",
    "name": "Le Havre Octeville Airport",
    "city": "Le Havre",
    "country": "France",
    "lat": 49.5339,
    "lng": 0.0881,
    "tier": 3
  },
  {
    "iata": "LPY",
    "name": "Le Puy-Loudes Airport",
    "city": "Le Puy",
    "country": "France",
    "lat": 45.0807,
    "lng": 3.7629,
    "tier": 3
  },
  {
    "iata": "LEA",
    "name": "Learmonth Airport",
    "city": "Learmonth",
    "country": "Australia",
    "lat": -22.2356,
    "lng": 114.089,
    "tier": 3
  },
  {
    "iata": "LEB",
    "name": "Lebanon Municipal Airport",
    "city": "Lebanon",
    "country": "United States",
    "lat": 43.6261,
    "lng": -72.3042,
    "tier": 3
  },
  {
    "iata": "LBA",
    "name": "Leeds Bradford Airport",
    "city": "Leeds",
    "country": "United Kingdom",
    "lat": 53.8659,
    "lng": -1.6606,
    "tier": 1
  },
  {
    "iata": "LGP",
    "name": "Legazpi City International Airport",
    "city": "Legazpi",
    "country": "Philippines",
    "lat": 13.1575,
    "lng": 123.735,
    "tier": 3
  },
  {
    "iata": "IXL",
    "name": "Leh Kushok Bakula Rimpochee Airport",
    "city": "Leh",
    "country": "India",
    "lat": 34.1359,
    "lng": 77.5465,
    "tier": 2
  },
  {
    "iata": "LEJ",
    "name": "Leipzig/Halle Airport",
    "city": "Leipzig",
    "country": "Germany",
    "lat": 51.4239,
    "lng": 12.2364,
    "tier": 1
  },
  {
    "iata": "LKN",
    "name": "Leknes Airport",
    "city": "Leknes",
    "country": "Norway",
    "lat": 68.1525,
    "lng": 13.6094,
    "tier": 3
  },
  {
    "iata": "ULK",
    "name": "Lensk Airport",
    "city": "Lensk",
    "country": "Russia",
    "lat": 60.7206,
    "lng": 114.826,
    "tier": 2
  },
  {
    "iata": "LEC",
    "name": "Coronel Horácio de Mattos Airport",
    "city": "Lençóis",
    "country": "Brazil",
    "lat": -12.4823,
    "lng": -41.277,
    "tier": 3
  },
  {
    "iata": "LEN",
    "name": "Leon Airport",
    "city": "Leon",
    "country": "Spain",
    "lat": 42.589,
    "lng": -5.6556,
    "tier": 3
  },
  {
    "iata": "LRS",
    "name": "Leros Airport",
    "city": "Leros",
    "country": "Greece",
    "lat": 37.1849,
    "lng": 26.8003,
    "tier": 2
  },
  {
    "iata": "YQL",
    "name": "Lethbridge County Airport",
    "city": "Lethbridge",
    "country": "Canada",
    "lat": 49.6303,
    "lng": -112.8,
    "tier": 3
  },
  {
    "iata": "LET",
    "name": "Alfredo Vásquez Cobo International Airport",
    "city": "Leticia",
    "country": "Colombia",
    "lat": -4.1936,
    "lng": -69.9432,
    "tier": 3
  },
  {
    "iata": "LWB",
    "name": "Greenbrier Valley Airport",
    "city": "Lewisburg",
    "country": "United States",
    "lat": 37.8583,
    "lng": -80.3995,
    "tier": 3
  },
  {
    "iata": "LWS",
    "name": "Lewiston Nez Perce County Airport",
    "city": "Lewiston",
    "country": "United States",
    "lat": 46.3745,
    "lng": -117.015,
    "tier": 3
  },
  {
    "iata": "LEX",
    "name": "Blue Grass Airport",
    "city": "Lexington KY",
    "country": "United States",
    "lat": 38.0365,
    "lng": -84.6059,
    "tier": 2
  },
  {
    "iata": "LXA",
    "name": "Lhasa Gonggar Airport",
    "city": "Lhasa",
    "country": "China",
    "lat": 29.2978,
    "lng": 90.9119,
    "tier": 1
  },
  {
    "iata": "LYG",
    "name": "Lianyungang Airport",
    "city": "Lianyungang",
    "country": "China",
    "lat": 34.5717,
    "lng": 118.8736,
    "tier": 2
  },
  {
    "iata": "LBL",
    "name": "Liberal Mid-America Regional Airport",
    "city": "Liberal",
    "country": "United States",
    "lat": 37.0442,
    "lng": -100.96,
    "tier": 3
  },
  {
    "iata": "LIR",
    "name": "Daniel Oduber Quiros International Airport",
    "city": "Liberia",
    "country": "Costa Rica",
    "lat": 10.5933,
    "lng": -85.5444,
    "tier": 2
  },
  {
    "iata": "LLB",
    "name": "Libo Airport",
    "city": "Libo",
    "country": "China",
    "lat": 25.4525,
    "lng": 107.9617,
    "tier": 3
  },
  {
    "iata": "LBV",
    "name": "Libreville Leon M'ba International Airport",
    "city": "Libreville",
    "country": "Gabon",
    "lat": 0.4586,
    "lng": 9.4123,
    "tier": 2
  },
  {
    "iata": "VXC",
    "name": "Lichinga Airport",
    "city": "Lichinga",
    "country": "Mozambique",
    "lat": -13.274,
    "lng": 35.2663,
    "tier": 3
  },
  {
    "iata": "LGG",
    "name": "Liège Airport",
    "city": "Liege",
    "country": "Belgium",
    "lat": 50.6374,
    "lng": 5.4432,
    "tier": 2
  },
  {
    "iata": "LIF",
    "name": "Lifou Airport",
    "city": "Lifou",
    "country": "New Caledonia",
    "lat": -20.7748,
    "lng": 167.24,
    "tier": 3
  },
  {
    "iata": "LIH",
    "name": "Lihue Airport",
    "city": "Lihue",
    "country": "United States",
    "lat": 21.976,
    "lng": -159.339,
    "tier": 2
  },
  {
    "iata": "LJG",
    "name": "Lijiang Airport",
    "city": "Lijiang",
    "country": "China",
    "lat": 26.68,
    "lng": 100.246,
    "tier": 1
  },
  {
    "iata": "LIL",
    "name": "Lille-Lesquin Airport",
    "city": "Lille",
    "country": "France",
    "lat": 50.5633,
    "lng": 3.0869,
    "tier": 1
  },
  {
    "iata": "LLW",
    "name": "Lilongwe International Airport",
    "city": "Lilongwe",
    "country": "Malawi",
    "lat": -13.7894,
    "lng": 33.781,
    "tier": 2
  },
  {
    "iata": "LIM",
    "name": "Jorge Chávez International Airport",
    "city": "Lima",
    "country": "Peru",
    "lat": -12.0219,
    "lng": -77.1143,
    "tier": 1
  },
  {
    "iata": "LMN",
    "name": "Limbang Airport",
    "city": "Limbang",
    "country": "Malaysia",
    "lat": 4.8083,
    "lng": 115.01,
    "tier": 3
  },
  {
    "iata": "LXS",
    "name": "Limnos Airport",
    "city": "Limnos",
    "country": "Greece",
    "lat": 39.9171,
    "lng": 25.2363,
    "tier": 3
  },
  {
    "iata": "LIG",
    "name": "Limoges Airport",
    "city": "Limoges",
    "country": "France",
    "lat": 45.8628,
    "lng": 1.1794,
    "tier": 2
  },
  {
    "iata": "LNJ",
    "name": "Lintsang Airfield",
    "city": "Lincang",
    "country": "China",
    "lat": 23.7381,
    "lng": 100.025,
    "tier": 3
  },
  {
    "iata": "LNK",
    "name": "Lincoln Airport",
    "city": "Lincoln",
    "country": "United States",
    "lat": 40.851,
    "lng": -96.7592,
    "tier": 3
  },
  {
    "iata": "LPI",
    "name": "Linköping City Airport",
    "city": "Linkoeping",
    "country": "Sweden",
    "lat": 58.4062,
    "lng": 15.6805,
    "tier": 3
  },
  {
    "iata": "LYI",
    "name": "Shubuling Airport",
    "city": "Linyi",
    "country": "China",
    "lat": 35.0461,
    "lng": 118.412,
    "tier": 2
  },
  {
    "iata": "LNZ",
    "name": "Linz Hörsching Airport",
    "city": "Linz",
    "country": "Austria",
    "lat": 48.2332,
    "lng": 14.1875,
    "tier": 2
  },
  {
    "iata": "HZH",
    "name": "Liping Airport",
    "city": "Liping",
    "country": "China",
    "lat": 26.3222,
    "lng": 109.1499,
    "tier": 3
  },
  {
    "iata": "LIS",
    "name": "Humberto Delgado Airport (Lisbon Portela Airport)",
    "city": "Lisbon",
    "country": "Portugal",
    "lat": 38.7813,
    "lng": -9.1359,
    "tier": 1
  },
  {
    "iata": "LSY",
    "name": "Lismore Airport",
    "city": "Lismore",
    "country": "Australia",
    "lat": -28.8303,
    "lng": 153.26,
    "tier": 3
  },
  {
    "iata": "LYB",
    "name": "Edward Bodden Airfield",
    "city": "Little Cayman",
    "country": "Cayman Islands",
    "lat": 19.6602,
    "lng": -80.0888,
    "tier": 3
  },
  {
    "iata": "LIT",
    "name": "Bill & Hillary Clinton National Airport/Adams Field",
    "city": "Little Rock",
    "country": "United States",
    "lat": 34.7294,
    "lng": -92.2243,
    "tier": 1
  },
  {
    "iata": "LZH",
    "name": "Liuzhou Bailian Airport",
    "city": "Liuzhou",
    "country": "China",
    "lat": 24.2075,
    "lng": 109.391,
    "tier": 2
  },
  {
    "iata": "LPL",
    "name": "Liverpool John Lennon Airport",
    "city": "Liverpool",
    "country": "United Kingdom",
    "lat": 53.3336,
    "lng": -2.8497,
    "tier": 1
  },
  {
    "iata": "LVI",
    "name": "Livingstone Airport",
    "city": "Livingstone",
    "country": "Zambia",
    "lat": -17.8218,
    "lng": 25.8227,
    "tier": 2
  },
  {
    "iata": "LJU",
    "name": "Ljubljana Jože Pučnik Airport",
    "city": "Ljubljana",
    "country": "Slovenia",
    "lat": 46.2237,
    "lng": 14.4576,
    "tier": 1
  },
  {
    "iata": "ILD",
    "name": "Lleida-Alguaire Airport",
    "city": "Lleida",
    "country": "Spain",
    "lat": 41.7282,
    "lng": 0.535,
    "tier": 3
  },
  {
    "iata": "YLL",
    "name": "Lloydminster Airport",
    "city": "Lloydminster",
    "country": "Canada",
    "lat": 53.3092,
    "lng": -110.073,
    "tier": 3
  },
  {
    "iata": "IRG",
    "name": "Lockhart River Airport",
    "city": "Lockhart River",
    "country": "Australia",
    "lat": -12.7869,
    "lng": 143.305,
    "tier": 3
  },
  {
    "iata": "LJA",
    "name": "Lodja Airport",
    "city": "Lodja",
    "country": "Congo (Kinshasa)",
    "lat": -3.417,
    "lng": 23.45,
    "tier": 3
  },
  {
    "iata": "LOK",
    "name": "Lodwar Airport",
    "city": "Lodwar",
    "country": "Kenya",
    "lat": 3.122,
    "lng": 35.6087,
    "tier": 3
  },
  {
    "iata": "LOE",
    "name": "Loei Airport",
    "city": "Loei",
    "country": "Thailand",
    "lat": 17.4391,
    "lng": 101.722,
    "tier": 3
  },
  {
    "iata": "RJL",
    "name": "Logroño-Agoncillo Airport",
    "city": "Logroño-Agoncillo",
    "country": "Spain",
    "lat": 42.461,
    "lng": -2.3222,
    "tier": 3
  },
  {
    "iata": "TOH",
    "name": "Torres Airstrip",
    "city": "Loh/Linua",
    "country": "Vanuatu",
    "lat": -13.328,
    "lng": 166.638,
    "tier": 3
  },
  {
    "iata": "LKG",
    "name": "Lokichoggio Airport",
    "city": "Lokichoggio",
    "country": "Kenya",
    "lat": 4.2041,
    "lng": 34.3482,
    "tier": 3
  },
  {
    "iata": "LFW",
    "name": "Lomé-Tokoin Airport",
    "city": "Lome",
    "country": "Togo",
    "lat": 6.1656,
    "lng": 1.2545,
    "tier": 2
  },
  {
    "iata": "LCY",
    "name": "London City Airport",
    "city": "London",
    "country": "United Kingdom",
    "lat": 51.5053,
    "lng": 0.0553,
    "tier": 1
  },
  {
    "iata": "LGW",
    "name": "London Gatwick Airport",
    "city": "London",
    "country": "United Kingdom",
    "lat": 51.1481,
    "lng": -0.1903,
    "tier": 1
  },
  {
    "iata": "LHR",
    "name": "London Heathrow Airport",
    "city": "London",
    "country": "United Kingdom",
    "lat": 51.4706,
    "lng": -0.4619,
    "tier": 1
  },
  {
    "iata": "LTN",
    "name": "London Luton Airport",
    "city": "London",
    "country": "United Kingdom",
    "lat": 51.8747,
    "lng": -0.3683,
    "tier": 1
  },
  {
    "iata": "STN",
    "name": "London Stansted Airport",
    "city": "London",
    "country": "United Kingdom",
    "lat": 51.885,
    "lng": 0.235,
    "tier": 1
  },
  {
    "iata": "YXU",
    "name": "London Airport",
    "city": "London",
    "country": "Canada",
    "lat": 43.0356,
    "lng": -81.1539,
    "tier": 2
  },
  {
    "iata": "LDY",
    "name": "City of Derry Airport",
    "city": "Londonderry",
    "country": "United Kingdom",
    "lat": 55.0428,
    "lng": -7.1611,
    "tier": 3
  },
  {
    "iata": "LDB",
    "name": "Governador José Richa Airport",
    "city": "Londrina",
    "country": "Brazil",
    "lat": -23.3336,
    "lng": -51.1301,
    "tier": 2
  },
  {
    "iata": "LKH",
    "name": "Long Akah Airport",
    "city": "Long Akah",
    "country": "Malaysia",
    "lat": 3.3,
    "lng": 114.783,
    "tier": 3
  },
  {
    "iata": "LGB",
    "name": "Long Beach /Daugherty Field/ Airport",
    "city": "Long Beach",
    "country": "United States",
    "lat": 33.8177,
    "lng": -118.152,
    "tier": 2
  },
  {
    "iata": "LGL",
    "name": "Long Lellang Airport",
    "city": "Long Datih",
    "country": "Malaysia",
    "lat": 3.421,
    "lng": 115.154,
    "tier": 3
  },
  {
    "iata": "ODN",
    "name": "Long Seridan Airport",
    "city": "Long Seridan",
    "country": "Malaysia",
    "lat": 3.967,
    "lng": 115.05,
    "tier": 3
  },
  {
    "iata": "LOD",
    "name": "Longana Airport",
    "city": "Longana",
    "country": "Vanuatu",
    "lat": -15.3067,
    "lng": 167.967,
    "tier": 3
  },
  {
    "iata": "LRE",
    "name": "Longreach Airport",
    "city": "Longreach",
    "country": "Australia",
    "lat": -23.4342,
    "lng": 144.28,
    "tier": 3
  },
  {
    "iata": "GGG",
    "name": "East Texas Regional Airport",
    "city": "Longview",
    "country": "United States",
    "lat": 32.384,
    "lng": -94.7115,
    "tier": 3
  },
  {
    "iata": "LCX",
    "name": "Longyan Guanzhishan Airport",
    "city": "Longyan",
    "country": "China",
    "lat": 25.6747,
    "lng": 116.747,
    "tier": 3
  },
  {
    "iata": "LNE",
    "name": "Lonorore Airport",
    "city": "Lonorore",
    "country": "Vanuatu",
    "lat": -15.8656,
    "lng": 168.172,
    "tier": 3
  },
  {
    "iata": "LDH",
    "name": "Lord Howe Island Airport",
    "city": "Lord Howe Island",
    "country": "Australia",
    "lat": -31.5383,
    "lng": 159.077,
    "tier": 3
  },
  {
    "iata": "LTO",
    "name": "Loreto International Airport",
    "city": "Loreto",
    "country": "Mexico",
    "lat": 25.9892,
    "lng": -111.348,
    "tier": 3
  },
  {
    "iata": "LRT",
    "name": "Lorient South Brittany (Bretagne Sud) Airport",
    "city": "Lorient",
    "country": "France",
    "lat": 47.7606,
    "lng": -3.44,
    "tier": 3
  },
  {
    "iata": "LAM",
    "name": "Los Alamos Airport",
    "city": "Los Alamos",
    "country": "United States",
    "lat": 35.8798,
    "lng": -106.269,
    "tier": 3
  },
  {
    "iata": "LAX",
    "name": "Los Angeles International Airport",
    "city": "Los Angeles",
    "country": "United States",
    "lat": 33.9425,
    "lng": -118.408,
    "tier": 1
  },
  {
    "iata": "LMM",
    "name": "Valle del Fuerte International Airport",
    "city": "Los Mochis",
    "country": "Mexico",
    "lat": 25.6852,
    "lng": -109.081,
    "tier": 3
  },
  {
    "iata": "SDF",
    "name": "Louisville International Standiford Field",
    "city": "Louisville",
    "country": "United States",
    "lat": 38.1744,
    "lng": -85.736,
    "tier": 1
  },
  {
    "iata": "YBX",
    "name": "Lourdes de Blanc Sablon Airport",
    "city": "Lourdes-De-Blanc-Sablon",
    "country": "Canada",
    "lat": 51.4436,
    "lng": -57.1853,
    "tier": 3
  },
  {
    "iata": "LAD",
    "name": "Quatro de Fevereiro Airport",
    "city": "Luanda",
    "country": "Angola",
    "lat": -8.8584,
    "lng": 13.2312,
    "tier": 1
  },
  {
    "iata": "LXG",
    "name": "Luang Namtha Airport",
    "city": "Luang Namtha",
    "country": "Laos",
    "lat": 20.967,
    "lng": 101.4,
    "tier": 3
  },
  {
    "iata": "LPQ",
    "name": "Luang Phabang International Airport",
    "city": "Luang Prabang",
    "country": "Laos",
    "lat": 19.8973,
    "lng": 102.161,
    "tier": 2
  },
  {
    "iata": "SDD",
    "name": "Lubango Airport",
    "city": "Lubango",
    "country": "Angola",
    "lat": -14.9247,
    "lng": 13.575,
    "tier": 3
  },
  {
    "iata": "LBB",
    "name": "Lubbock Preston Smith International Airport",
    "city": "Lubbock",
    "country": "United States",
    "lat": 33.6636,
    "lng": -101.823,
    "tier": 2
  },
  {
    "iata": "LUZ",
    "name": "Lublin Airport",
    "city": "Lublin",
    "country": "Poland",
    "lat": 51.2403,
    "lng": 22.7136,
    "tier": 2
  },
  {
    "iata": "FBM",
    "name": "Lubumbashi International Airport",
    "city": "Lubumashi",
    "country": "Congo (Kinshasa)",
    "lat": -11.5913,
    "lng": 27.5309,
    "tier": 2
  },
  {
    "iata": "LKO",
    "name": "Chaudhary Charan Singh International Airport",
    "city": "Lucknow",
    "country": "India",
    "lat": 26.7606,
    "lng": 80.8893,
    "tier": 2
  },
  {
    "iata": "LUD",
    "name": "Luderitz Airport",
    "city": "Luderitz",
    "country": "Namibia",
    "lat": -26.6874,
    "lng": 15.2429,
    "tier": 3
  },
  {
    "iata": "LUH",
    "name": "Ludhiana Airport",
    "city": "Ludhiaha",
    "country": "India",
    "lat": 30.8547,
    "lng": 75.9526,
    "tier": 3
  },
  {
    "iata": "LBC",
    "name": "Lübeck Blankensee Airport",
    "city": "Luebeck",
    "country": "Germany",
    "lat": 53.8054,
    "lng": 10.7192,
    "tier": 3
  },
  {
    "iata": "LUO",
    "name": "Luena Airport",
    "city": "Luena",
    "country": "Angola",
    "lat": -11.7681,
    "lng": 19.8977,
    "tier": 3
  },
  {
    "iata": "LUG",
    "name": "Lugano Airport",
    "city": "Lugano",
    "country": "Switzerland",
    "lat": 46.0043,
    "lng": 8.9106,
    "tier": 3
  },
  {
    "iata": "LLA",
    "name": "Luleå Airport",
    "city": "Lulea",
    "country": "Sweden",
    "lat": 65.5438,
    "lng": 22.122,
    "tier": 2
  },
  {
    "iata": "LYA",
    "name": "Luoyang Airport",
    "city": "Luoyang",
    "country": "China",
    "lat": 34.7411,
    "lng": 112.388,
    "tier": 2
  },
  {
    "iata": "LUN",
    "name": "Kenneth Kaunda International Airport Lusaka",
    "city": "Lusaka",
    "country": "Zambia",
    "lat": -15.3308,
    "lng": 28.4526,
    "tier": 1
  },
  {
    "iata": "YSG",
    "name": "Lutselk'e Airport",
    "city": "Lutselk'e",
    "country": "Canada",
    "lat": 62.4183,
    "lng": -110.682,
    "tier": 3
  },
  {
    "iata": "LUW",
    "name": "Syukuran Aminuddin Amir Airport",
    "city": "Luwuk",
    "country": "Indonesia",
    "lat": -1.0389,
    "lng": 122.772,
    "tier": 3
  },
  {
    "iata": "LUX",
    "name": "Luxembourg-Findel International Airport",
    "city": "Luxemburg",
    "country": "Luxembourg",
    "lat": 49.6233,
    "lng": 6.2044,
    "tier": 1
  },
  {
    "iata": "LUM",
    "name": "Mangshi Airport",
    "city": "Luxi",
    "country": "China",
    "lat": 24.4011,
    "lng": 98.5317,
    "tier": 2
  },
  {
    "iata": "LXR",
    "name": "Luxor International Airport",
    "city": "Luxor",
    "country": "Egypt",
    "lat": 25.671,
    "lng": 32.7066,
    "tier": 2
  },
  {
    "iata": "LZO",
    "name": "Luzhou Airport",
    "city": "Luzhou",
    "country": "China",
    "lat": 28.8522,
    "lng": 105.393,
    "tier": 2
  },
  {
    "iata": "LWO",
    "name": "Lviv International Airport",
    "city": "Lvov",
    "country": "Ukraine",
    "lat": 49.8125,
    "lng": 23.9561,
    "tier": 2
  },
  {
    "iata": "LYC",
    "name": "Lycksele Airport",
    "city": "Lycksele",
    "country": "Sweden",
    "lat": 64.5483,
    "lng": 18.7162,
    "tier": 3
  },
  {
    "iata": "LYH",
    "name": "Lynchburg Regional Preston Glenn Field",
    "city": "Lynchburg",
    "country": "United States",
    "lat": 37.3267,
    "lng": -79.2004,
    "tier": 3
  },
  {
    "iata": "LYS",
    "name": "Lyon Saint-Exupéry Airport",
    "city": "Lyon",
    "country": "France",
    "lat": 45.7256,
    "lng": 5.0811,
    "tier": 1
  },
  {
    "iata": "SSY",
    "name": "Mbanza Congo Airport",
    "city": "M'banza-congo",
    "country": "Angola",
    "lat": -6.2699,
    "lng": 14.247,
    "tier": 3
  },
  {
    "iata": "MGM",
    "name": "Montgomery Regional (Dannelly Field) Airport",
    "city": "MONTGOMERY",
    "country": "United States",
    "lat": 32.3006,
    "lng": -86.394,
    "tier": 2
  },
  {
    "iata": "MST",
    "name": "Maastricht Aachen Airport",
    "city": "Maastricht",
    "country": "Netherlands",
    "lat": 50.9117,
    "lng": 5.7701,
    "tier": 2
  },
  {
    "iata": "MCP",
    "name": "Alberto Alcolumbre Airport",
    "city": "Macapa",
    "country": "Brazil",
    "lat": 0.0507,
    "lng": -51.0722,
    "tier": 3
  },
  {
    "iata": "XMS",
    "name": "Coronel E Carvajal Airport",
    "city": "Macas",
    "country": "Ecuador",
    "lat": -2.2992,
    "lng": -78.1208,
    "tier": 3
  },
  {
    "iata": "MFM",
    "name": "Macau International Airport",
    "city": "Macau",
    "country": "Macau",
    "lat": 22.1496,
    "lng": 113.592,
    "tier": 1
  },
  {
    "iata": "MEA",
    "name": "Macaé Airport",
    "city": "Macaé",
    "country": "Brazil",
    "lat": -22.343,
    "lng": -41.766,
    "tier": 3
  },
  {
    "iata": "MCZ",
    "name": "Zumbi dos Palmares Airport",
    "city": "Maceio",
    "country": "Brazil",
    "lat": -9.5108,
    "lng": -35.7917,
    "tier": 2
  },
  {
    "iata": "MKY",
    "name": "Mackay Airport",
    "city": "Mackay",
    "country": "Australia",
    "lat": -21.1717,
    "lng": 149.18,
    "tier": 2
  },
  {
    "iata": "MCN",
    "name": "Middle Georgia Regional Airport",
    "city": "Macon",
    "country": "United States",
    "lat": 32.6928,
    "lng": -83.6492,
    "tier": 3
  },
  {
    "iata": "MAG",
    "name": "Madang Airport",
    "city": "Madang",
    "country": "Papua New Guinea",
    "lat": -5.2071,
    "lng": 145.789,
    "tier": 2
  },
  {
    "iata": "MED",
    "name": "Prince Mohammad Bin Abdulaziz Airport",
    "city": "Madinah",
    "country": "Saudi Arabia",
    "lat": 24.5534,
    "lng": 39.7051,
    "tier": 1
  },
  {
    "iata": "MSN",
    "name": "Dane County Regional Truax Field",
    "city": "Madison",
    "country": "United States",
    "lat": 43.1399,
    "lng": -89.3375,
    "tier": 2
  },
  {
    "iata": "MAA",
    "name": "Chennai International Airport",
    "city": "Madras",
    "country": "India",
    "lat": 12.99,
    "lng": 80.1693,
    "tier": 1
  },
  {
    "iata": "MAD",
    "name": "Adolfo Suárez Madrid–Barajas Airport",
    "city": "Madrid",
    "country": "Spain",
    "lat": 40.4719,
    "lng": -3.5626,
    "tier": 1
  },
  {
    "iata": "IXM",
    "name": "Madurai Airport",
    "city": "Madurai",
    "country": "India",
    "lat": 9.8345,
    "lng": 78.0934,
    "tier": 2
  },
  {
    "iata": "HGN",
    "name": "Mae Hong Son Airport",
    "city": "Mae Hong Son",
    "country": "Thailand",
    "lat": 19.3013,
    "lng": 97.9758,
    "tier": 3
  },
  {
    "iata": "MWF",
    "name": "Maewo-Naone Airport",
    "city": "Maewo Island",
    "country": "Vanuatu",
    "lat": -15.0,
    "lng": 168.083,
    "tier": 3
  },
  {
    "iata": "GDX",
    "name": "Sokol Airport",
    "city": "Magadan",
    "country": "Russia",
    "lat": 59.911,
    "lng": 150.72,
    "tier": 2
  },
  {
    "iata": "MQF",
    "name": "Magnitogorsk International Airport",
    "city": "Magnetiogorsk",
    "country": "Russia",
    "lat": 53.3931,
    "lng": 58.7557,
    "tier": 3
  },
  {
    "iata": "MJN",
    "name": "Amborovy Airport",
    "city": "Mahajanga",
    "country": "Madagascar",
    "lat": -15.6668,
    "lng": 46.3512,
    "tier": 3
  },
  {
    "iata": "SEZ",
    "name": "Seychelles International Airport",
    "city": "Mahe",
    "country": "Seychelles",
    "lat": -4.6743,
    "lng": 55.5218,
    "tier": 2
  },
  {
    "iata": "MMO",
    "name": "Maio Airport",
    "city": "Maio",
    "country": "Cape Verde",
    "lat": 15.1559,
    "lng": -23.2137,
    "tier": 3
  },
  {
    "iata": "MAJ",
    "name": "Marshall Islands International Airport",
    "city": "Majuro",
    "country": "Marshall Islands",
    "lat": 7.0648,
    "lng": 171.272,
    "tier": 3
  },
  {
    "iata": "MQX",
    "name": "Mekele Airport",
    "city": "Makale",
    "country": "Ethiopia",
    "lat": 13.4674,
    "lng": 39.5335,
    "tier": 3
  },
  {
    "iata": "MKP",
    "name": "Makemo Airport",
    "city": "Makemo",
    "country": "French Polynesia",
    "lat": -16.5839,
    "lng": -143.658,
    "tier": 3
  },
  {
    "iata": "MCX",
    "name": "Uytash Airport",
    "city": "Makhachkala",
    "country": "Russia",
    "lat": 42.8168,
    "lng": 47.6523,
    "tier": 3
  },
  {
    "iata": "YMN",
    "name": "Makkovik Airport",
    "city": "Makkovik",
    "country": "Canada",
    "lat": 55.0769,
    "lng": -59.1864,
    "tier": 3
  },
  {
    "iata": "MZG",
    "name": "Makung Airport",
    "city": "Makung",
    "country": "Taiwan",
    "lat": 23.5687,
    "lng": 119.628,
    "tier": 3
  },
  {
    "iata": "SSG",
    "name": "Malabo Airport",
    "city": "Malabo",
    "country": "Equatorial Guinea",
    "lat": 3.7553,
    "lng": 8.7087,
    "tier": 2
  },
  {
    "iata": "AGP",
    "name": "Málaga Airport",
    "city": "Malaga",
    "country": "Spain",
    "lat": 36.6749,
    "lng": -4.4991,
    "tier": 1
  },
  {
    "iata": "MLG",
    "name": "Abdul Rachman Saleh Airport",
    "city": "Malang",
    "country": "Indonesia",
    "lat": -7.9266,
    "lng": 112.715,
    "tier": 3
  },
  {
    "iata": "MEG",
    "name": "Malanje Airport",
    "city": "Malanje",
    "country": "Angola",
    "lat": -9.5251,
    "lng": 16.3124,
    "tier": 3
  },
  {
    "iata": "MLX",
    "name": "Malatya Erhaç Airport",
    "city": "Malatya",
    "country": "Turkey",
    "lat": 38.4353,
    "lng": 38.091,
    "tier": 3
  },
  {
    "iata": "MLE",
    "name": "Malé International Airport",
    "city": "Male",
    "country": "Maldives",
    "lat": 4.1918,
    "lng": 73.5291,
    "tier": 1
  },
  {
    "iata": "SWJ",
    "name": "Southwest Bay Airport",
    "city": "Malekula Island",
    "country": "Vanuatu",
    "lat": -16.4864,
    "lng": 167.4472,
    "tier": 3
  },
  {
    "iata": "MYD",
    "name": "Malindi Airport",
    "city": "Malindi",
    "country": "Kenya",
    "lat": -3.2293,
    "lng": 40.1017,
    "tier": 3
  },
  {
    "iata": "MMX",
    "name": "Malmö Sturup Airport",
    "city": "Malmoe",
    "country": "Sweden",
    "lat": 55.5363,
    "lng": 13.3762,
    "tier": 2
  },
  {
    "iata": "MLA",
    "name": "Malta International Airport",
    "city": "Malta",
    "country": "Malta",
    "lat": 35.8575,
    "lng": 14.4775,
    "tier": 1
  },
  {
    "iata": "MMH",
    "name": "Mammoth Yosemite Airport",
    "city": "Mammoth Lakes",
    "country": "United States",
    "lat": 37.6241,
    "lng": -118.838,
    "tier": 3
  },
  {
    "iata": "MDC",
    "name": "Sam Ratulangi Airport",
    "city": "Manado",
    "country": "Indonesia",
    "lat": 1.5493,
    "lng": 124.926,
    "tier": 2
  },
  {
    "iata": "MGA",
    "name": "Augusto C. Sandino (Managua) International Airport",
    "city": "Managua",
    "country": "Nicaragua",
    "lat": 12.1415,
    "lng": -86.1682,
    "tier": 2
  },
  {
    "iata": "WMR",
    "name": "Mananara Nord Airport",
    "city": "Mananara",
    "country": "Madagascar",
    "lat": -16.1639,
    "lng": 49.7738,
    "tier": 3
  },
  {
    "iata": "MAO",
    "name": "Eduardo Gomes International Airport",
    "city": "Manaus",
    "country": "Brazil",
    "lat": -3.0386,
    "lng": -60.0497,
    "tier": 1
  },
  {
    "iata": "MAN",
    "name": "Manchester Airport",
    "city": "Manchester",
    "country": "United Kingdom",
    "lat": 53.3537,
    "lng": -2.275,
    "tier": 1
  },
  {
    "iata": "MHT",
    "name": "Manchester-Boston Regional Airport",
    "city": "Manchester NH",
    "country": "United States",
    "lat": 42.9326,
    "lng": -71.4357,
    "tier": 2
  },
  {
    "iata": "MDL",
    "name": "Mandalay International Airport",
    "city": "Mandalay",
    "country": "Burma",
    "lat": 21.7022,
    "lng": 95.9779,
    "tier": 2
  },
  {
    "iata": "MGS",
    "name": "Mangaia Island Airport",
    "city": "Mangaia Island",
    "country": "Cook Islands",
    "lat": -21.896,
    "lng": -157.9067,
    "tier": 3
  },
  {
    "iata": "IXE",
    "name": "Mangalore International Airport",
    "city": "Mangalore",
    "country": "India",
    "lat": 12.9613,
    "lng": 74.8901,
    "tier": 2
  },
  {
    "iata": "MHK",
    "name": "Manhattan Regional Airport",
    "city": "Manhattan",
    "country": "United States",
    "lat": 39.141,
    "lng": -96.6708,
    "tier": 3
  },
  {
    "iata": "XMH",
    "name": "Manihi Airport",
    "city": "Manihi",
    "country": "French Polynesia",
    "lat": -14.4368,
    "lng": -146.07,
    "tier": 3
  },
  {
    "iata": "JSU",
    "name": "Maniitsoq Airport",
    "city": "Maniitsoq",
    "country": "Greenland",
    "lat": 65.4125,
    "lng": -52.9394,
    "tier": 3
  },
  {
    "iata": "MNL",
    "name": "Ninoy Aquino International Airport",
    "city": "Manila",
    "country": "Philippines",
    "lat": 14.5086,
    "lng": 121.02,
    "tier": 1
  },
  {
    "iata": "MNG",
    "name": "Maningrida Airport",
    "city": "Maningrida",
    "country": "Australia",
    "lat": -12.0561,
    "lng": 134.234,
    "tier": 3
  },
  {
    "iata": "MBL",
    "name": "Manistee Co Blacker Airport",
    "city": "Manistee",
    "country": "United States",
    "lat": 44.2724,
    "lng": -86.2469,
    "tier": 3
  },
  {
    "iata": "MZL",
    "name": "La Nubia Airport",
    "city": "Manizales",
    "country": "Colombia",
    "lat": 5.0296,
    "lng": -75.4647,
    "tier": 3
  },
  {
    "iata": "MLY",
    "name": "Manley Hot Springs Airport",
    "city": "Manley Hot Springs",
    "country": "United States",
    "lat": 64.9976,
    "lng": -150.644,
    "tier": 3
  },
  {
    "iata": "MHG",
    "name": "Mannheim-City Airport",
    "city": "Mannheim",
    "country": "Germany",
    "lat": 49.4731,
    "lng": 8.5142,
    "tier": 3
  },
  {
    "iata": "MKW",
    "name": "Rendani Airport",
    "city": "Manokwari",
    "country": "Indonesia",
    "lat": -0.8918,
    "lng": 134.049,
    "tier": 2
  },
  {
    "iata": "MNS",
    "name": "Mansa Airport",
    "city": "Mansa",
    "country": "Zambia",
    "lat": -11.137,
    "lng": 28.8726,
    "tier": 3
  },
  {
    "iata": "MEC",
    "name": "Eloy Alfaro International Airport",
    "city": "Manta",
    "country": "Ecuador",
    "lat": -0.9461,
    "lng": -80.6788,
    "tier": 3
  },
  {
    "iata": "ZLO",
    "name": "Playa De Oro International Airport",
    "city": "Manzanillo",
    "country": "Mexico",
    "lat": 19.1448,
    "lng": -104.559,
    "tier": 2
  },
  {
    "iata": "NZH",
    "name": "Manzhouli Xijiao Airport",
    "city": "Manzhouli",
    "country": "China",
    "lat": 49.5667,
    "lng": 117.33,
    "tier": 2
  },
  {
    "iata": "MTS",
    "name": "Matsapha Airport",
    "city": "Manzini",
    "country": "Swaziland",
    "lat": -26.529,
    "lng": 31.3075,
    "tier": 3
  },
  {
    "iata": "MPM",
    "name": "Maputo Airport",
    "city": "Maputo",
    "country": "Mozambique",
    "lat": -25.9208,
    "lng": 32.5726,
    "tier": 2
  },
  {
    "iata": "MDQ",
    "name": "Ástor Piazzola International Airport",
    "city": "Mar Del Plata",
    "country": "Argentina",
    "lat": -37.9342,
    "lng": -57.5733,
    "tier": 3
  },
  {
    "iata": "MAB",
    "name": "João Correa da Rocha Airport",
    "city": "Maraba",
    "country": "Brazil",
    "lat": -5.3686,
    "lng": -49.138,
    "tier": 2
  },
  {
    "iata": "MAR",
    "name": "La Chinita International Airport",
    "city": "Maracaibo",
    "country": "Venezuela",
    "lat": 10.5582,
    "lng": -71.7279,
    "tier": 2
  },
  {
    "iata": "RUS",
    "name": "Marau Airport",
    "city": "Marau",
    "country": "Solomon Islands",
    "lat": -9.8617,
    "lng": 160.825,
    "tier": 3
  },
  {
    "iata": "MQM",
    "name": "Mardin Airport",
    "city": "Mardin",
    "country": "Turkey",
    "lat": 37.2233,
    "lng": 40.6317,
    "tier": 3
  },
  {
    "iata": "MEE",
    "name": "Maré Airport",
    "city": "Mare",
    "country": "New Caledonia",
    "lat": -21.4817,
    "lng": 168.038,
    "tier": 3
  },
  {
    "iata": "MGH",
    "name": "Margate Airport",
    "city": "Margate",
    "country": "South Africa",
    "lat": -30.8574,
    "lng": 30.343,
    "tier": 3
  },
  {
    "iata": "MHQ",
    "name": "Mariehamn Airport",
    "city": "Mariehamn",
    "country": "Finland",
    "lat": 60.1222,
    "lng": 19.8982,
    "tier": 3
  },
  {
    "iata": "EBA",
    "name": "Marina Di Campo Airport",
    "city": "Marina Di Campo",
    "country": "Italy",
    "lat": 42.7603,
    "lng": 10.2394,
    "tier": 3
  },
  {
    "iata": "MGF",
    "name": "Regional de Maringá - Sílvio Nane Junior Airport",
    "city": "Maringa",
    "country": "Brazil",
    "lat": -23.4794,
    "lng": -52.0122,
    "tier": 2
  },
  {
    "iata": "MWA",
    "name": "Williamson County Regional Airport",
    "city": "Marion",
    "country": "United States",
    "lat": 37.755,
    "lng": -89.0111,
    "tier": 3
  },
  {
    "iata": "WMN",
    "name": "Maroantsetra Airport",
    "city": "Maroantsetra",
    "country": "Madagascar",
    "lat": -15.4367,
    "lng": 49.6883,
    "tier": 3
  },
  {
    "iata": "MCY",
    "name": "Sunshine Coast Airport",
    "city": "Maroochydore",
    "country": "Australia",
    "lat": -26.6033,
    "lng": 153.091,
    "tier": 3
  },
  {
    "iata": "MVR",
    "name": "Salak Airport",
    "city": "Maroua",
    "country": "Cameroon",
    "lat": 10.4514,
    "lng": 14.2574,
    "tier": 3
  },
  {
    "iata": "RAK",
    "name": "Menara Airport",
    "city": "Marrakech",
    "country": "Morocco",
    "lat": 31.6069,
    "lng": -8.0363,
    "tier": 1
  },
  {
    "iata": "RMF",
    "name": "Marsa Alam International Airport",
    "city": "Marsa Alam",
    "country": "Egypt",
    "lat": 25.5571,
    "lng": 34.5837,
    "tier": 2
  },
  {
    "iata": "MRS",
    "name": "Marseille Provence Airport",
    "city": "Marseille",
    "country": "France",
    "lat": 43.4393,
    "lng": 5.2214,
    "tier": 1
  },
  {
    "iata": "MHH",
    "name": "Leonard M Thompson International Airport",
    "city": "Marsh Harbor",
    "country": "Bahamas",
    "lat": 26.5114,
    "lng": -77.0835,
    "tier": 2
  },
  {
    "iata": "MLL",
    "name": "Marshall Don Hunter Sr Airport",
    "city": "Marshall",
    "country": "United States",
    "lat": 61.8643,
    "lng": -162.026,
    "tier": 3
  },
  {
    "iata": "MUR",
    "name": "Marudi Airport",
    "city": "Marudi",
    "country": "Malaysia",
    "lat": 4.179,
    "lng": 114.329,
    "tier": 3
  },
  {
    "iata": "MII",
    "name": "Frank Miloye Milenkowichi–Marília State Airport",
    "city": "Marília",
    "country": "Brazil",
    "lat": -22.1969,
    "lng": -49.9264,
    "tier": 3
  },
  {
    "iata": "MRE",
    "name": "Mara Serena Lodge Airstrip",
    "city": "Masai Mara",
    "country": "Kenya",
    "lat": -1.4061,
    "lng": 35.0081,
    "tier": 3
  },
  {
    "iata": "MBT",
    "name": "Moises R. Espinosa Airport",
    "city": "Masbate",
    "country": "Philippines",
    "lat": 12.3697,
    "lng": 123.6301,
    "tier": 3
  },
  {
    "iata": "MSU",
    "name": "Moshoeshoe I International Airport",
    "city": "Maseru",
    "country": "Lesotho",
    "lat": -29.4623,
    "lng": 27.5525,
    "tier": 3
  },
  {
    "iata": "MHD",
    "name": "Mashhad International Airport",
    "city": "Mashhad",
    "country": "Iran",
    "lat": 36.2352,
    "lng": 59.641,
    "tier": 1
  },
  {
    "iata": "MSW",
    "name": "Massawa International Airport",
    "city": "Massawa",
    "country": "Eritrea",
    "lat": 15.67,
    "lng": 39.3701,
    "tier": 3
  },
  {
    "iata": "MSS",
    "name": "Massena International Richards Field",
    "city": "Massena",
    "country": "United States",
    "lat": 44.9358,
    "lng": -74.8456,
    "tier": 3
  },
  {
    "iata": "ZMT",
    "name": "Masset Airport",
    "city": "Masset",
    "country": "Canada",
    "lat": 54.0275,
    "lng": -132.125,
    "tier": 3
  },
  {
    "iata": "MVT",
    "name": "Mataiva Airport",
    "city": "Mataiva",
    "country": "French Polynesia",
    "lat": -14.8681,
    "lng": -148.717,
    "tier": 3
  },
  {
    "iata": "MAM",
    "name": "General Servando Canales International Airport",
    "city": "Matamoros",
    "country": "Mexico",
    "lat": 25.7699,
    "lng": -97.5253,
    "tier": 3
  },
  {
    "iata": "TVU",
    "name": "Matei Airport",
    "city": "Matei",
    "country": "Fiji",
    "lat": -16.6906,
    "lng": -179.877,
    "tier": 3
  },
  {
    "iata": "MMJ",
    "name": "Matsumoto Airport",
    "city": "Matsumoto",
    "country": "Japan",
    "lat": 36.1668,
    "lng": 137.923,
    "tier": 3
  },
  {
    "iata": "MYJ",
    "name": "Matsuyama Airport",
    "city": "Matsuyama",
    "country": "Japan",
    "lat": 33.8272,
    "lng": 132.7,
    "tier": 2
  },
  {
    "iata": "HRI",
    "name": "Mattala Rajapaksa International Airport",
    "city": "Mattala",
    "country": "Sri Lanka",
    "lat": 6.2845,
    "lng": 81.1241,
    "tier": 2
  },
  {
    "iata": "IGA",
    "name": "Inagua Airport",
    "city": "Matthew Town",
    "country": "Bahamas",
    "lat": 20.975,
    "lng": -73.6669,
    "tier": 3
  },
  {
    "iata": "MUN",
    "name": "Maturín Airport",
    "city": "Maturin",
    "country": "Venezuela",
    "lat": 9.7545,
    "lng": -63.1474,
    "tier": 3
  },
  {
    "iata": "MUK",
    "name": "Mauke Airport",
    "city": "Mauke Island",
    "country": "Cook Islands",
    "lat": -20.1361,
    "lng": -157.345,
    "tier": 3
  },
  {
    "iata": "MOF",
    "name": "Maumere(Wai Oti) Airport",
    "city": "Maumere",
    "country": "Indonesia",
    "lat": -8.6406,
    "lng": 122.237,
    "tier": 3
  },
  {
    "iata": "MUB",
    "name": "Maun Airport",
    "city": "Maun",
    "country": "Botswana",
    "lat": -19.9726,
    "lng": 23.4311,
    "tier": 2
  },
  {
    "iata": "MAU",
    "name": "Maupiti Airport",
    "city": "Maupiti",
    "country": "French Polynesia",
    "lat": -16.4265,
    "lng": -152.244,
    "tier": 3
  },
  {
    "iata": "MYG",
    "name": "Mayaguana Airport",
    "city": "Mayaguana",
    "country": "Bahamas",
    "lat": 22.3795,
    "lng": -73.0135,
    "tier": 3
  },
  {
    "iata": "MAZ",
    "name": "Eugenio Maria De Hostos Airport",
    "city": "Mayaguez",
    "country": "Puerto Rico",
    "lat": 18.2557,
    "lng": -67.1485,
    "tier": 3
  },
  {
    "iata": "MZR",
    "name": "Mazar I Sharif Airport",
    "city": "Mazar-i-sharif",
    "country": "Afghanistan",
    "lat": 36.7069,
    "lng": 67.2097,
    "tier": 3
  },
  {
    "iata": "MZT",
    "name": "General Rafael Buelna International Airport",
    "city": "Mazatlan",
    "country": "Mexico",
    "lat": 23.1614,
    "lng": -106.266,
    "tier": 2
  },
  {
    "iata": "MDK",
    "name": "Mbandaka Airport",
    "city": "Mbandaka",
    "country": "Congo (Kinshasa)",
    "lat": 0.0226,
    "lng": 18.2887,
    "tier": 3
  },
  {
    "iata": "MBI",
    "name": "Songwe Airport",
    "city": "Mbeya",
    "country": "Tanzania",
    "lat": -8.9199,
    "lng": 33.274,
    "tier": 3
  },
  {
    "iata": "MJM",
    "name": "Mbuji Mayi Airport",
    "city": "Mbuji-mayi",
    "country": "Congo (Kinshasa)",
    "lat": -6.1212,
    "lng": 23.569,
    "tier": 3
  },
  {
    "iata": "MCV",
    "name": "McArthur River Mine Airport",
    "city": "McArthur River Mine",
    "country": "Australia",
    "lat": -16.4425,
    "lng": 136.084,
    "tier": 3
  },
  {
    "iata": "MCK",
    "name": "Mc Cook Ben Nelson Regional Airport",
    "city": "McCook",
    "country": "United States",
    "lat": 40.2063,
    "lng": -100.592,
    "tier": 3
  },
  {
    "iata": "MFE",
    "name": "Mc Allen Miller International Airport",
    "city": "Mcallen",
    "country": "United States",
    "lat": 26.1758,
    "lng": -98.2386,
    "tier": 2
  },
  {
    "iata": "MCG",
    "name": "McGrath Airport",
    "city": "Mcgrath",
    "country": "United States",
    "lat": 62.9529,
    "lng": -155.606,
    "tier": 3
  },
  {
    "iata": "MZW",
    "name": "Mecheria Airport",
    "city": "Mecheria",
    "country": "Algeria",
    "lat": 33.5359,
    "lng": -0.2424,
    "tier": 3
  },
  {
    "iata": "EOH",
    "name": "Enrique Olaya Herrera Airport",
    "city": "Medellin",
    "country": "Colombia",
    "lat": 6.2205,
    "lng": -75.5906,
    "tier": 2
  },
  {
    "iata": "MFR",
    "name": "Rogue Valley International Medford Airport",
    "city": "Medford",
    "country": "United States",
    "lat": 42.3742,
    "lng": -122.873,
    "tier": 2
  },
  {
    "iata": "YXH",
    "name": "Medicine Hat Airport",
    "city": "Medicine Hat",
    "country": "Canada",
    "lat": 50.0189,
    "lng": -110.721,
    "tier": 3
  },
  {
    "iata": "MEH",
    "name": "Mehamn Airport",
    "city": "Mehamn",
    "country": "Norway",
    "lat": 71.0297,
    "lng": 27.8267,
    "tier": 3
  },
  {
    "iata": "MXZ",
    "name": "Meixian Airport",
    "city": "Meixian",
    "country": "China",
    "lat": 24.35,
    "lng": 116.133,
    "tier": 3
  },
  {
    "iata": "MYU",
    "name": "Mekoryuk Airport",
    "city": "Mekoryuk",
    "country": "United States",
    "lat": 60.3714,
    "lng": -166.271,
    "tier": 3
  },
  {
    "iata": "MEB",
    "name": "Melbourne Essendon Airport",
    "city": "Melbourne",
    "country": "Australia",
    "lat": -37.7281,
    "lng": 144.902,
    "tier": 3
  },
  {
    "iata": "MEL",
    "name": "Melbourne International Airport",
    "city": "Melbourne",
    "country": "Australia",
    "lat": -37.6733,
    "lng": 144.843,
    "tier": 1
  },
  {
    "iata": "MLB",
    "name": "Melbourne International Airport",
    "city": "Melbourne",
    "country": "United States",
    "lat": 28.1028,
    "lng": -80.6453,
    "tier": 3
  },
  {
    "iata": "MLN",
    "name": "Melilla Airport",
    "city": "Melilla",
    "country": "Spain",
    "lat": 35.2798,
    "lng": -2.9563,
    "tier": 3
  },
  {
    "iata": "MNA",
    "name": "Melangguane Airport",
    "city": "Melonguane",
    "country": "Indonesia",
    "lat": 4.0069,
    "lng": 126.673,
    "tier": 3
  },
  {
    "iata": "MMB",
    "name": "Memanbetsu Airport",
    "city": "Memanbetsu",
    "country": "Japan",
    "lat": 43.8806,
    "lng": 144.164,
    "tier": 2
  },
  {
    "iata": "FMM",
    "name": "Memmingen Allgau Airport",
    "city": "Memmingen",
    "country": "Germany",
    "lat": 47.9888,
    "lng": 10.2395,
    "tier": 2
  },
  {
    "iata": "MEM",
    "name": "Memphis International Airport",
    "city": "Memphis",
    "country": "United States",
    "lat": 35.0424,
    "lng": -89.9767,
    "tier": 1
  },
  {
    "iata": "MDU",
    "name": "Mendi Airport",
    "city": "Mendi",
    "country": "Papua New Guinea",
    "lat": -6.1477,
    "lng": 143.657,
    "tier": 3
  },
  {
    "iata": "MDZ",
    "name": "El Plumerillo Airport",
    "city": "Mendoza",
    "country": "Argentina",
    "lat": -32.8317,
    "lng": -68.7929,
    "tier": 2
  },
  {
    "iata": "SPP",
    "name": "Menongue Airport",
    "city": "Menongue",
    "country": "Angola",
    "lat": -14.6576,
    "lng": 17.7198,
    "tier": 3
  },
  {
    "iata": "MAH",
    "name": "Menorca Airport",
    "city": "Menorca",
    "country": "Spain",
    "lat": 39.8626,
    "lng": 4.2186,
    "tier": 1
  },
  {
    "iata": "MKQ",
    "name": "Mopah Airport",
    "city": "Merauke",
    "country": "Indonesia",
    "lat": -8.5203,
    "lng": 140.418,
    "tier": 3
  },
  {
    "iata": "MCE",
    "name": "Merced Regional Macready Field",
    "city": "Merced",
    "country": "United States",
    "lat": 37.2847,
    "lng": -120.514,
    "tier": 3
  },
  {
    "iata": "MID",
    "name": "Licenciado Manuel Crescencio Rejon Int Airport",
    "city": "Merida",
    "country": "Mexico",
    "lat": 20.937,
    "lng": -89.6577,
    "tier": 2
  },
  {
    "iata": "MRD",
    "name": "Alberto Carnevalli Airport",
    "city": "Merida",
    "country": "Venezuela",
    "lat": 8.5821,
    "lng": -71.161,
    "tier": 3
  },
  {
    "iata": "MEI",
    "name": "Key Field",
    "city": "Meridian",
    "country": "United States",
    "lat": 32.3326,
    "lng": -88.7519,
    "tier": 3
  },
  {
    "iata": "MIM",
    "name": "Merimbula Airport",
    "city": "Merimbula",
    "country": "Australia",
    "lat": -36.9086,
    "lng": 149.901,
    "tier": 3
  },
  {
    "iata": "MZH",
    "name": "Amasya Merzifon Airport",
    "city": "Merzifon",
    "country": "Turkey",
    "lat": 40.8294,
    "lng": 35.522,
    "tier": 3
  },
  {
    "iata": "AZA",
    "name": "Phoenix-Mesa-Gateway Airport",
    "city": "Mesa",
    "country": "United States",
    "lat": 33.3078,
    "lng": -111.655,
    "tier": 1
  },
  {
    "iata": "MTM",
    "name": "Metlakatla Seaplane Base",
    "city": "Metakatla",
    "country": "United States",
    "lat": 55.131,
    "lng": -131.578,
    "tier": 3
  },
  {
    "iata": "ETZ",
    "name": "Metz-Nancy-Lorraine Airport",
    "city": "Metz",
    "country": "France",
    "lat": 48.9821,
    "lng": 6.2513,
    "tier": 3
  },
  {
    "iata": "MXL",
    "name": "General Rodolfo Sánchez Taboada International Airport",
    "city": "Mexicali",
    "country": "Mexico",
    "lat": 32.6306,
    "lng": -115.242,
    "tier": 3
  },
  {
    "iata": "MEX",
    "name": "Licenciado Benito Juarez International Airport",
    "city": "Mexico City",
    "country": "Mexico",
    "lat": 19.4363,
    "lng": -99.0721,
    "tier": 1
  },
  {
    "iata": "MFU",
    "name": "Mfuwe Airport",
    "city": "Mfuwe",
    "country": "Zambia",
    "lat": -13.2589,
    "lng": 31.9366,
    "tier": 3
  },
  {
    "iata": "MIA",
    "name": "Miami International Airport",
    "city": "Miami",
    "country": "United States",
    "lat": 25.7932,
    "lng": -80.2906,
    "tier": 1
  },
  {
    "iata": "MIG",
    "name": "Mianyang Airport",
    "city": "Mianyang",
    "country": "China",
    "lat": 31.4281,
    "lng": 104.741,
    "tier": 2
  },
  {
    "iata": "MAF",
    "name": "Midland International Airport",
    "city": "Midland",
    "country": "United States",
    "lat": 31.9425,
    "lng": -102.202,
    "tier": 2
  },
  {
    "iata": "YGJ",
    "name": "Miho Yonago Airport",
    "city": "Miho",
    "country": "Japan",
    "lat": 35.4922,
    "lng": 133.236,
    "tier": 2
  },
  {
    "iata": "LIN",
    "name": "Milano Linate Airport",
    "city": "Milan",
    "country": "Italy",
    "lat": 45.4451,
    "lng": 9.2767,
    "tier": 1
  },
  {
    "iata": "MXP",
    "name": "Malpensa International Airport",
    "city": "Milano",
    "country": "Italy",
    "lat": 45.6306,
    "lng": 8.7281,
    "tier": 1
  },
  {
    "iata": "MQL",
    "name": "Mildura Airport",
    "city": "Mildura",
    "country": "Australia",
    "lat": -34.2292,
    "lng": 142.086,
    "tier": 2
  },
  {
    "iata": "MGT",
    "name": "Milingimbi Airport",
    "city": "Milingimbi",
    "country": "Australia",
    "lat": -12.0944,
    "lng": 134.894,
    "tier": 3
  },
  {
    "iata": "MLO",
    "name": "Milos Airport",
    "city": "Milos",
    "country": "Greece",
    "lat": 36.6969,
    "lng": 24.4769,
    "tier": 3
  },
  {
    "iata": "MKE",
    "name": "General Mitchell International Airport",
    "city": "Milwaukee",
    "country": "United States",
    "lat": 42.9472,
    "lng": -87.8966,
    "tier": 1
  },
  {
    "iata": "MQH",
    "name": "Minaçu Airport",
    "city": "Minacu",
    "country": "Brazil",
    "lat": -13.5491,
    "lng": -48.1953,
    "tier": 3
  },
  {
    "iata": "MTT",
    "name": "Minatitlán/Coatzacoalcos National Airport",
    "city": "Minatitlan",
    "country": "Mexico",
    "lat": 18.1034,
    "lng": -94.5807,
    "tier": 3
  },
  {
    "iata": "MRV",
    "name": "Mineralnyye Vody Airport",
    "city": "Mineralnye Vody",
    "country": "Russia",
    "lat": 44.2251,
    "lng": 43.0819,
    "tier": 2
  },
  {
    "iata": "MSP",
    "name": "Minneapolis-St Paul International/Wold-Chamberlain Airport",
    "city": "Minneapolis",
    "country": "United States",
    "lat": 44.882,
    "lng": -93.2218,
    "tier": 1
  },
  {
    "iata": "MOT",
    "name": "Minot International Airport",
    "city": "Minot",
    "country": "United States",
    "lat": 48.2594,
    "lng": -101.28,
    "tier": 3
  },
  {
    "iata": "MSQ",
    "name": "Minsk National Airport",
    "city": "Minsk 2",
    "country": "Belarus",
    "lat": 53.8825,
    "lng": 28.0307,
    "tier": 1
  },
  {
    "iata": "MYY",
    "name": "Miri Airport",
    "city": "Miri",
    "country": "Malaysia",
    "lat": 4.322,
    "lng": 113.987,
    "tier": 2
  },
  {
    "iata": "MJZ",
    "name": "Mirny Airport",
    "city": "Mirnyj",
    "country": "Russia",
    "lat": 62.5347,
    "lng": 114.039,
    "tier": 2
  },
  {
    "iata": "MSJ",
    "name": "Misawa Air Base",
    "city": "Misawa",
    "country": "Japan",
    "lat": 40.7032,
    "lng": 141.368,
    "tier": 3
  },
  {
    "iata": "MIS",
    "name": "Misima Island Airport",
    "city": "Misima Island",
    "country": "Papua New Guinea",
    "lat": -10.6892,
    "lng": 152.838,
    "tier": 3
  },
  {
    "iata": "MSO",
    "name": "Missoula International Airport",
    "city": "Missoula",
    "country": "United States",
    "lat": 46.9163,
    "lng": -114.091,
    "tier": 2
  },
  {
    "iata": "MOI",
    "name": "Mitiaro Island Airport",
    "city": "Mitiaro Island",
    "country": "Cook Islands",
    "lat": -19.8425,
    "lng": -157.703,
    "tier": 3
  },
  {
    "iata": "MVP",
    "name": "Fabio Alberto Leon Bentley Airport",
    "city": "Mitu",
    "country": "Colombia",
    "lat": 1.2537,
    "lng": -70.2339,
    "tier": 3
  },
  {
    "iata": "MMY",
    "name": "Miyako Airport",
    "city": "Miyako",
    "country": "Japan",
    "lat": 24.7828,
    "lng": 125.295,
    "tier": 3
  },
  {
    "iata": "KMI",
    "name": "Miyazaki Airport",
    "city": "Miyazaki",
    "country": "Japan",
    "lat": 31.8772,
    "lng": 131.449,
    "tier": 2
  },
  {
    "iata": "MQN",
    "name": "Mo i Rana Airport, Røssvoll",
    "city": "Mo i Rana",
    "country": "Norway",
    "lat": 66.3639,
    "lng": 14.3014,
    "tier": 3
  },
  {
    "iata": "CNY",
    "name": "Canyonlands Field",
    "city": "Moab",
    "country": "United States",
    "lat": 38.755,
    "lng": -109.755,
    "tier": 3
  },
  {
    "iata": "MOB",
    "name": "Mobile Regional Airport",
    "city": "Mobile",
    "country": "United States",
    "lat": 30.6912,
    "lng": -88.2428,
    "tier": 2
  },
  {
    "iata": "MSZ",
    "name": "Namibe Airport",
    "city": "Mocamedes",
    "country": "Angola",
    "lat": -15.2612,
    "lng": 12.1468,
    "tier": 3
  },
  {
    "iata": "MOD",
    "name": "Modesto City Co-Harry Sham Field",
    "city": "Modesto",
    "country": "United States",
    "lat": 37.6258,
    "lng": -120.954,
    "tier": 3
  },
  {
    "iata": "MJD",
    "name": "Moenjodaro Airport",
    "city": "Moenjodaro",
    "country": "Pakistan",
    "lat": 27.3352,
    "lng": 68.1431,
    "tier": 3
  },
  {
    "iata": "MGQ",
    "name": "Aden Adde International Airport",
    "city": "Mogadishu",
    "country": "Somalia",
    "lat": 2.0144,
    "lng": 45.3047,
    "tier": 2
  },
  {
    "iata": "DIB",
    "name": "Dibrugarh Airport",
    "city": "Mohanbari",
    "country": "India",
    "lat": 27.4839,
    "lng": 95.0169,
    "tier": 2
  },
  {
    "iata": "OHE",
    "name": "Gu-Lian Airport",
    "city": "Mohe County",
    "country": "China",
    "lat": 52.9128,
    "lng": 122.43,
    "tier": 3
  },
  {
    "iata": "MOL",
    "name": "Molde Airport",
    "city": "Molde",
    "country": "Norway",
    "lat": 62.7447,
    "lng": 7.2625,
    "tier": 2
  },
  {
    "iata": "MLI",
    "name": "Quad City International Airport",
    "city": "Moline",
    "country": "United States",
    "lat": 41.4485,
    "lng": -90.5075,
    "tier": 2
  },
  {
    "iata": "MKK",
    "name": "Molokai Airport",
    "city": "Molokai",
    "country": "United States",
    "lat": 21.1529,
    "lng": -157.096,
    "tier": 3
  },
  {
    "iata": "MBA",
    "name": "Mombasa Moi International Airport",
    "city": "Mombasa",
    "country": "Kenya",
    "lat": -4.0348,
    "lng": 39.5942,
    "tier": 2
  },
  {
    "iata": "MAS",
    "name": "Momote Airport",
    "city": "Momote",
    "country": "Papua New Guinea",
    "lat": -2.0619,
    "lng": 147.424,
    "tier": 3
  },
  {
    "iata": "MIR",
    "name": "Monastir Habib Bourguiba International Airport",
    "city": "Monastir",
    "country": "Tunisia",
    "lat": 35.7581,
    "lng": 10.7547,
    "tier": 2
  },
  {
    "iata": "MBE",
    "name": "Monbetsu Airport",
    "city": "Monbetsu",
    "country": "Japan",
    "lat": 44.3039,
    "lng": 143.404,
    "tier": 3
  },
  {
    "iata": "YQM",
    "name": "Greater Moncton International Airport",
    "city": "Moncton",
    "country": "Canada",
    "lat": 46.1122,
    "lng": -64.6786,
    "tier": 2
  },
  {
    "iata": "MLU",
    "name": "Monroe Regional Airport",
    "city": "Monroe",
    "country": "United States",
    "lat": 32.5109,
    "lng": -92.0377,
    "tier": 2
  },
  {
    "iata": "MLW",
    "name": "Spriggs Payne Airport",
    "city": "Monrovia",
    "country": "Liberia",
    "lat": 6.2891,
    "lng": -10.7587,
    "tier": 3
  },
  {
    "iata": "ROB",
    "name": "Roberts International Airport",
    "city": "Monrovia",
    "country": "Liberia",
    "lat": 6.2338,
    "lng": -10.3623,
    "tier": 2
  },
  {
    "iata": "YYY",
    "name": "Mont Joli Airport",
    "city": "Mont Joli",
    "country": "Canada",
    "lat": 48.6086,
    "lng": -68.2081,
    "tier": 2
  },
  {
    "iata": "MBJ",
    "name": "Sangster International Airport",
    "city": "Montego Bay",
    "country": "Jamaica",
    "lat": 18.5037,
    "lng": -77.9134,
    "tier": 1
  },
  {
    "iata": "MRY",
    "name": "Monterey Peninsula Airport",
    "city": "Monterey",
    "country": "United States",
    "lat": 36.587,
    "lng": -121.843,
    "tier": 2
  },
  {
    "iata": "MTR",
    "name": "Los Garzones Airport",
    "city": "Monteria",
    "country": "Colombia",
    "lat": 8.8237,
    "lng": -75.8258,
    "tier": 3
  },
  {
    "iata": "MTY",
    "name": "General Mariano Escobedo International Airport",
    "city": "Monterrey",
    "country": "Mexico",
    "lat": 25.7785,
    "lng": -100.107,
    "tier": 1
  },
  {
    "iata": "MOC",
    "name": "Mário Ribeiro Airport",
    "city": "Montes Claros",
    "country": "Brazil",
    "lat": -16.7069,
    "lng": -43.8189,
    "tier": 3
  },
  {
    "iata": "MVD",
    "name": "Carrasco International /General C L Berisso Airport",
    "city": "Montevideo",
    "country": "Uruguay",
    "lat": -34.8384,
    "lng": -56.0308,
    "tier": 2
  },
  {
    "iata": "MPL",
    "name": "Montpellier-Méditerranée Airport",
    "city": "Montpellier",
    "country": "France",
    "lat": 43.5762,
    "lng": 3.963,
    "tier": 2
  },
  {
    "iata": "YHU",
    "name": "Montréal / Saint-Hubert Airport",
    "city": "Montreal",
    "country": "Canada",
    "lat": 45.5175,
    "lng": -73.4169,
    "tier": 3
  },
  {
    "iata": "YUL",
    "name": "Montreal / Pierre Elliott Trudeau International Airport",
    "city": "Montreal",
    "country": "Canada",
    "lat": 45.4706,
    "lng": -73.7408,
    "tier": 1
  },
  {
    "iata": "MTJ",
    "name": "Montrose Regional Airport",
    "city": "Montrose CO",
    "country": "United States",
    "lat": 38.5098,
    "lng": -107.894,
    "tier": 3
  },
  {
    "iata": "MOZ",
    "name": "Moorea Airport",
    "city": "Moorea",
    "country": "French Polynesia",
    "lat": -17.49,
    "lng": -149.762,
    "tier": 3
  },
  {
    "iata": "YMO",
    "name": "Moosonee Airport",
    "city": "Moosonee",
    "country": "Canada",
    "lat": 51.2911,
    "lng": -80.6078,
    "tier": 3
  },
  {
    "iata": "MXX",
    "name": "Mora Airport",
    "city": "Mora",
    "country": "Sweden",
    "lat": 60.9579,
    "lng": 14.5114,
    "tier": 3
  },
  {
    "iata": "MOV",
    "name": "Moranbah Airport",
    "city": "Moranbah",
    "country": "Australia",
    "lat": -22.0578,
    "lng": 148.077,
    "tier": 3
  },
  {
    "iata": "MRZ",
    "name": "Moree Airport",
    "city": "Moree",
    "country": "Australia",
    "lat": -29.4989,
    "lng": 149.845,
    "tier": 3
  },
  {
    "iata": "MLM",
    "name": "General Francisco J. Mujica International Airport",
    "city": "Morelia",
    "country": "Mexico",
    "lat": 19.8499,
    "lng": -101.025,
    "tier": 2
  },
  {
    "iata": "MGW",
    "name": "Morgantown Municipal Walter L. Bill Hart Field",
    "city": "Morgantown",
    "country": "United States",
    "lat": 39.6429,
    "lng": -79.9163,
    "tier": 3
  },
  {
    "iata": "ONG",
    "name": "Mornington Island Airport",
    "city": "Mornington Island",
    "country": "Australia",
    "lat": -16.6625,
    "lng": 139.178,
    "tier": 3
  },
  {
    "iata": "MXH",
    "name": "Moro Airport",
    "city": "Moro",
    "country": "Papua New Guinea",
    "lat": -6.3633,
    "lng": 143.238,
    "tier": 3
  },
  {
    "iata": "MOQ",
    "name": "Morondava Airport",
    "city": "Morondava",
    "country": "Madagascar",
    "lat": -20.2847,
    "lng": 44.3176,
    "tier": 3
  },
  {
    "iata": "HAH",
    "name": "Prince Said Ibrahim International Airport",
    "city": "Moroni",
    "country": "Comoros",
    "lat": -11.5337,
    "lng": 43.2719,
    "tier": 2
  },
  {
    "iata": "MMU",
    "name": "Morristown Municipal Airport",
    "city": "Morristown",
    "country": "United States",
    "lat": 40.7994,
    "lng": -74.4149,
    "tier": 3
  },
  {
    "iata": "MYA",
    "name": "Moruya Airport",
    "city": "Moruya",
    "country": "Australia",
    "lat": -35.8978,
    "lng": 150.144,
    "tier": 3
  },
  {
    "iata": "DME",
    "name": "Domodedovo International Airport",
    "city": "Moscow",
    "country": "Russia",
    "lat": 55.4088,
    "lng": 37.9063,
    "tier": 1
  },
  {
    "iata": "SVO",
    "name": "Sheremetyevo International Airport",
    "city": "Moscow",
    "country": "Russia",
    "lat": 55.9726,
    "lng": 37.4146,
    "tier": 1
  },
  {
    "iata": "VKO",
    "name": "Vnukovo International Airport",
    "city": "Moscow",
    "country": "Russia",
    "lat": 55.5915,
    "lng": 37.2615,
    "tier": 1
  },
  {
    "iata": "MJF",
    "name": "Mosjøen Airport (Kjærstad)",
    "city": "Mosjoen",
    "country": "Norway",
    "lat": 65.784,
    "lng": 13.2149,
    "tier": 3
  },
  {
    "iata": "OMO",
    "name": "Mostar International Airport",
    "city": "Mostar",
    "country": "Bosnia and Herzegovina",
    "lat": 43.2829,
    "lng": 17.8459,
    "tier": 3
  },
  {
    "iata": "OSM",
    "name": "Mosul International Airport",
    "city": "Mosul",
    "country": "Iraq",
    "lat": 36.3058,
    "lng": 43.1474,
    "tier": 3
  },
  {
    "iata": "MGB",
    "name": "Mount Gambier Airport",
    "city": "Mount Gambier",
    "country": "Australia",
    "lat": -37.7456,
    "lng": 140.785,
    "tier": 3
  },
  {
    "iata": "HGU",
    "name": "Mount Hagen Kagamuga Airport",
    "city": "Mount Hagen",
    "country": "Papua New Guinea",
    "lat": -5.8268,
    "lng": 144.296,
    "tier": 2
  },
  {
    "iata": "ISA",
    "name": "Mount Isa Airport",
    "city": "Mount Isa",
    "country": "Australia",
    "lat": -20.6639,
    "lng": 139.489,
    "tier": 2
  },
  {
    "iata": "MPN",
    "name": "Mount Pleasant Airport",
    "city": "Mount Pleasant",
    "country": "Falkland Islands",
    "lat": -51.8228,
    "lng": -58.4472,
    "tier": 3
  },
  {
    "iata": "MOU",
    "name": "Mountain Village Airport",
    "city": "Mountain Village",
    "country": "United States",
    "lat": 62.0954,
    "lng": -163.682,
    "tier": 3
  },
  {
    "iata": "MPA",
    "name": "Katima Mulilo Airport",
    "city": "Mpacha",
    "country": "Namibia",
    "lat": -17.6344,
    "lng": 24.1767,
    "tier": 3
  },
  {
    "iata": "MQP",
    "name": "Kruger Mpumalanga International Airport",
    "city": "Mpumalanga",
    "country": "South Africa",
    "lat": -25.3832,
    "lng": 31.1056,
    "tier": 3
  },
  {
    "iata": "MYW",
    "name": "Mtwara Airport",
    "city": "Mtwara",
    "country": "Tanzania",
    "lat": -10.3391,
    "lng": 40.1818,
    "tier": 3
  },
  {
    "iata": "MWX",
    "name": "Muan International Airport",
    "city": "Muan",
    "country": "South Korea",
    "lat": 34.9914,
    "lng": 126.3828,
    "tier": 2
  },
  {
    "iata": "ODY",
    "name": "Oudomsay Airport",
    "city": "Muang Xay",
    "country": "Laos",
    "lat": 20.6827,
    "lng": 101.994,
    "tier": 3
  },
  {
    "iata": "MDG",
    "name": "Mudanjiang Hailang International Airport",
    "city": "Mudanjiang",
    "country": "China",
    "lat": 44.5241,
    "lng": 129.569,
    "tier": 2
  },
  {
    "iata": "MKM",
    "name": "Mukah Airport",
    "city": "Mukah",
    "country": "Malaysia",
    "lat": 2.9064,
    "lng": 112.08,
    "tier": 3
  },
  {
    "iata": "RIY",
    "name": "Mukalla International Airport",
    "city": "Mukalla",
    "country": "Yemen",
    "lat": 14.6626,
    "lng": 49.375,
    "tier": 2
  },
  {
    "iata": "BSL",
    "name": "EuroAirport Basel-Mulhouse-Freiburg Airport",
    "city": "Mulhouse",
    "country": "France",
    "lat": 47.59,
    "lng": 7.5292,
    "tier": 1
  },
  {
    "iata": "MUX",
    "name": "Multan International Airport",
    "city": "Multan",
    "country": "Pakistan",
    "lat": 30.2032,
    "lng": 71.4191,
    "tier": 2
  },
  {
    "iata": "MZV",
    "name": "Mulu Airport",
    "city": "Mulu",
    "country": "Malaysia",
    "lat": 4.0483,
    "lng": 114.805,
    "tier": 2
  },
  {
    "iata": "BOM",
    "name": "Chhatrapati Shivaji International Airport",
    "city": "Mumbai",
    "country": "India",
    "lat": 19.0887,
    "lng": 72.8679,
    "tier": 1
  },
  {
    "iata": "MUA",
    "name": "Munda Airport",
    "city": "Munda",
    "country": "Solomon Islands",
    "lat": -8.328,
    "lng": 157.263,
    "tier": 3
  },
  {
    "iata": "MUC",
    "name": "Munich Airport",
    "city": "Munich",
    "country": "Germany",
    "lat": 48.3538,
    "lng": 11.7861,
    "tier": 1
  },
  {
    "iata": "FMO",
    "name": "Münster Osnabrück Airport",
    "city": "Munster",
    "country": "Germany",
    "lat": 52.1346,
    "lng": 7.6848,
    "tier": 2
  },
  {
    "iata": "MJV",
    "name": "San Javier Airport",
    "city": "Murcia",
    "country": "Spain",
    "lat": 37.775,
    "lng": -0.8124,
    "tier": 2
  },
  {
    "iata": "MXV",
    "name": "Mörön Airport",
    "city": "Muren",
    "country": "Mongolia",
    "lat": 49.6633,
    "lng": 100.099,
    "tier": 3
  },
  {
    "iata": "MMK",
    "name": "Murmansk Airport",
    "city": "Murmansk",
    "country": "Russia",
    "lat": 68.7817,
    "lng": 32.7508,
    "tier": 2
  },
  {
    "iata": "MSR",
    "name": "Muş Airport",
    "city": "Mus",
    "country": "Turkey",
    "lat": 38.7478,
    "lng": 41.6612,
    "tier": 3
  },
  {
    "iata": "MCT",
    "name": "Muscat International Airport",
    "city": "Muscat",
    "country": "Oman",
    "lat": 23.5933,
    "lng": 58.2844,
    "tier": 1
  },
  {
    "iata": "MSL",
    "name": "Northwest Alabama Regional Airport",
    "city": "Muscle Shoals",
    "country": "United States",
    "lat": 34.7453,
    "lng": -87.6102,
    "tier": 3
  },
  {
    "iata": "MKG",
    "name": "Muskegon County Airport",
    "city": "Muskegon",
    "country": "United States",
    "lat": 43.1695,
    "lng": -86.2382,
    "tier": 3
  },
  {
    "iata": "MSA",
    "name": "Muskrat Dam Airport",
    "city": "Muskrat Dam",
    "country": "Canada",
    "lat": 53.4414,
    "lng": -91.7628,
    "tier": 3
  },
  {
    "iata": "MWZ",
    "name": "Mwanza Airport",
    "city": "Mwanza",
    "country": "Tanzania",
    "lat": -2.4445,
    "lng": 32.9327,
    "tier": 2
  },
  {
    "iata": "MGZ",
    "name": "Myeik Airport",
    "city": "Myeik",
    "country": "Burma",
    "lat": 12.4398,
    "lng": 98.6215,
    "tier": 3
  },
  {
    "iata": "MYT",
    "name": "Myitkyina Airport",
    "city": "Myitkyina",
    "country": "Burma",
    "lat": 25.3836,
    "lng": 97.3519,
    "tier": 3
  },
  {
    "iata": "JMK",
    "name": "Mikonos Airport",
    "city": "Mykonos",
    "country": "Greece",
    "lat": 37.4351,
    "lng": 25.3481,
    "tier": 2
  },
  {
    "iata": "MYR",
    "name": "Myrtle Beach International Airport",
    "city": "Myrtle Beach",
    "country": "United States",
    "lat": 33.6797,
    "lng": -78.9283,
    "tier": 1
  },
  {
    "iata": "MYQ",
    "name": "Mysore Airport",
    "city": "Mysore",
    "country": "India",
    "lat": 12.23,
    "lng": 76.6558,
    "tier": 3
  },
  {
    "iata": "MJT",
    "name": "Mytilene International Airport",
    "city": "Mytilini",
    "country": "Greece",
    "lat": 39.0567,
    "lng": 26.5983,
    "tier": 2
  },
  {
    "iata": "NDJ",
    "name": "N'Djamena International Airport",
    "city": "N'djamena",
    "country": "Chad",
    "lat": 12.1337,
    "lng": 15.034,
    "tier": 2
  },
  {
    "iata": "NGE",
    "name": "N'Gaoundéré Airport",
    "city": "N'gaoundere",
    "country": "Cameroon",
    "lat": 7.357,
    "lng": 13.5592,
    "tier": 3
  },
  {
    "iata": "NPE",
    "name": "Hawke's Bay Airport",
    "city": "NAPIER",
    "country": "New Zealand",
    "lat": -39.4658,
    "lng": 176.87,
    "tier": 3
  },
  {
    "iata": "NBX",
    "name": "Nabire Airport",
    "city": "Nabire",
    "country": "Indonesia",
    "lat": -3.3682,
    "lng": 135.496,
    "tier": 3
  },
  {
    "iata": "NYM",
    "name": "Nadym Airport",
    "city": "Nadym",
    "country": "Russia",
    "lat": 65.4809,
    "lng": 72.6989,
    "tier": 2
  },
  {
    "iata": "LAE",
    "name": "Nadzab Airport",
    "city": "Nadzab",
    "country": "Papua New Guinea",
    "lat": -6.5698,
    "lng": 146.726,
    "tier": 2
  },
  {
    "iata": "WNP",
    "name": "Naga Airport",
    "city": "Naga",
    "country": "Philippines",
    "lat": 13.5849,
    "lng": 123.27,
    "tier": 3
  },
  {
    "iata": "NGS",
    "name": "Nagasaki Airport",
    "city": "Nagasaki",
    "country": "Japan",
    "lat": 32.9169,
    "lng": 129.914,
    "tier": 2
  },
  {
    "iata": "NGO",
    "name": "Chubu Centrair International Airport",
    "city": "Nagoya",
    "country": "Japan",
    "lat": 34.8584,
    "lng": 136.805,
    "tier": 1
  },
  {
    "iata": "NKM",
    "name": "Nagoya Airport",
    "city": "Nagoya",
    "country": "Japan",
    "lat": 35.255,
    "lng": 136.924,
    "tier": 2
  },
  {
    "iata": "NAG",
    "name": "Dr. Babasaheb Ambedkar International Airport",
    "city": "Nagpur",
    "country": "India",
    "lat": 21.0922,
    "lng": 79.0472,
    "tier": 2
  },
  {
    "iata": "NAH",
    "name": "Naha Airport",
    "city": "Naha",
    "country": "Indonesia",
    "lat": 3.6832,
    "lng": 125.528,
    "tier": 3
  },
  {
    "iata": "YDP",
    "name": "Nain Airport",
    "city": "Nain",
    "country": "Canada",
    "lat": 56.5492,
    "lng": -61.6803,
    "tier": 3
  },
  {
    "iata": "NBO",
    "name": "Jomo Kenyatta International Airport",
    "city": "Nairobi",
    "country": "Kenya",
    "lat": -1.3192,
    "lng": 36.9278,
    "tier": 1
  },
  {
    "iata": "WIL",
    "name": "Nairobi Wilson Airport",
    "city": "Nairobi",
    "country": "Kenya",
    "lat": -1.3217,
    "lng": 36.8148,
    "tier": 2
  },
  {
    "iata": "NJF",
    "name": "Al Najaf International Airport",
    "city": "Najaf",
    "country": "Iraq",
    "lat": 31.9899,
    "lng": 44.4043,
    "tier": 2
  },
  {
    "iata": "SHB",
    "name": "Nakashibetsu Airport",
    "city": "Nakashibetsu",
    "country": "Japan",
    "lat": 43.5775,
    "lng": 144.96,
    "tier": 3
  },
  {
    "iata": "NAJ",
    "name": "Nakhchivan Airport",
    "city": "Nakhchivan",
    "country": "Azerbaijan",
    "lat": 39.1888,
    "lng": 45.4584,
    "tier": 3
  },
  {
    "iata": "KOP",
    "name": "Nakhon Phanom Airport",
    "city": "Nakhon Phanom",
    "country": "Thailand",
    "lat": 17.3838,
    "lng": 104.643,
    "tier": 3
  },
  {
    "iata": "NST",
    "name": "Nakhon Si Thammarat Airport",
    "city": "Nakhon Si Thammarat",
    "country": "Thailand",
    "lat": 8.5396,
    "lng": 99.9447,
    "tier": 3
  },
  {
    "iata": "NMA",
    "name": "Namangan Airport",
    "city": "Namangan",
    "country": "Uzbekistan",
    "lat": 40.9846,
    "lng": 71.5567,
    "tier": 2
  },
  {
    "iata": "APL",
    "name": "Nampula Airport",
    "city": "Nampula",
    "country": "Mozambique",
    "lat": -15.1056,
    "lng": 39.2818,
    "tier": 2
  },
  {
    "iata": "OSY",
    "name": "Namsos Høknesøra Airport",
    "city": "Namsos",
    "country": "Norway",
    "lat": 64.4722,
    "lng": 11.5786,
    "tier": 3
  },
  {
    "iata": "NNT",
    "name": "Nan Airport",
    "city": "Nan",
    "country": "Thailand",
    "lat": 18.8079,
    "lng": 100.783,
    "tier": 3
  },
  {
    "iata": "YCD",
    "name": "Nanaimo Airport",
    "city": "Nanaimo",
    "country": "Canada",
    "lat": 49.055,
    "lng": -123.8699,
    "tier": 3
  },
  {
    "iata": "KHN",
    "name": "Nanchang Changbei International Airport",
    "city": "Nanchang",
    "country": "China",
    "lat": 28.865,
    "lng": 115.9,
    "tier": 1
  },
  {
    "iata": "NAO",
    "name": "Nanchong Airport",
    "city": "Nanchong",
    "country": "China",
    "lat": 30.7954,
    "lng": 106.1626,
    "tier": 2
  },
  {
    "iata": "NAN",
    "name": "Nadi International Airport",
    "city": "Nandi",
    "country": "Fiji",
    "lat": -17.7554,
    "lng": 177.443,
    "tier": 1
  },
  {
    "iata": "NKG",
    "name": "Nanjing Lukou Airport",
    "city": "Nanjing",
    "country": "China",
    "lat": 31.742,
    "lng": 118.862,
    "tier": 1
  },
  {
    "iata": "SHM",
    "name": "Nanki Shirahama Airport",
    "city": "Nanki-shirahama",
    "country": "Japan",
    "lat": 33.6622,
    "lng": 135.364,
    "tier": 3
  },
  {
    "iata": "NNG",
    "name": "Nanning Wuxu Airport",
    "city": "Nanning",
    "country": "China",
    "lat": 22.6083,
    "lng": 108.172,
    "tier": 1
  },
  {
    "iata": "JNN",
    "name": "Nanortalik Heliport",
    "city": "Nanortalik",
    "country": "Greenland",
    "lat": 60.1419,
    "lng": -45.233,
    "tier": 3
  },
  {
    "iata": "NTE",
    "name": "Nantes Atlantique Airport",
    "city": "Nantes",
    "country": "France",
    "lat": 47.1532,
    "lng": -1.6107,
    "tier": 1
  },
  {
    "iata": "ACK",
    "name": "Nantucket Memorial Airport",
    "city": "Nantucket",
    "country": "United States",
    "lat": 41.2531,
    "lng": -70.0602,
    "tier": 2
  },
  {
    "iata": "NNY",
    "name": "Nanyang Jiangying Airport",
    "city": "Nanyang",
    "country": "China",
    "lat": 32.9808,
    "lng": 112.615,
    "tier": 2
  },
  {
    "iata": "NYK",
    "name": "Nanyuki Airport",
    "city": "Nanyuki",
    "country": "Kenya",
    "lat": -0.0624,
    "lng": 37.041,
    "tier": 3
  },
  {
    "iata": "WNA",
    "name": "Napakiak Airport",
    "city": "Napakiak",
    "country": "United States",
    "lat": 60.6903,
    "lng": -161.979,
    "tier": 3
  },
  {
    "iata": "PKA",
    "name": "Napaskiak Airport",
    "city": "Napaskiak",
    "country": "United States",
    "lat": 60.7029,
    "lng": -161.778,
    "tier": 3
  },
  {
    "iata": "APF",
    "name": "Naples Municipal Airport",
    "city": "Naples",
    "country": "United States",
    "lat": 26.1526,
    "lng": -81.7753,
    "tier": 3
  },
  {
    "iata": "NAP",
    "name": "Naples International Airport",
    "city": "Naples",
    "country": "Italy",
    "lat": 40.886,
    "lng": 14.2908,
    "tier": 1
  },
  {
    "iata": "NAW",
    "name": "Narathiwat Airport",
    "city": "Narathiwat",
    "country": "Thailand",
    "lat": 6.5199,
    "lng": 101.743,
    "tier": 3
  },
  {
    "iata": "NRA",
    "name": "Narrandera Airport",
    "city": "Narrandera",
    "country": "Australia",
    "lat": -34.7022,
    "lng": 146.512,
    "tier": 3
  },
  {
    "iata": "JNS",
    "name": "Narsaq Heliport",
    "city": "Narsaq",
    "country": "Greenland",
    "lat": 60.9173,
    "lng": -46.0599,
    "tier": 3
  },
  {
    "iata": "UAK",
    "name": "Narsarsuaq Airport",
    "city": "Narssarssuaq",
    "country": "Greenland",
    "lat": 61.1605,
    "lng": -45.426,
    "tier": 3
  },
  {
    "iata": "NVK",
    "name": "Narvik Framnes Airport",
    "city": "Narvik",
    "country": "Norway",
    "lat": 68.4369,
    "lng": 17.3867,
    "tier": 3
  },
  {
    "iata": "NNM",
    "name": "Naryan Mar Airport",
    "city": "Naryan-Mar",
    "country": "Russia",
    "lat": 67.64,
    "lng": 53.1219,
    "tier": 3
  },
  {
    "iata": "BNA",
    "name": "Nashville International Airport",
    "city": "Nashville",
    "country": "United States",
    "lat": 36.1245,
    "lng": -86.6782,
    "tier": 1
  },
  {
    "iata": "NAS",
    "name": "Lynden Pindling International Airport",
    "city": "Nassau",
    "country": "Bahamas",
    "lat": 25.039,
    "lng": -77.4662,
    "tier": 1
  },
  {
    "iata": "NAT",
    "name": "Governador Aluízio Alves International Airport",
    "city": "Natal",
    "country": "Brazil",
    "lat": -5.7681,
    "lng": -35.3761,
    "tier": 2
  },
  {
    "iata": "YNA",
    "name": "Natashquan Airport",
    "city": "Natashquan",
    "country": "Canada",
    "lat": 50.19,
    "lng": -61.7892,
    "tier": 2
  },
  {
    "iata": "YNP",
    "name": "Natuashish Airport",
    "city": "Natuashish",
    "country": "Canada",
    "lat": 55.9139,
    "lng": -61.1844,
    "tier": 3
  },
  {
    "iata": "INU",
    "name": "Nauru International Airport",
    "city": "Nauru",
    "country": "Nauru",
    "lat": -0.5475,
    "lng": 166.919,
    "tier": 3
  },
  {
    "iata": "SUV",
    "name": "Nausori International Airport",
    "city": "Nausori",
    "country": "Fiji",
    "lat": -18.0433,
    "lng": 178.559,
    "tier": 2
  },
  {
    "iata": "NVT",
    "name": "Ministro Victor Konder International Airport",
    "city": "Navegantes",
    "country": "Brazil",
    "lat": -26.88,
    "lng": -48.6514,
    "tier": 2
  },
  {
    "iata": "NVI",
    "name": "Navoi Airport",
    "city": "Navoi",
    "country": "Uzbekistan",
    "lat": 40.1172,
    "lng": 65.1708,
    "tier": 2
  },
  {
    "iata": "NYT",
    "name": "Naypyidaw Airport",
    "city": "Naypyidaw",
    "country": "Burma",
    "lat": 19.6235,
    "lng": 96.201,
    "tier": 3
  },
  {
    "iata": "NLA",
    "name": "Simon Mwansa Kapwepwe International Airport",
    "city": "Ndola",
    "country": "Zambia",
    "lat": -12.9981,
    "lng": 28.6649,
    "tier": 2
  },
  {
    "iata": "VOL",
    "name": "Nea Anchialos Airport",
    "city": "Nea Anghialos",
    "country": "Greece",
    "lat": 39.2196,
    "lng": 22.7943,
    "tier": 3
  },
  {
    "iata": "CNP",
    "name": "Neerlerit Inaat Airport",
    "city": "Neerlerit Inaat",
    "country": "Greenland",
    "lat": 70.7431,
    "lng": -22.6505,
    "tier": 3
  },
  {
    "iata": "NVA",
    "name": "Benito Salas Airport",
    "city": "Neiva",
    "country": "Colombia",
    "lat": 2.9501,
    "lng": -75.294,
    "tier": 3
  },
  {
    "iata": "EAM",
    "name": "Nejran Airport",
    "city": "Nejran",
    "country": "Saudi Arabia",
    "lat": 17.6114,
    "lng": 44.4192,
    "tier": 3
  },
  {
    "iata": "NSN",
    "name": "Nelson Airport",
    "city": "Nelson",
    "country": "New Zealand",
    "lat": -41.2983,
    "lng": 173.221,
    "tier": 3
  },
  {
    "iata": "NLG",
    "name": "Nelson Lagoon Airport",
    "city": "Nelson Lagoon",
    "country": "United States",
    "lat": 56.0075,
    "lng": -161.16,
    "tier": 3
  },
  {
    "iata": "YNS",
    "name": "Nemiscau Airport",
    "city": "Nemiscau",
    "country": "Canada",
    "lat": 51.6911,
    "lng": -76.1356,
    "tier": 3
  },
  {
    "iata": "KEP",
    "name": "Nepalgunj Airport",
    "city": "Nepalgunj",
    "country": "Nepal",
    "lat": 28.1036,
    "lng": 81.667,
    "tier": 3
  },
  {
    "iata": "NER",
    "name": "Chulman Airport",
    "city": "Neryungri",
    "country": "Russia",
    "lat": 56.9139,
    "lng": 124.914,
    "tier": 3
  },
  {
    "iata": "NQN",
    "name": "Presidente Peron Airport",
    "city": "Neuquen",
    "country": "Argentina",
    "lat": -38.949,
    "lng": -68.1557,
    "tier": 2
  },
  {
    "iata": "NAV",
    "name": "Nevşehir Kapadokya Airport",
    "city": "Nevsehir",
    "country": "Turkey",
    "lat": 38.7719,
    "lng": 34.5345,
    "tier": 3
  },
  {
    "iata": "EWB",
    "name": "New Bedford Regional Airport",
    "city": "New Bedford",
    "country": "United States",
    "lat": 41.6761,
    "lng": -70.9569,
    "tier": 3
  },
  {
    "iata": "EWN",
    "name": "Coastal Carolina Regional Airport",
    "city": "New Bern",
    "country": "United States",
    "lat": 35.073,
    "lng": -77.0429,
    "tier": 3
  },
  {
    "iata": "HVN",
    "name": "Tweed New Haven Airport",
    "city": "New Haven",
    "country": "United States",
    "lat": 41.2637,
    "lng": -72.8868,
    "tier": 3
  },
  {
    "iata": "MSY",
    "name": "Louis Armstrong New Orleans International Airport",
    "city": "New Orleans",
    "country": "United States",
    "lat": 29.9934,
    "lng": -90.258,
    "tier": 1
  },
  {
    "iata": "NPL",
    "name": "New Plymouth Airport",
    "city": "New Plymouth",
    "country": "New Zealand",
    "lat": -39.0086,
    "lng": 174.179,
    "tier": 3
  },
  {
    "iata": "JFK",
    "name": "John F Kennedy International Airport",
    "city": "New York",
    "country": "United States",
    "lat": 40.6398,
    "lng": -73.7789,
    "tier": 1
  },
  {
    "iata": "LGA",
    "name": "La Guardia Airport",
    "city": "New York",
    "country": "United States",
    "lat": 40.7772,
    "lng": -73.8726,
    "tier": 1
  },
  {
    "iata": "EWR",
    "name": "Newark Liberty International Airport",
    "city": "Newark",
    "country": "United States",
    "lat": 40.6925,
    "lng": -74.1687,
    "tier": 1
  },
  {
    "iata": "SWF",
    "name": "Stewart International Airport",
    "city": "Newburgh",
    "country": "United States",
    "lat": 41.5041,
    "lng": -74.1048,
    "tier": 2
  },
  {
    "iata": "NCL",
    "name": "Newcastle Airport",
    "city": "Newcastle",
    "country": "United Kingdom",
    "lat": 55.0375,
    "lng": -1.6917,
    "tier": 1
  },
  {
    "iata": "NTL",
    "name": "Newcastle Airport",
    "city": "Newcastle",
    "country": "Australia",
    "lat": -32.795,
    "lng": 151.834,
    "tier": 2
  },
  {
    "iata": "ZNE",
    "name": "Newman Airport",
    "city": "Newman",
    "country": "Australia",
    "lat": -23.4178,
    "lng": 119.803,
    "tier": 3
  },
  {
    "iata": "PHF",
    "name": "Newport News Williamsburg International Airport",
    "city": "Newport News",
    "country": "United States",
    "lat": 37.1319,
    "lng": -76.493,
    "tier": 2
  },
  {
    "iata": "NQY",
    "name": "Newquay Cornwall Airport",
    "city": "Newquai",
    "country": "United Kingdom",
    "lat": 50.4406,
    "lng": -4.9954,
    "tier": 2
  },
  {
    "iata": "CXR",
    "name": "Cam Ranh Airport",
    "city": "Nha Trang",
    "country": "Vietnam",
    "lat": 11.9982,
    "lng": 109.219,
    "tier": 2
  },
  {
    "iata": "IAG",
    "name": "Niagara Falls International Airport",
    "city": "Niagara Falls",
    "country": "United States",
    "lat": 43.1073,
    "lng": -78.9462,
    "tier": 3
  },
  {
    "iata": "NIM",
    "name": "Diori Hamani International Airport",
    "city": "Niamey",
    "country": "Niger",
    "lat": 13.4815,
    "lng": 2.1836,
    "tier": 2
  },
  {
    "iata": "NCE",
    "name": "Nice-Côte d'Azur Airport",
    "city": "Nice",
    "country": "France",
    "lat": 43.6584,
    "lng": 7.2159,
    "tier": 1
  },
  {
    "iata": "ECN",
    "name": "Ercan International Airport",
    "city": "Nicosia",
    "country": "Cyprus",
    "lat": 35.1547,
    "lng": 33.4961,
    "tier": 2
  },
  {
    "iata": "TMU",
    "name": "Tambor Airport",
    "city": "Nicoya",
    "country": "Costa Rica",
    "lat": 9.7385,
    "lng": -85.0138,
    "tier": 3
  },
  {
    "iata": "NME",
    "name": "Nightmute Airport",
    "city": "Nightmute",
    "country": "United States",
    "lat": 60.471,
    "lng": -164.701,
    "tier": 3
  },
  {
    "iata": "KIJ",
    "name": "Niigata Airport",
    "city": "Niigata",
    "country": "Japan",
    "lat": 37.9559,
    "lng": 139.121,
    "tier": 2
  },
  {
    "iata": "NIB",
    "name": "Nikolai Airport",
    "city": "Nikolai",
    "country": "United States",
    "lat": 63.0186,
    "lng": -154.358,
    "tier": 3
  },
  {
    "iata": "IKO",
    "name": "Nikolski Air Station",
    "city": "Nikolski",
    "country": "United States",
    "lat": 52.9416,
    "lng": -168.849,
    "tier": 3
  },
  {
    "iata": "FNI",
    "name": "Nîmes-Arles-Camargue Airport",
    "city": "Nimes",
    "country": "France",
    "lat": 43.7574,
    "lng": 4.4163,
    "tier": 3
  },
  {
    "iata": "NGB",
    "name": "Ningbo Lishe International Airport",
    "city": "Ninbo",
    "country": "China",
    "lat": 29.8267,
    "lng": 121.462,
    "tier": 1
  },
  {
    "iata": "NBC",
    "name": "Begishevo Airport",
    "city": "Nizhnekamsk",
    "country": "Russia",
    "lat": 55.5647,
    "lng": 52.0925,
    "tier": 2
  },
  {
    "iata": "NJC",
    "name": "Nizhnevartovsk Airport",
    "city": "Nizhnevartovsk",
    "country": "Russia",
    "lat": 60.9493,
    "lng": 76.4836,
    "tier": 2
  },
  {
    "iata": "GOJ",
    "name": "Nizhny Novgorod Strigino International Airport",
    "city": "Nizhniy Novgorod",
    "country": "Russia",
    "lat": 56.2301,
    "lng": 43.784,
    "tier": 2
  },
  {
    "iata": "WTK",
    "name": "Noatak Airport",
    "city": "Noatak",
    "country": "United States",
    "lat": 67.5661,
    "lng": -162.975,
    "tier": 3
  },
  {
    "iata": "NGK",
    "name": "Nogliki Airport",
    "city": "Nogliki",
    "country": "Russia",
    "lat": 51.7801,
    "lng": 143.139,
    "tier": 3
  },
  {
    "iata": "OME",
    "name": "Nome Airport",
    "city": "Nome",
    "country": "United States",
    "lat": 64.5122,
    "lng": -165.445,
    "tier": 2
  },
  {
    "iata": "ORV",
    "name": "Robert (Bob) Curtis Memorial Airport",
    "city": "Noorvik",
    "country": "United States",
    "lat": 66.8179,
    "lng": -161.019,
    "tier": 3
  },
  {
    "iata": "ORF",
    "name": "Norfolk International Airport",
    "city": "Norfolk",
    "country": "United States",
    "lat": 36.8946,
    "lng": -76.2012,
    "tier": 1
  },
  {
    "iata": "NLK",
    "name": "Norfolk Island International Airport",
    "city": "Norfolk Island",
    "country": "Norfolk Island",
    "lat": -29.0416,
    "lng": 167.939,
    "tier": 3
  },
  {
    "iata": "NSK",
    "name": "Norilsk-Alykel Airport",
    "city": "Norilsk",
    "country": "Russia",
    "lat": 69.3111,
    "lng": 87.3322,
    "tier": 2
  },
  {
    "iata": "YVQ",
    "name": "Norman Wells Airport",
    "city": "Norman Wells",
    "country": "Canada",
    "lat": 65.2816,
    "lng": -126.798,
    "tier": 2
  },
  {
    "iata": "NTN",
    "name": "Normanton Airport",
    "city": "Normanton",
    "country": "Australia",
    "lat": -17.6841,
    "lng": 141.0697,
    "tier": 3
  },
  {
    "iata": "NRK",
    "name": "Norrköping Airport",
    "city": "Norrkoeping",
    "country": "Sweden",
    "lat": 58.5863,
    "lng": 16.2506,
    "tier": 3
  },
  {
    "iata": "NUS",
    "name": "Norsup Airport",
    "city": "Norsup",
    "country": "Vanuatu",
    "lat": -16.0797,
    "lng": 167.401,
    "tier": 3
  },
  {
    "iata": "YYB",
    "name": "North Bay Jack Garland Airport",
    "city": "North Bay",
    "country": "Canada",
    "lat": 46.3636,
    "lng": -79.4228,
    "tier": 3
  },
  {
    "iata": "OTH",
    "name": "Southwest Oregon Regional Airport",
    "city": "North Bend",
    "country": "United States",
    "lat": 43.4171,
    "lng": -124.246,
    "tier": 3
  },
  {
    "iata": "ELH",
    "name": "North Eleuthera Airport",
    "city": "North Eleuthera",
    "country": "Bahamas",
    "lat": 25.4749,
    "lng": -76.6835,
    "tier": 2
  },
  {
    "iata": "LBF",
    "name": "North Platte Regional Airport Lee Bird Field",
    "city": "North Platte",
    "country": "United States",
    "lat": 41.1262,
    "lng": -100.684,
    "tier": 3
  },
  {
    "iata": "NRL",
    "name": "North Ronaldsay Airport",
    "city": "North Ronaldsay",
    "country": "United Kingdom",
    "lat": 59.3675,
    "lng": -2.4344,
    "tier": 3
  },
  {
    "iata": "YNO",
    "name": "North Spirit Lake Airport",
    "city": "North Spirit Lake",
    "country": "Canada",
    "lat": 52.49,
    "lng": -92.9711,
    "tier": 3
  },
  {
    "iata": "NWI",
    "name": "Norwich International Airport",
    "city": "Norwich",
    "country": "United Kingdom",
    "lat": 52.6758,
    "lng": 1.2828,
    "tier": 2
  },
  {
    "iata": "NOB",
    "name": "Nosara Airport",
    "city": "Nosara Beach",
    "country": "Costa Rica",
    "lat": 9.9765,
    "lng": -85.653,
    "tier": 3
  },
  {
    "iata": "NSH",
    "name": "Noshahr Airport",
    "city": "Noshahr",
    "country": "Iran",
    "lat": 36.6633,
    "lng": 51.4647,
    "tier": 3
  },
  {
    "iata": "NOS",
    "name": "Fascene Airport",
    "city": "Nosy-be",
    "country": "Madagascar",
    "lat": -13.3121,
    "lng": 48.3148,
    "tier": 3
  },
  {
    "iata": "NDB",
    "name": "Nouadhibou International Airport",
    "city": "Nouadhibou",
    "country": "Mauritania",
    "lat": 20.9331,
    "lng": -17.03,
    "tier": 3
  },
  {
    "iata": "NKC",
    "name": "Nouakchott–Oumtounsy International Airport",
    "city": "Nouakschott",
    "country": "Mauritania",
    "lat": 18.31,
    "lng": -15.9697,
    "tier": 2
  },
  {
    "iata": "GEA",
    "name": "Nouméa Magenta Airport",
    "city": "Noumea",
    "country": "New Caledonia",
    "lat": -22.2583,
    "lng": 166.473,
    "tier": 2
  },
  {
    "iata": "NOU",
    "name": "La Tontouta International Airport",
    "city": "Noumea",
    "country": "New Caledonia",
    "lat": -22.0146,
    "lng": 166.213,
    "tier": 2
  },
  {
    "iata": "NOZ",
    "name": "Spichenkovo Airport",
    "city": "Novokuznetsk",
    "country": "Russia",
    "lat": 53.8114,
    "lng": 86.8772,
    "tier": 3
  },
  {
    "iata": "OVB",
    "name": "Tolmachevo Airport",
    "city": "Novosibirsk",
    "country": "Russia",
    "lat": 55.0126,
    "lng": 82.6507,
    "tier": 1
  },
  {
    "iata": "NUX",
    "name": "Novy Urengoy Airport",
    "city": "Novy Urengoy",
    "country": "Russia",
    "lat": 66.0694,
    "lng": 76.5203,
    "tier": 2
  },
  {
    "iata": "NOJ",
    "name": "Noyabrsk Airport",
    "city": "Noyabrsk",
    "country": "Russia",
    "lat": 63.1833,
    "lng": 75.27,
    "tier": 3
  },
  {
    "iata": "NUE",
    "name": "Nuremberg Airport",
    "city": "Nuernberg",
    "country": "Germany",
    "lat": 49.4987,
    "lng": 11.0781,
    "tier": 1
  },
  {
    "iata": "NLD",
    "name": "Quetzalcóatl International Airport",
    "city": "Nuevo Laredo",
    "country": "Mexico",
    "lat": 27.4439,
    "lng": -99.5705,
    "tier": 3
  },
  {
    "iata": "NUI",
    "name": "Nuiqsut Airport",
    "city": "Nuiqsut",
    "country": "United States",
    "lat": 70.21,
    "lng": -151.006,
    "tier": 3
  },
  {
    "iata": "NHV",
    "name": "Nuku Hiva Airport",
    "city": "Nuku Hiva",
    "country": "French Polynesia",
    "lat": -8.7956,
    "lng": -140.229,
    "tier": 3
  },
  {
    "iata": "NCU",
    "name": "Nukus Airport",
    "city": "Nukus",
    "country": "Uzbekistan",
    "lat": 42.4884,
    "lng": 59.6233,
    "tier": 3
  },
  {
    "iata": "NUL",
    "name": "Nulato Airport",
    "city": "Nulato",
    "country": "United States",
    "lat": 64.7293,
    "lng": -158.074,
    "tier": 3
  },
  {
    "iata": "TZL",
    "name": "Tuzla International Airport",
    "city": "Null",
    "country": "Bosnia and Herzegovina",
    "lat": 44.4587,
    "lng": 18.7248,
    "tier": 3
  },
  {
    "iata": "NQU",
    "name": "Reyes Murillo Airport",
    "city": "Nuquí",
    "country": "Colombia",
    "lat": 5.6964,
    "lng": -77.2806,
    "tier": 3
  },
  {
    "iata": "NYA",
    "name": "Nyagan Airport",
    "city": "Nyagan",
    "country": "Russia",
    "lat": 62.11,
    "lng": 65.615,
    "tier": 3
  },
  {
    "iata": "UYL",
    "name": "Nyala Airport",
    "city": "Nyala",
    "country": "Sudan",
    "lat": 12.0535,
    "lng": 24.9562,
    "tier": 3
  },
  {
    "iata": "LZY",
    "name": "Nyingchi Airport",
    "city": "Nyingchi",
    "country": "China",
    "lat": 29.3033,
    "lng": 94.3353,
    "tier": 3
  },
  {
    "iata": "OAK",
    "name": "Metropolitan Oakland International Airport",
    "city": "Oakland",
    "country": "United States",
    "lat": 37.7213,
    "lng": -122.221,
    "tier": 1
  },
  {
    "iata": "OAX",
    "name": "Xoxocotlán International Airport",
    "city": "Oaxaca",
    "country": "Mexico",
    "lat": 16.9999,
    "lng": -96.7266,
    "tier": 2
  },
  {
    "iata": "OBO",
    "name": "Tokachi-Obihiro Airport",
    "city": "Obihiro",
    "country": "Japan",
    "lat": 42.7333,
    "lng": 143.217,
    "tier": 3
  },
  {
    "iata": "ONJ",
    "name": "Odate Noshiro Airport",
    "city": "Odate Noshiro",
    "country": "Japan",
    "lat": 40.1919,
    "lng": 140.371,
    "tier": 3
  },
  {
    "iata": "ODS",
    "name": "Odessa International Airport",
    "city": "Odessa",
    "country": "Ukraine",
    "lat": 46.4268,
    "lng": 30.6765,
    "tier": 2
  },
  {
    "iata": "OGD",
    "name": "Ogden Hinckley Airport",
    "city": "Ogden",
    "country": "United States",
    "lat": 41.1959,
    "lng": -112.012,
    "tier": 3
  },
  {
    "iata": "OGS",
    "name": "Ogdensburg International Airport",
    "city": "Ogdensburg",
    "country": "United States",
    "lat": 44.6819,
    "lng": -75.4655,
    "tier": 3
  },
  {
    "iata": "YOG",
    "name": "Ogoki Post Airport",
    "city": "Ogoki Post",
    "country": "Canada",
    "lat": 51.6586,
    "lng": -85.9017,
    "tier": 3
  },
  {
    "iata": "OIT",
    "name": "Oita Airport",
    "city": "Oita",
    "country": "Japan",
    "lat": 33.4794,
    "lng": 131.737,
    "tier": 2
  },
  {
    "iata": "OKJ",
    "name": "Okayama Airport",
    "city": "Okayama",
    "country": "Japan",
    "lat": 34.7569,
    "lng": 133.855,
    "tier": 2
  },
  {
    "iata": "OKA",
    "name": "Naha Airport",
    "city": "Okinawa",
    "country": "Japan",
    "lat": 26.1958,
    "lng": 127.646,
    "tier": 1
  },
  {
    "iata": "OKC",
    "name": "Will Rogers World Airport",
    "city": "Oklahoma City",
    "country": "United States",
    "lat": 35.3931,
    "lng": -97.6007,
    "tier": 1
  },
  {
    "iata": "OKL",
    "name": "Oksibil Airport",
    "city": "Oksibil",
    "country": "Indonesia",
    "lat": -4.9071,
    "lng": 140.6277,
    "tier": 3
  },
  {
    "iata": "OLB",
    "name": "Olbia Costa Smeralda Airport",
    "city": "Olbia",
    "country": "Italy",
    "lat": 40.8987,
    "lng": 9.5176,
    "tier": 1
  },
  {
    "iata": "ULG",
    "name": "Ulgii Mongolei Airport",
    "city": "Olgii",
    "country": "Mongolia",
    "lat": 48.9933,
    "lng": 89.9225,
    "tier": 3
  },
  {
    "iata": "OLP",
    "name": "Olympic Dam Airport",
    "city": "Olympic Dam",
    "country": "Australia",
    "lat": -30.485,
    "lng": 136.877,
    "tier": 3
  },
  {
    "iata": "OMA",
    "name": "Eppley Airfield",
    "city": "Omaha",
    "country": "United States",
    "lat": 41.3032,
    "lng": -95.8941,
    "tier": 1
  },
  {
    "iata": "OMS",
    "name": "Omsk Central Airport",
    "city": "Omsk",
    "country": "Russia",
    "lat": 54.967,
    "lng": 73.3105,
    "tier": 2
  },
  {
    "iata": "OND",
    "name": "Ondangwa Airport",
    "city": "Ondangwa",
    "country": "Namibia",
    "lat": -17.8782,
    "lng": 15.9526,
    "tier": 3
  },
  {
    "iata": "VPE",
    "name": "Ngjiva Pereira Airport",
    "city": "Ondjiva",
    "country": "Angola",
    "lat": -17.0435,
    "lng": 15.6838,
    "tier": 2
  },
  {
    "iata": "ONT",
    "name": "Ontario International Airport",
    "city": "Ontario",
    "country": "United States",
    "lat": 34.056,
    "lng": -117.601,
    "tier": 1
  },
  {
    "iata": "OMR",
    "name": "Oradea International Airport",
    "city": "Oradea",
    "country": "Romania",
    "lat": 47.0253,
    "lng": 21.9025,
    "tier": 3
  },
  {
    "iata": "ORN",
    "name": "Es Senia Airport",
    "city": "Oran",
    "country": "Algeria",
    "lat": 35.6239,
    "lng": -0.6212,
    "tier": 1
  },
  {
    "iata": "OAG",
    "name": "Orange Airport",
    "city": "Orange",
    "country": "Australia",
    "lat": -33.3817,
    "lng": 149.133,
    "tier": 3
  },
  {
    "iata": "OMD",
    "name": "Oranjemund Airport",
    "city": "Oranjemund",
    "country": "Namibia",
    "lat": -28.5847,
    "lng": 16.4467,
    "tier": 3
  },
  {
    "iata": "AUA",
    "name": "Queen Beatrix International Airport",
    "city": "Oranjestad",
    "country": "Aruba",
    "lat": 12.5014,
    "lng": -70.0152,
    "tier": 1
  },
  {
    "iata": "EUX",
    "name": "F. D. Roosevelt Airport",
    "city": "Oranjestad",
    "country": "Netherlands Antilles",
    "lat": 17.4965,
    "lng": -62.9794,
    "tier": 3
  },
  {
    "iata": "ORB",
    "name": "Örebro Airport",
    "city": "Orebro",
    "country": "Sweden",
    "lat": 59.2237,
    "lng": 15.038,
    "tier": 3
  },
  {
    "iata": "REN",
    "name": "Orenburg Central Airport",
    "city": "Orenburg",
    "country": "Russia",
    "lat": 51.7958,
    "lng": 55.4567,
    "tier": 2
  },
  {
    "iata": "ORX",
    "name": "Oriximiná Airport",
    "city": "Oriximina",
    "country": "Brazil",
    "lat": -1.7141,
    "lng": -55.8362,
    "tier": 3
  },
  {
    "iata": "TMT",
    "name": "Trombetas Airport",
    "city": "Oriximina",
    "country": "Brazil",
    "lat": -1.4896,
    "lng": -56.3968,
    "tier": 3
  },
  {
    "iata": "OLA",
    "name": "Ørland Airport",
    "city": "Orland",
    "country": "Norway",
    "lat": 63.6989,
    "lng": 9.604,
    "tier": 3
  },
  {
    "iata": "MCO",
    "name": "Orlando International Airport",
    "city": "Orlando",
    "country": "United States",
    "lat": 28.4294,
    "lng": -81.309,
    "tier": 1
  },
  {
    "iata": "OER",
    "name": "Örnsköldsvik Airport",
    "city": "Ornskoldsvik",
    "country": "Sweden",
    "lat": 63.4083,
    "lng": 18.99,
    "tier": 3
  },
  {
    "iata": "OSW",
    "name": "Orsk Airport",
    "city": "Orsk",
    "country": "Russia",
    "lat": 51.0725,
    "lng": 58.5956,
    "tier": 3
  },
  {
    "iata": "HOV",
    "name": "Ørsta-Volda Airport, Hovden",
    "city": "Orsta-Volda",
    "country": "Norway",
    "lat": 62.18,
    "lng": 6.0741,
    "tier": 3
  },
  {
    "iata": "ORU",
    "name": "Juan Mendoza Airport",
    "city": "Oruro",
    "country": "Bolivia",
    "lat": -17.9626,
    "lng": -67.0762,
    "tier": 3
  },
  {
    "iata": "ITM",
    "name": "Osaka International Airport",
    "city": "Osaka",
    "country": "Japan",
    "lat": 34.7855,
    "lng": 135.438,
    "tier": 1
  },
  {
    "iata": "KIX",
    "name": "Kansai International Airport",
    "city": "Osaka",
    "country": "Japan",
    "lat": 34.4273,
    "lng": 135.244,
    "tier": 1
  },
  {
    "iata": "OSS",
    "name": "Osh Airport",
    "city": "Osh",
    "country": "Kyrgyzstan",
    "lat": 40.609,
    "lng": 72.7933,
    "tier": 1
  },
  {
    "iata": "OIM",
    "name": "Oshima Airport",
    "city": "Oshima",
    "country": "Japan",
    "lat": 34.782,
    "lng": 139.36,
    "tier": 3
  },
  {
    "iata": "OSI",
    "name": "Osijek Airport",
    "city": "Osijek",
    "country": "Croatia",
    "lat": 45.4627,
    "lng": 18.8102,
    "tier": 3
  },
  {
    "iata": "OSL",
    "name": "Oslo Lufthavn",
    "city": "Oslo",
    "country": "Norway",
    "lat": 60.121,
    "lng": 11.0502,
    "tier": 1
  },
  {
    "iata": "ZOS",
    "name": "Cañal Bajo Carlos - Hott Siebert Airport",
    "city": "Osorno",
    "country": "Chile",
    "lat": -40.6112,
    "lng": -73.061,
    "tier": 3
  },
  {
    "iata": "OST",
    "name": "Ostend-Bruges International Airport",
    "city": "Ostend",
    "country": "Belgium",
    "lat": 51.1989,
    "lng": 2.8622,
    "tier": 3
  },
  {
    "iata": "OSR",
    "name": "Ostrava Leos Janáček Airport",
    "city": "Ostrava",
    "country": "Czech Republic",
    "lat": 49.6963,
    "lng": 18.1111,
    "tier": 3
  },
  {
    "iata": "QRW",
    "name": "Warri Airport",
    "city": "Osubi",
    "country": "Nigeria",
    "lat": 5.5961,
    "lng": 5.8178,
    "tier": 3
  },
  {
    "iata": "YOW",
    "name": "Ottawa Macdonald-Cartier International Airport",
    "city": "Ottawa",
    "country": "Canada",
    "lat": 45.3225,
    "lng": -75.6692,
    "tier": 1
  },
  {
    "iata": "OUA",
    "name": "Ouagadougou Airport",
    "city": "Ouagadougou",
    "country": "Burkina Faso",
    "lat": 12.3532,
    "lng": -1.5124,
    "tier": 1
  },
  {
    "iata": "OGX",
    "name": "Ain el Beida Airport",
    "city": "Ouargla",
    "country": "Algeria",
    "lat": 31.9172,
    "lng": 5.4128,
    "tier": 3
  },
  {
    "iata": "OZZ",
    "name": "Ouarzazate Airport",
    "city": "Ouarzazate",
    "country": "Morocco",
    "lat": 30.9391,
    "lng": -6.9094,
    "tier": 3
  },
  {
    "iata": "OUD",
    "name": "Angads Airport",
    "city": "Oujda",
    "country": "Morocco",
    "lat": 34.7872,
    "lng": -1.924,
    "tier": 2
  },
  {
    "iata": "OUL",
    "name": "Oulu Airport",
    "city": "Oulu",
    "country": "Finland",
    "lat": 64.9301,
    "lng": 25.3546,
    "tier": 3
  },
  {
    "iata": "OIA",
    "name": "Ourilândia do Norte Airport",
    "city": "Ourilandia do Norte",
    "country": "Brazil",
    "lat": -6.7631,
    "lng": -51.0499,
    "tier": 3
  },
  {
    "iata": "UVE",
    "name": "Ouvéa Airport",
    "city": "Ouvea",
    "country": "New Caledonia",
    "lat": -20.6406,
    "lng": 166.573,
    "tier": 3
  },
  {
    "iata": "VDA",
    "name": "Ovda International Airport",
    "city": "Ovda",
    "country": "Israel",
    "lat": 29.9403,
    "lng": 34.9358,
    "tier": 3
  },
  {
    "iata": "OWB",
    "name": "Owensboro Daviess County Airport",
    "city": "Owensboro",
    "country": "United States",
    "lat": 37.7401,
    "lng": -87.1668,
    "tier": 3
  },
  {
    "iata": "OLL",
    "name": "Oyo Ollombo Airport",
    "city": "Oyo",
    "country": "Congo (Brazzaville)",
    "lat": -1.2267,
    "lng": 15.91,
    "tier": 3
  },
  {
    "iata": "OZC",
    "name": "Labo Airport",
    "city": "Ozamis",
    "country": "Philippines",
    "lat": 8.1785,
    "lng": 123.842,
    "tier": 3
  },
  {
    "iata": "PAH",
    "name": "Barkley Regional Airport",
    "city": "PADUCAH",
    "country": "United States",
    "lat": 37.0608,
    "lng": -88.7738,
    "tier": 3
  },
  {
    "iata": "PKB",
    "name": "Mid Ohio Valley Regional Airport",
    "city": "PARKERSBURG",
    "country": "United States",
    "lat": 39.3451,
    "lng": -81.4392,
    "tier": 3
  },
  {
    "iata": "PBJ",
    "name": "Tavie Airport",
    "city": "Paama Island",
    "country": "Vanuatu",
    "lat": -16.439,
    "lng": 168.257,
    "tier": 3
  },
  {
    "iata": "JFR",
    "name": "Paamiut Heliport",
    "city": "Paamiut",
    "country": "Greenland",
    "lat": 61.9922,
    "lng": -49.6625,
    "tier": 3
  },
  {
    "iata": "PDG",
    "name": "Minangkabau International Airport",
    "city": "Padang",
    "country": "Indonesia",
    "lat": -0.7869,
    "lng": 100.281,
    "tier": 2
  },
  {
    "iata": "PAD",
    "name": "Paderborn Lippstadt Airport",
    "city": "Paderborn",
    "country": "Germany",
    "lat": 51.6141,
    "lng": 8.6163,
    "tier": 2
  },
  {
    "iata": "PAG",
    "name": "Pagadian Airport",
    "city": "Pagadian",
    "country": "Philippines",
    "lat": 7.8307,
    "lng": 123.4612,
    "tier": 3
  },
  {
    "iata": "PGA",
    "name": "Page Municipal Airport",
    "city": "Page",
    "country": "United States",
    "lat": 36.9261,
    "lng": -111.448,
    "tier": 3
  },
  {
    "iata": "PPG",
    "name": "Pago Pago International Airport",
    "city": "Pago Pago",
    "country": "American Samoa",
    "lat": -14.331,
    "lng": -170.71,
    "tier": 3
  },
  {
    "iata": "PYY",
    "name": "Mae Hong Son Airport",
    "city": "Pai",
    "country": "Thailand",
    "lat": 19.372,
    "lng": 98.437,
    "tier": 3
  },
  {
    "iata": "PJA",
    "name": "Pajala Airport",
    "city": "Pajala",
    "country": "Sweden",
    "lat": 67.2456,
    "lng": 23.0689,
    "tier": 3
  },
  {
    "iata": "PKZ",
    "name": "Pakse International Airport",
    "city": "Pakse",
    "country": "Laos",
    "lat": 15.1321,
    "lng": 105.781,
    "tier": 3
  },
  {
    "iata": "PLQ",
    "name": "Palanga International Airport",
    "city": "Palanga",
    "country": "Lithuania",
    "lat": 55.9732,
    "lng": 21.0939,
    "tier": 3
  },
  {
    "iata": "PKY",
    "name": "Tjilik Riwut Airport",
    "city": "Palangkaraya",
    "country": "Indonesia",
    "lat": -2.2251,
    "lng": 113.943,
    "tier": 3
  },
  {
    "iata": "PLM",
    "name": "Sultan Mahmud Badaruddin II Airport",
    "city": "Palembang",
    "country": "Indonesia",
    "lat": -2.8983,
    "lng": 104.7,
    "tier": 2
  },
  {
    "iata": "PQM",
    "name": "Palenque International Airport",
    "city": "Palenque",
    "country": "Mexico",
    "lat": 17.5332,
    "lng": -92.0155,
    "tier": 3
  },
  {
    "iata": "PMO",
    "name": "Falcone–Borsellino Airport",
    "city": "Palermo",
    "country": "Italy",
    "lat": 38.176,
    "lng": 13.091,
    "tier": 1
  },
  {
    "iata": "PSP",
    "name": "Palm Springs International Airport",
    "city": "Palm Springs",
    "country": "United States",
    "lat": 33.8297,
    "lng": -116.507,
    "tier": 1
  },
  {
    "iata": "PMI",
    "name": "Palma De Mallorca Airport",
    "city": "Palma de Mallorca",
    "country": "Spain",
    "lat": 39.5517,
    "lng": 2.7388,
    "tier": 1
  },
  {
    "iata": "PMZ",
    "name": "Palmar Sur Airport",
    "city": "Palmar Sur",
    "country": "Costa Rica",
    "lat": 8.951,
    "lng": -83.4686,
    "tier": 3
  },
  {
    "iata": "PMW",
    "name": "Brigadeiro Lysias Rodrigues Airport",
    "city": "Palmas",
    "country": "Brazil",
    "lat": -10.2915,
    "lng": -48.357,
    "tier": 2
  },
  {
    "iata": "PMR",
    "name": "Palmerston North Airport",
    "city": "Palmerston North",
    "country": "New Zealand",
    "lat": -40.3206,
    "lng": 175.617,
    "tier": 3
  },
  {
    "iata": "PLW",
    "name": "Mutiara Airport",
    "city": "Palu",
    "country": "Indonesia",
    "lat": -0.9185,
    "lng": 119.91,
    "tier": 2
  },
  {
    "iata": "PNA",
    "name": "Pamplona Airport",
    "city": "Pamplona",
    "country": "Spain",
    "lat": 42.77,
    "lng": -1.6463,
    "tier": 3
  },
  {
    "iata": "PAC",
    "name": "Marcos A. Gelabert International Airport",
    "city": "Panama",
    "country": "Panama",
    "lat": 8.9733,
    "lng": -79.5556,
    "tier": 3
  },
  {
    "iata": "ECP",
    "name": "Northwest Florida Beaches International Airport",
    "city": "Panama City",
    "country": "United States",
    "lat": 30.3571,
    "lng": -85.7954,
    "tier": 2
  },
  {
    "iata": "PTY",
    "name": "Tocumen International Airport",
    "city": "Panama City",
    "country": "Panama",
    "lat": 9.0714,
    "lng": -79.3835,
    "tier": 1
  },
  {
    "iata": "PGK",
    "name": "Pangkal Pinang (Depati Amir) Airport",
    "city": "Pangkal Pinang",
    "country": "Indonesia",
    "lat": -2.1622,
    "lng": 106.139,
    "tier": 2
  },
  {
    "iata": "PKN",
    "name": "Iskandar Airport",
    "city": "Pangkalan Bun",
    "country": "Indonesia",
    "lat": -2.7052,
    "lng": 111.673,
    "tier": 2
  },
  {
    "iata": "YXP",
    "name": "Pangnirtung Airport",
    "city": "Pangnirtung",
    "country": "Canada",
    "lat": 66.145,
    "lng": -65.7136,
    "tier": 3
  },
  {
    "iata": "PJG",
    "name": "Panjgur Airport",
    "city": "Panjgur",
    "country": "Pakistan",
    "lat": 26.9545,
    "lng": 64.1325,
    "tier": 3
  },
  {
    "iata": "PNL",
    "name": "Pantelleria Airport",
    "city": "Pantelleria",
    "country": "Italy",
    "lat": 36.8165,
    "lng": 11.9689,
    "tier": 3
  },
  {
    "iata": "PZI",
    "name": "Bao'anying Airport",
    "city": "Panzhihua",
    "country": "China",
    "lat": 26.54,
    "lng": 101.7985,
    "tier": 3
  },
  {
    "iata": "PPW",
    "name": "Papa Westray Airport",
    "city": "Papa Westray",
    "country": "United Kingdom",
    "lat": 59.3517,
    "lng": -2.9003,
    "tier": 3
  },
  {
    "iata": "PPT",
    "name": "Faa'a International Airport",
    "city": "Papeete",
    "country": "French Polynesia",
    "lat": -17.5537,
    "lng": -149.607,
    "tier": 1
  },
  {
    "iata": "PFO",
    "name": "Paphos International Airport",
    "city": "Paphos",
    "country": "Cyprus",
    "lat": 34.718,
    "lng": 32.4857,
    "tier": 1
  },
  {
    "iata": "PBO",
    "name": "Paraburdoo Airport",
    "city": "Paraburdoo",
    "country": "Australia",
    "lat": -23.1711,
    "lng": 117.745,
    "tier": 3
  },
  {
    "iata": "LSP",
    "name": "Josefa Camejo International Airport",
    "city": "Paraguana",
    "country": "Venezuela",
    "lat": 11.7808,
    "lng": -70.1515,
    "tier": 3
  },
  {
    "iata": "PRA",
    "name": "General Urquiza Airport",
    "city": "Parana",
    "country": "Argentina",
    "lat": -31.7948,
    "lng": -60.4804,
    "tier": 3
  },
  {
    "iata": "PPQ",
    "name": "Paraparaumu Airport",
    "city": "Paraparaumu",
    "country": "New Zealand",
    "lat": -40.9047,
    "lng": 174.989,
    "tier": 3
  },
  {
    "iata": "CKS",
    "name": "Carajás Airport",
    "city": "Parauapebas",
    "country": "Brazil",
    "lat": -6.1153,
    "lng": -50.0014,
    "tier": 3
  },
  {
    "iata": "PED",
    "name": "Pardubice Airport",
    "city": "Pardubice",
    "country": "Czech Republic",
    "lat": 50.0134,
    "lng": 15.7386,
    "tier": 3
  },
  {
    "iata": "PIN",
    "name": "Parintins Airport",
    "city": "Parintins",
    "country": "Brazil",
    "lat": -2.673,
    "lng": -56.7772,
    "tier": 3
  },
  {
    "iata": "CDG",
    "name": "Charles de Gaulle International Airport",
    "city": "Paris",
    "country": "France",
    "lat": 49.0128,
    "lng": 2.55,
    "tier": 1
  },
  {
    "iata": "ORY",
    "name": "Paris-Orly Airport",
    "city": "Paris",
    "country": "France",
    "lat": 48.7233,
    "lng": 2.3794,
    "tier": 1
  },
  {
    "iata": "PKE",
    "name": "Parkes Airport",
    "city": "Parkes",
    "country": "Australia",
    "lat": -33.1314,
    "lng": 148.239,
    "tier": 3
  },
  {
    "iata": "PMF",
    "name": "Parma Airport",
    "city": "Parma",
    "country": "Italy",
    "lat": 44.8245,
    "lng": 10.2964,
    "tier": 3
  },
  {
    "iata": "PHB",
    "name": "Prefeito Doutor João Silva Filho Airport",
    "city": "Parnaiba",
    "country": "Brazil",
    "lat": -2.8937,
    "lng": -41.732,
    "tier": 3
  },
  {
    "iata": "PAS",
    "name": "Paros National Airport",
    "city": "Paros",
    "country": "Greece",
    "lat": 37.0205,
    "lng": 25.1132,
    "tier": 3
  },
  {
    "iata": "PFQ",
    "name": "Parsabade Moghan Airport",
    "city": "Parsabad",
    "country": "Iran",
    "lat": 39.6036,
    "lng": 47.8815,
    "tier": 3
  },
  {
    "iata": "PSC",
    "name": "Tri Cities Airport",
    "city": "Pasco",
    "country": "United States",
    "lat": 46.2647,
    "lng": -119.119,
    "tier": 2
  },
  {
    "iata": "PFB",
    "name": "Lauro Kurtz Airport",
    "city": "Passo Fundo",
    "country": "Brazil",
    "lat": -28.244,
    "lng": -52.3266,
    "tier": 3
  },
  {
    "iata": "PSO",
    "name": "Antonio Narino Airport",
    "city": "Pasto",
    "country": "Colombia",
    "lat": 1.3962,
    "lng": -77.2915,
    "tier": 3
  },
  {
    "iata": "PAT",
    "name": "Lok Nayak Jayaprakash Airport",
    "city": "Patina",
    "country": "India",
    "lat": 25.5913,
    "lng": 85.088,
    "tier": 2
  },
  {
    "iata": "POJ",
    "name": "Patos de Minas Airport",
    "city": "Patos de Minas",
    "country": "Brazil",
    "lat": -18.6728,
    "lng": -46.4912,
    "tier": 3
  },
  {
    "iata": "GPA",
    "name": "Araxos Airport",
    "city": "Patras",
    "country": "Greece",
    "lat": 38.1511,
    "lng": 21.4256,
    "tier": 3
  },
  {
    "iata": "UTP",
    "name": "U-Tapao International Airport",
    "city": "Pattaya",
    "country": "Thailand",
    "lat": 12.6799,
    "lng": 101.005,
    "tier": 3
  },
  {
    "iata": "PUF",
    "name": "Pau Pyrénées Airport",
    "city": "Pau",
    "country": "France",
    "lat": 43.38,
    "lng": -0.4186,
    "tier": 3
  },
  {
    "iata": "YPC",
    "name": "Paulatuk (Nora Aliqatchialuk Ruben) Airport",
    "city": "Paulatuk",
    "country": "Canada",
    "lat": 69.3608,
    "lng": -124.0755,
    "tier": 3
  },
  {
    "iata": "PAV",
    "name": "Paulo Afonso Airport",
    "city": "Paulo Alfonso",
    "country": "Brazil",
    "lat": -9.4009,
    "lng": -38.2506,
    "tier": 3
  },
  {
    "iata": "PWQ",
    "name": "Pavlodar Airport",
    "city": "Pavlodar",
    "country": "Kazakhstan",
    "lat": 52.195,
    "lng": 77.0739,
    "tier": 3
  },
  {
    "iata": "YPO",
    "name": "Peawanuck Airport",
    "city": "Peawanuck",
    "country": "Canada",
    "lat": 54.9881,
    "lng": -85.4433,
    "tier": 3
  },
  {
    "iata": "PKU",
    "name": "Sultan Syarif Kasim Ii (Simpang Tiga) Airport",
    "city": "Pekanbaru",
    "country": "Indonesia",
    "lat": 0.4608,
    "lng": 101.445,
    "tier": 2
  },
  {
    "iata": "PLN",
    "name": "Pellston Regional Airport of Emmet County Airport",
    "city": "Pellston",
    "country": "United States",
    "lat": 45.5709,
    "lng": -84.7967,
    "tier": 3
  },
  {
    "iata": "PET",
    "name": "João Simões Lopes Neto International Airport",
    "city": "Pelotas",
    "country": "Brazil",
    "lat": -31.7184,
    "lng": -52.3277,
    "tier": 3
  },
  {
    "iata": "POL",
    "name": "Pemba Airport",
    "city": "Pemba",
    "country": "Mozambique",
    "lat": -12.9918,
    "lng": 40.524,
    "tier": 2
  },
  {
    "iata": "PEN",
    "name": "Penang International Airport",
    "city": "Penang",
    "country": "Malaysia",
    "lat": 5.2971,
    "lng": 100.277,
    "tier": 1
  },
  {
    "iata": "PDT",
    "name": "Eastern Oregon Regional At Pendleton Airport",
    "city": "Pendleton",
    "country": "United States",
    "lat": 45.6951,
    "lng": -118.841,
    "tier": 3
  },
  {
    "iata": "PNS",
    "name": "Pensacola Regional Airport",
    "city": "Pensacola",
    "country": "United States",
    "lat": 30.4734,
    "lng": -87.1866,
    "tier": 2
  },
  {
    "iata": "SSR",
    "name": "Sara Airport",
    "city": "Pentecost Island",
    "country": "Vanuatu",
    "lat": -15.4708,
    "lng": 168.152,
    "tier": 3
  },
  {
    "iata": "YYF",
    "name": "Penticton Airport",
    "city": "Penticton",
    "country": "Canada",
    "lat": 49.4631,
    "lng": -119.602,
    "tier": 3
  },
  {
    "iata": "PEZ",
    "name": "Penza Airport",
    "city": "Penza",
    "country": "Russia",
    "lat": 53.1106,
    "lng": 45.0211,
    "tier": 3
  },
  {
    "iata": "PIA",
    "name": "General Wayne A. Downing Peoria International Airport",
    "city": "Peoria",
    "country": "United States",
    "lat": 40.6642,
    "lng": -89.6933,
    "tier": 2
  },
  {
    "iata": "PEI",
    "name": "Matecaña International Airport",
    "city": "Pereira",
    "country": "Colombia",
    "lat": 4.8127,
    "lng": -75.7395,
    "tier": 2
  },
  {
    "iata": "PGX",
    "name": "Périgueux-Bassillac Airport",
    "city": "Perigueux",
    "country": "France",
    "lat": 45.1981,
    "lng": 0.8156,
    "tier": 3
  },
  {
    "iata": "PEE",
    "name": "Bolshoye Savino Airport",
    "city": "Perm",
    "country": "Russia",
    "lat": 57.9145,
    "lng": 56.0212,
    "tier": 2
  },
  {
    "iata": "PGF",
    "name": "Perpignan-Rivesaltes (Llabanère) Airport",
    "city": "Perpignan",
    "country": "France",
    "lat": 42.7404,
    "lng": 2.8707,
    "tier": 3
  },
  {
    "iata": "KPV",
    "name": "Perryville Airport",
    "city": "Perryville",
    "country": "United States",
    "lat": 55.906,
    "lng": -159.163,
    "tier": 3
  },
  {
    "iata": "PER",
    "name": "Perth International Airport",
    "city": "Perth",
    "country": "Australia",
    "lat": -31.9403,
    "lng": 115.967,
    "tier": 1
  },
  {
    "iata": "PEG",
    "name": "Perugia San Francesco d'Assisi – Umbria International Airport",
    "city": "Perugia",
    "country": "Italy",
    "lat": 43.0959,
    "lng": 12.5132,
    "tier": 3
  },
  {
    "iata": "PSR",
    "name": "Pescara International Airport",
    "city": "Pescara",
    "country": "Italy",
    "lat": 42.4317,
    "lng": 14.1811,
    "tier": 2
  },
  {
    "iata": "PEW",
    "name": "Peshawar International Airport",
    "city": "Peshawar",
    "country": "Pakistan",
    "lat": 33.9939,
    "lng": 71.5146,
    "tier": 1
  },
  {
    "iata": "PSG",
    "name": "Petersburg James A Johnson Airport",
    "city": "Petersburg",
    "country": "United States",
    "lat": 56.8017,
    "lng": -132.945,
    "tier": 3
  },
  {
    "iata": "PNZ",
    "name": "Senador Nilo Coelho Airport",
    "city": "Petrolina",
    "country": "Brazil",
    "lat": -9.3624,
    "lng": -40.5691,
    "tier": 3
  },
  {
    "iata": "PPK",
    "name": "Petropavlosk South Airport",
    "city": "Petropavlosk",
    "country": "Kazakhstan",
    "lat": 54.7747,
    "lng": 69.1839,
    "tier": 3
  },
  {
    "iata": "PKC",
    "name": "Yelizovo Airport",
    "city": "Petropavlovsk",
    "country": "Russia",
    "lat": 53.1679,
    "lng": 158.454,
    "tier": 2
  },
  {
    "iata": "PES",
    "name": "Petrozavodsk Airport",
    "city": "Petrozavodsk",
    "country": "Russia",
    "lat": 61.8852,
    "lng": 34.1547,
    "tier": 3
  },
  {
    "iata": "PWE",
    "name": "Pevek Airport",
    "city": "Pevek",
    "country": "Russia",
    "lat": 69.7833,
    "lng": 170.597,
    "tier": 3
  },
  {
    "iata": "PHW",
    "name": "Hendrik Van Eck Airport",
    "city": "Phalaborwa",
    "country": "South Africa",
    "lat": -23.9372,
    "lng": 31.1554,
    "tier": 3
  },
  {
    "iata": "PHL",
    "name": "Philadelphia International Airport",
    "city": "Philadelphia",
    "country": "United States",
    "lat": 39.8719,
    "lng": -75.2411,
    "tier": 1
  },
  {
    "iata": "SXM",
    "name": "Princess Juliana International Airport",
    "city": "Philipsburg",
    "country": "Netherlands Antilles",
    "lat": 18.041,
    "lng": -63.1089,
    "tier": 1
  },
  {
    "iata": "PHS",
    "name": "Phitsanulok Airport",
    "city": "Phitsanulok",
    "country": "Thailand",
    "lat": 16.7829,
    "lng": 100.279,
    "tier": 3
  },
  {
    "iata": "PNH",
    "name": "Phnom Penh International Airport",
    "city": "Phnom-penh",
    "country": "Cambodia",
    "lat": 11.5466,
    "lng": 104.844,
    "tier": 1
  },
  {
    "iata": "PHX",
    "name": "Phoenix Sky Harbor International Airport",
    "city": "Phoenix",
    "country": "United States",
    "lat": 33.4343,
    "lng": -112.012,
    "tier": 1
  },
  {
    "iata": "XKH",
    "name": "Xieng Khouang Airport",
    "city": "Phon Savan",
    "country": "Laos",
    "lat": 19.45,
    "lng": 103.158,
    "tier": 3
  },
  {
    "iata": "PRH",
    "name": "Phrae Airport",
    "city": "Phrae",
    "country": "Thailand",
    "lat": 18.1322,
    "lng": 100.165,
    "tier": 3
  },
  {
    "iata": "UIH",
    "name": "Phu Cat Airport",
    "city": "Phucat",
    "country": "Vietnam",
    "lat": 13.955,
    "lng": 109.042,
    "tier": 3
  },
  {
    "iata": "HKT",
    "name": "Phuket International Airport",
    "city": "Phuket",
    "country": "Thailand",
    "lat": 8.1132,
    "lng": 98.3169,
    "tier": 1
  },
  {
    "iata": "PQC",
    "name": "Phu Quoc International Airport",
    "city": "Phuquoc",
    "country": "Vietnam",
    "lat": 10.1698,
    "lng": 103.9931,
    "tier": 3
  },
  {
    "iata": "YPL",
    "name": "Pickle Lake Airport",
    "city": "Pickle Lake",
    "country": "Canada",
    "lat": 51.4464,
    "lng": -90.2142,
    "tier": 3
  },
  {
    "iata": "PIX",
    "name": "Pico Airport",
    "city": "Pico",
    "country": "Portugal",
    "lat": 38.5543,
    "lng": -28.4413,
    "tier": 3
  },
  {
    "iata": "PDS",
    "name": "Piedras Negras International Airport",
    "city": "Piedras Negras",
    "country": "Mexico",
    "lat": 28.6274,
    "lng": -100.535,
    "tier": 3
  },
  {
    "iata": "PIR",
    "name": "Pierre Regional Airport",
    "city": "Pierre",
    "country": "United States",
    "lat": 44.3827,
    "lng": -100.286,
    "tier": 2
  },
  {
    "iata": "PZB",
    "name": "Pietermaritzburg Airport",
    "city": "Pietermaritzburg",
    "country": "South Africa",
    "lat": -29.649,
    "lng": 30.3987,
    "tier": 3
  },
  {
    "iata": "YPM",
    "name": "Pikangikum Airport",
    "city": "Pikangikum",
    "country": "Canada",
    "lat": 51.8197,
    "lng": -93.9733,
    "tier": 3
  },
  {
    "iata": "PIP",
    "name": "Pilot Point Airport",
    "city": "Pilot Point",
    "country": "United States",
    "lat": 57.5804,
    "lng": -157.572,
    "tier": 3
  },
  {
    "iata": "PSA",
    "name": "Pisa International Airport",
    "city": "Pisa",
    "country": "Italy",
    "lat": 43.6839,
    "lng": 10.3927,
    "tier": 1
  },
  {
    "iata": "PIT",
    "name": "Pittsburgh International Airport",
    "city": "Pittsburgh",
    "country": "United States",
    "lat": 40.4915,
    "lng": -80.2329,
    "tier": 1
  },
  {
    "iata": "PIU",
    "name": "Capitán FAP Guillermo Concha Iberico International Airport",
    "city": "Piura",
    "country": "Peru",
    "lat": -5.2057,
    "lng": -80.6164,
    "tier": 3
  },
  {
    "iata": "MRU",
    "name": "Sir Seewoosagur Ramgoolam International Airport",
    "city": "Plaisance",
    "country": "Mauritius",
    "lat": -20.4302,
    "lng": 57.6836,
    "tier": 1
  },
  {
    "iata": "PBG",
    "name": "Plattsburgh International Airport",
    "city": "Plattsburgh",
    "country": "United States",
    "lat": 44.6509,
    "lng": -73.4681,
    "tier": 2
  },
  {
    "iata": "PXU",
    "name": "Pleiku Airport",
    "city": "Pleiku",
    "country": "Vietnam",
    "lat": 14.0045,
    "lng": 108.017,
    "tier": 3
  },
  {
    "iata": "PBZ",
    "name": "Plettenberg Bay Airport",
    "city": "Plettenberg Bay",
    "country": "South Africa",
    "lat": -34.0882,
    "lng": 23.3287,
    "tier": 3
  },
  {
    "iata": "PDV",
    "name": "Plovdiv International Airport",
    "city": "Plovdiv",
    "country": "Bulgaria",
    "lat": 42.0678,
    "lng": 24.8508,
    "tier": 3
  },
  {
    "iata": "PIH",
    "name": "Pocatello Regional Airport",
    "city": "Pocatello",
    "country": "United States",
    "lat": 42.9098,
    "lng": -112.596,
    "tier": 3
  },
  {
    "iata": "TGD",
    "name": "Podgorica Airport",
    "city": "Podgorica",
    "country": "Montenegro",
    "lat": 42.3594,
    "lng": 19.2519,
    "tier": 2
  },
  {
    "iata": "KPO",
    "name": "Pohang Airport (G-815/K-3)",
    "city": "Pohang",
    "country": "South Korea",
    "lat": 35.988,
    "lng": 129.4204,
    "tier": 3
  },
  {
    "iata": "PNI",
    "name": "Pohnpei International Airport",
    "city": "Pohnpei",
    "country": "Micronesia",
    "lat": 6.9851,
    "lng": 158.209,
    "tier": 3
  },
  {
    "iata": "STG",
    "name": "St George Airport",
    "city": "Point Barrow",
    "country": "United States",
    "lat": 56.5783,
    "lng": -169.662,
    "tier": 3
  },
  {
    "iata": "PIZ",
    "name": "Point Lay LRRS Airport",
    "city": "Point Lay",
    "country": "United States",
    "lat": 69.7329,
    "lng": -163.005,
    "tier": 3
  },
  {
    "iata": "GND",
    "name": "Point Salines International Airport",
    "city": "Point Salines",
    "country": "Grenada",
    "lat": 12.0042,
    "lng": -61.7862,
    "tier": 2
  },
  {
    "iata": "PTP",
    "name": "Pointe-à-Pitre Le Raizet",
    "city": "Pointe-a-pitre",
    "country": "Guadeloupe",
    "lat": 16.2653,
    "lng": -61.5318,
    "tier": 1
  },
  {
    "iata": "PNR",
    "name": "Pointe Noire Airport",
    "city": "Pointe-noire",
    "country": "Congo (Brazzaville)",
    "lat": -4.816,
    "lng": 11.8866,
    "tier": 2
  },
  {
    "iata": "PIS",
    "name": "Poitiers-Biard Airport",
    "city": "Poitiers",
    "country": "France",
    "lat": 46.5877,
    "lng": 0.3067,
    "tier": 2
  },
  {
    "iata": "PKR",
    "name": "Pokhara Airport",
    "city": "Pokhara",
    "country": "Nepal",
    "lat": 28.2009,
    "lng": 83.9821,
    "tier": 3
  },
  {
    "iata": "PSE",
    "name": "Mercedita Airport",
    "city": "Ponce",
    "country": "Puerto Rico",
    "lat": 18.0083,
    "lng": -66.563,
    "tier": 3
  },
  {
    "iata": "YIO",
    "name": "Pond Inlet Airport",
    "city": "Pond Inlet",
    "country": "Canada",
    "lat": 72.6833,
    "lng": -77.9667,
    "tier": 3
  },
  {
    "iata": "PDL",
    "name": "João Paulo II Airport",
    "city": "Ponta Delgada",
    "country": "Portugal",
    "lat": 37.7412,
    "lng": -25.6979,
    "tier": 2
  },
  {
    "iata": "PNK",
    "name": "Supadio Airport",
    "city": "Pontianak",
    "country": "Indonesia",
    "lat": -0.1507,
    "lng": 109.404,
    "tier": 2
  },
  {
    "iata": "PPN",
    "name": "Guillermo León Valencia Airport",
    "city": "Popayan",
    "country": "Colombia",
    "lat": 2.4544,
    "lng": -76.6093,
    "tier": 3
  },
  {
    "iata": "YHP",
    "name": "Poplar Hill Airport",
    "city": "Poplar Hill",
    "country": "Canada",
    "lat": 52.1133,
    "lng": -94.2556,
    "tier": 3
  },
  {
    "iata": "PBD",
    "name": "Porbandar Airport",
    "city": "Porbandar",
    "country": "India",
    "lat": 21.6487,
    "lng": 69.6572,
    "tier": 3
  },
  {
    "iata": "POR",
    "name": "Pori Airport",
    "city": "Pori",
    "country": "Finland",
    "lat": 61.4617,
    "lng": 21.8,
    "tier": 3
  },
  {
    "iata": "PMV",
    "name": "Del Caribe Santiago Mariño International Airport",
    "city": "Porlamar",
    "country": "Venezuela",
    "lat": 10.9126,
    "lng": -63.9666,
    "tier": 2
  },
  {
    "iata": "EDR",
    "name": "Pormpuraaw Airport",
    "city": "Pormpuraaw",
    "country": "Australia",
    "lat": -14.8965,
    "lng": 141.6091,
    "tier": 3
  },
  {
    "iata": "CLM",
    "name": "William R Fairchild International Airport",
    "city": "Port Angeles",
    "country": "United States",
    "lat": 48.1202,
    "lng": -123.5,
    "tier": 3
  },
  {
    "iata": "IXZ",
    "name": "Vir Savarkar International Airport",
    "city": "Port Blair",
    "country": "India",
    "lat": 11.6412,
    "lng": 92.7297,
    "tier": 2
  },
  {
    "iata": "PLZ",
    "name": "Port Elizabeth Airport",
    "city": "Port Elizabeth",
    "country": "South Africa",
    "lat": -33.9849,
    "lng": 25.6173,
    "tier": 2
  },
  {
    "iata": "POG",
    "name": "Port Gentil Airport",
    "city": "Port Gentil",
    "country": "Gabon",
    "lat": -0.7117,
    "lng": 8.7544,
    "tier": 3
  },
  {
    "iata": "YZT",
    "name": "Port Hardy Airport",
    "city": "Port Hardy",
    "country": "Canada",
    "lat": 50.6806,
    "lng": -127.367,
    "tier": 3
  },
  {
    "iata": "PHC",
    "name": "Port Harcourt International Airport",
    "city": "Port Hartcourt",
    "country": "Nigeria",
    "lat": 5.0155,
    "lng": 6.9496,
    "tier": 2
  },
  {
    "iata": "PHE",
    "name": "Port Hedland International Airport",
    "city": "Port Hedland",
    "country": "Australia",
    "lat": -20.3778,
    "lng": 118.626,
    "tier": 2
  },
  {
    "iata": "PTH",
    "name": "Port Heiden Airport",
    "city": "Port Heiden",
    "country": "United States",
    "lat": 56.9591,
    "lng": -158.633,
    "tier": 3
  },
  {
    "iata": "PLO",
    "name": "Port Lincoln Airport",
    "city": "Port Lincoln",
    "country": "Australia",
    "lat": -34.6053,
    "lng": 135.88,
    "tier": 3
  },
  {
    "iata": "PQQ",
    "name": "Port Macquarie Airport",
    "city": "Port Macquarie",
    "country": "Australia",
    "lat": -31.4358,
    "lng": 152.863,
    "tier": 2
  },
  {
    "iata": "YPN",
    "name": "Port Menier Airport",
    "city": "Port Menier",
    "country": "Canada",
    "lat": 49.8364,
    "lng": -64.2886,
    "tier": 3
  },
  {
    "iata": "PTU",
    "name": "Platinum Airport",
    "city": "Port Moller",
    "country": "United States",
    "lat": 59.0114,
    "lng": -161.82,
    "tier": 3
  },
  {
    "iata": "POM",
    "name": "Port Moresby Jacksons International Airport",
    "city": "Port Moresby",
    "country": "Papua New Guinea",
    "lat": -9.4434,
    "lng": 147.22,
    "tier": 1
  },
  {
    "iata": "RCY",
    "name": "Rum Cay Airport",
    "city": "Port Nelson",
    "country": "Bahamas",
    "lat": 23.6844,
    "lng": -74.8362,
    "tier": 3
  },
  {
    "iata": "PZU",
    "name": "Port Sudan New International Airport",
    "city": "Port Sudan",
    "country": "Sudan",
    "lat": 19.4336,
    "lng": 37.2341,
    "tier": 3
  },
  {
    "iata": "PAP",
    "name": "Toussaint Louverture International Airport",
    "city": "Port-au-prince",
    "country": "Haiti",
    "lat": 18.58,
    "lng": -72.2925,
    "tier": 2
  },
  {
    "iata": "POS",
    "name": "Piarco International Airport",
    "city": "Port-of-spain",
    "country": "Trinidad and Tobago",
    "lat": 10.5954,
    "lng": -61.3372,
    "tier": 1
  },
  {
    "iata": "VLI",
    "name": "Bauerfield International Airport",
    "city": "Port-vila",
    "country": "Vanuatu",
    "lat": -17.6993,
    "lng": 168.32,
    "tier": 1
  },
  {
    "iata": "PDX",
    "name": "Portland International Airport",
    "city": "Portland",
    "country": "United States",
    "lat": 45.5887,
    "lng": -122.598,
    "tier": 1
  },
  {
    "iata": "PTJ",
    "name": "Portland Airport",
    "city": "Portland",
    "country": "Australia",
    "lat": -38.3181,
    "lng": 141.471,
    "tier": 3
  },
  {
    "iata": "PWM",
    "name": "Portland International Jetport Airport",
    "city": "Portland",
    "country": "United States",
    "lat": 43.6462,
    "lng": -70.3093,
    "tier": 2
  },
  {
    "iata": "OPO",
    "name": "Francisco de Sá Carneiro Airport",
    "city": "Porto",
    "country": "Portugal",
    "lat": 41.2481,
    "lng": -8.6814,
    "tier": 1
  },
  {
    "iata": "POA",
    "name": "Salgado Filho Airport",
    "city": "Porto Alegre",
    "country": "Brazil",
    "lat": -29.9944,
    "lng": -51.1714,
    "tier": 1
  },
  {
    "iata": "PXO",
    "name": "Porto Santo Airport",
    "city": "Porto Santo",
    "country": "Portugal",
    "lat": 33.0734,
    "lng": -16.35,
    "tier": 3
  },
  {
    "iata": "BPS",
    "name": "Porto Seguro Airport",
    "city": "Porto Seguro",
    "country": "Brazil",
    "lat": -16.4386,
    "lng": -39.0809,
    "tier": 2
  },
  {
    "iata": "PVH",
    "name": "Governador Jorge Teixeira de Oliveira Airport",
    "city": "Porto Velho",
    "country": "Brazil",
    "lat": -8.7093,
    "lng": -63.9023,
    "tier": 2
  },
  {
    "iata": "PSM",
    "name": "Portsmouth International at Pease Airport",
    "city": "Portsmouth",
    "country": "United States",
    "lat": 43.0779,
    "lng": -70.8233,
    "tier": 3
  },
  {
    "iata": "PSS",
    "name": "Libertador Gral D Jose De San Martin Airport",
    "city": "Posadas",
    "country": "Argentina",
    "lat": -27.3858,
    "lng": -55.9707,
    "tier": 3
  },
  {
    "iata": "PSJ",
    "name": "Kasiguncu Airport",
    "city": "Poso",
    "country": "Indonesia",
    "lat": -1.4167,
    "lng": 120.658,
    "tier": 3
  },
  {
    "iata": "YSO",
    "name": "Postville Airport",
    "city": "Postville",
    "country": "Canada",
    "lat": 54.9105,
    "lng": -59.7851,
    "tier": 3
  },
  {
    "iata": "PTG",
    "name": "Polokwane International Airport",
    "city": "Potgietersrus",
    "country": "South Africa",
    "lat": -23.8453,
    "lng": 29.4586,
    "tier": 3
  },
  {
    "iata": "POI",
    "name": "Capitan Nicolas Rojas Airport",
    "city": "Potosi",
    "country": "Bolivia",
    "lat": -19.5431,
    "lng": -65.7237,
    "tier": 3
  },
  {
    "iata": "YPW",
    "name": "Powell River Airport",
    "city": "Powell River",
    "country": "Canada",
    "lat": 49.8342,
    "lng": -124.5,
    "tier": 3
  },
  {
    "iata": "PAZ",
    "name": "El Tajín National Airport",
    "city": "Poza Rico",
    "country": "Mexico",
    "lat": 20.6027,
    "lng": -97.4608,
    "tier": 2
  },
  {
    "iata": "POZ",
    "name": "Poznań-Ławica Airport",
    "city": "Poznan",
    "country": "Poland",
    "lat": 52.421,
    "lng": 16.8263,
    "tier": 2
  },
  {
    "iata": "PRG",
    "name": "Václav Havel Airport Prague",
    "city": "Prague",
    "country": "Czech Republic",
    "lat": 50.1008,
    "lng": 14.26,
    "tier": 1
  },
  {
    "iata": "RAI",
    "name": "Praia International Airport",
    "city": "Praia, Santiago Island",
    "country": "Cape Verde",
    "lat": 14.9245,
    "lng": -23.4935,
    "tier": 2
  },
  {
    "iata": "PRI",
    "name": "Praslin Airport",
    "city": "Praslin",
    "country": "Seychelles",
    "lat": -4.3193,
    "lng": 55.6914,
    "tier": 3
  },
  {
    "iata": "LOP",
    "name": "Lombok International Airport",
    "city": "Praya",
    "country": "Indonesia",
    "lat": -8.7573,
    "lng": 116.2767,
    "tier": 2
  },
  {
    "iata": "PRC",
    "name": "Ernest A. Love Field",
    "city": "Prescott",
    "country": "United States",
    "lat": 34.6545,
    "lng": -112.42,
    "tier": 3
  },
  {
    "iata": "PPB",
    "name": "Presidente Prudente Airport",
    "city": "President Prudente",
    "country": "Brazil",
    "lat": -22.1751,
    "lng": -51.4246,
    "tier": 3
  },
  {
    "iata": "PQI",
    "name": "Northern Maine Regional Airport at Presque Isle",
    "city": "Presque Isle",
    "country": "United States",
    "lat": 46.689,
    "lng": -68.0448,
    "tier": 3
  },
  {
    "iata": "PIK",
    "name": "Glasgow Prestwick Airport",
    "city": "Prestwick",
    "country": "United Kingdom",
    "lat": 55.5094,
    "lng": -4.5867,
    "tier": 2
  },
  {
    "iata": "PVK",
    "name": "Aktion National Airport",
    "city": "Preveza",
    "country": "Greece",
    "lat": 38.9255,
    "lng": 20.7653,
    "tier": 2
  },
  {
    "iata": "YXS",
    "name": "Prince George Airport",
    "city": "Prince George",
    "country": "Canada",
    "lat": 53.8894,
    "lng": -122.679,
    "tier": 2
  },
  {
    "iata": "YPR",
    "name": "Prince Rupert Airport",
    "city": "Prince Pupert",
    "country": "Canada",
    "lat": 54.2861,
    "lng": -130.445,
    "tier": 3
  },
  {
    "iata": "PRN",
    "name": "Priština International Airport",
    "city": "Pristina",
    "country": "Serbia",
    "lat": 42.5728,
    "lng": 21.0358,
    "tier": 2
  },
  {
    "iata": "PPP",
    "name": "Proserpine Whitsunday Coast Airport",
    "city": "Prosserpine",
    "country": "Australia",
    "lat": -20.495,
    "lng": 148.552,
    "tier": 3
  },
  {
    "iata": "PVD",
    "name": "Theodore Francis Green State Airport",
    "city": "Providence",
    "country": "United States",
    "lat": 41.7326,
    "lng": -71.4204,
    "tier": 1
  },
  {
    "iata": "PVA",
    "name": "El Embrujo Airport",
    "city": "Providencia",
    "country": "Colombia",
    "lat": 13.3569,
    "lng": -81.3583,
    "tier": 3
  },
  {
    "iata": "PLS",
    "name": "Providenciales Airport",
    "city": "Providenciales",
    "country": "Turks and Caicos Islands",
    "lat": 21.7736,
    "lng": -72.2659,
    "tier": 1
  },
  {
    "iata": "PVC",
    "name": "Provincetown Municipal Airport",
    "city": "Provincetown",
    "country": "United States",
    "lat": 42.0719,
    "lng": -70.2214,
    "tier": 3
  },
  {
    "iata": "PVU",
    "name": "Provo Municipal Airport",
    "city": "Provo",
    "country": "United States",
    "lat": 40.2192,
    "lng": -111.723,
    "tier": 3
  },
  {
    "iata": "PCL",
    "name": "Cap FAP David Abenzur Rengifo International Airport",
    "city": "Pucallpa",
    "country": "Peru",
    "lat": -8.3779,
    "lng": -74.5743,
    "tier": 2
  },
  {
    "iata": "PBC",
    "name": "Hermanos Serdán International Airport",
    "city": "Puebla",
    "country": "Mexico",
    "lat": 19.1581,
    "lng": -98.3714,
    "tier": 2
  },
  {
    "iata": "PUB",
    "name": "Pueblo Memorial Airport",
    "city": "Pueblo",
    "country": "United States",
    "lat": 38.2891,
    "lng": -104.497,
    "tier": 3
  },
  {
    "iata": "PUU",
    "name": "Tres De Mayo Airport",
    "city": "Puerto Asis",
    "country": "Colombia",
    "lat": 0.5052,
    "lng": -76.5008,
    "tier": 3
  },
  {
    "iata": "PYH",
    "name": "Cacique Aramare Airport",
    "city": "Puerto Ayacucho",
    "country": "Venezuela",
    "lat": 5.62,
    "lng": -67.6061,
    "tier": 3
  },
  {
    "iata": "PBL",
    "name": "General Bartolome Salom International Airport",
    "city": "Puerto Cabello",
    "country": "Venezuela",
    "lat": 10.4805,
    "lng": -68.073,
    "tier": 3
  },
  {
    "iata": "PCR",
    "name": "German Olano Airport",
    "city": "Puerto Carreno",
    "country": "Colombia",
    "lat": 6.1847,
    "lng": -67.4932,
    "tier": 3
  },
  {
    "iata": "PXM",
    "name": "Puerto Escondido International Airport",
    "city": "Puerto Escondido",
    "country": "Mexico",
    "lat": 15.8769,
    "lng": -97.0891,
    "tier": 3
  },
  {
    "iata": "PDA",
    "name": "Obando Airport",
    "city": "Puerto Inírida",
    "country": "Colombia",
    "lat": 3.8535,
    "lng": -67.9062,
    "tier": 3
  },
  {
    "iata": "PJM",
    "name": "Puerto Jimenez Airport",
    "city": "Puerto Jimenez",
    "country": "Costa Rica",
    "lat": 8.5333,
    "lng": -83.3,
    "tier": 3
  },
  {
    "iata": "LQM",
    "name": "Caucaya Airport",
    "city": "Puerto Leguízamo",
    "country": "Colombia",
    "lat": -0.1823,
    "lng": -74.7708,
    "tier": 3
  },
  {
    "iata": "PEU",
    "name": "Puerto Lempira Airport",
    "city": "Puerto Lempira",
    "country": "Honduras",
    "lat": 15.2622,
    "lng": -83.7812,
    "tier": 3
  },
  {
    "iata": "PMY",
    "name": "El Tehuelche Airport",
    "city": "Puerto Madryn",
    "country": "Argentina",
    "lat": -42.7592,
    "lng": -65.1027,
    "tier": 3
  },
  {
    "iata": "PEM",
    "name": "Padre Aldamiz International Airport",
    "city": "Puerto Maldonado",
    "country": "Peru",
    "lat": -12.6136,
    "lng": -69.2286,
    "tier": 3
  },
  {
    "iata": "PMC",
    "name": "El Tepual Airport",
    "city": "Puerto Montt",
    "country": "Chile",
    "lat": -41.4389,
    "lng": -73.094,
    "tier": 2
  },
  {
    "iata": "PUE",
    "name": "Puerto Obaldia Airport",
    "city": "Puerto Obaldia",
    "country": "Panama",
    "lat": 8.667,
    "lng": -77.418,
    "tier": 3
  },
  {
    "iata": "POP",
    "name": "Gregorio Luperon International Airport",
    "city": "Puerto Plata",
    "country": "Dominican Republic",
    "lat": 19.7579,
    "lng": -70.57,
    "tier": 2
  },
  {
    "iata": "PPS",
    "name": "Puerto Princesa Airport",
    "city": "Puerto Princesa",
    "country": "Philippines",
    "lat": 9.7421,
    "lng": 118.759,
    "tier": 2
  },
  {
    "iata": "PVR",
    "name": "Licenciado Gustavo Díaz Ordaz International Airport",
    "city": "Puerto Vallarta",
    "country": "Mexico",
    "lat": 20.6801,
    "lng": -105.254,
    "tier": 1
  },
  {
    "iata": "PUY",
    "name": "Pula Airport",
    "city": "Pula",
    "country": "Croatia",
    "lat": 44.8935,
    "lng": 13.9222,
    "tier": 2
  },
  {
    "iata": "PUW",
    "name": "Pullman Moscow Regional Airport",
    "city": "Pullman",
    "country": "United States",
    "lat": 46.7439,
    "lng": -117.11,
    "tier": 3
  },
  {
    "iata": "PNQ",
    "name": "Pune Airport",
    "city": "Pune",
    "country": "India",
    "lat": 18.5821,
    "lng": 73.9197,
    "tier": 1
  },
  {
    "iata": "PUQ",
    "name": "Pdte. Carlos Ibañez del Campo Airport",
    "city": "Punta Arenas",
    "country": "Chile",
    "lat": -53.0026,
    "lng": -70.8546,
    "tier": 2
  },
  {
    "iata": "PUJ",
    "name": "Punta Cana International Airport",
    "city": "Punta Cana",
    "country": "Dominican Republic",
    "lat": 18.5674,
    "lng": -68.3634,
    "tier": 1
  },
  {
    "iata": "PGD",
    "name": "Charlotte County Airport",
    "city": "Punta Gorda",
    "country": "United States",
    "lat": 26.9202,
    "lng": -81.9905,
    "tier": 2
  },
  {
    "iata": "PDP",
    "name": "Capitan Corbeta CA Curbelo International Airport",
    "city": "Punta del Este",
    "country": "Uruguay",
    "lat": -34.8551,
    "lng": -55.0943,
    "tier": 3
  },
  {
    "iata": "DRK",
    "name": "Drake Bay Airport",
    "city": "Puntarenas",
    "country": "Costa Rica",
    "lat": 8.7189,
    "lng": -83.6417,
    "tier": 3
  },
  {
    "iata": "PBU",
    "name": "Putao Airport",
    "city": "Putao",
    "country": "Burma",
    "lat": 27.3299,
    "lng": 97.4263,
    "tier": 3
  },
  {
    "iata": "YPX",
    "name": "Puvirnituq Airport",
    "city": "Puvirnituq",
    "country": "Canada",
    "lat": 60.0506,
    "lng": -77.2869,
    "tier": 3
  },
  {
    "iata": "FNJ",
    "name": "Pyongyang Sunan International Airport",
    "city": "Pyongyang",
    "country": "North Korea",
    "lat": 39.2241,
    "lng": 125.67,
    "tier": 3
  },
  {
    "iata": "NAQ",
    "name": "Qaanaaq Airport",
    "city": "Qaanaaq",
    "country": "Greenland",
    "lat": 77.4886,
    "lng": -69.3887,
    "tier": 3
  },
  {
    "iata": "GBB",
    "name": "Gabala International Airport",
    "city": "Qabala",
    "country": "Azerbaijan",
    "lat": 40.8267,
    "lng": 47.7125,
    "tier": 3
  },
  {
    "iata": "JJU",
    "name": "Qaqortoq Heliport",
    "city": "Qaqortoq",
    "country": "Greenland",
    "lat": 60.7157,
    "lng": -46.0299,
    "tier": 3
  },
  {
    "iata": "JIQ",
    "name": "Qianjiang Wulingshan Airport",
    "city": "Qianjiang",
    "country": "China",
    "lat": 29.5133,
    "lng": 108.8311,
    "tier": 2
  },
  {
    "iata": "TAO",
    "name": "Liuting Airport",
    "city": "Qingdao",
    "country": "China",
    "lat": 36.2661,
    "lng": 120.374,
    "tier": 1
  },
  {
    "iata": "IQN",
    "name": "Qingyang Airport",
    "city": "Qingyang",
    "country": "China",
    "lat": 35.7997,
    "lng": 107.603,
    "tier": 2
  },
  {
    "iata": "SHP",
    "name": "Shanhaiguan Airport",
    "city": "Qinhuangdao",
    "country": "China",
    "lat": 39.9681,
    "lng": 119.731,
    "tier": 2
  },
  {
    "iata": "NDG",
    "name": "Qiqihar Sanjiazi Airport",
    "city": "Qiqihar",
    "country": "China",
    "lat": 47.2396,
    "lng": 123.918,
    "tier": 2
  },
  {
    "iata": "JJN",
    "name": "Quanzhou Jinjiang International Airport",
    "city": "Quanzhou",
    "country": "China",
    "lat": 24.7964,
    "lng": 118.59,
    "tier": 1
  },
  {
    "iata": "YQC",
    "name": "Quaqtaq Airport",
    "city": "Quaqtaq",
    "country": "Canada",
    "lat": 61.0464,
    "lng": -69.6178,
    "tier": 3
  },
  {
    "iata": "YQB",
    "name": "Quebec Jean Lesage International Airport",
    "city": "Quebec",
    "country": "Canada",
    "lat": 46.7911,
    "lng": -71.3933,
    "tier": 1
  },
  {
    "iata": "ZQN",
    "name": "Queenstown International Airport",
    "city": "Queenstown International",
    "country": "New Zealand",
    "lat": -45.0211,
    "lng": 168.739,
    "tier": 2
  },
  {
    "iata": "UEL",
    "name": "Quelimane Airport",
    "city": "Quelimane",
    "country": "Mozambique",
    "lat": -17.8555,
    "lng": 36.8691,
    "tier": 3
  },
  {
    "iata": "XQP",
    "name": "Quepos Managua Airport",
    "city": "Quepos",
    "country": "Costa Rica",
    "lat": 9.4432,
    "lng": -84.1298,
    "tier": 3
  },
  {
    "iata": "QRO",
    "name": "Querétaro Intercontinental Airport",
    "city": "Queretaro",
    "country": "Mexico",
    "lat": 20.6173,
    "lng": -100.186,
    "tier": 2
  },
  {
    "iata": "YQZ",
    "name": "Quesnel Airport",
    "city": "Quesnel",
    "country": "Canada",
    "lat": 53.0261,
    "lng": -122.51,
    "tier": 3
  },
  {
    "iata": "UET",
    "name": "Quetta International Airport",
    "city": "Quetta",
    "country": "Pakistan",
    "lat": 30.2514,
    "lng": 66.9378,
    "tier": 2
  },
  {
    "iata": "UIB",
    "name": "El Caraño Airport",
    "city": "Quibdo",
    "country": "Colombia",
    "lat": 5.6908,
    "lng": -76.6412,
    "tier": 2
  },
  {
    "iata": "ULP",
    "name": "Quilpie Airport",
    "city": "Quilpie",
    "country": "Australia",
    "lat": -26.6122,
    "lng": 144.253,
    "tier": 3
  },
  {
    "iata": "UIP",
    "name": "Quimper-Cornouaille Airport",
    "city": "Quimper",
    "country": "France",
    "lat": 47.975,
    "lng": -4.1678,
    "tier": 3
  },
  {
    "iata": "UIN",
    "name": "Quincy Regional Baldwin Field",
    "city": "Quincy",
    "country": "United States",
    "lat": 39.9427,
    "lng": -91.1946,
    "tier": 3
  },
  {
    "iata": "KWN",
    "name": "Quinhagak Airport",
    "city": "Quinhagak",
    "country": "United States",
    "lat": 59.7551,
    "lng": -161.845,
    "tier": 3
  },
  {
    "iata": "UIO",
    "name": "Mariscal Sucre International Airport",
    "city": "Quito",
    "country": "Ecuador",
    "lat": -0.1292,
    "lng": -78.3575,
    "tier": 1
  },
  {
    "iata": "YVP",
    "name": "Kuujjuaq Airport",
    "city": "Quujjuaq",
    "country": "Canada",
    "lat": 58.0961,
    "lng": -68.4269,
    "tier": 2
  },
  {
    "iata": "JUZ",
    "name": "Quzhou Airport",
    "city": "Quzhou",
    "country": "China",
    "lat": 28.9658,
    "lng": 118.899,
    "tier": 2
  },
  {
    "iata": "RBA",
    "name": "Rabat-Salé Airport",
    "city": "Rabat",
    "country": "Morocco",
    "lat": 34.0515,
    "lng": -6.7515,
    "tier": 2
  },
  {
    "iata": "VKG",
    "name": "Rach Gia Airport",
    "city": "Rach Gia",
    "country": "Vietnam",
    "lat": 9.958,
    "lng": 105.1324,
    "tier": 3
  },
  {
    "iata": "RAH",
    "name": "Rafha Domestic Airport",
    "city": "Rafha",
    "country": "Saudi Arabia",
    "lat": 29.6264,
    "lng": 43.4906,
    "tier": 3
  },
  {
    "iata": "RYK",
    "name": "Shaikh Zaid Airport",
    "city": "Rahim Yar Khan",
    "country": "Pakistan",
    "lat": 28.3839,
    "lng": 70.2796,
    "tier": 3
  },
  {
    "iata": "RFP",
    "name": "Raiatea Airport",
    "city": "Raiatea Island",
    "country": "French Polynesia",
    "lat": -16.7229,
    "lng": -151.466,
    "tier": 3
  },
  {
    "iata": "YOP",
    "name": "Rainbow Lake Airport",
    "city": "Rainbow Lake",
    "country": "Canada",
    "lat": 58.4914,
    "lng": -119.408,
    "tier": 3
  },
  {
    "iata": "RPR",
    "name": "Raipur Airport",
    "city": "Raipur",
    "country": "India",
    "lat": 21.1804,
    "lng": 81.7388,
    "tier": 2
  },
  {
    "iata": "RVV",
    "name": "Raivavae Airport",
    "city": "Raivavae",
    "country": "French Polynesia",
    "lat": -23.8852,
    "lng": -147.662,
    "tier": 3
  },
  {
    "iata": "RJA",
    "name": "Rajahmundry Airport",
    "city": "Rajahmundry",
    "country": "India",
    "lat": 17.1104,
    "lng": 81.8182,
    "tier": 3
  },
  {
    "iata": "RAJ",
    "name": "Rajkot Airport",
    "city": "Rajkot",
    "country": "India",
    "lat": 22.3092,
    "lng": 70.7795,
    "tier": 3
  },
  {
    "iata": "RJH",
    "name": "Shah Mokhdum Airport",
    "city": "Rajshahi",
    "country": "Bangladesh",
    "lat": 24.4372,
    "lng": 88.6165,
    "tier": 3
  },
  {
    "iata": "RDU",
    "name": "Raleigh Durham International Airport",
    "city": "Raleigh-durham",
    "country": "United States",
    "lat": 35.8776,
    "lng": -78.7875,
    "tier": 1
  },
  {
    "iata": "RBV",
    "name": "Ramata Airport",
    "city": "Ramata",
    "country": "Solomon Islands",
    "lat": -8.1681,
    "lng": 157.643,
    "tier": 3
  },
  {
    "iata": "RZR",
    "name": "Ramsar Airport",
    "city": "Ramsar",
    "country": "Iran",
    "lat": 36.9099,
    "lng": 50.6796,
    "tier": 3
  },
  {
    "iata": "NTX",
    "name": "Ranai Airport",
    "city": "Ranai-Natuna Besar Island",
    "country": "Indonesia",
    "lat": 3.9087,
    "lng": 108.388,
    "tier": 3
  },
  {
    "iata": "IXR",
    "name": "Birsa Munda Airport",
    "city": "Ranchi",
    "country": "India",
    "lat": 23.3143,
    "lng": 85.3217,
    "tier": 2
  },
  {
    "iata": "RGI",
    "name": "Rangiroa Airport",
    "city": "Rangiroa",
    "country": "French Polynesia",
    "lat": -14.9543,
    "lng": -147.661,
    "tier": 3
  },
  {
    "iata": "YRT",
    "name": "Rankin Inlet Airport",
    "city": "Rankin Inlet",
    "country": "Canada",
    "lat": 62.8114,
    "lng": -92.1158,
    "tier": 2
  },
  {
    "iata": "UNN",
    "name": "Ranong Airport",
    "city": "Ranong",
    "country": "Thailand",
    "lat": 9.7776,
    "lng": 98.5855,
    "tier": 3
  },
  {
    "iata": "RAP",
    "name": "Rapid City Regional Airport",
    "city": "Rapid City",
    "country": "United States",
    "lat": 44.0453,
    "lng": -103.057,
    "tier": 2
  },
  {
    "iata": "RAS",
    "name": "Sardar-e-Jangal Airport",
    "city": "Rasht",
    "country": "Iran",
    "lat": 37.3233,
    "lng": 49.6178,
    "tier": 2
  },
  {
    "iata": "RVT",
    "name": "Ravensthorpe Airport",
    "city": "Ravensthorpe",
    "country": "Australia",
    "lat": -33.7972,
    "lng": 120.208,
    "tier": 3
  },
  {
    "iata": "REC",
    "name": "Guararapes - Gilberto Freyre International Airport",
    "city": "Recife",
    "country": "Brazil",
    "lat": -8.1265,
    "lng": -34.9236,
    "tier": 1
  },
  {
    "iata": "YQF",
    "name": "Red Deer Regional Airport",
    "city": "Red Deer Industrial",
    "country": "Canada",
    "lat": 52.1822,
    "lng": -113.894,
    "tier": 3
  },
  {
    "iata": "YRL",
    "name": "Red Lake Airport",
    "city": "Red Lake",
    "country": "Canada",
    "lat": 51.0669,
    "lng": -93.7931,
    "tier": 2
  },
  {
    "iata": "RDN",
    "name": "LTS Pulau Redang Airport",
    "city": "Redang",
    "country": "Malaysia",
    "lat": 5.7653,
    "lng": 103.007,
    "tier": 3
  },
  {
    "iata": "RDD",
    "name": "Redding Municipal Airport",
    "city": "Redding",
    "country": "United States",
    "lat": 40.509,
    "lng": -122.293,
    "tier": 3
  },
  {
    "iata": "RDC",
    "name": "Redenção Airport",
    "city": "Redencao",
    "country": "Brazil",
    "lat": -8.0333,
    "lng": -49.9799,
    "tier": 3
  },
  {
    "iata": "RDM",
    "name": "Roberts Field",
    "city": "Redmond-Bend",
    "country": "United States",
    "lat": 44.2541,
    "lng": -121.15,
    "tier": 2
  },
  {
    "iata": "REG",
    "name": "Reggio Calabria Airport",
    "city": "Reggio Calabria",
    "country": "Italy",
    "lat": 38.0712,
    "lng": 15.6516,
    "tier": 2
  },
  {
    "iata": "YQR",
    "name": "Regina International Airport",
    "city": "Regina",
    "country": "Canada",
    "lat": 50.4319,
    "lng": -104.666,
    "tier": 2
  },
  {
    "iata": "RNL",
    "name": "Rennell/Tingoa Airport",
    "city": "Rennell Island",
    "country": "Solomon Islands",
    "lat": -11.5339,
    "lng": 160.063,
    "tier": 3
  },
  {
    "iata": "RNS",
    "name": "Rennes-Saint-Jacques Airport",
    "city": "Rennes",
    "country": "France",
    "lat": 48.0695,
    "lng": -1.7348,
    "tier": 2
  },
  {
    "iata": "RNO",
    "name": "Reno Tahoe International Airport",
    "city": "Reno",
    "country": "United States",
    "lat": 39.4991,
    "lng": -119.768,
    "tier": 1
  },
  {
    "iata": "YUT",
    "name": "Repulse Bay Airport",
    "city": "Repulse Bay",
    "country": "Canada",
    "lat": 66.5214,
    "lng": -86.2247,
    "tier": 3
  },
  {
    "iata": "RBQ",
    "name": "Rurenabaque Airport",
    "city": "Rerrenabaque",
    "country": "Bolivia",
    "lat": -14.4279,
    "lng": -67.4968,
    "tier": 3
  },
  {
    "iata": "RES",
    "name": "Resistencia International Airport",
    "city": "Resistencia",
    "country": "Argentina",
    "lat": -27.45,
    "lng": -59.0561,
    "tier": 3
  },
  {
    "iata": "YRB",
    "name": "Resolute Bay Airport",
    "city": "Resolute",
    "country": "Canada",
    "lat": 74.7169,
    "lng": -94.9694,
    "tier": 3
  },
  {
    "iata": "REU",
    "name": "Reus Air Base",
    "city": "Reus",
    "country": "Spain",
    "lat": 41.1474,
    "lng": 1.1672,
    "tier": 2
  },
  {
    "iata": "RKV",
    "name": "Reykjavik Airport",
    "city": "Reykjavik",
    "country": "Iceland",
    "lat": 64.13,
    "lng": -21.9406,
    "tier": 3
  },
  {
    "iata": "REX",
    "name": "General Lucio Blanco International Airport",
    "city": "Reynosa",
    "country": "Mexico",
    "lat": 26.0089,
    "lng": -98.2285,
    "tier": 2
  },
  {
    "iata": "RHI",
    "name": "Rhinelander Oneida County Airport",
    "city": "Rhinelander",
    "country": "United States",
    "lat": 45.6312,
    "lng": -89.4675,
    "tier": 3
  },
  {
    "iata": "RHO",
    "name": "Diagoras Airport",
    "city": "Rhodos",
    "country": "Greece",
    "lat": 36.4054,
    "lng": 28.0862,
    "tier": 1
  },
  {
    "iata": "RAO",
    "name": "Leite Lopes Airport",
    "city": "Ribeirao Preto",
    "country": "Brazil",
    "lat": -21.1364,
    "lng": -47.7767,
    "tier": 2
  },
  {
    "iata": "RIB",
    "name": "Capitán Av. Selin Zeitun Lopez Airport",
    "city": "Riberalta",
    "country": "Bolivia",
    "lat": -11.0,
    "lng": -66.0,
    "tier": 3
  },
  {
    "iata": "RCB",
    "name": "Richards Bay Airport",
    "city": "Richard's Bay",
    "country": "South Africa",
    "lat": -28.741,
    "lng": 32.0921,
    "tier": 3
  },
  {
    "iata": "RCM",
    "name": "Richmond Airport",
    "city": "Richmond",
    "country": "Australia",
    "lat": -20.7019,
    "lng": 143.115,
    "tier": 3
  },
  {
    "iata": "RIC",
    "name": "Richmond International Airport",
    "city": "Richmond",
    "country": "United States",
    "lat": 37.5052,
    "lng": -77.3197,
    "tier": 1
  },
  {
    "iata": "RIX",
    "name": "Riga International Airport",
    "city": "Riga",
    "country": "Latvia",
    "lat": 56.9236,
    "lng": 23.9711,
    "tier": 1
  },
  {
    "iata": "YRG",
    "name": "Rigolet Airport",
    "city": "Rigolet",
    "country": "Canada",
    "lat": 54.1797,
    "lng": -58.4575,
    "tier": 3
  },
  {
    "iata": "RJK",
    "name": "Rijeka Airport",
    "city": "Rijeka",
    "country": "Croatia",
    "lat": 45.2169,
    "lng": 14.5703,
    "tier": 2
  },
  {
    "iata": "RMT",
    "name": "Rimatara Airport",
    "city": "Rimatara",
    "country": "French Polynesia",
    "lat": -22.6373,
    "lng": -152.8059,
    "tier": 3
  },
  {
    "iata": "RMI",
    "name": "Federico Fellini International Airport",
    "city": "Rimini",
    "country": "Italy",
    "lat": 44.0203,
    "lng": 12.6117,
    "tier": 3
  },
  {
    "iata": "RBR",
    "name": "Plácido de Castro Airport",
    "city": "Rio Branco",
    "country": "Brazil",
    "lat": -9.8689,
    "lng": -67.8981,
    "tier": 3
  },
  {
    "iata": "GIG",
    "name": "Rio Galeão – Tom Jobim International Airport",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "lat": -22.81,
    "lng": -43.2506,
    "tier": 1
  },
  {
    "iata": "SDU",
    "name": "Santos Dumont Airport",
    "city": "Rio De Janeiro",
    "country": "Brazil",
    "lat": -22.9105,
    "lng": -43.1631,
    "tier": 1
  },
  {
    "iata": "RGL",
    "name": "Piloto Civil N. Fernández Airport",
    "city": "Rio Gallegos",
    "country": "Argentina",
    "lat": -51.6089,
    "lng": -69.3126,
    "tier": 3
  },
  {
    "iata": "RGA",
    "name": "Hermes Quijada International Airport",
    "city": "Rio Grande",
    "country": "Argentina",
    "lat": -53.7777,
    "lng": -67.7494,
    "tier": 3
  },
  {
    "iata": "RCH",
    "name": "Almirante Padilla Airport",
    "city": "Rio Hacha",
    "country": "Colombia",
    "lat": 11.5262,
    "lng": -72.926,
    "tier": 3
  },
  {
    "iata": "RHD",
    "name": "Termas de Río Hondo international Airport",
    "city": "Rio Hondo",
    "country": "Argentina",
    "lat": -27.4966,
    "lng": -64.936,
    "tier": 3
  },
  {
    "iata": "MDE",
    "name": "Jose Maria Córdova International Airport",
    "city": "Rio Negro",
    "country": "Colombia",
    "lat": 6.1645,
    "lng": -75.4231,
    "tier": 1
  },
  {
    "iata": "RVD",
    "name": "General Leite de Castro Airport",
    "city": "Rio Verde",
    "country": "Brazil",
    "lat": -17.8347,
    "lng": -50.9561,
    "tier": 3
  },
  {
    "iata": "RIW",
    "name": "Riverton Regional Airport",
    "city": "Riverton WY",
    "country": "United States",
    "lat": 43.0642,
    "lng": -108.46,
    "tier": 3
  },
  {
    "iata": "RUH",
    "name": "King Khaled International Airport",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "lat": 24.9576,
    "lng": 46.6988,
    "tier": 1
  },
  {
    "iata": "ROA",
    "name": "Roanoke–Blacksburg Regional Airport",
    "city": "Roanoke VA",
    "country": "United States",
    "lat": 37.3255,
    "lng": -79.9754,
    "tier": 2
  },
  {
    "iata": "RTB",
    "name": "Juan Manuel Galvez International Airport",
    "city": "Roatan",
    "country": "Honduras",
    "lat": 16.3168,
    "lng": -86.523,
    "tier": 2
  },
  {
    "iata": "ROC",
    "name": "Greater Rochester International Airport",
    "city": "Rochester",
    "country": "United States",
    "lat": 43.1189,
    "lng": -77.6724,
    "tier": 1
  },
  {
    "iata": "RST",
    "name": "Rochester International Airport",
    "city": "Rochester",
    "country": "United States",
    "lat": 43.9083,
    "lng": -92.5,
    "tier": 3
  },
  {
    "iata": "RSD",
    "name": "Rock Sound Airport",
    "city": "Rock Sound",
    "country": "Bahamas",
    "lat": 24.8951,
    "lng": -76.1769,
    "tier": 3
  },
  {
    "iata": "RKS",
    "name": "Southwest Wyoming Regional Airport",
    "city": "Rock Springs",
    "country": "United States",
    "lat": 41.5942,
    "lng": -109.065,
    "tier": 3
  },
  {
    "iata": "RFD",
    "name": "Chicago Rockford International Airport",
    "city": "Rockford",
    "country": "United States",
    "lat": 42.1954,
    "lng": -89.0972,
    "tier": 3
  },
  {
    "iata": "ROK",
    "name": "Rockhampton Airport",
    "city": "Rockhampton",
    "country": "Australia",
    "lat": -23.3819,
    "lng": 150.475,
    "tier": 3
  },
  {
    "iata": "RKD",
    "name": "Knox County Regional Airport",
    "city": "Rockland",
    "country": "United States",
    "lat": 44.0601,
    "lng": -69.0992,
    "tier": 3
  },
  {
    "iata": "RDZ",
    "name": "Rodez-Marcillac Airport",
    "city": "Rodez",
    "country": "France",
    "lat": 44.4079,
    "lng": 2.4827,
    "tier": 3
  },
  {
    "iata": "RRG",
    "name": "Sir Charles Gaetan Duval Airport",
    "city": "Rodriguez Island",
    "country": "Mauritius",
    "lat": -19.7577,
    "lng": 63.361,
    "tier": 3
  },
  {
    "iata": "ROI",
    "name": "Roi Et Airport",
    "city": "Roi Et",
    "country": "Thailand",
    "lat": 16.1168,
    "lng": 103.774,
    "tier": 3
  },
  {
    "iata": "RMA",
    "name": "Roma Airport",
    "city": "Roma",
    "country": "Australia",
    "lat": -26.545,
    "lng": 148.775,
    "tier": 3
  },
  {
    "iata": "GES",
    "name": "General Santos International Airport",
    "city": "Romblon",
    "country": "Philippines",
    "lat": 6.058,
    "lng": 125.096,
    "tier": 3
  },
  {
    "iata": "CIA",
    "name": "Ciampino–G. B. Pastine International Airport",
    "city": "Rome",
    "country": "Italy",
    "lat": 41.7994,
    "lng": 12.5949,
    "tier": 1
  },
  {
    "iata": "FCO",
    "name": "Leonardo da Vinci–Fiumicino Airport",
    "city": "Rome",
    "country": "Italy",
    "lat": 41.8003,
    "lng": 12.2389,
    "tier": 1
  },
  {
    "iata": "TRS",
    "name": "Trieste–Friuli Venezia Giulia Airport",
    "city": "Ronchi De Legionari",
    "country": "Italy",
    "lat": 45.8275,
    "lng": 13.4722,
    "tier": 2
  },
  {
    "iata": "ROO",
    "name": "Maestro Marinho Franco Airport",
    "city": "Rondonopolis",
    "country": "Brazil",
    "lat": -16.586,
    "lng": -54.7248,
    "tier": 3
  },
  {
    "iata": "RNN",
    "name": "Bornholm Airport",
    "city": "Ronne",
    "country": "Denmark",
    "lat": 55.0633,
    "lng": 14.7596,
    "tier": 3
  },
  {
    "iata": "RNB",
    "name": "Ronneby Airport",
    "city": "Ronneby",
    "country": "Sweden",
    "lat": 56.2667,
    "lng": 15.265,
    "tier": 3
  },
  {
    "iata": "RRS",
    "name": "Røros Airport",
    "city": "Roros",
    "country": "Norway",
    "lat": 62.5784,
    "lng": 11.3423,
    "tier": 3
  },
  {
    "iata": "ROS",
    "name": "Islas Malvinas Airport",
    "city": "Rosario",
    "country": "Argentina",
    "lat": -32.9036,
    "lng": -60.785,
    "tier": 2
  },
  {
    "iata": "ROV",
    "name": "Platov International Airport",
    "city": "Rostov",
    "country": "Russia",
    "lat": 47.4939,
    "lng": 39.9247,
    "tier": 1
  },
  {
    "iata": "ROW",
    "name": "Roswell International Air Center Airport",
    "city": "Roswell",
    "country": "United States",
    "lat": 33.3016,
    "lng": -104.531,
    "tier": 3
  },
  {
    "iata": "ROP",
    "name": "Rota International Airport",
    "city": "Rota",
    "country": "Northern Mariana Islands",
    "lat": 14.1743,
    "lng": 145.243,
    "tier": 3
  },
  {
    "iata": "ROT",
    "name": "Rotorua Regional Airport",
    "city": "Rotorua",
    "country": "New Zealand",
    "lat": -38.1092,
    "lng": 176.317,
    "tier": 3
  },
  {
    "iata": "RTM",
    "name": "Rotterdam The Hague Airport",
    "city": "Rotterdam",
    "country": "Netherlands",
    "lat": 51.9569,
    "lng": 4.4372,
    "tier": 1
  },
  {
    "iata": "RTA",
    "name": "Rotuma Airport",
    "city": "Rotuma",
    "country": "Fiji",
    "lat": -12.4825,
    "lng": 177.071,
    "tier": 3
  },
  {
    "iata": "ZRJ",
    "name": "Round Lake (Weagamow Lake) Airport",
    "city": "Round Lake",
    "country": "Canada",
    "lat": 52.9436,
    "lng": -91.3128,
    "tier": 3
  },
  {
    "iata": "YUY",
    "name": "Rouyn Noranda Airport",
    "city": "Rouyn",
    "country": "Canada",
    "lat": 48.2061,
    "lng": -78.8356,
    "tier": 3
  },
  {
    "iata": "RVN",
    "name": "Rovaniemi Airport",
    "city": "Rovaniemi",
    "country": "Finland",
    "lat": 66.5648,
    "lng": 25.8304,
    "tier": 3
  },
  {
    "iata": "TTQ",
    "name": "Aerotortuguero Airport",
    "city": "Roxana",
    "country": "Costa Rica",
    "lat": 10.42,
    "lng": -83.6095,
    "tier": 3
  },
  {
    "iata": "RXS",
    "name": "Roxas Airport",
    "city": "Roxas City",
    "country": "Philippines",
    "lat": 11.5977,
    "lng": 122.752,
    "tier": 3
  },
  {
    "iata": "RBY",
    "name": "Ruby Airport",
    "city": "Ruby",
    "country": "United States",
    "lat": 64.7272,
    "lng": -155.47,
    "tier": 3
  },
  {
    "iata": "NDU",
    "name": "Rundu Airport",
    "city": "Rundu",
    "country": "Namibia",
    "lat": -17.9565,
    "lng": 19.7194,
    "tier": 3
  },
  {
    "iata": "RUR",
    "name": "Rurutu Airport",
    "city": "Rurutu",
    "country": "French Polynesia",
    "lat": -22.4341,
    "lng": -151.361,
    "tier": 3
  },
  {
    "iata": "RSH",
    "name": "Russian Mission Airport",
    "city": "Russian Mission",
    "country": "United States",
    "lat": 61.7789,
    "lng": -161.3195,
    "tier": 3
  },
  {
    "iata": "RUT",
    "name": "Rutland - Southern Vermont Regional Airport",
    "city": "Rutland",
    "country": "United States",
    "lat": 43.5294,
    "lng": -72.9496,
    "tier": 3
  },
  {
    "iata": "RYG",
    "name": "Moss Airport, Rygge",
    "city": "Rygge",
    "country": "Norway",
    "lat": 59.3788,
    "lng": 10.7854,
    "tier": 1
  },
  {
    "iata": "RZE",
    "name": "Rzeszów-Jasionka Airport",
    "city": "Rzeszow",
    "country": "Poland",
    "lat": 50.11,
    "lng": 22.019,
    "tier": 2
  },
  {
    "iata": "RVK",
    "name": "Rørvik Airport, Ryum",
    "city": "Rørvik",
    "country": "Norway",
    "lat": 64.8383,
    "lng": 11.1461,
    "tier": 3
  },
  {
    "iata": "RET",
    "name": "Røst Airport",
    "city": "Røst",
    "country": "Norway",
    "lat": 67.5278,
    "lng": 12.1033,
    "tier": 3
  },
  {
    "iata": "ISC",
    "name": "St. Mary's Airport",
    "city": "ST MARY\\'S",
    "country": "United Kingdom",
    "lat": 49.9133,
    "lng": -6.2917,
    "tier": 3
  },
  {
    "iata": "SCN",
    "name": "Saarbrücken Airport",
    "city": "Saarbruecken",
    "country": "Germany",
    "lat": 49.2146,
    "lng": 7.1095,
    "tier": 2
  },
  {
    "iata": "SAB",
    "name": "Juancho E. Yrausquin Airport",
    "city": "Saba",
    "country": "Netherlands Antilles",
    "lat": 17.645,
    "lng": -63.22,
    "tier": 3
  },
  {
    "iata": "AFZ",
    "name": "Sabzevar National Airport",
    "city": "Sabzevar",
    "country": "Iran",
    "lat": 36.1681,
    "lng": 57.5952,
    "tier": 3
  },
  {
    "iata": "HIN",
    "name": "Sacheon Air Base/Airport",
    "city": "Sacheon",
    "country": "South Korea",
    "lat": 35.0886,
    "lng": 128.0717,
    "tier": 3
  },
  {
    "iata": "ZPB",
    "name": "Sachigo Lake Airport",
    "city": "Sachigo Lake",
    "country": "Canada",
    "lat": 53.8911,
    "lng": -92.1964,
    "tier": 3
  },
  {
    "iata": "YSY",
    "name": "Sachs Harbour (David Nasogaluak Jr. Saaryuaq) Airport",
    "city": "Sachs Harbour",
    "country": "Canada",
    "lat": 71.9939,
    "lng": -125.243,
    "tier": 3
  },
  {
    "iata": "SMF",
    "name": "Sacramento International Airport",
    "city": "Sacramento",
    "country": "United States",
    "lat": 38.6954,
    "lng": -121.591,
    "tier": 1
  },
  {
    "iata": "HSG",
    "name": "Saga Airport",
    "city": "Saga",
    "country": "Japan",
    "lat": 33.1497,
    "lng": 130.302,
    "tier": 3
  },
  {
    "iata": "MBS",
    "name": "MBS International Airport",
    "city": "Saginaw",
    "country": "United States",
    "lat": 43.5329,
    "lng": -84.0796,
    "tier": 3
  },
  {
    "iata": "SPD",
    "name": "Saidpur Airport",
    "city": "Saidpur",
    "country": "Bangladesh",
    "lat": 25.7592,
    "lng": 88.9089,
    "tier": 3
  },
  {
    "iata": "STC",
    "name": "St Cloud Regional Airport",
    "city": "Saint Cloud",
    "country": "United States",
    "lat": 45.5466,
    "lng": -94.0599,
    "tier": 3
  },
  {
    "iata": "SGU",
    "name": "St George Municipal Airport",
    "city": "Saint George",
    "country": "United States",
    "lat": 37.0364,
    "lng": -113.5103,
    "tier": 3
  },
  {
    "iata": "SMS",
    "name": "Sainte Marie Airport",
    "city": "Sainte Marie",
    "country": "Madagascar",
    "lat": -17.0939,
    "lng": 49.8158,
    "tier": 3
  },
  {
    "iata": "SPN",
    "name": "Saipan International Airport",
    "city": "Saipan",
    "country": "Northern Mariana Islands",
    "lat": 15.119,
    "lng": 145.729,
    "tier": 2
  },
  {
    "iata": "SNO",
    "name": "Sakon Nakhon Airport",
    "city": "Sakon Nakhon",
    "country": "Thailand",
    "lat": 17.1951,
    "lng": 104.119,
    "tier": 3
  },
  {
    "iata": "SLL",
    "name": "Salalah Airport",
    "city": "Salalah",
    "country": "Oman",
    "lat": 17.0387,
    "lng": 54.0913,
    "tier": 2
  },
  {
    "iata": "SLM",
    "name": "Salamanca Airport",
    "city": "Salamanca",
    "country": "Spain",
    "lat": 40.9521,
    "lng": -5.502,
    "tier": 3
  },
  {
    "iata": "SLY",
    "name": "Salekhard Airport",
    "city": "Salekhard",
    "country": "Russia",
    "lat": 66.5908,
    "lng": 66.611,
    "tier": 2
  },
  {
    "iata": "SLN",
    "name": "Salina Municipal Airport",
    "city": "Salina",
    "country": "United States",
    "lat": 38.791,
    "lng": -97.6522,
    "tier": 3
  },
  {
    "iata": "SBY",
    "name": "Salisbury Ocean City Wicomico Regional Airport",
    "city": "Salisbury",
    "country": "United States",
    "lat": 38.3405,
    "lng": -75.5103,
    "tier": 3
  },
  {
    "iata": "YZG",
    "name": "Salluit Airport",
    "city": "Salluit",
    "country": "Canada",
    "lat": 62.1794,
    "lng": -75.6672,
    "tier": 3
  },
  {
    "iata": "SLX",
    "name": "Salt Cay Airport",
    "city": "Salt Cay",
    "country": "Turks and Caicos Islands",
    "lat": 21.333,
    "lng": -71.2,
    "tier": 3
  },
  {
    "iata": "SLC",
    "name": "Salt Lake City International Airport",
    "city": "Salt Lake City",
    "country": "United States",
    "lat": 40.7884,
    "lng": -111.978,
    "tier": 1
  },
  {
    "iata": "SLA",
    "name": "Martin Miguel De Guemes International Airport",
    "city": "Salta",
    "country": "Argentina",
    "lat": -24.856,
    "lng": -65.4862,
    "tier": 2
  },
  {
    "iata": "SLW",
    "name": "Plan De Guadalupe International Airport",
    "city": "Saltillo",
    "country": "Mexico",
    "lat": 25.5495,
    "lng": -100.929,
    "tier": 3
  },
  {
    "iata": "SSA",
    "name": "Deputado Luiz Eduardo Magalhães International Airport",
    "city": "Salvador",
    "country": "Brazil",
    "lat": -12.9086,
    "lng": -38.3225,
    "tier": 1
  },
  {
    "iata": "SZG",
    "name": "Salzburg Airport",
    "city": "Salzburg",
    "country": "Austria",
    "lat": 47.7933,
    "lng": 13.0043,
    "tier": 1
  },
  {
    "iata": "AZS",
    "name": "Samaná El Catey International Airport",
    "city": "Samana",
    "country": "Dominican Republic",
    "lat": 19.267,
    "lng": -69.742,
    "tier": 2
  },
  {
    "iata": "KUF",
    "name": "Kurumoch International Airport",
    "city": "Samara",
    "country": "Russia",
    "lat": 53.5049,
    "lng": 50.1643,
    "tier": 1
  },
  {
    "iata": "SKD",
    "name": "Samarkand Airport",
    "city": "Samarkand",
    "country": "Uzbekistan",
    "lat": 39.7005,
    "lng": 66.9838,
    "tier": 2
  },
  {
    "iata": "SVB",
    "name": "Sambava Airport",
    "city": "Sambava",
    "country": "Madagascar",
    "lat": -14.2786,
    "lng": 50.1747,
    "tier": 3
  },
  {
    "iata": "UAS",
    "name": "Buffalo Spring",
    "city": "Samburu South",
    "country": "Kenya",
    "lat": 0.5306,
    "lng": 37.5342,
    "tier": 3
  },
  {
    "iata": "SMI",
    "name": "Samos Airport",
    "city": "Samos",
    "country": "Greece",
    "lat": 37.69,
    "lng": 26.9117,
    "tier": 2
  },
  {
    "iata": "ADZ",
    "name": "Gustavo Rojas Pinilla International Airport",
    "city": "San Andres Island",
    "country": "Colombia",
    "lat": 12.5836,
    "lng": -81.7112,
    "tier": 2
  },
  {
    "iata": "SJT",
    "name": "San Angelo Regional Mathis Field",
    "city": "San Angelo",
    "country": "United States",
    "lat": 31.3577,
    "lng": -100.496,
    "tier": 3
  },
  {
    "iata": "SAT",
    "name": "San Antonio International Airport",
    "city": "San Antonio",
    "country": "United States",
    "lat": 29.5337,
    "lng": -98.4698,
    "tier": 1
  },
  {
    "iata": "SVZ",
    "name": "San Antonio Del Tachira Airport",
    "city": "San Antonio",
    "country": "Venezuela",
    "lat": 7.8408,
    "lng": -72.4397,
    "tier": 3
  },
  {
    "iata": "BRC",
    "name": "San Carlos De Bariloche Airport",
    "city": "San Carlos De Bariloche",
    "country": "Argentina",
    "lat": -41.1512,
    "lng": -71.1575,
    "tier": 2
  },
  {
    "iata": "SCY",
    "name": "San Cristóbal Airport",
    "city": "San Cristóbal",
    "country": "Ecuador",
    "lat": -0.9102,
    "lng": -89.6174,
    "tier": 3
  },
  {
    "iata": "SAN",
    "name": "San Diego International Airport",
    "city": "San Diego",
    "country": "United States",
    "lat": 32.7336,
    "lng": -117.19,
    "tier": 1
  },
  {
    "iata": "SFO",
    "name": "San Francisco International Airport",
    "city": "San Francisco",
    "country": "United States",
    "lat": 37.619,
    "lng": -122.375,
    "tier": 1
  },
  {
    "iata": "SJC",
    "name": "Norman Y. Mineta San Jose International Airport",
    "city": "San Jose",
    "country": "United States",
    "lat": 37.3626,
    "lng": -121.929,
    "tier": 1
  },
  {
    "iata": "SJI",
    "name": "San Jose Airport",
    "city": "San Jose",
    "country": "Philippines",
    "lat": 12.3615,
    "lng": 121.047,
    "tier": 3
  },
  {
    "iata": "SJO",
    "name": "Juan Santamaria International Airport",
    "city": "San Jose",
    "country": "Costa Rica",
    "lat": 9.9939,
    "lng": -84.2088,
    "tier": 1
  },
  {
    "iata": "SYQ",
    "name": "Tobias Bolanos International Airport",
    "city": "San Jose",
    "country": "Costa Rica",
    "lat": 9.9571,
    "lng": -84.1398,
    "tier": 3
  },
  {
    "iata": "SJD",
    "name": "Los Cabos International Airport",
    "city": "San Jose Del Cabo",
    "country": "Mexico",
    "lat": 23.1518,
    "lng": -109.721,
    "tier": 1
  },
  {
    "iata": "SJE",
    "name": "Jorge E. Gonzalez Torres Airport",
    "city": "San Jose Del Guaviare",
    "country": "Colombia",
    "lat": 2.5797,
    "lng": -72.6394,
    "tier": 3
  },
  {
    "iata": "SJU",
    "name": "Luis Munoz Marin International Airport",
    "city": "San Juan",
    "country": "Puerto Rico",
    "lat": 18.4394,
    "lng": -66.0018,
    "tier": 1
  },
  {
    "iata": "UAQ",
    "name": "Domingo Faustino Sarmiento Airport",
    "city": "San Juan",
    "country": "Argentina",
    "lat": -31.5715,
    "lng": -68.4182,
    "tier": 3
  },
  {
    "iata": "LUQ",
    "name": "Brigadier Mayor D Cesar Raul Ojeda Airport",
    "city": "San Luis",
    "country": "Argentina",
    "lat": -33.2732,
    "lng": -66.3564,
    "tier": 3
  },
  {
    "iata": "SBP",
    "name": "San Luis County Regional Airport",
    "city": "San Luis Obispo",
    "country": "United States",
    "lat": 35.2368,
    "lng": -120.642,
    "tier": 3
  },
  {
    "iata": "SLP",
    "name": "Ponciano Arriaga International Airport",
    "city": "San Luis Potosi",
    "country": "Mexico",
    "lat": 22.2543,
    "lng": -100.931,
    "tier": 2
  },
  {
    "iata": "CPC",
    "name": "Aviador C. Campos Airport",
    "city": "San Martin Des Andes",
    "country": "Argentina",
    "lat": -40.0754,
    "lng": -71.1373,
    "tier": 3
  },
  {
    "iata": "SPR",
    "name": "San Pedro Airport",
    "city": "San Pedro",
    "country": "Belize",
    "lat": 17.9139,
    "lng": -87.9711,
    "tier": 3
  },
  {
    "iata": "SAP",
    "name": "Ramón Villeda Morales International Airport",
    "city": "San Pedro Sula",
    "country": "Honduras",
    "lat": 15.4526,
    "lng": -87.9236,
    "tier": 2
  },
  {
    "iata": "AFA",
    "name": "Suboficial Ay Santiago Germano Airport",
    "city": "San Rafael",
    "country": "Argentina",
    "lat": -34.5883,
    "lng": -68.4039,
    "tier": 3
  },
  {
    "iata": "SAL",
    "name": "Monseñor Óscar Arnulfo Romero International Airport",
    "city": "San Salvador",
    "country": "El Salvador",
    "lat": 13.4409,
    "lng": -89.0557,
    "tier": 1
  },
  {
    "iata": "EAS",
    "name": "San Sebastian Airport",
    "city": "San Sebastian",
    "country": "Spain",
    "lat": 43.3565,
    "lng": -1.7906,
    "tier": 3
  },
  {
    "iata": "SOM",
    "name": "San Tomé Airport",
    "city": "San Tome",
    "country": "Venezuela",
    "lat": 8.9451,
    "lng": -64.1511,
    "tier": 3
  },
  {
    "iata": "SVI",
    "name": "Eduardo Falla Solano Airport",
    "city": "San Vincente De Caguan",
    "country": "Colombia",
    "lat": 2.1522,
    "lng": -74.7663,
    "tier": 3
  },
  {
    "iata": "SAH",
    "name": "Sana'a International Airport",
    "city": "Sanaa",
    "country": "Yemen",
    "lat": 15.4763,
    "lng": 44.2197,
    "tier": 1
  },
  {
    "iata": "SDG",
    "name": "Sanandaj Airport",
    "city": "Sanandaj",
    "country": "Iran",
    "lat": 35.2459,
    "lng": 47.0092,
    "tier": 3
  },
  {
    "iata": "SDP",
    "name": "Sand Point Airport",
    "city": "Sand Point",
    "country": "United States",
    "lat": 55.315,
    "lng": -160.523,
    "tier": 3
  },
  {
    "iata": "SDK",
    "name": "Sandakan Airport",
    "city": "Sandakan",
    "country": "Malaysia",
    "lat": 5.9009,
    "lng": 118.059,
    "tier": 2
  },
  {
    "iata": "SDN",
    "name": "Sandane Airport (Anda)",
    "city": "Sandane",
    "country": "Norway",
    "lat": 61.83,
    "lng": 6.1058,
    "tier": 3
  },
  {
    "iata": "NDY",
    "name": "Sanday Airport",
    "city": "Sanday",
    "country": "United Kingdom",
    "lat": 59.2503,
    "lng": -2.5767,
    "tier": 3
  },
  {
    "iata": "TRF",
    "name": "Sandefjord Airport, Torp",
    "city": "Sandefjord",
    "country": "Norway",
    "lat": 59.1867,
    "lng": 10.2586,
    "tier": 1
  },
  {
    "iata": "SSJ",
    "name": "Sandnessjøen Airport (Stokka)",
    "city": "Sandnessjoen",
    "country": "Norway",
    "lat": 65.9568,
    "lng": 12.4689,
    "tier": 3
  },
  {
    "iata": "YZP",
    "name": "Sandspit Airport",
    "city": "Sandspit",
    "country": "Canada",
    "lat": 53.2543,
    "lng": -131.814,
    "tier": 3
  },
  {
    "iata": "ZSJ",
    "name": "Sandy Lake Airport",
    "city": "Sandy Lake",
    "country": "Canada",
    "lat": 53.0642,
    "lng": -93.3444,
    "tier": 3
  },
  {
    "iata": "SFB",
    "name": "Orlando Sanford International Airport",
    "city": "Sanford",
    "country": "United States",
    "lat": 28.7776,
    "lng": -81.2375,
    "tier": 1
  },
  {
    "iata": "EAE",
    "name": "Siwo Airport",
    "city": "Sangafa",
    "country": "Vanuatu",
    "lat": -17.0903,
    "lng": 168.343,
    "tier": 3
  },
  {
    "iata": "SUG",
    "name": "Surigao Airport",
    "city": "Sangley Point",
    "country": "Philippines",
    "lat": 9.7558,
    "lng": 125.4809,
    "tier": 3
  },
  {
    "iata": "YSK",
    "name": "Sanikiluaq Airport",
    "city": "Sanikiluaq",
    "country": "Canada",
    "lat": 56.5378,
    "lng": -79.2467,
    "tier": 3
  },
  {
    "iata": "GNY",
    "name": "Şanlıurfa GAP Airport",
    "city": "Sanliurfa",
    "country": "Turkey",
    "lat": 37.4457,
    "lng": 38.8956,
    "tier": 3
  },
  {
    "iata": "NNB",
    "name": "Santa Ana Airport",
    "city": "Santa Ana",
    "country": "Solomon Islands",
    "lat": -10.848,
    "lng": 162.4541,
    "tier": 3
  },
  {
    "iata": "SNA",
    "name": "John Wayne Airport-Orange County Airport",
    "city": "Santa Ana",
    "country": "United States",
    "lat": 33.6757,
    "lng": -117.868,
    "tier": 1
  },
  {
    "iata": "SNV",
    "name": "Santa Elena de Uairen Airport",
    "city": "Santa Ana De Uairen",
    "country": "Venezuela",
    "lat": 4.555,
    "lng": -61.15,
    "tier": 3
  },
  {
    "iata": "SBA",
    "name": "Santa Barbara Municipal Airport",
    "city": "Santa Barbara",
    "country": "United States",
    "lat": 34.4262,
    "lng": -119.84,
    "tier": 2
  },
  {
    "iata": "SNU",
    "name": "Abel Santamaria Airport",
    "city": "Santa Clara",
    "country": "Cuba",
    "lat": 22.4922,
    "lng": -79.9436,
    "tier": 2
  },
  {
    "iata": "SRZ",
    "name": "El Trompillo Airport",
    "city": "Santa Cruz",
    "country": "Bolivia",
    "lat": -17.8116,
    "lng": -63.1715,
    "tier": 2
  },
  {
    "iata": "VVI",
    "name": "Viru Viru International Airport",
    "city": "Santa Cruz",
    "country": "Bolivia",
    "lat": -17.6448,
    "lng": -63.1354,
    "tier": 2
  },
  {
    "iata": "SPC",
    "name": "La Palma Airport",
    "city": "Santa Cruz De La Palma",
    "country": "Spain",
    "lat": 28.6265,
    "lng": -17.7556,
    "tier": 2
  },
  {
    "iata": "SCZ",
    "name": "Santa Cruz/Graciosa Bay/Luova Airport",
    "city": "Santa Cruz/Graciosa Bay/Luova",
    "country": "Solomon Islands",
    "lat": -10.7203,
    "lng": 165.795,
    "tier": 3
  },
  {
    "iata": "SAF",
    "name": "Santa Fe Municipal Airport",
    "city": "Santa Fe",
    "country": "United States",
    "lat": 35.6171,
    "lng": -106.089,
    "tier": 2
  },
  {
    "iata": "SFN",
    "name": "Sauce Viejo Airport",
    "city": "Santa Fe",
    "country": "Argentina",
    "lat": -31.7117,
    "lng": -60.8117,
    "tier": 3
  },
  {
    "iata": "IRZ",
    "name": "Tapuruquara Airport",
    "city": "Santa Isabel do Rio Negro",
    "country": "Brazil",
    "lat": -0.3786,
    "lng": -64.9923,
    "tier": 3
  },
  {
    "iata": "RIA",
    "name": "Santa Maria Airport",
    "city": "Santa Maria",
    "country": "Brazil",
    "lat": -29.7114,
    "lng": -53.6882,
    "tier": 3
  },
  {
    "iata": "SMX",
    "name": "Santa Maria Pub/Capt G Allan Hancock Field",
    "city": "Santa Maria",
    "country": "United States",
    "lat": 34.8989,
    "lng": -120.457,
    "tier": 3
  },
  {
    "iata": "SMA",
    "name": "Santa Maria Airport",
    "city": "Santa Maria (island)",
    "country": "Portugal",
    "lat": 36.9714,
    "lng": -25.1706,
    "tier": 3
  },
  {
    "iata": "SMR",
    "name": "Simón Bolívar International Airport",
    "city": "Santa Marta",
    "country": "Colombia",
    "lat": 11.1196,
    "lng": -74.2306,
    "tier": 3
  },
  {
    "iata": "ETR",
    "name": "Santa Rosa International Airport",
    "city": "Santa Rosa",
    "country": "Ecuador",
    "lat": -3.442,
    "lng": -79.997,
    "tier": 3
  },
  {
    "iata": "RSA",
    "name": "Santa Rosa Airport",
    "city": "Santa Rosa",
    "country": "Argentina",
    "lat": -36.5883,
    "lng": -64.2757,
    "tier": 3
  },
  {
    "iata": "SRA",
    "name": "Santa Rosa Airport",
    "city": "Santa Rosa",
    "country": "Brazil",
    "lat": -27.9067,
    "lng": -54.5204,
    "tier": 3
  },
  {
    "iata": "STS",
    "name": "Charles M. Schulz Sonoma County Airport",
    "city": "Santa Rosa",
    "country": "United States",
    "lat": 38.509,
    "lng": -122.813,
    "tier": 2
  },
  {
    "iata": "STZ",
    "name": "Santa Terezinha Airport",
    "city": "Santa Terezinha",
    "country": "Brazil",
    "lat": -10.4647,
    "lng": -50.5186,
    "tier": 3
  },
  {
    "iata": "CMP",
    "name": "Santana do Araguaia Airport",
    "city": "Santana do Araguaia",
    "country": "Brazil",
    "lat": -9.32,
    "lng": -50.3285,
    "tier": 3
  },
  {
    "iata": "SDR",
    "name": "Santander Airport",
    "city": "Santander",
    "country": "Spain",
    "lat": 43.4271,
    "lng": -3.82,
    "tier": 2
  },
  {
    "iata": "STM",
    "name": "Maestro Wilson Fonseca Airport",
    "city": "Santarem",
    "country": "Brazil",
    "lat": -2.4247,
    "lng": -54.7858,
    "tier": 2
  },
  {
    "iata": "SCL",
    "name": "Comodoro Arturo Merino Benítez International Airport",
    "city": "Santiago",
    "country": "Chile",
    "lat": -33.393,
    "lng": -70.7858,
    "tier": 1
  },
  {
    "iata": "SCQ",
    "name": "Santiago de Compostela Airport",
    "city": "Santiago",
    "country": "Spain",
    "lat": 42.8963,
    "lng": -8.4151,
    "tier": 1
  },
  {
    "iata": "STI",
    "name": "Cibao International Airport",
    "city": "Santiago",
    "country": "Dominican Republic",
    "lat": 19.4061,
    "lng": -70.6047,
    "tier": 2
  },
  {
    "iata": "SCU",
    "name": "Antonio Maceo International Airport",
    "city": "Santiago De Cuba",
    "country": "Cuba",
    "lat": 19.9698,
    "lng": -75.8354,
    "tier": 3
  },
  {
    "iata": "SDE",
    "name": "Vicecomodoro Angel D. La Paz Aragonés Airport",
    "city": "Santiago Del Estero",
    "country": "Argentina",
    "lat": -27.7656,
    "lng": -64.31,
    "tier": 3
  },
  {
    "iata": "SON",
    "name": "Santo Pekoa International Airport",
    "city": "Santo",
    "country": "Vanuatu",
    "lat": -15.505,
    "lng": 167.22,
    "tier": 2
  },
  {
    "iata": "GEL",
    "name": "Santo Ângelo Airport",
    "city": "Santo Angelo",
    "country": "Brazil",
    "lat": -28.2817,
    "lng": -54.1691,
    "tier": 3
  },
  {
    "iata": "SDQ",
    "name": "Las Américas International Airport",
    "city": "Santo Domingo",
    "country": "Dominican Republic",
    "lat": 18.4297,
    "lng": -69.6689,
    "tier": 1
  },
  {
    "iata": "STD",
    "name": "Mayor Buenaventura Vivas International Airport",
    "city": "Santo Domingo",
    "country": "Venezuela",
    "lat": 7.5654,
    "lng": -72.0351,
    "tier": 3
  },
  {
    "iata": "SYX",
    "name": "Sanya Phoenix International Airport",
    "city": "Sanya",
    "country": "China",
    "lat": 18.3029,
    "lng": 109.412,
    "tier": 1
  },
  {
    "iata": "SXO",
    "name": "São Félix do Araguaia Airport",
    "city": "Sao Felix do Araguaia",
    "country": "Brazil",
    "lat": -11.6324,
    "lng": -50.6896,
    "tier": 3
  },
  {
    "iata": "SXX",
    "name": "São Félix do Xingu Airport",
    "city": "Sao Felix do Xingu",
    "country": "Brazil",
    "lat": -6.6413,
    "lng": -51.9523,
    "tier": 3
  },
  {
    "iata": "SFL",
    "name": "São Filipe Airport",
    "city": "Sao Filipe, Fogo Island",
    "country": "Cape Verde",
    "lat": 14.885,
    "lng": -24.48,
    "tier": 3
  },
  {
    "iata": "SJL",
    "name": "São Gabriel da Cachoeira Airport",
    "city": "Sao Gabriel",
    "country": "Brazil",
    "lat": -0.1484,
    "lng": -66.9855,
    "tier": 3
  },
  {
    "iata": "SJZ",
    "name": "São Jorge Airport",
    "city": "Sao Jorge Island",
    "country": "Portugal",
    "lat": 38.6655,
    "lng": -28.1758,
    "tier": 3
  },
  {
    "iata": "SJP",
    "name": "Prof. Eribelto Manoel Reino State Airport",
    "city": "Sao Jose Do Rio Preto",
    "country": "Brazil",
    "lat": -20.8166,
    "lng": -49.4065,
    "tier": 2
  },
  {
    "iata": "SJK",
    "name": "Professor Urbano Ernesto Stumpf Airport",
    "city": "Sao Jose Dos Campos",
    "country": "Brazil",
    "lat": -23.2292,
    "lng": -45.8615,
    "tier": 3
  },
  {
    "iata": "SLZ",
    "name": "Marechal Cunha Machado International Airport",
    "city": "Sao Luis",
    "country": "Brazil",
    "lat": -2.5854,
    "lng": -44.2341,
    "tier": 2
  },
  {
    "iata": "SNE",
    "name": "Preguiça Airport",
    "city": "Sao Nocolau Island",
    "country": "Cape Verde",
    "lat": 16.5884,
    "lng": -24.2847,
    "tier": 3
  },
  {
    "iata": "CGH",
    "name": "Congonhas Airport",
    "city": "Sao Paulo",
    "country": "Brazil",
    "lat": -23.6261,
    "lng": -46.6564,
    "tier": 1
  },
  {
    "iata": "GRU",
    "name": "Guarulhos - Governador André Franco Montoro International Airport",
    "city": "Sao Paulo",
    "country": "Brazil",
    "lat": -23.4356,
    "lng": -46.4731,
    "tier": 1
  },
  {
    "iata": "OLC",
    "name": "Senadora Eunice Micheles Airport",
    "city": "Sao Paulo de Olivenca",
    "country": "Brazil",
    "lat": -3.4679,
    "lng": -68.9204,
    "tier": 3
  },
  {
    "iata": "TMS",
    "name": "São Tomé International Airport",
    "city": "Sao Tome",
    "country": "Sao Tome and Principe",
    "lat": 0.3782,
    "lng": 6.7122,
    "tier": 3
  },
  {
    "iata": "VXE",
    "name": "São Pedro Airport",
    "city": "Sao Vicente Island",
    "country": "Cape Verde",
    "lat": 16.8332,
    "lng": -25.0553,
    "tier": 2
  },
  {
    "iata": "CTS",
    "name": "New Chitose Airport",
    "city": "Sapporo",
    "country": "Japan",
    "lat": 42.7752,
    "lng": 141.692,
    "tier": 1
  },
  {
    "iata": "SJJ",
    "name": "Sarajevo International Airport",
    "city": "Sarajevo",
    "country": "Bosnia and Herzegovina",
    "lat": 43.8246,
    "lng": 18.3315,
    "tier": 2
  },
  {
    "iata": "SLK",
    "name": "Adirondack Regional Airport",
    "city": "Saranac Lake",
    "country": "United States",
    "lat": 44.3853,
    "lng": -74.2062,
    "tier": 3
  },
  {
    "iata": "SKX",
    "name": "Saransk Airport",
    "city": "Saransk",
    "country": "Russia",
    "lat": 54.1251,
    "lng": 45.2123,
    "tier": 3
  },
  {
    "iata": "SRQ",
    "name": "Sarasota Bradenton International Airport",
    "city": "Sarasota",
    "country": "United States",
    "lat": 27.3954,
    "lng": -82.5544,
    "tier": 2
  },
  {
    "iata": "RTW",
    "name": "Saratov Central Airport",
    "city": "Saratov",
    "country": "Russia",
    "lat": 51.565,
    "lng": 46.0467,
    "tier": 3
  },
  {
    "iata": "RVE",
    "name": "Los Colonizadores Airport",
    "city": "Saravena",
    "country": "Colombia",
    "lat": 6.9519,
    "lng": -71.8572,
    "tier": 3
  },
  {
    "iata": "YZR",
    "name": "Chris Hadfield Airport",
    "city": "Sarnia",
    "country": "Canada",
    "lat": 42.9994,
    "lng": -82.3089,
    "tier": 3
  },
  {
    "iata": "YXE",
    "name": "Saskatoon John G. Diefenbaker International Airport",
    "city": "Saskatoon",
    "country": "Canada",
    "lat": 52.1708,
    "lng": -106.7,
    "tier": 2
  },
  {
    "iata": "SUJ",
    "name": "Satu Mare Airport",
    "city": "Satu Mare",
    "country": "Romania",
    "lat": 47.7033,
    "lng": 22.8857,
    "tier": 3
  },
  {
    "iata": "YAM",
    "name": "Sault Ste Marie Airport",
    "city": "Sault Sainte Marie",
    "country": "Canada",
    "lat": 46.485,
    "lng": -84.5094,
    "tier": 3
  },
  {
    "iata": "CIU",
    "name": "Chippewa County International Airport",
    "city": "Sault Ste Marie",
    "country": "United States",
    "lat": 46.2508,
    "lng": -84.4724,
    "tier": 3
  },
  {
    "iata": "SXK",
    "name": "Saumlaki/Olilit Airport",
    "city": "Saumlaki",
    "country": "Indonesia",
    "lat": -7.9886,
    "lng": 131.306,
    "tier": 3
  },
  {
    "iata": "VHC",
    "name": "Saurimo Airport",
    "city": "Saurimo",
    "country": "Angola",
    "lat": -9.6891,
    "lng": 20.4319,
    "tier": 3
  },
  {
    "iata": "SAV",
    "name": "Savannah Hilton Head International Airport",
    "city": "Savannah",
    "country": "United States",
    "lat": 32.1276,
    "lng": -81.2021,
    "tier": 2
  },
  {
    "iata": "ZVK",
    "name": "Savannakhet Airport",
    "city": "Savannakhet",
    "country": "Laos",
    "lat": 16.5566,
    "lng": 104.76,
    "tier": 3
  },
  {
    "iata": "SVL",
    "name": "Savonlinna Airport",
    "city": "Savonlinna",
    "country": "Finland",
    "lat": 61.9431,
    "lng": 28.9451,
    "tier": 3
  },
  {
    "iata": "SVA",
    "name": "Savoonga Airport",
    "city": "Savoonga",
    "country": "United States",
    "lat": 63.6864,
    "lng": -170.493,
    "tier": 3
  },
  {
    "iata": "SVU",
    "name": "Savusavu Airport",
    "city": "Savusavu",
    "country": "Fiji",
    "lat": -16.8028,
    "lng": 179.341,
    "tier": 3
  },
  {
    "iata": "GXF",
    "name": "Sayun International Airport",
    "city": "Sayun Intl",
    "country": "Yemen",
    "lat": 15.9661,
    "lng": 48.7883,
    "tier": 3
  },
  {
    "iata": "SCM",
    "name": "Scammon Bay Airport",
    "city": "Scammon Bay",
    "country": "United States",
    "lat": 61.8453,
    "lng": -165.571,
    "tier": 3
  },
  {
    "iata": "TAB",
    "name": "Tobago-Crown Point Airport",
    "city": "Scarborough",
    "country": "Trinidad and Tobago",
    "lat": 11.1497,
    "lng": -60.8322,
    "tier": 3
  },
  {
    "iata": "YKL",
    "name": "Schefferville Airport",
    "city": "Schefferville",
    "country": "Canada",
    "lat": 54.8053,
    "lng": -66.8053,
    "tier": 3
  },
  {
    "iata": "BFF",
    "name": "Western Neb. Rgnl/William B. Heilig Airport",
    "city": "Scottsbluff",
    "country": "United States",
    "lat": 41.874,
    "lng": -103.596,
    "tier": 3
  },
  {
    "iata": "AVP",
    "name": "Wilkes Barre Scranton International Airport",
    "city": "Scranton",
    "country": "United States",
    "lat": 41.3385,
    "lng": -75.7234,
    "tier": 2
  },
  {
    "iata": "BFI",
    "name": "Boeing Field King County International Airport",
    "city": "Seattle",
    "country": "United States",
    "lat": 47.53,
    "lng": -122.302,
    "tier": 3
  },
  {
    "iata": "SEA",
    "name": "Seattle Tacoma International Airport",
    "city": "Seattle",
    "country": "United States",
    "lat": 47.449,
    "lng": -122.309,
    "tier": 1
  },
  {
    "iata": "EGM",
    "name": "Sege Airport",
    "city": "Sege",
    "country": "Solomon Islands",
    "lat": -8.5789,
    "lng": 157.876,
    "tier": 3
  },
  {
    "iata": "WLK",
    "name": "Selawik Airport",
    "city": "Selawik",
    "country": "United States",
    "lat": 66.6001,
    "lng": -159.986,
    "tier": 3
  },
  {
    "iata": "SRG",
    "name": "Achmad Yani Airport",
    "city": "Semarang",
    "country": "Indonesia",
    "lat": -6.9727,
    "lng": 110.375,
    "tier": 2
  },
  {
    "iata": "PLX",
    "name": "Semipalatinsk Airport",
    "city": "Semiplatinsk",
    "country": "Kazakhstan",
    "lat": 50.3513,
    "lng": 80.2344,
    "tier": 3
  },
  {
    "iata": "SDJ",
    "name": "Sendai Airport",
    "city": "Sendai",
    "country": "Japan",
    "lat": 38.1397,
    "lng": 140.917,
    "tier": 1
  },
  {
    "iata": "GMP",
    "name": "Gimpo International Airport",
    "city": "Seoul",
    "country": "South Korea",
    "lat": 37.5583,
    "lng": 126.791,
    "tier": 1
  },
  {
    "iata": "ICN",
    "name": "Incheon International Airport",
    "city": "Seoul",
    "country": "South Korea",
    "lat": 37.4691,
    "lng": 126.451,
    "tier": 1
  },
  {
    "iata": "YZV",
    "name": "Sept-Îles Airport",
    "city": "Sept-iles",
    "country": "Canada",
    "lat": 50.2233,
    "lng": -66.2656,
    "tier": 2
  },
  {
    "iata": "QSF",
    "name": "Ain Arnat Airport",
    "city": "Setif",
    "country": "Algeria",
    "lat": 36.1781,
    "lng": 5.3245,
    "tier": 2
  },
  {
    "iata": "UKS",
    "name": "Belbek Airport",
    "city": "Sevastopol",
    "country": "Ukraine",
    "lat": 44.689,
    "lng": 33.571,
    "tier": 3
  },
  {
    "iata": "SVQ",
    "name": "Sevilla Airport",
    "city": "Sevilla",
    "country": "Spain",
    "lat": 37.418,
    "lng": -5.8931,
    "tier": 1
  },
  {
    "iata": "SFA",
    "name": "Sfax Thyna International Airport",
    "city": "Sfax",
    "country": "Tunisia",
    "lat": 34.718,
    "lng": 10.691,
    "tier": 2
  },
  {
    "iata": "SHX",
    "name": "Shageluk Airport",
    "city": "Shageluk",
    "country": "United States",
    "lat": 62.6923,
    "lng": -159.569,
    "tier": 3
  },
  {
    "iata": "EKS",
    "name": "Shakhtyorsk Airport",
    "city": "Shakhtyorsk",
    "country": "Russia",
    "lat": 49.1903,
    "lng": 142.083,
    "tier": 3
  },
  {
    "iata": "SKK",
    "name": "Shaktoolik Airport",
    "city": "Shaktoolik",
    "country": "United States",
    "lat": 64.3711,
    "lng": -161.224,
    "tier": 3
  },
  {
    "iata": "PVG",
    "name": "Shanghai Pudong International Airport",
    "city": "Shanghai",
    "country": "China",
    "lat": 31.1434,
    "lng": 121.805,
    "tier": 1
  },
  {
    "iata": "SHA",
    "name": "Shanghai Hongqiao International Airport",
    "city": "Shanghai",
    "country": "China",
    "lat": 31.1979,
    "lng": 121.336,
    "tier": 1
  },
  {
    "iata": "DIG",
    "name": "Diqing Airport",
    "city": "Shangri-La",
    "country": "China",
    "lat": 27.7936,
    "lng": 99.6772,
    "tier": 2
  },
  {
    "iata": "SNN",
    "name": "Shannon Airport",
    "city": "Shannon",
    "country": "Ireland",
    "lat": 52.702,
    "lng": -8.9248,
    "tier": 1
  },
  {
    "iata": "SWA",
    "name": "Jieyang Chaoshan International Airport",
    "city": "Shantou",
    "country": "China",
    "lat": 23.552,
    "lng": 116.5033,
    "tier": 1
  },
  {
    "iata": "SHJ",
    "name": "Sharjah International Airport",
    "city": "Sharjah",
    "country": "United Arab Emirates",
    "lat": 25.3286,
    "lng": 55.5172,
    "tier": 1
  },
  {
    "iata": "SSH",
    "name": "Sharm El Sheikh International Airport",
    "city": "Sharm El Sheikh",
    "country": "Egypt",
    "lat": 27.9773,
    "lng": 34.395,
    "tier": 1
  },
  {
    "iata": "SHW",
    "name": "Sharurah Airport",
    "city": "Sharurah",
    "country": "Saudi Arabia",
    "lat": 17.4669,
    "lng": 47.1214,
    "tier": 3
  },
  {
    "iata": "SHE",
    "name": "Taoxian Airport",
    "city": "Shenyang",
    "country": "China",
    "lat": 41.6398,
    "lng": 123.483,
    "tier": 1
  },
  {
    "iata": "SZX",
    "name": "Shenzhen Bao'an International Airport",
    "city": "Shenzhen",
    "country": "China",
    "lat": 22.6393,
    "lng": 113.811,
    "tier": 1
  },
  {
    "iata": "SHR",
    "name": "Sheridan County Airport",
    "city": "Sheridan",
    "country": "United States",
    "lat": 44.7692,
    "lng": -106.98,
    "tier": 3
  },
  {
    "iata": "SJW",
    "name": "Shijiazhuang Daguocun International Airport",
    "city": "Shijiazhuang",
    "country": "China",
    "lat": 38.2807,
    "lng": 114.697,
    "tier": 1
  },
  {
    "iata": "SHL",
    "name": "Shillong Airport",
    "city": "Shillong",
    "country": "India",
    "lat": 25.7036,
    "lng": 91.9787,
    "tier": 3
  },
  {
    "iata": "NGQ",
    "name": "Ngari Gunsa Airport",
    "city": "Shiquanhe",
    "country": "China",
    "lat": 32.1,
    "lng": 80.0531,
    "tier": 3
  },
  {
    "iata": "SYZ",
    "name": "Shiraz Shahid Dastghaib International Airport",
    "city": "Shiraz",
    "country": "Iran",
    "lat": 29.5392,
    "lng": 52.5898,
    "tier": 1
  },
  {
    "iata": "SHH",
    "name": "Shishmaref Airport",
    "city": "Shishmaref",
    "country": "United States",
    "lat": 66.2496,
    "lng": -166.0891,
    "tier": 3
  },
  {
    "iata": "SYO",
    "name": "Shonai Airport",
    "city": "Shonai",
    "country": "Japan",
    "lat": 38.8122,
    "lng": 139.787,
    "tier": 3
  },
  {
    "iata": "SOW",
    "name": "Show Low Regional Airport",
    "city": "Show Low",
    "country": "United States",
    "lat": 34.2655,
    "lng": -110.006,
    "tier": 2
  },
  {
    "iata": "SHV",
    "name": "Shreveport Regional Airport",
    "city": "Shreveport",
    "country": "United States",
    "lat": 32.4466,
    "lng": -93.8256,
    "tier": 2
  },
  {
    "iata": "SHG",
    "name": "Shungnak Airport",
    "city": "Shungnak",
    "country": "United States",
    "lat": 66.8881,
    "lng": -157.162,
    "tier": 3
  },
  {
    "iata": "SKT",
    "name": "Sialkot Airport",
    "city": "Sialkot",
    "country": "Pakistan",
    "lat": 32.5356,
    "lng": 74.3639,
    "tier": 2
  },
  {
    "iata": "IAO",
    "name": "Siargao Airport",
    "city": "Siargao",
    "country": "Philippines",
    "lat": 9.8591,
    "lng": 126.014,
    "tier": 3
  },
  {
    "iata": "SBZ",
    "name": "Sibiu International Airport",
    "city": "Sibiu",
    "country": "Romania",
    "lat": 45.7856,
    "lng": 24.0913,
    "tier": 3
  },
  {
    "iata": "SBW",
    "name": "Sibu Airport",
    "city": "Sibu",
    "country": "Malaysia",
    "lat": 2.2616,
    "lng": 111.985,
    "tier": 2
  },
  {
    "iata": "SDY",
    "name": "Sidney - Richland Regional Airport",
    "city": "Sidney",
    "country": "United States",
    "lat": 47.7069,
    "lng": -104.193,
    "tier": 3
  },
  {
    "iata": "REP",
    "name": "Siem Reap International Airport",
    "city": "Siem-reap",
    "country": "Cambodia",
    "lat": 13.4107,
    "lng": 103.813,
    "tier": 1
  },
  {
    "iata": "GIU",
    "name": "Sigiriya Air Force Base",
    "city": "Sigiriya",
    "country": "Sri Lanka",
    "lat": 7.9567,
    "lng": 80.7285,
    "tier": 3
  },
  {
    "iata": "KOS",
    "name": "Sihanoukville International Airport",
    "city": "Sihanoukville",
    "country": "Cambodia",
    "lat": 10.5797,
    "lng": 103.637,
    "tier": 3
  },
  {
    "iata": "IXS",
    "name": "Silchar Airport",
    "city": "Silchar",
    "country": "India",
    "lat": 24.9129,
    "lng": 92.9787,
    "tier": 2
  },
  {
    "iata": "SYM",
    "name": "Pu'er Simao Airport",
    "city": "Simao",
    "country": "China",
    "lat": 22.7933,
    "lng": 100.959,
    "tier": 3
  },
  {
    "iata": "SIP",
    "name": "Simferopol International Airport",
    "city": "Simferopol",
    "country": "Ukraine",
    "lat": 45.0522,
    "lng": 33.9751,
    "tier": 2
  },
  {
    "iata": "SIN",
    "name": "Singapore Changi Airport",
    "city": "Singapore",
    "country": "Singapore",
    "lat": 1.3502,
    "lng": 103.994,
    "tier": 1
  },
  {
    "iata": "NOP",
    "name": "Sinop Airport",
    "city": "Sinop",
    "country": "Turkey",
    "lat": 42.0158,
    "lng": 35.0664,
    "tier": 3
  },
  {
    "iata": "OPS",
    "name": "Presidente João Batista Figueiredo Airport",
    "city": "Sinop",
    "country": "Brazil",
    "lat": -11.885,
    "lng": -55.5861,
    "tier": 3
  },
  {
    "iata": "SUX",
    "name": "Sioux Gateway Col. Bud Day Field",
    "city": "Sioux City",
    "country": "United States",
    "lat": 42.4026,
    "lng": -96.3844,
    "tier": 3
  },
  {
    "iata": "FSD",
    "name": "Joe Foss Field Airport",
    "city": "Sioux Falls",
    "country": "United States",
    "lat": 43.582,
    "lng": -96.7419,
    "tier": 2
  },
  {
    "iata": "YXL",
    "name": "Sioux Lookout Airport",
    "city": "Sioux Lookout",
    "country": "Canada",
    "lat": 50.1139,
    "lng": -91.9053,
    "tier": 2
  },
  {
    "iata": "XSB",
    "name": "Sir Bani Yas Airport",
    "city": "Sir Bani Yas Island",
    "country": "United Arab Emirates",
    "lat": 24.2836,
    "lng": 52.5803,
    "tier": 3
  },
  {
    "iata": "SXI",
    "name": "Sirri Island Airport",
    "city": "Siri Island",
    "country": "Iran",
    "lat": 25.9089,
    "lng": 54.5394,
    "tier": 3
  },
  {
    "iata": "SRX",
    "name": "Gardabya Airport",
    "city": "Sirt",
    "country": "Libya",
    "lat": 31.0635,
    "lng": 16.595,
    "tier": 3
  },
  {
    "iata": "JHS",
    "name": "Sisimiut Airport",
    "city": "Sisimiut",
    "country": "Greenland",
    "lat": 66.9513,
    "lng": -53.7293,
    "tier": 3
  },
  {
    "iata": "JSH",
    "name": "Sitia Airport",
    "city": "Sitia",
    "country": "Greece",
    "lat": 35.2161,
    "lng": 26.1013,
    "tier": 3
  },
  {
    "iata": "SIT",
    "name": "Sitka Rocky Gutierrez Airport",
    "city": "Sitka",
    "country": "United States",
    "lat": 57.0471,
    "lng": -135.362,
    "tier": 3
  },
  {
    "iata": "AKY",
    "name": "Sittwe Airport",
    "city": "Sittwe",
    "country": "Burma",
    "lat": 20.1327,
    "lng": 92.8726,
    "tier": 3
  },
  {
    "iata": "VAS",
    "name": "Sivas Nuri Demirağ Airport",
    "city": "Sivas",
    "country": "Turkey",
    "lat": 39.8138,
    "lng": 36.9035,
    "tier": 3
  },
  {
    "iata": "SGY",
    "name": "Skagway Airport",
    "city": "Skagway",
    "country": "United States",
    "lat": 59.4601,
    "lng": -135.316,
    "tier": 3
  },
  {
    "iata": "KDU",
    "name": "Skardu Airport",
    "city": "Skardu",
    "country": "Pakistan",
    "lat": 35.3355,
    "lng": 75.536,
    "tier": 3
  },
  {
    "iata": "SFT",
    "name": "Skellefteå Airport",
    "city": "Skelleftea",
    "country": "Sweden",
    "lat": 64.6248,
    "lng": 21.0769,
    "tier": 3
  },
  {
    "iata": "JSI",
    "name": "Skiathos Island National Airport",
    "city": "Skiathos",
    "country": "Greece",
    "lat": 39.1771,
    "lng": 23.5037,
    "tier": 3
  },
  {
    "iata": "SKE",
    "name": "Skien Airport",
    "city": "Skien",
    "country": "Norway",
    "lat": 59.185,
    "lng": 9.5669,
    "tier": 3
  },
  {
    "iata": "SKU",
    "name": "Skiros Airport",
    "city": "Skiros",
    "country": "Greece",
    "lat": 38.9676,
    "lng": 24.4872,
    "tier": 3
  },
  {
    "iata": "SKP",
    "name": "Skopje Alexander the Great Airport",
    "city": "Skopje",
    "country": "Macedonia",
    "lat": 41.9616,
    "lng": 21.6214,
    "tier": 2
  },
  {
    "iata": "SLQ",
    "name": "Sleetmute Airport",
    "city": "Sleetmute",
    "country": "United States",
    "lat": 61.7005,
    "lng": -157.166,
    "tier": 3
  },
  {
    "iata": "YYD",
    "name": "Smithers Airport",
    "city": "Smithers",
    "country": "Canada",
    "lat": 54.8247,
    "lng": -127.183,
    "tier": 3
  },
  {
    "iata": "AER",
    "name": "Sochi International Airport",
    "city": "Sochi",
    "country": "Russia",
    "lat": 43.4499,
    "lng": 39.9566,
    "tier": 1
  },
  {
    "iata": "SCT",
    "name": "Socotra International Airport",
    "city": "Socotra",
    "country": "Yemen",
    "lat": 12.6307,
    "lng": 53.9058,
    "tier": 3
  },
  {
    "iata": "SGD",
    "name": "Sønderborg Airport",
    "city": "Soenderborg",
    "country": "Denmark",
    "lat": 54.9644,
    "lng": 9.7917,
    "tier": 3
  },
  {
    "iata": "SOF",
    "name": "Sofia Airport",
    "city": "Sofia",
    "country": "Bulgaria",
    "lat": 42.6967,
    "lng": 23.4114,
    "tier": 1
  },
  {
    "iata": "SOG",
    "name": "Sogndal Airport",
    "city": "Sogndal",
    "country": "Norway",
    "lat": 61.1561,
    "lng": 7.1378,
    "tier": 3
  },
  {
    "iata": "HMB",
    "name": "Sohag International Airport",
    "city": "Sohag",
    "country": "Egypt",
    "lat": 26.3428,
    "lng": 31.7428,
    "tier": 2
  },
  {
    "iata": "YNY",
    "name": "Yangyang International Airport",
    "city": "Sokcho / Gangneung",
    "country": "South Korea",
    "lat": 38.0613,
    "lng": 128.669,
    "tier": 3
  },
  {
    "iata": "SKO",
    "name": "Sadiq Abubakar III International Airport",
    "city": "Sokoto",
    "country": "Nigeria",
    "lat": 12.9163,
    "lng": 5.2072,
    "tier": 3
  },
  {
    "iata": "SLH",
    "name": "Sola Airport",
    "city": "Sola",
    "country": "Vanuatu",
    "lat": -13.8517,
    "lng": 167.537,
    "tier": 3
  },
  {
    "iata": "SOC",
    "name": "Adi Sumarmo Wiryokusumo Airport",
    "city": "Solo City",
    "country": "Indonesia",
    "lat": -7.5161,
    "lng": 110.757,
    "tier": 2
  },
  {
    "iata": "CSH",
    "name": "Solovki Airport",
    "city": "Solovetsky Islands",
    "country": "Russia",
    "lat": 65.03,
    "lng": 35.7333,
    "tier": 3
  },
  {
    "iata": "SFJ",
    "name": "Kangerlussuaq Airport",
    "city": "Sondrestrom",
    "country": "Greenland",
    "lat": 67.0122,
    "lng": -50.7116,
    "tier": 2
  },
  {
    "iata": "SOJ",
    "name": "Sørkjosen Airport",
    "city": "Sorkjosen",
    "country": "Norway",
    "lat": 69.7868,
    "lng": 20.9594,
    "tier": 3
  },
  {
    "iata": "SOQ",
    "name": "Dominique Edward Osok Airport",
    "city": "Sorong",
    "country": "Indonesia",
    "lat": -0.894,
    "lng": 131.287,
    "tier": 2
  },
  {
    "iata": "SBN",
    "name": "South Bend Regional Airport",
    "city": "South Bend",
    "country": "United States",
    "lat": 41.7087,
    "lng": -86.3173,
    "tier": 2
  },
  {
    "iata": "XSC",
    "name": "South Caicos Airport",
    "city": "South Caicos",
    "country": "Turks and Caicos Islands",
    "lat": 21.5157,
    "lng": -71.5285,
    "tier": 3
  },
  {
    "iata": "WSN",
    "name": "South Naknek Nr 2 Airport",
    "city": "South Naknek",
    "country": "United States",
    "lat": 58.7034,
    "lng": -157.008,
    "tier": 3
  },
  {
    "iata": "SOU",
    "name": "Southampton Airport",
    "city": "Southampton",
    "country": "United Kingdom",
    "lat": 50.9503,
    "lng": -1.3568,
    "tier": 1
  },
  {
    "iata": "SEN",
    "name": "Southend Airport",
    "city": "Southend",
    "country": "United Kingdom",
    "lat": 51.5714,
    "lng": 0.6956,
    "tier": 2
  },
  {
    "iata": "OVS",
    "name": "Sovetskiy Airport",
    "city": "Sovetskiy",
    "country": "Russia",
    "lat": 61.3266,
    "lng": 63.6019,
    "tier": 3
  },
  {
    "iata": "SZA",
    "name": "Soyo Airport",
    "city": "Soyo",
    "country": "Angola",
    "lat": -6.1411,
    "lng": 12.3718,
    "tier": 3
  },
  {
    "iata": "VIJ",
    "name": "Virgin Gorda Airport",
    "city": "Spanish Town",
    "country": "British Virgin Islands",
    "lat": 18.4464,
    "lng": -64.4275,
    "tier": 3
  },
  {
    "iata": "YYH",
    "name": "Taloyoak Airport",
    "city": "Spence Bay",
    "country": "Canada",
    "lat": 69.5467,
    "lng": -93.5767,
    "tier": 3
  },
  {
    "iata": "SPU",
    "name": "Split Airport",
    "city": "Split",
    "country": "Croatia",
    "lat": 43.5389,
    "lng": 16.298,
    "tier": 1
  },
  {
    "iata": "GEG",
    "name": "Spokane International Airport",
    "city": "Spokane",
    "country": "United States",
    "lat": 47.6199,
    "lng": -117.534,
    "tier": 2
  },
  {
    "iata": "AXP",
    "name": "Spring Point Airport",
    "city": "Spring Point",
    "country": "Bahamas",
    "lat": 22.4418,
    "lng": -73.9709,
    "tier": 3
  },
  {
    "iata": "SGF",
    "name": "Springfield Branson National Airport",
    "city": "Springfield",
    "country": "United States",
    "lat": 37.2457,
    "lng": -93.3886,
    "tier": 2
  },
  {
    "iata": "SPI",
    "name": "Abraham Lincoln Capital Airport",
    "city": "Springfield",
    "country": "United States",
    "lat": 39.8441,
    "lng": -89.6779,
    "tier": 3
  },
  {
    "iata": "SXR",
    "name": "Sheikh ul Alam Airport",
    "city": "Srinagar",
    "country": "India",
    "lat": 33.9871,
    "lng": 74.7742,
    "tier": 2
  },
  {
    "iata": "SGO",
    "name": "St George Airport",
    "city": "St George",
    "country": "Australia",
    "lat": -28.0497,
    "lng": 148.595,
    "tier": 3
  },
  {
    "iata": "KSM",
    "name": "St Mary's Airport",
    "city": "St Mary's",
    "country": "United States",
    "lat": 62.0605,
    "lng": -163.302,
    "tier": 3
  },
  {
    "iata": "YIF",
    "name": "St Augustin Airport",
    "city": "St-Augustin",
    "country": "Canada",
    "lat": 51.2117,
    "lng": -58.6583,
    "tier": 3
  },
  {
    "iata": "EBU",
    "name": "Saint-Étienne-Bouthéon Airport",
    "city": "St-Etienne",
    "country": "France",
    "lat": 45.5406,
    "lng": 4.2964,
    "tier": 3
  },
  {
    "iata": "YAY",
    "name": "St. Anthony Airport",
    "city": "St. Anthony",
    "country": "Canada",
    "lat": 51.3919,
    "lng": -56.0831,
    "tier": 3
  },
  {
    "iata": "UST",
    "name": "Northeast Florida Regional Airport",
    "city": "St. Augustine Airport",
    "country": "United States",
    "lat": 29.9592,
    "lng": -81.3398,
    "tier": 3
  },
  {
    "iata": "STX",
    "name": "Henry E Rohlsen Airport",
    "city": "St. Croix Island",
    "country": "Virgin Islands",
    "lat": 17.7019,
    "lng": -64.7986,
    "tier": 2
  },
  {
    "iata": "YSJ",
    "name": "Saint John Airport",
    "city": "St. John",
    "country": "Canada",
    "lat": 45.3161,
    "lng": -65.8903,
    "tier": 3
  },
  {
    "iata": "YYT",
    "name": "St. John's International Airport",
    "city": "St. John's",
    "country": "Canada",
    "lat": 47.6186,
    "lng": -52.7519,
    "tier": 2
  },
  {
    "iata": "STL",
    "name": "St Louis Lambert International Airport",
    "city": "St. Louis",
    "country": "United States",
    "lat": 38.7487,
    "lng": -90.37,
    "tier": 1
  },
  {
    "iata": "SFG",
    "name": "L'Espérance Airport",
    "city": "St. Martin",
    "country": "Guadeloupe",
    "lat": 18.0999,
    "lng": -63.0472,
    "tier": 3
  },
  {
    "iata": "SMK",
    "name": "St Michael Airport",
    "city": "St. Michael",
    "country": "United States",
    "lat": 63.4901,
    "lng": -162.11,
    "tier": 3
  },
  {
    "iata": "SNP",
    "name": "St Paul Island Airport",
    "city": "St. Paul Island",
    "country": "United States",
    "lat": 57.1673,
    "lng": -170.22,
    "tier": 3
  },
  {
    "iata": "LED",
    "name": "Pulkovo Airport",
    "city": "St. Petersburg",
    "country": "Russia",
    "lat": 59.8003,
    "lng": 30.2625,
    "tier": 1
  },
  {
    "iata": "PIE",
    "name": "St Petersburg Clearwater International Airport",
    "city": "St. Petersburg",
    "country": "United States",
    "lat": 27.9102,
    "lng": -82.6874,
    "tier": 1
  },
  {
    "iata": "STT",
    "name": "Cyril E. King Airport",
    "city": "St. Thomas",
    "country": "Virgin Islands",
    "lat": 18.3373,
    "lng": -64.9734,
    "tier": 1
  },
  {
    "iata": "RUN",
    "name": "Roland Garros Airport",
    "city": "St.-denis",
    "country": "Reunion",
    "lat": -20.8871,
    "lng": 55.5103,
    "tier": 2
  },
  {
    "iata": "FSP",
    "name": "St Pierre Airport",
    "city": "St.-pierre",
    "country": "Saint Pierre and Miquelon",
    "lat": 46.7629,
    "lng": -56.1731,
    "tier": 3
  },
  {
    "iata": "ZSE",
    "name": "Pierrefonds Airport",
    "city": "St.-pierre",
    "country": "Reunion",
    "lat": -21.3209,
    "lng": 55.425,
    "tier": 3
  },
  {
    "iata": "SCE",
    "name": "University Park Airport",
    "city": "State College Pennsylvania",
    "country": "United States",
    "lat": 40.8493,
    "lng": -77.8487,
    "tier": 3
  },
  {
    "iata": "SVG",
    "name": "Stavanger Airport Sola",
    "city": "Stavanger",
    "country": "Norway",
    "lat": 58.8767,
    "lng": 5.6378,
    "tier": 1
  },
  {
    "iata": "STW",
    "name": "Stavropol Shpakovskoye Airport",
    "city": "Stavropol",
    "country": "Russia",
    "lat": 45.1092,
    "lng": 42.1128,
    "tier": 3
  },
  {
    "iata": "SML",
    "name": "Stella Maris Airport",
    "city": "Stella Maris",
    "country": "Bahamas",
    "lat": 23.5823,
    "lng": -75.2686,
    "tier": 3
  },
  {
    "iata": "YJT",
    "name": "Stephenville Airport",
    "city": "Stephenville",
    "country": "Canada",
    "lat": 48.5442,
    "lng": -58.55,
    "tier": 3
  },
  {
    "iata": "ARN",
    "name": "Stockholm-Arlanda Airport",
    "city": "Stockholm",
    "country": "Sweden",
    "lat": 59.6519,
    "lng": 17.9186,
    "tier": 1
  },
  {
    "iata": "BMA",
    "name": "Stockholm-Bromma Airport",
    "city": "Stockholm",
    "country": "Sweden",
    "lat": 59.3544,
    "lng": 17.9417,
    "tier": 1
  },
  {
    "iata": "NYO",
    "name": "Stockholm Skavsta Airport",
    "city": "Stockholm",
    "country": "Sweden",
    "lat": 58.7886,
    "lng": 16.9122,
    "tier": 1
  },
  {
    "iata": "SCK",
    "name": "Stockton Metropolitan Airport",
    "city": "Stockton",
    "country": "United States",
    "lat": 37.8942,
    "lng": -121.238,
    "tier": 3
  },
  {
    "iata": "SKN",
    "name": "Stokmarknes Skagen Airport",
    "city": "Stokmarknes",
    "country": "Norway",
    "lat": 68.5788,
    "lng": 15.0334,
    "tier": 3
  },
  {
    "iata": "SRP",
    "name": "Stord Airport",
    "city": "Stord",
    "country": "Norway",
    "lat": 59.7919,
    "lng": 5.3408,
    "tier": 3
  },
  {
    "iata": "SYY",
    "name": "Stornoway Airport",
    "city": "Stornoway",
    "country": "United Kingdom",
    "lat": 58.2156,
    "lng": -6.3311,
    "tier": 3
  },
  {
    "iata": "SXB",
    "name": "Strasbourg Airport",
    "city": "Strasbourg",
    "country": "France",
    "lat": 48.5383,
    "lng": 7.6282,
    "tier": 1
  },
  {
    "iata": "SOY",
    "name": "Stronsay Airport",
    "city": "Stronsay",
    "country": "United Kingdom",
    "lat": 59.1553,
    "lng": -2.6414,
    "tier": 3
  },
  {
    "iata": "STR",
    "name": "Stuttgart Airport",
    "city": "Stuttgart",
    "country": "Germany",
    "lat": 48.6899,
    "lng": 9.222,
    "tier": 1
  },
  {
    "iata": "VAO",
    "name": "Suavanao Airport",
    "city": "Suavanao",
    "country": "Solomon Islands",
    "lat": -7.5856,
    "lng": 158.731,
    "tier": 3
  },
  {
    "iata": "SRE",
    "name": "Juana Azurduy De Padilla Airport",
    "city": "Sucre",
    "country": "Bolivia",
    "lat": -19.0071,
    "lng": -65.2887,
    "tier": 2
  },
  {
    "iata": "YSB",
    "name": "Sudbury Airport",
    "city": "Sudbury",
    "country": "Canada",
    "lat": 46.625,
    "lng": -80.7989,
    "tier": 3
  },
  {
    "iata": "THS",
    "name": "Sukhothai Airport",
    "city": "Sukhothai",
    "country": "Thailand",
    "lat": 17.238,
    "lng": 99.8182,
    "tier": 3
  },
  {
    "iata": "SKZ",
    "name": "Sukkur Airport",
    "city": "Sukkur",
    "country": "Pakistan",
    "lat": 27.722,
    "lng": 68.7917,
    "tier": 3
  },
  {
    "iata": "ISU",
    "name": "Sulaymaniyah International Airport",
    "city": "Sulaymaniyah",
    "country": "Iraq",
    "lat": 35.5617,
    "lng": 45.3167,
    "tier": 2
  },
  {
    "iata": "LSI",
    "name": "Sumburgh Airport",
    "city": "Sumburgh",
    "country": "United Kingdom",
    "lat": 59.8789,
    "lng": -1.2956,
    "tier": 3
  },
  {
    "iata": "SUR",
    "name": "Summer Beaver Airport",
    "city": "Summer Beaver",
    "country": "Canada",
    "lat": 52.7086,
    "lng": -88.5419,
    "tier": 3
  },
  {
    "iata": "SDL",
    "name": "Sundsvall-Härnösand Airport",
    "city": "Sundsvall",
    "country": "Sweden",
    "lat": 62.5281,
    "lng": 17.4439,
    "tier": 3
  },
  {
    "iata": "NYI",
    "name": "Sunyani Airport",
    "city": "Sunyani",
    "country": "Ghana",
    "lat": 7.3618,
    "lng": -2.3288,
    "tier": 3
  },
  {
    "iata": "SUB",
    "name": "Juanda International Airport",
    "city": "Surabaya",
    "country": "Indonesia",
    "lat": -7.3798,
    "lng": 112.787,
    "tier": 1
  },
  {
    "iata": "STV",
    "name": "Surat Airport",
    "city": "Surat",
    "country": "India",
    "lat": 21.1141,
    "lng": 72.7418,
    "tier": 3
  },
  {
    "iata": "URT",
    "name": "Surat Thani Airport",
    "city": "Surat Thani",
    "country": "Thailand",
    "lat": 9.1326,
    "lng": 99.1356,
    "tier": 3
  },
  {
    "iata": "SGC",
    "name": "Surgut Airport",
    "city": "Surgut",
    "country": "Russia",
    "lat": 61.3437,
    "lng": 73.4018,
    "tier": 2
  },
  {
    "iata": "LYR",
    "name": "Svalbard Airport, Longyear",
    "city": "Svalbard",
    "country": "Norway",
    "lat": 78.2461,
    "lng": 15.4656,
    "tier": 3
  },
  {
    "iata": "EVG",
    "name": "Sveg Airport",
    "city": "Sveg",
    "country": "Sweden",
    "lat": 62.0478,
    "lng": 14.4229,
    "tier": 3
  },
  {
    "iata": "SVJ",
    "name": "Svolvær Helle Airport",
    "city": "Svolvær",
    "country": "Norway",
    "lat": 68.2433,
    "lng": 14.6692,
    "tier": 3
  },
  {
    "iata": "SYD",
    "name": "Sydney Kingsford Smith International Airport",
    "city": "Sydney",
    "country": "Australia",
    "lat": -33.9461,
    "lng": 151.177,
    "tier": 1
  },
  {
    "iata": "YQY",
    "name": "Sydney / J.A. Douglas McCurdy Airport",
    "city": "Sydney",
    "country": "Canada",
    "lat": 46.1614,
    "lng": -60.0478,
    "tier": 3
  },
  {
    "iata": "SCW",
    "name": "Syktyvkar Airport",
    "city": "Syktyvkar",
    "country": "Russia",
    "lat": 61.647,
    "lng": 50.8451,
    "tier": 2
  },
  {
    "iata": "ZYL",
    "name": "Osmany International Airport",
    "city": "Sylhet Osmani",
    "country": "Bangladesh",
    "lat": 24.9632,
    "lng": 91.8668,
    "tier": 3
  },
  {
    "iata": "SYR",
    "name": "Syracuse Hancock International Airport",
    "city": "Syracuse",
    "country": "United States",
    "lat": 43.1112,
    "lng": -76.1063,
    "tier": 1
  },
  {
    "iata": "JSY",
    "name": "Syros Airport",
    "city": "Syros Island",
    "country": "Greece",
    "lat": 37.4228,
    "lng": 24.9509,
    "tier": 3
  },
  {
    "iata": "SZZ",
    "name": "Szczecin-Goleniów \"Solidarność\" Airport",
    "city": "Szczecin",
    "country": "Poland",
    "lat": 53.5847,
    "lng": 14.9022,
    "tier": 2
  },
  {
    "iata": "TBT",
    "name": "Tabatinga Airport",
    "city": "Tabatinga",
    "country": "Brazil",
    "lat": -4.2557,
    "lng": -69.9358,
    "tier": 3
  },
  {
    "iata": "TBZ",
    "name": "Tabriz International Airport",
    "city": "Tabriz",
    "country": "Iran",
    "lat": 38.1339,
    "lng": 46.235,
    "tier": 2
  },
  {
    "iata": "TBG",
    "name": "Tabubil Airport",
    "city": "Tabubil",
    "country": "Papua New Guinea",
    "lat": -5.2786,
    "lng": 141.226,
    "tier": 3
  },
  {
    "iata": "TUU",
    "name": "Tabuk Airport",
    "city": "Tabuk",
    "country": "Saudi Arabia",
    "lat": 28.3654,
    "lng": 36.6189,
    "tier": 2
  },
  {
    "iata": "TCG",
    "name": "Tacheng Airport",
    "city": "Tacheng",
    "country": "China",
    "lat": 46.6725,
    "lng": 83.3408,
    "tier": 3
  },
  {
    "iata": "THL",
    "name": "Tachileik Airport",
    "city": "Tachilek",
    "country": "Burma",
    "lat": 20.4838,
    "lng": 99.9354,
    "tier": 3
  },
  {
    "iata": "TAC",
    "name": "Daniel Z. Romualdez Airport",
    "city": "Tacloban",
    "country": "Philippines",
    "lat": 11.228,
    "lng": 125.0278,
    "tier": 3
  },
  {
    "iata": "TCQ",
    "name": "Coronel FAP Carlos Ciriani Santa Rosa International Airport",
    "city": "Tacna",
    "country": "Peru",
    "lat": -18.0533,
    "lng": -70.2758,
    "tier": 3
  },
  {
    "iata": "TAE",
    "name": "Daegu Airport",
    "city": "Taegu",
    "country": "South Korea",
    "lat": 35.8969,
    "lng": 128.6553,
    "tier": 2
  },
  {
    "iata": "TGK",
    "name": "Taganrog Yuzhny Airport",
    "city": "Taganrog",
    "country": "Russia",
    "lat": 47.1983,
    "lng": 38.8492,
    "tier": 3
  },
  {
    "iata": "TAG",
    "name": "Tagbilaran Airport",
    "city": "Tagbilaran",
    "country": "Philippines",
    "lat": 9.6654,
    "lng": 123.8535,
    "tier": 3
  },
  {
    "iata": "RMQ",
    "name": "Taichung Ching Chuang Kang Airport",
    "city": "Taichung",
    "country": "Taiwan",
    "lat": 24.2647,
    "lng": 120.621,
    "tier": 1
  },
  {
    "iata": "TIF",
    "name": "Ta’if Regional Airport",
    "city": "Taif",
    "country": "Saudi Arabia",
    "lat": 21.483,
    "lng": 40.5434,
    "tier": 2
  },
  {
    "iata": "TNN",
    "name": "Tainan Airport",
    "city": "Tainan",
    "country": "Taiwan",
    "lat": 22.9504,
    "lng": 120.206,
    "tier": 3
  },
  {
    "iata": "TPE",
    "name": "Taiwan Taoyuan International Airport",
    "city": "Taipei",
    "country": "Taiwan",
    "lat": 25.0777,
    "lng": 121.233,
    "tier": 1
  },
  {
    "iata": "TSA",
    "name": "Taipei Songshan Airport",
    "city": "Taipei",
    "country": "Taiwan",
    "lat": 25.0694,
    "lng": 121.552,
    "tier": 1
  },
  {
    "iata": "TYN",
    "name": "Taiyuan Wusu Airport",
    "city": "Taiyuan",
    "country": "China",
    "lat": 37.7469,
    "lng": 112.628,
    "tier": 1
  },
  {
    "iata": "TAI",
    "name": "Ta'izz International Airport",
    "city": "Taiz",
    "country": "Yemen",
    "lat": 13.686,
    "lng": 44.1391,
    "tier": 2
  },
  {
    "iata": "MAQ",
    "name": "Mae Sot Airport",
    "city": "Tak",
    "country": "Thailand",
    "lat": 16.6999,
    "lng": 98.5451,
    "tier": 3
  },
  {
    "iata": "TAK",
    "name": "Takamatsu Airport",
    "city": "Takamatsu",
    "country": "Japan",
    "lat": 34.2142,
    "lng": 134.016,
    "tier": 2
  },
  {
    "iata": "TKP",
    "name": "Takapoto Airport",
    "city": "Takapoto",
    "country": "French Polynesia",
    "lat": -14.7095,
    "lng": -145.246,
    "tier": 3
  },
  {
    "iata": "TKX",
    "name": "Takaroa Airport",
    "city": "Takaroa",
    "country": "French Polynesia",
    "lat": -14.4558,
    "lng": -145.025,
    "tier": 3
  },
  {
    "iata": "TKD",
    "name": "Takoradi Airport",
    "city": "Takoradi",
    "country": "Ghana",
    "lat": 4.8961,
    "lng": -1.7748,
    "tier": 3
  },
  {
    "iata": "TLH",
    "name": "Tallahassee Regional Airport",
    "city": "Tallahassee",
    "country": "United States",
    "lat": 30.3965,
    "lng": -84.3503,
    "tier": 2
  },
  {
    "iata": "TLL",
    "name": "Lennart Meri Tallinn Airport",
    "city": "Tallinn-ulemiste International",
    "country": "Estonia",
    "lat": 59.4133,
    "lng": 24.8328,
    "tier": 1
  },
  {
    "iata": "TML",
    "name": "Tamale Airport",
    "city": "Tamale",
    "country": "Ghana",
    "lat": 9.5572,
    "lng": -0.8632,
    "tier": 3
  },
  {
    "iata": "TMR",
    "name": "Aguenar – Hadj Bey Akhamok Airport",
    "city": "Tamanrasset",
    "country": "Algeria",
    "lat": 22.8115,
    "lng": 5.4511,
    "tier": 3
  },
  {
    "iata": "TBW",
    "name": "Donskoye Airport",
    "city": "Tambow",
    "country": "Russia",
    "lat": 52.8061,
    "lng": 41.4828,
    "tier": 3
  },
  {
    "iata": "TME",
    "name": "Gustavo Vargas Airport",
    "city": "Tame",
    "country": "Colombia",
    "lat": 6.4511,
    "lng": -71.7603,
    "tier": 3
  },
  {
    "iata": "TPA",
    "name": "Tampa International Airport",
    "city": "Tampa",
    "country": "United States",
    "lat": 27.9755,
    "lng": -82.5332,
    "tier": 1
  },
  {
    "iata": "TMP",
    "name": "Tampere-Pirkkala Airport",
    "city": "Tampere",
    "country": "Finland",
    "lat": 61.4141,
    "lng": 23.6044,
    "tier": 2
  },
  {
    "iata": "TAM",
    "name": "General Francisco Javier Mina International Airport",
    "city": "Tampico",
    "country": "Mexico",
    "lat": 22.2964,
    "lng": -97.8659,
    "tier": 2
  },
  {
    "iata": "TMW",
    "name": "Tamworth Airport",
    "city": "Tamworth",
    "country": "Australia",
    "lat": -31.0839,
    "lng": 150.847,
    "tier": 3
  },
  {
    "iata": "TTA",
    "name": "Tan Tan Airport",
    "city": "Tan Tan",
    "country": "Morocco",
    "lat": 28.4482,
    "lng": -11.1613,
    "tier": 3
  },
  {
    "iata": "TNG",
    "name": "Ibn Batouta Airport",
    "city": "Tanger",
    "country": "Morocco",
    "lat": 35.7269,
    "lng": -5.9169,
    "tier": 2
  },
  {
    "iata": "TJQ",
    "name": "Buluh Tumbang (H A S Hanandjoeddin) Airport",
    "city": "Tanjung Pandan",
    "country": "Indonesia",
    "lat": -2.7457,
    "lng": 107.755,
    "tier": 3
  },
  {
    "iata": "TNJ",
    "name": "Raja Haji Fisabilillah International Airport",
    "city": "Tanjung Pinang",
    "country": "Indonesia",
    "lat": 0.9227,
    "lng": 104.532,
    "tier": 3
  },
  {
    "iata": "BEJ",
    "name": "Kalimarau Airport",
    "city": "Tanjung Redep-Borneo Island",
    "country": "Indonesia",
    "lat": 2.1555,
    "lng": 117.432,
    "tier": 3
  },
  {
    "iata": "TAH",
    "name": "Tanna Airport",
    "city": "Tanna",
    "country": "Vanuatu",
    "lat": -19.4551,
    "lng": 169.224,
    "tier": 3
  },
  {
    "iata": "TAP",
    "name": "Tapachula International Airport",
    "city": "Tapachula",
    "country": "Mexico",
    "lat": 14.7943,
    "lng": -92.37,
    "tier": 3
  },
  {
    "iata": "TRK",
    "name": "Juwata Airport",
    "city": "Taraken",
    "country": "Indonesia",
    "lat": 3.3267,
    "lng": 117.5694,
    "tier": 2
  },
  {
    "iata": "TPP",
    "name": "Cadete FAP Guillermo Del Castillo Paredes Airport",
    "city": "Tarapoto",
    "country": "Peru",
    "lat": -6.5087,
    "lng": -76.3732,
    "tier": 2
  },
  {
    "iata": "TRW",
    "name": "Bonriki International Airport",
    "city": "Tarawa",
    "country": "Kiribati",
    "lat": 1.3816,
    "lng": 173.147,
    "tier": 3
  },
  {
    "iata": "LDE",
    "name": "Tarbes-Lourdes-Pyrénées Airport",
    "city": "Tarbes",
    "country": "France",
    "lat": 43.1787,
    "lng": -0.0064,
    "tier": 3
  },
  {
    "iata": "TRO",
    "name": "Taree Airport",
    "city": "Taree",
    "country": "Australia",
    "lat": -31.8886,
    "lng": 152.514,
    "tier": 3
  },
  {
    "iata": "TIZ",
    "name": "Tari Airport",
    "city": "Tari",
    "country": "Papua New Guinea",
    "lat": -5.845,
    "lng": 142.948,
    "tier": 3
  },
  {
    "iata": "TJA",
    "name": "Capitan Oriel Lea Plaza Airport",
    "city": "Tarija",
    "country": "Bolivia",
    "lat": -21.5557,
    "lng": -64.7013,
    "tier": 2
  },
  {
    "iata": "TQL",
    "name": "Tarko-Sale Airport",
    "city": "Tarko-Sale",
    "country": "Russia",
    "lat": 64.9308,
    "lng": 77.8181,
    "tier": 3
  },
  {
    "iata": "TAY",
    "name": "Tartu Airport",
    "city": "Tartu",
    "country": "Estonia",
    "lat": 58.3075,
    "lng": 26.6904,
    "tier": 3
  },
  {
    "iata": "TAS",
    "name": "Tashkent International Airport",
    "city": "Tashkent",
    "country": "Uzbekistan",
    "lat": 41.2579,
    "lng": 69.2812,
    "tier": 1
  },
  {
    "iata": "YTQ",
    "name": "Tasiujaq Airport",
    "city": "Tasiujaq",
    "country": "Canada",
    "lat": 58.6678,
    "lng": -69.9558,
    "tier": 3
  },
  {
    "iata": "TLJ",
    "name": "Tatalina LRRS Airport",
    "city": "Tatalina",
    "country": "United States",
    "lat": 62.8944,
    "lng": -155.977,
    "tier": 3
  },
  {
    "iata": "TUO",
    "name": "Taupo Airport",
    "city": "Taupo",
    "country": "New Zealand",
    "lat": -38.7397,
    "lng": 176.084,
    "tier": 3
  },
  {
    "iata": "TRG",
    "name": "Tauranga Airport",
    "city": "Tauranga",
    "country": "New Zealand",
    "lat": -37.6719,
    "lng": 176.196,
    "tier": 3
  },
  {
    "iata": "TWU",
    "name": "Tawau Airport",
    "city": "Tawau",
    "country": "Malaysia",
    "lat": 4.3202,
    "lng": 118.128,
    "tier": 2
  },
  {
    "iata": "TBS",
    "name": "Tbilisi International Airport",
    "city": "Tbilisi",
    "country": "Georgia",
    "lat": 41.6692,
    "lng": 44.9547,
    "tier": 1
  },
  {
    "iata": "TEE",
    "name": "Cheikh Larbi Tébessi Airport",
    "city": "Tebessa",
    "country": "Algeria",
    "lat": 35.4316,
    "lng": 8.1207,
    "tier": 3
  },
  {
    "iata": "MME",
    "name": "Durham Tees Valley Airport",
    "city": "Teesside",
    "country": "United Kingdom",
    "lat": 54.5092,
    "lng": -1.4294,
    "tier": 3
  },
  {
    "iata": "TFF",
    "name": "Tefé Airport",
    "city": "Tefe",
    "country": "Brazil",
    "lat": -3.3829,
    "lng": -64.7241,
    "tier": 3
  },
  {
    "iata": "TGU",
    "name": "Toncontín International Airport",
    "city": "Tegucigalpa",
    "country": "Honduras",
    "lat": 14.0609,
    "lng": -87.2172,
    "tier": 2
  },
  {
    "iata": "THR",
    "name": "Mehrabad International Airport",
    "city": "Teheran",
    "country": "Iran",
    "lat": 35.6892,
    "lng": 51.3134,
    "tier": 1
  },
  {
    "iata": "IKA",
    "name": "Imam Khomeini International Airport",
    "city": "Tehran",
    "country": "Iran",
    "lat": 35.4161,
    "lng": 51.1522,
    "tier": 1
  },
  {
    "iata": "SDV",
    "name": "Sde Dov Airport",
    "city": "Tel-aviv",
    "country": "Israel",
    "lat": 32.1147,
    "lng": 34.7822,
    "tier": 3
  },
  {
    "iata": "TLV",
    "name": "Ben Gurion International Airport",
    "city": "Tel-aviv",
    "country": "Israel",
    "lat": 32.0114,
    "lng": 34.8867,
    "tier": 1
  },
  {
    "iata": "TLA",
    "name": "Teller Airport",
    "city": "Teller",
    "country": "United States",
    "lat": 65.2404,
    "lng": -166.339,
    "tier": 3
  },
  {
    "iata": "ZCO",
    "name": "La Araucanía Airport",
    "city": "Temuco",
    "country": "Chile",
    "lat": -38.9259,
    "lng": -72.6515,
    "tier": 3
  },
  {
    "iata": "TNW",
    "name": "Jumandy Airport",
    "city": "Tena",
    "country": "Ecuador",
    "lat": -1.0597,
    "lng": -77.5833,
    "tier": 3
  },
  {
    "iata": "TFN",
    "name": "Tenerife Norte Airport",
    "city": "Tenerife",
    "country": "Spain",
    "lat": 28.4827,
    "lng": -16.3415,
    "tier": 1
  },
  {
    "iata": "TFS",
    "name": "Tenerife South Airport",
    "city": "Tenerife",
    "country": "Spain",
    "lat": 28.0445,
    "lng": -16.5725,
    "tier": 1
  },
  {
    "iata": "TCZ",
    "name": "Tengchong Tuofeng Airport",
    "city": "Tengchong",
    "country": "China",
    "lat": 24.9381,
    "lng": 98.4858,
    "tier": 3
  },
  {
    "iata": "TPQ",
    "name": "Amado Nervo National Airport",
    "city": "Tepic",
    "country": "Mexico",
    "lat": 21.4195,
    "lng": -104.843,
    "tier": 3
  },
  {
    "iata": "THE",
    "name": "Senador Petrônio Portela Airport",
    "city": "Teresina",
    "country": "Brazil",
    "lat": -5.0599,
    "lng": -42.8235,
    "tier": 2
  },
  {
    "iata": "TMJ",
    "name": "Termez Airport",
    "city": "Termez",
    "country": "Uzbekistan",
    "lat": 37.2867,
    "lng": 67.31,
    "tier": 3
  },
  {
    "iata": "TTE",
    "name": "Sultan Khairun Babullah Airport",
    "city": "Ternate",
    "country": "Indonesia",
    "lat": 0.8314,
    "lng": 127.381,
    "tier": 2
  },
  {
    "iata": "YXT",
    "name": "Northwest Regional Airport Terrace-Kitimat",
    "city": "Terrace",
    "country": "Canada",
    "lat": 54.4685,
    "lng": -128.576,
    "tier": 3
  },
  {
    "iata": "TET",
    "name": "Chingozi Airport",
    "city": "Tete",
    "country": "Mozambique",
    "lat": -16.1048,
    "lng": 33.6402,
    "tier": 2
  },
  {
    "iata": "TEB",
    "name": "Teterboro Airport",
    "city": "Teterboro",
    "country": "United States",
    "lat": 40.8501,
    "lng": -74.0608,
    "tier": 3
  },
  {
    "iata": "TTU",
    "name": "Saniat R'mel Airport",
    "city": "Tetouan",
    "country": "Morocco",
    "lat": 35.5943,
    "lng": -5.32,
    "tier": 3
  },
  {
    "iata": "TXK",
    "name": "Texarkana Regional Webb Field",
    "city": "Texarkana",
    "country": "United States",
    "lat": 33.4537,
    "lng": -93.991,
    "tier": 3
  },
  {
    "iata": "SNW",
    "name": "Thandwe Airport",
    "city": "Thandwe",
    "country": "Burma",
    "lat": 18.4607,
    "lng": 94.3001,
    "tier": 3
  },
  {
    "iata": "XTG",
    "name": "Thargomindah Airport",
    "city": "Thargomindah",
    "country": "Australia",
    "lat": -27.9864,
    "lng": 143.811,
    "tier": 3
  },
  {
    "iata": "YQD",
    "name": "The Pas Airport",
    "city": "The Pas",
    "country": "Canada",
    "lat": 53.9714,
    "lng": -101.091,
    "tier": 3
  },
  {
    "iata": "AXA",
    "name": "Clayton J Lloyd International Airport",
    "city": "The Valley",
    "country": "Anguilla",
    "lat": 18.2048,
    "lng": -63.0551,
    "tier": 2
  },
  {
    "iata": "SKG",
    "name": "Thessaloniki Macedonia International Airport",
    "city": "Thessaloniki",
    "country": "Greece",
    "lat": 40.5197,
    "lng": 22.9709,
    "tier": 1
  },
  {
    "iata": "TVF",
    "name": "Thief River Falls Regional Airport",
    "city": "Thief River Falls",
    "country": "United States",
    "lat": 48.0657,
    "lng": -96.185,
    "tier": 3
  },
  {
    "iata": "PBH",
    "name": "Paro Airport",
    "city": "Thimphu",
    "country": "Bhutan",
    "lat": 27.4032,
    "lng": 89.4246,
    "tier": 3
  },
  {
    "iata": "JTR",
    "name": "Santorini Airport",
    "city": "Thira",
    "country": "Greece",
    "lat": 36.3992,
    "lng": 25.4793,
    "tier": 2
  },
  {
    "iata": "YTH",
    "name": "Thompson Airport",
    "city": "Thompson",
    "country": "Canada",
    "lat": 55.8011,
    "lng": -97.8642,
    "tier": 2
  },
  {
    "iata": "THU",
    "name": "Thule Air Base",
    "city": "Thule",
    "country": "Greenland",
    "lat": 76.5312,
    "lng": -68.7032,
    "tier": 3
  },
  {
    "iata": "YQT",
    "name": "Thunder Bay Airport",
    "city": "Thunder Bay",
    "country": "Canada",
    "lat": 48.3719,
    "lng": -89.3239,
    "tier": 2
  },
  {
    "iata": "TSN",
    "name": "Tianjin Binhai International Airport",
    "city": "Tianjin",
    "country": "China",
    "lat": 39.1244,
    "lng": 117.346,
    "tier": 1
  },
  {
    "iata": "TID",
    "name": "Bou Chekif Airport",
    "city": "Tiaret",
    "country": "Algeria",
    "lat": 35.3411,
    "lng": 1.4632,
    "tier": 3
  },
  {
    "iata": "TGJ",
    "name": "Tiga Airport",
    "city": "Tiga",
    "country": "New Caledonia",
    "lat": -21.0961,
    "lng": 167.804,
    "tier": 3
  },
  {
    "iata": "TIJ",
    "name": "General Abelardo L. Rodríguez International Airport",
    "city": "Tijuana",
    "country": "Mexico",
    "lat": 32.5411,
    "lng": -116.97,
    "tier": 1
  },
  {
    "iata": "TIH",
    "name": "Tikehau Airport",
    "city": "Tikehau",
    "country": "French Polynesia",
    "lat": -15.1196,
    "lng": -148.231,
    "tier": 3
  },
  {
    "iata": "IKS",
    "name": "Tiksi Airport",
    "city": "Tiksi",
    "country": "Russia",
    "lat": 71.6977,
    "lng": 128.903,
    "tier": 3
  },
  {
    "iata": "HRM",
    "name": "Hassi R'Mel Airport",
    "city": "Tilrempt",
    "country": "Algeria",
    "lat": 32.9304,
    "lng": 3.3115,
    "tier": 3
  },
  {
    "iata": "TIU",
    "name": "Timaru Airport",
    "city": "Timaru",
    "country": "New Zealand",
    "lat": -44.3028,
    "lng": 171.225,
    "tier": 3
  },
  {
    "iata": "TIM",
    "name": "Moses Kilangin Airport",
    "city": "Timika",
    "country": "Indonesia",
    "lat": -4.5283,
    "lng": 136.887,
    "tier": 3
  },
  {
    "iata": "TSR",
    "name": "Timişoara Traian Vuia Airport",
    "city": "Timisoara",
    "country": "Romania",
    "lat": 45.8099,
    "lng": 21.3379,
    "tier": 2
  },
  {
    "iata": "YTS",
    "name": "Timmins/Victor M. Power",
    "city": "Timmins",
    "country": "Canada",
    "lat": 48.5697,
    "lng": -81.3767,
    "tier": 3
  },
  {
    "iata": "TNC",
    "name": "Tin City Long Range Radar Station Airport",
    "city": "Tin City",
    "country": "United States",
    "lat": 65.5631,
    "lng": -167.922,
    "tier": 3
  },
  {
    "iata": "TGI",
    "name": "Tingo Maria Airport",
    "city": "Tingo Maria",
    "country": "Peru",
    "lat": -9.133,
    "lng": -75.95,
    "tier": 3
  },
  {
    "iata": "TIA",
    "name": "Tirana International Airport Mother Teresa",
    "city": "Tirana",
    "country": "Albania",
    "lat": 41.4147,
    "lng": 19.7206,
    "tier": 1
  },
  {
    "iata": "TRE",
    "name": "Tiree Airport",
    "city": "Tiree",
    "country": "United Kingdom",
    "lat": 56.4992,
    "lng": -6.8692,
    "tier": 3
  },
  {
    "iata": "TGM",
    "name": "Transilvania Târgu Mureş International Airport",
    "city": "Tirgu Mures",
    "country": "Romania",
    "lat": 46.4677,
    "lng": 24.4125,
    "tier": 3
  },
  {
    "iata": "TRZ",
    "name": "Tiruchirapally Civil Airport Airport",
    "city": "Tiruchirappalli",
    "country": "India",
    "lat": 10.7654,
    "lng": 78.7097,
    "tier": 2
  },
  {
    "iata": "TIR",
    "name": "Tirupati Airport",
    "city": "Tirupeti",
    "country": "India",
    "lat": 13.6325,
    "lng": 79.5433,
    "tier": 3
  },
  {
    "iata": "TIV",
    "name": "Tivat Airport",
    "city": "Tivat",
    "country": "Montenegro",
    "lat": 42.4047,
    "lng": 18.7233,
    "tier": 2
  },
  {
    "iata": "TLM",
    "name": "Zenata – Messali El Hadj Airport",
    "city": "Tlemcen",
    "country": "Algeria",
    "lat": 35.0167,
    "lng": -1.45,
    "tier": 2
  },
  {
    "iata": "TMM",
    "name": "Toamasina Airport",
    "city": "Toamasina",
    "country": "Madagascar",
    "lat": -18.1095,
    "lng": 49.3925,
    "tier": 2
  },
  {
    "iata": "TOB",
    "name": "Gamal Abdel Nasser Airport",
    "city": "Tobruk",
    "country": "Libya",
    "lat": 31.861,
    "lng": 23.907,
    "tier": 3
  },
  {
    "iata": "TOG",
    "name": "Togiak Airport",
    "city": "Togiak Village",
    "country": "United States",
    "lat": 59.0528,
    "lng": -160.397,
    "tier": 3
  },
  {
    "iata": "OOK",
    "name": "Toksook Bay Airport",
    "city": "Toksook Bay",
    "country": "United States",
    "lat": 60.5414,
    "lng": -165.087,
    "tier": 3
  },
  {
    "iata": "RAB",
    "name": "Tokua Airport",
    "city": "Tokua",
    "country": "Papua New Guinea",
    "lat": -4.3405,
    "lng": 152.38,
    "tier": 2
  },
  {
    "iata": "TKS",
    "name": "Tokushima Airport/JMSDF Air Base",
    "city": "Tokushima",
    "country": "Japan",
    "lat": 34.1328,
    "lng": 134.607,
    "tier": 3
  },
  {
    "iata": "HND",
    "name": "Tokyo Haneda International Airport",
    "city": "Tokyo",
    "country": "Japan",
    "lat": 35.5523,
    "lng": 139.78,
    "tier": 1
  },
  {
    "iata": "NRT",
    "name": "Narita International Airport",
    "city": "Tokyo",
    "country": "Japan",
    "lat": 35.7647,
    "lng": 140.386,
    "tier": 1
  },
  {
    "iata": "FTU",
    "name": "Tôlanaro Airport",
    "city": "Tolagnaro",
    "country": "Madagascar",
    "lat": -25.0381,
    "lng": 46.9561,
    "tier": 3
  },
  {
    "iata": "TOL",
    "name": "Toledo Express Airport",
    "city": "Toledo",
    "country": "United States",
    "lat": 41.5868,
    "lng": -83.8078,
    "tier": 3
  },
  {
    "iata": "TLE",
    "name": "Toliara Airport",
    "city": "Toliara",
    "country": "Madagascar",
    "lat": -23.3834,
    "lng": 43.7285,
    "tier": 3
  },
  {
    "iata": "TLC",
    "name": "Licenciado Adolfo Lopez Mateos International Airport",
    "city": "Toluca",
    "country": "Mexico",
    "lat": 19.3371,
    "lng": -99.566,
    "tier": 2
  },
  {
    "iata": "TOF",
    "name": "Bogashevo Airport",
    "city": "Tomsk",
    "country": "Russia",
    "lat": 56.3803,
    "lng": 85.2083,
    "tier": 3
  },
  {
    "iata": "TBU",
    "name": "Fua'amotu International Airport",
    "city": "Tongatapu",
    "country": "Tonga",
    "lat": -21.2412,
    "lng": -175.15,
    "tier": 3
  },
  {
    "iata": "TGO",
    "name": "Tongliao Airport",
    "city": "Tongliao",
    "country": "China",
    "lat": 43.5567,
    "lng": 122.2,
    "tier": 2
  },
  {
    "iata": "TGH",
    "name": "Tongoa Airport",
    "city": "Tongoa Island",
    "country": "Vanuatu",
    "lat": -16.8911,
    "lng": 168.551,
    "tier": 3
  },
  {
    "iata": "TEN",
    "name": "Tongren Fenghuang Airport",
    "city": "Tongren",
    "country": "China",
    "lat": 27.8833,
    "lng": 109.3089,
    "tier": 3
  },
  {
    "iata": "TWB",
    "name": "Toowoomba Airport",
    "city": "Toowoomba",
    "country": "Australia",
    "lat": -27.5428,
    "lng": 151.916,
    "tier": 3
  },
  {
    "iata": "FOE",
    "name": "Topeka Regional Airport - Forbes Field",
    "city": "Topeka",
    "country": "United States",
    "lat": 38.9509,
    "lng": -95.6636,
    "tier": 3
  },
  {
    "iata": "KCO",
    "name": "Cengiz Topel Airport",
    "city": "Topel",
    "country": "Turkey",
    "lat": 40.735,
    "lng": 30.0833,
    "tier": 3
  },
  {
    "iata": "TRN",
    "name": "Turin Airport",
    "city": "Torino",
    "country": "Italy",
    "lat": 45.2008,
    "lng": 7.6496,
    "tier": 1
  },
  {
    "iata": "YTZ",
    "name": "Billy Bishop Toronto City Centre Airport",
    "city": "Toronto",
    "country": "Canada",
    "lat": 43.6275,
    "lng": -79.3962,
    "tier": 2
  },
  {
    "iata": "YYZ",
    "name": "Lester B. Pearson International Airport",
    "city": "Toronto",
    "country": "Canada",
    "lat": 43.6772,
    "lng": -79.6306,
    "tier": 1
  },
  {
    "iata": "TRC",
    "name": "Francisco Sarabia International Airport",
    "city": "Torreon",
    "country": "Mexico",
    "lat": 25.5683,
    "lng": -103.411,
    "tier": 2
  },
  {
    "iata": "TYF",
    "name": "Torsby Airport",
    "city": "Torsby",
    "country": "Sweden",
    "lat": 60.1576,
    "lng": 12.9913,
    "tier": 3
  },
  {
    "iata": "EIS",
    "name": "Terrance B. Lettsome International Airport",
    "city": "Tortola",
    "country": "British Virgin Islands",
    "lat": 18.4448,
    "lng": -64.543,
    "tier": 2
  },
  {
    "iata": "GMR",
    "name": "Totegegie Airport",
    "city": "Totegegie",
    "country": "French Polynesia",
    "lat": -23.0799,
    "lng": -134.89,
    "tier": 3
  },
  {
    "iata": "TTJ",
    "name": "Tottori Airport",
    "city": "Tottori",
    "country": "Japan",
    "lat": 35.5301,
    "lng": 134.167,
    "tier": 3
  },
  {
    "iata": "TGR",
    "name": "Touggourt Sidi Madhi Airport",
    "city": "Touggourt",
    "country": "Algeria",
    "lat": 33.0678,
    "lng": 6.0887,
    "tier": 3
  },
  {
    "iata": "TOU",
    "name": "Touho Airport",
    "city": "Touho",
    "country": "New Caledonia",
    "lat": -20.79,
    "lng": 165.259,
    "tier": 3
  },
  {
    "iata": "TLS",
    "name": "Toulouse-Blagnac Airport",
    "city": "Toulouse",
    "country": "France",
    "lat": 43.6291,
    "lng": 1.3638,
    "tier": 1
  },
  {
    "iata": "TUF",
    "name": "Tours-Val-de-Loire Airport",
    "city": "Tours",
    "country": "France",
    "lat": 47.4322,
    "lng": 0.7276,
    "tier": 3
  },
  {
    "iata": "TSV",
    "name": "Townsville Airport",
    "city": "Townsville",
    "country": "Australia",
    "lat": -19.2525,
    "lng": 146.765,
    "tier": 2
  },
  {
    "iata": "TOY",
    "name": "Toyama Airport",
    "city": "Toyama",
    "country": "Japan",
    "lat": 36.6483,
    "lng": 137.188,
    "tier": 2
  },
  {
    "iata": "TOE",
    "name": "Tozeur Nefta International Airport",
    "city": "Tozeur",
    "country": "Tunisia",
    "lat": 33.9397,
    "lng": 8.1106,
    "tier": 3
  },
  {
    "iata": "TZX",
    "name": "Trabzon International Airport",
    "city": "Trabzon",
    "country": "Turkey",
    "lat": 40.9951,
    "lng": 39.7897,
    "tier": 2
  },
  {
    "iata": "YZZ",
    "name": "Trail Airport",
    "city": "Trail",
    "country": "Canada",
    "lat": 49.0556,
    "lng": -117.609,
    "tier": 3
  },
  {
    "iata": "TST",
    "name": "Trang Airport",
    "city": "Trang",
    "country": "Thailand",
    "lat": 7.5087,
    "lng": 99.6166,
    "tier": 3
  },
  {
    "iata": "TPS",
    "name": "Vincenzo Florio Airport Trapani-Birgi",
    "city": "Trapani",
    "country": "Italy",
    "lat": 37.9114,
    "lng": 12.488,
    "tier": 1
  },
  {
    "iata": "TDX",
    "name": "Trat Airport",
    "city": "Trat",
    "country": "Thailand",
    "lat": 12.2746,
    "lng": 102.319,
    "tier": 3
  },
  {
    "iata": "TVC",
    "name": "Cherry Capital Airport",
    "city": "Traverse City",
    "country": "United States",
    "lat": 44.7414,
    "lng": -85.5822,
    "tier": 3
  },
  {
    "iata": "TCB",
    "name": "Treasure Cay Airport",
    "city": "Treasure Cay",
    "country": "Bahamas",
    "lat": 26.7453,
    "lng": -77.3913,
    "tier": 3
  },
  {
    "iata": "REL",
    "name": "Almirante Marco Andres Zar Airport",
    "city": "Trelew",
    "country": "Argentina",
    "lat": -43.2105,
    "lng": -65.2703,
    "tier": 3
  },
  {
    "iata": "TTN",
    "name": "Trenton Mercer Airport",
    "city": "Trenton",
    "country": "United States",
    "lat": 40.2767,
    "lng": -74.8135,
    "tier": 2
  },
  {
    "iata": "TSF",
    "name": "Treviso-Sant'Angelo Airport",
    "city": "Treviso",
    "country": "Italy",
    "lat": 45.6484,
    "lng": 12.1944,
    "tier": 1
  },
  {
    "iata": "TRR",
    "name": "China Bay Airport",
    "city": "Trinciomalee",
    "country": "Sri Lanka",
    "lat": 8.5385,
    "lng": 81.1819,
    "tier": 3
  },
  {
    "iata": "TDD",
    "name": "Teniente Av. Jorge Henrich Arauz Airport",
    "city": "Trinidad",
    "country": "Bolivia",
    "lat": -14.8187,
    "lng": -64.918,
    "tier": 2
  },
  {
    "iata": "TIP",
    "name": "Tripoli International Airport",
    "city": "Tripoli",
    "country": "Libya",
    "lat": 32.6635,
    "lng": 13.159,
    "tier": 1
  },
  {
    "iata": "TRV",
    "name": "Trivandrum International Airport",
    "city": "Trivandrum",
    "country": "India",
    "lat": 8.4821,
    "lng": 76.9201,
    "tier": 1
  },
  {
    "iata": "THN",
    "name": "Trollhättan-Vänersborg Airport",
    "city": "Trollhattan",
    "country": "Sweden",
    "lat": 58.3181,
    "lng": 12.345,
    "tier": 3
  },
  {
    "iata": "TOS",
    "name": "Tromsø Airport,",
    "city": "Tromso",
    "country": "Norway",
    "lat": 69.6833,
    "lng": 18.9189,
    "tier": 1
  },
  {
    "iata": "TRD",
    "name": "Trondheim Airport Værnes",
    "city": "Trondheim",
    "country": "Norway",
    "lat": 63.4578,
    "lng": 10.924,
    "tier": 1
  },
  {
    "iata": "TRU",
    "name": "Capitan FAP Carlos Martinez De Pinillos International Airport",
    "city": "Trujillo",
    "country": "Peru",
    "lat": -8.0814,
    "lng": -79.1088,
    "tier": 3
  },
  {
    "iata": "TSE",
    "name": "Astana International Airport",
    "city": "Tselinograd",
    "country": "Kazakhstan",
    "lat": 51.0222,
    "lng": 71.4669,
    "tier": 1
  },
  {
    "iata": "TSH",
    "name": "Tshikapa Airport",
    "city": "Tshikapa",
    "country": "Congo (Kinshasa)",
    "lat": -6.4383,
    "lng": 20.7947,
    "tier": 3
  },
  {
    "iata": "TSJ",
    "name": "Tsushima Airport",
    "city": "Tsushima",
    "country": "Japan",
    "lat": 34.2849,
    "lng": 129.331,
    "tier": 3
  },
  {
    "iata": "TUB",
    "name": "Tubuai Airport",
    "city": "Tubuai",
    "country": "French Polynesia",
    "lat": -23.3654,
    "lng": -149.524,
    "tier": 3
  },
  {
    "iata": "TUS",
    "name": "Tucson International Airport",
    "city": "Tucson",
    "country": "United States",
    "lat": 32.1161,
    "lng": -110.941,
    "tier": 1
  },
  {
    "iata": "TUC",
    "name": "Teniente Benjamin Matienzo Airport",
    "city": "Tucuman",
    "country": "Argentina",
    "lat": -26.8409,
    "lng": -65.1049,
    "tier": 3
  },
  {
    "iata": "TUR",
    "name": "Tucuruí Airport",
    "city": "Tucurui",
    "country": "Brazil",
    "lat": -3.786,
    "lng": -49.7203,
    "tier": 3
  },
  {
    "iata": "TUG",
    "name": "Tuguegarao Airport",
    "city": "Tuguegarao",
    "country": "Philippines",
    "lat": 17.6434,
    "lng": 121.7332,
    "tier": 3
  },
  {
    "iata": "YUB",
    "name": "Tuktoyaktuk Airport",
    "city": "Tuktoyaktuk",
    "country": "Canada",
    "lat": 69.4333,
    "lng": -133.026,
    "tier": 3
  },
  {
    "iata": "TUA",
    "name": "Teniente Coronel Luis a Mantilla Airport",
    "city": "Tulcan",
    "country": "Ecuador",
    "lat": 0.8095,
    "lng": -77.7081,
    "tier": 3
  },
  {
    "iata": "ZFN",
    "name": "Tulita Airport",
    "city": "Tulita",
    "country": "Canada",
    "lat": 64.9097,
    "lng": -125.573,
    "tier": 3
  },
  {
    "iata": "TUL",
    "name": "Tulsa International Airport",
    "city": "Tulsa",
    "country": "United States",
    "lat": 36.1984,
    "lng": -95.8881,
    "tier": 1
  },
  {
    "iata": "TCO",
    "name": "La Florida Airport",
    "city": "Tumaco",
    "country": "Colombia",
    "lat": 1.8144,
    "lng": -78.7492,
    "tier": 3
  },
  {
    "iata": "TBP",
    "name": "Capitan FAP Pedro Canga Rodriguez Airport",
    "city": "Tumbes",
    "country": "Peru",
    "lat": -3.5525,
    "lng": -80.3814,
    "tier": 3
  },
  {
    "iata": "TMI",
    "name": "Tumling Tar Airport",
    "city": "Tumling Tar",
    "country": "Nepal",
    "lat": 27.315,
    "lng": 87.1933,
    "tier": 3
  },
  {
    "iata": "TUN",
    "name": "Tunis Carthage International Airport",
    "city": "Tunis",
    "country": "Tunisia",
    "lat": 36.851,
    "lng": 10.2272,
    "tier": 1
  },
  {
    "iata": "TUP",
    "name": "Tupelo Regional Airport",
    "city": "Tupelo",
    "country": "United States",
    "lat": 34.2681,
    "lng": -88.7699,
    "tier": 3
  },
  {
    "iata": "TUI",
    "name": "Turaif Domestic Airport",
    "city": "Turaif",
    "country": "Saudi Arabia",
    "lat": 31.6922,
    "lng": 38.7315,
    "tier": 3
  },
  {
    "iata": "TUK",
    "name": "Turbat International Airport",
    "city": "Turbat",
    "country": "Pakistan",
    "lat": 25.9864,
    "lng": 63.0302,
    "tier": 3
  },
  {
    "iata": "TKU",
    "name": "Turku Airport",
    "city": "Turku",
    "country": "Finland",
    "lat": 60.5141,
    "lng": 22.2628,
    "tier": 2
  },
  {
    "iata": "THX",
    "name": "Turukhansk Airport",
    "city": "Turukhansk",
    "country": "Russia",
    "lat": 65.7972,
    "lng": 87.9353,
    "tier": 3
  },
  {
    "iata": "TGZ",
    "name": "Angel Albino Corzo International Airport",
    "city": "Tuxtla Gutierrez",
    "country": "Mexico",
    "lat": 16.5636,
    "lng": -93.0225,
    "tier": 2
  },
  {
    "iata": "TBB",
    "name": "Dong Tac Airport",
    "city": "Tuy Hoa",
    "country": "Vietnam",
    "lat": 13.0496,
    "lng": 109.334,
    "tier": 3
  },
  {
    "iata": "TWF",
    "name": "Joslin Field Magic Valley Regional Airport",
    "city": "Twin Falls",
    "country": "United States",
    "lat": 42.4818,
    "lng": -114.488,
    "tier": 3
  },
  {
    "iata": "TYR",
    "name": "Tyler Pounds Regional Airport",
    "city": "Tyler",
    "country": "United States",
    "lat": 32.3541,
    "lng": -95.4024,
    "tier": 3
  },
  {
    "iata": "TJM",
    "name": "Roshchino International Airport",
    "city": "Tyumen",
    "country": "Russia",
    "lat": 57.1896,
    "lng": 65.3243,
    "tier": 2
  },
  {
    "iata": "ZTB",
    "name": "Tête-à-la-Baleine Airport",
    "city": "Tête-à-la-Baleine",
    "country": "Canada",
    "lat": 50.6744,
    "lng": -59.3836,
    "tier": 3
  },
  {
    "iata": "UAH",
    "name": "Ua Huka Airport",
    "city": "Ua Huka",
    "country": "French Polynesia",
    "lat": -8.9361,
    "lng": -139.552,
    "tier": 3
  },
  {
    "iata": "UAP",
    "name": "Ua Pou Airport",
    "city": "Ua Pou",
    "country": "French Polynesia",
    "lat": -9.3517,
    "lng": -140.078,
    "tier": 3
  },
  {
    "iata": "UBA",
    "name": "Mário de Almeida Franco Airport",
    "city": "Uberaba",
    "country": "Brazil",
    "lat": -19.7647,
    "lng": -47.9661,
    "tier": 3
  },
  {
    "iata": "UDI",
    "name": "Ten. Cel. Aviador César Bombonato Airport",
    "city": "Uberlandia",
    "country": "Brazil",
    "lat": -18.8836,
    "lng": -48.2253,
    "tier": 2
  },
  {
    "iata": "UBP",
    "name": "Ubon Ratchathani Airport",
    "city": "Ubon Ratchathani",
    "country": "Thailand",
    "lat": 15.2513,
    "lng": 104.87,
    "tier": 3
  },
  {
    "iata": "UDR",
    "name": "Maharana Pratap Airport",
    "city": "Udaipur",
    "country": "India",
    "lat": 24.6177,
    "lng": 73.8961,
    "tier": 2
  },
  {
    "iata": "UTH",
    "name": "Udon Thani Airport",
    "city": "Udon Thani",
    "country": "Thailand",
    "lat": 17.3864,
    "lng": 102.788,
    "tier": 2
  },
  {
    "iata": "UFA",
    "name": "Ufa International Airport",
    "city": "Ufa",
    "country": "Russia",
    "lat": 54.5575,
    "lng": 55.8744,
    "tier": 2
  },
  {
    "iata": "UPG",
    "name": "Hasanuddin International Airport",
    "city": "Ujung Pandang",
    "country": "Indonesia",
    "lat": -5.0616,
    "lng": 119.554,
    "tier": 1
  },
  {
    "iata": "UCT",
    "name": "Ukhta Airport",
    "city": "Ukhta",
    "country": "Russia",
    "lat": 63.5669,
    "lng": 53.8047,
    "tier": 3
  },
  {
    "iata": "UKA",
    "name": "Ukunda Airstrip",
    "city": "Ukunda",
    "country": "Kenya",
    "lat": -4.2933,
    "lng": 39.5711,
    "tier": 3
  },
  {
    "iata": "ULO",
    "name": "Ulaangom Airport",
    "city": "Ulaangom",
    "country": "Mongolia",
    "lat": 50.0666,
    "lng": 91.9383,
    "tier": 3
  },
  {
    "iata": "ULN",
    "name": "Chinggis Khaan International Airport",
    "city": "Ulan Bator",
    "country": "Mongolia",
    "lat": 47.8431,
    "lng": 106.767,
    "tier": 2
  },
  {
    "iata": "UUD",
    "name": "Ulan-Ude Airport (Mukhino)",
    "city": "Ulan-ude",
    "country": "Russia",
    "lat": 51.8078,
    "lng": 107.438,
    "tier": 2
  },
  {
    "iata": "HLH",
    "name": "Ulanhot Airport",
    "city": "Ulanhot",
    "country": "China",
    "lat": 46.1953,
    "lng": 122.0083,
    "tier": 2
  },
  {
    "iata": "RNA",
    "name": "Ulawa Airport",
    "city": "Ulawa",
    "country": "Solomon Islands",
    "lat": -9.8605,
    "lng": 161.9795,
    "tier": 3
  },
  {
    "iata": "ULZ",
    "name": "Donoi Airport",
    "city": "Uliastai",
    "country": "Mongolia",
    "lat": 47.7093,
    "lng": 96.5258,
    "tier": 3
  },
  {
    "iata": "USN",
    "name": "Ulsan Airport",
    "city": "Ulsan",
    "country": "South Korea",
    "lat": 35.5935,
    "lng": 129.352,
    "tier": 3
  },
  {
    "iata": "AYQ",
    "name": "Ayers Rock Connellan Airport",
    "city": "Uluru",
    "country": "Australia",
    "lat": -25.1861,
    "lng": 130.976,
    "tier": 3
  },
  {
    "iata": "ULV",
    "name": "Ulyanovsk Baratayevka Airport",
    "city": "Ulyanovsk",
    "country": "Russia",
    "lat": 54.2683,
    "lng": 48.2267,
    "tier": 3
  },
  {
    "iata": "UME",
    "name": "Umeå Airport",
    "city": "Umea",
    "country": "Sweden",
    "lat": 63.7918,
    "lng": 20.2828,
    "tier": 2
  },
  {
    "iata": "YUD",
    "name": "Umiujaq Airport",
    "city": "Umiujaq",
    "country": "Canada",
    "lat": 56.5361,
    "lng": -76.5183,
    "tier": 3
  },
  {
    "iata": "UTT",
    "name": "K. D. Matanzima Airport",
    "city": "Umtata",
    "country": "South Africa",
    "lat": -31.5464,
    "lng": 28.6734,
    "tier": 3
  },
  {
    "iata": "UNK",
    "name": "Unalakleet Airport",
    "city": "Unalakleet",
    "country": "United States",
    "lat": 63.8884,
    "lng": -160.799,
    "tier": 2
  },
  {
    "iata": "DUT",
    "name": "Unalaska Airport",
    "city": "Unalaska",
    "country": "United States",
    "lat": 53.9001,
    "lng": -166.544,
    "tier": 3
  },
  {
    "iata": "JUV",
    "name": "Upernavik Airport",
    "city": "Upernavik",
    "country": "Greenland",
    "lat": 72.7902,
    "lng": -56.1306,
    "tier": 3
  },
  {
    "iata": "UTN",
    "name": "Pierre Van Ryneveld Airport",
    "city": "Upington",
    "country": "South Africa",
    "lat": -28.3991,
    "lng": 21.2602,
    "tier": 3
  },
  {
    "iata": "URJ",
    "name": "Uray Airport",
    "city": "Uraj",
    "country": "Russia",
    "lat": 60.1033,
    "lng": 64.8267,
    "tier": 3
  },
  {
    "iata": "URA",
    "name": "Uralsk Airport",
    "city": "Uralsk",
    "country": "Kazakhstan",
    "lat": 51.1508,
    "lng": 51.5431,
    "tier": 3
  },
  {
    "iata": "UGC",
    "name": "Urgench Airport",
    "city": "Urgench",
    "country": "Uzbekistan",
    "lat": 41.5843,
    "lng": 60.6417,
    "tier": 2
  },
  {
    "iata": "OMH",
    "name": "Urmia Airport",
    "city": "Uromiyeh",
    "country": "Iran",
    "lat": 37.6681,
    "lng": 45.0687,
    "tier": 3
  },
  {
    "iata": "UPN",
    "name": "Licenciado y General Ignacio Lopez Rayon Airport",
    "city": "Uruapan",
    "country": "Mexico",
    "lat": 19.3967,
    "lng": -102.039,
    "tier": 3
  },
  {
    "iata": "URG",
    "name": "Rubem Berta Airport",
    "city": "Uruguaiana",
    "country": "Brazil",
    "lat": -29.7822,
    "lng": -57.0382,
    "tier": 3
  },
  {
    "iata": "URC",
    "name": "Ürümqi Diwopu International Airport",
    "city": "Urumqi",
    "country": "China",
    "lat": 43.9071,
    "lng": 87.4742,
    "tier": 1
  },
  {
    "iata": "USH",
    "name": "Malvinas Argentinas Airport",
    "city": "Ushuaia",
    "country": "Argentina",
    "lat": -54.8433,
    "lng": -68.2958,
    "tier": 3
  },
  {
    "iata": "USK",
    "name": "Usinsk Airport",
    "city": "Usinsk",
    "country": "Russia",
    "lat": 66.0047,
    "lng": 57.3672,
    "tier": 3
  },
  {
    "iata": "UKK",
    "name": "Ust-Kamennogorsk Airport",
    "city": "Ust Kamenogorsk",
    "country": "Kazakhstan",
    "lat": 50.0366,
    "lng": 82.4942,
    "tier": 2
  },
  {
    "iata": "UKX",
    "name": "Ust-Kut Airport",
    "city": "Ust-Kut",
    "country": "Russia",
    "lat": 56.8567,
    "lng": 105.73,
    "tier": 3
  },
  {
    "iata": "UTS",
    "name": "Ust-Tsylma Airport",
    "city": "Ust-Tsylma",
    "country": "Russia",
    "lat": 65.4373,
    "lng": 52.2003,
    "tier": 3
  },
  {
    "iata": "UII",
    "name": "Utila Airport",
    "city": "Utila",
    "country": "Honduras",
    "lat": 16.1131,
    "lng": -86.8803,
    "tier": 3
  },
  {
    "iata": "JQA",
    "name": "Qaarsut Airport",
    "city": "Uummannaq",
    "country": "Greenland",
    "lat": 70.7342,
    "lng": -52.6962,
    "tier": 3
  },
  {
    "iata": "UMD",
    "name": "Uummannaq Heliport",
    "city": "Uummannaq",
    "country": "Greenland",
    "lat": 70.6804,
    "lng": -52.1116,
    "tier": 3
  },
  {
    "iata": "QUO",
    "name": "Akwa Ibom International Airport",
    "city": "Uyo",
    "country": "Nigeria",
    "lat": 4.8725,
    "lng": 8.093,
    "tier": 3
  },
  {
    "iata": "UYU",
    "name": "Uyuni Airport",
    "city": "Uyuni",
    "country": "Bolivia",
    "lat": -20.4463,
    "lng": -66.8484,
    "tier": 3
  },
  {
    "iata": "UDJ",
    "name": "Uzhhorod International Airport",
    "city": "Uzhgorod",
    "country": "Ukraine",
    "lat": 48.6343,
    "lng": 22.2634,
    "tier": 3
  },
  {
    "iata": "VAA",
    "name": "Vaasa Airport",
    "city": "Vaasa",
    "country": "Finland",
    "lat": 63.0507,
    "lng": 21.7622,
    "tier": 3
  },
  {
    "iata": "VDS",
    "name": "Vadsø Airport",
    "city": "Vadsø",
    "country": "Norway",
    "lat": 70.0653,
    "lng": 29.8447,
    "tier": 2
  },
  {
    "iata": "FAE",
    "name": "Vagar Airport",
    "city": "Vagar",
    "country": "Faroe Islands",
    "lat": 62.0636,
    "lng": -7.2772,
    "tier": 3
  },
  {
    "iata": "EGE",
    "name": "Eagle County Regional Airport",
    "city": "Vail",
    "country": "United States",
    "lat": 39.6426,
    "lng": -106.918,
    "tier": 3
  },
  {
    "iata": "YVO",
    "name": "Val-d'Or Airport",
    "city": "Val D'or",
    "country": "Canada",
    "lat": 48.0533,
    "lng": -77.7828,
    "tier": 2
  },
  {
    "iata": "VDZ",
    "name": "Valdez Pioneer Field",
    "city": "Valdez",
    "country": "United States",
    "lat": 61.1339,
    "lng": -146.248,
    "tier": 3
  },
  {
    "iata": "ZAL",
    "name": "Pichoy Airport",
    "city": "Valdivia",
    "country": "Chile",
    "lat": -39.65,
    "lng": -73.0861,
    "tier": 3
  },
  {
    "iata": "VLD",
    "name": "Valdosta Regional Airport",
    "city": "Valdosta",
    "country": "United States",
    "lat": 30.7825,
    "lng": -83.2767,
    "tier": 3
  },
  {
    "iata": "VLC",
    "name": "Valencia Airport",
    "city": "Valencia",
    "country": "Spain",
    "lat": 39.4893,
    "lng": -0.4816,
    "tier": 1
  },
  {
    "iata": "VLN",
    "name": "Arturo Michelena International Airport",
    "city": "Valencia",
    "country": "Venezuela",
    "lat": 10.1497,
    "lng": -67.9284,
    "tier": 2
  },
  {
    "iata": "VLV",
    "name": "Dr. Antonio Nicolás Briceño Airport",
    "city": "Valera",
    "country": "Venezuela",
    "lat": 9.3405,
    "lng": -70.5841,
    "tier": 3
  },
  {
    "iata": "VLS",
    "name": "Valesdir Airport",
    "city": "Valesdir",
    "country": "Vanuatu",
    "lat": -16.7961,
    "lng": 168.177,
    "tier": 3
  },
  {
    "iata": "VLL",
    "name": "Valladolid Airport",
    "city": "Valladolid",
    "country": "Spain",
    "lat": 41.7061,
    "lng": -4.8519,
    "tier": 3
  },
  {
    "iata": "VUP",
    "name": "Alfonso López Pumarejo Airport",
    "city": "Valledupar",
    "country": "Colombia",
    "lat": 10.435,
    "lng": -73.2495,
    "tier": 3
  },
  {
    "iata": "VPS",
    "name": "Destin-Ft Walton Beach Airport",
    "city": "Valparaiso",
    "country": "United States",
    "lat": 30.4832,
    "lng": -86.5254,
    "tier": 2
  },
  {
    "iata": "VAN",
    "name": "Van Ferit Melen Airport",
    "city": "Van",
    "country": "Turkey",
    "lat": 38.4682,
    "lng": 43.3323,
    "tier": 3
  },
  {
    "iata": "CXH",
    "name": "Vancouver Harbour Water Aerodrome",
    "city": "Vancouver",
    "country": "Canada",
    "lat": 49.2944,
    "lng": -123.111,
    "tier": 3
  },
  {
    "iata": "YVR",
    "name": "Vancouver International Airport",
    "city": "Vancouver",
    "country": "Canada",
    "lat": 49.1939,
    "lng": -123.184,
    "tier": 1
  },
  {
    "iata": "VAI",
    "name": "Vanimo Airport",
    "city": "Vanimo",
    "country": "Papua New Guinea",
    "lat": -2.6926,
    "lng": 141.3028,
    "tier": 3
  },
  {
    "iata": "VBV",
    "name": "Vanua Balavu Airport",
    "city": "Vanua Balavu",
    "country": "Fiji",
    "lat": -17.269,
    "lng": -178.976,
    "tier": 3
  },
  {
    "iata": "VRA",
    "name": "Juan Gualberto Gomez International Airport",
    "city": "Varadero",
    "country": "Cuba",
    "lat": 23.0344,
    "lng": -81.4353,
    "tier": 2
  },
  {
    "iata": "VNS",
    "name": "Lal Bahadur Shastri Airport",
    "city": "Varanasi",
    "country": "India",
    "lat": 25.4524,
    "lng": 82.8593,
    "tier": 2
  },
  {
    "iata": "VAW",
    "name": "Vardø Airport, Svartnes",
    "city": "Vardø",
    "country": "Norway",
    "lat": 70.3554,
    "lng": 31.0449,
    "tier": 3
  },
  {
    "iata": "VAR",
    "name": "Varna Airport",
    "city": "Varna",
    "country": "Bulgaria",
    "lat": 43.2321,
    "lng": 27.8251,
    "tier": 2
  },
  {
    "iata": "VST",
    "name": "Stockholm Västerås Airport",
    "city": "Vasteras",
    "country": "Sweden",
    "lat": 59.5894,
    "lng": 16.6336,
    "tier": 3
  },
  {
    "iata": "VXO",
    "name": "Växjö Kronoberg Airport",
    "city": "Vaxjo",
    "country": "Sweden",
    "lat": 56.9291,
    "lng": 14.728,
    "tier": 2
  },
  {
    "iata": "VUS",
    "name": "Velikiy Ustyug Airport",
    "city": "Veliky Ustyug",
    "country": "Russia",
    "lat": 60.7883,
    "lng": 46.26,
    "tier": 3
  },
  {
    "iata": "VEE",
    "name": "Venetie Airport",
    "city": "Venetie",
    "country": "United States",
    "lat": 67.0087,
    "lng": -146.366,
    "tier": 3
  },
  {
    "iata": "VCE",
    "name": "Venice Marco Polo Airport",
    "city": "Venice",
    "country": "Italy",
    "lat": 45.5053,
    "lng": 12.3519,
    "tier": 1
  },
  {
    "iata": "VER",
    "name": "General Heriberto Jara International Airport",
    "city": "Vera Cruz",
    "country": "Mexico",
    "lat": 19.1459,
    "lng": -96.1873,
    "tier": 2
  },
  {
    "iata": "VEL",
    "name": "Vernal Regional Airport",
    "city": "Vernal",
    "country": "United States",
    "lat": 40.4409,
    "lng": -109.51,
    "tier": 3
  },
  {
    "iata": "VCT",
    "name": "Victoria Regional Airport",
    "city": "Victoria",
    "country": "United States",
    "lat": 28.8526,
    "lng": -96.9185,
    "tier": 3
  },
  {
    "iata": "YWH",
    "name": "Victoria Harbour Seaplane Base",
    "city": "Victoria",
    "country": "Canada",
    "lat": 48.425,
    "lng": -123.3889,
    "tier": 3
  },
  {
    "iata": "YYJ",
    "name": "Victoria International Airport",
    "city": "Victoria",
    "country": "Canada",
    "lat": 48.6469,
    "lng": -123.426,
    "tier": 2
  },
  {
    "iata": "VFA",
    "name": "Victoria Falls International Airport",
    "city": "Victoria Falls",
    "country": "Zimbabwe",
    "lat": -18.0959,
    "lng": 25.839,
    "tier": 2
  },
  {
    "iata": "VDM",
    "name": "Gobernador Castello Airport",
    "city": "Viedma",
    "country": "Argentina",
    "lat": -40.8692,
    "lng": -63.0004,
    "tier": 3
  },
  {
    "iata": "VIE",
    "name": "Vienna International Airport",
    "city": "Vienna",
    "country": "Austria",
    "lat": 48.1103,
    "lng": 16.5697,
    "tier": 1
  },
  {
    "iata": "VTE",
    "name": "Wattay International Airport",
    "city": "Vientiane",
    "country": "Laos",
    "lat": 17.9883,
    "lng": 102.563,
    "tier": 1
  },
  {
    "iata": "VQS",
    "name": "Vieques Airport",
    "city": "Vieques Island",
    "country": "Puerto Rico",
    "lat": 18.1158,
    "lng": -65.4227,
    "tier": 2
  },
  {
    "iata": "VGO",
    "name": "Vigo Airport",
    "city": "Vigo",
    "country": "Spain",
    "lat": 42.2318,
    "lng": -8.6268,
    "tier": 2
  },
  {
    "iata": "VGA",
    "name": "Vijayawada Airport",
    "city": "Vijayawada",
    "country": "India",
    "lat": 16.5304,
    "lng": 80.7968,
    "tier": 3
  },
  {
    "iata": "VNX",
    "name": "Vilankulo Airport",
    "city": "Vilankulu",
    "country": "Mozambique",
    "lat": -22.0184,
    "lng": 35.3133,
    "tier": 3
  },
  {
    "iata": "VHM",
    "name": "Vilhelmina Airport",
    "city": "Vilhelmina",
    "country": "Sweden",
    "lat": 64.5791,
    "lng": 16.8336,
    "tier": 3
  },
  {
    "iata": "BVH",
    "name": "Brigadeiro Camarão Airport",
    "city": "Vilhena",
    "country": "Brazil",
    "lat": -12.6944,
    "lng": -60.0983,
    "tier": 3
  },
  {
    "iata": "VGZ",
    "name": "Villa Garzón Airport",
    "city": "Villa Garzon",
    "country": "Colombia",
    "lat": 0.9788,
    "lng": -76.6056,
    "tier": 3
  },
  {
    "iata": "VRN",
    "name": "Verona Villafranca Airport",
    "city": "Villafranca",
    "country": "Italy",
    "lat": 45.3957,
    "lng": 10.8885,
    "tier": 1
  },
  {
    "iata": "VSA",
    "name": "Carlos Rovirosa Pérez International Airport",
    "city": "Villahermosa",
    "country": "Mexico",
    "lat": 17.997,
    "lng": -92.8174,
    "tier": 2
  },
  {
    "iata": "VVC",
    "name": "Vanguardia Airport",
    "city": "Villavicencio",
    "country": "Colombia",
    "lat": 4.1679,
    "lng": -73.6138,
    "tier": 2
  },
  {
    "iata": "VNO",
    "name": "Vilnius International Airport",
    "city": "Vilnius",
    "country": "Lithuania",
    "lat": 54.6341,
    "lng": 25.2858,
    "tier": 1
  },
  {
    "iata": "MVY",
    "name": "Martha's Vineyard Airport",
    "city": "Vineyard Haven MA",
    "country": "United States",
    "lat": 41.3931,
    "lng": -70.6143,
    "tier": 3
  },
  {
    "iata": "VII",
    "name": "Vinh Airport",
    "city": "Vinh",
    "country": "Vietnam",
    "lat": 18.7376,
    "lng": 105.671,
    "tier": 2
  },
  {
    "iata": "VIN",
    "name": "Vinnytsia/Gavyryshivka Airport",
    "city": "Vinnitsa",
    "country": "Ukraine",
    "lat": 49.2425,
    "lng": 28.6138,
    "tier": 3
  },
  {
    "iata": "VRC",
    "name": "Virac Airport",
    "city": "Virac",
    "country": "Philippines",
    "lat": 13.5764,
    "lng": 124.206,
    "tier": 3
  },
  {
    "iata": "VIS",
    "name": "Visalia Municipal Airport",
    "city": "Visalia",
    "country": "United States",
    "lat": 36.3187,
    "lng": -119.393,
    "tier": 3
  },
  {
    "iata": "VBY",
    "name": "Visby Airport",
    "city": "Visby",
    "country": "Sweden",
    "lat": 57.6628,
    "lng": 18.3462,
    "tier": 2
  },
  {
    "iata": "VTZ",
    "name": "Vishakhapatnam Airport",
    "city": "Vishakhapatnam",
    "country": "India",
    "lat": 17.7212,
    "lng": 83.2245,
    "tier": 2
  },
  {
    "iata": "VIX",
    "name": "Eurico de Aguiar Salles Airport",
    "city": "Vitoria",
    "country": "Brazil",
    "lat": -20.2581,
    "lng": -40.2864,
    "tier": 2
  },
  {
    "iata": "VDC",
    "name": "Vitória da Conquista Airport",
    "city": "Vitória Da Conquista",
    "country": "Brazil",
    "lat": -14.8628,
    "lng": -40.8631,
    "tier": 2
  },
  {
    "iata": "VVO",
    "name": "Vladivostok International Airport",
    "city": "Vladivostok",
    "country": "Russia",
    "lat": 43.399,
    "lng": 132.148,
    "tier": 1
  },
  {
    "iata": "VOG",
    "name": "Volgograd International Airport",
    "city": "Volgograd",
    "country": "Russia",
    "lat": 48.7825,
    "lng": 44.3455,
    "tier": 2
  },
  {
    "iata": "VKT",
    "name": "Vorkuta Airport",
    "city": "Vorkuta",
    "country": "Russia",
    "lat": 67.4886,
    "lng": 63.9931,
    "tier": 3
  },
  {
    "iata": "VOZ",
    "name": "Voronezh International Airport",
    "city": "Voronezh",
    "country": "Russia",
    "lat": 51.8142,
    "lng": 39.2296,
    "tier": 2
  },
  {
    "iata": "KDV",
    "name": "Vunisea Airport",
    "city": "Vunisea",
    "country": "Fiji",
    "lat": -19.0581,
    "lng": 178.157,
    "tier": 3
  },
  {
    "iata": "BMY",
    "name": "Île Art - Waala Airport",
    "city": "Waala",
    "country": "New Caledonia",
    "lat": -19.7206,
    "lng": 163.661,
    "tier": 3
  },
  {
    "iata": "YWK",
    "name": "Wabush Airport",
    "city": "Wabush",
    "country": "Canada",
    "lat": 52.9219,
    "lng": -66.8644,
    "tier": 2
  },
  {
    "iata": "ACT",
    "name": "Waco Regional Airport",
    "city": "Waco",
    "country": "United States",
    "lat": 31.6113,
    "lng": -97.2305,
    "tier": 3
  },
  {
    "iata": "WAE",
    "name": "Wadi Al Dawasir Airport",
    "city": "Wadi-al-dawasir",
    "country": "Saudi Arabia",
    "lat": 20.5043,
    "lng": 45.1996,
    "tier": 3
  },
  {
    "iata": "WGA",
    "name": "Wagga Wagga City Airport",
    "city": "Wagga Wagga",
    "country": "Australia",
    "lat": -35.1653,
    "lng": 147.466,
    "tier": 3
  },
  {
    "iata": "TMC",
    "name": "Tambolaka Airport",
    "city": "Waikabubak-Sumba Island",
    "country": "Indonesia",
    "lat": -9.4097,
    "lng": 119.244,
    "tier": 3
  },
  {
    "iata": "WGP",
    "name": "Umbu Mehang Kunda Airport",
    "city": "Waingapu",
    "country": "Indonesia",
    "lat": -9.6692,
    "lng": 120.302,
    "tier": 3
  },
  {
    "iata": "AIN",
    "name": "Wainwright Airport",
    "city": "Wainwright",
    "country": "United States",
    "lat": 70.638,
    "lng": -159.995,
    "tier": 3
  },
  {
    "iata": "NTQ",
    "name": "Noto Airport",
    "city": "Wajima",
    "country": "Japan",
    "lat": 37.2931,
    "lng": 136.962,
    "tier": 3
  },
  {
    "iata": "WJR",
    "name": "Wajir Airport",
    "city": "Wajir",
    "country": "Kenya",
    "lat": 1.7332,
    "lng": 40.0916,
    "tier": 2
  },
  {
    "iata": "WKJ",
    "name": "Wakkanai Airport",
    "city": "Wakkanai",
    "country": "Japan",
    "lat": 45.4042,
    "lng": 141.801,
    "tier": 3
  },
  {
    "iata": "WLH",
    "name": "Walaha Airport",
    "city": "Walaha",
    "country": "Vanuatu",
    "lat": -15.412,
    "lng": 167.691,
    "tier": 3
  },
  {
    "iata": "WAA",
    "name": "Wales Airport",
    "city": "Wales",
    "country": "United States",
    "lat": 65.6226,
    "lng": -168.095,
    "tier": 3
  },
  {
    "iata": "ALW",
    "name": "Walla Walla Regional Airport",
    "city": "Walla Walla",
    "country": "United States",
    "lat": 46.0949,
    "lng": -118.288,
    "tier": 3
  },
  {
    "iata": "WLS",
    "name": "Hihifo Airport",
    "city": "Wallis",
    "country": "Wallis and Futuna",
    "lat": -13.2383,
    "lng": -176.199,
    "tier": 3
  },
  {
    "iata": "WVB",
    "name": "Walvis Bay Airport",
    "city": "Walvis Bay",
    "country": "Namibia",
    "lat": -22.9799,
    "lng": 14.6453,
    "tier": 3
  },
  {
    "iata": "WMX",
    "name": "Wamena Airport",
    "city": "Wamena",
    "country": "Indonesia",
    "lat": -4.1025,
    "lng": 138.957,
    "tier": 3
  },
  {
    "iata": "WAG",
    "name": "Wanganui Airport",
    "city": "Wanganui",
    "country": "New Zealand",
    "lat": -39.9622,
    "lng": 175.025,
    "tier": 3
  },
  {
    "iata": "WXN",
    "name": "Wanxian Airport",
    "city": "Wanxian",
    "country": "China",
    "lat": 30.8017,
    "lng": 108.433,
    "tier": 2
  },
  {
    "iata": "WBM",
    "name": "Wapenamanda Airport",
    "city": "Wapenamanda",
    "country": "Papua New Guinea",
    "lat": -5.6433,
    "lng": 143.895,
    "tier": 3
  },
  {
    "iata": "WAW",
    "name": "Warsaw Chopin Airport",
    "city": "Warsaw",
    "country": "Poland",
    "lat": 52.1657,
    "lng": 20.9671,
    "tier": 1
  },
  {
    "iata": "WMI",
    "name": "Modlin Airport",
    "city": "Warsaw",
    "country": "Poland",
    "lat": 52.4511,
    "lng": 20.6518,
    "tier": 1
  },
  {
    "iata": "DCA",
    "name": "Ronald Reagan Washington National Airport",
    "city": "Washington",
    "country": "United States",
    "lat": 38.8521,
    "lng": -77.0377,
    "tier": 1
  },
  {
    "iata": "IAD",
    "name": "Washington Dulles International Airport",
    "city": "Washington",
    "country": "United States",
    "lat": 38.9445,
    "lng": -77.4558,
    "tier": 1
  },
  {
    "iata": "YKQ",
    "name": "Waskaganish Airport",
    "city": "Waskaganish",
    "country": "Canada",
    "lat": 51.4733,
    "lng": -78.7583,
    "tier": 2
  },
  {
    "iata": "CWA",
    "name": "Central Wisconsin Airport",
    "city": "Wassau",
    "country": "United States",
    "lat": 44.7776,
    "lng": -89.6668,
    "tier": 3
  },
  {
    "iata": "WAT",
    "name": "Waterford Airport",
    "city": "Waterford",
    "country": "Ireland",
    "lat": 52.1872,
    "lng": -7.087,
    "tier": 3
  },
  {
    "iata": "ALO",
    "name": "Waterloo Regional Airport",
    "city": "Waterloo",
    "country": "United States",
    "lat": 42.5571,
    "lng": -92.4003,
    "tier": 3
  },
  {
    "iata": "YKF",
    "name": "Waterloo Airport",
    "city": "Waterloo",
    "country": "Canada",
    "lat": 43.4608,
    "lng": -80.3786,
    "tier": 3
  },
  {
    "iata": "ART",
    "name": "Watertown International Airport",
    "city": "Watertown",
    "country": "United States",
    "lat": 43.9919,
    "lng": -76.0217,
    "tier": 3
  },
  {
    "iata": "ATY",
    "name": "Watertown Regional Airport",
    "city": "Watertown",
    "country": "United States",
    "lat": 44.914,
    "lng": -97.1547,
    "tier": 3
  },
  {
    "iata": "YWP",
    "name": "Webequie Airport",
    "city": "Webequie",
    "country": "Canada",
    "lat": 52.9594,
    "lng": -87.3749,
    "tier": 3
  },
  {
    "iata": "NRN",
    "name": "Weeze Airport",
    "city": "Weeze",
    "country": "Germany",
    "lat": 51.6024,
    "lng": 6.1422,
    "tier": 1
  },
  {
    "iata": "WEF",
    "name": "Weifang Airport",
    "city": "Weifang",
    "country": "China",
    "lat": 36.6467,
    "lng": 119.119,
    "tier": 2
  },
  {
    "iata": "WEI",
    "name": "Weipa Airport",
    "city": "Weipa",
    "country": "Australia",
    "lat": -12.6786,
    "lng": 141.925,
    "tier": 3
  },
  {
    "iata": "EJH",
    "name": "Al Wajh Domestic Airport",
    "city": "Wejh",
    "country": "Saudi Arabia",
    "lat": 26.1986,
    "lng": 36.4764,
    "tier": 3
  },
  {
    "iata": "YFJ",
    "name": "Wekweètì Airport",
    "city": "Wekweeti",
    "country": "Canada",
    "lat": 64.1908,
    "lng": -114.077,
    "tier": 3
  },
  {
    "iata": "WLG",
    "name": "Wellington International Airport",
    "city": "Wellington",
    "country": "New Zealand",
    "lat": -41.3272,
    "lng": 174.805,
    "tier": 1
  },
  {
    "iata": "YNC",
    "name": "Wemindji Airport",
    "city": "Wemindji",
    "country": "Canada",
    "lat": 53.0106,
    "lng": -78.8311,
    "tier": 3
  },
  {
    "iata": "EAT",
    "name": "Pangborn Memorial Airport",
    "city": "Wenatchee",
    "country": "United States",
    "lat": 47.3989,
    "lng": -120.207,
    "tier": 3
  },
  {
    "iata": "WNZ",
    "name": "Wenzhou Longwan International Airport",
    "city": "Wenzhou",
    "country": "China",
    "lat": 27.9122,
    "lng": 120.852,
    "tier": 1
  },
  {
    "iata": "PBI",
    "name": "Palm Beach International Airport",
    "city": "West Palm Beach",
    "country": "United States",
    "lat": 26.6832,
    "lng": -80.0956,
    "tier": 1
  },
  {
    "iata": "GWT",
    "name": "Westerland Sylt Airport",
    "city": "Westerland",
    "country": "Germany",
    "lat": 54.9132,
    "lng": 8.3405,
    "tier": 2
  },
  {
    "iata": "WSZ",
    "name": "Westport Airport",
    "city": "Westport",
    "country": "New Zealand",
    "lat": -41.7381,
    "lng": 171.581,
    "tier": 3
  },
  {
    "iata": "WRY",
    "name": "Westray Airport",
    "city": "Westray",
    "country": "United Kingdom",
    "lat": 59.3503,
    "lng": -2.95,
    "tier": 3
  },
  {
    "iata": "WWK",
    "name": "Wewak International Airport",
    "city": "Wewak",
    "country": "Papua New Guinea",
    "lat": -3.5838,
    "lng": 143.669,
    "tier": 2
  },
  {
    "iata": "SHD",
    "name": "Shenandoah Valley Regional Airport",
    "city": "Weyers Cave",
    "country": "United States",
    "lat": 38.2638,
    "lng": -78.8964,
    "tier": 3
  },
  {
    "iata": "WHK",
    "name": "Whakatane Airport",
    "city": "Whakatane",
    "country": "New Zealand",
    "lat": -37.9206,
    "lng": 176.914,
    "tier": 3
  },
  {
    "iata": "YXN",
    "name": "Whale Cove Airport",
    "city": "Whale Cove",
    "country": "Canada",
    "lat": 62.24,
    "lng": -92.5981,
    "tier": 3
  },
  {
    "iata": "WRE",
    "name": "Whangarei Airport",
    "city": "Whangarei",
    "country": "New Zealand",
    "lat": -35.7683,
    "lng": 174.365,
    "tier": 3
  },
  {
    "iata": "YLE",
    "name": "Whatì Airport",
    "city": "Whatì",
    "country": "Canada",
    "lat": 63.1317,
    "lng": -117.246,
    "tier": 3
  },
  {
    "iata": "WMO",
    "name": "White Mountain Airport",
    "city": "White Mountain",
    "country": "United States",
    "lat": 64.6892,
    "lng": -163.413,
    "tier": 3
  },
  {
    "iata": "HPN",
    "name": "Westchester County Airport",
    "city": "White Plains",
    "country": "United States",
    "lat": 41.067,
    "lng": -73.7076,
    "tier": 2
  },
  {
    "iata": "YXY",
    "name": "Whitehorse / Erik Nielsen International Airport",
    "city": "Whitehorse",
    "country": "Canada",
    "lat": 60.7096,
    "lng": -135.067,
    "tier": 3
  },
  {
    "iata": "WYA",
    "name": "Whyalla Airport",
    "city": "Whyalla",
    "country": "Australia",
    "lat": -33.0589,
    "lng": 137.514,
    "tier": 3
  },
  {
    "iata": "ICT",
    "name": "Wichita Eisenhower National Airport",
    "city": "Wichita",
    "country": "United States",
    "lat": 37.6499,
    "lng": -97.4331,
    "tier": 2
  },
  {
    "iata": "SPS",
    "name": "Sheppard Air Force Base-Wichita Falls Municipal Airport",
    "city": "Wichita Falls",
    "country": "United States",
    "lat": 33.9888,
    "lng": -98.4919,
    "tier": 3
  },
  {
    "iata": "WIC",
    "name": "Wick Airport",
    "city": "Wick",
    "country": "United Kingdom",
    "lat": 58.4589,
    "lng": -3.0931,
    "tier": 3
  },
  {
    "iata": "CUR",
    "name": "Hato International Airport",
    "city": "Willemstad",
    "country": "Netherlands Antilles",
    "lat": 12.1889,
    "lng": -68.9598,
    "tier": 1
  },
  {
    "iata": "YWL",
    "name": "Williams Lake Airport",
    "city": "Williams Lake",
    "country": "Canada",
    "lat": 52.1831,
    "lng": -122.054,
    "tier": 3
  },
  {
    "iata": "IPT",
    "name": "Williamsport Regional Airport",
    "city": "Williamsport",
    "country": "United States",
    "lat": 41.2418,
    "lng": -76.9211,
    "tier": 3
  },
  {
    "iata": "ISN",
    "name": "Sloulin Field International Airport",
    "city": "Williston",
    "country": "United States",
    "lat": 48.1779,
    "lng": -103.642,
    "tier": 3
  },
  {
    "iata": "ILG",
    "name": "New Castle Airport",
    "city": "Wilmington",
    "country": "United States",
    "lat": 39.6787,
    "lng": -75.6065,
    "tier": 2
  },
  {
    "iata": "ILM",
    "name": "Wilmington International Airport",
    "city": "Wilmington",
    "country": "United States",
    "lat": 34.2706,
    "lng": -77.9026,
    "tier": 2
  },
  {
    "iata": "ERS",
    "name": "Eros Airport",
    "city": "Windhoek",
    "country": "Namibia",
    "lat": -22.6122,
    "lng": 17.0804,
    "tier": 3
  },
  {
    "iata": "WDH",
    "name": "Hosea Kutako International Airport",
    "city": "Windhoek",
    "country": "Namibia",
    "lat": -22.4799,
    "lng": 17.4709,
    "tier": 2
  },
  {
    "iata": "WNR",
    "name": "Windorah Airport",
    "city": "Windorah",
    "country": "Australia",
    "lat": -25.4131,
    "lng": 142.667,
    "tier": 3
  },
  {
    "iata": "YQG",
    "name": "Windsor Airport",
    "city": "Windsor",
    "country": "Canada",
    "lat": 42.2756,
    "lng": -82.9556,
    "tier": 3
  },
  {
    "iata": "BDL",
    "name": "Bradley International Airport",
    "city": "Windsor Locks",
    "country": "United States",
    "lat": 41.9389,
    "lng": -72.6832,
    "tier": 1
  },
  {
    "iata": "YWG",
    "name": "Winnipeg / James Armstrong Richardson International Airport",
    "city": "Winnipeg",
    "country": "Canada",
    "lat": 49.91,
    "lng": -97.2399,
    "tier": 1
  },
  {
    "iata": "WIN",
    "name": "Winton Airport",
    "city": "Winton",
    "country": "Australia",
    "lat": -22.3636,
    "lng": 143.086,
    "tier": 3
  },
  {
    "iata": "OLF",
    "name": "L M Clayton Airport",
    "city": "Wolf Point",
    "country": "United States",
    "lat": 48.0945,
    "lng": -105.575,
    "tier": 3
  },
  {
    "iata": "WJU",
    "name": "Wonju/Hoengseong Air Base (K-38/K-46)",
    "city": "Wonju",
    "country": "South Korea",
    "lat": 37.4412,
    "lng": 127.9639,
    "tier": 3
  },
  {
    "iata": "BHE",
    "name": "Woodbourne Airport",
    "city": "Woodbourne",
    "country": "New Zealand",
    "lat": -41.5183,
    "lng": 173.87,
    "tier": 3
  },
  {
    "iata": "ORH",
    "name": "Worcester Regional Airport",
    "city": "Worcester",
    "country": "United States",
    "lat": 42.2673,
    "lng": -71.8757,
    "tier": 3
  },
  {
    "iata": "WRL",
    "name": "Worland Municipal Airport",
    "city": "Worland",
    "country": "United States",
    "lat": 43.9657,
    "lng": -107.951,
    "tier": 3
  },
  {
    "iata": "WRG",
    "name": "Wrangell Airport",
    "city": "Wrangell",
    "country": "United States",
    "lat": 56.4843,
    "lng": -132.37,
    "tier": 3
  },
  {
    "iata": "WRO",
    "name": "Copernicus Wrocław Airport",
    "city": "Wroclaw",
    "country": "Poland",
    "lat": 51.1027,
    "lng": 16.8858,
    "tier": 1
  },
  {
    "iata": "WUA",
    "name": "Wuhai Airport",
    "city": "Wuhai",
    "country": "China",
    "lat": 39.7934,
    "lng": 106.7993,
    "tier": 2
  },
  {
    "iata": "WUH",
    "name": "Wuhan Tianhe International Airport",
    "city": "Wuhan",
    "country": "China",
    "lat": 30.7838,
    "lng": 114.208,
    "tier": 1
  },
  {
    "iata": "WNN",
    "name": "Wunnumin Lake Airport",
    "city": "Wunnumin Lake",
    "country": "Canada",
    "lat": 52.8939,
    "lng": -89.2892,
    "tier": 3
  },
  {
    "iata": "WUX",
    "name": "Sunan Shuofang International Airport",
    "city": "Wuxi",
    "country": "China",
    "lat": 31.4944,
    "lng": 120.429,
    "tier": 1
  },
  {
    "iata": "WUS",
    "name": "Nanping Wuyishan Airport",
    "city": "Wuyishan",
    "country": "China",
    "lat": 27.7019,
    "lng": 118.001,
    "tier": 2
  },
  {
    "iata": "WUZ",
    "name": "Wuzhou Changzhoudao Airport",
    "city": "Wuzhou",
    "country": "China",
    "lat": 23.4567,
    "lng": 111.248,
    "tier": 3
  },
  {
    "iata": "XIY",
    "name": "Xi'an Xianyang International Airport",
    "city": "Xi'an",
    "country": "China",
    "lat": 34.4471,
    "lng": 108.752,
    "tier": 1
  },
  {
    "iata": "GXH",
    "name": "Gannan Xiahe Airport",
    "city": "Xiahe city",
    "country": "China",
    "lat": 34.8105,
    "lng": 102.6447,
    "tier": 3
  },
  {
    "iata": "XMN",
    "name": "Xiamen Gaoqi International Airport",
    "city": "Xiamen",
    "country": "China",
    "lat": 24.544,
    "lng": 118.128,
    "tier": 1
  },
  {
    "iata": "XFN",
    "name": "Xiangyang Liuji Airport",
    "city": "Xiangfan",
    "country": "China",
    "lat": 32.1506,
    "lng": 112.291,
    "tier": 2
  },
  {
    "iata": "XIC",
    "name": "Xichang Qingshan Airport",
    "city": "Xichang",
    "country": "China",
    "lat": 27.9891,
    "lng": 102.184,
    "tier": 3
  },
  {
    "iata": "XIL",
    "name": "Xilinhot Airport",
    "city": "Xilinhot",
    "country": "China",
    "lat": 43.9156,
    "lng": 115.964,
    "tier": 2
  },
  {
    "iata": "ACX",
    "name": "Xingyi Airport",
    "city": "Xingyi",
    "country": "China",
    "lat": 25.0864,
    "lng": 104.9594,
    "tier": 2
  },
  {
    "iata": "XNN",
    "name": "Xining Caojiabu Airport",
    "city": "Xining",
    "country": "China",
    "lat": 36.5275,
    "lng": 102.043,
    "tier": 1
  },
  {
    "iata": "NLT",
    "name": "Xinyuan Nalati Airport",
    "city": "Xinyuan",
    "country": "China",
    "lat": 43.4318,
    "lng": 83.3786,
    "tier": 3
  },
  {
    "iata": "XUZ",
    "name": "Xuzhou Guanyin Airport",
    "city": "Xuzhou",
    "country": "China",
    "lat": 34.0591,
    "lng": 117.5553,
    "tier": 2
  },
  {
    "iata": "BYC",
    "name": "Yacuiba Airport",
    "city": "Yacuiba",
    "country": "Bolivia",
    "lat": -21.9609,
    "lng": -63.6517,
    "tier": 3
  },
  {
    "iata": "YKM",
    "name": "Yakima Air Terminal McAllister Field",
    "city": "Yakima",
    "country": "United States",
    "lat": 46.5682,
    "lng": -120.544,
    "tier": 3
  },
  {
    "iata": "YAK",
    "name": "Yakutat Airport",
    "city": "Yakutat",
    "country": "United States",
    "lat": 59.5033,
    "lng": -139.66,
    "tier": 3
  },
  {
    "iata": "PYJ",
    "name": "Polyarny Airport",
    "city": "Yakutia",
    "country": "Russia",
    "lat": 66.4004,
    "lng": 112.03,
    "tier": 3
  },
  {
    "iata": "YKS",
    "name": "Yakutsk Airport",
    "city": "Yakutsk",
    "country": "Russia",
    "lat": 62.0933,
    "lng": 129.771,
    "tier": 1
  },
  {
    "iata": "GAJ",
    "name": "Yamagata Airport",
    "city": "Yamagata",
    "country": "Japan",
    "lat": 38.4119,
    "lng": 140.371,
    "tier": 3
  },
  {
    "iata": "UBJ",
    "name": "Yamaguchi Ube Airport",
    "city": "Yamaguchi",
    "country": "Japan",
    "lat": 33.93,
    "lng": 131.279,
    "tier": 3
  },
  {
    "iata": "ENY",
    "name": "Yan'an Ershilipu Airport",
    "city": "Yan'an",
    "country": "China",
    "lat": 36.6369,
    "lng": 109.554,
    "tier": 3
  },
  {
    "iata": "YNZ",
    "name": "Yancheng Airport",
    "city": "Yancheng",
    "country": "China",
    "lat": 33.4258,
    "lng": 120.2031,
    "tier": 2
  },
  {
    "iata": "RGN",
    "name": "Yangon International Airport",
    "city": "Yangon",
    "country": "Burma",
    "lat": 16.9073,
    "lng": 96.1332,
    "tier": 1
  },
  {
    "iata": "YTY",
    "name": "Yangzhou Taizhou Airport",
    "city": "Yangzhou",
    "country": "China",
    "lat": 32.5634,
    "lng": 119.7198,
    "tier": 2
  },
  {
    "iata": "YNJ",
    "name": "Yanji Chaoyangchuan Airport",
    "city": "Yanji",
    "country": "China",
    "lat": 42.8828,
    "lng": 129.451,
    "tier": 2
  },
  {
    "iata": "YNT",
    "name": "Yantai Laishan Airport",
    "city": "Yantai",
    "country": "China",
    "lat": 37.4017,
    "lng": 121.372,
    "tier": 1
  },
  {
    "iata": "NSI",
    "name": "Yaoundé Nsimalen International Airport",
    "city": "Yaounde",
    "country": "Cameroon",
    "lat": 3.7226,
    "lng": 11.5533,
    "tier": 2
  },
  {
    "iata": "YAP",
    "name": "Yap International Airport",
    "city": "Yap",
    "country": "Micronesia",
    "lat": 9.4989,
    "lng": 138.083,
    "tier": 3
  },
  {
    "iata": "IAR",
    "name": "Tunoshna Airport",
    "city": "Yaroslavl",
    "country": "Russia",
    "lat": 57.5607,
    "lng": 40.1574,
    "tier": 3
  },
  {
    "iata": "YES",
    "name": "Yasouj Airport",
    "city": "Yasuj",
    "country": "Iran",
    "lat": 30.7005,
    "lng": 51.5451,
    "tier": 3
  },
  {
    "iata": "AZD",
    "name": "Shahid Sadooghi Airport",
    "city": "Yazd",
    "country": "Iran",
    "lat": 31.9049,
    "lng": 54.2765,
    "tier": 2
  },
  {
    "iata": "SVX",
    "name": "Koltsovo Airport",
    "city": "Yekaterinburg",
    "country": "Russia",
    "lat": 56.7431,
    "lng": 60.8027,
    "tier": 1
  },
  {
    "iata": "YZF",
    "name": "Yellowknife Airport",
    "city": "Yellowknife",
    "country": "Canada",
    "lat": 62.4628,
    "lng": -114.44,
    "tier": 1
  },
  {
    "iata": "YNB",
    "name": "Prince Abdulmohsin Bin Abdulaziz Airport",
    "city": "Yenbo",
    "country": "Saudi Arabia",
    "lat": 24.1442,
    "lng": 38.0634,
    "tier": 2
  },
  {
    "iata": "RSU",
    "name": "Yeosu Airport",
    "city": "Yeosu",
    "country": "South Korea",
    "lat": 34.8423,
    "lng": 127.617,
    "tier": 3
  },
  {
    "iata": "EVN",
    "name": "Zvartnots International Airport",
    "city": "Yerevan",
    "country": "Armenia",
    "lat": 40.1473,
    "lng": 44.3959,
    "tier": 1
  },
  {
    "iata": "YBP",
    "name": "Yibin Caiba Airport",
    "city": "Yibin",
    "country": "China",
    "lat": 28.8006,
    "lng": 104.545,
    "tier": 2
  },
  {
    "iata": "YIH",
    "name": "Yichang Sanxia Airport",
    "city": "Yichang",
    "country": "China",
    "lat": 30.5566,
    "lng": 111.48,
    "tier": 2
  },
  {
    "iata": "YIC",
    "name": "Yichun Mingyueshan Airport",
    "city": "Yichun",
    "country": "China",
    "lat": 27.8025,
    "lng": 114.3062,
    "tier": 2
  },
  {
    "iata": "LDS",
    "name": "Lindu Airport",
    "city": "Yinchun",
    "country": "China",
    "lat": 47.7521,
    "lng": 129.0191,
    "tier": 3
  },
  {
    "iata": "YIN",
    "name": "Yining Airport",
    "city": "Yining",
    "country": "China",
    "lat": 43.9558,
    "lng": 81.3303,
    "tier": 3
  },
  {
    "iata": "YIW",
    "name": "Yiwu Airport",
    "city": "Yiwu",
    "country": "China",
    "lat": 29.3447,
    "lng": 120.032,
    "tier": 2
  },
  {
    "iata": "JOG",
    "name": "Adi Sutjipto International Airport",
    "city": "Yogyakarta",
    "country": "Indonesia",
    "lat": -7.7882,
    "lng": 110.432,
    "tier": 1
  },
  {
    "iata": "YOL",
    "name": "Yola Airport",
    "city": "Yola",
    "country": "Nigeria",
    "lat": 9.2576,
    "lng": 12.4304,
    "tier": 3
  },
  {
    "iata": "LLF",
    "name": "Lingling Airport",
    "city": "Yongzhou",
    "country": "China",
    "lat": 26.3387,
    "lng": 111.61,
    "tier": 3
  },
  {
    "iata": "EYP",
    "name": "El Yopal Airport",
    "city": "Yopal",
    "country": "Colombia",
    "lat": 5.3191,
    "lng": -72.384,
    "tier": 3
  },
  {
    "iata": "YNG",
    "name": "Youngstown Warren Regional Airport",
    "city": "Youngstown",
    "country": "United States",
    "lat": 41.2607,
    "lng": -80.6791,
    "tier": 3
  },
  {
    "iata": "UYN",
    "name": "Yulin Yuyang Airport",
    "city": "Yulin",
    "country": "China",
    "lat": 38.3597,
    "lng": 109.5909,
    "tier": 2
  },
  {
    "iata": "YUM",
    "name": "Yuma MCAS/Yuma International Airport",
    "city": "Yuma",
    "country": "United States",
    "lat": 32.6566,
    "lng": -114.606,
    "tier": 3
  },
  {
    "iata": "YCU",
    "name": "Yuncheng Guangong Airport",
    "city": "Yuncheng",
    "country": "China",
    "lat": 35.1164,
    "lng": 111.0314,
    "tier": 1
  },
  {
    "iata": "YUS",
    "name": "Yushu Batang Airport",
    "city": "Yushu",
    "country": "China",
    "lat": 32.8364,
    "lng": 97.0364,
    "tier": 3
  },
  {
    "iata": "DEE",
    "name": "Mendeleyevo Airport",
    "city": "Yuzhno-Kurilsk",
    "country": "Russia",
    "lat": 43.9584,
    "lng": 145.683,
    "tier": 3
  },
  {
    "iata": "UUS",
    "name": "Yuzhno-Sakhalinsk Airport",
    "city": "Yuzhno-sakhalinsk",
    "country": "Russia",
    "lat": 46.8887,
    "lng": 142.718,
    "tier": 2
  },
  {
    "iata": "ACZ",
    "name": "Zabol Airport",
    "city": "Zabol",
    "country": "Iran",
    "lat": 31.0983,
    "lng": 61.5439,
    "tier": 3
  },
  {
    "iata": "ZCL",
    "name": "General Leobardo C. Ruiz International Airport",
    "city": "Zacatecas",
    "country": "Mexico",
    "lat": 22.8971,
    "lng": -102.687,
    "tier": 2
  },
  {
    "iata": "ZAD",
    "name": "Zadar Airport",
    "city": "Zadar",
    "country": "Croatia",
    "lat": 44.1083,
    "lng": 15.3467,
    "tier": 1
  },
  {
    "iata": "ZAG",
    "name": "Zagreb Airport",
    "city": "Zagreb",
    "country": "Croatia",
    "lat": 45.7429,
    "lng": 16.0688,
    "tier": 1
  },
  {
    "iata": "ZAH",
    "name": "Zahedan International Airport",
    "city": "Zahedan",
    "country": "Iran",
    "lat": 29.4757,
    "lng": 60.9062,
    "tier": 2
  },
  {
    "iata": "ZTH",
    "name": "Zakynthos International Airport \"Dionysios Solomos\"",
    "city": "Zakynthos",
    "country": "Greece",
    "lat": 37.7509,
    "lng": 20.8843,
    "tier": 2
  },
  {
    "iata": "ZAM",
    "name": "Zamboanga International Airport",
    "city": "Zamboanga",
    "country": "Philippines",
    "lat": 6.9224,
    "lng": 122.06,
    "tier": 2
  },
  {
    "iata": "PBM",
    "name": "Johan Adolf Pengel International Airport",
    "city": "Zandery",
    "country": "Suriname",
    "lat": 5.4528,
    "lng": -55.1878,
    "tier": 2
  },
  {
    "iata": "ZNZ",
    "name": "Abeid Amani Karume International Airport",
    "city": "Zanzibar",
    "country": "Tanzania",
    "lat": -6.222,
    "lng": 39.2249,
    "tier": 2
  },
  {
    "iata": "OZH",
    "name": "Zaporizhzhia International Airport",
    "city": "Zaporozhye",
    "country": "Ukraine",
    "lat": 47.867,
    "lng": 35.3157,
    "tier": 3
  },
  {
    "iata": "ZAZ",
    "name": "Zaragoza Air Base",
    "city": "Zaragoza",
    "country": "Spain",
    "lat": 41.6662,
    "lng": -1.0416,
    "tier": 2
  },
  {
    "iata": "IAM",
    "name": "In Aménas Airport",
    "city": "Zarzaitine",
    "country": "Algeria",
    "lat": 28.0515,
    "lng": 9.6429,
    "tier": 3
  },
  {
    "iata": "ZQZ",
    "name": "Zhangjiakou Ningyuan Airport",
    "city": "Zhangjiakou",
    "country": "China",
    "lat": 40.7386,
    "lng": 114.93,
    "tier": 3
  },
  {
    "iata": "YZY",
    "name": "Zhangye Ganzhou Airport",
    "city": "Zhangye",
    "country": "China",
    "lat": 38.8019,
    "lng": 100.675,
    "tier": 3
  },
  {
    "iata": "ZHA",
    "name": "Zhanjiang Airport",
    "city": "Zhanjiang",
    "country": "China",
    "lat": 21.2144,
    "lng": 110.358,
    "tier": 2
  },
  {
    "iata": "ZAT",
    "name": "Zhaotong Airport",
    "city": "Zhaotong",
    "country": "China",
    "lat": 27.3256,
    "lng": 103.755,
    "tier": 3
  },
  {
    "iata": "CGO",
    "name": "Zhengzhou Xinzheng International Airport",
    "city": "Zhengzhou",
    "country": "China",
    "lat": 34.5197,
    "lng": 113.841,
    "tier": 1
  },
  {
    "iata": "DZN",
    "name": "Zhezkazgan Airport",
    "city": "Zhezkazgan",
    "country": "Kazakhstan",
    "lat": 47.7083,
    "lng": 67.7333,
    "tier": 3
  },
  {
    "iata": "HJJ",
    "name": "Zhijiang Airport",
    "city": "Zhijiang",
    "country": "China",
    "lat": 27.4411,
    "lng": 109.7,
    "tier": 3
  },
  {
    "iata": "PZH",
    "name": "Zhob Airport",
    "city": "Zhob",
    "country": "Pakistan",
    "lat": 31.3584,
    "lng": 69.4636,
    "tier": 3
  },
  {
    "iata": "ZHY",
    "name": "Zhongwei Shapotou Airport",
    "city": "Zhongwei",
    "country": "China",
    "lat": 37.5731,
    "lng": 105.1545,
    "tier": 3
  },
  {
    "iata": "HSN",
    "name": "Zhoushan Airport",
    "city": "Zhoushan",
    "country": "China",
    "lat": 29.9342,
    "lng": 122.362,
    "tier": 2
  },
  {
    "iata": "ZUH",
    "name": "Zhuhai Jinwan Airport",
    "city": "Zhuhai",
    "country": "China",
    "lat": 22.0064,
    "lng": 113.376,
    "tier": 1
  },
  {
    "iata": "ZIG",
    "name": "Ziguinchor Airport",
    "city": "Ziguinchor",
    "country": "Senegal",
    "lat": 12.5556,
    "lng": -16.2818,
    "tier": 3
  },
  {
    "iata": "ZIH",
    "name": "Ixtapa Zihuatanejo International Airport",
    "city": "Zihuatanejo",
    "country": "Mexico",
    "lat": 17.6016,
    "lng": -101.461,
    "tier": 2
  },
  {
    "iata": "ONQ",
    "name": "Zonguldak Airport",
    "city": "Zonguldak",
    "country": "Turkey",
    "lat": 41.5064,
    "lng": 32.0886,
    "tier": 3
  },
  {
    "iata": "OUZ",
    "name": "Tazadit Airport",
    "city": "Zouerat",
    "country": "Mauritania",
    "lat": 22.7564,
    "lng": -12.4836,
    "tier": 3
  },
  {
    "iata": "ZYI",
    "name": "Zunyi Xinzhou Airport",
    "city": "Zunyi",
    "country": "China",
    "lat": 27.5895,
    "lng": 107.0007,
    "tier": 2
  },
  {
    "iata": "ZRH",
    "name": "Zürich Airport",
    "city": "Zurich",
    "country": "Switzerland",
    "lat": 47.4647,
    "lng": 8.5492,
    "tier": 1
  },
  {
    "iata": "ZQW",
    "name": "Zweibrücken Airport",
    "city": "Zweibruecken",
    "country": "Germany",
    "lat": 49.2094,
    "lng": 7.4006,
    "tier": 3
  },
  {
    "iata": "AGH",
    "name": "Ängelholm-Helsingborg Airport",
    "city": "Ängelholm",
    "country": "Sweden",
    "lat": 56.2961,
    "lng": 12.8471,
    "tier": 3
  },
  {
    "iata": "TEQ",
    "name": "Tekirdağ Çorlu Airport",
    "city": "Çorlu",
    "country": "Turkey",
    "lat": 41.1382,
    "lng": 27.9191,
    "tier": 3
  },
  {
    "iata": "ILP",
    "name": "Île des Pins Airport",
    "city": "Île des Pins",
    "country": "New Caledonia",
    "lat": -22.5889,
    "lng": 167.456,
    "tier": 3
  },
  {
    "iata": "OSD",
    "name": "Åre Östersund Airport",
    "city": "Östersund",
    "country": "Sweden",
    "lat": 63.1944,
    "lng": 14.5003,
    "tier": 3
  }
];

// Rutas directas mundiales (declaradas una sola vez por par; tratadas bidireccionalmente)
const ROUTES = [["AAE", "ALG"], ["AAE", "CDG"], ["AAE", "IST"], ["AAE", "LYS"], ["AAE", "MRS"], ["AAE", "ORN"], ["AAE", "ORY"], ["AAL", "AAR"], ["AAL", "AGP"], ["AAL", "ALC"], ["AAL", "AMS"], ["AAL", "ARN"], ["AAL", "BCN"], ["AAL", "BLL"], ["AAL", "CPH"], ["AAL", "IST"], ["AAL", "LGW"], ["AAL", "OSL"], ["AAL", "PMI"], ["AAL", "SVG"], ["AAN", "CCJ"], ["AAN", "PEW"], ["AAQ", "DME"], ["AAQ", "LED"], ["AAQ", "SVO"], ["AAR", "AGP"], ["AAR", "BMA"], ["AAR", "CPH"], ["AAR", "GOT"], ["AAR", "OSL"], ["AAR", "PMI"], ["AAR", "STN"], ["AAT", "URC"], ["AAX", "PLU"], ["AAX", "POJ"], ["AAY", "SAH"], ["ABA", "DME"], ["ABA", "IKT"], ["ABA", "NSK"], ["ABA", "SVO"], ["ABB", "ABV"], ["ABB", "LOS"], ["ABD", "MHD"], ["ABD", "SYZ"], ["ABD", "THR"], ["ABE", "ATL"], ["ABE", "CLT"], ["ABE", "DTW"], ["ABE", "MYR"], ["ABE", "ORD"], ["ABE", "PGD"], ["ABE", "PHL"], ["ABE", "PIE"], ["ABE", "SFB"], ["ABI", "DFW"], ["ABJ", "ACC"], ["ABJ", "ALG"], ["ABJ", "BKO"], ["ABJ", "BOY"], ["ABJ", "BRU"], ["ABJ", "CDG"], ["ABJ", "CKY"], ["ABJ", "CMN"], ["ABJ", "COO"], ["ABJ", "DKR"], ["ABJ", "DLA"], ["ABJ", "FNA"], ["ABJ", "IST"], ["ABJ", "LBV"], ["ABJ", "LFW"], ["ABJ", "LOS"], ["ABJ", "NBO"], ["ABJ", "ORY"], ["ABJ", "OUA"], ["ABJ", "ROB"], ["ABJ", "TUN"], ["ABL", "OBU"], ["ABL", "OTZ"], ["ABL", "SHG"], ["ABM", "CNS"], ["ABQ", "ATL"], ["ABQ", "BWI"], ["ABQ", "CNM"], ["ABQ", "DAL"], ["ABQ", "DEN"], ["ABQ", "DFW"], ["ABQ", "HOU"], ["ABQ", "IAH"], ["ABQ", "JFK"], ["ABQ", "LAM"], ["ABQ", "LAS"], ["ABQ", "LAX"], ["ABQ", "MCI"], ["ABQ", "MDW"], ["ABQ", "MSP"], ["ABQ", "OAK"], ["ABQ", "ORD"], ["ABQ", "PDX"], ["ABQ", "PHX"], ["ABQ", "SAN"], ["ABQ", "SEA"], ["ABQ", "SFO"], ["ABQ", "SLC"], ["ABR", "MSP"], ["ABS", "ASW"], ["ABT", "DMM"], ["ABT", "JED"], ["ABT", "RUH"], ["ABV", "ACC"], ["ABV", "ADD"], ["ABV", "BNI"], ["ABV", "CAI"], ["ABV", "CBQ"], ["ABV", "CDG"], ["ABV", "COO"], ["ABV", "ENU"], ["ABV", "FRA"], ["ABV", "GMO"], ["ABV", "IBA"], ["ABV", "ILR"], ["ABV", "KAN"], ["ABV", "LFW"], ["ABV", "LHR"], ["ABV", "LOS"], ["ABV", "NDJ"], ["ABV", "NIM"], ["ABV", "PHC"], ["ABV", "QOW"], ["ABV", "QRW"], ["ABV", "SKO"], ["ABV", "SSG"], ["ABV", "YOL"], ["ABX", "MEL"], ["ABX", "SYD"], ["ABY", "ATL"], ["ABZ", "AMS"], ["ABZ", "BGO"], ["ABZ", "BHD"], ["ABZ", "BHX"], ["ABZ", "BRS"], ["ABZ", "CDG"], ["ABZ", "CPH"], ["ABZ", "DUB"], ["ABZ", "EBJ"], ["ABZ", "EMA"], ["ABZ", "FRA"], ["ABZ", "HUY"], ["ABZ", "KOI"], ["ABZ", "KSU"], ["ABZ", "LBA"], ["ABZ", "LCY"], ["ABZ", "LGW"], ["ABZ", "LHR"], ["ABZ", "LSI"], ["ABZ", "LTN"], ["ABZ", "MAN"], ["ABZ", "MME"], ["ABZ", "NCL"], ["ABZ", "NWI"], ["ABZ", "OSL"], ["ABZ", "RIX"], ["ABZ", "SVG"], ["ABZ", "SYY"], ["ABZ", "WIC"], ["ACA", "IAH"], ["ACA", "MEX"], ["ACA", "MTY"], ["ACA", "TIJ"], ["ACA", "TLC"], ["ACC", "ADD"], ["ACC", "AMS"], ["ACC", "BEY"], ["ACC", "CAI"], ["ACC", "CMN"], ["ACC", "COO"], ["ACC", "DKR"], ["ACC", "DXB"], ["ACC", "FCO"], ["ACC", "FNA"], ["ACC", "FRA"], ["ACC", "IST"], ["ACC", "JFK"], ["ACC", "JNB"], ["ACC", "KMS"], ["ACC", "LFW"], ["ACC", "LHR"], ["ACC", "LIS"], ["ACC", "LOS"], ["ACC", "MAD"], ["ACC", "MLW"], ["ACC", "NBO"], ["ACC", "NYI"], ["ACC", "OUA"], ["ACC", "ROB"], ["ACC", "TKD"], ["ACC", "TML"], ["ACC", "WDH"], ["ACE", "AMS"], ["ACE", "BCN"], ["ACE", "BFS"], ["ACE", "BGY"], ["ACE", "BHX"], ["ACE", "BIO"], ["ACE", "BLK"], ["ACE", "BLQ"], ["ACE", "BOH"], ["ACE", "BRE"], ["ACE", "BRS"], ["ACE", "BRU"], ["ACE", "BVA"], ["ACE", "CGN"], ["ACE", "CRL"], ["ACE", "DUB"], ["ACE", "DUS"], ["ACE", "EDI"], ["ACE", "EIN"], ["ACE", "EMA"], ["ACE", "FKB"], ["ACE", "FRA"], ["ACE", "FUE"], ["ACE", "GLA"], ["ACE", "HAJ"], ["ACE", "HAM"], ["ACE", "HHN"], ["ACE", "LBA"], ["ACE", "LEJ"], ["ACE", "LGW"], ["ACE", "LPA"], ["ACE", "LPL"], ["ACE", "LTN"], ["ACE", "LUX"], ["ACE", "MAD"], ["ACE", "MAN"], ["ACE", "MUC"], ["ACE", "NCL"], ["ACE", "NOC"], ["ACE", "NRN"], ["ACE", "ORK"], ["ACE", "OVD"], ["ACE", "PAD"], ["ACE", "PIK"], ["ACE", "SCQ"], ["ACE", "SDR"], ["ACE", "SNN"], ["ACE", "STN"], ["ACE", "STR"], ["ACE", "SVQ"], ["ACE", "SXF"], ["ACE", "SZG"], ["ACE", "TFN"], ["ACE", "TXL"], ["ACE", "VIE"], ["ACE", "ZAZ"], ["ACE", "ZRH"], ["ACH", "EBA"], ["ACH", "VIE"], ["ACI", "GCI"], ["ACI", "SOU"], ["ACK", "BOS"], ["ACK", "EWB"], ["ACK", "HPN"], ["ACK", "HYA"], ["ACK", "MVY"], ["ACK", "TEB"], ["ACR", "SVI"], ["ACT", "DFW"], ["ACV", "CEC"], ["ACV", "SFO"], ["ACV", "SMF"], ["ACX", "CAN"], ["ACX", "CKG"], ["ACX", "KWE"], ["ACX", "NAY"], ["ACX", "PVG"], ["ACY", "BOS"], ["ACY", "DTW"], ["ACY", "FLL"], ["ACY", "IAH"], ["ACY", "MCO"], ["ACY", "MYR"], ["ACY", "ORD"], ["ACY", "RSW"], ["ACY", "TPA"], ["ACZ", "MHD"], ["ADA", "ADB"], ["ADA", "AYT"], ["ADA", "EBL"], ["ADA", "ECN"], ["ADA", "ESB"], ["ADA", "IST"], ["ADA", "JED"], ["ADA", "SAW"], ["ADA", "TZX"], ["ADA", "VAN"], ["ADB", "AMS"], ["ADB", "ARN"], ["ADB", "ASR"], ["ADB", "ATH"], ["ADB", "AYT"], ["ADB", "BHX"], ["ADB", "BJV"], ["ADB", "BRE"], ["ADB", "BRU"], ["ADB", "BSL"], ["ADB", "CDG"], ["ADB", "CGN"], ["ADB", "CPH"], ["ADB", "DIY"], ["ADB", "DTM"], ["ADB", "DUB"], ["ADB", "DUS"], ["ADB", "ECN"], ["ADB", "ESB"], ["ADB", "EZS"], ["ADB", "FRA"], ["ADB", "GNY"], ["ADB", "GZT"], ["ADB", "HAJ"], ["ADB", "HAM"], ["ADB", "HEL"], ["ADB", "HTY"], ["ADB", "IST"], ["ADB", "LGW"], ["ADB", "LUX"], ["ADB", "LYS"], ["ADB", "MAN"], ["ADB", "MQM"], ["ADB", "MUC"], ["ADB", "NTE"], ["ADB", "SAW"], ["ADB", "STN"], ["ADB", "STR"], ["ADB", "SXB"], ["ADB", "TXL"], ["ADB", "TZX"], ["ADB", "VAS"], ["ADB", "VIE"], ["ADB", "ZRH"], ["ADD", "AMH"], ["ADD", "ARN"], ["ADD", "ASO"], ["ADD", "AXU"], ["ADD", "BAH"], ["ADD", "BEY"], ["ADD", "BJR"], ["ADD", "BKK"], ["ADD", "BKO"], ["ADD", "BLZ"], ["ADD", "BOM"], ["ADD", "BZV"], ["ADD", "CAI"], ["ADD", "CAN"], ["ADD", "CDG"], ["ADD", "COO"], ["ADD", "DAR"], ["ADD", "DEL"], ["ADD", "DIR"], ["ADD", "DLA"], ["ADD", "DMM"], ["ADD", "DOH"], ["ADD", "DXB"], ["ADD", "EBB"], ["ADD", "ENU"], ["ADD", "FBM"], ["ADD", "FCO"], ["ADD", "FIH"], ["ADD", "FRA"], ["ADD", "GDQ"], ["ADD", "GMB"], ["ADD", "HGA"], ["ADD", "HKG"], ["ADD", "HRE"], ["ADD", "IAD"], ["ADD", "IST"], ["ADD", "JED"], ["ADD", "JIB"], ["ADD", "JIJ"], ["ADD", "JIM"], ["ADD", "JNB"], ["ADD", "JRO"], ["ADD", "JUB"], ["ADD", "KGL"], ["ADD", "KRT"], ["ADD", "KWI"], ["ADD", "LAD"], ["ADD", "LBV"], ["ADD", "LFW"], ["ADD", "LHR"], ["ADD", "LLI"], ["ADD", "LLW"], ["ADD", "LOS"], ["ADD", "LUN"], ["ADD", "MBA"], ["ADD", "MCT"], ["ADD", "MPM"], ["ADD", "MQX"], ["ADD", "NBO"], ["ADD", "NDJ"], ["ADD", "NIM"], ["ADD", "NLA"], ["ADD", "OUA"], ["ADD", "PEK"], ["ADD", "PNR"], ["ADD", "PVG"], ["ADD", "RUH"], ["ADD", "SAH"], ["ADD", "SSG"], ["ADD", "TLV"], ["ADD", "YYZ"], ["ADD", "ZNZ"], ["ADE", "AHB"], ["ADE", "AMM"], ["ADE", "ASM"], ["ADE", "AUH"], ["ADE", "BBO"], ["ADE", "BOM"], ["ADE", "CAI"], ["ADE", "DMM"], ["ADE", "DOH"], ["ADE", "DXB"], ["ADE", "GXF"], ["ADE", "IST"], ["ADE", "JED"], ["ADE", "MGQ"], ["ADE", "RIY"], ["ADE", "RUH"], ["ADE", "SAH"], ["ADE", "SHJ"], ["ADF", "ESB"], ["ADF", "IST"], ["ADK", "ANC"], ["ADL", "AKL"], ["ADL", "ASP"], ["ADL", "BHQ"], ["ADL", "BNE"], ["ADL", "CBR"], ["ADL", "CED"], ["ADL", "CNS"], ["ADL", "CPD"], ["ADL", "DPS"], ["ADL", "DRW"], ["ADL", "DXB"], ["ADL", "HKG"], ["ADL", "KGC"], ["ADL", "KGI"], ["ADL", "KUL"], ["ADL", "MEL"], ["ADL", "MGB"], ["ADL", "MQL"], ["ADL", "OLP"], ["ADL", "OOL"], ["ADL", "PER"], ["ADL", "PLO"], ["ADL", "PUG"], ["ADL", "SIN"], ["ADL", "SYD"], ["ADL", "WYA"], ["ADQ", "AKK"], ["ADQ", "ANC"], ["ADQ", "KLN"], ["ADU", "MHD"], ["ADU", "THR"], ["ADZ", "BAQ"], ["ADZ", "BOG"], ["ADZ", "CLO"], ["ADZ", "CTG"], ["ADZ", "MDE"], ["ADZ", "PEI"], ["ADZ", "PTY"], ["ADZ", "PVA"], ["AEB", "CAN"], ["AEB", "CKG"], ["AEB", "KWL"], ["AEP", "AFA"], ["AEP", "ASU"], ["AEP", "BHI"], ["AEP", "BRC"], ["AEP", "CNF"], ["AEP", "COR"], ["AEP", "CPC"], ["AEP", "CRD"], ["AEP", "CTC"], ["AEP", "CWB"], ["AEP", "EQS"], ["AEP", "FLN"], ["AEP", "FMA"], ["AEP", "FTE"], ["AEP", "GIG"], ["AEP", "GRU"], ["AEP", "IGR"], ["AEP", "IRJ"], ["AEP", "JUJ"], ["AEP", "LUQ"], ["AEP", "MDQ"], ["AEP", "MDZ"], ["AEP", "MVD"], ["AEP", "NQN"], ["AEP", "PDP"], ["AEP", "PMY"], ["AEP", "POA"], ["AEP", "PRA"], ["AEP", "PSS"], ["AEP", "REL"], ["AEP", "RES"], ["AEP", "RGA"], ["AEP", "RGL"], ["AEP", "RHD"], ["AEP", "ROS"], ["AEP", "RSA"], ["AEP", "SCL"], ["AEP", "SDE"], ["AEP", "SFN"], ["AEP", "SLA"], ["AEP", "TUC"], ["AEP", "UAQ"], ["AEP", "USH"], ["AEP", "VDM"], ["AER", "DME"], ["AER", "DYU"], ["AER", "EVN"], ["AER", "IST"], ["AER", "KIV"], ["AER", "KJA"], ["AER", "KRR"], ["AER", "KZN"], ["AER", "LBD"], ["AER", "LED"], ["AER", "MSQ"], ["AER", "NSK"], ["AER", "OMS"], ["AER", "SVO"], ["AER", "SVX"], ["AER", "TAS"], ["AER", "TZX"], ["AER", "VKO"], ["AES", "ALC"], ["AES", "AMS"], ["AES", "BGO"], ["AES", "CPH"], ["AES", "GDN"], ["AES", "LGW"], ["AES", "OSL"], ["AES", "RIX"], ["AES", "TRD"], ["AES", "VNO"], ["AET", "BTT"], ["AET", "FAI"], ["AET", "HUS"], ["AEX", "ATL"], ["AEX", "DFW"], ["AEX", "IAH"], ["AEY", "RKV"], ["AFA", "LUQ"], ["AFA", "RSA"], ["AFL", "CGB"], ["AFZ", "THR"], ["AGA", "AMS"], ["AGA", "BRU"], ["AGA", "CDG"], ["AGA", "CMN"], ["AGA", "CRL"], ["AGA", "DUS"], ["AGA", "EUN"], ["AGA", "FRA"], ["AGA", "LEJ"], ["AGA", "LGG"], ["AGA", "LGW"], ["AGA", "LIL"], ["AGA", "LPA"], ["AGA", "LUX"], ["AGA", "LYS"], ["AGA", "MAN"], ["AGA", "MRS"], ["AGA", "MUC"], ["AGA", "ORY"], ["AGA", "RAK"], ["AGA", "SXF"], ["AGA", "VIL"], ["AGB", "MRS"], ["AGF", "DCM"], ["AGF", "ORY"], ["AGH", "ARN"], ["AGH", "BMA"], ["AGN", "JNU"], ["AGP", "AMS"], ["AGP", "ARN"], ["AGP", "BCN"], ["AGP", "BFS"], ["AGP", "BGO"], ["AGP", "BGY"], ["AGP", "BHD"], ["AGP", "BHX"], ["AGP", "BIO"], ["AGP", "BLK"], ["AGP", "BLL"], ["AGP", "BLQ"], ["AGP", "BOD"], ["AGP", "BOH"], ["AGP", "BRE"], ["AGP", "BRS"], ["AGP", "BRU"], ["AGP", "BSL"], ["AGP", "BTS"], ["AGP", "BUD"], ["AGP", "BVA"], ["AGP", "BVE"], ["AGP", "CDG"], ["AGP", "CGN"], ["AGP", "CIA"], ["AGP", "CMN"], ["AGP", "CPH"], ["AGP", "CRL"], ["AGP", "CWL"], ["AGP", "DME"], ["AGP", "DTM"], ["AGP", "DUB"], ["AGP", "DUS"], ["AGP", "EDI"], ["AGP", "EIN"], ["AGP", "EMA"], ["AGP", "EXT"], ["AGP", "FAO"], ["AGP", "FCO"], ["AGP", "FKB"], ["AGP", "FMM"], ["AGP", "FMO"], ["AGP", "FRA"], ["AGP", "GLA"], ["AGP", "GOT"], ["AGP", "GSE"], ["AGP", "GVA"], ["AGP", "HAJ"], ["AGP", "HAM"], ["AGP", "HAU"], ["AGP", "HEL"], ["AGP", "HHN"], ["AGP", "IBZ"], ["AGP", "IST"], ["AGP", "KRK"], ["AGP", "LBA"], ["AGP", "LCY"], ["AGP", "LGW"], ["AGP", "LHR"], ["AGP", "LIL"], ["AGP", "LIS"], ["AGP", "LPA"], ["AGP", "LPL"], ["AGP", "LTN"], ["AGP", "LUX"], ["AGP", "LYS"], ["AGP", "MAD"], ["AGP", "MAN"], ["AGP", "MLN"], ["AGP", "MMX"], ["AGP", "MRS"], ["AGP", "MUC"], ["AGP", "MXP"], ["AGP", "NCL"], ["AGP", "NOC"], ["AGP", "NRN"], ["AGP", "NTE"], ["AGP", "NUE"], ["AGP", "NYO"], ["AGP", "ORK"], ["AGP", "ORY"], ["AGP", "OSL"], ["AGP", "OVD"], ["AGP", "PIK"], ["AGP", "PMI"], ["AGP", "PRG"], ["AGP", "RTM"], ["AGP", "RYG"], ["AGP", "SCQ"], ["AGP", "SDR"], ["AGP", "SEN"], ["AGP", "SNN"], ["AGP", "SOF"], ["AGP", "SOU"], ["AGP", "STN"], ["AGP", "STR"], ["AGP", "SVG"], ["AGP", "SVO"], ["AGP", "SXF"], ["AGP", "TFN"], ["AGP", "TLS"], ["AGP", "TMP"], ["AGP", "TRD"], ["AGP", "TRF"], ["AGP", "TSF"], ["AGP", "TXL"], ["AGP", "VIE"], ["AGP", "VKO"], ["AGP", "VLC"], ["AGP", "VST"], ["AGP", "WAW"], ["AGP", "WRO"], ["AGP", "XRY"], ["AGP", "YUL"], ["AGP", "ZRH"], ["AGR", "BOM"], ["AGR", "HJR"], ["AGR", "VNS"], ["AGS", "ATL"], ["AGS", "CLT"], ["AGS", "DCA"], ["AGT", "ASU"], ["AGT", "GRU"], ["AGU", "CUN"], ["AGU", "DFW"], ["AGU", "IAH"], ["AGU", "LAX"], ["AGU", "MEX"], ["AGU", "MTY"], ["AGU", "TIJ"], ["AGX", "COK"], ["AHB", "CAI"], ["AHB", "DMM"], ["AHB", "DXB"], ["AHB", "JED"], ["AHB", "MED"], ["AHB", "RUH"], ["AHB", "SAH"], ["AHB", "SHJ"], ["AHB", "TIF"], ["AHB", "TUU"], ["AHE", "PPT"], ["AHE", "TKX"], ["AHE", "XMH"], ["AHN", "BNA"], ["AHO", "AOI"], ["AHO", "BGY"], ["AHO", "BLL"], ["AHO", "BLQ"], ["AHO", "BTS"], ["AHO", "BVA"], ["AHO", "CIA"], ["AHO", "CRL"], ["AHO", "CUF"], ["AHO", "DTM"], ["AHO", "DUB"], ["AHO", "EIN"], ["AHO", "FCO"], ["AHO", "FMM"], ["AHO", "GRO"], ["AHO", "GSE"], ["AHO", "HHN"], ["AHO", "LIN"], ["AHO", "LTN"], ["AHO", "MAD"], ["AHO", "MXP"], ["AHO", "NRN"], ["AHO", "NYO"], ["AHO", "OTP"], ["AHO", "PMF"], ["AHO", "PSA"], ["AHO", "STN"], ["AHO", "TRF"], ["AHO", "TRN"], ["AHO", "TRS"], ["AHO", "TSF"], ["AHU", "CMN"], ["AHU", "TTU"], ["AIA", "CDR"], ["AIA", "DEN"], ["AIN", "ATK"], ["AIN", "BRW"], ["AIT", "AIU"], ["AIT", "RAR"], ["AIU", "RAR"], ["AJA", "AMS"], ["AJA", "ARN"], ["AJA", "AVN"], ["AJA", "BES"], ["AJA", "BOD"], ["AJA", "BSL"], ["AJA", "BVE"], ["AJA", "CDG"], ["AJA", "CFR"], ["AJA", "DCM"], ["AJA", "GVA"], ["AJA", "LGG"], ["AJA", "LGW"], ["AJA", "LIL"], ["AJA", "LUX"], ["AJA", "LYS"], ["AJA", "MPL"], ["AJA", "MRS"], ["AJA", "NCE"], ["AJA", "NTE"], ["AJA", "OLB"], ["AJA", "ORY"], ["AJA", "OSL"], ["AJA", "PIS"], ["AJA", "SXB"], ["AJA", "TLS"], ["AJF", "JED"], ["AJF", "RUH"], ["AJI", "ESB"], ["AJI", "IST"], ["AJL", "CCU"], ["AJL", "GAU"], ["AJL", "IMF"], ["AJR", "LYC"], ["AJU", "BSB"], ["AJU", "GIG"], ["AJU", "GRU"], ["AJU", "MCZ"], ["AJU", "REC"], ["AJU", "SDU"], ["AJU", "SSA"], ["AJU", "VCP"], ["AKB", "DUT"], ["AKF", "BEN"], ["AKF", "TIP"], ["AKJ", "HND"], ["AKJ", "NGO"], ["AKJ", "TPE"], ["AKL", "APW"], ["AKL", "BHE"], ["AKL", "BKK"], ["AKL", "BNE"], ["AKL", "CAN"], ["AKL", "CHC"], ["AKL", "CNS"], ["AKL", "DOH"], ["AKL", "DUD"], ["AKL", "DXB"], ["AKL", "GIS"], ["AKL", "HKG"], ["AKL", "HLZ"], ["AKL", "HNL"], ["AKL", "ICN"], ["AKL", "IUE"], ["AKL", "JFK"], ["AKL", "KAT"], ["AKL", "KKE"], ["AKL", "KUL"], ["AKL", "LAX"], ["AKL", "MEL"], ["AKL", "NAN"], ["AKL", "NLK"], ["AKL", "NOU"], ["AKL", "NPE"], ["AKL", "NPL"], ["AKL", "NRT"], ["AKL", "NSN"], ["AKL", "OOL"], ["AKL", "PER"], ["AKL", "PMR"], ["AKL", "PPQ"], ["AKL", "PPT"], ["AKL", "PVG"], ["AKL", "RAR"], ["AKL", "ROT"], ["AKL", "SCL"], ["AKL", "SFO"], ["AKL", "SIN"], ["AKL", "SUV"], ["AKL", "SYD"], ["AKL", "TBU"], ["AKL", "TRG"], ["AKL", "TUO"], ["AKL", "VLI"], ["AKL", "WAG"], ["AKL", "WHK"], ["AKL", "WLG"], ["AKL", "WRE"], ["AKL", "YVR"], ["AKL", "ZQN"], ["AKN", "ANC"], ["AKN", "DLG"], ["AKN", "EGX"], ["AKN", "IGG"], ["AKN", "KPV"], ["AKN", "PIP"], ["AKN", "PTH"], ["AKN", "WSN"], ["AKP", "BTT"], ["AKP", "FAI"], ["AKU", "CTU"], ["AKU", "URC"], ["AKV", "YIK"], ["AKV", "YPX"], ["AKX", "ALA"], ["AKX", "DME"], ["AKX", "SCO"], ["AKX", "TSE"], ["AKY", "RGN"], ["AKY", "SNW"], ["ALA", "AMS"], ["ALA", "AUH"], ["ALA", "BKK"], ["ALA", "CIT"], ["ALA", "DEL"], ["ALA", "DMB"], ["ALA", "DME"], ["ALA", "DYU"], ["ALA", "DZN"], ["ALA", "FRA"], ["ALA", "FRU"], ["ALA", "GUW"], ["ALA", "GYD"], ["ALA", "HKG"], ["ALA", "ICN"], ["ALA", "IKA"], ["ALA", "IST"], ["ALA", "KBP"], ["ALA", "KGF"], ["ALA", "KOV"], ["ALA", "KSN"], ["ALA", "KUF"], ["ALA", "KUL"], ["ALA", "KZN"], ["ALA", "KZO"], ["ALA", "LED"], ["ALA", "LHR"], ["ALA", "OVB"], ["ALA", "PEK"], ["ALA", "PLX"], ["ALA", "PPK"], ["ALA", "PRG"], ["ALA", "PWQ"], ["ALA", "SAW"], ["ALA", "SCO"], ["ALA", "SGN"], ["ALA", "SHJ"], ["ALA", "SVO"], ["ALA", "TAS"], ["ALA", "TBS"], ["ALA", "TSE"], ["ALA", "UKK"], ["ALA", "URC"], ["ALA", "VKO"], ["ALB", "ATL"], ["ALB", "BOS"], ["ALB", "BWI"], ["ALB", "CLE"], ["ALB", "CLT"], ["ALB", "DCA"], ["ALB", "DTW"], ["ALB", "EWR"], ["ALB", "FLL"], ["ALB", "IAD"], ["ALB", "LAS"], ["ALB", "MCO"], ["ALB", "MDW"], ["ALB", "MSP"], ["ALB", "MSS"], ["ALB", "OGS"], ["ALB", "ORD"], ["ALB", "PHL"], ["ALB", "TPA"], ["ALC", "ALG"], ["ALC", "AMS"], ["ALC", "ARN"], ["ALC", "BCN"], ["ALC", "BFS"], ["ALC", "BGO"], ["ALC", "BGY"], ["ALC", "BHX"], ["ALC", "BIO"], ["ALC", "BLK"], ["ALC", "BLL"], ["ALC", "BLQ"], ["ALC", "BOH"], ["ALC", "BRE"], ["ALC", "BRS"], ["ALC", "BRU"], ["ALC", "BSL"], ["ALC", "BVA"], ["ALC", "CGN"], ["ALC", "CPH"], ["ALC", "CRL"], ["ALC", "CWL"], ["ALC", "DME"], ["ALC", "DUB"], ["ALC", "DUS"], ["ALC", "EDI"], ["ALC", "EIN"], ["ALC", "EMA"], ["ALC", "EVE"], ["ALC", "EXT"], ["ALC", "FCO"], ["ALC", "FKB"], ["ALC", "FMM"], ["ALC", "FRA"], ["ALC", "GLA"], ["ALC", "GOT"], ["ALC", "GSE"], ["ALC", "GVA"], ["ALC", "HAM"], ["ALC", "HAU"], ["ALC", "HEL"], ["ALC", "HHN"], ["ALC", "IBZ"], ["ALC", "KEF"], ["ALC", "KIR"], ["ALC", "KRK"], ["ALC", "KRS"], ["ALC", "KSD"], ["ALC", "KTW"], ["ALC", "KUN"], ["ALC", "LBA"], ["ALC", "LGW"], ["ALC", "LPA"], ["ALC", "LPL"], ["ALC", "LTN"], ["ALC", "MAD"], ["ALC", "MAN"], ["ALC", "MOL"], ["ALC", "MST"], ["ALC", "MUC"], ["ALC", "NCL"], ["ALC", "NOC"], ["ALC", "NRN"], ["ALC", "NUE"], ["ALC", "NYO"], ["ALC", "ORK"], ["ALC", "ORN"], ["ALC", "ORY"], ["ALC", "OSL"], ["ALC", "OUL"], ["ALC", "PIK"], ["ALC", "PMI"], ["ALC", "RTM"], ["ALC", "RYG"], ["ALC", "SCQ"], ["ALC", "SEN"], ["ALC", "SNN"], ["ALC", "SOU"], ["ALC", "STN"], ["ALC", "STR"], ["ALC", "SVG"], ["ALC", "TFS"], ["ALC", "TKU"], ["ALC", "TMP"], ["ALC", "TOS"], ["ALC", "TRD"], ["ALC", "TRF"], ["ALC", "TXL"], ["ALC", "UME"], ["ALC", "VST"], ["ALC", "VXO"], ["ALC", "WMI"], ["ALC", "WRO"], ["ALC", "ZRH"], ["ALF", "HFT"], ["ALF", "KKN"], ["ALF", "LKL"], ["ALF", "MEH"], ["ALF", "OSL"], ["ALF", "SOJ"], ["ALF", "TOS"], ["ALF", "VDS"], ["ALG", "AMM"], ["ALG", "AZR"], ["ALG", "BCN"], ["ALG", "BEY"], ["ALG", "BJA"], ["ALG", "BKO"], ["ALG", "BLJ"], ["ALG", "BOD"], ["ALG", "BRU"], ["ALG", "BSK"], ["ALG", "CAI"], ["ALG", "CDG"], ["ALG", "CGN"], ["ALG", "CMN"], ["ALG", "CZL"], ["ALG", "DJG"], ["ALG", "DKR"], ["ALG", "DOH"], ["ALG", "DXB"], ["ALG", "EBH"], ["ALG", "ELU"], ["ALG", "ETZ"], ["ALG", "FCO"], ["ALG", "FRA"], ["ALG", "GHA"], ["ALG", "GVA"], ["ALG", "HME"], ["ALG", "HRM"], ["ALG", "INZ"], ["ALG", "IST"], ["ALG", "JED"], ["ALG", "LGW"], ["ALG", "LHR"], ["ALG", "LIL"], ["ALG", "LIS"], ["ALG", "LYS"], ["ALG", "MAD"], ["ALG", "MED"], ["ALG", "MLA"], ["ALG", "MRS"], ["ALG", "MUW"], ["ALG", "MXP"], ["ALG", "MZW"], ["ALG", "NCE"], ["ALG", "NIM"], ["ALG", "OGX"], ["ALG", "ORN"], ["ALG", "ORY"], ["ALG", "OUA"], ["ALG", "PEK"], ["ALG", "PMI"], ["ALG", "QSF"], ["ALG", "SVO"], ["ALG", "TEE"], ["ALG", "TGR"], ["ALG", "TID"], ["ALG", "TIP"], ["ALG", "TLM"], ["ALG", "TLS"], ["ALG", "TMR"], ["ALG", "TUN"], ["ALG", "VIE"], ["ALG", "YUL"], ["ALH", "BQB"], ["ALH", "PER"], ["ALO", "ORD"], ["ALS", "DEN"], ["ALS", "FMN"], ["ALW", "SEA"], ["AMA", "DAL"], ["AMA", "DEN"], ["AMA", "DFW"], ["AMA", "IAH"], ["AMA", "LAS"], ["AMA", "MDW"], ["AMD", "AUH"], ["AMD", "BLR"], ["AMD", "BOM"], ["AMD", "CCU"], ["AMD", "DEL"], ["AMD", "DOH"], ["AMD", "DWC"], ["AMD", "DXB"], ["AMD", "GOI"], ["AMD", "HYD"], ["AMD", "JAI"], ["AMD", "KUL"], ["AMD", "KWI"], ["AMD", "MAA"], ["AMD", "MCT"], ["AMD", "PNQ"], ["AMD", "SHJ"], ["AMD", "SIN"], ["AMH", "JIM"], ["AMM", "AMS"], ["AMM", "AQJ"], ["AMM", "ATH"], ["AMM", "AUH"], ["AMM", "BAH"], ["AMM", "BCN"], ["AMM", "BEN"], ["AMM", "BEY"], ["AMM", "BGW"], ["AMM", "BKK"], ["AMM", "BOM"], ["AMM", "BSR"], ["AMM", "CAI"], ["AMM", "CDG"], ["AMM", "DEL"], ["AMM", "DME"], ["AMM", "DMM"], ["AMM", "DOH"], ["AMM", "DWC"], ["AMM", "DXB"], ["AMM", "EBL"], ["AMM", "FCO"], ["AMM", "FRA"], ["AMM", "GVA"], ["AMM", "HBE"], ["AMM", "HOD"], ["AMM", "IST"], ["AMM", "ISU"], ["AMM", "JED"], ["AMM", "JFK"], ["AMM", "KBP"], ["AMM", "KRT"], ["AMM", "KWI"], ["AMM", "LCA"], ["AMM", "LHR"], ["AMM", "LOS"], ["AMM", "MAD"], ["AMM", "MCT"], ["AMM", "MED"], ["AMM", "MUC"], ["AMM", "NJF"], ["AMM", "ORD"], ["AMM", "OSM"], ["AMM", "OTP"], ["AMM", "RUH"], ["AMM", "SAH"], ["AMM", "SHJ"], ["AMM", "SSH"], ["AMM", "TIP"], ["AMM", "TLV"], ["AMM", "TUN"], ["AMM", "TXL"], ["AMM", "VIE"], ["AMM", "YUL"], ["AMM", "ZRH"], ["AMQ", "CGK"], ["AMQ", "FKQ"], ["AMQ", "KNG"], ["AMQ", "LUV"], ["AMQ", "MKW"], ["AMQ", "NBX"], ["AMQ", "SOQ"], ["AMQ", "SUB"], ["AMQ", "SXK"], ["AMQ", "UPG"], ["AMS", "ARN"], ["AMS", "ASR"], ["AMS", "ATH"], ["AMS", "ATL"], ["AMS", "AUA"], ["AMS", "AUH"], ["AMS", "AYT"], ["AMS", "BCN"], ["AMS", "BEG"], ["AMS", "BFS"], ["AMS", "BGO"], ["AMS", "BHX"], ["AMS", "BIO"], ["AMS", "BJV"], ["AMS", "BKK"], ["AMS", "BLL"], ["AMS", "BLQ"], ["AMS", "BOD"], ["AMS", "BOM"], ["AMS", "BON"], ["AMS", "BOS"], ["AMS", "BRE"], ["AMS", "BRI"], ["AMS", "BRN"], ["AMS", "BRS"], ["AMS", "BRU"], ["AMS", "BSL"], ["AMS", "BUD"], ["AMS", "CAI"], ["AMS", "CAN"], ["AMS", "CDG"], ["AMS", "CFE"], ["AMS", "CFU"], ["AMS", "CGN"], ["AMS", "CHQ"], ["AMS", "CMN"], ["AMS", "CPH"], ["AMS", "CPT"], ["AMS", "CTA"], ["AMS", "CTU"], ["AMS", "CUN"], ["AMS", "CUR"], ["AMS", "CWL"], ["AMS", "DAR"], ["AMS", "DBV"], ["AMS", "DEL"], ["AMS", "DFW"], ["AMS", "DLM"], ["AMS", "DMM"], ["AMS", "DOH"], ["AMS", "DTW"], ["AMS", "DUB"], ["AMS", "DUS"], ["AMS", "DXB"], ["AMS", "EBB"], ["AMS", "EBL"], ["AMS", "EDI"], ["AMS", "EFL"], ["AMS", "EMA"], ["AMS", "EWR"], ["AMS", "EXT"], ["AMS", "EZE"], ["AMS", "FAO"], ["AMS", "FCO"], ["AMS", "FLR"], ["AMS", "FNC"], ["AMS", "FRA"], ["AMS", "FUE"], ["AMS", "FUK"], ["AMS", "GCI"], ["AMS", "GDN"], ["AMS", "GIG"], ["AMS", "GLA"], ["AMS", "GOT"], ["AMS", "GRO"], ["AMS", "GRU"], ["AMS", "GUW"], ["AMS", "GVA"], ["AMS", "GYE"], ["AMS", "HAJ"], ["AMS", "HAM"], ["AMS", "HAV"], ["AMS", "HEL"], ["AMS", "HER"], ["AMS", "HGH"], ["AMS", "HKG"], ["AMS", "HOG"], ["AMS", "HRE"], ["AMS", "HUY"], ["AMS", "IAD"], ["AMS", "IAH"], ["AMS", "IBZ"], ["AMS", "ICN"], ["AMS", "IKA"], ["AMS", "INN"], ["AMS", "INV"], ["AMS", "IST"], ["AMS", "JER"], ["AMS", "JFK"], ["AMS", "JKH"], ["AMS", "JMK"], ["AMS", "JNB"], ["AMS", "JRO"], ["AMS", "JTR"], ["AMS", "KBP"], ["AMS", "KEF"], ["AMS", "KGL"], ["AMS", "KGS"], ["AMS", "KIT"], ["AMS", "KIX"], ["AMS", "KLX"], ["AMS", "KRK"], ["AMS", "KRS"], ["AMS", "KUL"], ["AMS", "KWI"], ["AMS", "KYA"], ["AMS", "LAD"], ["AMS", "LAX"], ["AMS", "LBA"], ["AMS", "LCA"], ["AMS", "LCY"], ["AMS", "LED"], ["AMS", "LEI"], ["AMS", "LEJ"], ["AMS", "LGW"], ["AMS", "LHR"], ["AMS", "LIM"], ["AMS", "LIN"], ["AMS", "LIS"], ["AMS", "LJU"], ["AMS", "LOS"], ["AMS", "LPA"], ["AMS", "LPI"], ["AMS", "LPL"], ["AMS", "LTN"], ["AMS", "LUN"], ["AMS", "LUX"], ["AMS", "LYS"], ["AMS", "MAD"], ["AMS", "MAN"], ["AMS", "MBJ"], ["AMS", "MEX"], ["AMS", "MIA"], ["AMS", "MJT"], ["AMS", "MLA"], ["AMS", "MME"], ["AMS", "MRS"], ["AMS", "MSP"], ["AMS", "MSQ"], ["AMS", "MUC"], ["AMS", "MXP"], ["AMS", "NAP"], ["AMS", "NBE"], ["AMS", "NBO"], ["AMS", "NCE"], ["AMS", "NCL"], ["AMS", "NDR"], ["AMS", "NRT"], ["AMS", "NTE"], ["AMS", "NUE"], ["AMS", "NWI"], ["AMS", "OLB"], ["AMS", "OPO"], ["AMS", "ORD"], ["AMS", "ORK"], ["AMS", "OSL"], ["AMS", "OTP"], ["AMS", "PBM"], ["AMS", "PDL"], ["AMS", "PDX"], ["AMS", "PEK"], ["AMS", "PFO"], ["AMS", "PHL"], ["AMS", "PMI"], ["AMS", "PMO"], ["AMS", "POP"], ["AMS", "PRG"], ["AMS", "PSA"], ["AMS", "PTY"], ["AMS", "PUJ"], ["AMS", "PVG"], ["AMS", "PVK"], ["AMS", "RAK"], ["AMS", "RHO"], ["AMS", "RIX"], ["AMS", "SAW"], ["AMS", "SEA"], ["AMS", "SEN"], ["AMS", "SFB"], ["AMS", "SFO"], ["AMS", "SID"], ["AMS", "SIN"], ["AMS", "SKG"], ["AMS", "SMI"], ["AMS", "SOF"], ["AMS", "SOU"], ["AMS", "SPC"], ["AMS", "STN"], ["AMS", "STR"], ["AMS", "SUF"], ["AMS", "SVG"], ["AMS", "SVO"], ["AMS", "SVQ"], ["AMS", "SXB"], ["AMS", "SXF"], ["AMS", "SXM"], ["AMS", "TBS"], ["AMS", "TFS"], ["AMS", "TLL"], ["AMS", "TLS"], ["AMS", "TLV"], ["AMS", "TNG"], ["AMS", "TPE"], ["AMS", "TRD"], ["AMS", "TRF"], ["AMS", "TRN"], ["AMS", "TUN"], ["AMS", "TXL"], ["AMS", "UIO"], ["AMS", "VCE"], ["AMS", "VIE"], ["AMS", "VLC"], ["AMS", "VOL"], ["AMS", "VRA"], ["AMS", "VRN"], ["AMS", "VXE"], ["AMS", "VXO"], ["AMS", "WAW"], ["AMS", "XMN"], ["AMS", "YUL"], ["AMS", "YVR"], ["AMS", "YYC"], ["AMS", "YYZ"], ["AMS", "ZAG"], ["AMS", "ZRH"], ["AMS", "ZTH"], ["ANC", "ANI"], ["ANC", "BET"], ["ANC", "BRW"], ["ANC", "CDB"], ["ANC", "CDV"], ["ANC", "DEN"], ["ANC", "DLG"], ["ANC", "ENA"], ["ANC", "FAI"], ["ANC", "HNL"], ["ANC", "HOM"], ["ANC", "ILI"], ["ANC", "JNU"], ["ANC", "KSM"], ["ANC", "LAS"], ["ANC", "LAX"], ["ANC", "MCG"], ["ANC", "MSP"], ["ANC", "OME"], ["ANC", "ORD"], ["ANC", "OTZ"], ["ANC", "PDX"], ["ANC", "PHX"], ["ANC", "SCC"], ["ANC", "SDP"], ["ANC", "SEA"], ["ANC", "SLC"], ["ANC", "SNP"], ["ANC", "STG"], ["ANC", "UNK"], ["ANC", "VDZ"], ["ANF", "ARI"], ["ANF", "CJC"], ["ANF", "IQQ"], ["ANF", "LIM"], ["ANF", "LSC"], ["ANF", "SCL"], ["ANG", "FSC"], ["ANI", "CHU"], ["ANI", "HCR"], ["ANI", "KLG"], ["ANI", "MCG"], ["ANI", "RSH"], ["ANI", "SHX"], ["ANI", "SLQ"], ["ANM", "TMM"], ["ANM", "TNR"], ["ANM", "WMN"], ["ANR", "LCY"], ["ANS", "LIM"], ["ANU", "AXA"], ["ANU", "BGI"], ["ANU", "CLT"], ["ANU", "DOM"], ["ANU", "EWR"], ["ANU", "FRA"], ["ANU", "JFK"], ["ANU", "KIN"], ["ANU", "LGW"], ["ANU", "MIA"], ["ANU", "NEV"], ["ANU", "POP"], ["ANU", "PTP"], ["ANU", "PUJ"], ["ANU", "SBH"], ["ANU", "SDQ"], ["ANU", "SJU"], ["ANU", "SKB"], ["ANU", "SLU"], ["ANU", "SXM"], ["ANU", "TAB"], ["ANU", "UVF"], ["ANU", "YYZ"], ["ANV", "HCR"], ["ANX", "BOO"], ["ANX", "EVE"], ["ANX", "SKN"], ["ANX", "TOS"], ["AOE", "BRU"], ["AOG", "PEK"], ["AOG", "PVG"], ["AOI", "CRL"], ["AOI", "CTA"], ["AOI", "DUS"], ["AOI", "FCO"], ["AOI", "MUC"], ["AOI", "NRN"], ["AOI", "STN"], ["AOI", "TPS"], ["AOI", "TXL"], ["AOJ", "CTS"], ["AOJ", "HND"], ["AOJ", "ICN"], ["AOJ", "ITM"], ["AOJ", "NKM"], ["AOK", "ATH"], ["AOK", "KSJ"], ["AOK", "MUC"], ["AOK", "RHO"], ["AOO", "IAD"], ["AOO", "JST"], ["AOR", "KUL"], ["AOR", "SZB"], ["APF", "MIA"], ["APL", "BEW"], ["APL", "JNB"], ["APL", "MPM"], ["APL", "NBO"], ["APL", "POL"], ["APL", "TET"], ["APL", "VXC"], ["APN", "DTW"], ["APN", "MSP"], ["APO", "BOG"], ["APO", "EOH"], ["APW", "BNE"], ["APW", "HNL"], ["APW", "NAN"], ["APW", "SYD"], ["AQA", "VCP"], ["AQG", "CAN"], ["AQG", "CKG"], ["AQG", "HAK"], ["AQG", "PEK"], ["AQG", "SHA"], ["AQG", "WUH"], ["AQG", "XMN"], ["AQI", "JED"], ["AQI", "RUH"], ["AQJ", "IST"], ["AQP", "CUZ"], ["AQP", "JUL"], ["AQP", "LIM"], ["AQP", "LPB"], ["AQP", "TCQ"], ["ARC", "VEE"], ["ARH", "CSH"], ["ARH", "LED"], ["ARH", "MMK"], ["ARH", "NNM"], ["ARH", "SVO"], ["ARH", "USK"], ["ARI", "IQQ"], ["ARI", "LPB"], ["ARI", "SCL"], ["ARK", "DAR"], ["ARK", "ZNZ"], ["ARM", "SYD"], ["ARN", "ATH"], ["ARN", "BCN"], ["ARN", "BEG"], ["ARN", "BGO"], ["ARN", "BGW"], ["ARN", "BHX"], ["ARN", "BKK"], ["ARN", "BLL"], ["ARN", "BLQ"], ["ARN", "BRU"], ["ARN", "BUD"], ["ARN", "CDG"], ["ARN", "CGN"], ["ARN", "CHQ"], ["ARN", "CMN"], ["ARN", "CPH"], ["ARN", "CTA"], ["ARN", "DBV"], ["ARN", "DOH"], ["ARN", "DUB"], ["ARN", "DUS"], ["ARN", "DXB"], ["ARN", "EBL"], ["ARN", "EDI"], ["ARN", "EVG"], ["ARN", "EWR"], ["ARN", "FAO"], ["ARN", "FCO"], ["ARN", "FLL"], ["ARN", "FRA"], ["ARN", "GEV"], ["ARN", "GOT"], ["ARN", "GVA"], ["ARN", "HAD"], ["ARN", "HAM"], ["ARN", "HEL"], ["ARN", "HFS"], ["ARN", "IKA"], ["ARN", "IST"], ["ARN", "ISU"], ["ARN", "JFK"], ["ARN", "JKG"], ["ARN", "KEF"], ["ARN", "KID"], ["ARN", "KLR"], ["ARN", "KLX"], ["ARN", "KRF"], ["ARN", "KRK"], ["ARN", "KRN"], ["ARN", "KSD"], ["ARN", "LAX"], ["ARN", "LCA"], ["ARN", "LCY"], ["ARN", "LED"], ["ARN", "LGW"], ["ARN", "LHR"], ["ARN", "LIN"], ["ARN", "LIS"], ["ARN", "LLA"], ["ARN", "LPA"], ["ARN", "LUX"], ["ARN", "LYC"], ["ARN", "MAD"], ["ARN", "MAN"], ["ARN", "MHQ"], ["ARN", "MLA"], ["ARN", "MMX"], ["ARN", "MSQ"], ["ARN", "MUC"], ["ARN", "MXX"], ["ARN", "NCE"], ["ARN", "OAK"], ["ARN", "OER"], ["ARN", "OLB"], ["ARN", "ORD"], ["ARN", "ORY"], ["ARN", "OSD"], ["ARN", "OSL"], ["ARN", "OUL"], ["ARN", "PDL"], ["ARN", "PEK"], ["ARN", "PMI"], ["ARN", "PMO"], ["ARN", "POR"], ["ARN", "PRG"], ["ARN", "PSA"], ["ARN", "PUY"], ["ARN", "RIX"], ["ARN", "RNB"], ["ARN", "SAW"], ["ARN", "SDL"], ["ARN", "SFT"], ["ARN", "SJJ"], ["ARN", "SKG"], ["ARN", "SPU"], ["ARN", "SVG"], ["ARN", "SVO"], ["ARN", "SXF"], ["ARN", "TKU"], ["ARN", "TLL"], ["ARN", "TLV"], ["ARN", "TMP"], ["ARN", "TOS"], ["ARN", "TRD"], ["ARN", "TRF"], ["ARN", "TXL"], ["ARN", "UME"], ["ARN", "VAA"], ["ARN", "VBY"], ["ARN", "VCE"], ["ARN", "VHM"], ["ARN", "VIE"], ["ARN", "VNO"], ["ARN", "VXO"], ["ARN", "WAW"], ["ARN", "ZRH"], ["ART", "ORD"], ["ART", "PHL"], ["ARU", "GRU"], ["ARU", "VCP"], ["ARW", "BGY"], ["ASB", "ATQ"], ["ASB", "BHX"], ["ASB", "DEL"], ["ASB", "DME"], ["ASB", "DXB"], ["ASB", "FRA"], ["ASB", "GYD"], ["ASB", "IST"], ["ASB", "LHR"], ["ASB", "MSQ"], ["ASB", "URC"], ["ASE", "DEN"], ["ASE", "LAX"], ["ASF", "DME"], ["ASF", "KZN"], ["ASF", "LED"], ["ASF", "MRV"], ["ASF", "SAW"], ["ASF", "SCO"], ["ASF", "SVO"], ["ASJ", "HND"], ["ASJ", "ITM"], ["ASM", "CAI"], ["ASM", "EBB"], ["ASM", "JED"], ["ASM", "JUB"], ["ASM", "KRT"], ["ASM", "MSW"], ["ASM", "NBO"], ["ASM", "SAH"], ["ASO", "GMB"], ["ASP", "AYQ"], ["ASP", "BNE"], ["ASP", "CNS"], ["ASP", "DRW"], ["ASP", "MEL"], ["ASP", "PER"], ["ASP", "SYD"], ["ASR", "DUS"], ["ASR", "IST"], ["ASR", "SAW"], ["ASU", "EZE"], ["ASU", "GRU"], ["ASU", "LIM"], ["ASU", "MIA"], ["ASU", "MVD"], ["ASU", "PTY"], ["ASU", "SCL"], ["ASU", "VVI"], ["ASV", "WIL"], ["ASW", "CAI"], ["ASW", "JED"], ["ATA", "LIM"], ["ATC", "NAS"], ["ATC", "TBI"], ["ATD", "HIR"], ["ATH", "AUH"], ["ATH", "AXD"], ["ATH", "BCN"], ["ATH", "BEG"], ["ATH", "BEY"], ["ATH", "BGY"], ["ATH", "BRU"], ["ATH", "BUD"], ["ATH", "CAI"], ["ATH", "CDG"], ["ATH", "CFU"], ["ATH", "CGN"], ["ATH", "CHQ"], ["ATH", "CPH"], ["ATH", "DBV"], ["ATH", "DME"], ["ATH", "DOH"], ["ATH", "DUB"], ["ATH", "DUS"], ["ATH", "DXB"], ["ATH", "EDI"], ["ATH", "EFL"], ["ATH", "EIN"], ["ATH", "EVN"], ["ATH", "FCO"], ["ATH", "FRA"], ["ATH", "GVA"], ["ATH", "HAM"], ["ATH", "HBE"], ["ATH", "HEL"], ["ATH", "HER"], ["ATH", "IEV"], ["ATH", "IOA"], ["ATH", "IST"], ["ATH", "JIK"], ["ATH", "JKH"], ["ATH", "JKL"], ["ATH", "JMK"], ["ATH", "JNX"], ["ATH", "JSH"], ["ATH", "JSI"], ["ATH", "JSY"], ["ATH", "JTR"], ["ATH", "JTY"], ["ATH", "KBP"], ["ATH", "KGS"], ["ATH", "KIT"], ["ATH", "KIV"], ["ATH", "KRR"], ["ATH", "KSO"], ["ATH", "KVA"], ["ATH", "KZI"], ["ATH", "LCA"], ["ATH", "LED"], ["ATH", "LGW"], ["ATH", "LHR"], ["ATH", "LRS"], ["ATH", "LXS"], ["ATH", "LYS"], ["ATH", "MAD"], ["ATH", "MAN"], ["ATH", "MJT"], ["ATH", "MLA"], ["ATH", "MLO"], ["ATH", "MRS"], ["ATH", "MUC"], ["ATH", "MXP"], ["ATH", "NTE"], ["ATH", "ORY"], ["ATH", "OSL"], ["ATH", "OTP"], ["ATH", "PAS"], ["ATH", "PFO"], ["ATH", "PHL"], ["ATH", "PRG"], ["ATH", "RHO"], ["ATH", "RIX"], ["ATH", "SAW"], ["ATH", "SKG"], ["ATH", "SKU"], ["ATH", "SMI"], ["ATH", "SOF"], ["ATH", "SPU"], ["ATH", "STN"], ["ATH", "STR"], ["ATH", "SVO"], ["ATH", "SXF"], ["ATH", "TBS"], ["ATH", "TIA"], ["ATH", "TLS"], ["ATH", "TLV"], ["ATH", "TXL"], ["ATH", "VCE"], ["ATH", "VIE"], ["ATH", "WAW"], ["ATH", "YUL"], ["ATH", "YYZ"], ["ATH", "ZRH"], ["ATH", "ZTH"], ["ATK", "BRW"], ["ATL", "ATW"], ["ATL", "AUA"], ["ATL", "AUS"], ["ATL", "AVL"], ["ATL", "AVP"], ["ATL", "AZO"], ["ATL", "BDA"], ["ATL", "BDL"], ["ATL", "BHM"], ["ATL", "BJX"], ["ATL", "BMI"], ["ATL", "BNA"], ["ATL", "BOG"], ["ATL", "BON"], ["ATL", "BOS"], ["ATL", "BQK"], ["ATL", "BRU"], ["ATL", "BSB"], ["ATL", "BTR"], ["ATL", "BTV"], ["ATL", "BUF"], ["ATL", "BWI"], ["ATL", "BZE"], ["ATL", "CAE"], ["ATL", "CAK"], ["ATL", "CCS"], ["ATL", "CDG"], ["ATL", "CHA"], ["ATL", "CHO"], ["ATL", "CHS"], ["ATL", "CID"], ["ATL", "CLE"], ["ATL", "CLT"], ["ATL", "CMH"], ["ATL", "COS"], ["ATL", "CRW"], ["ATL", "CSG"], ["ATL", "CUN"], ["ATL", "CVG"], ["ATL", "CZM"], ["ATL", "DAB"], ["ATL", "DAL"], ["ATL", "DAY"], ["ATL", "DCA"], ["ATL", "DEN"], ["ATL", "DFW"], ["ATL", "DHN"], ["ATL", "DSM"], ["ATL", "DTW"], ["ATL", "DUB"], ["ATL", "DUS"], ["ATL", "DXB"], ["ATL", "ECP"], ["ATL", "ELP"], ["ATL", "EVV"], ["ATL", "EWN"], ["ATL", "EWR"], ["ATL", "EYW"], ["ATL", "EZE"], ["ATL", "FAR"], ["ATL", "FAY"], ["ATL", "FCO"], ["ATL", "FLL"], ["ATL", "FNT"], ["ATL", "FPO"], ["ATL", "FRA"], ["ATL", "FSD"], ["ATL", "FSM"], ["ATL", "FWA"], ["ATL", "GCM"], ["ATL", "GDL"], ["ATL", "GGT"], ["ATL", "GIG"], ["ATL", "GNV"], ["ATL", "GPT"], ["ATL", "GRB"], ["ATL", "GRK"], ["ATL", "GRR"], ["ATL", "GRU"], ["ATL", "GSO"], ["ATL", "GSP"], ["ATL", "GTR"], ["ATL", "GUA"], ["ATL", "HNL"], ["ATL", "HOU"], ["ATL", "HPN"], ["ATL", "HSV"], ["ATL", "IAD"], ["ATL", "IAH"], ["ATL", "ICN"], ["ATL", "ICT"], ["ATL", "ILM"], ["ATL", "IND"], ["ATL", "JAN"], ["ATL", "JAX"], ["ATL", "JFK"], ["ATL", "JNB"], ["ATL", "KIN"], ["ATL", "LAN"], ["ATL", "LAS"], ["ATL", "LAX"], ["ATL", "LEX"], ["ATL", "LFT"], ["ATL", "LGA"], ["ATL", "LHR"], ["ATL", "LIM"], ["ATL", "LIR"], ["ATL", "LIT"], ["ATL", "LOS"], ["ATL", "LWB"], ["ATL", "MAD"], ["ATL", "MAN"], ["ATL", "MBJ"], ["ATL", "MBS"], ["ATL", "MCI"], ["ATL", "MCN"], ["ATL", "MCO"], ["ATL", "MDT"], ["ATL", "MDW"], ["ATL", "MEI"], ["ATL", "MEM"], ["ATL", "MEX"], ["ATL", "MGA"], ["ATL", "MGM"], ["ATL", "MHT"], ["ATL", "MIA"], ["ATL", "MKE"], ["ATL", "MLB"], ["ATL", "MLI"], ["ATL", "MLU"], ["ATL", "MOB"], ["ATL", "MSL"], ["ATL", "MSN"], ["ATL", "MSP"], ["ATL", "MSY"], ["ATL", "MTY"], ["ATL", "MUC"], ["ATL", "MYR"], ["ATL", "NAS"], ["ATL", "NRT"], ["ATL", "OAJ"], ["ATL", "OKC"], ["ATL", "OMA"], ["ATL", "ORD"], ["ATL", "ORF"], ["ATL", "PAP"], ["ATL", "PBI"], ["ATL", "PDX"], ["ATL", "PHF"], ["ATL", "PHL"], ["ATL", "PHX"], ["ATL", "PIA"], ["ATL", "PIB"], ["ATL", "PIT"], ["ATL", "PLS"], ["ATL", "PNS"], ["ATL", "PTY"], ["ATL", "PUJ"], ["ATL", "PVD"], ["ATL", "PVR"], ["ATL", "PWM"], ["ATL", "RDU"], ["ATL", "RIC"], ["ATL", "ROA"], ["ATL", "ROC"], ["ATL", "RSW"], ["ATL", "RTB"], ["ATL", "SAL"], ["ATL", "SAN"], ["ATL", "SAP"], ["ATL", "SAT"], ["ATL", "SAV"], ["ATL", "SBN"], ["ATL", "SCL"], ["ATL", "SDF"], ["ATL", "SDQ"], ["ATL", "SEA"], ["ATL", "SFO"], ["ATL", "SGF"], ["ATL", "SHV"], ["ATL", "SJC"], ["ATL", "SJD"], ["ATL", "SJO"], ["ATL", "SJU"], ["ATL", "SLC"], ["ATL", "SMF"], ["ATL", "SNA"], ["ATL", "SRQ"], ["ATL", "STL"], ["ATL", "STR"], ["ATL", "STT"], ["ATL", "SXM"], ["ATL", "SYR"], ["ATL", "TGU"], ["ATL", "TLH"], ["ATL", "TPA"], ["ATL", "TRI"], ["ATL", "TTN"], ["ATL", "TUL"], ["ATL", "TUP"], ["ATL", "TUS"], ["ATL", "TYS"], ["ATL", "UIO"], ["ATL", "UVF"], ["ATL", "VLD"], ["ATL", "VPS"], ["ATL", "XNA"], ["ATL", "YUL"], ["ATL", "YYZ"], ["ATL", "ZRH"], ["ATM", "BEL"], ["ATM", "ORX"], ["ATM", "STM"], ["ATQ", "BOM"], ["ATQ", "DEL"], ["ATQ", "DOH"], ["ATQ", "SXR"], ["ATQ", "TAS"], ["ATW", "AZA"], ["ATW", "DTW"], ["ATW", "LAS"], ["ATW", "MSP"], ["ATW", "ORD"], ["ATW", "SFB"], ["ATY", "MSP"], ["ATY", "PIR"], ["ATZ", "CAI"], ["ATZ", "JED"], ["ATZ", "KWI"], ["ATZ", "RUH"], ["ATZ", "SHJ"], ["AUA", "BOG"], ["AUA", "BON"], ["AUA", "BOS"], ["AUA", "BWI"], ["AUA", "CCS"], ["AUA", "CLT"], ["AUA", "CUR"], ["AUA", "EWR"], ["AUA", "FLL"], ["AUA", "IAD"], ["AUA", "JBQ"], ["AUA", "JFK"], ["AUA", "LGA"], ["AUA", "LRM"], ["AUA", "LSP"], ["AUA", "MAR"], ["AUA", "MCO"], ["AUA", "MIA"], ["AUA", "PBM"], ["AUA", "PHL"], ["AUA", "PTY"], ["AUA", "VLN"], ["AUA", "YYZ"], ["AUC", "BOG"], ["AUG", "BOS"], ["AUH", "BAH"], ["AUH", "BEG"], ["AUH", "BEY"], ["AUH", "BGW"], ["AUH", "BKK"], ["AUH", "BLR"], ["AUH", "BOM"], ["AUH", "BRU"], ["AUH", "BSR"], ["AUH", "CAI"], ["AUH", "CCJ"], ["AUH", "CDG"], ["AUH", "CGK"], ["AUH", "CGP"], ["AUH", "CMB"], ["AUH", "CMN"], ["AUH", "COK"], ["AUH", "CTU"], ["AUH", "DAC"], ["AUH", "DEL"], ["AUH", "DME"], ["AUH", "DMM"], ["AUH", "DOH"], ["AUH", "DUB"], ["AUH", "DUS"], ["AUH", "EBL"], ["AUH", "FCO"], ["AUH", "FRA"], ["AUH", "GRU"], ["AUH", "GVA"], ["AUH", "GXF"], ["AUH", "HKG"], ["AUH", "HKT"], ["AUH", "HYD"], ["AUH", "IAD"], ["AUH", "ICN"], ["AUH", "IKA"], ["AUH", "ISB"], ["AUH", "IST"], ["AUH", "IXE"], ["AUH", "JAI"], ["AUH", "JED"], ["AUH", "JFK"], ["AUH", "JNB"], ["AUH", "KHI"], ["AUH", "KIH"], ["AUH", "KRT"], ["AUH", "KTM"], ["AUH", "KUL"], ["AUH", "KWI"], ["AUH", "LCA"], ["AUH", "LHE"], ["AUH", "LHR"], ["AUH", "LOS"], ["AUH", "MAA"], ["AUH", "MAN"], ["AUH", "MCT"], ["AUH", "MED"], ["AUH", "MEL"], ["AUH", "MLE"], ["AUH", "MNL"], ["AUH", "MSQ"], ["AUH", "MUC"], ["AUH", "MXP"], ["AUH", "NBO"], ["AUH", "NRT"], ["AUH", "ORD"], ["AUH", "PEK"], ["AUH", "PEW"], ["AUH", "PVG"], ["AUH", "RIY"], ["AUH", "RUH"], ["AUH", "RYK"], ["AUH", "SAH"], ["AUH", "SEZ"], ["AUH", "SGN"], ["AUH", "SHJ"], ["AUH", "SIN"], ["AUH", "SYD"], ["AUH", "TRV"], ["AUH", "TSE"], ["AUH", "TXL"], ["AUH", "YYZ"], ["AUH", "ZYL"], ["AUK", "EMK"], ["AUQ", "NHV"], ["AUQ", "PPT"], ["AUQ", "UAH"], ["AUQ", "UAP"], ["AUR", "ORY"], ["AUS", "BNA"], ["AUS", "BOS"], ["AUS", "BWI"], ["AUS", "CLE"], ["AUS", "CLT"], ["AUS", "CUN"], ["AUS", "DAL"], ["AUS", "DCA"], ["AUS", "DEN"], ["AUS", "DFW"], ["AUS", "DTW"], ["AUS", "ELP"], ["AUS", "EWR"], ["AUS", "FLL"], ["AUS", "HOU"], ["AUS", "HRL"], ["AUS", "IAD"], ["AUS", "IAH"], ["AUS", "JFK"], ["AUS", "LAS"], ["AUS", "LAX"], ["AUS", "LBB"], ["AUS", "LGB"], ["AUS", "LHR"], ["AUS", "MCO"], ["AUS", "MDW"], ["AUS", "MEM"], ["AUS", "MEX"], ["AUS", "MSP"], ["AUS", "MSY"], ["AUS", "OAK"], ["AUS", "ORD"], ["AUS", "PHL"], ["AUS", "PHX"], ["AUS", "SAN"], ["AUS", "SEA"], ["AUS", "SFO"], ["AUS", "SJC"], ["AUS", "SLC"], ["AUS", "SMF"], ["AUS", "TPA"], ["AUU", "CNS"], ["AUU", "CUQ"], ["AUU", "IRG"], ["AUX", "BSB"], ["AUX", "MAB"], ["AUX", "PMW"], ["AUY", "TAH"], ["AVA", "CAN"], ["AVA", "CKG"], ["AVA", "NAY"], ["AVL", "CLT"], ["AVL", "DTW"], ["AVL", "FLL"], ["AVL", "ORD"], ["AVL", "PGD"], ["AVL", "PIE"], ["AVL", "SFB"], ["AVN", "LIG"], ["AVP", "CLT"], ["AVP", "DTW"], ["AVP", "ORD"], ["AVP", "PHL"], ["AVP", "SFB"], ["AVV", "SYD"], ["AWD", "FTA"], ["AWD", "TAH"], ["AWZ", "BND"], ["AWZ", "DXB"], ["AWZ", "IFN"], ["AWZ", "JED"], ["AWZ", "KIH"], ["AWZ", "KWI"], ["AWZ", "MED"], ["AWZ", "MHD"], ["AWZ", "PGU"], ["AWZ", "RAS"], ["AWZ", "SRY"], ["AWZ", "SYZ"], ["AWZ", "TBZ"], ["AWZ", "THR"], ["AXA", "SJU"], ["AXA", "STT"], ["AXA", "SXM"], ["AXD", "JSH"], ["AXK", "SAH"], ["AXM", "BOG"], ["AXM", "FLL"], ["AXP", "CRI"], ["AXP", "NAS"], ["AXR", "KKR"], ["AXR", "PPT"], ["AXT", "CTS"], ["AXT", "HND"], ["AXT", "ICN"], ["AXT", "ITM"], ["AXT", "NGO"], ["AXU", "LLI"], ["AYP", "LIM"], ["AYQ", "CNS"], ["AYQ", "SYD"], ["AYT", "BGO"], ["AYT", "BGW"], ["AYT", "BHX"], ["AYT", "BLL"], ["AYT", "BRE"], ["AYT", "BRS"], ["AYT", "BRU"], ["AYT", "BSL"], ["AYT", "CGN"], ["AYT", "CPH"], ["AYT", "DRS"], ["AYT", "DUS"], ["AYT", "EBL"], ["AYT", "ECN"], ["AYT", "EIN"], ["AYT", "ERF"], ["AYT", "ESB"], ["AYT", "FDH"], ["AYT", "FMO"], ["AYT", "FRA"], ["AYT", "GLA"], ["AYT", "GRQ"], ["AYT", "GRZ"], ["AYT", "GVA"], ["AYT", "HAJ"], ["AYT", "HAM"], ["AYT", "HEL"], ["AYT", "IST"], ["AYT", "KBP"], ["AYT", "KSF"], ["AYT", "KZN"], ["AYT", "LBA"], ["AYT", "LED"], ["AYT", "LEJ"], ["AYT", "LGW"], ["AYT", "LNZ"], ["AYT", "LTN"], ["AYT", "LUX"], ["AYT", "MAN"], ["AYT", "MST"], ["AYT", "MUC"], ["AYT", "NUE"], ["AYT", "ORY"], ["AYT", "OSL"], ["AYT", "PAD"], ["AYT", "PRG"], ["AYT", "RLG"], ["AYT", "ROV"], ["AYT", "RTM"], ["AYT", "SAW"], ["AYT", "STR"], ["AYT", "SVO"], ["AYT", "SXF"], ["AYT", "SZG"], ["AYT", "TRD"], ["AYT", "TRF"], ["AYT", "TXL"], ["AYT", "TZX"], ["AYT", "VIE"], ["AYT", "VKO"], ["AYT", "ZQW"], ["AYT", "ZRH"], ["AZA", "BIL"], ["AZA", "BIS"], ["AZA", "BLI"], ["AZA", "BZN"], ["AZA", "CID"], ["AZA", "DLH"], ["AZA", "EUG"], ["AZA", "FAR"], ["AZA", "FSD"], ["AZA", "FWA"], ["AZA", "GFK"], ["AZA", "GRI"], ["AZA", "GRR"], ["AZA", "GTF"], ["AZA", "ICT"], ["AZA", "IDA"], ["AZA", "LAS"], ["AZA", "MLI"], ["AZA", "MOT"], ["AZA", "MSO"], ["AZA", "OAK"], ["AZA", "OGD"], ["AZA", "PIA"], ["AZA", "PSC"], ["AZA", "PVU"], ["AZA", "RAP"], ["AZA", "RFD"], ["AZA", "RST"], ["AZA", "SBN"], ["AZA", "SGF"], ["AZA", "STC"], ["AZD", "BND"], ["AZD", "JED"], ["AZD", "MED"], ["AZD", "MHD"], ["AZD", "THR"], ["AZI", "DXB"], ["AZI", "FJR"], ["AZI", "XSB"], ["AZN", "DME"], ["AZN", "LED"], ["AZN", "TAS"], ["AZO", "DTW"], ["AZO", "MSP"], ["AZO", "ORD"], ["AZR", "BMW"], ["AZR", "CZL"], ["AZR", "INZ"], ["AZR", "OGX"], ["AZR", "ORN"], ["AZS", "JFK"], ["AZS", "POP"], ["AZS", "SJU"], ["AZS", "YUL"], ["AZS", "YYZ"], ["BAH", "BEY"], ["BAH", "BGW"], ["BAH", "BKK"], ["BAH", "BOM"], ["BAH", "CAI"], ["BAH", "CCJ"], ["BAH", "CDG"], ["BAH", "CMB"], ["BAH", "COK"], ["BAH", "DEL"], ["BAH", "DMM"], ["BAH", "DOH"], ["BAH", "DWC"], ["BAH", "DXB"], ["BAH", "FRA"], ["BAH", "IKA"], ["BAH", "ISB"], ["BAH", "IST"], ["BAH", "IXE"], ["BAH", "JED"], ["BAH", "KHI"], ["BAH", "KRT"], ["BAH", "KWI"], ["BAH", "LCA"], ["BAH", "LHE"], ["BAH", "LHR"], ["BAH", "MAA"], ["BAH", "MCT"], ["BAH", "MED"], ["BAH", "MHD"], ["BAH", "MNL"], ["BAH", "NJF"], ["BAH", "PEW"], ["BAH", "RUH"], ["BAH", "SAH"], ["BAH", "SHJ"], ["BAH", "SKT"], ["BAH", "TRV"], ["BAL", "ESB"], ["BAL", "IST"], ["BAL", "SAW"], ["BAQ", "BOG"], ["BAQ", "CLO"], ["BAQ", "MDE"], ["BAQ", "MIA"], ["BAQ", "PTY"], ["BAV", "CAN"], ["BAV", "CGO"], ["BAV", "CIF"], ["BAV", "CSX"], ["BAV", "CTU"], ["BAV", "NAY"], ["BAV", "NKG"], ["BAV", "PEK"], ["BAV", "PVG"], ["BAV", "SHA"], ["BAV", "SHE"], ["BAV", "SJW"], ["BAV", "TSN"], ["BAV", "TYN"], ["BAV", "URC"], ["BAV", "WUH"], ["BAV", "XIY"], ["BAX", "DME"], ["BAX", "SVO"], ["BAY", "OTP"], ["BAZ", "MAO"], ["BBA", "PMC"], ["BBA", "PUQ"], ["BBA", "SCL"], ["BBI", "BLR"], ["BBI", "BOM"], ["BBI", "CCU"], ["BBI", "DEL"], ["BBI", "HYD"], ["BBI", "IXZ"], ["BBI", "VTZ"], ["BBK", "GBE"], ["BBK", "JNB"], ["BBK", "MUB"], ["BBN", "MUR"], ["BBN", "MYY"], ["BBO", "BSA"], ["BBO", "DXB"], ["BBO", "HGA"], ["BBO", "JIB"], ["BBO", "MGQ"], ["BBO", "SHJ"], ["BCD", "CEB"], ["BCD", "CGY"], ["BCD", "DVO"], ["BCD", "MNL"], ["BCI", "BNE"], ["BCI", "LRE"], ["BCN", "BES"], ["BCN", "BFS"], ["BCN", "BGO"], ["BCN", "BGY"], ["BCN", "BHX"], ["BCN", "BIO"], ["BCN", "BJL"], ["BCN", "BJZ"], ["BCN", "BLQ"], ["BCN", "BOD"], ["BCN", "BOG"], ["BCN", "BRI"], ["BCN", "BRN"], ["BCN", "BRS"], ["BCN", "BRU"], ["BCN", "BSL"], ["BCN", "BUD"], ["BCN", "BVA"], ["BCN", "CAI"], ["BCN", "CDG"], ["BCN", "CGN"], ["BCN", "CIA"], ["BCN", "CLJ"], ["BCN", "CMN"], ["BCN", "CPH"], ["BCN", "CRL"], ["BCN", "CTA"], ["BCN", "CWL"], ["BCN", "DBV"], ["BCN", "DKR"], ["BCN", "DME"], ["BCN", "DOH"], ["BCN", "DRS"], ["BCN", "DTM"], ["BCN", "DUB"], ["BCN", "DUS"], ["BCN", "DXB"], ["BCN", "EAS"], ["BCN", "EDI"], ["BCN", "EIN"], ["BCN", "EMA"], ["BCN", "EWR"], ["BCN", "EZE"], ["BCN", "FCO"], ["BCN", "FEZ"], ["BCN", "FLR"], ["BCN", "FRA"], ["BCN", "FUE"], ["BCN", "GDN"], ["BCN", "GLA"], ["BCN", "GOA"], ["BCN", "GOT"], ["BCN", "GRU"], ["BCN", "GRX"], ["BCN", "GVA"], ["BCN", "HAJ"], ["BCN", "HAM"], ["BCN", "HEL"], ["BCN", "IBZ"], ["BCN", "IEV"], ["BCN", "ISB"], ["BCN", "IST"], ["BCN", "JFK"], ["BCN", "KBP"], ["BCN", "KTW"], ["BCN", "LBA"], ["BCN", "LCG"], ["BCN", "LED"], ["BCN", "LEI"], ["BCN", "LEJ"], ["BCN", "LEN"], ["BCN", "LGW"], ["BCN", "LHE"], ["BCN", "LHR"], ["BCN", "LIL"], ["BCN", "LIN"], ["BCN", "LIS"], ["BCN", "LPA"], ["BCN", "LPL"], ["BCN", "LTN"], ["BCN", "LUX"], ["BCN", "LYS"], ["BCN", "MAD"], ["BCN", "MAH"], ["BCN", "MAN"], ["BCN", "MIA"], ["BCN", "MLA"], ["BCN", "MRS"], ["BCN", "MSQ"], ["BCN", "MUC"], ["BCN", "MXP"], ["BCN", "NAP"], ["BCN", "NCE"], ["BCN", "NCL"], ["BCN", "NDR"], ["BCN", "NTE"], ["BCN", "NUE"], ["BCN", "NYO"], ["BCN", "OPO"], ["BCN", "ORK"], ["BCN", "ORN"], ["BCN", "ORY"], ["BCN", "OSL"], ["BCN", "OTP"], ["BCN", "OVD"], ["BCN", "PHL"], ["BCN", "PIK"], ["BCN", "PMI"], ["BCN", "PMO"], ["BCN", "POZ"], ["BCN", "PRG"], ["BCN", "PSA"], ["BCN", "RAK"], ["BCN", "RGS"], ["BCN", "RIX"], ["BCN", "RNS"], ["BCN", "RTM"], ["BCN", "RYG"], ["BCN", "SAW"], ["BCN", "SCQ"], ["BCN", "SDR"], ["BCN", "SEN"], ["BCN", "SIN"], ["BCN", "SLM"], ["BCN", "SOF"], ["BCN", "STN"], ["BCN", "STR"], ["BCN", "SVG"], ["BCN", "SVO"], ["BCN", "SVQ"], ["BCN", "SXF"], ["BCN", "TFN"], ["BCN", "TFS"], ["BCN", "TLS"], ["BCN", "TLV"], ["BCN", "TNG"], ["BCN", "TRF"], ["BCN", "TRN"], ["BCN", "TSF"], ["BCN", "TSR"], ["BCN", "TUN"], ["BCN", "TXL"], ["BCN", "VCE"], ["BCN", "VGO"], ["BCN", "VIE"], ["BCN", "VLL"], ["BCN", "VNO"], ["BCN", "WAW"], ["BCN", "WMI"], ["BCN", "XRY"], ["BCN", "YUL"], ["BCN", "YYZ"], ["BCN", "ZAG"], ["BCN", "ZRH"], ["BDA", "BOS"], ["BDA", "EWR"], ["BDA", "JFK"], ["BDA", "LGW"], ["BDA", "MIA"], ["BDA", "PHL"], ["BDA", "YYZ"], ["BDB", "BNE"], ["BDH", "DXB"], ["BDH", "SYZ"], ["BDJ", "BDO"], ["BDJ", "BPN"], ["BDJ", "CGK"], ["BDJ", "JOG"], ["BDJ", "PKN"], ["BDJ", "SRG"], ["BDJ", "SUB"], ["BDL", "BWI"], ["BDL", "CLT"], ["BDL", "CVG"], ["BDL", "DCA"], ["BDL", "DEN"], ["BDL", "DFW"], ["BDL", "DTW"], ["BDL", "FLL"], ["BDL", "IAD"], ["BDL", "LAS"], ["BDL", "LAX"], ["BDL", "MCO"], ["BDL", "MDW"], ["BDL", "MIA"], ["BDL", "MSP"], ["BDL", "ORD"], ["BDL", "PBI"], ["BDL", "PHL"], ["BDL", "PIT"], ["BDL", "RDU"], ["BDL", "RSW"], ["BDL", "SJU"], ["BDL", "TPA"], ["BDL", "YUL"], ["BDL", "YYZ"], ["BDO", "BTH"], ["BDO", "DPS"], ["BDO", "JHB"], ["BDO", "JOG"], ["BDO", "KUL"], ["BDO", "PKU"], ["BDO", "SIN"], ["BDO", "SUB"], ["BDP", "KTM"], ["BDQ", "BOM"], ["BDQ", "DEL"], ["BDS", "BGY"], ["BDS", "BLQ"], ["BDS", "BSL"], ["BDS", "BVA"], ["BDS", "CIA"], ["BDS", "CRL"], ["BDS", "EIN"], ["BDS", "FCO"], ["BDS", "GRO"], ["BDS", "GVA"], ["BDS", "LIN"], ["BDS", "MUC"], ["BDS", "MXP"], ["BDS", "PSA"], ["BDS", "STN"], ["BDS", "STR"], ["BDS", "TRN"], ["BDS", "TSF"], ["BDS", "ZRH"], ["BDU", "OSL"], ["BEB", "GLA"], ["BEB", "SYY"], ["BEG", "BNX"], ["BEG", "BRU"], ["BEG", "BUD"], ["BEG", "BVA"], ["BEG", "CDG"], ["BEG", "CPH"], ["BEG", "CRL"], ["BEG", "DTM"], ["BEG", "DUS"], ["BEG", "DXB"], ["BEG", "EIN"], ["BEG", "ESB"], ["BEG", "FCO"], ["BEG", "FMM"], ["BEG", "FRA"], ["BEG", "GSE"], ["BEG", "GVA"], ["BEG", "IST"], ["BEG", "LCA"], ["BEG", "LHR"], ["BEG", "LJU"], ["BEG", "LTN"], ["BEG", "MMX"], ["BEG", "MUC"], ["BEG", "MXP"], ["BEG", "NYO"], ["BEG", "OSL"], ["BEG", "OTP"], ["BEG", "PRG"], ["BEG", "SAW"], ["BEG", "SJJ"], ["BEG", "SKG"], ["BEG", "SKP"], ["BEG", "SOF"], ["BEG", "SPU"], ["BEG", "STR"], ["BEG", "SVO"], ["BEG", "TGD"], ["BEG", "TIV"], ["BEG", "TLV"], ["BEG", "TRF"], ["BEG", "TUN"], ["BEG", "TXL"], ["BEG", "VAR"], ["BEG", "VIE"], ["BEG", "WAW"], ["BEG", "ZRH"], ["BEJ", "BPN"], ["BEL", "BSB"], ["BEL", "BVS"], ["BEL", "CAY"], ["BEL", "CKS"], ["BEL", "CNF"], ["BEL", "FOR"], ["BEL", "GIG"], ["BEL", "GRU"], ["BEL", "IMP"], ["BEL", "MAB"], ["BEL", "MAO"], ["BEL", "MCP"], ["BEL", "MEU"], ["BEL", "MIA"], ["BEL", "PBM"], ["BEL", "SLZ"], ["BEL", "STM"], ["BEL", "TUR"], ["BEN", "CAI"], ["BEN", "CMN"], ["BEN", "HBE"], ["BEN", "IST"], ["BEN", "JED"], ["BEN", "MLA"], ["BEN", "SFA"], ["BEN", "TIP"], ["BEN", "TUN"], ["BES", "BIA"], ["BES", "BOD"], ["BES", "CDG"], ["BES", "LCY"], ["BES", "LYS"], ["BES", "MRS"], ["BES", "NCE"], ["BES", "ORY"], ["BES", "SOU"], ["BET", "CYF"], ["BET", "EEK"], ["BET", "EMK"], ["BET", "HPB"], ["BET", "KKH"], ["BET", "KLG"], ["BET", "KPN"], ["BET", "KUK"], ["BET", "KWK"], ["BET", "KWN"], ["BET", "KWT"], ["BET", "MLL"], ["BET", "MYU"], ["BET", "NME"], ["BET", "OOK"], ["BET", "PKA"], ["BET", "PTU"], ["BET", "RSH"], ["BET", "SCM"], ["BET", "VAK"], ["BET", "WNA"], ["BEU", "BQL"], ["BEU", "BVI"], ["BEW", "JNB"], ["BEW", "MPM"], ["BEW", "POL"], ["BEW", "TET"], ["BEW", "UEL"], ["BEY", "BGW"], ["BEY", "BRU"], ["BEY", "BSR"], ["BEY", "CAI"], ["BEY", "CDG"], ["BEY", "CMN"], ["BEY", "DMM"], ["BEY", "DOH"], ["BEY", "DWC"], ["BEY", "DXB"], ["BEY", "EBL"], ["BEY", "EVN"], ["BEY", "FCO"], ["BEY", "FRA"], ["BEY", "GVA"], ["BEY", "HBE"], ["BEY", "IKA"], ["BEY", "IST"], ["BEY", "JED"], ["BEY", "KAN"], ["BEY", "KWI"], ["BEY", "LCA"], ["BEY", "LHR"], ["BEY", "LOS"], ["BEY", "MCT"], ["BEY", "MED"], ["BEY", "MHD"], ["BEY", "MSQ"], ["BEY", "MXP"], ["BEY", "NJF"], ["BEY", "OTP"], ["BEY", "RUH"], ["BEY", "SAH"], ["BEY", "SAW"], ["BEY", "SHJ"], ["BEY", "SVO"], ["BEY", "SXF"], ["BEY", "TUN"], ["BFD", "CLE"], ["BFD", "JHW"], ["BFF", "DEN"], ["BFI", "CLM"], ["BFI", "ESD"], ["BFI", "FRD"], ["BFJ", "CAN"], ["BFJ", "CKG"], ["BFJ", "KMG"], ["BFJ", "KWE"], ["BFJ", "NAY"], ["BFJ", "SHA"], ["BFJ", "SZX"], ["BFL", "DEN"], ["BFL", "IAH"], ["BFL", "LAX"], ["BFL", "PHX"], ["BFL", "SFO"], ["BFN", "CPT"], ["BFN", "DUR"], ["BFN", "JNB"], ["BFS", "BHX"], ["BFS", "BRS"], ["BFS", "CDG"], ["BFS", "DBV"], ["BFS", "DLM"], ["BFS", "EDI"], ["BFS", "EWR"], ["BFS", "FAO"], ["BFS", "GLA"], ["BFS", "KRK"], ["BFS", "LCA"], ["BFS", "LGW"], ["BFS", "LPL"], ["BFS", "LTN"], ["BFS", "MAN"], ["BFS", "MJV"], ["BFS", "MLA"], ["BFS", "NBE"], ["BFS", "NCE"], ["BFS", "NCL"], ["BFS", "PMI"], ["BFS", "REU"], ["BFS", "STN"], ["BFS", "TFS"], ["BFV", "DMK"], ["BGA", "BOG"], ["BGA", "MDE"], ["BGA", "PTY"], ["BGF", "CDG"], ["BGF", "CMN"], ["BGF", "DLA"], ["BGF", "NSI"], ["BGG", "ESB"], ["BGG", "IST"], ["BGI", "DOM"], ["BGI", "FDF"], ["BGI", "FRA"], ["BGI", "GND"], ["BGI", "GRU"], ["BGI", "JFK"], ["BGI", "KIN"], ["BGI", "LGW"], ["BGI", "MAN"], ["BGI", "MIA"], ["BGI", "OGL"], ["BGI", "POS"], ["BGI", "SLU"], ["BGI", "SVD"], ["BGI", "SXM"], ["BGI", "TAB"], ["BGI", "UVF"], ["BGI", "YYZ"], ["BGM", "DTW"], ["BGM", "IAD"], ["BGM", "PHL"], ["BGO", "BLL"], ["BGO", "BNN"], ["BGO", "BOO"], ["BGO", "CHQ"], ["BGO", "CPH"], ["BGO", "DBV"], ["BGO", "EDI"], ["BGO", "FAE"], ["BGO", "FCO"], ["BGO", "FRA"], ["BGO", "FRO"], ["BGO", "GDN"], ["BGO", "HAM"], ["BGO", "HAU"], ["BGO", "HOV"], ["BGO", "JFK"], ["BGO", "KEF"], ["BGO", "KRK"], ["BGO", "KRS"], ["BGO", "KSU"], ["BGO", "KTW"], ["BGO", "LGW"], ["BGO", "LHR"], ["BGO", "LPA"], ["BGO", "MAN"], ["BGO", "MOL"], ["BGO", "NCE"], ["BGO", "ORY"], ["BGO", "OSL"], ["BGO", "PMI"], ["BGO", "PRG"], ["BGO", "RIX"], ["BGO", "SKE"], ["BGO", "SOG"], ["BGO", "SVG"], ["BGO", "SXF"], ["BGO", "TOS"], ["BGO", "TRD"], ["BGO", "TRF"], ["BGO", "VNO"], ["BGR", "DCA"], ["BGR", "DTW"], ["BGR", "LGA"], ["BGR", "PHL"], ["BGR", "PIE"], ["BGR", "SFB"], ["BGW", "CAI"], ["BGW", "DOH"], ["BGW", "DXB"], ["BGW", "ESB"], ["BGW", "IST"], ["BGW", "SHJ"], ["BGW", "TBS"], ["BGY", "BLL"], ["BGY", "BRE"], ["BGY", "BRI"], ["BGY", "BRS"], ["BGY", "BTS"], ["BGY", "BUD"], ["BGY", "BVA"], ["BGY", "CAG"], ["BGY", "CHQ"], ["BGY", "CLJ"], ["BGY", "CMN"], ["BGY", "CRA"], ["BGY", "CRL"], ["BGY", "CTA"], ["BGY", "DUB"], ["BGY", "EIN"], ["BGY", "EMA"], ["BGY", "FEZ"], ["BGY", "FUE"], ["BGY", "GDN"], ["BGY", "GRO"], ["BGY", "GSE"], ["BGY", "HHN"], ["BGY", "IBZ"], ["BGY", "IEV"], ["BGY", "KGS"], ["BGY", "KRK"], ["BGY", "KTW"], ["BGY", "LBA"], ["BGY", "LBC"], ["BGY", "LDE"], ["BGY", "LPA"], ["BGY", "LPP"], ["BGY", "LWO"], ["BGY", "MAD"], ["BGY", "MAN"], ["BGY", "MLA"], ["BGY", "NRN"], ["BGY", "NYO"], ["BGY", "OMO"], ["BGY", "OPO"], ["BGY", "OTP"], ["BGY", "PMI"], ["BGY", "PMO"], ["BGY", "PRG"], ["BGY", "PSR"], ["BGY", "RAK"], ["BGY", "RHO"], ["BGY", "RIX"], ["BGY", "RYG"], ["BGY", "SAW"], ["BGY", "SCQ"], ["BGY", "SDR"], ["BGY", "SKG"], ["BGY", "SKP"], ["BGY", "SOF"], ["BGY", "STN"], ["BGY", "SUF"], ["BGY", "SVQ"], ["BGY", "SXF"], ["BGY", "TFS"], ["BGY", "TIA"], ["BGY", "TLL"], ["BGY", "TMP"], ["BGY", "TPS"], ["BGY", "TSR"], ["BGY", "VLC"], ["BGY", "VNO"], ["BGY", "WAW"], ["BGY", "WMI"], ["BGY", "WRO"], ["BGY", "ZAZ"], ["BHB", "BOS"], ["BHD", "BHX"], ["BHD", "CWL"], ["BHD", "EDI"], ["BHD", "EMA"], ["BHD", "EXT"], ["BHD", "FAO"], ["BHD", "GLA"], ["BHD", "INV"], ["BHD", "IOM"], ["BHD", "LBA"], ["BHD", "LGW"], ["BHD", "LHR"], ["BHD", "MAN"], ["BHD", "NCL"], ["BHD", "PMI"], ["BHD", "SOU"], ["BHE", "CHC"], ["BHE", "WLG"], ["BHH", "DMM"], ["BHH", "JED"], ["BHH", "RUH"], ["BHI", "MDQ"], ["BHI", "REL"], ["BHJ", "BOM"], ["BHK", "DME"], ["BHK", "LED"], ["BHK", "TAS"], ["BHK", "UGC"], ["BHM", "BWI"], ["BHM", "CLT"], ["BHM", "DAL"], ["BHM", "DCA"], ["BHM", "DEN"], ["BHM", "DFW"], ["BHM", "DTW"], ["BHM", "FPO"], ["BHM", "HOU"], ["BHM", "IAH"], ["BHM", "LAS"], ["BHM", "LGA"], ["BHM", "MCO"], ["BHM", "MDW"], ["BHM", "MIA"], ["BHM", "MSP"], ["BHM", "ORD"], ["BHM", "PHL"], ["BHM", "TPA"], ["BHO", "BOM"], ["BHO", "DEL"], ["BHO", "RPR"], ["BHQ", "DBO"], ["BHQ", "MQL"], ["BHQ", "SYD"], ["BHR", "KTM"], ["BHS", "PKE"], ["BHS", "SYD"], ["BHU", "BOM"], ["BHV", "ISB"], ["BHV", "KHI"], ["BHV", "LHE"], ["BHV", "SKZ"], ["BHX", "BJV"], ["BHX", "BRU"], ["BHX", "BTS"], ["BHX", "BVC"], ["BHX", "BZG"], ["BHX", "CDG"], ["BHX", "CGN"], ["BHX", "CPH"], ["BHX", "DBV"], ["BHX", "DEL"], ["BHX", "DLM"], ["BHX", "DUB"], ["BHX", "DUS"], ["BHX", "DXB"], ["BHX", "EDI"], ["BHX", "EWR"], ["BHX", "FAO"], ["BHX", "FCO"], ["BHX", "FLR"], ["BHX", "FNC"], ["BHX", "FRA"], ["BHX", "FUE"], ["BHX", "GCI"], ["BHX", "GDN"], ["BHX", "GIB"], ["BHX", "GLA"], ["BHX", "GOT"], ["BHX", "HAJ"], ["BHX", "HAM"], ["BHX", "HER"], ["BHX", "HRG"], ["BHX", "IBZ"], ["BHX", "INV"], ["BHX", "IOM"], ["BHX", "ISB"], ["BHX", "IST"], ["BHX", "JER"], ["BHX", "KRK"], ["BHX", "KTW"], ["BHX", "KUN"], ["BHX", "LCA"], ["BHX", "LDY"], ["BHX", "LEI"], ["BHX", "LPA"], ["BHX", "LYS"], ["BHX", "MAH"], ["BHX", "MJV"], ["BHX", "MLA"], ["BHX", "MUC"], ["BHX", "MXP"], ["BHX", "NBE"], ["BHX", "NCE"], ["BHX", "NCL"], ["BHX", "NOC"], ["BHX", "OPO"], ["BHX", "ORK"], ["BHX", "PFO"], ["BHX", "PMI"], ["BHX", "RAK"], ["BHX", "REU"], ["BHX", "SNN"], ["BHX", "SPU"], ["BHX", "SSH"], ["BHX", "STR"], ["BHX", "TFS"], ["BHX", "TXL"], ["BHX", "VCE"], ["BHX", "WAT"], ["BHX", "ZRH"], ["BHY", "CAN"], ["BHY", "CGO"], ["BHY", "CKG"], ["BHY", "CSX"], ["BHY", "CTU"], ["BHY", "HAK"], ["BHY", "HGH"], ["BHY", "KMG"], ["BHY", "KWL"], ["BHY", "LYA"], ["BHY", "PEK"], ["BHY", "PVG"], ["BHY", "SJW"], ["BHY", "SZX"], ["BHY", "XIY"], ["BIA", "BOD"], ["BIA", "BRU"], ["BIA", "CDG"], ["BIA", "CGN"], ["BIA", "DUS"], ["BIA", "EBU"], ["BIA", "FRA"], ["BIA", "GVA"], ["BIA", "HAM"], ["BIA", "LGG"], ["BIA", "LGW"], ["BIA", "LIL"], ["BIA", "LUX"], ["BIA", "LYS"], ["BIA", "MRS"], ["BIA", "NCE"], ["BIA", "NTE"], ["BIA", "ORY"], ["BIA", "STR"], ["BIA", "SXB"], ["BIA", "TLS"], ["BIA", "TXL"], ["BIK", "DJJ"], ["BIK", "UPG"], ["BIL", "DEN"], ["BIL", "GDV"], ["BIL", "GGW"], ["BIL", "HVR"], ["BIL", "LAS"], ["BIL", "MSP"], ["BIL", "OLF"], ["BIL", "PDX"], ["BIL", "SDY"], ["BIL", "SEA"], ["BIL", "SLC"], ["BIM", "FLL"], ["BIO", "BRU"], ["BIO", "CDG"], ["BIO", "DUB"], ["BIO", "DUS"], ["BIO", "FCO"], ["BIO", "FRA"], ["BIO", "FUE"], ["BIO", "GVA"], ["BIO", "IBZ"], ["BIO", "IST"], ["BIO", "LCG"], ["BIO", "LHR"], ["BIO", "LIS"], ["BIO", "LPA"], ["BIO", "MAD"], ["BIO", "MAN"], ["BIO", "MUC"], ["BIO", "MXP"], ["BIO", "ORY"], ["BIO", "OSL"], ["BIO", "PMI"], ["BIO", "SCQ"], ["BIO", "STN"], ["BIO", "STR"], ["BIO", "SVQ"], ["BIO", "TFN"], ["BIO", "TXL"], ["BIO", "VCE"], ["BIO", "VGO"], ["BIO", "VLC"], ["BIQ", "CDG"], ["BIQ", "CPH"], ["BIQ", "CRL"], ["BIQ", "DUB"], ["BIQ", "GVA"], ["BIQ", "LIL"], ["BIQ", "LYS"], ["BIQ", "MRS"], ["BIQ", "NCE"], ["BIQ", "NYO"], ["BIQ", "ORY"], ["BIQ", "STN"], ["BIQ", "SXB"], ["BIR", "KTM"], ["BIS", "DEN"], ["BIS", "LAS"], ["BIS", "MSP"], ["BIS", "SFB"], ["BJA", "LYS"], ["BJA", "MRS"], ["BJA", "ORY"], ["BJB", "THR"], ["BJF", "BVG"], ["BJF", "HFT"], ["BJF", "MEH"], ["BJF", "VAW"], ["BJF", "VDS"], ["BJI", "MSP"], ["BJL", "CMN"], ["BJL", "DKR"], ["BJL", "FNA"], ["BJL", "LPA"], ["BJL", "OXB"], ["BJL", "RAI"], ["BJM", "BRU"], ["BJM", "EBB"], ["BJM", "KGL"], ["BJM", "NBO"], ["BJR", "LLI"], ["BJV", "BRS"], ["BJV", "BRU"], ["BJV", "EDI"], ["BJV", "EIN"], ["BJV", "EMA"], ["BJV", "ESB"], ["BJV", "GLA"], ["BJV", "IST"], ["BJV", "LBA"], ["BJV", "LGW"], ["BJV", "LPL"], ["BJV", "LTN"], ["BJV", "MAN"], ["BJV", "NCL"], ["BJV", "ORY"], ["BJV", "RTM"], ["BJV", "SAW"], ["BJV", "STN"], ["BJX", "CUN"], ["BJX", "DFW"], ["BJX", "IAH"], ["BJX", "LAX"], ["BJX", "MDW"], ["BJX", "MEX"], ["BJX", "MTY"], ["BJX", "SFO"], ["BJX", "TIJ"], ["BJZ", "MAD"], ["BKC", "DRG"], ["BKC", "OTZ"], ["BKG", "DAL"], ["BKG", "DEN"], ["BKG", "HOU"], ["BKG", "MDW"], ["BKI", "BTU"], ["BKI", "BWN"], ["BKI", "CAN"], ["BKI", "CGK"], ["BKI", "DPS"], ["BKI", "HGH"], ["BKI", "HKG"], ["BKI", "ICN"], ["BKI", "JHB"], ["BKI", "KBR"], ["BKI", "KCH"], ["BKI", "KUD"], ["BKI", "KUL"], ["BKI", "LBU"], ["BKI", "LDU"], ["BKI", "LWY"], ["BKI", "MNL"], ["BKI", "MYY"], ["BKI", "MZV"], ["BKI", "NRT"], ["BKI", "PEN"], ["BKI", "PER"], ["BKI", "PPS"], ["BKI", "PVG"], ["BKI", "SBW"], ["BKI", "SDK"], ["BKI", "SIN"], ["BKI", "SZX"], ["BKI", "TPE"], ["BKI", "TWU"], ["BKK", "BLR"], ["BKK", "BNE"], ["BKK", "BOM"], ["BKK", "BRU"], ["BKK", "BWN"], ["BKK", "CAI"], ["BKK", "CAN"], ["BKK", "CCU"], ["BKK", "CDG"], ["BKK", "CEI"], ["BKK", "CGK"], ["BKK", "CGO"], ["BKK", "CGP"], ["BKK", "CKG"], ["BKK", "CMB"], ["BKK", "CNX"], ["BKK", "CPH"], ["BKK", "CRK"], ["BKK", "CSX"], ["BKK", "CTS"], ["BKK", "CTU"], ["BKK", "DAC"], ["BKK", "DEL"], ["BKK", "DME"], ["BKK", "DOH"], ["BKK", "DPS"], ["BKK", "DXB"], ["BKK", "FCO"], ["BKK", "FOC"], ["BKK", "FRA"], ["BKK", "FUK"], ["BKK", "GAU"], ["BKK", "HAN"], ["BKK", "HDY"], ["BKK", "HEL"], ["BKK", "HKG"], ["BKK", "HKT"], ["BKK", "HND"], ["BKK", "HYD"], ["BKK", "ICN"], ["BKK", "IKA"], ["BKK", "IKT"], ["BKK", "ISB"], ["BKK", "IST"], ["BKK", "IXB"], ["BKK", "JNB"], ["BKK", "KBP"], ["BKK", "KBV"], ["BKK", "KHH"], ["BKK", "KHI"], ["BKK", "KIX"], ["BKK", "KJA"], ["BKK", "KKC"], ["BKK", "KMG"], ["BKK", "KTM"], ["BKK", "KUL"], ["BKK", "KWI"], ["BKK", "KWL"], ["BKK", "LHE"], ["BKK", "LHR"], ["BKK", "LPQ"], ["BKK", "LPT"], ["BKK", "MAA"], ["BKK", "MAD"], ["BKK", "MCT"], ["BKK", "MDL"], ["BKK", "MEL"], ["BKK", "MFM"], ["BKK", "MLE"], ["BKK", "MNL"], ["BKK", "MUC"], ["BKK", "MXP"], ["BKK", "NBO"], ["BKK", "NGB"], ["BKK", "NGO"], ["BKK", "NNG"], ["BKK", "NRT"], ["BKK", "NYT"], ["BKK", "OSL"], ["BKK", "OVB"], ["BKK", "PEK"], ["BKK", "PEN"], ["BKK", "PER"], ["BKK", "PNH"], ["BKK", "PUS"], ["BKK", "PVG"], ["BKK", "REP"], ["BKK", "RGN"], ["BKK", "SGN"], ["BKK", "SIN"], ["BKK", "SVO"], ["BKK", "SVX"], ["BKK", "SWA"], ["BKK", "SYD"], ["BKK", "SZX"], ["BKK", "TAO"], ["BKK", "TAS"], ["BKK", "TDX"], ["BKK", "THS"], ["BKK", "TLV"], ["BKK", "TNA"], ["BKK", "TNR"], ["BKK", "TPE"], ["BKK", "UBP"], ["BKK", "ULN"], ["BKK", "URT"], ["BKK", "USM"], ["BKK", "UTH"], ["BKK", "VIE"], ["BKK", "VTE"], ["BKK", "WUH"], ["BKK", "XMN"], ["BKK", "ZRH"], ["BKK", "ZVK"], ["BKM", "LWY"], ["BKO", "CDG"], ["BKO", "CKY"], ["BKO", "CMN"], ["BKO", "COO"], ["BKO", "DKR"], ["BKO", "LFW"], ["BKO", "LIS"], ["BKO", "LOS"], ["BKO", "NBO"], ["BKO", "NKC"], ["BKO", "ORY"], ["BKO", "OUA"], ["BKO", "TUN"], ["BKQ", "BNE"], ["BKQ", "LRE"], ["BKS", "BTH"], ["BKS", "CGK"], ["BKW", "IAD"], ["BKW", "SHD"], ["BKY", "GOM"], ["BKY", "KND"], ["BKY", "KOO"], ["BKZ", "MWZ"], ["BLA", "CCS"], ["BLA", "MIA"], ["BLA", "PMV"], ["BLA", "PTY"], ["BLA", "PZO"], ["BLA", "VLN"], ["BLE", "GOT"], ["BLE", "ORB"], ["BLI", "HNL"], ["BLI", "LAS"], ["BLI", "LAX"], ["BLI", "OAK"], ["BLI", "PDX"], ["BLI", "PSP"], ["BLI", "SAN"], ["BLI", "SEA"], ["BLJ", "LYS"], ["BLJ", "MRS"], ["BLJ", "ORY"], ["BLK", "DLM"], ["BLK", "DUB"], ["BLK", "FAO"], ["BLK", "IOM"], ["BLK", "PMI"], ["BLK", "TFS"], ["BLL", "BRU"], ["BLL", "BUD"], ["BLL", "CCF"], ["BLL", "CDG"], ["BLL", "CFU"], ["BLL", "CHQ"], ["BLL", "CIA"], ["BLL", "CPH"], ["BLL", "DUS"], ["BLL", "EBJ"], ["BLL", "FAE"], ["BLL", "FAO"], ["BLL", "FRA"], ["BLL", "GRO"], ["BLL", "IST"], ["BLL", "KEF"], ["BLL", "LCY"], ["BLL", "MAN"], ["BLL", "MLA"], ["BLL", "MUC"], ["BLL", "OSL"], ["BLL", "PMI"], ["BLL", "PSA"], ["BLL", "RIX"], ["BLL", "STN"], ["BLL", "SVG"], ["BLL", "TFS"], ["BLL", "TSF"], ["BLL", "ZAD"], ["BLL", "ZRH"], ["BLQ", "BOD"], ["BLQ", "BRI"], ["BLQ", "BRS"], ["BLQ", "BRU"], ["BLQ", "BVA"], ["BLQ", "CAG"], ["BLQ", "CDG"], ["BLQ", "CGN"], ["BLQ", "CLJ"], ["BLQ", "CMN"], ["BLQ", "CPH"], ["BLQ", "CRL"], ["BLQ", "CTA"], ["BLQ", "DUB"], ["BLQ", "EDI"], ["BLQ", "EIN"], ["BLQ", "FCO"], ["BLQ", "FRA"], ["BLQ", "IAS"], ["BLQ", "IBZ"], ["BLQ", "IST"], ["BLQ", "KIV"], ["BLQ", "KRK"], ["BLQ", "LGW"], ["BLQ", "LHR"], ["BLQ", "LIS"], ["BLQ", "LYS"], ["BLQ", "MAD"], ["BLQ", "MAN"], ["BLQ", "MLA"], ["BLQ", "MUC"], ["BLQ", "NRN"], ["BLQ", "OLB"], ["BLQ", "OPO"], ["BLQ", "ORY"], ["BLQ", "OTP"], ["BLQ", "PMI"], ["BLQ", "PMO"], ["BLQ", "RYG"], ["BLQ", "SAW"], ["BLQ", "SOF"], ["BLQ", "STN"], ["BLQ", "SUF"], ["BLQ", "SVO"], ["BLQ", "SVQ"], ["BLQ", "TFS"], ["BLQ", "TIA"], ["BLQ", "TPS"], ["BLQ", "TSR"], ["BLQ", "TUN"], ["BLQ", "TXL"], ["BLQ", "VIE"], ["BLQ", "VLC"], ["BLQ", "WMI"], ["BLQ", "WRO"], ["BLQ", "ZAG"], ["BLR", "BOM"], ["BLR", "CCJ"], ["BLR", "CCU"], ["BLR", "CDG"], ["BLR", "CJB"], ["BLR", "CMB"], ["BLR", "COK"], ["BLR", "DEL"], ["BLR", "DMM"], ["BLR", "DOH"], ["BLR", "DXB"], ["BLR", "FRA"], ["BLR", "GAU"], ["BLR", "GOI"], ["BLR", "HBX"], ["BLR", "HKG"], ["BLR", "HYD"], ["BLR", "IDR"], ["BLR", "IXE"], ["BLR", "IXG"], ["BLR", "JAI"], ["BLR", "JED"], ["BLR", "KUL"], ["BLR", "LHR"], ["BLR", "LKO"], ["BLR", "MAA"], ["BLR", "MCT"], ["BLR", "MRU"], ["BLR", "MYQ"], ["BLR", "NAG"], ["BLR", "PNQ"], ["BLR", "RUH"], ["BLR", "SFO"], ["BLR", "SHJ"], ["BLR", "SIN"], ["BLR", "TRV"], ["BLR", "VGA"], ["BLR", "VTZ"], ["BLV", "SFB"], ["BLZ", "JNB"], ["BLZ", "LLW"], ["BLZ", "LUN"], ["BLZ", "NBO"], ["BMA", "BRU"], ["BMA", "GOT"], ["BMA", "HAD"], ["BMA", "HEL"], ["BMA", "KLR"], ["BMA", "MMX"], ["BMA", "OSD"], ["BMA", "RNB"], ["BMA", "SDL"], ["BMA", "THN"], ["BMA", "UME"], ["BMA", "VBY"], ["BMA", "VXO"], ["BME", "BNE"], ["BME", "DRW"], ["BME", "KNX"], ["BME", "KTA"], ["BME", "MEL"], ["BME", "PER"], ["BME", "PHE"], ["BME", "SYD"], ["BMI", "DEN"], ["BMI", "DFW"], ["BMI", "DTW"], ["BMI", "MCO"], ["BMI", "MSP"], ["BMI", "ORD"], ["BMI", "SFB"], ["BMU", "DPS"], ["BMU", "LOP"], ["BMV", "DAD"], ["BMV", "HAN"], ["BMV", "SGN"], ["BMV", "VII"], ["BMY", "GEA"], ["BMY", "KOC"], ["BNA", "BOS"], ["BNA", "BWI"], ["BNA", "CHS"], ["BNA", "CLE"], ["BNA", "CLT"], ["BNA", "CMH"], ["BNA", "CVG"], ["BNA", "DCA"], ["BNA", "DEN"], ["BNA", "DFW"], ["BNA", "DTW"], ["BNA", "ECP"], ["BNA", "EWR"], ["BNA", "FLL"], ["BNA", "GSP"], ["BNA", "HOU"], ["BNA", "IAD"], ["BNA", "IAH"], ["BNA", "JAX"], ["BNA", "JFK"], ["BNA", "LAS"], ["BNA", "LAX"], ["BNA", "LGA"], ["BNA", "MCI"], ["BNA", "MCO"], ["BNA", "MDW"], ["BNA", "MIA"], ["BNA", "MKL"], ["BNA", "MSP"], ["BNA", "MSY"], ["BNA", "ORD"], ["BNA", "PHL"], ["BNA", "PHX"], ["BNA", "PIT"], ["BNA", "PNS"], ["BNA", "PVD"], ["BNA", "RDU"], ["BNA", "SAN"], ["BNA", "SAT"], ["BNA", "SLC"], ["BNA", "STL"], ["BNA", "TPA"], ["BNA", "TTN"], ["BNA", "YYZ"], ["BNB", "FIH"], ["BNB", "MDK"], ["BNC", "BUX"], ["BNC", "GOM"], ["BND", "DXB"], ["BND", "IFN"], ["BND", "KIH"], ["BND", "MHD"], ["BND", "RAS"], ["BND", "SRY"], ["BND", "SYZ"], ["BND", "TBZ"], ["BND", "THR"], ["BND", "ZBR"], ["BNE", "CAN"], ["BNE", "CBR"], ["BNE", "CHC"], ["BNE", "CNJ"], ["BNE", "CNS"], ["BNE", "CTL"], ["BNE", "DFW"], ["BNE", "DPS"], ["BNE", "DRW"], ["BNE", "DUD"], ["BNE", "DXB"], ["BNE", "EMD"], ["BNE", "GLT"], ["BNE", "HBA"], ["BNE", "HIR"], ["BNE", "HKG"], ["BNE", "HNL"], ["BNE", "HTI"], ["BNE", "HVB"], ["BNE", "ICN"], ["BNE", "INU"], ["BNE", "ISA"], ["BNE", "KTA"], ["BNE", "KUL"], ["BNE", "LAX"], ["BNE", "LDH"], ["BNE", "LRE"], ["BNE", "LST"], ["BNE", "MEL"], ["BNE", "MKY"], ["BNE", "MOV"], ["BNE", "NAN"], ["BNE", "NLK"], ["BNE", "NOU"], ["BNE", "NTL"], ["BNE", "PER"], ["BNE", "PHE"], ["BNE", "POM"], ["BNE", "PPP"], ["BNE", "PQQ"], ["BNE", "RMA"], ["BNE", "ROK"], ["BNE", "SIN"], ["BNE", "SON"], ["BNE", "SYD"], ["BNE", "TPE"], ["BNE", "TSV"], ["BNE", "TWB"], ["BNE", "VLI"], ["BNE", "WLG"], ["BNE", "ZQN"], ["BNI", "LOS"], ["BNK", "MEL"], ["BNK", "NTL"], ["BNK", "SYD"], ["BNN", "BOO"], ["BNN", "MQN"], ["BNN", "OSL"], ["BNN", "SSJ"], ["BNN", "TRD"], ["BNS", "CCS"], ["BNX", "SJJ"], ["BNX", "ZRH"], ["BOB", "HUH"], ["BOB", "MAU"], ["BOB", "MOZ"], ["BOB", "PPT"], ["BOB", "RFP"], ["BOB", "RGI"], ["BOB", "TIH"], ["BOC", "CHX"], ["BOC", "PAC"], ["BOC", "SJO"], ["BOD", "BRS"], ["BOD", "BRU"], ["BOD", "BSL"], ["BOD", "CDG"], ["BOD", "CIA"], ["BOD", "CLY"], ["BOD", "CMN"], ["BOD", "CRL"], ["BOD", "DUB"], ["BOD", "EDI"], ["BOD", "FCO"], ["BOD", "FLR"], ["BOD", "FSC"], ["BOD", "GVA"], ["BOD", "HER"], ["BOD", "LGW"], ["BOD", "LIL"], ["BOD", "LIS"], ["BOD", "LTN"], ["BOD", "LYS"], ["BOD", "MAD"], ["BOD", "MRS"], ["BOD", "MUC"], ["BOD", "MXP"], ["BOD", "NCE"], ["BOD", "NTE"], ["BOD", "OLB"], ["BOD", "OPO"], ["BOD", "ORY"], ["BOD", "PMI"], ["BOD", "PMO"], ["BOD", "RAK"], ["BOD", "RNS"], ["BOD", "STN"], ["BOD", "SVQ"], ["BOD", "SXB"], ["BOD", "TFS"], ["BOD", "TUN"], ["BOD", "VCE"], ["BOD", "YUL"], ["BOD", "ZRH"], ["BOG", "BUN"], ["BOG", "CCS"], ["BOG", "CDG"], ["BOG", "CLO"], ["BOG", "CTG"], ["BOG", "CUC"], ["BOG", "CUN"], ["BOG", "CUR"], ["BOG", "CZU"], ["BOG", "DFW"], ["BOG", "EJA"], ["BOG", "EOH"], ["BOG", "EWR"], ["BOG", "EYP"], ["BOG", "EZE"], ["BOG", "FLA"], ["BOG", "FLL"], ["BOG", "FRA"], ["BOG", "GIG"], ["BOG", "GRU"], ["BOG", "GUA"], ["BOG", "GYE"], ["BOG", "HAV"], ["BOG", "IAD"], ["BOG", "IAH"], ["BOG", "IBE"], ["BOG", "IPI"], ["BOG", "JFK"], ["BOG", "LET"], ["BOG", "LIM"], ["BOG", "LPB"], ["BOG", "MAD"], ["BOG", "MCO"], ["BOG", "MDE"], ["BOG", "MEX"], ["BOG", "MIA"], ["BOG", "MTR"], ["BOG", "MVP"], ["BOG", "MZL"], ["BOG", "NVA"], ["BOG", "PCR"], ["BOG", "PDA"], ["BOG", "PEI"], ["BOG", "PPN"], ["BOG", "PSO"], ["BOG", "PTY"], ["BOG", "PUJ"], ["BOG", "PUU"], ["BOG", "RCH"], ["BOG", "RVE"], ["BOG", "SAL"], ["BOG", "SCL"], ["BOG", "SDQ"], ["BOG", "SJE"], ["BOG", "SJO"], ["BOG", "SJU"], ["BOG", "SMR"], ["BOG", "SVI"], ["BOG", "TME"], ["BOG", "UIB"], ["BOG", "UIO"], ["BOG", "VGZ"], ["BOG", "VUP"], ["BOG", "VVC"], ["BOG", "YYZ"], ["BOH", "CCF"], ["BOH", "CHQ"], ["BOH", "DUB"], ["BOH", "FAO"], ["BOH", "FUE"], ["BOH", "GRO"], ["BOH", "IBZ"], ["BOH", "LPA"], ["BOH", "MJV"], ["BOH", "MLA"], ["BOH", "PMI"], ["BOH", "PSA"], ["BOH", "RHO"], ["BOH", "TFS"], ["BOI", "DEN"], ["BOI", "GEG"], ["BOI", "LAS"], ["BOI", "LAX"], ["BOI", "LWS"], ["BOI", "MSP"], ["BOI", "OAK"], ["BOI", "ORD"], ["BOI", "PDX"], ["BOI", "PHX"], ["BOI", "SAN"], ["BOI", "SEA"], ["BOI", "SFO"], ["BOI", "SJC"], ["BOI", "SLC"], ["BOI", "SMF"], ["BOJ", "BRU"], ["BOJ", "CPH"], ["BOJ", "DME"], ["BOJ", "DUB"], ["BOJ", "HEL"], ["BOJ", "LED"], ["BOJ", "LTN"], ["BOJ", "OSL"], ["BOJ", "SOF"], ["BOJ", "SVO"], ["BOJ", "VAR"], ["BOM", "BRU"], ["BOM", "CAI"], ["BOM", "CCJ"], ["BOM", "CCU"], ["BOM", "CDG"], ["BOM", "CJB"], ["BOM", "CMB"], ["BOM", "COK"], ["BOM", "CTU"], ["BOM", "DAC"], ["BOM", "DEL"], ["BOM", "DIU"], ["BOM", "DMM"], ["BOM", "DOH"], ["BOM", "DXB"], ["BOM", "EWR"], ["BOM", "FRA"], ["BOM", "GAU"], ["BOM", "GOI"], ["BOM", "GWL"], ["BOM", "HBX"], ["BOM", "HKG"], ["BOM", "HYD"], ["BOM", "ICN"], ["BOM", "IDR"], ["BOM", "IKA"], ["BOM", "IST"], ["BOM", "IXC"], ["BOM", "IXD"], ["BOM", "IXE"], ["BOM", "IXJ"], ["BOM", "IXR"], ["BOM", "IXU"], ["BOM", "JAI"], ["BOM", "JDH"], ["BOM", "JED"], ["BOM", "JFK"], ["BOM", "JGA"], ["BOM", "JLR"], ["BOM", "JNB"], ["BOM", "KHI"], ["BOM", "KTM"], ["BOM", "KUL"], ["BOM", "KWI"], ["BOM", "LHR"], ["BOM", "LKO"], ["BOM", "MAA"], ["BOM", "MCT"], ["BOM", "MRU"], ["BOM", "MUC"], ["BOM", "NAG"], ["BOM", "NBO"], ["BOM", "NRT"], ["BOM", "PAT"], ["BOM", "PBD"], ["BOM", "PNQ"], ["BOM", "RAJ"], ["BOM", "RPR"], ["BOM", "RUH"], ["BOM", "SAH"], ["BOM", "SFO"], ["BOM", "SHJ"], ["BOM", "SIN"], ["BOM", "STV"], ["BOM", "SXR"], ["BOM", "TLV"], ["BOM", "TRV"], ["BOM", "UDR"], ["BOM", "VNS"], ["BOM", "VTZ"], ["BOM", "ZRH"], ["BON", "CUR"], ["BON", "EWR"], ["BON", "IAH"], ["BOO", "EVE"], ["BOO", "LKN"], ["BOO", "MJF"], ["BOO", "MQN"], ["BOO", "NVK"], ["BOO", "OSL"], ["BOO", "RET"], ["BOO", "SKN"], ["BOO", "SSJ"], ["BOO", "SVJ"], ["BOO", "TOS"], ["BOO", "TRD"], ["BOS", "BUF"], ["BOS", "BWI"], ["BOS", "CAK"], ["BOS", "CDG"], ["BOS", "CHS"], ["BOS", "CLE"], ["BOS", "CLT"], ["BOS", "CMH"], ["BOS", "CUN"], ["BOS", "CVG"], ["BOS", "DCA"], ["BOS", "DEN"], ["BOS", "DFW"], ["BOS", "DTW"], ["BOS", "DUB"], ["BOS", "DXB"], ["BOS", "EWR"], ["BOS", "FCO"], ["BOS", "FLL"], ["BOS", "FRA"], ["BOS", "HOU"], ["BOS", "HYA"], ["BOS", "IAD"], ["BOS", "IAH"], ["BOS", "IND"], ["BOS", "ISP"], ["BOS", "JAX"], ["BOS", "JFK"], ["BOS", "KEF"], ["BOS", "LAS"], ["BOS", "LAX"], ["BOS", "LEB"], ["BOS", "LGA"], ["BOS", "LGB"], ["BOS", "LHR"], ["BOS", "LIS"], ["BOS", "MAD"], ["BOS", "MCI"], ["BOS", "MCO"], ["BOS", "MDT"], ["BOS", "MDW"], ["BOS", "MIA"], ["BOS", "MKE"], ["BOS", "MSP"], ["BOS", "MSY"], ["BOS", "MUC"], ["BOS", "MVY"], ["BOS", "MYR"], ["BOS", "NAS"], ["BOS", "NRT"], ["BOS", "ORD"], ["BOS", "PBG"], ["BOS", "PBI"], ["BOS", "PDL"], ["BOS", "PDX"], ["BOS", "PHL"], ["BOS", "PHX"], ["BOS", "PIT"], ["BOS", "PLS"], ["BOS", "PQI"], ["BOS", "PTY"], ["BOS", "PUJ"], ["BOS", "PVC"], ["BOS", "RAI"], ["BOS", "RDU"], ["BOS", "RIC"], ["BOS", "RKD"], ["BOS", "ROC"], ["BOS", "RSW"], ["BOS", "RUT"], ["BOS", "SAN"], ["BOS", "SAV"], ["BOS", "SDQ"], ["BOS", "SEA"], ["BOS", "SFO"], ["BOS", "SJC"], ["BOS", "SJU"], ["BOS", "SLC"], ["BOS", "SLK"], ["BOS", "SNN"], ["BOS", "STI"], ["BOS", "STL"], ["BOS", "STT"], ["BOS", "SXM"], ["BOS", "SYR"], ["BOS", "TPA"], ["BOS", "YHZ"], ["BOS", "YOW"], ["BOS", "YTZ"], ["BOS", "YUL"], ["BOS", "YYZ"], ["BOS", "ZRH"], ["BOY", "OUA"], ["BPL", "URC"], ["BPN", "BTH"], ["BPN", "CGK"], ["BPN", "DPS"], ["BPN", "JOG"], ["BPN", "KUL"], ["BPN", "MDC"], ["BPN", "PLW"], ["BPN", "SIN"], ["BPN", "SRG"], ["BPN", "SUB"], ["BPN", "TRK"], ["BPN", "UPG"], ["BPS", "CGH"], ["BPS", "CNF"], ["BPS", "GRU"], ["BPS", "SDU"], ["BPS", "SSA"], ["BPS", "VCP"], ["BPT", "DFW"], ["BPX", "CTU"], ["BPX", "LXA"], ["BQB", "PER"], ["BQL", "ISA"], ["BQN", "EWR"], ["BQN", "FLL"], ["BQN", "JFK"], ["BQN", "MCO"], ["BQS", "DME"], ["BQS", "HTA"], ["BQS", "KHV"], ["BQS", "VVO"], ["BQS", "YKS"], ["BRA", "BSB"], ["BRA", "SSA"], ["BRC", "COR"], ["BRC", "CRD"], ["BRC", "EQS"], ["BRC", "EZE"], ["BRC", "MDZ"], ["BRC", "REL"], ["BRD", "INL"], ["BRD", "MSP"], ["BRE", "BZR"], ["BRE", "CDG"], ["BRE", "CFU"], ["BRE", "CHQ"], ["BRE", "CPH"], ["BRE", "DUB"], ["BRE", "EDI"], ["BRE", "FAO"], ["BRE", "FMO"], ["BRE", "FNC"], ["BRE", "FRA"], ["BRE", "FUE"], ["BRE", "GRO"], ["BRE", "HAU"], ["BRE", "IBZ"], ["BRE", "IST"], ["BRE", "LEJ"], ["BRE", "LPA"], ["BRE", "MAN"], ["BRE", "MUC"], ["BRE", "NBE"], ["BRE", "NYO"], ["BRE", "OPO"], ["BRE", "PMI"], ["BRE", "RIX"], ["BRE", "SKG"], ["BRE", "STN"], ["BRE", "STR"], ["BRE", "TFS"], ["BRE", "TLL"], ["BRE", "TLS"], ["BRE", "TMP"], ["BRE", "TSF"], ["BRE", "VIE"], ["BRE", "VNO"], ["BRE", "ZRH"], ["BRI", "BUD"], ["BRI", "BVA"], ["BRI", "CAG"], ["BRI", "CDG"], ["BRI", "CGN"], ["BRI", "CIA"], ["BRI", "CRL"], ["BRI", "CTA"], ["BRI", "DUB"], ["BRI", "DUS"], ["BRI", "FCO"], ["BRI", "FKB"], ["BRI", "FLR"], ["BRI", "GOA"], ["BRI", "HHN"], ["BRI", "LGW"], ["BRI", "LIN"], ["BRI", "MLA"], ["BRI", "MST"], ["BRI", "MUC"], ["BRI", "MXP"], ["BRI", "NRN"], ["BRI", "OTP"], ["BRI", "PMO"], ["BRI", "PRG"], ["BRI", "PSA"], ["BRI", "STN"], ["BRI", "STR"], ["BRI", "SVQ"], ["BRI", "TIA"], ["BRI", "TRN"], ["BRI", "TRS"], ["BRI", "TSF"], ["BRI", "TXL"], ["BRI", "VCE"], ["BRI", "VLC"], ["BRI", "VRN"], ["BRL", "ORD"], ["BRL", "STL"], ["BRM", "CCS"], ["BRM", "CUR"], ["BRM", "PMV"], ["BRN", "CGN"], ["BRN", "EBA"], ["BRN", "HAM"], ["BRN", "IBZ"], ["BRN", "LCY"], ["BRN", "MUC"], ["BRN", "OLB"], ["BRN", "PMI"], ["BRN", "TXL"], ["BRN", "VIE"], ["BRO", "DFW"], ["BRO", "IAH"], ["BRQ", "STN"], ["BRR", "GLA"], ["BRS", "BRU"], ["BRS", "BUD"], ["BRS", "BZR"], ["BRS", "CDG"], ["BRS", "CEG"], ["BRS", "CFU"], ["BRS", "CHQ"], ["BRS", "CPH"], ["BRS", "DLM"], ["BRS", "DUB"], ["BRS", "EDI"], ["BRS", "EGC"], ["BRS", "FAO"], ["BRS", "FCO"], ["BRS", "FNC"], ["BRS", "FRA"], ["BRS", "FUE"], ["BRS", "GCI"], ["BRS", "GDN"], ["BRS", "GLA"], ["BRS", "GRO"], ["BRS", "GVA"], ["BRS", "HAM"], ["BRS", "HER"], ["BRS", "IBZ"], ["BRS", "INV"], ["BRS", "JER"], ["BRS", "KEF"], ["BRS", "KRK"], ["BRS", "KUN"], ["BRS", "LIG"], ["BRS", "LIS"], ["BRS", "LPA"], ["BRS", "MAD"], ["BRS", "MAH"], ["BRS", "MJV"], ["BRS", "MLA"], ["BRS", "MUC"], ["BRS", "MXP"], ["BRS", "NBE"], ["BRS", "NCE"], ["BRS", "NCL"], ["BRS", "NOC"], ["BRS", "ORK"], ["BRS", "PFO"], ["BRS", "PMI"], ["BRS", "POZ"], ["BRS", "PRG"], ["BRS", "PSA"], ["BRS", "RAK"], ["BRS", "REU"], ["BRS", "RZE"], ["BRS", "SNN"], ["BRS", "SXF"], ["BRS", "TFS"], ["BRS", "TLS"], ["BRS", "TSF"], ["BRS", "VLC"], ["BRS", "WMI"], ["BRS", "WRO"], ["BRS", "ZRH"], ["BRU", "BSL"], ["BRU", "BUD"], ["BRU", "CAI"], ["BRU", "CDG"], ["BRU", "CFU"], ["BRU", "CHQ"], ["BRU", "CMN"], ["BRU", "COO"], ["BRU", "CPH"], ["BRU", "CTA"], ["BRU", "DBV"], ["BRU", "DEL"], ["BRU", "DJE"], ["BRU", "DKR"], ["BRU", "DLA"], ["BRU", "DME"], ["BRU", "DOH"], ["BRU", "DUB"], ["BRU", "EBB"], ["BRU", "EDI"], ["BRU", "EMA"], ["BRU", "EWR"], ["BRU", "FAO"], ["BRU", "FCO"], ["BRU", "FIH"], ["BRU", "FLR"], ["BRU", "FNA"], ["BRU", "FNC"], ["BRU", "FRA"], ["BRU", "FUE"], ["BRU", "GDN"], ["BRU", "GOT"], ["BRU", "GRO"], ["BRU", "GVA"], ["BRU", "HAJ"], ["BRU", "HAM"], ["BRU", "HEL"], ["BRU", "HER"], ["BRU", "IAD"], ["BRU", "IBZ"], ["BRU", "IST"], ["BRU", "JFK"], ["BRU", "JMK"], ["BRU", "JTR"], ["BRU", "KBP"], ["BRU", "KEF"], ["BRU", "KGL"], ["BRU", "KGS"], ["BRU", "LAD"], ["BRU", "LDE"], ["BRU", "LEI"], ["BRU", "LFW"], ["BRU", "LGW"], ["BRU", "LHR"], ["BRU", "LIN"], ["BRU", "LIS"], ["BRU", "LJU"], ["BRU", "LPA"], ["BRU", "LYS"], ["BRU", "MAD"], ["BRU", "MAH"], ["BRU", "MAN"], ["BRU", "MIR"], ["BRU", "MLA"], ["BRU", "MRS"], ["BRU", "MUC"], ["BRU", "MXP"], ["BRU", "NAP"], ["BRU", "NBE"], ["BRU", "NBO"], ["BRU", "NCE"], ["BRU", "NCL"], ["BRU", "NDR"], ["BRU", "NSI"], ["BRU", "NTE"], ["BRU", "OPO"], ["BRU", "ORD"], ["BRU", "ORK"], ["BRU", "OSL"], ["BRU", "OTP"], ["BRU", "OUA"], ["BRU", "OUD"], ["BRU", "PEK"], ["BRU", "PFO"], ["BRU", "PHL"], ["BRU", "PMI"], ["BRU", "PMO"], ["BRU", "PRG"], ["BRU", "RAK"], ["BRU", "REU"], ["BRU", "RHO"], ["BRU", "RIX"], ["BRU", "ROB"], ["BRU", "SAW"], ["BRU", "SCQ"], ["BRU", "SOF"], ["BRU", "STR"], ["BRU", "SVO"], ["BRU", "SVQ"], ["BRU", "SXB"], ["BRU", "SXF"], ["BRU", "TFS"], ["BRU", "TIV"], ["BRU", "TLL"], ["BRU", "TLS"], ["BRU", "TLV"], ["BRU", "TNG"], ["BRU", "TRN"], ["BRU", "TSF"], ["BRU", "TUN"], ["BRU", "TXL"], ["BRU", "VAR"], ["BRU", "VCE"], ["BRU", "VIE"], ["BRU", "VLC"], ["BRU", "VNO"], ["BRU", "WAW"], ["BRU", "WRO"], ["BRU", "YUL"], ["BRU", "YYZ"], ["BRU", "ZAG"], ["BRU", "ZRH"], ["BRU", "ZTH"], ["BRW", "FAI"], ["BRW", "NUI"], ["BRW", "PIZ"], ["BRW", "SCC"], ["BSA", "GLK"], ["BSB", "CDG"], ["BSB", "CGB"], ["BSB", "CGH"], ["BSB", "CGR"], ["BSB", "CNF"], ["BSB", "CWB"], ["BSB", "EZE"], ["BSB", "FLN"], ["BSB", "FOR"], ["BSB", "GIG"], ["BSB", "GRU"], ["BSB", "GYN"], ["BSB", "IMP"], ["BSB", "IOS"], ["BSB", "JDO"], ["BSB", "JPA"], ["BSB", "LIS"], ["BSB", "MAB"], ["BSB", "MAO"], ["BSB", "MCZ"], ["BSB", "MIA"], ["BSB", "MQH"], ["BSB", "NAT"], ["BSB", "OPS"], ["BSB", "PMW"], ["BSB", "PNZ"], ["BSB", "POA"], ["BSB", "PTY"], ["BSB", "PVH"], ["BSB", "RAO"], ["BSB", "RBR"], ["BSB", "REC"], ["BSB", "SDU"], ["BSB", "SJP"], ["BSB", "SLZ"], ["BSB", "SSA"], ["BSB", "THE"], ["BSB", "UDI"], ["BSB", "VCP"], ["BSB", "VIX"], ["BSC", "EOH"], ["BSD", "KMG"], ["BSG", "COO"], ["BSG", "SSG"], ["BSK", "LYS"], ["BSK", "ORY"], ["BSL", "BUD"], ["BSL", "CAG"], ["BSL", "CDG"], ["BSL", "CPH"], ["BSL", "CTA"], ["BSL", "DJE"], ["BSL", "DRS"], ["BSL", "DUB"], ["BSL", "DUS"], ["BSL", "EDI"], ["BSL", "FAO"], ["BSL", "FCO"], ["BSL", "FNC"], ["BSL", "FRA"], ["BSL", "FUE"], ["BSL", "HAM"], ["BSL", "HER"], ["BSL", "HRG"], ["BSL", "IBZ"], ["BSL", "IST"], ["BSL", "KEF"], ["BSL", "KGS"], ["BSL", "KRK"], ["BSL", "LCA"], ["BSL", "LCY"], ["BSL", "LGW"], ["BSL", "LHR"], ["BSL", "LIS"], ["BSL", "LPA"], ["BSL", "MAD"], ["BSL", "MAN"], ["BSL", "MPL"], ["BSL", "MUC"], ["BSL", "NAP"], ["BSL", "NCE"], ["BSL", "NTE"], ["BSL", "OLB"], ["BSL", "OPO"], ["BSL", "PMI"], ["BSL", "PRG"], ["BSL", "PRN"], ["BSL", "RAK"], ["BSL", "RHO"], ["BSL", "SAW"], ["BSL", "SCQ"], ["BSL", "SKG"], ["BSL", "SPU"], ["BSL", "STN"], ["BSL", "SVQ"], ["BSL", "SXF"], ["BSL", "TFS"], ["BSL", "TLS"], ["BSL", "TLV"], ["BSL", "VCE"], ["BSL", "VIE"], ["BSL", "ZQW"], ["BSO", "MNL"], ["BSR", "DOH"], ["BSR", "DXB"], ["BSR", "IST"], ["BSR", "SHJ"], ["BTC", "GIU"], ["BTH", "CGK"], ["BTH", "DJB"], ["BTH", "DPS"], ["BTH", "JOG"], ["BTH", "NTX"], ["BTH", "PDG"], ["BTH", "PGK"], ["BTH", "PKU"], ["BTH", "PLM"], ["BTH", "PNK"], ["BTH", "SRG"], ["BTH", "SUB"], ["BTH", "SZB"], ["BTH", "TKG"], ["BTI", "FYU"], ["BTI", "SCC"], ["BTJ", "CGK"], ["BTJ", "KUL"], ["BTJ", "PEN"], ["BTK", "DME"], ["BTK", "IKT"], ["BTK", "OVB"], ["BTK", "VKO"], ["BTM", "SLC"], ["BTR", "CLT"], ["BTR", "DFW"], ["BTR", "IAH"], ["BTS", "BVA"], ["BTS", "CIA"], ["BTS", "CRL"], ["BTS", "DUB"], ["BTS", "EDI"], ["BTS", "GRO"], ["BTS", "KSC"], ["BTS", "LPL"], ["BTS", "LTN"], ["BTS", "OSL"], ["BTS", "PMI"], ["BTS", "PRG"], ["BTS", "STN"], ["BTS", "TPS"], ["BTT", "FAI"], ["BTU", "KCH"], ["BTU", "KUL"], ["BTU", "MYY"], ["BTU", "SBW"], ["BTV", "DCA"], ["BTV", "DTW"], ["BTV", "EWR"], ["BTV", "IAD"], ["BTV", "JFK"], ["BTV", "LGA"], ["BTV", "ORD"], ["BTV", "PHL"], ["BTV", "SFB"], ["BUA", "MIS"], ["BUA", "POM"], ["BUA", "RAB"], ["BUC", "DMD"], ["BUC", "ONG"], ["BUD", "BVA"], ["BUD", "CAI"], ["BUD", "CDG"], ["BUD", "CGN"], ["BUD", "CIA"], ["BUD", "CPH"], ["BUD", "CRL"], ["BUD", "CTA"], ["BUD", "DOH"], ["BUD", "DTM"], ["BUD", "DUB"], ["BUD", "DUS"], ["BUD", "DWC"], ["BUD", "EDI"], ["BUD", "EIN"], ["BUD", "EMA"], ["BUD", "FCO"], ["BUD", "FRA"], ["BUD", "GSE"], ["BUD", "GVA"], ["BUD", "GYD"], ["BUD", "HAM"], ["BUD", "HEL"], ["BUD", "HHN"], ["BUD", "IEV"], ["BUD", "IST"], ["BUD", "KRR"], ["BUD", "LBA"], ["BUD", "LCA"], ["BUD", "LGW"], ["BUD", "LHR"], ["BUD", "LIS"], ["BUD", "LTN"], ["BUD", "MAD"], ["BUD", "MAN"], ["BUD", "MLA"], ["BUD", "MMX"], ["BUD", "MSQ"], ["BUD", "MUC"], ["BUD", "MXP"], ["BUD", "NAP"], ["BUD", "NYO"], ["BUD", "ORY"], ["BUD", "OSL"], ["BUD", "OTP"], ["BUD", "PRG"], ["BUD", "PSA"], ["BUD", "RIX"], ["BUD", "ROV"], ["BUD", "RTM"], ["BUD", "SAW"], ["BUD", "SKG"], ["BUD", "STN"], ["BUD", "STR"], ["BUD", "SVO"], ["BUD", "SXF"], ["BUD", "TLV"], ["BUD", "TMP"], ["BUD", "TSF"], ["BUD", "TXL"], ["BUD", "VIE"], ["BUD", "VKO"], ["BUD", "WAW"], ["BUD", "ZAG"], ["BUD", "ZRH"], ["BUF", "BWI"], ["BUF", "CLE"], ["BUF", "CLT"], ["BUF", "DCA"], ["BUF", "DTW"], ["BUF", "EWR"], ["BUF", "FLL"], ["BUF", "IAD"], ["BUF", "JFK"], ["BUF", "LAS"], ["BUF", "LGA"], ["BUF", "MCO"], ["BUF", "MDW"], ["BUF", "MSP"], ["BUF", "ORD"], ["BUF", "PHL"], ["BUF", "PHX"], ["BUF", "TPA"], ["BUL", "POM"], ["BUQ", "HRE"], ["BUQ", "JNB"], ["BUQ", "VFA"], ["BUR", "DEN"], ["BUR", "IPL"], ["BUR", "JFK"], ["BUR", "LAS"], ["BUR", "OAK"], ["BUR", "PDX"], ["BUR", "PHX"], ["BUR", "SEA"], ["BUR", "SFO"], ["BUR", "SJC"], ["BUR", "SLC"], ["BUR", "SMF"], ["BUS", "DME"], ["BUS", "DNK"], ["BUS", "IST"], ["BUS", "MSQ"], ["BUS", "TBS"], ["BUW", "UPG"], ["BUX", "GOM"], ["BUX", "IRP"], ["BUZ", "DXB"], ["BUZ", "MHD"], ["BUZ", "SYZ"], ["BUZ", "THR"], ["BVA", "BZR"], ["BVA", "CAG"], ["BVA", "CIA"], ["BVA", "CLJ"], ["BVA", "DUB"], ["BVA", "FAO"], ["BVA", "FEZ"], ["BVA", "GDN"], ["BVA", "GRO"], ["BVA", "GSE"], ["BVA", "KIV"], ["BVA", "KRK"], ["BVA", "KTW"], ["BVA", "LIS"], ["BVA", "MAD"], ["BVA", "MAN"], ["BVA", "NDR"], ["BVA", "NYO"], ["BVA", "OPO"], ["BVA", "OTP"], ["BVA", "OUD"], ["BVA", "PMI"], ["BVA", "POZ"], ["BVA", "PSA"], ["BVA", "PSR"], ["BVA", "PUY"], ["BVA", "RAK"], ["BVA", "RBA"], ["BVA", "RYG"], ["BVA", "RZE"], ["BVA", "SNN"], ["BVA", "SOF"], ["BVA", "SVQ"], ["BVA", "TFS"], ["BVA", "TGM"], ["BVA", "TNG"], ["BVA", "TPS"], ["BVA", "TRS"], ["BVA", "TSF"], ["BVA", "TSR"], ["BVA", "VLC"], ["BVA", "VNO"], ["BVA", "WAW"], ["BVA", "WMI"], ["BVA", "WRO"], ["BVA", "ZAD"], ["BVA", "ZAZ"], ["BVB", "MAO"], ["BVC", "CDG"], ["BVC", "CGN"], ["BVC", "FRA"], ["BVC", "HAJ"], ["BVC", "LGW"], ["BVC", "LIS"], ["BVC", "LUX"], ["BVC", "MAN"], ["BVC", "MUC"], ["BVC", "RAI"], ["BVC", "SID"], ["BVC", "STR"], ["BVE", "LCY"], ["BVE", "ORY"], ["BVE", "STN"], ["BVG", "HFT"], ["BVG", "HVG"], ["BVG", "MEH"], ["BVG", "VDS"], ["BVH", "CGB"], ["BVI", "WNR"], ["BWA", "KTM"], ["BWI", "CHS"], ["BWI", "CLE"], ["BWI", "CLT"], ["BWI", "CMH"], ["BWI", "CUN"], ["BWI", "CVG"], ["BWI", "DAY"], ["BWI", "DEN"], ["BWI", "DFW"], ["BWI", "DTW"], ["BWI", "ECP"], ["BWI", "EWR"], ["BWI", "FLL"], ["BWI", "FNT"], ["BWI", "FPO"], ["BWI", "GRR"], ["BWI", "GSP"], ["BWI", "HOU"], ["BWI", "IAH"], ["BWI", "IND"], ["BWI", "ISP"], ["BWI", "JAX"], ["BWI", "JFK"], ["BWI", "LAS"], ["BWI", "LAX"], ["BWI", "LHR"], ["BWI", "LIT"], ["BWI", "MBJ"], ["BWI", "MCI"], ["BWI", "MCO"], ["BWI", "MDW"], ["BWI", "MEM"], ["BWI", "MHT"], ["BWI", "MIA"], ["BWI", "MKE"], ["BWI", "MSP"], ["BWI", "MSY"], ["BWI", "MYR"], ["BWI", "NAS"], ["BWI", "OKC"], ["BWI", "ORD"], ["BWI", "ORF"], ["BWI", "PBI"], ["BWI", "PHL"], ["BWI", "PHX"], ["BWI", "PIT"], ["BWI", "PUJ"], ["BWI", "PVD"], ["BWI", "PWM"], ["BWI", "RDU"], ["BWI", "ROC"], ["BWI", "RSW"], ["BWI", "SAN"], ["BWI", "SAT"], ["BWI", "SDF"], ["BWI", "SEA"], ["BWI", "SFO"], ["BWI", "SJU"], ["BWI", "SLC"], ["BWI", "STL"], ["BWI", "TPA"], ["BWI", "YYZ"], ["BWK", "ZAG"], ["BWN", "CGK"], ["BWN", "DWC"], ["BWN", "DXB"], ["BWN", "HKG"], ["BWN", "JED"], ["BWN", "KUL"], ["BWN", "MEL"], ["BWN", "MNL"], ["BWN", "MZV"], ["BWN", "PVG"], ["BWN", "SIN"], ["BWN", "SUB"], ["BWT", "KNS"], ["BWT", "LST"], ["BWT", "MEL"], ["BXB", "SOQ"], ["BXR", "THR"], ["BXU", "CEB"], ["BXU", "MNL"], ["BYC", "SRZ"], ["BYC", "TJA"], ["BYN", "LTI"], ["BYN", "ULN"], ["BYO", "VCP"], ["BZE", "CLT"], ["BZE", "CUN"], ["BZE", "DFW"], ["BZE", "EWR"], ["BZE", "FRS"], ["BZE", "IAH"], ["BZE", "LAX"], ["BZE", "MIA"], ["BZE", "MID"], ["BZE", "RTB"], ["BZE", "SAL"], ["BZE", "SAP"], ["BZE", "SPR"], ["BZG", "DUB"], ["BZG", "STN"], ["BZL", "DAC"], ["BZN", "DEN"], ["BZN", "LAS"], ["BZN", "MSP"], ["BZN", "ORD"], ["BZN", "SEA"], ["BZN", "SLC"], ["BZO", "FCO"], ["BZR", "EDI"], ["BZR", "LTN"], ["BZR", "MAN"], ["BZR", "NRN"], ["BZR", "NYO"], ["BZR", "RYG"], ["BZV", "CDG"], ["BZV", "CMN"], ["BZV", "COO"], ["BZV", "DLA"], ["BZV", "FIH"], ["BZV", "JNB"], ["BZV", "KGL"], ["BZV", "LAD"], ["BZV", "LBV"], ["BZV", "NBO"], ["BZV", "OLL"], ["BZV", "PNR"], ["CAB", "LAD"], ["CAB", "SZA"], ["CAC", "CWB"], ["CAC", "GRU"], ["CAC", "VCP"], ["CAE", "CLT"], ["CAE", "DCA"], ["CAE", "DFW"], ["CAE", "DTW"], ["CAE", "IAD"], ["CAE", "IAH"], ["CAE", "LGA"], ["CAE", "ORD"], ["CAE", "PHL"], ["CAG", "CGN"], ["CAG", "CIA"], ["CAG", "CRL"], ["CAG", "CUF"], ["CAG", "DUS"], ["CAG", "FCO"], ["CAG", "FKB"], ["CAG", "FLR"], ["CAG", "GOA"], ["CAG", "GRO"], ["CAG", "GVA"], ["CAG", "HHN"], ["CAG", "KRK"], ["CAG", "KUN"], ["CAG", "LIN"], ["CAG", "LUX"], ["CAG", "MAD"], ["CAG", "MRS"], ["CAG", "MUC"], ["CAG", "MXP"], ["CAG", "NAP"], ["CAG", "NRN"], ["CAG", "PEG"], ["CAG", "PMF"], ["CAG", "PSA"], ["CAG", "PSR"], ["CAG", "STN"], ["CAG", "STR"], ["CAG", "SXF"], ["CAG", "TPS"], ["CAG", "TRN"], ["CAG", "TSF"], ["CAG", "VRN"], ["CAH", "SGN"], ["CAI", "CAN"], ["CAI", "CDG"], ["CAI", "CGK"], ["CAI", "CMN"], ["CAI", "CPH"], ["CAI", "DAR"], ["CAI", "DME"], ["CAI", "DMM"], ["CAI", "DOH"], ["CAI", "DXB"], ["CAI", "EBB"], ["CAI", "EBL"], ["CAI", "ELQ"], ["CAI", "FCO"], ["CAI", "FRA"], ["CAI", "GVA"], ["CAI", "HBE"], ["CAI", "HMB"], ["CAI", "HOD"], ["CAI", "HRG"], ["CAI", "IST"], ["CAI", "JED"], ["CAI", "JFK"], ["CAI", "JNB"], ["CAI", "JUB"], ["CAI", "KAN"], ["CAI", "KRT"], ["CAI", "KWI"], ["CAI", "LCA"], ["CAI", "LHR"], ["CAI", "LOS"], ["CAI", "LXR"], ["CAI", "MAD"], ["CAI", "MAN"], ["CAI", "MCT"], ["CAI", "MED"], ["CAI", "MUC"], ["CAI", "MXP"], ["CAI", "NBO"], ["CAI", "PEK"], ["CAI", "PZU"], ["CAI", "RIY"], ["CAI", "RMF"], ["CAI", "RUH"], ["CAI", "SAH"], ["CAI", "SHJ"], ["CAI", "SSH"], ["CAI", "SVO"], ["CAI", "SXF"], ["CAI", "TAI"], ["CAI", "TIF"], ["CAI", "TIP"], ["CAI", "TLV"], ["CAI", "TUN"], ["CAI", "TUU"], ["CAI", "VIE"], ["CAI", "YNB"], ["CAI", "YYZ"], ["CAI", "ZRH"], ["CAJ", "PZO"], ["CAK", "CLT"], ["CAK", "DCA"], ["CAK", "DEN"], ["CAK", "DTW"], ["CAK", "LGA"], ["CAK", "MCO"], ["CAK", "ORD"], ["CAK", "PHL"], ["CAK", "TPA"], ["CAL", "GLA"], ["CAN", "CDG"], ["CAN", "CGD"], ["CAN", "CGK"], ["CAN", "CGO"], ["CAN", "CGQ"], ["CAN", "CIH"], ["CAN", "CKG"], ["CAN", "CNX"], ["CAN", "CSX"], ["CAN", "CTU"], ["CAN", "CZX"], ["CAN", "DAC"], ["CAN", "DAD"], ["CAN", "DAX"], ["CAN", "DEL"], ["CAN", "DIG"], ["CAN", "DLC"], ["CAN", "DMK"], ["CAN", "DOH"], ["CAN", "DOY"], ["CAN", "DPS"], ["CAN", "DXB"], ["CAN", "DYG"], ["CAN", "FOC"], ["CAN", "FUG"], ["CAN", "FUK"], ["CAN", "GYS"], ["CAN", "HAK"], ["CAN", "HAN"], ["CAN", "HDG"], ["CAN", "HET"], ["CAN", "HFE"], ["CAN", "HGH"], ["CAN", "HIA"], ["CAN", "HJJ"], ["CAN", "HKG"], ["CAN", "HKT"], ["CAN", "HRB"], ["CAN", "HYN"], ["CAN", "HZH"], ["CAN", "ICN"], ["CAN", "IKA"], ["CAN", "IST"], ["CAN", "JDZ"], ["CAN", "JED"], ["CAN", "JGS"], ["CAN", "JIQ"], ["CAN", "JIU"], ["CAN", "JJN"], ["CAN", "JNG"], ["CAN", "JUH"], ["CAN", "JZH"], ["CAN", "KHH"], ["CAN", "KHN"], ["CAN", "KIX"], ["CAN", "KMG"], ["CAN", "KOW"], ["CAN", "KTM"], ["CAN", "KUL"], ["CAN", "KWE"], ["CAN", "KWL"], ["CAN", "LAX"], ["CAN", "LHR"], ["CAN", "LHW"], ["CAN", "LJG"], ["CAN", "LLB"], ["CAN", "LUM"], ["CAN", "LYA"], ["CAN", "LYG"], ["CAN", "LYI"], ["CAN", "LZH"], ["CAN", "LZO"], ["CAN", "MEL"], ["CAN", "MIG"], ["CAN", "MLE"], ["CAN", "MNL"], ["CAN", "MXZ"], ["CAN", "NAO"], ["CAN", "NAY"], ["CAN", "NBO"], ["CAN", "NGB"], ["CAN", "NKG"], ["CAN", "NNG"], ["CAN", "NNY"], ["CAN", "NRT"], ["CAN", "PEK"], ["CAN", "PEN"], ["CAN", "PER"], ["CAN", "PNH"], ["CAN", "PUS"], ["CAN", "PVG"], ["CAN", "REP"], ["CAN", "RGN"], ["CAN", "RMQ"], ["CAN", "RUH"], ["CAN", "SGN"], ["CAN", "SHA"], ["CAN", "SHE"], ["CAN", "SIN"], ["CAN", "SJW"], ["CAN", "SPN"], ["CAN", "SVO"], ["CAN", "SWA"], ["CAN", "SYD"], ["CAN", "SYX"], ["CAN", "TAO"], ["CAN", "TEN"], ["CAN", "TNA"], ["CAN", "TPE"], ["CAN", "TSN"], ["CAN", "TXN"], ["CAN", "TYN"], ["CAN", "URC"], ["CAN", "VTE"], ["CAN", "WEF"], ["CAN", "WNZ"], ["CAN", "WUH"], ["CAN", "WUS"], ["CAN", "WUX"], ["CAN", "WXN"], ["CAN", "XFN"], ["CAN", "XIY"], ["CAN", "XMN"], ["CAN", "XUZ"], ["CAN", "YBP"], ["CAN", "YCU"], ["CAN", "YIH"], ["CAN", "YIW"], ["CAN", "YNT"], ["CAN", "YNZ"], ["CAN", "YTY"], ["CAN", "YVR"], ["CAN", "ZHA"], ["CAN", "ZYI"], ["CAP", "PAP"], ["CAP", "PLS"], ["CAW", "MEA"], ["CAW", "SDU"], ["CAW", "VIX"], ["CAY", "FDF"], ["CAY", "ORY"], ["CAY", "PBM"], ["CBB", "CIJ"], ["CBB", "GRU"], ["CBB", "LPB"], ["CBB", "ORU"], ["CBB", "SRE"], ["CBB", "TDD"], ["CBB", "TJA"], ["CBB", "VVI"], ["CBH", "ORN"], ["CBO", "MNL"], ["CBQ", "LOS"], ["CBR", "MEL"], ["CBR", "OOL"], ["CBR", "PER"], ["CBR", "SYD"], ["CBT", "LAD"], ["CBT", "VPE"], ["CCC", "EZE"], ["CCC", "HAV"], ["CCC", "MAN"], ["CCC", "SNU"], ["CCC", "VRA"], ["CCC", "YHZ"], ["CCC", "YUL"], ["CCC", "YYZ"], ["CCF", "CRL"], ["CCF", "DUB"], ["CCF", "EIN"], ["CCF", "EMA"], ["CCF", "LPL"], ["CCF", "OPO"], ["CCF", "PIK"], ["CCF", "STN"], ["CCJ", "CJB"], ["CCJ", "COK"], ["CCJ", "DMM"], ["CCJ", "DOH"], ["CCJ", "DXB"], ["CCJ", "IXE"], ["CCJ", "JED"], ["CCJ", "KWI"], ["CCJ", "MAA"], ["CCJ", "MCT"], ["CCJ", "RUH"], ["CCJ", "SHJ"], ["CCJ", "SLL"], ["CCK", "XCH"], ["CCM", "FLN"], ["CCM", "VCP"], ["CCP", "PMC"], ["CCP", "SCL"], ["CCP", "ZAL"], ["CCP", "ZCO"], ["CCS", "CDG"], ["CCS", "CUM"], ["CCS", "CUR"], ["CCS", "CZE"], ["CCS", "DFW"], ["CCS", "EZE"], ["CCS", "FCO"], ["CCS", "FNC"], ["CCS", "FRA"], ["CCS", "GRU"], ["CCS", "GYE"], ["CCS", "HAV"], ["CCS", "IAH"], ["CCS", "JFK"], ["CCS", "LFR"], ["CCS", "LIM"], ["CCS", "LIS"], ["CCS", "LSP"], ["CCS", "MAD"], ["CCS", "MAR"], ["CCS", "MDE"], ["CCS", "MEX"], ["CCS", "MIA"], ["CCS", "MRD"], ["CCS", "MUN"], ["CCS", "OPO"], ["CCS", "PMV"], ["CCS", "POS"], ["CCS", "PTY"], ["CCS", "PUJ"], ["CCS", "PYH"], ["CCS", "PZO"], ["CCS", "SCL"], ["CCS", "SJU"], ["CCS", "SOM"], ["CCS", "STD"], ["CCS", "SVZ"], ["CCS", "TFN"], ["CCS", "VIG"], ["CCS", "VLV"], ["CCU", "CGP"], ["CCU", "DAC"], ["CCU", "DEL"], ["CCU", "DIB"], ["CCU", "DMU"], ["CCU", "DOH"], ["CCU", "DXB"], ["CCU", "GAU"], ["CCU", "HKG"], ["CCU", "HYD"], ["CCU", "IMF"], ["CCU", "IXA"], ["CCU", "IXB"], ["CCU", "IXR"], ["CCU", "IXS"], ["CCU", "IXZ"], ["CCU", "JAI"], ["CCU", "KMG"], ["CCU", "KTM"], ["CCU", "KUL"], ["CCU", "MAA"], ["CCU", "NAG"], ["CCU", "PAT"], ["CCU", "PBH"], ["CCU", "PNQ"], ["CCU", "RGN"], ["CCU", "RPR"], ["CCU", "SHL"], ["CCU", "SIN"], ["CCU", "VNS"], ["CCU", "VTZ"], ["CCV", "LNB"], ["CCV", "NUS"], ["CCV", "ULB"], ["CCV", "VLI"], ["CDB", "KFP"], ["CDB", "KVC"], ["CDB", "NLG"], ["CDC", "SLC"], ["CDG", "CFE"], ["CDG", "CKY"], ["CDG", "CLT"], ["CDG", "CLY"], ["CDG", "CMB"], ["CDG", "CMN"], ["CDG", "COO"], ["CDG", "CPH"], ["CDG", "CTA"], ["CDG", "CUN"], ["CDG", "CVG"], ["CDG", "CZL"], ["CDG", "DBV"], ["CDG", "DEL"], ["CDG", "DFW"], ["CDG", "DJE"], ["CDG", "DKR"], ["CDG", "DLA"], ["CDG", "DOH"], ["CDG", "DTW"], ["CDG", "DUB"], ["CDG", "DUS"], ["CDG", "DXB"], ["CDG", "EDI"], ["CDG", "EMA"], ["CDG", "EVN"], ["CDG", "EWR"], ["CDG", "EXT"], ["CDG", "EZE"], ["CDG", "FAO"], ["CDG", "FCO"], ["CDG", "FDF"], ["CDG", "FIH"], ["CDG", "FLR"], ["CDG", "FNA"], ["CDG", "FRA"], ["CDG", "GIG"], ["CDG", "GLA"], ["CDG", "GOA"], ["CDG", "GOT"], ["CDG", "GRU"], ["CDG", "GVA"], ["CDG", "GYD"], ["CDG", "HAJ"], ["CDG", "HAM"], ["CDG", "HAN"], ["CDG", "HAV"], ["CDG", "HEL"], ["CDG", "HER"], ["CDG", "HKG"], ["CDG", "HND"], ["CDG", "IAD"], ["CDG", "IAH"], ["CDG", "ICN"], ["CDG", "ISB"], ["CDG", "IST"], ["CDG", "JED"], ["CDG", "JER"], ["CDG", "JFK"], ["CDG", "JIB"], ["CDG", "JNB"], ["CDG", "KBP"], ["CDG", "KEF"], ["CDG", "KIX"], ["CDG", "KRK"], ["CDG", "KUL"], ["CDG", "LAD"], ["CDG", "LAX"], ["CDG", "LBA"], ["CDG", "LBV"], ["CDG", "LCA"], ["CDG", "LED"], ["CDG", "LEJ"], ["CDG", "LFW"], ["CDG", "LGW"], ["CDG", "LHE"], ["CDG", "LHR"], ["CDG", "LIM"], ["CDG", "LIN"], ["CDG", "LIS"], ["CDG", "LJU"], ["CDG", "LOS"], ["CDG", "LPA"], ["CDG", "LPL"], ["CDG", "LTN"], ["CDG", "LUX"], ["CDG", "LXR"], ["CDG", "LYS"], ["CDG", "MAD"], ["CDG", "MAN"], ["CDG", "MCT"], ["CDG", "MEX"], ["CDG", "MIA"], ["CDG", "MIR"], ["CDG", "MLA"], ["CDG", "MPL"], ["CDG", "MRS"], ["CDG", "MRU"], ["CDG", "MSP"], ["CDG", "MSQ"], ["CDG", "MUC"], ["CDG", "MXP"], ["CDG", "NAP"], ["CDG", "NBO"], ["CDG", "NCE"], ["CDG", "NCL"], ["CDG", "NDJ"], ["CDG", "NIM"], ["CDG", "NKC"], ["CDG", "NRT"], ["CDG", "NSI"], ["CDG", "NTE"], ["CDG", "NUE"], ["CDG", "OLB"], ["CDG", "OPO"], ["CDG", "ORD"], ["CDG", "ORK"], ["CDG", "ORN"], ["CDG", "OSL"], ["CDG", "OSR"], ["CDG", "OTP"], ["CDG", "OUA"], ["CDG", "OVD"], ["CDG", "PEK"], ["CDG", "PHL"], ["CDG", "PIT"], ["CDG", "PMO"], ["CDG", "PNR"], ["CDG", "POP"], ["CDG", "PRG"], ["CDG", "PTP"], ["CDG", "PTY"], ["CDG", "PUF"], ["CDG", "PUJ"], ["CDG", "PVG"], ["CDG", "RAI"], ["CDG", "RAK"], ["CDG", "RBA"], ["CDG", "RHO"], ["CDG", "RIX"], ["CDG", "RNS"], ["CDG", "ROB"], ["CDG", "RUH"], ["CDG", "RUN"], ["CDG", "SAW"], ["CDG", "SCL"], ["CDG", "SCQ"], ["CDG", "SDQ"], ["CDG", "SEA"], ["CDG", "SFA"], ["CDG", "SFO"], ["CDG", "SGN"], ["CDG", "SID"], ["CDG", "SIN"], ["CDG", "SKG"], ["CDG", "SLC"], ["CDG", "SOF"], ["CDG", "SPU"], ["CDG", "STR"], ["CDG", "SVG"], ["CDG", "SVO"], ["CDG", "SVX"], ["CDG", "SXM"], ["CDG", "TAS"], ["CDG", "TBS"], ["CDG", "TFS"], ["CDG", "TGD"], ["CDG", "TIV"], ["CDG", "TLS"], ["CDG", "TLV"], ["CDG", "TNR"], ["CDG", "TPE"], ["CDG", "TRN"], ["CDG", "TUN"], ["CDG", "TXL"], ["CDG", "UGC"], ["CDG", "VCE"], ["CDG", "VDA"], ["CDG", "VGO"], ["CDG", "VIE"], ["CDG", "VLC"], ["CDG", "VNO"], ["CDG", "VRN"], ["CDG", "VXE"], ["CDG", "WAW"], ["CDG", "WRO"], ["CDG", "WUH"], ["CDG", "YQB"], ["CDG", "YUL"], ["CDG", "YYZ"], ["CDG", "ZAG"], ["CDG", "ZRH"], ["CDJ", "CMP"], ["CDJ", "RDC"], ["CDR", "DEN"], ["CDV", "YAK"], ["CEB", "CGM"], ["CEB", "CGY"], ["CEB", "CRK"], ["CEB", "DGT"], ["CEB", "DPL"], ["CEB", "DVO"], ["CEB", "GES"], ["CEB", "HKG"], ["CEB", "IAO"], ["CEB", "ICN"], ["CEB", "ILO"], ["CEB", "KLO"], ["CEB", "KUL"], ["CEB", "LGP"], ["CEB", "MNL"], ["CEB", "MPH"], ["CEB", "NRT"], ["CEB", "OZC"], ["CEB", "PAG"], ["CEB", "POM"], ["CEB", "PPS"], ["CEB", "PUS"], ["CEB", "SIN"], ["CEB", "SUG"], ["CEB", "TAC"], ["CEB", "USU"], ["CEB", "ZAM"], ["CEC", "SFO"], ["CEE", "DME"], ["CEE", "HEL"], ["CEE", "KGD"], ["CEE", "LED"], ["CEE", "MMK"], ["CEE", "VKO"], ["CEE", "VUS"], ["CEG", "TLS"], ["CEI", "DMK"], ["CEI", "KMG"], ["CEK", "DME"], ["CEK", "DWC"], ["CEK", "DYU"], ["CEK", "EVN"], ["CEK", "FRU"], ["CEK", "KZN"], ["CEK", "LBD"], ["CEK", "LED"], ["CEK", "NMA"], ["CEK", "OSS"], ["CEK", "OVB"], ["CEK", "PRG"], ["CEK", "SVO"], ["CEK", "TAS"], ["CEM", "FAI"], ["CEM", "IRC"], ["CEN", "GDL"], ["CEN", "HMO"], ["CEN", "MEX"], ["CEN", "TIJ"], ["CEZ", "DEN"], ["CFB", "PLU"], ["CFB", "SDU"], ["CFB", "VCP"], ["CFC", "CWB"], ["CFC", "JCB"], ["CFE", "LYS"], ["CFE", "NCE"], ["CFE", "OPO"], ["CFE", "ORY"], ["CFK", "MRS"], ["CFN", "DUB"], ["CFN", "GLA"], ["CFR", "LYS"], ["CFR", "NCE"], ["CFR", "ORY"], ["CFS", "MEL"], ["CFS", "SYD"], ["CFU", "CGN"], ["CFU", "CIA"], ["CFU", "CRL"], ["CFU", "DME"], ["CFU", "DRS"], ["CFU", "DUB"], ["CFU", "DUS"], ["CFU", "EDI"], ["CFU", "EFL"], ["CFU", "EIN"], ["CFU", "EMA"], ["CFU", "FMO"], ["CFU", "FRA"], ["CFU", "HAJ"], ["CFU", "HAM"], ["CFU", "LBA"], ["CFU", "LEJ"], ["CFU", "LGW"], ["CFU", "LIL"], ["CFU", "LTN"], ["CFU", "LUX"], ["CFU", "MAN"], ["CFU", "MUC"], ["CFU", "NRN"], ["CFU", "PIK"], ["CFU", "PVK"], ["CFU", "RYG"], ["CFU", "SKG"], ["CFU", "STN"], ["CFU", "STR"], ["CFU", "SXF"], ["CFU", "TXL"], ["CFU", "VIE"], ["CGB", "CGH"], ["CGB", "CGR"], ["CGB", "CNF"], ["CGB", "GIG"], ["CGB", "GRU"], ["CGB", "GYN"], ["CGB", "JPR"], ["CGB", "LDB"], ["CGB", "MGF"], ["CGB", "OAL"], ["CGB", "OPS"], ["CGB", "PVH"], ["CGB", "ROO"], ["CGB", "SJP"], ["CGB", "VCP"], ["CGD", "HAK"], ["CGD", "KMG"], ["CGD", "PEK"], ["CGD", "SHA"], ["CGD", "SZX"], ["CGD", "XIY"], ["CGD", "XMN"], ["CGH", "CGR"], ["CGH", "CLV"], ["CGH", "CNF"], ["CGH", "CWB"], ["CGH", "CXJ"], ["CGH", "FLN"], ["CGH", "GIG"], ["CGH", "GYN"], ["CGH", "IGU"], ["CGH", "IOS"], ["CGH", "JOI"], ["CGH", "JTC"], ["CGH", "LDB"], ["CGH", "MGF"], ["CGH", "NVT"], ["CGH", "POA"], ["CGH", "PPB"], ["CGH", "RAO"], ["CGH", "SDU"], ["CGH", "SJP"], ["CGH", "SSA"], ["CGH", "UDI"], ["CGH", "VIX"], ["CGI", "STL"], ["CGK", "CMB"], ["CGK", "DJB"], ["CGK", "DJJ"], ["CGK", "DMK"], ["CGK", "DOH"], ["CGK", "DPS"], ["CGK", "DXB"], ["CGK", "FOC"], ["CGK", "HKG"], ["CGK", "HKT"], ["CGK", "HND"], ["CGK", "ICN"], ["CGK", "JED"], ["CGK", "JHB"], ["CGK", "JOG"], ["CGK", "KDI"], ["CGK", "KIX"], ["CGK", "KUL"], ["CGK", "LOP"], ["CGK", "MDC"], ["CGK", "MED"], ["CGK", "MEL"], ["CGK", "MLG"], ["CGK", "MNL"], ["CGK", "NRT"], ["CGK", "PDG"], ["CGK", "PEK"], ["CGK", "PEN"], ["CGK", "PER"], ["CGK", "PGK"], ["CGK", "PKN"], ["CGK", "PKU"], ["CGK", "PKY"], ["CGK", "PLM"], ["CGK", "PLW"], ["CGK", "PNK"], ["CGK", "PVG"], ["CGK", "RUH"], ["CGK", "SGN"], ["CGK", "SIN"], ["CGK", "SOC"], ["CGK", "SRG"], ["CGK", "SUB"], ["CGK", "SYD"], ["CGK", "TJQ"], ["CGK", "TKG"], ["CGK", "TNJ"], ["CGK", "TPE"], ["CGK", "TRK"], ["CGK", "TTE"], ["CGK", "UPG"], ["CGK", "XMN"], ["CGN", "CLY"], ["CGN", "CTA"], ["CGN", "DBV"], ["CGN", "DME"], ["CGN", "DRS"], ["CGN", "DUB"], ["CGN", "EDI"], ["CGN", "ESB"], ["CGN", "FAO"], ["CGN", "FCO"], ["CGN", "FDH"], ["CGN", "FNC"], ["CGN", "FUE"], ["CGN", "GDN"], ["CGN", "GRO"], ["CGN", "HAM"], ["CGN", "HDF"], ["CGN", "HER"], ["CGN", "HRG"], ["CGN", "IBZ"], ["CGN", "IEV"], ["CGN", "IKA"], ["CGN", "IST"], ["CGN", "JMK"], ["CGN", "JTR"], ["CGN", "KGS"], ["CGN", "KLU"], ["CGN", "KTW"], ["CGN", "KVA"], ["CGN", "LEJ"], ["CGN", "LGW"], ["CGN", "LHR"], ["CGN", "LIS"], ["CGN", "LPA"], ["CGN", "MAH"], ["CGN", "MAN"], ["CGN", "MUC"], ["CGN", "MXP"], ["CGN", "NAP"], ["CGN", "NBE"], ["CGN", "NCE"], ["CGN", "NDR"], ["CGN", "OLB"], ["CGN", "OSL"], ["CGN", "PMI"], ["CGN", "PMO"], ["CGN", "PRG"], ["CGN", "PSA"], ["CGN", "PUY"], ["CGN", "RAK"], ["CGN", "RHO"], ["CGN", "RJK"], ["CGN", "RLG"], ["CGN", "SAW"], ["CGN", "SID"], ["CGN", "SJJ"], ["CGN", "SKG"], ["CGN", "SKP"], ["CGN", "SPU"], ["CGN", "STN"], ["CGN", "SUF"], ["CGN", "SZG"], ["CGN", "TFS"], ["CGN", "TLV"], ["CGN", "TUN"], ["CGN", "TXL"], ["CGN", "VCE"], ["CGN", "VIE"], ["CGN", "VRN"], ["CGN", "WAW"], ["CGN", "XRY"], ["CGN", "ZAD"], ["CGN", "ZAG"], ["CGN", "ZRH"], ["CGO", "CGQ"], ["CGO", "CJU"], ["CGO", "CKG"], ["CGO", "CTU"], ["CGO", "DLC"], ["CGO", "DSN"], ["CGO", "FOC"], ["CGO", "HAK"], ["CGO", "HET"], ["CGO", "HFE"], ["CGO", "HGH"], ["CGO", "HKG"], ["CGO", "HMI"], ["CGO", "HRB"], ["CGO", "ICN"], ["CGO", "JJN"], ["CGO", "KHH"], ["CGO", "KHN"], ["CGO", "KMG"], ["CGO", "KRL"], ["CGO", "KWE"], ["CGO", "KWL"], ["CGO", "LHW"], ["CGO", "LJG"], ["CGO", "MFM"], ["CGO", "MIG"], ["CGO", "NGB"], ["CGO", "NKG"], ["CGO", "NNG"], ["CGO", "NNY"], ["CGO", "PEK"], ["CGO", "PVG"], ["CGO", "RMQ"], ["CGO", "SHA"], ["CGO", "SHE"], ["CGO", "SWA"], ["CGO", "SYX"], ["CGO", "SZX"], ["CGO", "TAO"], ["CGO", "TNA"], ["CGO", "TPE"], ["CGO", "TSN"], ["CGO", "URC"], ["CGO", "UYN"], ["CGO", "WNZ"], ["CGO", "XMN"], ["CGO", "XNN"], ["CGO", "YIW"], ["CGO", "YTY"], ["CGO", "ZUH"], ["CGP", "DAC"], ["CGP", "DWC"], ["CGP", "DXB"], ["CGP", "JED"], ["CGP", "KUL"], ["CGP", "KWI"], ["CGP", "MCT"], ["CGP", "SHJ"], ["CGQ", "CJU"], ["CGQ", "CKG"], ["CGQ", "CTU"], ["CGQ", "FOC"], ["CGQ", "HET"], ["CGQ", "HFE"], ["CGQ", "HGH"], ["CGQ", "ICN"], ["CGQ", "KHN"], ["CGQ", "NBS"], ["CGQ", "NGB"], ["CGQ", "NKG"], ["CGQ", "NRT"], ["CGQ", "PEK"], ["CGQ", "PVG"], ["CGQ", "SJW"], ["CGQ", "SZX"], ["CGQ", "TAO"], ["CGQ", "TNA"], ["CGQ", "TPE"], ["CGQ", "TSN"], ["CGQ", "TYN"], ["CGQ", "WUH"], ["CGQ", "XIY"], ["CGQ", "YNJ"], ["CGQ", "YNT"], ["CGR", "CMG"], ["CGR", "CWB"], ["CGR", "DOU"], ["CGR", "GIG"], ["CGR", "GRU"], ["CGR", "MGF"], ["CGR", "VCP"], ["CGY", "DVO"], ["CGY", "ILO"], ["CGY", "MNL"], ["CHA", "CLT"], ["CHA", "DCA"], ["CHA", "DFW"], ["CHA", "DTW"], ["CHA", "ORD"], ["CHA", "PIE"], ["CHA", "SFB"], ["CHC", "DUD"], ["CHC", "HKK"], ["CHC", "HLZ"], ["CHC", "IVC"], ["CHC", "MEL"], ["CHC", "NAN"], ["CHC", "NPE"], ["CHC", "NPL"], ["CHC", "NSN"], ["CHC", "OOL"], ["CHC", "PMR"], ["CHC", "PPQ"], ["CHC", "ROT"], ["CHC", "SIN"], ["CHC", "SYD"], ["CHC", "TRG"], ["CHC", "WLG"], ["CHC", "ZQN"], ["CHG", "DLC"], ["CHG", "PEK"], ["CHO", "CLT"], ["CHO", "IAD"], ["CHO", "LGA"], ["CHO", "ORD"], ["CHO", "PHL"], ["CHQ", "CIA"], ["CHQ", "CPH"], ["CHQ", "CRL"], ["CHQ", "DUB"], ["CHQ", "DUS"], ["CHQ", "EIN"], ["CHQ", "EMA"], ["CHQ", "FMM"], ["CHQ", "FRA"], ["CHQ", "HEL"], ["CHQ", "HHN"], ["CHQ", "KTW"], ["CHQ", "LBA"], ["CHQ", "LGW"], ["CHQ", "MRS"], ["CHQ", "MUC"], ["CHQ", "NRN"], ["CHQ", "NYO"], ["CHQ", "OSL"], ["CHQ", "PFO"], ["CHQ", "RYG"], ["CHQ", "SKG"], ["CHQ", "STN"], ["CHQ", "TSF"], ["CHQ", "VIE"], ["CHQ", "VNO"], ["CHQ", "WMI"], ["CHQ", "WRO"], ["CHQ", "ZTH"], ["CHS", "CLE"], ["CHS", "CLT"], ["CHS", "DCA"], ["CHS", "DFW"], ["CHS", "DTW"], ["CHS", "EWR"], ["CHS", "HOU"], ["CHS", "IAD"], ["CHS", "IAH"], ["CHS", "JFK"], ["CHS", "LGA"], ["CHS", "MDW"], ["CHS", "MIA"], ["CHS", "ORD"], ["CHS", "PHL"], ["CHS", "TPA"], ["CHX", "PAC"], ["CHY", "GZO"], ["CHY", "HIR"], ["CIA", "CIY"], ["CIA", "CLJ"], ["CIA", "CRL"], ["CIA", "DUB"], ["CIA", "EDI"], ["CIA", "EIN"], ["CIA", "EMA"], ["CIA", "FKB"], ["CIA", "FMM"], ["CIA", "GSE"], ["CIA", "HHN"], ["CIA", "IBZ"], ["CIA", "KIV"], ["CIA", "KRK"], ["CIA", "KTW"], ["CIA", "MAD"], ["CIA", "MAN"], ["CIA", "MRS"], ["CIA", "NRN"], ["CIA", "NYO"], ["CIA", "OPO"], ["CIA", "OTP"], ["CIA", "PIK"], ["CIA", "PMI"], ["CIA", "POZ"], ["CIA", "RAK"], ["CIA", "RYG"], ["CIA", "SDR"], ["CIA", "SKG"], ["CIA", "STN"], ["CIA", "SVQ"], ["CIA", "TPS"], ["CIA", "TSR"], ["CIA", "VLC"], ["CIA", "VNO"], ["CIA", "WMI"], ["CIA", "WRO"], ["CIC", "SFO"], ["CID", "DEN"], ["CID", "DFW"], ["CID", "DTW"], ["CID", "LAS"], ["CID", "MSP"], ["CID", "ORD"], ["CID", "PGD"], ["CID", "PIE"], ["CID", "SFB"], ["CIF", "DLC"], ["CIF", "HET"], ["CIF", "HLD"], ["CIF", "HRB"], ["CIF", "NAY"], ["CIF", "NKG"], ["CIF", "PEK"], ["CIF", "SHE"], ["CIF", "TSN"], ["CIH", "CTU"], ["CIH", "DAT"], ["CIH", "HAK"], ["CIH", "NAY"], ["CIH", "PEK"], ["CIH", "SHA"], ["CIH", "TSN"], ["CIH", "TYN"], ["CIH", "WUH"], ["CIH", "XMN"], ["CIJ", "LPB"], ["CIJ", "TDD"], ["CIK", "FAI"], ["CIK", "FYU"], ["CIP", "LUN"], ["CIT", "DME"], ["CIT", "KQT"], ["CIT", "LED"], ["CIT", "OVB"], ["CIT", "SCO"], ["CIT", "SHJ"], ["CIT", "TJU"], ["CIT", "TSE"], ["CIT", "VKO"], ["CIU", "DTW"], ["CIX", "LIM"], ["CIY", "CRL"], ["CIY", "DUB"], ["CIY", "HHN"], ["CIY", "KUN"], ["CIY", "LIN"], ["CIY", "PSA"], ["CIY", "STN"], ["CIZ", "MAO"], ["CJA", "LIM"], ["CJB", "DEL"], ["CJB", "HYD"], ["CJB", "MAA"], ["CJB", "SHJ"], ["CJB", "SIN"], ["CJC", "CPO"], ["CJC", "LSC"], ["CJC", "SCL"], ["CJJ", "CJU"], ["CJJ", "HGH"], ["CJJ", "PEK"], ["CJJ", "SHE"], ["CJL", "ISB"], ["CJL", "PEW"], ["CJM", "DMK"], ["CJS", "CUU"], ["CJS", "GDL"], ["CJS", "HMO"], ["CJS", "MEX"], ["CJS", "MTY"], ["CJS", "TIJ"], ["CJU", "CSX"], ["CJU", "DLC"], ["CJU", "FOC"], ["CJU", "FUK"], ["CJU", "GMP"], ["CJU", "HIN"], ["CJU", "HKG"], ["CJU", "HRB"], ["CJU", "ICN"], ["CJU", "KIX"], ["CJU", "KPO"], ["CJU", "KUV"], ["CJU", "KWJ"], ["CJU", "MWX"], ["CJU", "NGB"], ["CJU", "NGO"], ["CJU", "NRT"], ["CJU", "PEK"], ["CJU", "PUS"], ["CJU", "PVG"], ["CJU", "RSU"], ["CJU", "SHE"], ["CJU", "SZX"], ["CJU", "TAE"], ["CJU", "TPE"], ["CJU", "TSN"], ["CJU", "USN"], ["CJU", "WJU"], ["CJU", "WNZ"], ["CJU", "XMN"], ["CKB", "IAD"], ["CKB", "MGW"], ["CKB", "SFB"], ["CKG", "CNX"], ["CKG", "CSX"], ["CKG", "CTU"], ["CKG", "CZX"], ["CKG", "DLC"], ["CKG", "DMK"], ["CKG", "DOH"], ["CKG", "DOY"], ["CKG", "DSN"], ["CKG", "DYG"], ["CKG", "ENY"], ["CKG", "FOC"], ["CKG", "HAK"], ["CKG", "HDG"], ["CKG", "HEL"], ["CKG", "HET"], ["CKG", "HFE"], ["CKG", "HGH"], ["CKG", "HIA"], ["CKG", "HKG"], ["CKG", "HKT"], ["CKG", "HYN"], ["CKG", "ICN"], ["CKG", "JHG"], ["CKG", "JIQ"], ["CKG", "JZH"], ["CKG", "KHH"], ["CKG", "KHN"], ["CKG", "KMG"], ["CKG", "KRL"], ["CKG", "KWE"], ["CKG", "KWL"], ["CKG", "LHW"], ["CKG", "LJG"], ["CKG", "LXA"], ["CKG", "LYA"], ["CKG", "LZH"], ["CKG", "MFM"], ["CKG", "NAY"], ["CKG", "NGB"], ["CKG", "NKG"], ["CKG", "NNG"], ["CKG", "PEK"], ["CKG", "PVG"], ["CKG", "PZI"], ["CKG", "SHA"], ["CKG", "SHE"], ["CKG", "SIN"], ["CKG", "SJW"], ["CKG", "SWA"], ["CKG", "SYD"], ["CKG", "SYX"], ["CKG", "SZX"], ["CKG", "TAO"], ["CKG", "TNA"], ["CKG", "TPE"], ["CKG", "TSA"], ["CKG", "TSN"], ["CKG", "TXN"], ["CKG", "TYN"], ["CKG", "URC"], ["CKG", "WNZ"], ["CKG", "WUH"], ["CKG", "WUS"], ["CKG", "WUX"], ["CKG", "XFN"], ["CKG", "XIC"], ["CKG", "XIY"], ["CKG", "XMN"], ["CKG", "XNN"], ["CKG", "XUZ"], ["CKG", "YCU"], ["CKG", "YIH"], ["CKG", "YTY"], ["CKG", "ZAT"], ["CKG", "ZHA"], ["CKG", "ZUH"], ["CKH", "YKS"], ["CKS", "CNF"], ["CKS", "MAB"], ["CKS", "OIA"], ["CKY", "CMN"], ["CKY", "DKR"], ["CKY", "LFW"], ["CKY", "NKC"], ["CKY", "OXB"], ["CKZ", "ESB"], ["CLD", "LAX"], ["CLE", "CLT"], ["CLE", "CMH"], ["CLE", "CUN"], ["CLE", "DAY"], ["CLE", "DCA"], ["CLE", "DEN"], ["CLE", "DFW"], ["CLE", "DTW"], ["CLE", "DUJ"], ["CLE", "ERI"], ["CLE", "EWR"], ["CLE", "FKL"], ["CLE", "FLL"], ["CLE", "FNT"], ["CLE", "GRR"], ["CLE", "GSP"], ["CLE", "IAD"], ["CLE", "IAH"], ["CLE", "IND"], ["CLE", "JFK"], ["CLE", "JHW"], ["CLE", "LAS"], ["CLE", "LAX"], ["CLE", "LGA"], ["CLE", "MCI"], ["CLE", "MCO"], ["CLE", "MDW"], ["CLE", "MIA"], ["CLE", "MKE"], ["CLE", "MSP"], ["CLE", "MSY"], ["CLE", "ORD"], ["CLE", "PBI"], ["CLE", "PHL"], ["CLE", "PHX"], ["CLE", "PKB"], ["CLE", "PUJ"], ["CLE", "RIC"], ["CLE", "ROC"], ["CLE", "RSW"], ["CLE", "SDF"], ["CLE", "SFO"], ["CLE", "STL"], ["CLE", "SYR"], ["CLE", "TPA"], ["CLE", "TTN"], ["CLE", "YYZ"], ["CLJ", "CRL"], ["CLJ", "DTM"], ["CLJ", "EIN"], ["CLJ", "LTN"], ["CLJ", "MAD"], ["CLJ", "MUC"], ["CLJ", "OTP"], ["CLJ", "PRG"], ["CLJ", "TLV"], ["CLJ", "TSF"], ["CLJ", "VIE"], ["CLJ", "VLC"], ["CLJ", "ZAZ"], ["CLL", "DFW"], ["CLL", "IAH"], ["CLO", "CTG"], ["CLO", "ESM"], ["CLO", "GPI"], ["CLO", "GYE"], ["CLO", "LIM"], ["CLO", "MAD"], ["CLO", "MDE"], ["CLO", "MIA"], ["CLO", "PSO"], ["CLO", "PTY"], ["CLO", "PUU"], ["CLO", "SAL"], ["CLO", "TCO"], ["CLO", "UIB"], ["CLO", "UIO"], ["CLQ", "MEX"], ["CLQ", "TIJ"], ["CLT", "CMH"], ["CLT", "CRW"], ["CLT", "CUN"], ["CLT", "CUR"], ["CLT", "CVG"], ["CLT", "CZM"], ["CLT", "DAB"], ["CLT", "DAY"], ["CLT", "DCA"], ["CLT", "DEN"], ["CLT", "DFW"], ["CLT", "DSM"], ["CLT", "DTW"], ["CLT", "DUB"], ["CLT", "EWN"], ["CLT", "EWR"], ["CLT", "FAY"], ["CLT", "FCO"], ["CLT", "FLL"], ["CLT", "FLO"], ["CLT", "FPO"], ["CLT", "FRA"], ["CLT", "GCM"], ["CLT", "GIG"], ["CLT", "GNV"], ["CLT", "GPT"], ["CLT", "GRU"], ["CLT", "GSO"], ["CLT", "GSP"], ["CLT", "HHH"], ["CLT", "HOU"], ["CLT", "HPN"], ["CLT", "HSV"], ["CLT", "HTS"], ["CLT", "IAD"], ["CLT", "IAH"], ["CLT", "ILM"], ["CLT", "IND"], ["CLT", "JAN"], ["CLT", "JAX"], ["CLT", "JFK"], ["CLT", "LAS"], ["CLT", "LAX"], ["CLT", "LEX"], ["CLT", "LGA"], ["CLT", "LHR"], ["CLT", "LIR"], ["CLT", "LIT"], ["CLT", "LUK"], ["CLT", "LYH"], ["CLT", "MBJ"], ["CLT", "MCI"], ["CLT", "MCO"], ["CLT", "MDT"], ["CLT", "MDW"], ["CLT", "MEM"], ["CLT", "MEX"], ["CLT", "MGM"], ["CLT", "MHT"], ["CLT", "MIA"], ["CLT", "MKE"], ["CLT", "MLB"], ["CLT", "MOB"], ["CLT", "MSP"], ["CLT", "MSY"], ["CLT", "MUC"], ["CLT", "MYR"], ["CLT", "NAS"], ["CLT", "OAJ"], ["CLT", "OMA"], ["CLT", "ORD"], ["CLT", "ORF"], ["CLT", "PBI"], ["CLT", "PDX"], ["CLT", "PGV"], ["CLT", "PHF"], ["CLT", "PHL"], ["CLT", "PHX"], ["CLT", "PIT"], ["CLT", "PLS"], ["CLT", "PNS"], ["CLT", "PUJ"], ["CLT", "PVD"], ["CLT", "PWM"], ["CLT", "RDU"], ["CLT", "RIC"], ["CLT", "ROA"], ["CLT", "ROC"], ["CLT", "RSW"], ["CLT", "SAN"], ["CLT", "SAT"], ["CLT", "SAV"], ["CLT", "SBY"], ["CLT", "SDF"], ["CLT", "SEA"], ["CLT", "SFO"], ["CLT", "SJD"], ["CLT", "SJO"], ["CLT", "SJU"], ["CLT", "SLC"], ["CLT", "SMF"], ["CLT", "SRQ"], ["CLT", "STL"], ["CLT", "STT"], ["CLT", "SXM"], ["CLT", "SYR"], ["CLT", "TLH"], ["CLT", "TPA"], ["CLT", "TRI"], ["CLT", "TTN"], ["CLT", "TYS"], ["CLT", "UVF"], ["CLT", "VPS"], ["CLT", "XNA"], ["CLT", "YOW"], ["CLT", "YUL"], ["CLT", "YYZ"], ["CLV", "VCP"], ["CLY", "DUS"], ["CLY", "FMM"], ["CLY", "LUX"], ["CLY", "MRS"], ["CLY", "NCE"], ["CLY", "NTE"], ["CLY", "ORY"], ["CLY", "SZG"], ["CMA", "SGO"], ["CMA", "XTG"], ["CMB", "COK"], ["CMB", "DAC"], ["CMB", "DEL"], ["CMB", "DME"], ["CMB", "DMM"], ["CMB", "DOH"], ["CMB", "DWC"], ["CMB", "DXB"], ["CMB", "FCO"], ["CMB", "FRA"], ["CMB", "GAN"], ["CMB", "GIU"], ["CMB", "HRI"], ["CMB", "ICN"], ["CMB", "IXM"], ["CMB", "JED"], ["CMB", "KCT"], ["CMB", "KHI"], ["CMB", "KMG"], ["CMB", "KUL"], ["CMB", "KWI"], ["CMB", "LHR"], ["CMB", "MAA"], ["CMB", "MCT"], ["CMB", "MLE"], ["CMB", "NRT"], ["CMB", "PEK"], ["CMB", "PVG"], ["CMB", "RUH"], ["CMB", "SEZ"], ["CMB", "SHJ"], ["CMB", "SIN"], ["CMB", "TRV"], ["CMB", "TRZ"], ["CME", "IAH"], ["CME", "MEX"], ["CMH", "DCA"], ["CMH", "DEN"], ["CMH", "DFW"], ["CMH", "DTW"], ["CMH", "EWR"], ["CMH", "FLL"], ["CMH", "FPO"], ["CMH", "IAD"], ["CMH", "IAH"], ["CMH", "JFK"], ["CMH", "LAS"], ["CMH", "LAX"], ["CMH", "LGA"], ["CMH", "MCO"], ["CMH", "MDW"], ["CMH", "MIA"], ["CMH", "MSP"], ["CMH", "OAK"], ["CMH", "ORD"], ["CMH", "PHL"], ["CMH", "PHX"], ["CMH", "RDU"], ["CMH", "RNO"], ["CMH", "RSW"], ["CMH", "STL"], ["CMH", "TPA"], ["CMH", "YYZ"], ["CMI", "DFW"], ["CMI", "ORD"], ["CMN", "COO"], ["CMN", "CPH"], ["CMN", "CUF"], ["CMN", "DKR"], ["CMN", "DLA"], ["CMN", "DOH"], ["CMN", "DXB"], ["CMN", "EUN"], ["CMN", "FCO"], ["CMN", "FEZ"], ["CMN", "FIH"], ["CMN", "FNA"], ["CMN", "FRA"], ["CMN", "GRU"], ["CMN", "GVA"], ["CMN", "IST"], ["CMN", "JED"], ["CMN", "JFK"], ["CMN", "LAD"], ["CMN", "LBV"], ["CMN", "LFW"], ["CMN", "LGW"], ["CMN", "LHR"], ["CMN", "LIS"], ["CMN", "LOS"], ["CMN", "LPA"], ["CMN", "LYS"], ["CMN", "MAD"], ["CMN", "MPL"], ["CMN", "MRS"], ["CMN", "MUC"], ["CMN", "MXP"], ["CMN", "NCE"], ["CMN", "NDR"], ["CMN", "NIM"], ["CMN", "NKC"], ["CMN", "NSI"], ["CMN", "NTE"], ["CMN", "ORN"], ["CMN", "ORY"], ["CMN", "OUA"], ["CMN", "OUD"], ["CMN", "OUZ"], ["CMN", "OXB"], ["CMN", "OZZ"], ["CMN", "PNR"], ["CMN", "RAI"], ["CMN", "RAK"], ["CMN", "RBA"], ["CMN", "ROB"], ["CMN", "RUH"], ["CMN", "SAW"], ["CMN", "SSG"], ["CMN", "SVO"], ["CMN", "SXB"], ["CMN", "TFN"], ["CMN", "TIP"], ["CMN", "TLS"], ["CMN", "TNG"], ["CMN", "TRN"], ["CMN", "TSF"], ["CMN", "TTA"], ["CMN", "TTU"], ["CMN", "TUN"], ["CMN", "TXL"], ["CMN", "VIL"], ["CMN", "VLC"], ["CMN", "YUL"], ["CMN", "ZRH"], ["CMU", "POM"], ["CMW", "HAV"], ["CMW", "YUL"], ["CMW", "YYZ"], ["CMX", "ORD"], ["CND", "IST"], ["CNF", "CPV"], ["CNF", "CWB"], ["CNF", "FOR"], ["CNF", "GIG"], ["CNF", "GRU"], ["CNF", "GYN"], ["CNF", "IMP"], ["CNF", "IOS"], ["CNF", "IPN"], ["CNF", "IZA"], ["CNF", "LIS"], ["CNF", "MAO"], ["CNF", "MIA"], ["CNF", "MOC"], ["CNF", "NAT"], ["CNF", "PNZ"], ["CNF", "POA"], ["CNF", "PTY"], ["CNF", "RAO"], ["CNF", "REC"], ["CNF", "SDU"], ["CNF", "SLZ"], ["CNF", "SSA"], ["CNF", "UBA"], ["CNF", "UDI"], ["CNF", "VCP"], ["CNF", "VDC"], ["CNF", "VIX"], ["CNJ", "ISA"], ["CNJ", "TSV"], ["CNP", "OBY"], ["CNS", "CUQ"], ["CNS", "DRW"], ["CNS", "EDR"], ["CNS", "GOV"], ["CNS", "GTE"], ["CNS", "GUM"], ["CNS", "HID"], ["CNS", "HKG"], ["CNS", "HTI"], ["CNS", "IRG"], ["CNS", "ISA"], ["CNS", "KIX"], ["CNS", "KWM"], ["CNS", "MEL"], ["CNS", "NRT"], ["CNS", "NTN"], ["CNS", "OOL"], ["CNS", "PER"], ["CNS", "POM"], ["CNS", "RAB"], ["CNS", "SYD"], ["CNS", "TSV"], ["CNS", "WEI"], ["CNX", "DMK"], ["CNX", "HDY"], ["CNX", "HGH"], ["CNX", "HGN"], ["CNX", "HKG"], ["CNX", "HKT"], ["CNX", "ICN"], ["CNX", "KBV"], ["CNX", "KMG"], ["CNX", "KUL"], ["CNX", "LPQ"], ["CNX", "MFM"], ["CNX", "NNT"], ["CNX", "PEK"], ["CNX", "PHS"], ["CNX", "PVG"], ["CNX", "PYY"], ["CNX", "RGN"], ["CNX", "SIN"], ["CNX", "TPE"], ["CNX", "USM"], ["CNX", "UTH"], ["CNX", "WUH"], ["CNY", "SLC"], ["COD", "DEN"], ["COD", "SLC"], ["COK", "DEL"], ["COK", "DMM"], ["COK", "DOH"], ["COK", "DXB"], ["COK", "HYD"], ["COK", "KUL"], ["COK", "KWI"], ["COK", "MAA"], ["COK", "MCT"], ["COK", "MLE"], ["COK", "PNQ"], ["COK", "RUH"], ["COK", "SHJ"], ["COK", "SIN"], ["COK", "TRV"], ["COO", "DKR"], ["COO", "DLA"], ["COO", "LBV"], ["COO", "LFW"], ["COO", "LOS"], ["COO", "NBO"], ["COO", "NIM"], ["COO", "OUA"], ["COO", "PNR"], ["COO", "SSG"], ["COQ", "HLD"], ["COQ", "NZH"], ["COQ", "ULN"], ["COR", "EZE"], ["COR", "GRU"], ["COR", "JUJ"], ["COR", "LIM"], ["COR", "MDZ"], ["COR", "PTY"], ["COR", "ROS"], ["COR", "SCL"], ["COR", "SLA"], ["COS", "DEN"], ["COS", "DFW"], ["COS", "IAD"], ["COS", "IAH"], ["COS", "LAS"], ["COS", "LAX"], ["COS", "ORD"], ["COS", "SEA"], ["COS", "SFO"], ["COS", "SLC"], ["COU", "DFW"], ["COU", "ORD"], ["CPE", "MEX"], ["CPH", "CTA"], ["CPH", "DOH"], ["CPH", "DUB"], ["CPH", "DUS"], ["CPH", "DXB"], ["CPH", "EDI"], ["CPH", "EIN"], ["CPH", "EWR"], ["CPH", "FAE"], ["CPH", "FAO"], ["CPH", "FCO"], ["CPH", "FLL"], ["CPH", "FLR"], ["CPH", "FRA"], ["CPH", "GDN"], ["CPH", "GOT"], ["CPH", "GVA"], ["CPH", "GZP"], ["CPH", "HAJ"], ["CPH", "HAM"], ["CPH", "HAU"], ["CPH", "HEL"], ["CPH", "IAD"], ["CPH", "ISB"], ["CPH", "IST"], ["CPH", "JFK"], ["CPH", "KEF"], ["CPH", "KRK"], ["CPH", "KRP"], ["CPH", "KRS"], ["CPH", "LAX"], ["CPH", "LBA"], ["CPH", "LED"], ["CPH", "LGW"], ["CPH", "LHE"], ["CPH", "LHR"], ["CPH", "LIN"], ["CPH", "LIS"], ["CPH", "LJU"], ["CPH", "LPA"], ["CPH", "LPI"], ["CPH", "LUX"], ["CPH", "MAD"], ["CPH", "MAN"], ["CPH", "MLA"], ["CPH", "MOL"], ["CPH", "MUC"], ["CPH", "MXP"], ["CPH", "NCE"], ["CPH", "NCL"], ["CPH", "NRT"], ["CPH", "ORD"], ["CPH", "ORY"], ["CPH", "OSL"], ["CPH", "OTP"], ["CPH", "PEK"], ["CPH", "PLQ"], ["CPH", "PMI"], ["CPH", "POZ"], ["CPH", "PRG"], ["CPH", "PRN"], ["CPH", "PSA"], ["CPH", "PVG"], ["CPH", "RAK"], ["CPH", "RIX"], ["CPH", "RNN"], ["CPH", "SAW"], ["CPH", "SFJ"], ["CPH", "SFO"], ["CPH", "SGD"], ["CPH", "SIN"], ["CPH", "SJJ"], ["CPH", "SKG"], ["CPH", "SPU"], ["CPH", "STN"], ["CPH", "STR"], ["CPH", "SVG"], ["CPH", "SVO"], ["CPH", "SXF"], ["CPH", "TKU"], ["CPH", "TLL"], ["CPH", "TLV"], ["CPH", "TRD"], ["CPH", "TRF"], ["CPH", "TXL"], ["CPH", "VCE"], ["CPH", "VIE"], ["CPH", "VNO"], ["CPH", "WAW"], ["CPH", "WRO"], ["CPH", "YYZ"], ["CPH", "ZAG"], ["CPH", "ZRH"], ["CPO", "LSC"], ["CPO", "SCL"], ["CPR", "DEN"], ["CPR", "LAS"], ["CPR", "SLC"], ["CPT", "DOH"], ["CPT", "DUR"], ["CPT", "DXB"], ["CPT", "ELS"], ["CPT", "GBE"], ["CPT", "GRJ"], ["CPT", "HDS"], ["CPT", "HLA"], ["CPT", "JNB"], ["CPT", "KIM"], ["CPT", "LAD"], ["CPT", "LHR"], ["CPT", "MPM"], ["CPT", "MQP"], ["CPT", "MRU"], ["CPT", "MUB"], ["CPT", "PBZ"], ["CPT", "PLZ"], ["CPT", "UTN"], ["CPT", "WDH"], ["CPT", "WVB"], ["CPV", "PNZ"], ["CPV", "SSA"], ["CPX", "SJU"], ["CRA", "LTN"], ["CRD", "EQS"], ["CRD", "NQN"], ["CRD", "REL"], ["CRD", "RGL"], ["CRI", "NAS"], ["CRK", "DOH"], ["CRK", "HKG"], ["CRK", "ICN"], ["CRK", "KLO"], ["CRK", "MFM"], ["CRK", "SIN"], ["CRL", "DUB"], ["CRL", "EDI"], ["CRL", "EGC"], ["CRL", "FAO"], ["CRL", "FEZ"], ["CRL", "FNI"], ["CRL", "FSC"], ["CRL", "FUE"], ["CRL", "GOA"], ["CRL", "GRO"], ["CRL", "IBZ"], ["CRL", "KRK"], ["CRL", "LEI"], ["CRL", "LJU"], ["CRL", "LPA"], ["CRL", "LRH"], ["CRL", "MAD"], ["CRL", "MAN"], ["CRL", "MPL"], ["CRL", "MRS"], ["CRL", "NDR"], ["CRL", "NYO"], ["CRL", "OPO"], ["CRL", "OTP"], ["CRL", "OUD"], ["CRL", "PEG"], ["CRL", "PFO"], ["CRL", "PGF"], ["CRL", "PMI"], ["CRL", "PSA"], ["CRL", "PSR"], ["CRL", "PUY"], ["CRL", "RAK"], ["CRL", "RBA"], ["CRL", "RDZ"], ["CRL", "REU"], ["CRL", "RHO"], ["CRL", "RYG"], ["CRL", "SAW"], ["CRL", "SDR"], ["CRL", "SKG"], ["CRL", "SKP"], ["CRL", "SOF"], ["CRL", "SUF"], ["CRL", "SVQ"], ["CRL", "TFS"], ["CRL", "TGD"], ["CRL", "TNG"], ["CRL", "TPS"], ["CRL", "TRN"], ["CRL", "TRS"], ["CRL", "TSF"], ["CRL", "VLC"], ["CRL", "VNO"], ["CRL", "VOL"], ["CRL", "WAW"], ["CRL", "WMI"], ["CRL", "ZAD"], ["CRL", "ZAZ"], ["CRL", "ZTH"], ["CRM", "MNL"], ["CRP", "DFW"], ["CRP", "HOU"], ["CRP", "IAH"], ["CRP", "LBB"], ["CRW", "DCA"], ["CRW", "DFW"], ["CRW", "DTW"], ["CRW", "IAD"], ["CRW", "IAH"], ["CRW", "MYR"], ["CRW", "ORD"], ["CSK", "DKR"], ["CSK", "ZIG"], ["CSX", "CTU"], ["CSX", "CZX"], ["CSX", "DLC"], ["CSX", "DMK"], ["CSX", "DSN"], ["CSX", "DYG"], ["CSX", "FOC"], ["CSX", "HAK"], ["CSX", "HET"], ["CSX", "HFE"], ["CSX", "HGH"], ["CSX", "HJJ"], ["CSX", "HKG"], ["CSX", "HRB"], ["CSX", "HYN"], ["CSX", "ICN"], ["CSX", "JJN"], ["CSX", "KHH"], ["CSX", "KMG"], ["CSX", "KWE"], ["CSX", "LHW"], ["CSX", "LJG"], ["CSX", "LLF"], ["CSX", "LYI"], ["CSX", "LZH"], ["CSX", "LZO"], ["CSX", "MIG"], ["CSX", "NAY"], ["CSX", "NGB"], ["CSX", "NKG"], ["CSX", "NNG"], ["CSX", "PEK"], ["CSX", "PUS"], ["CSX", "PVG"], ["CSX", "RMQ"], ["CSX", "SHA"], ["CSX", "SHE"], ["CSX", "SIN"], ["CSX", "SJW"], ["CSX", "SWA"], ["CSX", "SYX"], ["CSX", "SZX"], ["CSX", "TAO"], ["CSX", "TEN"], ["CSX", "TNA"], ["CSX", "TPE"], ["CSX", "TSN"], ["CSX", "TXN"], ["CSX", "TYN"], ["CSX", "URC"], ["CSX", "WNZ"], ["CSX", "WUX"], ["CSX", "XIY"], ["CSX", "XMN"], ["CSX", "XNN"], ["CSX", "XUZ"], ["CSX", "YCU"], ["CSX", "YNT"], ["CSX", "YNZ"], ["CSX", "YTY"], ["CSX", "ZHA"], ["CSX", "ZUH"], ["CSX", "ZYI"], ["CSY", "DME"], ["CSY", "LED"], ["CTA", "DUB"], ["CTA", "DUS"], ["CTA", "EIN"], ["CTA", "FCO"], ["CTA", "FLR"], ["CTA", "FRA"], ["CTA", "GOA"], ["CTA", "GVA"], ["CTA", "HAJ"], ["CTA", "HAM"], ["CTA", "LGW"], ["CTA", "LIN"], ["CTA", "LMP"], ["CTA", "LTN"], ["CTA", "LUX"], ["CTA", "LYS"], ["CTA", "MAD"], ["CTA", "MAN"], ["CTA", "MLA"], ["CTA", "MRS"], ["CTA", "MUC"], ["CTA", "MXP"], ["CTA", "NAP"], ["CTA", "ORY"], ["CTA", "OTP"], ["CTA", "PMO"], ["CTA", "PSA"], ["CTA", "STR"], ["CTA", "SUF"], ["CTA", "SVO"], ["CTA", "TRN"], ["CTA", "TSF"], ["CTA", "TXL"], ["CTA", "VCE"], ["CTA", "VIE"], ["CTA", "VRN"], ["CTA", "ZRH"], ["CTG", "FLL"], ["CTG", "JFK"], ["CTG", "MDE"], ["CTG", "MIA"], ["CTG", "PTY"], ["CTL", "RMA"], ["CTL", "TWB"], ["CTL", "ULP"], ["CTM", "MEX"], ["CTS", "FKS"], ["CTS", "FUK"], ["CTS", "GUM"], ["CTS", "HIJ"], ["CTS", "HKD"], ["CTS", "HKG"], ["CTS", "HNA"], ["CTS", "HND"], ["CTS", "HNL"], ["CTS", "IBR"], ["CTS", "ICN"], ["CTS", "ITM"], ["CTS", "KIJ"], ["CTS", "KIX"], ["CTS", "KMQ"], ["CTS", "KUH"], ["CTS", "MMB"], ["CTS", "MMJ"], ["CTS", "NGO"], ["CTS", "NRT"], ["CTS", "OKA"], ["CTS", "OKJ"], ["CTS", "PEK"], ["CTS", "PUS"], ["CTS", "PVG"], ["CTS", "SDJ"], ["CTS", "SHB"], ["CTS", "TOY"], ["CTS", "TPE"], ["CTS", "UKB"], ["CTS", "UUS"], ["CTS", "WKJ"], ["CTS", "YGJ"], ["CTU", "CZX"], ["CTU", "DAD"], ["CTU", "DCY"], ["CTU", "DIG"], ["CTU", "DLU"], ["CTU", "DOH"], ["CTU", "DSN"], ["CTU", "FOC"], ["CTU", "FRA"], ["CTU", "HAK"], ["CTU", "HAN"], ["CTU", "HDG"], ["CTU", "HET"], ["CTU", "HFE"], ["CTU", "HGH"], ["CTU", "HKG"], ["CTU", "HKT"], ["CTU", "HRB"], ["CTU", "ICN"], ["CTU", "JDZ"], ["CTU", "JGS"], ["CTU", "JHG"], ["CTU", "JIQ"], ["CTU", "JJN"], ["CTU", "JNG"], ["CTU", "JUH"], ["CTU", "JZH"], ["CTU", "KGT"], ["CTU", "KHG"], ["CTU", "KHH"], ["CTU", "KHI"], ["CTU", "KHN"], ["CTU", "KMG"], ["CTU", "KOW"], ["CTU", "KRL"], ["CTU", "KTM"], ["CTU", "KUL"], ["CTU", "KWE"], ["CTU", "KWL"], ["CTU", "LHR"], ["CTU", "LHW"], ["CTU", "LJG"], ["CTU", "LUM"], ["CTU", "LXA"], ["CTU", "LYG"], ["CTU", "LZH"], ["CTU", "LZY"], ["CTU", "MEL"], ["CTU", "MFM"], ["CTU", "NAY"], ["CTU", "NGB"], ["CTU", "NKG"], ["CTU", "NNG"], ["CTU", "NNY"], ["CTU", "NRT"], ["CTU", "PEK"], ["CTU", "PVG"], ["CTU", "PZI"], ["CTU", "SHA"], ["CTU", "SHE"], ["CTU", "SIN"], ["CTU", "SJW"], ["CTU", "SWA"], ["CTU", "SYX"], ["CTU", "SZX"], ["CTU", "TAO"], ["CTU", "TCZ"], ["CTU", "TNA"], ["CTU", "TPE"], ["CTU", "TSA"], ["CTU", "TSN"], ["CTU", "TXN"], ["CTU", "TYN"], ["CTU", "URC"], ["CTU", "UYN"], ["CTU", "WNZ"], ["CTU", "WUH"], ["CTU", "WUX"], ["CTU", "WXN"], ["CTU", "XIC"], ["CTU", "XIY"], ["CTU", "XMN"], ["CTU", "XNN"], ["CTU", "XUZ"], ["CTU", "YCU"], ["CTU", "YIH"], ["CTU", "YIN"], ["CTU", "YIW"], ["CTU", "YNT"], ["CTU", "YTY"], ["CTU", "ZHA"], ["CTU", "ZUH"], ["CTU", "ZYI"], ["CUC", "MDE"], ["CUC", "PTY"], ["CUE", "GYE"], ["CUE", "UIO"], ["CUF", "OTP"], ["CUF", "TPS"], ["CUL", "GDL"], ["CUL", "HMO"], ["CUL", "LAP"], ["CUL", "MEX"], ["CUL", "MTY"], ["CUL", "SJD"], ["CUL", "TIJ"], ["CUN", "CUU"], ["CUN", "CVG"], ["CUN", "CZM"], ["CUN", "DEN"], ["CUN", "DFW"], ["CUN", "DTW"], ["CUN", "DUS"], ["CUN", "EWR"], ["CUN", "EZE"], ["CUN", "FCO"], ["CUN", "FLL"], ["CUN", "FRA"], ["CUN", "GDL"], ["CUN", "GLA"], ["CUN", "HAV"], ["CUN", "HMO"], ["CUN", "HOG"], ["CUN", "IAD"], ["CUN", "IAH"], ["CUN", "IND"], ["CUN", "JFK"], ["CUN", "LAX"], ["CUN", "LGW"], ["CUN", "LIM"], ["CUN", "MAD"], ["CUN", "MAN"], ["CUN", "MCI"], ["CUN", "MCO"], ["CUN", "MDW"], ["CUN", "MEX"], ["CUN", "MIA"], ["CUN", "MID"], ["CUN", "MKE"], ["CUN", "MSP"], ["CUN", "MTY"], ["CUN", "MXP"], ["CUN", "OAX"], ["CUN", "ORD"], ["CUN", "PBC"], ["CUN", "PHL"], ["CUN", "PHX"], ["CUN", "PIT"], ["CUN", "PTY"], ["CUN", "QRO"], ["CUN", "RDU"], ["CUN", "REX"], ["CUN", "SAL"], ["CUN", "SAT"], ["CUN", "SCL"], ["CUN", "SFO"], ["CUN", "SLC"], ["CUN", "SLP"], ["CUN", "STL"], ["CUN", "TAM"], ["CUN", "TGZ"], ["CUN", "TIJ"], ["CUN", "TLC"], ["CUN", "TRC"], ["CUN", "VER"], ["CUN", "VKO"], ["CUN", "VRA"], ["CUN", "VSA"], ["CUN", "YEG"], ["CUN", "YHZ"], ["CUN", "YQB"], ["CUN", "YUL"], ["CUN", "YVR"], ["CUN", "YYC"], ["CUN", "YYZ"], ["CUQ", "IRG"], ["CUR", "DUS"], ["CUR", "KIN"], ["CUR", "LSP"], ["CUR", "MAR"], ["CUR", "MDE"], ["CUR", "MIA"], ["CUR", "PBM"], ["CUR", "POS"], ["CUR", "PTY"], ["CUR", "SDQ"], ["CUR", "SXM"], ["CUR", "VLN"], ["CUU", "DFW"], ["CUU", "GDL"], ["CUU", "HMO"], ["CUU", "IAH"], ["CUU", "MEX"], ["CUU", "MTY"], ["CUU", "TIJ"], ["CUU", "TRC"], ["CUZ", "JUL"], ["CUZ", "LIM"], ["CUZ", "LPB"], ["CUZ", "PEM"], ["CVG", "DCA"], ["CVG", "DEN"], ["CVG", "DFW"], ["CVG", "DTW"], ["CVG", "EWR"], ["CVG", "FLL"], ["CVG", "GRR"], ["CVG", "IAD"], ["CVG", "IAH"], ["CVG", "JAX"], ["CVG", "JFK"], ["CVG", "LAS"], ["CVG", "LAX"], ["CVG", "LGA"], ["CVG", "MCI"], ["CVG", "MCO"], ["CVG", "MEM"], ["CVG", "MIA"], ["CVG", "MKE"], ["CVG", "MMU"], ["CVG", "MSN"], ["CVG", "MSP"], ["CVG", "MSY"], ["CVG", "ORD"], ["CVG", "PGD"], ["CVG", "PHL"], ["CVG", "PIT"], ["CVG", "PUJ"], ["CVG", "RDU"], ["CVG", "RIC"], ["CVG", "RSW"], ["CVG", "SFB"], ["CVG", "SFO"], ["CVG", "SLC"], ["CVG", "STL"], ["CVG", "TPA"], ["CVG", "TTN"], ["CVG", "XNA"], ["CVG", "YYZ"], ["CVM", "MEX"], ["CVU", "FLW"], ["CVU", "HOR"], ["CWA", "DTW"], ["CWA", "MSP"], ["CWA", "ORD"], ["CWB", "CXJ"], ["CWB", "EZE"], ["CWB", "FLN"], ["CWB", "GIG"], ["CWB", "GPB"], ["CWB", "GRU"], ["CWB", "IGU"], ["CWB", "LDB"], ["CWB", "MGF"], ["CWB", "MIA"], ["CWB", "MVD"], ["CWB", "POA"], ["CWB", "RAO"], ["CWB", "SDU"], ["CWB", "SSA"], ["CWB", "VCP"], ["CWB", "XAP"], ["CWL", "DLM"], ["CWL", "DUB"], ["CWL", "DUS"], ["CWL", "EDI"], ["CWL", "GLA"], ["CWL", "HER"], ["CWL", "JER"], ["CWL", "LCA"], ["CWL", "MLA"], ["CWL", "NBE"], ["CWL", "NCL"], ["CWL", "ORY"], ["CWL", "PMI"], ["CWL", "RHO"], ["CWL", "TFS"], ["CWL", "VLY"], ["CXB", "DAC"], ["CXH", "YWH"], ["CXI", "HNL"], ["CXI", "NAN"], ["CXJ", "VCP"], ["CXR", "DAD"], ["CXR", "DME"], ["CXR", "HAN"], ["CXR", "SGN"], ["CYB", "GCM"], ["CYB", "LYB"], ["CYB", "MIA"], ["CYF", "KPN"], ["CYO", "HAV"], ["CYO", "MXP"], ["CYO", "SCU"], ["CYO", "YUL"], ["CYP", "MNL"], ["CYS", "DEN"], ["CYS", "WRL"], ["CYX", "YKS"], ["CYZ", "MNL"], ["CZL", "GHA"], ["CZL", "HME"], ["CZL", "IST"], ["CZL", "LYS"], ["CZL", "MRS"], ["CZL", "NCE"], ["CZL", "ORN"], ["CZL", "ORY"], ["CZM", "DEN"], ["CZM", "DFW"], ["CZM", "IAH"], ["CZM", "MEX"], ["CZM", "MIA"], ["CZM", "YUL"], ["CZS", "RBR"], ["CZX", "DLC"], ["CZX", "DYG"], ["CZX", "FOC"], ["CZX", "HRB"], ["CZX", "KMG"], ["CZX", "KWL"], ["CZX", "NAY"], ["CZX", "PEK"], ["CZX", "SHE"], ["CZX", "SZX"], ["CZX", "TYN"], ["CZX", "XIY"], ["CZX", "XMN"], ["CZX", "ZUH"], ["DAC", "DEL"], ["DAC", "DMM"], ["DAC", "DOH"], ["DAC", "DXB"], ["DAC", "FCO"], ["DAC", "HKG"], ["DAC", "IST"], ["DAC", "JED"], ["DAC", "JSR"], ["DAC", "KHI"], ["DAC", "KMG"], ["DAC", "KTM"], ["DAC", "KUL"], ["DAC", "KWI"], ["DAC", "LHR"], ["DAC", "MAA"], ["DAC", "MCT"], ["DAC", "PBH"], ["DAC", "RGN"], ["DAC", "RJH"], ["DAC", "RUH"], ["DAC", "SHJ"], ["DAC", "SIN"], ["DAC", "SPD"], ["DAC", "ZYL"], ["DAD", "DLI"], ["DAD", "HAN"], ["DAD", "HGH"], ["DAD", "HKG"], ["DAD", "HPH"], ["DAD", "ICN"], ["DAD", "KMG"], ["DAD", "MFM"], ["DAD", "PVG"], ["DAD", "PXU"], ["DAD", "REP"], ["DAD", "SGN"], ["DAD", "SIN"], ["DAD", "VII"], ["DAD", "WNZ"], ["DAD", "XMN"], ["DAL", "ELD"], ["DAL", "ELP"], ["DAL", "HOU"], ["DAL", "HRL"], ["DAL", "IAH"], ["DAL", "ICT"], ["DAL", "LBB"], ["DAL", "LIT"], ["DAL", "MAF"], ["DAL", "MCI"], ["DAL", "MSY"], ["DAL", "OKC"], ["DAL", "SAT"], ["DAL", "SEA"], ["DAL", "SFO"], ["DAL", "SLC"], ["DAL", "STL"], ["DAL", "TUL"], ["DAR", "DOH"], ["DAR", "DXB"], ["DAR", "DZA"], ["DAR", "EBB"], ["DAR", "HAH"], ["DAR", "HRE"], ["DAR", "IST"], ["DAR", "JNB"], ["DAR", "JRO"], ["DAR", "KGL"], ["DAR", "LLW"], ["DAR", "MBI"], ["DAR", "MCT"], ["DAR", "MWZ"], ["DAR", "MYW"], ["DAR", "NBO"], ["DAR", "POL"], ["DAR", "ZNZ"], ["DAT", "NAY"], ["DAT", "PEK"], ["DAT", "PVG"], ["DAT", "SHE"], ["DAT", "TYN"], ["DAT", "XIY"], ["DAU", "LAE"], ["DAU", "POM"], ["DAU", "UNG"], ["DAV", "PAC"], ["DAV", "SJO"], ["DAX", "KMG"], ["DAX", "PEK"], ["DAX", "PVG"], ["DAX", "SZX"], ["DAY", "DCA"], ["DAY", "DEN"], ["DAY", "DFW"], ["DAY", "DTW"], ["DAY", "EWR"], ["DAY", "IAD"], ["DAY", "LGA"], ["DAY", "MCO"], ["DAY", "MSP"], ["DAY", "ORD"], ["DAY", "PHL"], ["DAY", "TPA"], ["DBA", "KHI"], ["DBA", "TUK"], ["DBO", "SYD"], ["DBQ", "ORD"], ["DBV", "DUB"], ["DBV", "DUS"], ["DBV", "EDI"], ["DBV", "EMA"], ["DBV", "FCO"], ["DBV", "FRA"], ["DBV", "GVA"], ["DBV", "HAJ"], ["DBV", "HAM"], ["DBV", "HEL"], ["DBV", "LBA"], ["DBV", "LGW"], ["DBV", "LIL"], ["DBV", "LUX"], ["DBV", "MAN"], ["DBV", "MUC"], ["DBV", "NCL"], ["DBV", "ORY"], ["DBV", "OSI"], ["DBV", "OSL"], ["DBV", "RJK"], ["DBV", "SPU"], ["DBV", "STN"], ["DBV", "STR"], ["DBV", "TRD"], ["DBV", "TRF"], ["DBV", "TXL"], ["DBV", "VCE"], ["DBV", "VIE"], ["DBV", "WAW"], ["DBV", "ZAG"], ["DBV", "ZRH"], ["DCA", "DEN"], ["DCA", "DFW"], ["DCA", "DSM"], ["DCA", "DTW"], ["DCA", "EWR"], ["DCA", "FAY"], ["DCA", "FLL"], ["DCA", "GSO"], ["DCA", "GSP"], ["DCA", "HHH"], ["DCA", "HOU"], ["DCA", "HPN"], ["DCA", "HSV"], ["DCA", "IAH"], ["DCA", "ILM"], ["DCA", "IND"], ["DCA", "ISP"], ["DCA", "JAN"], ["DCA", "JAX"], ["DCA", "JFK"], ["DCA", "LAN"], ["DCA", "LAS"], ["DCA", "LAX"], ["DCA", "LEX"], ["DCA", "LGA"], ["DCA", "LIT"], ["DCA", "MCI"], ["DCA", "MCO"], ["DCA", "MEM"], ["DCA", "MHT"], ["DCA", "MIA"], ["DCA", "MKE"], ["DCA", "MSN"], ["DCA", "MSP"], ["DCA", "MSY"], ["DCA", "MYR"], ["DCA", "NAS"], ["DCA", "OAJ"], ["DCA", "OMA"], ["DCA", "ORD"], ["DCA", "ORF"], ["DCA", "PBI"], ["DCA", "PDX"], ["DCA", "PHL"], ["DCA", "PHX"], ["DCA", "PIT"], ["DCA", "PNS"], ["DCA", "PVD"], ["DCA", "PWM"], ["DCA", "RDU"], ["DCA", "ROC"], ["DCA", "RSW"], ["DCA", "SAN"], ["DCA", "SAV"], ["DCA", "SDF"], ["DCA", "SEA"], ["DCA", "SFO"], ["DCA", "SJU"], ["DCA", "SLC"], ["DCA", "SRQ"], ["DCA", "STL"], ["DCA", "SYR"], ["DCA", "TLH"], ["DCA", "TPA"], ["DCA", "TYS"], ["DCA", "VPS"], ["DCA", "YHZ"], ["DCA", "YOW"], ["DCA", "YUL"], ["DCA", "YYZ"], ["DCM", "ORY"], ["DCN", "PER"], ["DDC", "DEN"], ["DDC", "LBL"], ["DDG", "PEK"], ["DDG", "PVG"], ["DDG", "TAO"], ["DEA", "KHI"], ["DEA", "LHE"], ["DEA", "SHJ"], ["DEB", "EIN"], ["DEB", "LTN"], ["DEC", "ORD"], ["DEC", "STL"], ["DED", "DEL"], ["DED", "LKO"], ["DEE", "UUS"], ["DEF", "THR"], ["DEL", "DHM"], ["DEL", "DIB"], ["DEL", "DMM"], ["DEL", "DOH"], ["DEL", "DXB"], ["DEL", "DYU"], ["DEL", "EWR"], ["DEL", "FCO"], ["DEL", "FRA"], ["DEL", "GAU"], ["DEL", "GOI"], ["DEL", "GOP"], ["DEL", "HEA"], ["DEL", "HEL"], ["DEL", "HKG"], ["DEL", "HYD"], ["DEL", "IAD"], ["DEL", "ICN"], ["DEL", "IDR"], ["DEL", "IKA"], ["DEL", "IST"], ["DEL", "IXB"], ["DEL", "IXC"], ["DEL", "IXD"], ["DEL", "IXJ"], ["DEL", "IXL"], ["DEL", "IXR"], ["DEL", "IXU"], ["DEL", "IXZ"], ["DEL", "JAI"], ["DEL", "JDH"], ["DEL", "JED"], ["DEL", "JFK"], ["DEL", "JLR"], ["DEL", "KBL"], ["DEL", "KDH"], ["DEL", "KHI"], ["DEL", "KNU"], ["DEL", "KTM"], ["DEL", "KUL"], ["DEL", "KUU"], ["DEL", "KWI"], ["DEL", "LHE"], ["DEL", "LHR"], ["DEL", "LKO"], ["DEL", "LUH"], ["DEL", "MAA"], ["DEL", "MCT"], ["DEL", "MEL"], ["DEL", "MRU"], ["DEL", "MUC"], ["DEL", "NAG"], ["DEL", "NBO"], ["DEL", "NRT"], ["DEL", "ORD"], ["DEL", "PAT"], ["DEL", "PEK"], ["DEL", "PNQ"], ["DEL", "PVG"], ["DEL", "RPR"], ["DEL", "RUH"], ["DEL", "SFO"], ["DEL", "SHJ"], ["DEL", "SIN"], ["DEL", "STV"], ["DEL", "SVO"], ["DEL", "SXR"], ["DEL", "SYD"], ["DEL", "TAS"], ["DEL", "TPE"], ["DEL", "UDR"], ["DEL", "VIE"], ["DEL", "VNS"], ["DEL", "VTZ"], ["DEL", "ZRH"], ["DEN", "DFW"], ["DEN", "DIK"], ["DEN", "DRO"], ["DEN", "DSM"], ["DEN", "DTW"], ["DEN", "EGE"], ["DEN", "ELP"], ["DEN", "EUG"], ["DEN", "EWR"], ["DEN", "FAR"], ["DEN", "FAT"], ["DEN", "FCA"], ["DEN", "FLL"], ["DEN", "FMN"], ["DEN", "FRA"], ["DEN", "FSD"], ["DEN", "GCC"], ["DEN", "GEG"], ["DEN", "GJT"], ["DEN", "GRR"], ["DEN", "GSO"], ["DEN", "GTF"], ["DEN", "GUC"], ["DEN", "HDN"], ["DEN", "HLN"], ["DEN", "HNL"], ["DEN", "HOU"], ["DEN", "HSV"], ["DEN", "IAD"], ["DEN", "IAH"], ["DEN", "ICT"], ["DEN", "IDA"], ["DEN", "ILG"], ["DEN", "IND"], ["DEN", "ISN"], ["DEN", "JAC"], ["DEN", "JAX"], ["DEN", "JFK"], ["DEN", "KEF"], ["DEN", "KOA"], ["DEN", "LAR"], ["DEN", "LAS"], ["DEN", "LAX"], ["DEN", "LBB"], ["DEN", "LBF"], ["DEN", "LBL"], ["DEN", "LGA"], ["DEN", "LHR"], ["DEN", "LIH"], ["DEN", "LIR"], ["DEN", "LIT"], ["DEN", "LNK"], ["DEN", "MAF"], ["DEN", "MCI"], ["DEN", "MCK"], ["DEN", "MCO"], ["DEN", "MDT"], ["DEN", "MDW"], ["DEN", "MEM"], ["DEN", "MEX"], ["DEN", "MFR"], ["DEN", "MIA"], ["DEN", "MKE"], ["DEN", "MLI"], ["DEN", "MOT"], ["DEN", "MRY"], ["DEN", "MSN"], ["DEN", "MSO"], ["DEN", "MSP"], ["DEN", "MSY"], ["DEN", "MTJ"], ["DEN", "NRT"], ["DEN", "OAK"], ["DEN", "OGG"], ["DEN", "OKC"], ["DEN", "OMA"], ["DEN", "ONT"], ["DEN", "ORD"], ["DEN", "ORF"], ["DEN", "PDX"], ["DEN", "PGA"], ["DEN", "PHF"], ["DEN", "PHL"], ["DEN", "PHX"], ["DEN", "PIA"], ["DEN", "PIR"], ["DEN", "PIT"], ["DEN", "PSC"], ["DEN", "PSP"], ["DEN", "PUB"], ["DEN", "PVR"], ["DEN", "RAP"], ["DEN", "RDM"], ["DEN", "RDU"], ["DEN", "RIW"], ["DEN", "RKS"], ["DEN", "RNO"], ["DEN", "RSW"], ["DEN", "SAF"], ["DEN", "SAN"], ["DEN", "SAT"], ["DEN", "SBA"], ["DEN", "SDF"], ["DEN", "SEA"], ["DEN", "SFO"], ["DEN", "SGF"], ["DEN", "SGU"], ["DEN", "SHR"], ["DEN", "SHV"], ["DEN", "SJC"], ["DEN", "SJD"], ["DEN", "SJO"], ["DEN", "SLC"], ["DEN", "SMF"], ["DEN", "SNA"], ["DEN", "STL"], ["DEN", "TPA"], ["DEN", "TUL"], ["DEN", "TUS"], ["DEN", "TYS"], ["DEN", "XNA"], ["DEN", "YEG"], ["DEN", "YMM"], ["DEN", "YQR"], ["DEN", "YUL"], ["DEN", "YVR"], ["DEN", "YWG"], ["DEN", "YXE"], ["DEN", "YYC"], ["DEN", "YYZ"], ["DFW", "DRO"], ["DFW", "DSM"], ["DFW", "DTW"], ["DFW", "DXB"], ["DFW", "ELP"], ["DFW", "EVV"], ["DFW", "EWR"], ["DFW", "EZE"], ["DFW", "FAR"], ["DFW", "FAT"], ["DFW", "FLL"], ["DFW", "FRA"], ["DFW", "FSD"], ["DFW", "FSM"], ["DFW", "FWA"], ["DFW", "GCK"], ["DFW", "GDL"], ["DFW", "GGG"], ["DFW", "GIG"], ["DFW", "GJT"], ["DFW", "GPT"], ["DFW", "GRI"], ["DFW", "GRK"], ["DFW", "GRR"], ["DFW", "GRU"], ["DFW", "GSO"], ["DFW", "GSP"], ["DFW", "GUA"], ["DFW", "HNL"], ["DFW", "HOU"], ["DFW", "HSV"], ["DFW", "IAD"], ["DFW", "IAH"], ["DFW", "ICN"], ["DFW", "ICT"], ["DFW", "IND"], ["DFW", "JAN"], ["DFW", "JAX"], ["DFW", "JFK"], ["DFW", "JLN"], ["DFW", "LAS"], ["DFW", "LAW"], ["DFW", "LAX"], ["DFW", "LBB"], ["DFW", "LCH"], ["DFW", "LEX"], ["DFW", "LFT"], ["DFW", "LGA"], ["DFW", "LHR"], ["DFW", "LIM"], ["DFW", "LIR"], ["DFW", "LIT"], ["DFW", "LRD"], ["DFW", "MAD"], ["DFW", "MAF"], ["DFW", "MBJ"], ["DFW", "MCI"], ["DFW", "MCO"], ["DFW", "MEL"], ["DFW", "MEM"], ["DFW", "MEX"], ["DFW", "MFE"], ["DFW", "MGM"], ["DFW", "MHK"], ["DFW", "MIA"], ["DFW", "MKE"], ["DFW", "MLI"], ["DFW", "MLM"], ["DFW", "MLU"], ["DFW", "MOB"], ["DFW", "MSN"], ["DFW", "MSP"], ["DFW", "MSY"], ["DFW", "MTY"], ["DFW", "MYR"], ["DFW", "MZT"], ["DFW", "NAS"], ["DFW", "NRT"], ["DFW", "OAK"], ["DFW", "OGG"], ["DFW", "OKC"], ["DFW", "OMA"], ["DFW", "ONT"], ["DFW", "ORD"], ["DFW", "ORF"], ["DFW", "PBC"], ["DFW", "PBI"], ["DFW", "PDX"], ["DFW", "PHL"], ["DFW", "PHX"], ["DFW", "PIA"], ["DFW", "PIT"], ["DFW", "PLS"], ["DFW", "PNS"], ["DFW", "PSP"], ["DFW", "PTY"], ["DFW", "PVR"], ["DFW", "QRO"], ["DFW", "RAP"], ["DFW", "RDU"], ["DFW", "RIC"], ["DFW", "RNO"], ["DFW", "ROW"], ["DFW", "RSW"], ["DFW", "RTB"], ["DFW", "SAF"], ["DFW", "SAL"], ["DFW", "SAN"], ["DFW", "SAT"], ["DFW", "SAV"], ["DFW", "SCL"], ["DFW", "SDF"], ["DFW", "SEA"], ["DFW", "SFO"], ["DFW", "SGF"], ["DFW", "SHV"], ["DFW", "SJC"], ["DFW", "SJD"], ["DFW", "SJO"], ["DFW", "SJT"], ["DFW", "SJU"], ["DFW", "SLC"], ["DFW", "SLP"], ["DFW", "SMF"], ["DFW", "SNA"], ["DFW", "SPI"], ["DFW", "SPS"], ["DFW", "STL"], ["DFW", "SYD"], ["DFW", "TLH"], ["DFW", "TPA"], ["DFW", "TRC"], ["DFW", "TUL"], ["DFW", "TUS"], ["DFW", "TXK"], ["DFW", "TYR"], ["DFW", "TYS"], ["DFW", "VPS"], ["DFW", "XNA"], ["DFW", "YEG"], ["DFW", "YUL"], ["DFW", "YVR"], ["DFW", "YYC"], ["DFW", "YYZ"], ["DFW", "ZCL"], ["DGO", "IAH"], ["DGO", "LAX"], ["DGO", "MEX"], ["DGO", "TIJ"], ["DGT", "MNL"], ["DHI", "KTM"], ["DIB", "DMU"], ["DIB", "GAU"], ["DIE", "DZA"], ["DIE", "NOS"], ["DIE", "RUN"], ["DIE", "SVB"], ["DIE", "TNR"], ["DIG", "JHG"], ["DIG", "KMG"], ["DIG", "LXA"], ["DIJ", "TLS"], ["DIK", "MSP"], ["DIL", "DPS"], ["DIL", "DRW"], ["DIL", "SIN"], ["DIN", "HAN"], ["DIR", "JIB"], ["DIR", "JIJ"], ["DIU", "PBD"], ["DIY", "ESB"], ["DIY", "IST"], ["DIY", "SAW"], ["DJE", "DUS"], ["DJE", "FRA"], ["DJE", "GVA"], ["DJE", "HAM"], ["DJE", "LEJ"], ["DJE", "LIL"], ["DJE", "LUX"], ["DJE", "LYS"], ["DJE", "MAD"], ["DJE", "MRS"], ["DJE", "MUC"], ["DJE", "NBE"], ["DJE", "NCE"], ["DJE", "NTE"], ["DJE", "NUE"], ["DJE", "ORY"], ["DJE", "SXB"], ["DJE", "SXF"], ["DJE", "TIP"], ["DJE", "TUN"], ["DJE", "ZRH"], ["DJG", "OGX"], ["DJG", "TMR"], ["DJJ", "MKQ"], ["DJJ", "MKW"], ["DJJ", "NBX"], ["DJJ", "OKL"], ["DJJ", "TIM"], ["DJJ", "UPG"], ["DJJ", "WMX"], ["DKR", "DLA"], ["DKR", "DXB"], ["DKR", "FNA"], ["DKR", "IAD"], ["DKR", "IST"], ["DKR", "JFK"], ["DKR", "JNB"], ["DKR", "LIS"], ["DKR", "LOS"], ["DKR", "LPA"], ["DKR", "MAD"], ["DKR", "MXP"], ["DKR", "NKC"], ["DKR", "ORY"], ["DKR", "OUA"], ["DKR", "OXB"], ["DKR", "RAI"], ["DKR", "TFN"], ["DKR", "TUN"], ["DKR", "ZIG"], ["DLA", "FIH"], ["DLA", "GOU"], ["DLA", "IST"], ["DLA", "LBV"], ["DLA", "LFW"], ["DLA", "LOS"], ["DLA", "MVR"], ["DLA", "NBO"], ["DLA", "NDJ"], ["DLA", "NSI"], ["DLA", "PNR"], ["DLA", "SSG"], ["DLC", "DOY"], ["DLC", "FOC"], ["DLC", "FUG"], ["DLC", "FUK"], ["DLC", "HDG"], ["DLC", "HET"], ["DLC", "HFE"], ["DLC", "HGH"], ["DLC", "HIA"], ["DLC", "HIJ"], ["DLC", "HKG"], ["DLC", "HRB"], ["DLC", "ICN"], ["DLC", "JMU"], ["DLC", "JNG"], ["DLC", "KHN"], ["DLC", "KIX"], ["DLC", "KMG"], ["DLC", "LDS"], ["DLC", "LYA"], ["DLC", "LYG"], ["DLC", "LYI"], ["DLC", "MDG"], ["DLC", "NGB"], ["DLC", "NGO"], ["DLC", "NKG"], ["DLC", "NRT"], ["DLC", "PEK"], ["DLC", "PVG"], ["DLC", "SHP"], ["DLC", "SJW"], ["DLC", "SZX"], ["DLC", "TAO"], ["DLC", "TNA"], ["DLC", "TOY"], ["DLC", "TPE"], ["DLC", "TSN"], ["DLC", "TXN"], ["DLC", "TYN"], ["DLC", "WEF"], ["DLC", "WUH"], ["DLC", "WUX"], ["DLC", "XIY"], ["DLC", "XMN"], ["DLC", "XUZ"], ["DLC", "YNJ"], ["DLC", "YNT"], ["DLC", "YNZ"], ["DLC", "YTY"], ["DLE", "LIS"], ["DLE", "OPO"], ["DLE", "RAK"], ["DLH", "LAS"], ["DLH", "MSP"], ["DLH", "ORD"], ["DLI", "HAN"], ["DLI", "SGN"], ["DLM", "DME"], ["DLM", "DUS"], ["DLM", "EDI"], ["DLM", "EIN"], ["DLM", "EMA"], ["DLM", "FRA"], ["DLM", "GLA"], ["DLM", "HAJ"], ["DLM", "HAM"], ["DLM", "IST"], ["DLM", "LBA"], ["DLM", "LGW"], ["DLM", "LTN"], ["DLM", "MAN"], ["DLM", "MUC"], ["DLM", "NCL"], ["DLM", "RTM"], ["DLM", "SAW"], ["DLM", "STN"], ["DLM", "STR"], ["DLM", "SXF"], ["DLM", "VIE"], ["DLM", "VKO"], ["DLU", "JHG"], ["DLU", "KMG"], ["DLU", "KWE"], ["DLY", "IPA"], ["DLY", "VLI"], ["DLZ", "ULN"], ["DMB", "DME"], ["DMB", "KQT"], ["DMB", "SVX"], ["DMB", "TSE"], ["DMD", "ISA"], ["DMD", "ONG"], ["DME", "DNK"], ["DME", "DOH"], ["DME", "DOK"], ["DME", "DUS"], ["DME", "DWC"], ["DME", "DXB"], ["DME", "DYR"], ["DME", "DYU"], ["DME", "EGO"], ["DME", "ESL"], ["DME", "EVN"], ["DME", "FCO"], ["DME", "FEG"], ["DME", "FKB"], ["DME", "FRA"], ["DME", "FRU"], ["DME", "GBB"], ["DME", "GDX"], ["DME", "GOA"], ["DME", "GOI"], ["DME", "GOJ"], ["DME", "GVA"], ["DME", "GYD"], ["DME", "HAN"], ["DME", "HEL"], ["DME", "HER"], ["DME", "HKG"], ["DME", "HKT"], ["DME", "HMA"], ["DME", "HRG"], ["DME", "HTA"], ["DME", "IAH"], ["DME", "IEV"], ["DME", "IJK"], ["DME", "IKT"], ["DME", "KBP"], ["DME", "KEJ"], ["DME", "KGD"], ["DME", "KGF"], ["DME", "KGS"], ["DME", "KHV"], ["DME", "KIV"], ["DME", "KJA"], ["DME", "KOV"], ["DME", "KQT"], ["DME", "KRO"], ["DME", "KRR"], ["DME", "KSQ"], ["DME", "KUF"], ["DME", "KVD"], ["DME", "KVK"], ["DME", "KZN"], ["DME", "LBD"], ["DME", "LCA"], ["DME", "LED"], ["DME", "LEJ"], ["DME", "LGW"], ["DME", "LHR"], ["DME", "LIS"], ["DME", "LLK"], ["DME", "LWN"], ["DME", "MAD"], ["DME", "MAN"], ["DME", "MCX"], ["DME", "MJZ"], ["DME", "MLA"], ["DME", "MRV"], ["DME", "MSQ"], ["DME", "MUC"], ["DME", "MXP"], ["DME", "NBC"], ["DME", "NBE"], ["DME", "NCE"], ["DME", "NCU"], ["DME", "NJC"], ["DME", "NMA"], ["DME", "NOJ"], ["DME", "NOZ"], ["DME", "NRT"], ["DME", "NSK"], ["DME", "NUX"], ["DME", "NVI"], ["DME", "NYM"], ["DME", "ODS"], ["DME", "OGZ"], ["DME", "OMS"], ["DME", "OSS"], ["DME", "OSW"], ["DME", "OVB"], ["DME", "PED"], ["DME", "PEE"], ["DME", "PES"], ["DME", "PEZ"], ["DME", "PFO"], ["DME", "PKC"], ["DME", "PMI"], ["DME", "PUJ"], ["DME", "PUY"], ["DME", "PWQ"], ["DME", "PYJ"], ["DME", "REN"], ["DME", "RGK"], ["DME", "RHO"], ["DME", "RIX"], ["DME", "RMI"], ["DME", "ROV"], ["DME", "RTW"], ["DME", "SAW"], ["DME", "SCO"], ["DME", "SGC"], ["DME", "SGN"], ["DME", "SHJ"], ["DME", "SIN"], ["DME", "SIP"], ["DME", "SKD"], ["DME", "SKG"], ["DME", "SKX"], ["DME", "SLY"], ["DME", "SSH"], ["DME", "STW"], ["DME", "SVX"], ["DME", "SYX"], ["DME", "TAS"], ["DME", "TBS"], ["DME", "TFS"], ["DME", "TGD"], ["DME", "TGK"], ["DME", "TIV"], ["DME", "TJM"], ["DME", "TJU"], ["DME", "TLV"], ["DME", "TMJ"], ["DME", "TOF"], ["DME", "TSE"], ["DME", "TUN"], ["DME", "TXL"], ["DME", "UFA"], ["DME", "UGC"], ["DME", "UKK"], ["DME", "UKS"], ["DME", "ULV"], ["DME", "UUA"], ["DME", "UUD"], ["DME", "UUS"], ["DME", "VAR"], ["DME", "VIE"], ["DME", "VKT"], ["DME", "VLC"], ["DME", "VNO"], ["DME", "VOG"], ["DME", "VOZ"], ["DME", "VRA"], ["DME", "VRN"], ["DME", "VVO"], ["DME", "YKS"], ["DME", "ZRH"], ["DMK", "DPS"], ["DMK", "HAN"], ["DMK", "HDY"], ["DMK", "HGH"], ["DMK", "HKG"], ["DMK", "HKT"], ["DMK", "KBV"], ["DMK", "KHN"], ["DMK", "KKC"], ["DMK", "KMG"], ["DMK", "KOP"], ["DMK", "KUL"], ["DMK", "LOE"], ["DMK", "MAA"], ["DMK", "MAQ"], ["DMK", "MDL"], ["DMK", "MFM"], ["DMK", "NAW"], ["DMK", "NGB"], ["DMK", "NNT"], ["DMK", "NST"], ["DMK", "PEN"], ["DMK", "PHS"], ["DMK", "PNH"], ["DMK", "PRH"], ["DMK", "REP"], ["DMK", "RGN"], ["DMK", "ROI"], ["DMK", "SGN"], ["DMK", "SIN"], ["DMK", "SNO"], ["DMK", "SUB"], ["DMK", "SZX"], ["DMK", "TST"], ["DMK", "UBP"], ["DMK", "UNN"], ["DMK", "URT"], ["DMK", "UTH"], ["DMK", "WUH"], ["DMK", "XIY"], ["DMM", "DOH"], ["DMM", "DWC"], ["DMM", "DXB"], ["DMM", "EAM"], ["DMM", "ELQ"], ["DMM", "FRA"], ["DMM", "GIZ"], ["DMM", "HAS"], ["DMM", "HBE"], ["DMM", "HYD"], ["DMM", "ISB"], ["DMM", "IST"], ["DMM", "IXE"], ["DMM", "JED"], ["DMM", "KHI"], ["DMM", "KWI"], ["DMM", "LHE"], ["DMM", "MAA"], ["DMM", "MCT"], ["DMM", "MED"], ["DMM", "MHD"], ["DMM", "MNL"], ["DMM", "RUH"], ["DMM", "SHJ"], ["DMM", "SKT"], ["DMM", "TAI"], ["DMM", "TIF"], ["DMM", "TRV"], ["DMM", "TUU"], ["DMM", "YNB"], ["DND", "STN"], ["DNH", "HGH"], ["DNH", "LHW"], ["DNH", "URC"], ["DNH", "XIY"], ["DNK", "EVN"], ["DNK", "IST"], ["DNK", "KBP"], ["DNK", "SVO"], ["DNK", "TBS"], ["DNK", "TLV"], ["DNK", "VIE"], ["DNR", "EMA"], ["DNR", "GCI"], ["DNR", "STN"], ["DNZ", "IST"], ["DNZ", "SAW"], ["DOB", "LUV"], ["DOH", "DWC"], ["DOH", "DXB"], ["DOH", "EBB"], ["DOH", "EBL"], ["DOH", "ELQ"], ["DOH", "ESB"], ["DOH", "FCO"], ["DOH", "FRA"], ["DOH", "GOI"], ["DOH", "GRU"], ["DOH", "GVA"], ["DOH", "GYD"], ["DOH", "HBE"], ["DOH", "HGH"], ["DOH", "HKG"], ["DOH", "HYD"], ["DOH", "IAD"], ["DOH", "IAH"], ["DOH", "ICN"], ["DOH", "IKA"], ["DOH", "ISB"], ["DOH", "IST"], ["DOH", "ISU"], ["DOH", "IXE"], ["DOH", "JED"], ["DOH", "JFK"], ["DOH", "JNB"], ["DOH", "KHI"], ["DOH", "KIX"], ["DOH", "KRT"], ["DOH", "KTM"], ["DOH", "KUL"], ["DOH", "KWI"], ["DOH", "LCA"], ["DOH", "LHE"], ["DOH", "LHR"], ["DOH", "LOS"], ["DOH", "LRR"], ["DOH", "LXR"], ["DOH", "MAA"], ["DOH", "MAD"], ["DOH", "MAN"], ["DOH", "MCT"], ["DOH", "MED"], ["DOH", "MEL"], ["DOH", "MHD"], ["DOH", "MLE"], ["DOH", "MNL"], ["DOH", "MUC"], ["DOH", "MXP"], ["DOH", "NBO"], ["DOH", "NJF"], ["DOH", "NRT"], ["DOH", "ORD"], ["DOH", "OSL"], ["DOH", "OTP"], ["DOH", "PEK"], ["DOH", "PER"], ["DOH", "PEW"], ["DOH", "PHL"], ["DOH", "PVG"], ["DOH", "RGN"], ["DOH", "RUH"], ["DOH", "SAH"], ["DOH", "SAW"], ["DOH", "SGN"], ["DOH", "SHJ"], ["DOH", "SIN"], ["DOH", "SLL"], ["DOH", "SYZ"], ["DOH", "TIF"], ["DOH", "TRV"], ["DOH", "TUN"], ["DOH", "TXL"], ["DOH", "VCE"], ["DOH", "VIE"], ["DOH", "WAW"], ["DOH", "YUL"], ["DOH", "ZRH"], ["DOK", "DWC"], ["DOK", "IST"], ["DOK", "KBP"], ["DOK", "KUT"], ["DOK", "LCA"], ["DOK", "MUC"], ["DOK", "SAW"], ["DOK", "SHJ"], ["DOK", "SKG"], ["DOK", "SVO"], ["DOK", "TLV"], ["DOL", "LCY"], ["DOM", "EIS"], ["DOM", "PTP"], ["DOM", "SJU"], ["DOM", "SLU"], ["DOM", "STT"], ["DOM", "SVD"], ["DOM", "SXM"], ["DOU", "GRU"], ["DOU", "VCP"], ["DOY", "HRB"], ["DOY", "PEK"], ["DOY", "PVG"], ["DPL", "DVO"], ["DPL", "MNL"], ["DPO", "MEL"], ["DPS", "DRW"], ["DPS", "HKG"], ["DPS", "HND"], ["DPS", "ICN"], ["DPS", "JOG"], ["DPS", "KIX"], ["DPS", "KOE"], ["DPS", "KUL"], ["DPS", "LBJ"], ["DPS", "LOP"], ["DPS", "MEL"], ["DPS", "MLG"], ["DPS", "MNL"], ["DPS", "MOF"], ["DPS", "NRT"], ["DPS", "PER"], ["DPS", "PHE"], ["DPS", "PLM"], ["DPS", "POM"], ["DPS", "PVG"], ["DPS", "SIN"], ["DPS", "SRG"], ["DPS", "SUB"], ["DPS", "SYD"], ["DPS", "SZX"], ["DPS", "TIM"], ["DPS", "TMC"], ["DPS", "TPE"], ["DPS", "UPG"], ["DPS", "WGP"], ["DQA", "PEK"], ["DQA", "TAO"], ["DRG", "OTZ"], ["DRK", "SJO"], ["DRO", "PHX"], ["DRS", "DUS"], ["DRS", "FRA"], ["DRS", "HER"], ["DRS", "HRG"], ["DRS", "LCY"], ["DRS", "MUC"], ["DRS", "NBE"], ["DRS", "PMI"], ["DRS", "RHO"], ["DRS", "STR"], ["DRS", "SVO"], ["DRS", "TFS"], ["DRS", "ZRH"], ["DRV", "HAQ"], ["DRV", "MLE"], ["DRW", "GOV"], ["DRW", "GTE"], ["DRW", "ISA"], ["DRW", "KNX"], ["DRW", "KUL"], ["DRW", "MCV"], ["DRW", "MEL"], ["DRW", "MNG"], ["DRW", "MNL"], ["DRW", "PER"], ["DRW", "SIN"], ["DRW", "SYD"], ["DRW", "TSV"], ["DSA", "GDN"], ["DSA", "JER"], ["DSA", "KTW"], ["DSA", "PMI"], ["DSA", "POZ"], ["DSA", "VNO"], ["DSA", "WAW"], ["DSA", "WRO"], ["DSK", "PEW"], ["DSK", "PZH"], ["DSM", "DTW"], ["DSM", "EWR"], ["DSM", "IAH"], ["DSM", "LAS"], ["DSM", "LGA"], ["DSM", "MDW"], ["DSM", "MSP"], ["DSM", "ORD"], ["DSM", "PGD"], ["DSM", "PHX"], ["DSM", "PIE"], ["DSM", "SFB"], ["DSN", "HET"], ["DSN", "HGH"], ["DSN", "HRB"], ["DSN", "KMG"], ["DSN", "NAY"], ["DSN", "NKG"], ["DSN", "PEK"], ["DSN", "SHE"], ["DSN", "SJW"], ["DSN", "TSN"], ["DSN", "TYN"], ["DSN", "URC"], ["DSN", "WUH"], ["DSN", "XIY"], ["DTM", "FAO"], ["DTM", "GDN"], ["DTM", "GRO"], ["DTM", "HDF"], ["DTM", "IEV"], ["DTM", "KRK"], ["DTM", "KTW"], ["DTM", "LTN"], ["DTM", "LWO"], ["DTM", "MUC"], ["DTM", "ONQ"], ["DTM", "OPO"], ["DTM", "OTP"], ["DTM", "PMI"], ["DTM", "SAW"], ["DTM", "SKP"], ["DTM", "SOF"], ["DTM", "SPU"], ["DTM", "STN"], ["DTM", "TGM"], ["DTM", "TSR"], ["DTM", "VNO"], ["DTW", "ELM"], ["DTW", "ERI"], ["DTW", "ESC"], ["DTW", "EVV"], ["DTW", "EWR"], ["DTW", "FLL"], ["DTW", "FRA"], ["DTW", "FWA"], ["DTW", "GCM"], ["DTW", "GRB"], ["DTW", "GRR"], ["DTW", "GRU"], ["DTW", "GSO"], ["DTW", "GSP"], ["DTW", "HPN"], ["DTW", "HSV"], ["DTW", "IAD"], ["DTW", "IAH"], ["DTW", "ICN"], ["DTW", "ILG"], ["DTW", "IND"], ["DTW", "ITH"], ["DTW", "JAX"], ["DTW", "JFK"], ["DTW", "LAN"], ["DTW", "LAS"], ["DTW", "LAX"], ["DTW", "LEX"], ["DTW", "LGA"], ["DTW", "LHR"], ["DTW", "LIT"], ["DTW", "MBJ"], ["DTW", "MBS"], ["DTW", "MCI"], ["DTW", "MCO"], ["DTW", "MDT"], ["DTW", "MDW"], ["DTW", "MEM"], ["DTW", "MEX"], ["DTW", "MHT"], ["DTW", "MIA"], ["DTW", "MKE"], ["DTW", "MLI"], ["DTW", "MQT"], ["DTW", "MSN"], ["DTW", "MSP"], ["DTW", "MSY"], ["DTW", "MTY"], ["DTW", "MYR"], ["DTW", "NAS"], ["DTW", "NGO"], ["DTW", "NRT"], ["DTW", "OKC"], ["DTW", "OMA"], ["DTW", "ORD"], ["DTW", "ORF"], ["DTW", "PBI"], ["DTW", "PDX"], ["DTW", "PEK"], ["DTW", "PHL"], ["DTW", "PHX"], ["DTW", "PIA"], ["DTW", "PIT"], ["DTW", "PLN"], ["DTW", "PUJ"], ["DTW", "PVD"], ["DTW", "PVG"], ["DTW", "PWM"], ["DTW", "RDU"], ["DTW", "RIC"], ["DTW", "ROA"], ["DTW", "ROC"], ["DTW", "RSW"], ["DTW", "SAN"], ["DTW", "SAT"], ["DTW", "SAV"], ["DTW", "SBN"], ["DTW", "SCE"], ["DTW", "SDF"], ["DTW", "SEA"], ["DTW", "SFO"], ["DTW", "SJU"], ["DTW", "SLC"], ["DTW", "STL"], ["DTW", "SWF"], ["DTW", "SYR"], ["DTW", "TPA"], ["DTW", "TTN"], ["DTW", "TUL"], ["DTW", "TVC"], ["DTW", "TYS"], ["DTW", "XNA"], ["DTW", "YOW"], ["DTW", "YUL"], ["DTW", "YYZ"], ["DUB", "DUS"], ["DUB", "DXB"], ["DUB", "EDI"], ["DUB", "EIN"], ["DUB", "EMA"], ["DUB", "EWR"], ["DUB", "EXT"], ["DUB", "FAO"], ["DUB", "FCO"], ["DUB", "FMM"], ["DUB", "FRA"], ["DUB", "FUE"], ["DUB", "GDN"], ["DUB", "GLA"], ["DUB", "GRO"], ["DUB", "GVA"], ["DUB", "HAJ"], ["DUB", "HAM"], ["DUB", "HEL"], ["DUB", "HHN"], ["DUB", "IAD"], ["DUB", "IBZ"], ["DUB", "IOM"], ["DUB", "IST"], ["DUB", "JER"], ["DUB", "JFK"], ["DUB", "KIR"], ["DUB", "KIV"], ["DUB", "KRK"], ["DUB", "KTW"], ["DUB", "KUN"], ["DUB", "LBA"], ["DUB", "LCY"], ["DUB", "LEI"], ["DUB", "LGW"], ["DUB", "LHR"], ["DUB", "LIN"], ["DUB", "LIS"], ["DUB", "LPA"], ["DUB", "LPL"], ["DUB", "LRH"], ["DUB", "LTN"], ["DUB", "LUX"], ["DUB", "LYS"], ["DUB", "MAD"], ["DUB", "MAN"], ["DUB", "MCO"], ["DUB", "MJV"], ["DUB", "MLA"], ["DUB", "MRS"], ["DUB", "MUC"], ["DUB", "MXP"], ["DUB", "NAP"], ["DUB", "NCE"], ["DUB", "NCL"], ["DUB", "NTE"], ["DUB", "OPO"], ["DUB", "ORD"], ["DUB", "OSL"], ["DUB", "OTP"], ["DUB", "PGF"], ["DUB", "PHL"], ["DUB", "PIK"], ["DUB", "PMI"], ["DUB", "POZ"], ["DUB", "PRG"], ["DUB", "PSA"], ["DUB", "PUY"], ["DUB", "RAK"], ["DUB", "RDZ"], ["DUB", "REU"], ["DUB", "RIX"], ["DUB", "RYG"], ["DUB", "RZE"], ["DUB", "SCQ"], ["DUB", "SDR"], ["DUB", "SEN"], ["DUB", "SFO"], ["DUB", "SOU"], ["DUB", "STN"], ["DUB", "STR"], ["DUB", "SVQ"], ["DUB", "SXF"], ["DUB", "SZZ"], ["DUB", "TFS"], ["DUB", "TLS"], ["DUB", "TSF"], ["DUB", "TUF"], ["DUB", "VCE"], ["DUB", "VIE"], ["DUB", "VLC"], ["DUB", "VNO"], ["DUB", "VRN"], ["DUB", "WAW"], ["DUB", "WMI"], ["DUB", "WRO"], ["DUB", "YYZ"], ["DUB", "ZAD"], ["DUB", "ZRH"], ["DUD", "WLG"], ["DUJ", "FKL"], ["DUR", "DXB"], ["DUR", "ELS"], ["DUR", "GRJ"], ["DUR", "HLA"], ["DUR", "HRE"], ["DUR", "JNB"], ["DUR", "LUN"], ["DUR", "MPM"], ["DUR", "MQP"], ["DUR", "MRU"], ["DUR", "PLZ"], ["DUS", "DXB"], ["DUS", "EBL"], ["DUS", "ESB"], ["DUS", "EWR"], ["DUS", "EXT"], ["DUS", "FAO"], ["DUS", "FCO"], ["DUS", "FDH"], ["DUS", "FLR"], ["DUS", "FNC"], ["DUS", "FRA"], ["DUS", "FUE"], ["DUS", "GCI"], ["DUS", "GLA"], ["DUS", "GOT"], ["DUS", "GPA"], ["DUS", "GRZ"], ["DUS", "GVA"], ["DUS", "GWT"], ["DUS", "HAM"], ["DUS", "HDF"], ["DUS", "HEL"], ["DUS", "HER"], ["DUS", "HRG"], ["DUS", "IBZ"], ["DUS", "IKA"], ["DUS", "IST"], ["DUS", "ISU"], ["DUS", "JER"], ["DUS", "JFK"], ["DUS", "KGS"], ["DUS", "KLX"], ["DUS", "KTW"], ["DUS", "KVA"], ["DUS", "LAX"], ["DUS", "LBA"], ["DUS", "LCA"], ["DUS", "LCY"], ["DUS", "LED"], ["DUS", "LEJ"], ["DUS", "LGW"], ["DUS", "LHR"], ["DUS", "LIS"], ["DUS", "LNZ"], ["DUS", "LPA"], ["DUS", "LUX"], ["DUS", "LYS"], ["DUS", "MAD"], ["DUS", "MAH"], ["DUS", "MAN"], ["DUS", "MIA"], ["DUS", "MJT"], ["DUS", "MLA"], ["DUS", "MPL"], ["DUS", "MUC"], ["DUS", "MXP"], ["DUS", "NAP"], ["DUS", "NBE"], ["DUS", "NCE"], ["DUS", "NCL"], ["DUS", "NQY"], ["DUS", "NRT"], ["DUS", "NTE"], ["DUS", "NUE"], ["DUS", "OLB"], ["DUS", "ONQ"], ["DUS", "ORD"], ["DUS", "OSL"], ["DUS", "OTP"], ["DUS", "PDL"], ["DUS", "PEK"], ["DUS", "PMI"], ["DUS", "POP"], ["DUS", "POZ"], ["DUS", "PRG"], ["DUS", "PRN"], ["DUS", "PUJ"], ["DUS", "PVK"], ["DUS", "RHO"], ["DUS", "RIX"], ["DUS", "RMF"], ["DUS", "RSW"], ["DUS", "SAW"], ["DUS", "SKG"], ["DUS", "SMI"], ["DUS", "SPC"], ["DUS", "SPU"], ["DUS", "STN"], ["DUS", "STR"], ["DUS", "SUF"], ["DUS", "SVO"], ["DUS", "SZG"], ["DUS", "TFS"], ["DUS", "TGD"], ["DUS", "TLV"], ["DUS", "TRN"], ["DUS", "TUN"], ["DUS", "TXL"], ["DUS", "VCE"], ["DUS", "VIE"], ["DUS", "VKO"], ["DUS", "VLC"], ["DUS", "VRA"], ["DUS", "WAW"], ["DUS", "WRO"], ["DUS", "XRY"], ["DUS", "ZAD"], ["DUS", "ZRH"], ["DUS", "ZTH"], ["DUT", "IKO"], ["DUT", "KQA"], ["DVO", "ILO"], ["DVO", "MNL"], ["DVO", "PPS"], ["DVO", "SIN"], ["DVO", "ZAM"], ["DWC", "GOJ"], ["DWC", "IEV"], ["DWC", "JED"], ["DWC", "KBL"], ["DWC", "KIV"], ["DWC", "KRT"], ["DWC", "KTM"], ["DWC", "KUF"], ["DWC", "KUL"], ["DWC", "KWI"], ["DWC", "KZN"], ["DWC", "LED"], ["DWC", "LHR"], ["DWC", "MCT"], ["DWC", "MLE"], ["DWC", "MNL"], ["DWC", "MRV"], ["DWC", "ODS"], ["DWC", "OMS"], ["DWC", "OTP"], ["DWC", "OVB"], ["DWC", "PEE"], ["DWC", "RUH"], ["DWC", "SOF"], ["DWC", "SVX"], ["DWC", "TJM"], ["DWC", "UFA"], ["DWC", "VKO"], ["DWD", "JED"], ["DWD", "RUH"], ["DXB", "DYU"], ["DXB", "EBB"], ["DXB", "EBL"], ["DXB", "ELQ"], ["DXB", "EVN"], ["DXB", "FCO"], ["DXB", "FRA"], ["DXB", "FRU"], ["DXB", "GIG"], ["DXB", "GLA"], ["DXB", "GOI"], ["DXB", "GRU"], ["DXB", "GVA"], ["DXB", "GYD"], ["DXB", "HAM"], ["DXB", "HAS"], ["DXB", "HBE"], ["DXB", "HGA"], ["DXB", "HKG"], ["DXB", "HKT"], ["DXB", "HND"], ["DXB", "HRK"], ["DXB", "HYD"], ["DXB", "IAD"], ["DXB", "IAH"], ["DXB", "ICN"], ["DXB", "IFN"], ["DXB", "IKA"], ["DXB", "ISB"], ["DXB", "IST"], ["DXB", "ISU"], ["DXB", "IXE"], ["DXB", "JED"], ["DXB", "JFK"], ["DXB", "JIB"], ["DXB", "JNB"], ["DXB", "JUB"], ["DXB", "KBL"], ["DXB", "KBP"], ["DXB", "KDH"], ["DXB", "KGL"], ["DXB", "KHI"], ["DXB", "KIH"], ["DXB", "KIX"], ["DXB", "KJA"], ["DXB", "KMG"], ["DXB", "KRR"], ["DXB", "KRT"], ["DXB", "KTM"], ["DXB", "KUF"], ["DXB", "KUL"], ["DXB", "KWI"], ["DXB", "LAD"], ["DXB", "LAX"], ["DXB", "LCA"], ["DXB", "LED"], ["DXB", "LFM"], ["DXB", "LGW"], ["DXB", "LHE"], ["DXB", "LHR"], ["DXB", "LIS"], ["DXB", "LKO"], ["DXB", "LOS"], ["DXB", "LRR"], ["DXB", "LUN"], ["DXB", "LYS"], ["DXB", "MAA"], ["DXB", "MAD"], ["DXB", "MAN"], ["DXB", "MBA"], ["DXB", "MCT"], ["DXB", "MED"], ["DXB", "MEL"], ["DXB", "MHD"], ["DXB", "MLA"], ["DXB", "MLE"], ["DXB", "MNL"], ["DXB", "MRU"], ["DXB", "MRV"], ["DXB", "MUC"], ["DXB", "MUX"], ["DXB", "MXP"], ["DXB", "NBO"], ["DXB", "NCE"], ["DXB", "NCL"], ["DXB", "NJF"], ["DXB", "NRT"], ["DXB", "OTP"], ["DXB", "OVB"], ["DXB", "PEK"], ["DXB", "PER"], ["DXB", "PEW"], ["DXB", "PRG"], ["DXB", "PVG"], ["DXB", "PZU"], ["DXB", "RIY"], ["DXB", "ROV"], ["DXB", "RUH"], ["DXB", "SAH"], ["DXB", "SAW"], ["DXB", "SEA"], ["DXB", "SEZ"], ["DXB", "SFO"], ["DXB", "SGN"], ["DXB", "SIN"], ["DXB", "SKP"], ["DXB", "SKT"], ["DXB", "SLL"], ["DXB", "SVO"], ["DXB", "SVX"], ["DXB", "SYD"], ["DXB", "SYZ"], ["DXB", "TAS"], ["DXB", "TBS"], ["DXB", "TBZ"], ["DXB", "TIF"], ["DXB", "TIP"], ["DXB", "TPE"], ["DXB", "TRV"], ["DXB", "TUN"], ["DXB", "TUU"], ["DXB", "VCE"], ["DXB", "VIE"], ["DXB", "VOG"], ["DXB", "WAW"], ["DXB", "XSB"], ["DXB", "YNB"], ["DXB", "YYZ"], ["DXB", "ZAH"], ["DXB", "ZBR"], ["DXB", "ZRH"], ["DXB", "ZYL"], ["DYG", "NKG"], ["DYG", "PEK"], ["DYG", "PVG"], ["DYG", "SZX"], ["DYG", "TPE"], ["DYG", "TSN"], ["DYG", "TYN"], ["DYG", "XIY"], ["DYR", "KHV"], ["DYU", "FRA"], ["DYU", "FRU"], ["DYU", "GOJ"], ["DYU", "IKA"], ["DYU", "IKT"], ["DYU", "IST"], ["DYU", "KBL"], ["DYU", "KJA"], ["DYU", "KRR"], ["DYU", "KUF"], ["DYU", "KZN"], ["DYU", "LED"], ["DYU", "MHD"], ["DYU", "MRV"], ["DYU", "NBC"], ["DYU", "OMS"], ["DYU", "OVB"], ["DYU", "REN"], ["DYU", "ROV"], ["DYU", "SGC"], ["DYU", "SHJ"], ["DYU", "SVX"], ["DYU", "UFA"], ["DYU", "URC"], ["DYU", "VOG"], ["DZA", "HAH"], ["DZA", "MJN"], ["DZA", "MRS"], ["DZA", "NBO"], ["DZA", "NOS"], ["DZA", "ORY"], ["DZA", "RUN"], ["DZA", "TNR"], ["DZN", "TSE"], ["EAE", "VLI"], ["EAM", "JED"], ["EAM", "RUH"], ["EAS", "MAD"], ["EAT", "SEA"], ["EAU", "ORD"], ["EBA", "FDH"], ["EBA", "MUC"], ["EBA", "ZRH"], ["EBB", "IST"], ["EBB", "JNB"], ["EBB", "JRO"], ["EBB", "JUB"], ["EBB", "KGL"], ["EBB", "KSE"], ["EBB", "LHR"], ["EBB", "MGQ"], ["EBB", "NBO"], ["EBB", "RUA"], ["EBL", "ESB"], ["EBL", "FRA"], ["EBL", "GOT"], ["EBL", "IKA"], ["EBL", "IST"], ["EBL", "MUC"], ["EBL", "SHJ"], ["EBL", "TBS"], ["EBL", "VIE"], ["EBU", "FEZ"], ["EBU", "OPO"], ["EBU", "SAW"], ["ECN", "ESB"], ["ECN", "GZT"], ["ECN", "HTY"], ["ECN", "IST"], ["ECN", "SAW"], ["ECP", "HOU"], ["ECP", "STL"], ["EDI", "EMA"], ["EDI", "EWR"], ["EDI", "EXT"], ["EDI", "FAO"], ["EDI", "FRA"], ["EDI", "FUE"], ["EDI", "GDN"], ["EDI", "GSE"], ["EDI", "GVA"], ["EDI", "HAM"], ["EDI", "HER"], ["EDI", "HHN"], ["EDI", "INV"], ["EDI", "IST"], ["EDI", "JER"], ["EDI", "KEF"], ["EDI", "KOI"], ["EDI", "KRK"], ["EDI", "KUN"], ["EDI", "LCY"], ["EDI", "LGW"], ["EDI", "LHR"], ["EDI", "LIS"], ["EDI", "LPA"], ["EDI", "LSI"], ["EDI", "LTN"], ["EDI", "LYS"], ["EDI", "MAD"], ["EDI", "MAH"], ["EDI", "MAN"], ["EDI", "MJV"], ["EDI", "MLA"], ["EDI", "MRS"], ["EDI", "MUC"], ["EDI", "MXP"], ["EDI", "NAP"], ["EDI", "NCE"], ["EDI", "NRN"], ["EDI", "NWI"], ["EDI", "ORK"], ["EDI", "OSL"], ["EDI", "PFO"], ["EDI", "PMI"], ["EDI", "POZ"], ["EDI", "PRG"], ["EDI", "PSA"], ["EDI", "RYG"], ["EDI", "SDR"], ["EDI", "SEN"], ["EDI", "SNN"], ["EDI", "SOU"], ["EDI", "STN"], ["EDI", "SVG"], ["EDI", "SXF"], ["EDI", "SYY"], ["EDI", "TFS"], ["EDI", "VCE"], ["EDI", "WIC"], ["EDL", "KIS"], ["EDL", "LOK"], ["EDL", "NBO"], ["EDO", "SAW"], ["EDR", "KWM"], ["EEK", "KWN"], ["EFL", "LGW"], ["EFL", "PVK"], ["EFL", "STN"], ["EFL", "ZTH"], ["EGC", "EMA"], ["EGC", "EXT"], ["EGC", "LPL"], ["EGC", "PGX"], ["EGC", "RTM"], ["EGC", "SOU"], ["EGC", "STN"], ["EGM", "GZO"], ["EGM", "HIR"], ["EGM", "MUA"], ["EGM", "RBV"], ["EGM", "VAO"], ["EGN", "KRT"], ["EGO", "FRU"], ["EGO", "GOJ"], ["EGO", "KGD"], ["EGO", "KRR"], ["EGO", "KUF"], ["EGO", "KZN"], ["EGO", "LED"], ["EGO", "ROV"], ["EGS", "RKV"], ["EGX", "WSN"], ["EIN", "FAO"], ["EIN", "FEZ"], ["EIN", "GDN"], ["EIN", "GRO"], ["EIN", "GRQ"], ["EIN", "IBZ"], ["EIN", "INN"], ["EIN", "KRK"], ["EIN", "KTW"], ["EIN", "LIS"], ["EIN", "LPA"], ["EIN", "MAD"], ["EIN", "MJV"], ["EIN", "MLA"], ["EIN", "MRS"], ["EIN", "NAP"], ["EIN", "NCE"], ["EIN", "NOC"], ["EIN", "OPO"], ["EIN", "OTP"], ["EIN", "PMI"], ["EIN", "PSA"], ["EIN", "RAK"], ["EIN", "REU"], ["EIN", "RHO"], ["EIN", "RIX"], ["EIN", "RTM"], ["EIN", "SAW"], ["EIN", "SKP"], ["EIN", "SOF"], ["EIN", "STN"], ["EIN", "SVQ"], ["EIN", "TPS"], ["EIN", "TSF"], ["EIN", "TXL"], ["EIN", "VCE"], ["EIN", "VLC"], ["EIN", "VNO"], ["EIN", "WAW"], ["EIN", "WMI"], ["EIS", "NEV"], ["EIS", "SJU"], ["EIS", "STT"], ["EIS", "SXM"], ["EJH", "JED"], ["EKO", "SLC"], ["EKS", "UUS"], ["ELC", "MNG"], ["ELD", "HOT"], ["ELD", "MEM"], ["ELF", "KRT"], ["ELG", "OGX"], ["ELG", "TMR"], ["ELH", "FLL"], ["ELH", "MIA"], ["ELH", "NAS"], ["ELH", "PBI"], ["ELI", "GLV"], ["ELI", "KKA"], ["ELI", "OME"], ["ELM", "ORD"], ["ELM", "PHL"], ["ELM", "PIE"], ["ELM", "SFB"], ["ELP", "HOU"], ["ELP", "IAH"], ["ELP", "LAS"], ["ELP", "LAX"], ["ELP", "ORD"], ["ELP", "PHL"], ["ELP", "PHX"], ["ELP", "SAT"], ["ELQ", "HBE"], ["ELQ", "IST"], ["ELQ", "JED"], ["ELQ", "MED"], ["ELQ", "RUH"], ["ELQ", "SHJ"], ["ELS", "JNB"], ["ELS", "PLZ"], ["ELV", "JNU"], ["EMA", "FAO"], ["EMA", "FNC"], ["EMA", "FUE"], ["EMA", "GCI"], ["EMA", "GLA"], ["EMA", "GRO"], ["EMA", "HER"], ["EMA", "IBZ"], ["EMA", "JER"], ["EMA", "KRK"], ["EMA", "LCA"], ["EMA", "LEI"], ["EMA", "LIG"], ["EMA", "LPA"], ["EMA", "LRH"], ["EMA", "MAH"], ["EMA", "MJV"], ["EMA", "MLA"], ["EMA", "NBE"], ["EMA", "NOC"], ["EMA", "ORK"], ["EMA", "PFO"], ["EMA", "PMI"], ["EMA", "PRG"], ["EMA", "PSA"], ["EMA", "REU"], ["EMA", "RHO"], ["EMA", "RIX"], ["EMA", "RZE"], ["EMA", "SXF"], ["EMA", "TFS"], ["EMA", "TSF"], ["EMA", "VLC"], ["EMA", "WMI"], ["EMA", "WRO"], ["EMK", "KOT"], ["ENE", "KOE"], ["ENE", "LBJ"], ["ENH", "WUH"], ["ENU", "LOS"], ["ENY", "NAY"], ["ENY", "PEK"], ["ENY", "XIY"], ["EOH", "IBE"], ["EOH", "MTR"], ["EOH", "NQU"], ["EOH", "PEI"], ["EOH", "UIB"], ["EOI", "KOI"], ["EOI", "NRL"], ["EPR", "PER"], ["EPR", "RVT"], ["EQS", "REL"], ["ERC", "ESB"], ["ERC", "IST"], ["ERC", "SAW"], ["ERF", "FUE"], ["ERF", "LGW"], ["ERF", "LPA"], ["ERF", "PMI"], ["ERF", "TFS"], ["ERI", "PHL"], ["ERL", "HET"], ["ERL", "PEK"], ["ERM", "JCB"], ["ERM", "PFB"], ["ERM", "POA"], ["ERN", "TFF"], ["ERS", "MPA"], ["ERS", "NDU"], ["ERS", "OND"], ["ERZ", "ESB"], ["ERZ", "IST"], ["ERZ", "SAW"], ["ESB", "EZS"], ["ESB", "FRA"], ["ESB", "GNY"], ["ESB", "GYD"], ["ESB", "GZP"], ["ESB", "GZT"], ["ESB", "HTY"], ["ESB", "IGD"], ["ESB", "IKA"], ["ESB", "IST"], ["ESB", "KBL"], ["ESB", "KCM"], ["ESB", "KCO"], ["ESB", "KSY"], ["ESB", "MED"], ["ESB", "MLX"], ["ESB", "MQM"], ["ESB", "MSR"], ["ESB", "MUC"], ["ESB", "SAW"], ["ESB", "STR"], ["ESB", "TEQ"], ["ESB", "TZX"], ["ESB", "VAN"], ["ESB", "VIE"], ["ESB", "VKO"], ["ESD", "FRD"], ["ESM", "GYE"], ["ESM", "UIO"], ["ESU", "MRS"], ["ESU", "ORY"], ["ETH", "HFA"], ["ETH", "SDV"], ["ETH", "TLV"], ["ETR", "UIO"], ["ETZ", "LYS"], ["ETZ", "MRS"], ["ETZ", "NCE"], ["ETZ", "TLS"], ["EUG", "LAS"], ["EUG", "LAX"], ["EUG", "OAK"], ["EUG", "PDX"], ["EUG", "SEA"], ["EUG", "SFO"], ["EUG", "SLC"], ["EUN", "LPA"], ["EUX", "SXM"], ["EVE", "OSL"], ["EVE", "SVG"], ["EVE", "TOS"], ["EVE", "TRD"], ["EVG", "MXX"], ["EVN", "FCO"], ["EVN", "GOJ"], ["EVN", "IKA"], ["EVN", "KBP"], ["EVN", "KJA"], ["EVN", "KRR"], ["EVN", "KUF"], ["EVN", "LED"], ["EVN", "MRV"], ["EVN", "MSQ"], ["EVN", "OMS"], ["EVN", "OVB"], ["EVN", "PRG"], ["EVN", "ROV"], ["EVN", "RTW"], ["EVN", "SCO"], ["EVN", "SHJ"], ["EVN", "SVO"], ["EVN", "SVX"], ["EVN", "TJM"], ["EVN", "VIE"], ["EVN", "VKO"], ["EVN", "VOG"], ["EVN", "VOZ"], ["EVN", "WAW"], ["EVV", "ORD"], ["EWB", "HPN"], ["EWB", "MVY"], ["EWR", "FCO"], ["EWR", "FLL"], ["EWR", "FPO"], ["EWR", "FRA"], ["EWR", "GCM"], ["EWR", "GLA"], ["EWR", "GRR"], ["EWR", "GRU"], ["EWR", "GSO"], ["EWR", "GSP"], ["EWR", "GUA"], ["EWR", "GVA"], ["EWR", "HAM"], ["EWR", "HKG"], ["EWR", "HNL"], ["EWR", "HOU"], ["EWR", "IAD"], ["EWR", "IAH"], ["EWR", "IND"], ["EWR", "ITH"], ["EWR", "JAX"], ["EWR", "KEF"], ["EWR", "LAS"], ["EWR", "LAX"], ["EWR", "LHR"], ["EWR", "LIM"], ["EWR", "LIR"], ["EWR", "LIS"], ["EWR", "MAD"], ["EWR", "MAN"], ["EWR", "MBJ"], ["EWR", "MCI"], ["EWR", "MCO"], ["EWR", "MDW"], ["EWR", "MEM"], ["EWR", "MEX"], ["EWR", "MHT"], ["EWR", "MIA"], ["EWR", "MKE"], ["EWR", "MSN"], ["EWR", "MSP"], ["EWR", "MSY"], ["EWR", "MUC"], ["EWR", "MXP"], ["EWR", "MYR"], ["EWR", "NAS"], ["EWR", "NRT"], ["EWR", "OKC"], ["EWR", "OMA"], ["EWR", "OPO"], ["EWR", "ORD"], ["EWR", "ORF"], ["EWR", "ORY"], ["EWR", "OSL"], ["EWR", "PBI"], ["EWR", "PDX"], ["EWR", "PEK"], ["EWR", "PHL"], ["EWR", "PHX"], ["EWR", "PIT"], ["EWR", "PLS"], ["EWR", "POP"], ["EWR", "POS"], ["EWR", "PTY"], ["EWR", "PUJ"], ["EWR", "PVD"], ["EWR", "PVG"], ["EWR", "PVR"], ["EWR", "PWM"], ["EWR", "RDU"], ["EWR", "RIC"], ["EWR", "ROC"], ["EWR", "RSW"], ["EWR", "SAL"], ["EWR", "SAN"], ["EWR", "SAP"], ["EWR", "SAT"], ["EWR", "SAV"], ["EWR", "SDF"], ["EWR", "SDQ"], ["EWR", "SEA"], ["EWR", "SFO"], ["EWR", "SIN"], ["EWR", "SJD"], ["EWR", "SJO"], ["EWR", "SJU"], ["EWR", "SLC"], ["EWR", "SNA"], ["EWR", "SNN"], ["EWR", "STI"], ["EWR", "STL"], ["EWR", "STR"], ["EWR", "STT"], ["EWR", "SXM"], ["EWR", "SYR"], ["EWR", "TLV"], ["EWR", "TPA"], ["EWR", "TUL"], ["EWR", "TXL"], ["EWR", "TYS"], ["EWR", "UVF"], ["EWR", "XNA"], ["EWR", "YEG"], ["EWR", "YHZ"], ["EWR", "YOW"], ["EWR", "YQB"], ["EWR", "YQM"], ["EWR", "YTZ"], ["EWR", "YUL"], ["EWR", "YVR"], ["EWR", "YYC"], ["EWR", "YYT"], ["EWR", "YYZ"], ["EWR", "ZRH"], ["EXT", "FAO"], ["EXT", "GCI"], ["EXT", "GLA"], ["EXT", "ISC"], ["EXT", "JER"], ["EXT", "MAN"], ["EXT", "MLA"], ["EXT", "NQY"], ["EXT", "PMI"], ["EXT", "RNS"], ["EYK", "NYA"], ["EYK", "OVS"], ["EYK", "SVX"], ["EYK", "VKO"], ["EYW", "FLL"], ["EYW", "LGA"], ["EYW", "MCO"], ["EYW", "MIA"], ["EYW", "MSY"], ["EYW", "RSW"], ["EYW", "TPA"], ["EZE", "FCO"], ["EZE", "FLN"], ["EZE", "FOR"], ["EZE", "FRA"], ["EZE", "FTE"], ["EZE", "GIG"], ["EZE", "GRU"], ["EZE", "GYE"], ["EZE", "HAV"], ["EZE", "IAH"], ["EZE", "IGR"], ["EZE", "JFK"], ["EZE", "LHR"], ["EZE", "LIM"], ["EZE", "MAD"], ["EZE", "MDZ"], ["EZE", "MEX"], ["EZE", "MIA"], ["EZE", "MVD"], ["EZE", "POA"], ["EZE", "PTY"], ["EZE", "PUJ"], ["EZE", "REL"], ["EZE", "ROS"], ["EZE", "SCL"], ["EZE", "USH"], ["EZE", "VVI"], ["EZS", "IST"], ["EZS", "SAW"], ["FAE", "SVG"], ["FAI", "FYU"], ["FAI", "GAL"], ["FAI", "HUS"], ["FAI", "IRC"], ["FAI", "KYU"], ["FAI", "LMA"], ["FAI", "MLY"], ["FAI", "RBY"], ["FAI", "SCC"], ["FAI", "SEA"], ["FAI", "WBQ"], ["FAO", "FMM"], ["FAO", "FRA"], ["FAO", "GLA"], ["FAO", "GRQ"], ["FAO", "GVA"], ["FAO", "HAJ"], ["FAO", "HAM"], ["FAO", "HHN"], ["FAO", "KIR"], ["FAO", "LBA"], ["FAO", "LDY"], ["FAO", "LGW"], ["FAO", "LHR"], ["FAO", "LIL"], ["FAO", "LIS"], ["FAO", "LPL"], ["FAO", "LTN"], ["FAO", "LUX"], ["FAO", "MAN"], ["FAO", "MST"], ["FAO", "MUC"], ["FAO", "NCL"], ["FAO", "NOC"], ["FAO", "NRN"], ["FAO", "OPO"], ["FAO", "ORK"], ["FAO", "ORY"], ["FAO", "OSL"], ["FAO", "PIK"], ["FAO", "PMI"], ["FAO", "RTM"], ["FAO", "SEN"], ["FAO", "SID"], ["FAO", "SNN"], ["FAO", "SOU"], ["FAO", "STN"], ["FAO", "STR"], ["FAO", "TXL"], ["FAO", "XRY"], ["FAR", "LAS"], ["FAR", "MSP"], ["FAR", "ORD"], ["FAR", "PIE"], ["FAR", "SFB"], ["FAR", "SLC"], ["FAT", "GDL"], ["FAT", "LAS"], ["FAT", "LAX"], ["FAT", "PDX"], ["FAT", "PHX"], ["FAT", "SAN"], ["FAT", "SEA"], ["FAT", "SFO"], ["FAT", "SLC"], ["FAV", "PPT"], ["FAV", "RGI"], ["FAY", "IAD"], ["FBM", "FIH"], ["FBM", "JNB"], ["FBM", "KGA"], ["FBM", "MJM"], ["FBM", "NBO"], ["FBM", "NLA"], ["FCA", "LAS"], ["FCA", "MSP"], ["FCA", "SEA"], ["FCA", "SLC"], ["FCO", "FLR"], ["FCO", "FRA"], ["FCO", "FUE"], ["FCO", "GDN"], ["FCO", "GIG"], ["FCO", "GLA"], ["FCO", "GOA"], ["FCO", "GOT"], ["FCO", "GRU"], ["FCO", "GVA"], ["FCO", "GYD"], ["FCO", "HAJ"], ["FCO", "HAM"], ["FCO", "HAV"], ["FCO", "HEL"], ["FCO", "HKG"], ["FCO", "IAD"], ["FCO", "IAS"], ["FCO", "ICN"], ["FCO", "IKA"], ["FCO", "IST"], ["FCO", "JED"], ["FCO", "JFK"], ["FCO", "KBP"], ["FCO", "KIV"], ["FCO", "KIX"], ["FCO", "KWI"], ["FCO", "LAX"], ["FCO", "LBA"], ["FCO", "LCY"], ["FCO", "LED"], ["FCO", "LGW"], ["FCO", "LHR"], ["FCO", "LIN"], ["FCO", "LIS"], ["FCO", "LOS"], ["FCO", "LRM"], ["FCO", "LTN"], ["FCO", "LUX"], ["FCO", "LUZ"], ["FCO", "LWO"], ["FCO", "LYS"], ["FCO", "MAD"], ["FCO", "MAN"], ["FCO", "MIA"], ["FCO", "MLA"], ["FCO", "MPL"], ["FCO", "MRS"], ["FCO", "MRU"], ["FCO", "MSQ"], ["FCO", "MUC"], ["FCO", "MXP"], ["FCO", "NAP"], ["FCO", "NCE"], ["FCO", "NCL"], ["FCO", "NRT"], ["FCO", "NTE"], ["FCO", "OLB"], ["FCO", "OPO"], ["FCO", "ORD"], ["FCO", "ORN"], ["FCO", "ORY"], ["FCO", "OSL"], ["FCO", "OTP"], ["FCO", "PEK"], ["FCO", "PHL"], ["FCO", "PMO"], ["FCO", "PRG"], ["FCO", "PSA"], ["FCO", "PVG"], ["FCO", "REG"], ["FCO", "RIX"], ["FCO", "RTM"], ["FCO", "RUH"], ["FCO", "RZE"], ["FCO", "SAW"], ["FCO", "SCU"], ["FCO", "SIN"], ["FCO", "SKG"], ["FCO", "SKP"], ["FCO", "SOF"], ["FCO", "SPU"], ["FCO", "STR"], ["FCO", "SUF"], ["FCO", "SVO"], ["FCO", "SVX"], ["FCO", "SXB"], ["FCO", "SXF"], ["FCO", "TAS"], ["FCO", "TBS"], ["FCO", "TFS"], ["FCO", "TGD"], ["FCO", "TIA"], ["FCO", "TIP"], ["FCO", "TLS"], ["FCO", "TLV"], ["FCO", "TRN"], ["FCO", "TRS"], ["FCO", "TUN"], ["FCO", "TXL"], ["FCO", "VCE"], ["FCO", "VIE"], ["FCO", "VKO"], ["FCO", "VLC"], ["FCO", "VNO"], ["FCO", "VRN"], ["FCO", "WAW"], ["FCO", "YUL"], ["FCO", "YYZ"], ["FCO", "ZRH"], ["FDF", "HAV"], ["FDF", "MIA"], ["FDF", "ORY"], ["FDF", "PTP"], ["FDF", "SDQ"], ["FDF", "SJU"], ["FDF", "SLU"], ["FDF", "YUL"], ["FDH", "FRA"], ["FDH", "HAM"], ["FDH", "IBZ"], ["FDH", "IST"], ["FDH", "OLB"], ["FDH", "PMI"], ["FDH", "TXL"], ["FDH", "ZAD"], ["FEG", "KRR"], ["FEG", "KZN"], ["FEG", "LED"], ["FEG", "OVB"], ["FEG", "TAS"], ["FEN", "NAT"], ["FEN", "REC"], ["FEZ", "FNI"], ["FEZ", "HHN"], ["FEZ", "MPL"], ["FEZ", "MRS"], ["FEZ", "NRN"], ["FEZ", "NTE"], ["FEZ", "ORY"], ["FEZ", "PSA"], ["FEZ", "STN"], ["FIH", "FKI"], ["FIH", "IST"], ["FIH", "JNB"], ["FIH", "KGA"], ["FIH", "KND"], ["FIH", "LAD"], ["FIH", "LBV"], ["FIH", "LJA"], ["FIH", "MDK"], ["FIH", "MJM"], ["FIH", "NBO"], ["FIH", "TSH"], ["FKB", "GRO"], ["FKB", "HAM"], ["FKB", "LPA"], ["FKB", "OPO"], ["FKB", "PMI"], ["FKB", "SKG"], ["FKB", "STN"], ["FKB", "TFS"], ["FKB", "TPS"], ["FKB", "TXL"], ["FKB", "ZAD"], ["FKI", "GOM"], ["FKI", "IRP"], ["FKQ", "KNG"], ["FKQ", "MKW"], ["FKQ", "SOQ"], ["FKS", "ITM"], ["FLG", "PHX"], ["FLL", "FPO"], ["FLL", "GGT"], ["FLL", "GHB"], ["FLL", "GSP"], ["FLL", "GUA"], ["FLL", "HOU"], ["FLL", "HPN"], ["FLL", "IAD"], ["FLL", "IAG"], ["FLL", "IAH"], ["FLL", "IND"], ["FLL", "ISP"], ["FLL", "JAX"], ["FLL", "JFK"], ["FLL", "KIN"], ["FLL", "LAS"], ["FLL", "LAX"], ["FLL", "LBE"], ["FLL", "LEX"], ["FLL", "LGA"], ["FLL", "LIM"], ["FLL", "MBJ"], ["FLL", "MCI"], ["FLL", "MCO"], ["FLL", "MDE"], ["FLL", "MDW"], ["FLL", "MGA"], ["FLL", "MHH"], ["FLL", "MKE"], ["FLL", "MSP"], ["FLL", "MSY"], ["FLL", "MYR"], ["FLL", "NAS"], ["FLL", "ORD"], ["FLL", "ORH"], ["FLL", "OSL"], ["FLL", "PAP"], ["FLL", "PBG"], ["FLL", "PHL"], ["FLL", "PHX"], ["FLL", "PIT"], ["FLL", "POS"], ["FLL", "PTY"], ["FLL", "PUJ"], ["FLL", "PVD"], ["FLL", "RDU"], ["FLL", "RIC"], ["FLL", "SAL"], ["FLL", "SAP"], ["FLL", "SDQ"], ["FLL", "SEA"], ["FLL", "SFO"], ["FLL", "SJO"], ["FLL", "SJU"], ["FLL", "STI"], ["FLL", "STL"], ["FLL", "STT"], ["FLL", "SWF"], ["FLL", "SXM"], ["FLL", "TCB"], ["FLL", "TLC"], ["FLL", "TPA"], ["FLL", "TTN"], ["FLL", "TYS"], ["FLL", "YUL"], ["FLL", "YYZ"], ["FLL", "ZSA"], ["FLN", "GIG"], ["FLN", "GRU"], ["FLN", "JCB"], ["FLN", "POA"], ["FLN", "VCP"], ["FLN", "XAP"], ["FLR", "FRA"], ["FLR", "GVA"], ["FLR", "LCY"], ["FLR", "LGW"], ["FLR", "LYS"], ["FLR", "MAD"], ["FLR", "MUC"], ["FLR", "NTE"], ["FLR", "ORY"], ["FLR", "PMO"], ["FLR", "STR"], ["FLR", "TXL"], ["FLR", "VIE"], ["FLR", "ZRH"], ["FLS", "LST"], ["FLS", "MEB"], ["FLW", "HOR"], ["FLW", "PDL"], ["FLW", "TER"], ["FMI", "KOO"], ["FMM", "GRO"], ["FMM", "HAM"], ["FMM", "IEV"], ["FMM", "NAP"], ["FMM", "OPO"], ["FMM", "PMI"], ["FMM", "SKP"], ["FMM", "SNN"], ["FMM", "STN"], ["FMM", "TFS"], ["FMM", "TPS"], ["FMM", "TXL"], ["FMN", "SOW"], ["FMO", "FRA"], ["FMO", "GRO"], ["FMO", "IBZ"], ["FMO", "MUC"], ["FMO", "PMI"], ["FMO", "STR"], ["FMO", "ZRH"], ["FNA", "LGW"], ["FNA", "LHR"], ["FNA", "LOS"], ["FNA", "MLW"], ["FNA", "ROB"], ["FNC", "FRA"], ["FNC", "GLA"], ["FNC", "HAJ"], ["FNC", "HAM"], ["FNC", "LBA"], ["FNC", "LEJ"], ["FNC", "LGW"], ["FNC", "LIS"], ["FNC", "LPA"], ["FNC", "LUX"], ["FNC", "MAN"], ["FNC", "MUC"], ["FNC", "OPO"], ["FNC", "ORY"], ["FNC", "PDL"], ["FNC", "PRG"], ["FNC", "STR"], ["FNC", "TXL"], ["FNC", "VIE"], ["FNC", "ZRH"], ["FNI", "LPL"], ["FNI", "LTN"], ["FNJ", "KUL"], ["FNJ", "PEK"], ["FNJ", "SHE"], ["FNJ", "VVO"], ["FNT", "LAS"], ["FNT", "MCO"], ["FNT", "MSP"], ["FNT", "ORD"], ["FNT", "TPA"], ["FOC", "HAK"], ["FOC", "HFE"], ["FOC", "HGH"], ["FOC", "HIA"], ["FOC", "HKG"], ["FOC", "HRB"], ["FOC", "JDZ"], ["FOC", "KHH"], ["FOC", "KIX"], ["FOC", "KMG"], ["FOC", "KUL"], ["FOC", "KWE"], ["FOC", "KWL"], ["FOC", "LYG"], ["FOC", "MFM"], ["FOC", "NKG"], ["FOC", "NNG"], ["FOC", "PEK"], ["FOC", "PVG"], ["FOC", "RMQ"], ["FOC", "SGN"], ["FOC", "SHA"], ["FOC", "SIN"], ["FOC", "SYX"], ["FOC", "SZX"], ["FOC", "TAO"], ["FOC", "TNA"], ["FOC", "TPE"], ["FOC", "TSA"], ["FOC", "TSN"], ["FOC", "TYN"], ["FOC", "WUH"], ["FOC", "WUX"], ["FOC", "XIY"], ["FOC", "XUZ"], ["FOC", "ZUH"], ["FOE", "ORD"], ["FON", "SJO"], ["FON", "XQP"], ["FOR", "GIG"], ["FOR", "GRU"], ["FOR", "JDO"], ["FOR", "JPA"], ["FOR", "LIS"], ["FOR", "MAO"], ["FOR", "MXP"], ["FOR", "NAT"], ["FOR", "PHB"], ["FOR", "RAI"], ["FOR", "REC"], ["FOR", "SLZ"], ["FOR", "SSA"], ["FOR", "THE"], ["FOR", "VCP"], ["FPO", "MIA"], ["FPO", "NAS"], ["FPO", "RIC"], ["FRA", "FUE"], ["FRA", "GCI"], ["FRA", "GDN"], ["FRA", "GIG"], ["FRA", "GOJ"], ["FRA", "GOT"], ["FRA", "GPA"], ["FRA", "GRU"], ["FRA", "GRZ"], ["FRA", "GVA"], ["FRA", "GWT"], ["FRA", "GYD"], ["FRA", "HAJ"], ["FRA", "HAM"], ["FRA", "HAN"], ["FRA", "HAV"], ["FRA", "HDF"], ["FRA", "HEL"], ["FRA", "HER"], ["FRA", "HKG"], ["FRA", "HND"], ["FRA", "HOG"], ["FRA", "HRG"], ["FRA", "IAD"], ["FRA", "IAH"], ["FRA", "IBZ"], ["FRA", "ICN"], ["FRA", "IKA"], ["FRA", "INN"], ["FRA", "IST"], ["FRA", "JED"], ["FRA", "JER"], ["FRA", "JFK"], ["FRA", "JNB"], ["FRA", "KBP"], ["FRA", "KEF"], ["FRA", "KGS"], ["FRA", "KIV"], ["FRA", "KIX"], ["FRA", "KRK"], ["FRA", "KTW"], ["FRA", "KUF"], ["FRA", "KUL"], ["FRA", "KWI"], ["FRA", "LAD"], ["FRA", "LAS"], ["FRA", "LAX"], ["FRA", "LCA"], ["FRA", "LCY"], ["FRA", "LED"], ["FRA", "LEJ"], ["FRA", "LHR"], ["FRA", "LIN"], ["FRA", "LIS"], ["FRA", "LJU"], ["FRA", "LNZ"], ["FRA", "LOS"], ["FRA", "LPA"], ["FRA", "LUX"], ["FRA", "LYS"], ["FRA", "MAA"], ["FRA", "MAD"], ["FRA", "MAH"], ["FRA", "MAN"], ["FRA", "MBA"], ["FRA", "MBJ"], ["FRA", "MCO"], ["FRA", "MCT"], ["FRA", "MEX"], ["FRA", "MIA"], ["FRA", "MLA"], ["FRA", "MLE"], ["FRA", "MPL"], ["FRA", "MRS"], ["FRA", "MRU"], ["FRA", "MSQ"], ["FRA", "MUC"], ["FRA", "MXP"], ["FRA", "NAP"], ["FRA", "NBE"], ["FRA", "NBO"], ["FRA", "NCE"], ["FRA", "NDR"], ["FRA", "NGO"], ["FRA", "NKG"], ["FRA", "NRT"], ["FRA", "NUE"], ["FRA", "OLB"], ["FRA", "OPO"], ["FRA", "ORD"], ["FRA", "OSL"], ["FRA", "OTP"], ["FRA", "OVB"], ["FRA", "PDL"], ["FRA", "PEK"], ["FRA", "PHL"], ["FRA", "PMI"], ["FRA", "PMO"], ["FRA", "PNQ"], ["FRA", "POP"], ["FRA", "POZ"], ["FRA", "PRG"], ["FRA", "PRN"], ["FRA", "PUJ"], ["FRA", "PUY"], ["FRA", "PVG"], ["FRA", "REC"], ["FRA", "RHO"], ["FRA", "RIX"], ["FRA", "RUH"], ["FRA", "RZE"], ["FRA", "SAW"], ["FRA", "SDQ"], ["FRA", "SEA"], ["FRA", "SEZ"], ["FRA", "SFO"], ["FRA", "SGN"], ["FRA", "SHE"], ["FRA", "SID"], ["FRA", "SIN"], ["FRA", "SJU"], ["FRA", "SKG"], ["FRA", "SOF"], ["FRA", "SPC"], ["FRA", "SPU"], ["FRA", "SSA"], ["FRA", "STR"], ["FRA", "SVG"], ["FRA", "SVO"], ["FRA", "SZG"], ["FRA", "TAB"], ["FRA", "TAS"], ["FRA", "TFS"], ["FRA", "TGD"], ["FRA", "TIA"], ["FRA", "TLL"], ["FRA", "TLS"], ["FRA", "TLV"], ["FRA", "TPE"], ["FRA", "TRN"], ["FRA", "TSE"], ["FRA", "TUN"], ["FRA", "TXL"], ["FRA", "VCE"], ["FRA", "VIE"], ["FRA", "VKO"], ["FRA", "VLC"], ["FRA", "VNO"], ["FRA", "VRA"], ["FRA", "VRN"], ["FRA", "WAW"], ["FRA", "WDH"], ["FRA", "WRO"], ["FRA", "XRY"], ["FRA", "YHZ"], ["FRA", "YOW"], ["FRA", "YUL"], ["FRA", "YVR"], ["FRA", "YYC"], ["FRA", "YYZ"], ["FRA", "ZAD"], ["FRA", "ZAG"], ["FRA", "ZNZ"], ["FRA", "ZRH"], ["FRE", "HIR"], ["FRE", "VAO"], ["FRO", "HOV"], ["FRO", "KSU"], ["FRO", "OSL"], ["FRO", "SVG"], ["FRS", "GUA"], ["FRU", "IKT"], ["FRU", "IST"], ["FRU", "KJA"], ["FRU", "KRR"], ["FRU", "KZN"], ["FRU", "LED"], ["FRU", "OSS"], ["FRU", "OVB"], ["FRU", "SAW"], ["FRU", "SGC"], ["FRU", "SVO"], ["FRU", "SVX"], ["FRU", "TAS"], ["FRU", "TSE"], ["FRU", "ULN"], ["FRU", "URC"], ["FRW", "GBE"], ["FRW", "JNB"], ["FSC", "LIL"], ["FSC", "LUX"], ["FSC", "MRS"], ["FSC", "NCE"], ["FSC", "NTE"], ["FSC", "ORY"], ["FSD", "LAS"], ["FSD", "MSP"], ["FSD", "ORD"], ["FSD", "PIE"], ["FSD", "SFB"], ["FSP", "YHZ"], ["FSP", "YUL"], ["FSP", "YYT"], ["FTA", "TAH"], ["FTE", "USH"], ["FTU", "TLE"], ["FTU", "TNR"], ["FUE", "GLA"], ["FUE", "HAJ"], ["FUE", "HAM"], ["FUE", "LBA"], ["FUE", "LEJ"], ["FUE", "LGW"], ["FUE", "LIL"], ["FUE", "LPA"], ["FUE", "LPL"], ["FUE", "LTN"], ["FUE", "LUX"], ["FUE", "MAD"], ["FUE", "MAN"], ["FUE", "MUC"], ["FUE", "MXP"], ["FUE", "NCL"], ["FUE", "NRN"], ["FUE", "NTE"], ["FUE", "NUE"], ["FUE", "ORK"], ["FUE", "PAD"], ["FUE", "PIK"], ["FUE", "PSA"], ["FUE", "SNN"], ["FUE", "STN"], ["FUE", "STR"], ["FUE", "SXF"], ["FUE", "SZG"], ["FUE", "TFN"], ["FUE", "TFS"], ["FUE", "TXL"], ["FUE", "VIE"], ["FUE", "VRN"], ["FUE", "ZQW"], ["FUE", "ZRH"], ["FUG", "HGH"], ["FUG", "PEK"], ["FUG", "SHA"], ["FUG", "TSN"], ["FUG", "WNZ"], ["FUG", "XIY"], ["FUG", "XMN"], ["FUJ", "FUK"], ["FUJ", "NGS"], ["FUK", "GUM"], ["FUK", "HAN"], ["FUK", "HKG"], ["FUK", "HNA"], ["FUK", "HND"], ["FUK", "HNL"], ["FUK", "IBR"], ["FUK", "ICN"], ["FUK", "ISG"], ["FUK", "ITM"], ["FUK", "KIJ"], ["FUK", "KIX"], ["FUK", "KMI"], ["FUK", "KMQ"], ["FUK", "MFM"], ["FUK", "MMJ"], ["FUK", "MNL"], ["FUK", "NGO"], ["FUK", "NRT"], ["FUK", "OKA"], ["FUK", "PUS"], ["FUK", "PVG"], ["FUK", "SDJ"], ["FUK", "SGN"], ["FUK", "SHE"], ["FUK", "SIN"], ["FUK", "TAO"], ["FUK", "TPE"], ["FUK", "TSJ"], ["FUN", "SUV"], ["FUO", "NAY"], ["FUT", "WLS"], ["FWA", "MSP"], ["FWA", "MYR"], ["FWA", "ORD"], ["FWA", "PGD"], ["FWA", "PIE"], ["FWA", "SFB"], ["FYU", "VEE"], ["GAE", "GAF"], ["GAE", "TOE"], ["GAE", "TUN"], ["GAF", "TOE"], ["GAF", "TUN"], ["GAJ", "HND"], ["GAJ", "ITM"], ["GAJ", "NKM"], ["GAL", "HSL"], ["GAL", "KAL"], ["GAL", "KYU"], ["GAL", "NUL"], ["GAL", "RBY"], ["GAM", "OME"], ["GAM", "SVA"], ["GAN", "KDM"], ["GAN", "MLE"], ["GAO", "HAV"], ["GAU", "IMF"], ["GAU", "IXA"], ["GAU", "IXB"], ["GAU", "IXS"], ["GAU", "PBH"], ["GBE", "HRE"], ["GBE", "JNB"], ["GBE", "LUN"], ["GBE", "MUB"], ["GBE", "NBO"], ["GBT", "JED"], ["GBT", "MED"], ["GBT", "MHD"], ["GBT", "THR"], ["GBT", "ZAH"], ["GCC", "RKS"], ["GCC", "SLC"], ["GCH", "THR"], ["GCI", "JER"], ["GCI", "LGW"], ["GCI", "MAN"], ["GCI", "NWI"], ["GCI", "SOU"], ["GCI", "STN"], ["GCM", "HAV"], ["GCM", "IAD"], ["GCM", "IAH"], ["GCM", "JFK"], ["GCM", "KIN"], ["GCM", "LCE"], ["GCM", "LYB"], ["GCM", "MBJ"], ["GCM", "MIA"], ["GCM", "NAS"], ["GCM", "ORD"], ["GCM", "PHL"], ["GCM", "TPA"], ["GCM", "YYZ"], ["GCN", "PGA"], ["GDE", "JIJ"], ["GDL", "HMO"], ["GDL", "IAH"], ["GDL", "LAP"], ["GDL", "LAS"], ["GDL", "LAX"], ["GDL", "LMM"], ["GDL", "MDW"], ["GDL", "MEX"], ["GDL", "MID"], ["GDL", "MTY"], ["GDL", "MXL"], ["GDL", "MZT"], ["GDL", "OAK"], ["GDL", "ONT"], ["GDL", "ORD"], ["GDL", "PBC"], ["GDL", "PHX"], ["GDL", "PTY"], ["GDL", "PVR"], ["GDL", "REX"], ["GDL", "SAT"], ["GDL", "SFO"], ["GDL", "SJC"], ["GDL", "SJD"], ["GDL", "SLC"], ["GDL", "SMF"], ["GDL", "SNA"], ["GDL", "TGZ"], ["GDL", "TIJ"], ["GDL", "TLC"], ["GDL", "TRC"], ["GDL", "VER"], ["GDL", "VSA"], ["GDN", "GLA"], ["GDN", "GSE"], ["GDN", "HAU"], ["GDN", "HEL"], ["GDN", "KRK"], ["GDN", "KRS"], ["GDN", "LBA"], ["GDN", "LBC"], ["GDN", "LPL"], ["GDN", "LTN"], ["GDN", "LUZ"], ["GDN", "MAN"], ["GDN", "MMX"], ["GDN", "MUC"], ["GDN", "NYO"], ["GDN", "ORK"], ["GDN", "OSL"], ["GDN", "PSA"], ["GDN", "RYG"], ["GDN", "STN"], ["GDN", "SVG"], ["GDN", "TKU"], ["GDN", "TRD"], ["GDN", "TRF"], ["GDN", "TXL"], ["GDN", "WAW"], ["GDN", "WMI"], ["GDN", "WRO"], ["GDN", "ZRH"], ["GDQ", "LLI"], ["GDT", "PLS"], ["GDT", "SLX"], ["GDT", "XSC"], ["GDX", "IKT"], ["GDX", "KHV"], ["GDX", "YKS"], ["GDZ", "SVO"], ["GEA", "ILP"], ["GEA", "KNQ"], ["GEA", "KOC"], ["GEA", "LIF"], ["GEA", "MEE"], ["GEA", "TGJ"], ["GEA", "TOU"], ["GEA", "UVE"], ["GEG", "LAS"], ["GEG", "LAX"], ["GEG", "MSP"], ["GEG", "OAK"], ["GEG", "PDX"], ["GEG", "PHX"], ["GEG", "SEA"], ["GEG", "SLC"], ["GEL", "POA"], ["GEL", "RIA"], ["GEL", "SRA"], ["GEO", "JFK"], ["GEO", "KIN"], ["GEO", "MIA"], ["GEO", "PBM"], ["GEO", "POS"], ["GEO", "PZO"], ["GEO", "YYZ"], ["GES", "ILO"], ["GES", "MNL"], ["GET", "PER"], ["GEV", "KRF"], ["GEV", "KRN"], ["GEV", "LLA"], ["GFF", "NRA"], ["GFF", "SYD"], ["GFK", "LAS"], ["GFK", "MSP"], ["GFK", "SFB"], ["GFK", "TVF"], ["GFN", "TRO"], ["GGT", "GHB"], ["GGT", "MIA"], ["GGT", "NAS"], ["GGT", "YYZ"], ["GHA", "ORN"], ["GHA", "TMR"], ["GHB", "NAS"], ["GHT", "TIP"], ["GIB", "LGW"], ["GIB", "LHR"], ["GIB", "LTN"], ["GIB", "MAN"], ["GIG", "GRU"], ["GIG", "GYN"], ["GIG", "IAH"], ["GIG", "IGU"], ["GIG", "JFK"], ["GIG", "JPA"], ["GIG", "LAD"], ["GIG", "LFW"], ["GIG", "LHR"], ["GIG", "LIM"], ["GIG", "LIS"], ["GIG", "MAD"], ["GIG", "MAO"], ["GIG", "MCZ"], ["GIG", "MIA"], ["GIG", "MVD"], ["GIG", "NAT"], ["GIG", "NVT"], ["GIG", "OPO"], ["GIG", "POA"], ["GIG", "PTY"], ["GIG", "RAO"], ["GIG", "REC"], ["GIG", "SCL"], ["GIG", "SDQ"], ["GIG", "SLZ"], ["GIG", "SSA"], ["GIG", "VCP"], ["GIG", "VIX"], ["GIL", "ISB"], ["GIS", "WLG"], ["GIU", "TRR"], ["GIZ", "JED"], ["GIZ", "MED"], ["GIZ", "RUH"], ["GJA", "LCE"], ["GJT", "IAH"], ["GJT", "LAS"], ["GJT", "PHX"], ["GJT", "SLC"], ["GKA", "HGU"], ["GKA", "LAE"], ["GKA", "MAG"], ["GKA", "POM"], ["GKK", "KDO"], ["GKK", "MLE"], ["GLA", "HER"], ["GLA", "IBZ"], ["GLA", "ILY"], ["GLA", "JER"], ["GLA", "KEF"], ["GLA", "KGS"], ["GLA", "KOI"], ["GLA", "LBA"], ["GLA", "LCA"], ["GLA", "LCY"], ["GLA", "LGW"], ["GLA", "LHR"], ["GLA", "LPA"], ["GLA", "LSI"], ["GLA", "LTN"], ["GLA", "MAN"], ["GLA", "MCO"], ["GLA", "MLA"], ["GLA", "NBE"], ["GLA", "ORK"], ["GLA", "PFO"], ["GLA", "PHL"], ["GLA", "PMI"], ["GLA", "RHO"], ["GLA", "SOU"], ["GLA", "STN"], ["GLA", "SXF"], ["GLA", "SYY"], ["GLA", "TFS"], ["GLA", "TRE"], ["GLA", "WAW"], ["GLA", "YYC"], ["GLA", "YYZ"], ["GLF", "PJM"], ["GLF", "SJO"], ["GLH", "TUP"], ["GLK", "MGQ"], ["GLK", "NBO"], ["GLK", "WJR"], ["GLO", "IOM"], ["GLT", "ROK"], ["GLT", "SYD"], ["GLV", "OME"], ["GLV", "WMO"], ["GMA", "MDK"], ["GMP", "HIN"], ["GMP", "HND"], ["GMP", "KIX"], ["GMP", "KPO"], ["GMP", "KWJ"], ["GMP", "NGO"], ["GMP", "PEK"], ["GMP", "PUS"], ["GMP", "RSU"], ["GMP", "SHA"], ["GMP", "TSA"], ["GMP", "USN"], ["GMR", "HOI"], ["GMR", "PPT"], ["GMZ", "TFN"], ["GND", "JFK"], ["GND", "MIA"], ["GND", "PMV"], ["GND", "POS"], ["GND", "SVD"], ["GND", "UVF"], ["GND", "YYZ"], ["GNM", "LAZ"], ["GNM", "SSA"], ["GNV", "MCO"], ["GNV", "MIA"], ["GNV", "TPA"], ["GNY", "IST"], ["GNY", "SAW"], ["GOA", "IST"], ["GOA", "LGW"], ["GOA", "MUC"], ["GOA", "NAP"], ["GOA", "OLB"], ["GOA", "PMO"], ["GOA", "STN"], ["GOA", "TIA"], ["GOA", "TPS"], ["GOH", "JAV"], ["GOH", "JFR"], ["GOH", "JHS"], ["GOH", "JSU"], ["GOH", "KEF"], ["GOH", "RKV"], ["GOH", "SFJ"], ["GOH", "UAK"], ["GOI", "HYD"], ["GOI", "KWI"], ["GOI", "MAA"], ["GOI", "PNQ"], ["GOI", "SHJ"], ["GOJ", "KUF"], ["GOJ", "LBD"], ["GOJ", "NMA"], ["GOJ", "NSK"], ["GOJ", "PRG"], ["GOJ", "SVO"], ["GOJ", "SVX"], ["GOJ", "TAS"], ["GOJ", "VKO"], ["GOQ", "XIY"], ["GOQ", "XNN"], ["GOT", "HEL"], ["GOT", "IKA"], ["GOT", "IST"], ["GOT", "LGW"], ["GOT", "LHR"], ["GOT", "LYS"], ["GOT", "MAN"], ["GOT", "MUC"], ["GOT", "NCE"], ["GOT", "OSL"], ["GOT", "PMI"], ["GOT", "RIX"], ["GOT", "SDL"], ["GOT", "SPU"], ["GOT", "SVG"], ["GOT", "TXL"], ["GOU", "NDJ"], ["GOU", "NSI"], ["GOV", "GTE"], ["GPA", "PFO"], ["GPS", "GYE"], ["GPT", "IAH"], ["GRB", "MSP"], ["GRB", "ORD"], ["GRI", "LAS"], ["GRJ", "JNB"], ["GRK", "IAH"], ["GRO", "GRQ"], ["GRO", "HHN"], ["GRO", "IBZ"], ["GRO", "IEV"], ["GRO", "KRK"], ["GRO", "LBA"], ["GRO", "LPP"], ["GRO", "LTN"], ["GRO", "LWO"], ["GRO", "MAH"], ["GRO", "MAN"], ["GRO", "MLA"], ["GRO", "MST"], ["GRO", "NCL"], ["GRO", "NRN"], ["GRO", "PMI"], ["GRO", "POZ"], ["GRO", "PSA"], ["GRO", "PSR"], ["GRO", "RAK"], ["GRO", "RBA"], ["GRO", "RTM"], ["GRO", "SFT"], ["GRO", "SKG"], ["GRO", "STN"], ["GRO", "TLL"], ["GRO", "TMP"], ["GRO", "TPS"], ["GRO", "WRO"], ["GRP", "MQH"], ["GRP", "SXO"], ["GRQ", "HER"], ["GRQ", "LPA"], ["GRQ", "MST"], ["GRQ", "PMI"], ["GRR", "IAD"], ["GRR", "IAH"], ["GRR", "LAS"], ["GRR", "LGA"], ["GRR", "MCO"], ["GRR", "MSP"], ["GRR", "ORD"], ["GRR", "PIE"], ["GRR", "SFB"], ["GRR", "STL"], ["GRR", "TPA"], ["GRU", "GYN"], ["GRU", "IAD"], ["GRU", "IAH"], ["GRU", "IGU"], ["GRU", "IOS"], ["GRU", "IPN"], ["GRU", "IST"], ["GRU", "JDO"], ["GRU", "JFK"], ["GRU", "JNB"], ["GRU", "JOI"], ["GRU", "JPA"], ["GRU", "LAD"], ["GRU", "LAX"], ["GRU", "LDB"], ["GRU", "LFW"], ["GRU", "LHR"], ["GRU", "LIM"], ["GRU", "LIS"], ["GRU", "MAD"], ["GRU", "MAO"], ["GRU", "MCO"], ["GRU", "MCZ"], ["GRU", "MEX"], ["GRU", "MGF"], ["GRU", "MIA"], ["GRU", "MUC"], ["GRU", "MVD"], ["GRU", "MXP"], ["GRU", "NAT"], ["GRU", "NVT"], ["GRU", "OPO"], ["GRU", "ORD"], ["GRU", "PFB"], ["GRU", "PLU"], ["GRU", "POA"], ["GRU", "PTY"], ["GRU", "RAO"], ["GRU", "REC"], ["GRU", "ROS"], ["GRU", "SCL"], ["GRU", "SDQ"], ["GRU", "SDU"], ["GRU", "SJP"], ["GRU", "SLZ"], ["GRU", "SSA"], ["GRU", "THE"], ["GRU", "UBA"], ["GRU", "UDI"], ["GRU", "UIO"], ["GRU", "VDC"], ["GRU", "VIX"], ["GRU", "VVI"], ["GRU", "YYZ"], ["GRU", "ZRH"], ["GRW", "TER"], ["GRX", "LCY"], ["GRX", "MAD"], ["GRX", "MLN"], ["GRX", "PMI"], ["GRZ", "HER"], ["GRZ", "MUC"], ["GRZ", "PMI"], ["GRZ", "STR"], ["GRZ", "TFS"], ["GRZ", "TXL"], ["GRZ", "VIE"], ["GRZ", "ZRH"], ["GSE", "MLA"], ["GSE", "MRS"], ["GSE", "PMI"], ["GSE", "PSA"], ["GSE", "SKP"], ["GSE", "STN"], ["GSE", "TZL"], ["GSE", "VBY"], ["GSE", "WAW"], ["GSE", "ZAD"], ["GSO", "IAD"], ["GSO", "LGA"], ["GSO", "MIA"], ["GSO", "ORD"], ["GSO", "PHL"], ["GSO", "PIE"], ["GSO", "SFB"], ["GSP", "HOU"], ["GSP", "IAD"], ["GSP", "IAH"], ["GSP", "LGA"], ["GSP", "MDW"], ["GSP", "ORD"], ["GSP", "PGD"], ["GSP", "PHL"], ["GSP", "PIE"], ["GSP", "SFB"], ["GST", "HNH"], ["GST", "JNU"], ["GTF", "HLN"], ["GTF", "LAS"], ["GTF", "MSP"], ["GTF", "SEA"], ["GTF", "SLC"], ["GTO", "MDC"], ["GTO", "UPG"], ["GUA", "IAD"], ["GUA", "IAH"], ["GUA", "JFK"], ["GUA", "LAX"], ["GUA", "MAD"], ["GUA", "MEX"], ["GUA", "MGA"], ["GUA", "MIA"], ["GUA", "PTY"], ["GUA", "RTB"], ["GUA", "SAL"], ["GUA", "SAP"], ["GUA", "SJO"], ["GUA", "TAP"], ["GUA", "TGU"], ["GUM", "HKG"], ["GUM", "HNL"], ["GUM", "ICN"], ["GUM", "KIX"], ["GUM", "MNL"], ["GUM", "NGO"], ["GUM", "NRT"], ["GUM", "OKJ"], ["GUM", "PUS"], ["GUM", "ROP"], ["GUM", "ROR"], ["GUM", "SDJ"], ["GUM", "SPN"], ["GUM", "TKK"], ["GUM", "TPE"], ["GUM", "YAP"], ["GUR", "MIS"], ["GUR", "PNP"], ["GUR", "POM"], ["GUW", "IST"], ["GUW", "SCO"], ["GUW", "TSE"], ["GUW", "URA"], ["GUW", "VKO"], ["GVA", "HAM"], ["GVA", "HEL"], ["GVA", "HER"], ["GVA", "HRG"], ["GVA", "IAD"], ["GVA", "IBZ"], ["GVA", "IST"], ["GVA", "JED"], ["GVA", "JER"], ["GVA", "JFK"], ["GVA", "JMK"], ["GVA", "KBP"], ["GVA", "LCY"], ["GVA", "LED"], ["GVA", "LGW"], ["GVA", "LHR"], ["GVA", "LIL"], ["GVA", "LIS"], ["GVA", "LPA"], ["GVA", "LPL"], ["GVA", "LTN"], ["GVA", "LUG"], ["GVA", "LUX"], ["GVA", "MAD"], ["GVA", "MAN"], ["GVA", "MIR"], ["GVA", "MLA"], ["GVA", "MRS"], ["GVA", "MSQ"], ["GVA", "MUC"], ["GVA", "NAP"], ["GVA", "NCE"], ["GVA", "NTE"], ["GVA", "OLB"], ["GVA", "OPO"], ["GVA", "ORY"], ["GVA", "OSL"], ["GVA", "OTP"], ["GVA", "PEK"], ["GVA", "PMI"], ["GVA", "PRG"], ["GVA", "PRN"], ["GVA", "RAK"], ["GVA", "RUH"], ["GVA", "SCQ"], ["GVA", "SEN"], ["GVA", "SPU"], ["GVA", "STR"], ["GVA", "SVO"], ["GVA", "SVQ"], ["GVA", "SXF"], ["GVA", "TFS"], ["GVA", "TLS"], ["GVA", "TLV"], ["GVA", "TUN"], ["GVA", "VCE"], ["GVA", "VIE"], ["GVA", "VLC"], ["GVA", "WAW"], ["GVA", "YUL"], ["GVA", "ZRH"], ["GVR", "PLU"], ["GWD", "KHI"], ["GWD", "MCT"], ["GWD", "TUK"], ["GWT", "HAM"], ["GWT", "MUC"], ["GWT", "STR"], ["GWT", "TXL"], ["GWT", "ZRH"], ["GXF", "JED"], ["GXF", "SAH"], ["GXH", "LXA"], ["GXH", "XIY"], ["GYA", "TDD"], ["GYD", "IKA"], ["GYD", "IST"], ["GYD", "KBL"], ["GYD", "KBP"], ["GYD", "KJA"], ["GYD", "KVD"], ["GYD", "LED"], ["GYD", "LHR"], ["GYD", "MRV"], ["GYD", "MSQ"], ["GYD", "MXP"], ["GYD", "NBC"], ["GYD", "OMS"], ["GYD", "OVB"], ["GYD", "PEK"], ["GYD", "PRG"], ["GYD", "RIX"], ["GYD", "SAW"], ["GYD", "SCO"], ["GYD", "SVO"], ["GYD", "SVX"], ["GYD", "TAS"], ["GYD", "TBS"], ["GYD", "TBZ"], ["GYD", "TLV"], ["GYD", "TSE"], ["GYD", "UFA"], ["GYD", "URC"], ["GYD", "VIE"], ["GYE", "JFK"], ["GYE", "LIM"], ["GYE", "LOH"], ["GYE", "LTX"], ["GYE", "MAD"], ["GYE", "MIA"], ["GYE", "PTY"], ["GYE", "SAL"], ["GYE", "SCL"], ["GYE", "SCY"], ["GYE", "UIO"], ["GYN", "PMW"], ["GYN", "RAO"], ["GYN", "SDU"], ["GYN", "UDI"], ["GYN", "VCP"], ["GYS", "HGH"], ["GYS", "PEK"], ["GYS", "SZX"], ["GZO", "HIR"], ["GZO", "KGE"], ["GZO", "MUA"], ["GZP", "HEL"], ["GZP", "IST"], ["GZP", "OSL"], ["GZP", "SAW"], ["GZT", "IST"], ["GZT", "SAW"], ["HAA", "HFT"], ["HAA", "TOS"], ["HAC", "HND"], ["HAD", "JKG"], ["HAD", "VXO"], ["HAH", "JIB"], ["HAH", "MBA"], ["HAH", "NBO"], ["HAH", "RUN"], ["HAH", "TNR"], ["HAJ", "HER"], ["HAJ", "IBZ"], ["HAJ", "IST"], ["HAJ", "JER"], ["HAJ", "KGS"], ["HAJ", "LCA"], ["HAJ", "LHR"], ["HAJ", "LPA"], ["HAJ", "MAH"], ["HAJ", "MAN"], ["HAJ", "MSQ"], ["HAJ", "MUC"], ["HAJ", "MXP"], ["HAJ", "NAP"], ["HAJ", "PMI"], ["HAJ", "PRN"], ["HAJ", "RHO"], ["HAJ", "SAW"], ["HAJ", "SID"], ["HAJ", "SKG"], ["HAJ", "SPU"], ["HAJ", "STN"], ["HAJ", "STR"], ["HAJ", "SUF"], ["HAJ", "SVO"], ["HAJ", "TFS"], ["HAJ", "VCE"], ["HAJ", "VIE"], ["HAJ", "XRY"], ["HAJ", "ZRH"], ["HAK", "HFE"], ["HAK", "HGH"], ["HAK", "HKG"], ["HAK", "KHN"], ["HAK", "KMG"], ["HAK", "KWE"], ["HAK", "KWL"], ["HAK", "LZO"], ["HAK", "NGB"], ["HAK", "NKG"], ["HAK", "NNG"], ["HAK", "PEK"], ["HAK", "PVG"], ["HAK", "SHA"], ["HAK", "SIN"], ["HAK", "SWA"], ["HAK", "SZX"], ["HAK", "TPE"], ["HAK", "TSN"], ["HAK", "TXN"], ["HAK", "TYN"], ["HAK", "WNZ"], ["HAK", "WUH"], ["HAK", "XIY"], ["HAK", "XMN"], ["HAK", "ZHA"], ["HAK", "ZUH"], ["HAK", "ZYI"], ["HAM", "HEL"], ["HAM", "HER"], ["HAM", "HRG"], ["HAM", "IBZ"], ["HAM", "IKA"], ["HAM", "IST"], ["HAM", "KGS"], ["HAM", "KLU"], ["HAM", "LED"], ["HAM", "LGW"], ["HAM", "LHR"], ["HAM", "LIS"], ["HAM", "LPA"], ["HAM", "LTN"], ["HAM", "MAD"], ["HAM", "MAH"], ["HAM", "MAN"], ["HAM", "MLA"], ["HAM", "MUC"], ["HAM", "MXP"], ["HAM", "NAP"], ["HAM", "NBE"], ["HAM", "NCE"], ["HAM", "NUE"], ["HAM", "OLB"], ["HAM", "OSL"], ["HAM", "PMI"], ["HAM", "PRG"], ["HAM", "PRN"], ["HAM", "RHO"], ["HAM", "RIX"], ["HAM", "RJK"], ["HAM", "SAW"], ["HAM", "SCN"], ["HAM", "SKG"], ["HAM", "SPU"], ["HAM", "STR"], ["HAM", "SVO"], ["HAM", "SZG"], ["HAM", "TFS"], ["HAM", "TLS"], ["HAM", "VCE"], ["HAM", "VIE"], ["HAM", "VRN"], ["HAM", "WAW"], ["HAM", "XRY"], ["HAM", "ZRH"], ["HAN", "HKG"], ["HAN", "HND"], ["HAN", "HUI"], ["HAN", "ICN"], ["HAN", "KHH"], ["HAN", "KIX"], ["HAN", "KUL"], ["HAN", "LPQ"], ["HAN", "MFM"], ["HAN", "MNL"], ["HAN", "NGO"], ["HAN", "NNG"], ["HAN", "NRT"], ["HAN", "PEK"], ["HAN", "PNH"], ["HAN", "PQC"], ["HAN", "PUS"], ["HAN", "PVG"], ["HAN", "PXU"], ["HAN", "REP"], ["HAN", "RGN"], ["HAN", "RMQ"], ["HAN", "SGN"], ["HAN", "SIN"], ["HAN", "SVO"], ["HAN", "TBB"], ["HAN", "TPE"], ["HAN", "UIH"], ["HAN", "VCA"], ["HAN", "VCL"], ["HAN", "VDH"], ["HAN", "VII"], ["HAN", "VTE"], ["HAQ", "TRV"], ["HAS", "JED"], ["HAS", "RUH"], ["HAS", "SHJ"], ["HAU", "OSL"], ["HAU", "PSA"], ["HAU", "STN"], ["HAU", "ZAD"], ["HAV", "HOG"], ["HAV", "LAD"], ["HAV", "LGW"], ["HAV", "LIM"], ["HAV", "MAD"], ["HAV", "MEX"], ["HAV", "MXP"], ["HAV", "NAS"], ["HAV", "ORY"], ["HAV", "PMV"], ["HAV", "PTY"], ["HAV", "SAL"], ["HAV", "SCU"], ["HAV", "SDQ"], ["HAV", "SNU"], ["HAV", "SVO"], ["HAV", "UIO"], ["HAV", "YYZ"], ["HAV", "ZRH"], ["HBA", "MEL"], ["HBA", "SYD"], ["HBE", "HRG"], ["HBE", "IST"], ["HBE", "JED"], ["HBE", "KWI"], ["HBE", "MED"], ["HBE", "RUH"], ["HBE", "SHJ"], ["HBE", "SSH"], ["HBE", "TIP"], ["HBE", "TOB"], ["HBE", "YNB"], ["HDF", "STR"], ["HDG", "PVG"], ["HDG", "SHA"], ["HDM", "MHD"], ["HDS", "JNB"], ["HDY", "KUL"], ["HDY", "SIN"], ["HEA", "ISB"], ["HEA", "KBL"], ["HEA", "MHD"], ["HEH", "MDL"], ["HEH", "NYU"], ["HEH", "RGN"], ["HEH", "THL"], ["HEK", "HRB"], ["HEK", "OHE"], ["HEL", "HKG"], ["HEL", "ICN"], ["HEL", "IST"], ["HEL", "IVL"], ["HEL", "JFK"], ["HEL", "JOE"], ["HEL", "JYV"], ["HEL", "KAJ"], ["HEL", "KAO"], ["HEL", "KBP"], ["HEL", "KEF"], ["HEL", "KEM"], ["HEL", "KIX"], ["HEL", "KOK"], ["HEL", "KRK"], ["HEL", "KTT"], ["HEL", "KUO"], ["HEL", "LED"], ["HEL", "LGW"], ["HEL", "LHR"], ["HEL", "LIS"], ["HEL", "LJU"], ["HEL", "MAD"], ["HEL", "MAN"], ["HEL", "MHQ"], ["HEL", "MSQ"], ["HEL", "MUC"], ["HEL", "MXP"], ["HEL", "NCE"], ["HEL", "NGO"], ["HEL", "NRK"], ["HEL", "NRT"], ["HEL", "ORY"], ["HEL", "OSL"], ["HEL", "OUL"], ["HEL", "PEK"], ["HEL", "PMI"], ["HEL", "POR"], ["HEL", "PRG"], ["HEL", "PVG"], ["HEL", "RIX"], ["HEL", "RVN"], ["HEL", "SIN"], ["HEL", "SPU"], ["HEL", "SVL"], ["HEL", "SVO"], ["HEL", "SVX"], ["HEL", "TAY"], ["HEL", "TKU"], ["HEL", "TLL"], ["HEL", "TLV"], ["HEL", "TMP"], ["HEL", "TXL"], ["HEL", "VAA"], ["HEL", "VIE"], ["HEL", "VNO"], ["HEL", "WAW"], ["HEL", "XIY"], ["HEL", "ZRH"], ["HER", "JIK"], ["HER", "KBP"], ["HER", "KGS"], ["HER", "LBA"], ["HER", "LCA"], ["HER", "LED"], ["HER", "LEJ"], ["HER", "LGG"], ["HER", "LGW"], ["HER", "LIL"], ["HER", "LNZ"], ["HER", "LTN"], ["HER", "LUX"], ["HER", "LYS"], ["HER", "MAN"], ["HER", "MJT"], ["HER", "MRS"], ["HER", "MST"], ["HER", "MUC"], ["HER", "MXP"], ["HER", "NCL"], ["HER", "NTE"], ["HER", "NUE"], ["HER", "ORY"], ["HER", "PRG"], ["HER", "RHO"], ["HER", "RIX"], ["HER", "RTM"], ["HER", "SKG"], ["HER", "STR"], ["HER", "SVO"], ["HER", "SXF"], ["HER", "SZG"], ["HER", "TLL"], ["HER", "TLV"], ["HER", "TXL"], ["HER", "VIE"], ["HER", "VKO"], ["HER", "VNO"], ["HER", "ZRH"], ["HET", "HGH"], ["HET", "HLD"], ["HET", "HLH"], ["HET", "HRB"], ["HET", "KHN"], ["HET", "NAY"], ["HET", "NKG"], ["HET", "NZH"], ["HET", "PEK"], ["HET", "PVG"], ["HET", "RLK"], ["HET", "SHA"], ["HET", "SHE"], ["HET", "SJW"], ["HET", "TAO"], ["HET", "TGO"], ["HET", "TNA"], ["HET", "TPE"], ["HET", "TSN"], ["HET", "TYN"], ["HET", "URC"], ["HET", "WUA"], ["HET", "WUH"], ["HET", "XIL"], ["HET", "XIY"], ["HET", "YIE"], ["HFA", "SDV"], ["HFE", "HKG"], ["HFE", "HRB"], ["HFE", "ICN"], ["HFE", "KHH"], ["HFE", "KMG"], ["HFE", "KWE"], ["HFE", "KWL"], ["HFE", "LHW"], ["HFE", "LJG"], ["HFE", "MFM"], ["HFE", "NNG"], ["HFE", "PEK"], ["HFE", "PVG"], ["HFE", "SHE"], ["HFE", "SWA"], ["HFE", "SYX"], ["HFE", "SZX"], ["HFE", "TAO"], ["HFE", "TPE"], ["HFE", "TSA"], ["HFE", "TXN"], ["HFE", "TYN"], ["HFE", "XIY"], ["HFE", "XMN"], ["HFE", "YNT"], ["HFE", "ZUH"], ["HFS", "TYF"], ["HFT", "HVG"], ["HFT", "MEH"], ["HFT", "SOJ"], ["HFT", "TOS"], ["HFT", "VDS"], ["HGA", "JIB"], ["HGA", "MGQ"], ["HGA", "NBO"], ["HGA", "SHJ"], ["HGA", "WJR"], ["HGH", "HKG"], ["HGH", "HKT"], ["HGH", "HRB"], ["HGH", "ICN"], ["HGH", "JHG"], ["HGH", "JJN"], ["HGH", "JNZ"], ["HGH", "KHH"], ["HGH", "KIX"], ["HGH", "KMG"], ["HGH", "KOW"], ["HGH", "KUL"], ["HGH", "KWE"], ["HGH", "KWL"], ["HGH", "LHW"], ["HGH", "LJG"], ["HGH", "LYG"], ["HGH", "LYI"], ["HGH", "LZO"], ["HGH", "MFM"], ["HGH", "NNG"], ["HGH", "NNY"], ["HGH", "NRT"], ["HGH", "PEK"], ["HGH", "PUS"], ["HGH", "RMQ"], ["HGH", "SHE"], ["HGH", "SIN"], ["HGH", "SJW"], ["HGH", "SWA"], ["HGH", "SYX"], ["HGH", "SZX"], ["HGH", "TAO"], ["HGH", "TGO"], ["HGH", "TNA"], ["HGH", "TPE"], ["HGH", "TSA"], ["HGH", "TSN"], ["HGH", "TYN"], ["HGH", "URC"], ["HGH", "WEF"], ["HGH", "WUH"], ["HGH", "XFN"], ["HGH", "XIY"], ["HGH", "XMN"], ["HGH", "YCU"], ["HGH", "YIH"], ["HGH", "YNT"], ["HGH", "ZUH"], ["HGR", "IAD"], ["HGR", "SFB"], ["HGU", "LAE"], ["HGU", "MAG"], ["HGU", "MXH"], ["HGU", "POM"], ["HGU", "TBG"], ["HGU", "TIZ"], ["HGU", "UNG"], ["HGU", "WWK"], ["HHN", "IBZ"], ["HHN", "KIR"], ["HHN", "KTW"], ["HHN", "KUN"], ["HHN", "LIS"], ["HHN", "MPL"], ["HHN", "NDR"], ["HHN", "OPO"], ["HHN", "PDV"], ["HHN", "PMI"], ["HHN", "PSA"], ["HHN", "PSR"], ["HHN", "PUY"], ["HHN", "RAK"], ["HHN", "REU"], ["HHN", "RIX"], ["HHN", "SCQ"], ["HHN", "SDR"], ["HHN", "SKG"], ["HHN", "SKP"], ["HHN", "SOF"], ["HHN", "STN"], ["HHN", "SUF"], ["HHN", "TFS"], ["HHN", "TMP"], ["HHN", "TPS"], ["HHN", "TSF"], ["HHN", "VLC"], ["HHN", "VOL"], ["HHN", "XRY"], ["HHN", "ZAD"], ["HIA", "HKG"], ["HIA", "HRB"], ["HIA", "PEK"], ["HIA", "SHA"], ["HIA", "SZX"], ["HIA", "TSN"], ["HIA", "WNZ"], ["HIA", "XIY"], ["HIB", "MSP"], ["HIJ", "HND"], ["HIJ", "ICN"], ["HIJ", "NRT"], ["HIJ", "OKA"], ["HIJ", "PVG"], ["HIJ", "SDJ"], ["HIJ", "TPE"], ["HIR", "IRA"], ["HIR", "KGE"], ["HIR", "MUA"], ["HIR", "NAN"], ["HIR", "NNB"], ["HIR", "POM"], ["HIR", "RBV"], ["HIR", "RNA"], ["HIR", "RNL"], ["HIR", "RUS"], ["HIR", "SCZ"], ["HIR", "VAO"], ["HIR", "VLI"], ["HJR", "VNS"], ["HKD", "HND"], ["HKD", "ITM"], ["HKD", "KIX"], ["HKD", "NGO"], ["HKD", "TPE"], ["HKG", "HKT"], ["HKG", "HND"], ["HKG", "HRB"], ["HKG", "HYD"], ["HKG", "ICN"], ["HKG", "ILO"], ["HKG", "IST"], ["HKG", "JFK"], ["HKG", "JJN"], ["HKG", "JNB"], ["HKG", "KHH"], ["HKG", "KHN"], ["HKG", "KHV"], ["HKG", "KIX"], ["HKG", "KMG"], ["HKG", "KOJ"], ["HKG", "KTM"], ["HKG", "KUL"], ["HKG", "KWE"], ["HKG", "KWL"], ["HKG", "LAX"], ["HKG", "LHR"], ["HKG", "LJG"], ["HKG", "LYG"], ["HKG", "MAA"], ["HKG", "MEL"], ["HKG", "MLE"], ["HKG", "MNL"], ["HKG", "MRU"], ["HKG", "MUC"], ["HKG", "MXP"], ["HKG", "MXZ"], ["HKG", "NAN"], ["HKG", "NGB"], ["HKG", "NGO"], ["HKG", "NKG"], ["HKG", "NNG"], ["HKG", "NRT"], ["HKG", "OKA"], ["HKG", "ORD"], ["HKG", "OVB"], ["HKG", "PEK"], ["HKG", "PEN"], ["HKG", "PER"], ["HKG", "PNH"], ["HKG", "POM"], ["HKG", "PUS"], ["HKG", "PVG"], ["HKG", "REP"], ["HKG", "RGN"], ["HKG", "RMQ"], ["HKG", "RUH"], ["HKG", "SFO"], ["HKG", "SGN"], ["HKG", "SHA"], ["HKG", "SHE"], ["HKG", "SIN"], ["HKG", "SUB"], ["HKG", "SVO"], ["HKG", "SWA"], ["HKG", "SYD"], ["HKG", "SYX"], ["HKG", "TAO"], ["HKG", "TLV"], ["HKG", "TNA"], ["HKG", "TNN"], ["HKG", "TPE"], ["HKG", "TSN"], ["HKG", "TYN"], ["HKG", "ULN"], ["HKG", "USM"], ["HKG", "VVO"], ["HKG", "WNZ"], ["HKG", "WUH"], ["HKG", "WUS"], ["HKG", "WUX"], ["HKG", "XIY"], ["HKG", "XMN"], ["HKG", "XUZ"], ["HKG", "YIH"], ["HKG", "YNT"], ["HKG", "YNZ"], ["HKG", "YVR"], ["HKG", "YYZ"], ["HKG", "ZHA"], ["HKG", "ZRH"], ["HKN", "LAE"], ["HKN", "POM"], ["HKN", "RAB"], ["HKT", "ICN"], ["HKT", "KMG"], ["HKT", "KUL"], ["HKT", "KWE"], ["HKT", "LED"], ["HKT", "MEL"], ["HKT", "MNL"], ["HKT", "OVB"], ["HKT", "PEK"], ["HKT", "PEN"], ["HKT", "PER"], ["HKT", "PVG"], ["HKT", "SIN"], ["HKT", "SVX"], ["HKT", "SYD"], ["HKT", "SZX"], ["HKT", "USM"], ["HKT", "UTH"], ["HKT", "UTP"], ["HKT", "VKO"], ["HLD", "HRB"], ["HLD", "HTA"], ["HLD", "JGD"], ["HLD", "NAY"], ["HLD", "PEK"], ["HLD", "TGO"], ["HLH", "NAY"], ["HLH", "PEK"], ["HLH", "SHE"], ["HLN", "MSP"], ["HLN", "SEA"], ["HLN", "SLC"], ["HLZ", "PMR"], ["HLZ", "WLG"], ["HMA", "LBD"], ["HMA", "NJC"], ["HMA", "OMS"], ["HMA", "OVB"], ["HMA", "SVX"], ["HMA", "TJM"], ["HMA", "URJ"], ["HMB", "JED"], ["HMB", "KWI"], ["HMB", "RUH"], ["HMB", "SHJ"], ["HME", "HRM"], ["HME", "IAM"], ["HME", "LGW"], ["HME", "ORN"], ["HMI", "KRL"], ["HMI", "PEK"], ["HMI", "PVG"], ["HMI", "URC"], ["HMI", "XIY"], ["HMO", "LAX"], ["HMO", "LMM"], ["HMO", "MEX"], ["HMO", "MTY"], ["HMO", "MXL"], ["HMO", "PHX"], ["HMO", "TIJ"], ["HMV", "VHM"], ["HNA", "ITM"], ["HNA", "NKM"], ["HND", "HNL"], ["HND", "HSG"], ["HND", "ICN"], ["HND", "ISG"], ["HND", "ITM"], ["HND", "IWJ"], ["HND", "IWK"], ["HND", "IZO"], ["HND", "KCZ"], ["HND", "KIX"], ["HND", "KKJ"], ["HND", "KMI"], ["HND", "KMJ"], ["HND", "KMQ"], ["HND", "KOJ"], ["HND", "KUH"], ["HND", "KUL"], ["HND", "LAX"], ["HND", "LHR"], ["HND", "MBE"], ["HND", "MMB"], ["HND", "MMY"], ["HND", "MNL"], ["HND", "MSJ"], ["HND", "MUC"], ["HND", "MYJ"], ["HND", "NGO"], ["HND", "NGS"], ["HND", "NTQ"], ["HND", "OBO"], ["HND", "OIM"], ["HND", "OIT"], ["HND", "OKA"], ["HND", "OKJ"], ["HND", "ONJ"], ["HND", "PEK"], ["HND", "SEA"], ["HND", "SFO"], ["HND", "SGN"], ["HND", "SHA"], ["HND", "SHB"], ["HND", "SHM"], ["HND", "SIN"], ["HND", "SYO"], ["HND", "TAK"], ["HND", "TKS"], ["HND", "TOY"], ["HND", "TPE"], ["HND", "TSA"], ["HND", "TTJ"], ["HND", "UBJ"], ["HND", "UKB"], ["HND", "WKJ"], ["HND", "YGJ"], ["HND", "YVR"], ["HNH", "JNU"], ["HNL", "IAD"], ["HNL", "IAH"], ["HNL", "ICN"], ["HNL", "ITO"], ["HNL", "JFK"], ["HNL", "JHM"], ["HNL", "KIX"], ["HNL", "KOA"], ["HNL", "LAS"], ["HNL", "LAX"], ["HNL", "LIH"], ["HNL", "LNY"], ["HNL", "MAJ"], ["HNL", "MEL"], ["HNL", "MKK"], ["HNL", "MNL"], ["HNL", "NAN"], ["HNL", "NGO"], ["HNL", "NRT"], ["HNL", "OAK"], ["HNL", "OGG"], ["HNL", "ORD"], ["HNL", "PDX"], ["HNL", "PEK"], ["HNL", "PHX"], ["HNL", "PPG"], ["HNL", "PPT"], ["HNL", "PVG"], ["HNL", "SAN"], ["HNL", "SDJ"], ["HNL", "SEA"], ["HNL", "SFO"], ["HNL", "SJC"], ["HNL", "SLC"], ["HNL", "SMF"], ["HNL", "SYD"], ["HNL", "TPE"], ["HNL", "YVR"], ["HNM", "OGG"], ["HNS", "JNU"], ["HNS", "SGY"], ["HOB", "IAH"], ["HOD", "JED"], ["HOD", "SAH"], ["HOE", "VTE"], ["HOF", "JED"], ["HOF", "RUH"], ["HOF", "SHJ"], ["HOG", "MAN"], ["HOG", "MBJ"], ["HOG", "MXP"], ["HOG", "YUL"], ["HOG", "YYZ"], ["HOI", "MKP"], ["HOI", "PPT"], ["HON", "PIR"], ["HOR", "LIS"], ["HOR", "PDL"], ["HOR", "TER"], ["HOT", "MEM"], ["HOU", "HRL"], ["HOU", "IND"], ["HOU", "ISP"], ["HOU", "JAN"], ["HOU", "JAX"], ["HOU", "JFK"], ["HOU", "LAS"], ["HOU", "LAX"], ["HOU", "LGA"], ["HOU", "LIT"], ["HOU", "MAF"], ["HOU", "MCI"], ["HOU", "MCO"], ["HOU", "MDW"], ["HOU", "MEM"], ["HOU", "MSY"], ["HOU", "OAK"], ["HOU", "OKC"], ["HOU", "PHX"], ["HOU", "PIT"], ["HOU", "PNS"], ["HOU", "PVD"], ["HOU", "RDU"], ["HOU", "SAN"], ["HOU", "SAT"], ["HOU", "SNA"], ["HOU", "STL"], ["HOU", "TPA"], ["HOU", "TUL"], ["HOV", "OSL"], ["HOV", "SOG"], ["HPB", "SCM"], ["HPB", "VAK"], ["HPH", "SGN"], ["HPN", "HYA"], ["HPN", "LEB"], ["HPN", "MCO"], ["HPN", "MVY"], ["HPN", "ORD"], ["HPN", "PBI"], ["HPN", "PHL"], ["HPN", "RSW"], ["HPN", "TPA"], ["HRB", "ICN"], ["HRB", "IKT"], ["HRB", "JGD"], ["HRB", "JMU"], ["HRB", "JNG"], ["HRB", "JXA"], ["HRB", "KHN"], ["HRB", "KHV"], ["HRB", "KIJ"], ["HRB", "KIX"], ["HRB", "LDS"], ["HRB", "NAY"], ["HRB", "NGB"], ["HRB", "NKG"], ["HRB", "NZH"], ["HRB", "OHE"], ["HRB", "OVB"], ["HRB", "PEK"], ["HRB", "PVG"], ["HRB", "SJW"], ["HRB", "SVX"], ["HRB", "SZX"], ["HRB", "TAO"], ["HRB", "TGO"], ["HRB", "TNA"], ["HRB", "TPE"], ["HRB", "TSN"], ["HRB", "TYN"], ["HRB", "UUS"], ["HRB", "WNZ"], ["HRB", "WUH"], ["HRB", "XIY"], ["HRB", "XUZ"], ["HRB", "YCU"], ["HRB", "YIW"], ["HRB", "YKS"], ["HRB", "YNT"], ["HRB", "YNZ"], ["HRB", "YTY"], ["HRE", "JNB"], ["HRE", "LAD"], ["HRE", "LLW"], ["HRE", "LUN"], ["HRE", "LVI"], ["HRE", "NBO"], ["HRE", "VFA"], ["HRE", "WDH"], ["HRG", "IST"], ["HRG", "LEJ"], ["HRG", "LGW"], ["HRG", "MAN"], ["HRG", "MUC"], ["HRG", "NUE"], ["HRG", "OVB"], ["HRG", "SSH"], ["HRG", "SVO"], ["HRG", "SVX"], ["HRG", "SZG"], ["HRG", "TXL"], ["HRG", "VIE"], ["HRG", "VKO"], ["HRG", "ZRH"], ["HRI", "JED"], ["HRI", "MAA"], ["HRI", "MLE"], ["HRI", "PEK"], ["HRI", "PVG"], ["HRK", "KBP"], ["HRK", "KUT"], ["HRK", "LCA"], ["HRK", "SAW"], ["HRK", "SHJ"], ["HRK", "SVO"], ["HRK", "VIE"], ["HRK", "WAW"], ["HRL", "IAH"], ["HRL", "LBB"], ["HRL", "MAF"], ["HRL", "SAT"], ["HRO", "MCI"], ["HRO", "MEM"], ["HSG", "ICN"], ["HSG", "PVG"], ["HSL", "HUS"], ["HSL", "KAL"], ["HSL", "KYU"], ["HSL", "RBY"], ["HSN", "JJN"], ["HSN", "LYG"], ["HSN", "NAY"], ["HSN", "PEK"], ["HSN", "PVG"], ["HSN", "SZX"], ["HSN", "XMN"], ["HSV", "IAD"], ["HSV", "IAH"], ["HSV", "ORD"], ["HTA", "IKT"], ["HTA", "KHV"], ["HTA", "NZH"], ["HTA", "OVB"], ["HTA", "SVO"], ["HTA", "UUD"], ["HTI", "MEL"], ["HTI", "SYD"], ["HTN", "URC"], ["HTS", "MYR"], ["HTS", "PIE"], ["HTS", "SFB"], ["HTY", "IST"], ["HTY", "JED"], ["HTY", "MED"], ["HTY", "RUH"], ["HTY", "SAW"], ["HUH", "MOZ"], ["HUH", "PPT"], ["HUH", "RFP"], ["HUI", "SGN"], ["HUN", "KHH"], ["HUN", "RMQ"], ["HUN", "TNA"], ["HUN", "TSA"], ["HUU", "LIM"], ["HUX", "IAH"], ["HUX", "MEX"], ["HUY", "JER"], ["HUY", "NWI"], ["HVB", "SYD"], ["HVD", "ULN"], ["HVG", "MEH"], ["HVN", "PHL"], ["HYD", "IDR"], ["HYD", "IXM"], ["HYD", "JAI"], ["HYD", "JED"], ["HYD", "KUL"], ["HYD", "LHR"], ["HYD", "MAA"], ["HYD", "MCT"], ["HYD", "PNQ"], ["HYD", "RJA"], ["HYD", "RPR"], ["HYD", "RUH"], ["HYD", "SHJ"], ["HYD", "SIN"], ["HYD", "TIR"], ["HYD", "VGA"], ["HYD", "VTZ"], ["HYG", "KTN"], ["HYN", "PEK"], ["HYN", "SZX"], ["HYN", "WUH"], ["HYN", "ZUH"], ["HZH", "KWE"], ["IAA", "KJA"], ["IAD", "IAH"], ["IAD", "ICN"], ["IAD", "IND"], ["IAD", "IST"], ["IAD", "JAX"], ["IAD", "JED"], ["IAD", "JFK"], ["IAD", "JST"], ["IAD", "KEF"], ["IAD", "KWI"], ["IAD", "LAS"], ["IAD", "LAX"], ["IAD", "LGA"], ["IAD", "LGB"], ["IAD", "LHR"], ["IAD", "LNS"], ["IAD", "LWB"], ["IAD", "MAN"], ["IAD", "MBJ"], ["IAD", "MCI"], ["IAD", "MCO"], ["IAD", "MDT"], ["IAD", "MDW"], ["IAD", "MEX"], ["IAD", "MGW"], ["IAD", "MIA"], ["IAD", "MSP"], ["IAD", "MSY"], ["IAD", "MUC"], ["IAD", "NRT"], ["IAD", "OKC"], ["IAD", "OMA"], ["IAD", "ORD"], ["IAD", "ORF"], ["IAD", "PDX"], ["IAD", "PEK"], ["IAD", "PHL"], ["IAD", "PHX"], ["IAD", "PIT"], ["IAD", "PTY"], ["IAD", "PUJ"], ["IAD", "PVD"], ["IAD", "PWM"], ["IAD", "RDU"], ["IAD", "RIC"], ["IAD", "ROA"], ["IAD", "ROC"], ["IAD", "RUH"], ["IAD", "SAL"], ["IAD", "SAN"], ["IAD", "SAT"], ["IAD", "SAV"], ["IAD", "SCE"], ["IAD", "SDF"], ["IAD", "SEA"], ["IAD", "SFO"], ["IAD", "SHD"], ["IAD", "SJO"], ["IAD", "SJU"], ["IAD", "SMF"], ["IAD", "STL"], ["IAD", "STT"], ["IAD", "SVO"], ["IAD", "SXM"], ["IAD", "SYR"], ["IAD", "TPA"], ["IAD", "TUL"], ["IAD", "TYS"], ["IAD", "VIE"], ["IAD", "YOW"], ["IAD", "YTZ"], ["IAD", "YUL"], ["IAD", "YYZ"], ["IAD", "ZRH"], ["IAG", "MYR"], ["IAG", "PGD"], ["IAG", "PIE"], ["IAG", "SFB"], ["IAH", "ICN"], ["IAH", "ICT"], ["IAH", "IND"], ["IAH", "IST"], ["IAH", "JAN"], ["IAH", "JAX"], ["IAH", "LAS"], ["IAH", "LAX"], ["IAH", "LBB"], ["IAH", "LCH"], ["IAH", "LEX"], ["IAH", "LFT"], ["IAH", "LGA"], ["IAH", "LHR"], ["IAH", "LIM"], ["IAH", "LIR"], ["IAH", "LIT"], ["IAH", "LOS"], ["IAH", "LRD"], ["IAH", "MAF"], ["IAH", "MBJ"], ["IAH", "MCI"], ["IAH", "MCO"], ["IAH", "MEM"], ["IAH", "MEX"], ["IAH", "MFE"], ["IAH", "MGA"], ["IAH", "MIA"], ["IAH", "MID"], ["IAH", "MKE"], ["IAH", "MLM"], ["IAH", "MLU"], ["IAH", "MOB"], ["IAH", "MSP"], ["IAH", "MSY"], ["IAH", "MTY"], ["IAH", "MUC"], ["IAH", "NAS"], ["IAH", "NRT"], ["IAH", "OAX"], ["IAH", "OKC"], ["IAH", "OMA"], ["IAH", "ONT"], ["IAH", "ORD"], ["IAH", "ORF"], ["IAH", "PBC"], ["IAH", "PBI"], ["IAH", "PDX"], ["IAH", "PEK"], ["IAH", "PHL"], ["IAH", "PHX"], ["IAH", "PIT"], ["IAH", "PNS"], ["IAH", "POS"], ["IAH", "PSP"], ["IAH", "PTY"], ["IAH", "PVR"], ["IAH", "QRO"], ["IAH", "RDU"], ["IAH", "RIC"], ["IAH", "RSW"], ["IAH", "RTB"], ["IAH", "SAL"], ["IAH", "SAN"], ["IAH", "SAP"], ["IAH", "SAT"], ["IAH", "SAV"], ["IAH", "SDF"], ["IAH", "SEA"], ["IAH", "SFO"], ["IAH", "SHV"], ["IAH", "SJC"], ["IAH", "SJD"], ["IAH", "SJO"], ["IAH", "SJU"], ["IAH", "SLC"], ["IAH", "SLP"], ["IAH", "SLW"], ["IAH", "SMF"], ["IAH", "SNA"], ["IAH", "STL"], ["IAH", "SYD"], ["IAH", "TAM"], ["IAH", "TGU"], ["IAH", "TPA"], ["IAH", "TRC"], ["IAH", "TUL"], ["IAH", "TUS"], ["IAH", "TYR"], ["IAH", "TYS"], ["IAH", "UIO"], ["IAH", "VCT"], ["IAH", "VER"], ["IAH", "VPS"], ["IAH", "VSA"], ["IAH", "XNA"], ["IAH", "YEG"], ["IAH", "YUL"], ["IAH", "YVR"], ["IAH", "YYC"], ["IAH", "YYZ"], ["IAH", "ZIH"], ["IAH", "ZLO"], ["IAM", "OGX"], ["IAN", "ORV"], ["IAN", "OTZ"], ["IAR", "LED"], ["IAS", "LTN"], ["IAS", "OTP"], ["IAS", "TLV"], ["IAS", "TRN"], ["IAS", "VIE"], ["IBR", "NGO"], ["IBR", "PVG"], ["IBR", "UKB"], ["IBZ", "LBA"], ["IBZ", "LCY"], ["IBZ", "LGW"], ["IBZ", "LHR"], ["IBZ", "LPL"], ["IBZ", "LTN"], ["IBZ", "LUX"], ["IBZ", "MAD"], ["IBZ", "MAH"], ["IBZ", "MAN"], ["IBZ", "MRS"], ["IBZ", "MUC"], ["IBZ", "MXP"], ["IBZ", "NCL"], ["IBZ", "NRN"], ["IBZ", "NUE"], ["IBZ", "ORY"], ["IBZ", "PAD"], ["IBZ", "PIK"], ["IBZ", "PMI"], ["IBZ", "PSA"], ["IBZ", "RTM"], ["IBZ", "SCQ"], ["IBZ", "SEN"], ["IBZ", "STN"], ["IBZ", "STR"], ["IBZ", "TXL"], ["IBZ", "VLC"], ["IBZ", "ZRH"], ["ICI", "SUV"], ["ICN", "IST"], ["ICN", "JFK"], ["ICN", "KHH"], ["ICN", "KHN"], ["ICN", "KHV"], ["ICN", "KIJ"], ["ICN", "KIX"], ["ICN", "KLO"], ["ICN", "KMG"], ["ICN", "KMI"], ["ICN", "KMJ"], ["ICN", "KMQ"], ["ICN", "KOJ"], ["ICN", "KTM"], ["ICN", "KUL"], ["ICN", "KWL"], ["ICN", "LAS"], ["ICN", "LAX"], ["ICN", "LED"], ["ICN", "LHR"], ["ICN", "LJG"], ["ICN", "MAD"], ["ICN", "MDG"], ["ICN", "MFM"], ["ICN", "MNL"], ["ICN", "MUC"], ["ICN", "MXP"], ["ICN", "MYJ"], ["ICN", "NAN"], ["ICN", "NBO"], ["ICN", "NGB"], ["ICN", "NGO"], ["ICN", "NGS"], ["ICN", "NKG"], ["ICN", "NRT"], ["ICN", "OIT"], ["ICN", "OKA"], ["ICN", "OKJ"], ["ICN", "ORD"], ["ICN", "PEK"], ["ICN", "PNH"], ["ICN", "PRG"], ["ICN", "PVG"], ["ICN", "REP"], ["ICN", "RGN"], ["ICN", "ROR"], ["ICN", "RUH"], ["ICN", "SDJ"], ["ICN", "SEA"], ["ICN", "SFO"], ["ICN", "SGN"], ["ICN", "SHE"], ["ICN", "SIN"], ["ICN", "SPN"], ["ICN", "SVO"], ["ICN", "SYD"], ["ICN", "SZX"], ["ICN", "TAE"], ["ICN", "TAK"], ["ICN", "TAO"], ["ICN", "TAS"], ["ICN", "TLV"], ["ICN", "TNA"], ["ICN", "TOY"], ["ICN", "TPE"], ["ICN", "TSN"], ["ICN", "TXN"], ["ICN", "UBJ"], ["ICN", "ULN"], ["ICN", "UUS"], ["ICN", "VIE"], ["ICN", "VTE"], ["ICN", "VVO"], ["ICN", "WUH"], ["ICN", "XIY"], ["ICN", "XMN"], ["ICN", "YGJ"], ["ICN", "YNJ"], ["ICN", "YNT"], ["ICN", "YVR"], ["ICN", "YYZ"], ["ICN", "ZRH"], ["ICT", "LAS"], ["ICT", "LAX"], ["ICT", "MDW"], ["ICT", "MSP"], ["ICT", "ORD"], ["ICT", "PHL"], ["IDA", "LAS"], ["IDA", "SLC"], ["IDR", "NAG"], ["IDR", "PNQ"], ["IDR", "RPR"], ["IEV", "KTW"], ["IEV", "KUT"], ["IEV", "LCA"], ["IEV", "LTN"], ["IEV", "OZH"], ["IEV", "TSF"], ["IEV", "UDJ"], ["IEV", "VKO"], ["IEV", "VLC"], ["IEV", "VNO"], ["IFJ", "RKV"], ["IFN", "IST"], ["IFN", "JED"], ["IFN", "KER"], ["IFN", "KIH"], ["IFN", "KWI"], ["IFN", "MED"], ["IFN", "MHD"], ["IFN", "MRX"], ["IFN", "PGU"], ["IFN", "SYZ"], ["IFN", "TBZ"], ["IFN", "THR"], ["IFO", "KBP"], ["IGA", "MYG"], ["IGA", "NAS"], ["IGD", "IST"], ["IGR", "SLA"], ["IGU", "LIM"], ["IGU", "POA"], ["IGU", "VCP"], ["IIL", "THR"], ["IJK", "LED"], ["IJK", "SVX"], ["IKA", "IST"], ["IKA", "ISU"], ["IKA", "KBL"], ["IKA", "KHI"], ["IKA", "KUL"], ["IKA", "KWI"], ["IKA", "LHR"], ["IKA", "MCT"], ["IKA", "MSQ"], ["IKA", "MXP"], ["IKA", "MZR"], ["IKA", "NJF"], ["IKA", "ORY"], ["IKA", "PEK"], ["IKA", "PVG"], ["IKA", "SAW"], ["IKA", "SHJ"], ["IKA", "SVO"], ["IKA", "TAS"], ["IKA", "URC"], ["IKA", "VIE"], ["IKI", "NGS"], ["IKS", "YKS"], ["IKT", "KCK"], ["IKT", "KHV"], ["IKT", "KJA"], ["IKT", "KYZ"], ["IKT", "MJZ"], ["IKT", "NER"], ["IKT", "NZH"], ["IKT", "ODO"], ["IKT", "OSS"], ["IKT", "OVB"], ["IKT", "PEK"], ["IKT", "SVO"], ["IKT", "TAS"], ["IKT", "UKX"], ["IKT", "ULK"], ["IKT", "UUD"], ["IKT", "VKO"], ["IKT", "VVO"], ["IKT", "YKS"], ["ILD", "PMI"], ["ILG", "MCO"], ["ILG", "MDW"], ["ILG", "RSW"], ["ILG", "TPA"], ["ILM", "LGA"], ["ILM", "PHL"], ["ILO", "MNL"], ["ILO", "PPS"], ["ILO", "SIN"], ["IMF", "IXA"], ["IMF", "IXS"], ["IMP", "MAB"], ["IMP", "SLZ"], ["IMT", "MSP"], ["IMT", "RHI"], ["IND", "JFK"], ["IND", "LAS"], ["IND", "LAX"], ["IND", "LGA"], ["IND", "MBJ"], ["IND", "MCI"], ["IND", "MCO"], ["IND", "MEM"], ["IND", "MIA"], ["IND", "MSP"], ["IND", "ORD"], ["IND", "PHL"], ["IND", "PHX"], ["IND", "RDU"], ["IND", "RSW"], ["IND", "SFO"], ["IND", "SLC"], ["IND", "TPA"], ["IND", "TTN"], ["IND", "YYZ"], ["INH", "JNB"], ["INH", "MPM"], ["INH", "VNX"], ["INL", "MSP"], ["INN", "LGW"], ["INN", "PMI"], ["INN", "VIE"], ["INU", "MAJ"], ["INU", "TRW"], ["INV", "KOI"], ["INV", "LGW"], ["INV", "LSI"], ["INV", "LTN"], ["INV", "MAN"], ["INV", "SYY"], ["INZ", "TMR"], ["IOM", "LCY"], ["IOM", "LGW"], ["IOM", "LPL"], ["IOM", "MAN"], ["IOM", "NCL"], ["IOS", "SDU"], ["IOS", "SSA"], ["IOS", "VCP"], ["IPA", "TAH"], ["IPA", "VLI"], ["IPC", "PPT"], ["IPC", "SCL"], ["IPH", "SIN"], ["IPL", "SAN"], ["IPN", "PLU"], ["IPT", "PHL"], ["IQN", "LHW"], ["IQN", "NAY"], ["IQN", "XIY"], ["IQQ", "LPB"], ["IQQ", "SCL"], ["IQQ", "VVI"], ["IQT", "LIM"], ["IQT", "PCL"], ["IQT", "PTY"], ["IQT", "TPP"], ["IRA", "NNB"], ["IRA", "RNA"], ["IRK", "STL"], ["IRZ", "TFF"], ["ISA", "JCK"], ["ISA", "OOL"], ["ISA", "TSV"], ["ISB", "IST"], ["ISB", "JED"], ["ISB", "KBL"], ["ISB", "KDU"], ["ISB", "KHI"], ["ISB", "KWI"], ["ISB", "LBA"], ["ISB", "LHE"], ["ISB", "LHR"], ["ISB", "MAN"], ["ISB", "MCT"], ["ISB", "MED"], ["ISB", "MUX"], ["ISB", "MXP"], ["ISB", "OSL"], ["ISB", "PEK"], ["ISB", "PEW"], ["ISB", "RUH"], ["ISB", "SHJ"], ["ISB", "SKT"], ["ISB", "SKZ"], ["ISB", "UET"], ["ISB", "URC"], ["ISB", "YYZ"], ["ISC", "LEQ"], ["ISC", "NQY"], ["ISE", "IST"], ["ISG", "KIX"], ["ISG", "MMY"], ["ISG", "NGO"], ["ISG", "OKA"], ["ISG", "TPE"], ["ISN", "MSP"], ["ISP", "MCO"], ["ISP", "PBI"], ["ISP", "PGD"], ["ISP", "PHL"], ["ISP", "SNA"], ["ISP", "TPA"], ["IST", "ISU"], ["IST", "JED"], ["IST", "JFK"], ["IST", "JIB"], ["IST", "JNB"], ["IST", "JRO"], ["IST", "KAN"], ["IST", "KBL"], ["IST", "KBP"], ["IST", "KCM"], ["IST", "KFS"], ["IST", "KGL"], ["IST", "KHI"], ["IST", "KIV"], ["IST", "KIX"], ["IST", "KRR"], ["IST", "KRT"], ["IST", "KSH"], ["IST", "KSY"], ["IST", "KTM"], ["IST", "KUL"], ["IST", "KVD"], ["IST", "KWI"], ["IST", "KYA"], ["IST", "KZN"], ["IST", "KZR"], ["IST", "LAX"], ["IST", "LBV"], ["IST", "LED"], ["IST", "LEJ"], ["IST", "LGW"], ["IST", "LHE"], ["IST", "LHR"], ["IST", "LIS"], ["IST", "LJU"], ["IST", "LOS"], ["IST", "LTN"], ["IST", "LUX"], ["IST", "LWO"], ["IST", "LYS"], ["IST", "MAD"], ["IST", "MAN"], ["IST", "MBA"], ["IST", "MCT"], ["IST", "MED"], ["IST", "MHD"], ["IST", "MLA"], ["IST", "MLE"], ["IST", "MLX"], ["IST", "MQM"], ["IST", "MRS"], ["IST", "MSQ"], ["IST", "MSR"], ["IST", "MUC"], ["IST", "MXP"], ["IST", "MZH"], ["IST", "MZR"], ["IST", "NAJ"], ["IST", "NAP"], ["IST", "NAV"], ["IST", "NBC"], ["IST", "NBO"], ["IST", "NCE"], ["IST", "NDJ"], ["IST", "NIM"], ["IST", "NJF"], ["IST", "NOP"], ["IST", "NRT"], ["IST", "NSI"], ["IST", "NUE"], ["IST", "ODS"], ["IST", "ORD"], ["IST", "ORN"], ["IST", "OSL"], ["IST", "OSM"], ["IST", "OSS"], ["IST", "OTP"], ["IST", "OUA"], ["IST", "OVB"], ["IST", "PEK"], ["IST", "PRG"], ["IST", "PRN"], ["IST", "PVG"], ["IST", "RIX"], ["IST", "ROV"], ["IST", "RTM"], ["IST", "RUH"], ["IST", "SAH"], ["IST", "SCO"], ["IST", "SIN"], ["IST", "SJJ"], ["IST", "SKG"], ["IST", "SKP"], ["IST", "SOF"], ["IST", "SSH"], ["IST", "STR"], ["IST", "SVO"], ["IST", "SVX"], ["IST", "SYZ"], ["IST", "SZG"], ["IST", "TAS"], ["IST", "TBS"], ["IST", "TBZ"], ["IST", "TGD"], ["IST", "TIA"], ["IST", "TIF"], ["IST", "TIP"], ["IST", "TLL"], ["IST", "TLS"], ["IST", "TLV"], ["IST", "TRN"], ["IST", "TSE"], ["IST", "TUN"], ["IST", "TXL"], ["IST", "TZX"], ["IST", "UFA"], ["IST", "URC"], ["IST", "VAN"], ["IST", "VAS"], ["IST", "VCE"], ["IST", "VIE"], ["IST", "VKO"], ["IST", "VLC"], ["IST", "VNO"], ["IST", "WAW"], ["IST", "YNB"], ["IST", "YYZ"], ["IST", "ZAG"], ["IST", "ZRH"], ["ISU", "MUC"], ["ITB", "STM"], ["ITH", "PHL"], ["ITM", "KCZ"], ["ITM", "KIJ"], ["ITM", "KMI"], ["ITM", "KMJ"], ["ITM", "KOJ"], ["ITM", "MSJ"], ["ITM", "MYJ"], ["ITM", "NGS"], ["ITM", "NRT"], ["ITM", "OIT"], ["ITM", "OKA"], ["ITM", "SDJ"], ["ITO", "LAX"], ["ITO", "OGG"], ["IVC", "WLG"], ["IVL", "KTT"], ["IXB", "PBH"], ["IXC", "SXR"], ["IXE", "MCT"], ["IXE", "SHJ"], ["IXJ", "IXL"], ["IXJ", "SXR"], ["IXL", "SXR"], ["IXM", "MAA"], ["IXR", "PAT"], ["IXZ", "MAA"], ["IZA", "VCP"], ["JAC", "SLC"], ["JAI", "MCT"], ["JAI", "SHJ"], ["JAL", "MEX"], ["JAN", "MCO"], ["JAN", "MDW"], ["JAN", "ORD"], ["JAU", "LIM"], ["JAV", "JEG"], ["JAV", "JQA"], ["JAV", "JUV"], ["JAV", "SFJ"], ["JAX", "JFK"], ["JAX", "LAS"], ["JAX", "LGA"], ["JAX", "MDW"], ["JAX", "MHH"], ["JAX", "MIA"], ["JAX", "MSP"], ["JAX", "ORD"], ["JAX", "PHL"], ["JAX", "SJU"], ["JAX", "TPA"], ["JBQ", "PAP"], ["JBR", "STL"], ["JCK", "RCM"], ["JDO", "REC"], ["JDO", "VCP"], ["JDZ", "PEK"], ["JDZ", "SHA"], ["JDZ", "SZX"], ["JDZ", "XIY"], ["JDZ", "XMN"], ["JED", "JFK"], ["JED", "JIB"], ["JED", "JNB"], ["JED", "KAN"], ["JED", "KHI"], ["JED", "KRT"], ["JED", "KUL"], ["JED", "KWI"], ["JED", "LAX"], ["JED", "LGW"], ["JED", "LHE"], ["JED", "LHR"], ["JED", "LKO"], ["JED", "LXR"], ["JED", "MAA"], ["JED", "MAD"], ["JED", "MAN"], ["JED", "MCT"], ["JED", "MED"], ["JED", "MHD"], ["JED", "MNL"], ["JED", "MUX"], ["JED", "MXP"], ["JED", "NBO"], ["JED", "NDJ"], ["JED", "OMH"], ["JED", "ORN"], ["JED", "PEW"], ["JED", "PZU"], ["JED", "RAE"], ["JED", "RAS"], ["JED", "RIY"], ["JED", "RUH"], ["JED", "SAH"], ["JED", "SAW"], ["JED", "SHJ"], ["JED", "SHW"], ["JED", "SIN"], ["JED", "SKT"], ["JED", "SLL"], ["JED", "SSH"], ["JED", "SUB"], ["JED", "SYZ"], ["JED", "TAI"], ["JED", "TBZ"], ["JED", "THR"], ["JED", "TIP"], ["JED", "TUN"], ["JED", "TUU"], ["JED", "URY"], ["JED", "WAE"], ["JED", "YNB"], ["JED", "YYZ"], ["JEG", "JHS"], ["JEG", "SFJ"], ["JER", "LBA"], ["JER", "LCY"], ["JER", "LGW"], ["JER", "LPL"], ["JER", "MAN"], ["JER", "NCL"], ["JER", "NWI"], ["JER", "ORK"], ["JER", "SEN"], ["JER", "SOU"], ["JER", "STN"], ["JER", "STR"], ["JER", "ZRH"], ["JFK", "JNB"], ["JFK", "KBP"], ["JFK", "KEF"], ["JFK", "KIN"], ["JFK", "KIX"], ["JFK", "KWI"], ["JFK", "LAS"], ["JFK", "LAX"], ["JFK", "LCY"], ["JFK", "LGB"], ["JFK", "LHE"], ["JFK", "LHR"], ["JFK", "LIM"], ["JFK", "LIR"], ["JFK", "LOS"], ["JFK", "LRM"], ["JFK", "MAD"], ["JFK", "MAN"], ["JFK", "MBJ"], ["JFK", "MCO"], ["JFK", "MDE"], ["JFK", "MEX"], ["JFK", "MIA"], ["JFK", "MNL"], ["JFK", "MSP"], ["JFK", "MSY"], ["JFK", "MUC"], ["JFK", "MXP"], ["JFK", "NAS"], ["JFK", "NCE"], ["JFK", "NRT"], ["JFK", "OAK"], ["JFK", "ORD"], ["JFK", "ORF"], ["JFK", "ORY"], ["JFK", "OSL"], ["JFK", "PAP"], ["JFK", "PBI"], ["JFK", "PDX"], ["JFK", "PEK"], ["JFK", "PHL"], ["JFK", "PHX"], ["JFK", "PIT"], ["JFK", "PLS"], ["JFK", "POP"], ["JFK", "POS"], ["JFK", "PSE"], ["JFK", "PTY"], ["JFK", "PUJ"], ["JFK", "PVG"], ["JFK", "PWM"], ["JFK", "RDU"], ["JFK", "RIC"], ["JFK", "RIX"], ["JFK", "ROC"], ["JFK", "RSW"], ["JFK", "RUH"], ["JFK", "SAL"], ["JFK", "SAN"], ["JFK", "SAP"], ["JFK", "SAT"], ["JFK", "SAV"], ["JFK", "SCL"], ["JFK", "SDF"], ["JFK", "SDQ"], ["JFK", "SEA"], ["JFK", "SFO"], ["JFK", "SIN"], ["JFK", "SJC"], ["JFK", "SJO"], ["JFK", "SJU"], ["JFK", "SLC"], ["JFK", "SMF"], ["JFK", "SNN"], ["JFK", "SRQ"], ["JFK", "STI"], ["JFK", "STL"], ["JFK", "STT"], ["JFK", "SVO"], ["JFK", "SXM"], ["JFK", "SYR"], ["JFK", "TAB"], ["JFK", "TLV"], ["JFK", "TPA"], ["JFK", "TPE"], ["JFK", "TXL"], ["JFK", "UVF"], ["JFK", "VCE"], ["JFK", "VIE"], ["JFK", "VKO"], ["JFK", "WAW"], ["JFK", "YUL"], ["JFK", "YVR"], ["JFK", "YYC"], ["JFK", "YYZ"], ["JFK", "ZRH"], ["JFR", "UAK"], ["JGD", "OHE"], ["JGN", "JIC"], ["JGN", "LHW"], ["JGN", "XIY"], ["JGS", "PEK"], ["JGS", "SHA"], ["JGS", "SZX"], ["JGS", "XIY"], ["JGS", "XMN"], ["JHB", "KBR"], ["JHB", "KCH"], ["JHB", "KUL"], ["JHB", "MYY"], ["JHB", "PEN"], ["JHB", "SBW"], ["JHB", "SUB"], ["JHB", "SZB"], ["JHB", "TWU"], ["JHG", "KMG"], ["JHG", "LJG"], ["JHG", "LPQ"], ["JHG", "TCZ"], ["JHM", "KOA"], ["JHS", "SFJ"], ["JIB", "MGQ"], ["JIB", "NBO"], ["JIB", "SAH"], ["JIB", "TAI"], ["JIC", "LHW"], ["JIC", "NAY"], ["JIC", "XIY"], ["JIK", "LXS"], ["JIQ", "KMG"], ["JIQ", "PEK"], ["JIQ", "SHA"], ["JIU", "PEK"], ["JIU", "SHA"], ["JIU", "XMN"], ["JJN", "KWE"], ["JJN", "MFM"], ["JJN", "NKG"], ["JJN", "NNG"], ["JJN", "PEK"], ["JJN", "PVG"], ["JJN", "SHA"], ["JJN", "SZX"], ["JJN", "TPE"], ["JJN", "WUH"], ["JJN", "YIW"], ["JJU", "JNN"], ["JJU", "JNS"], ["JJU", "LLU"], ["JJU", "QFG"], ["JJU", "UAK"], ["JKH", "MJT"], ["JKH", "RHO"], ["JKH", "SKG"], ["JKL", "KGS"], ["JKL", "LRS"], ["JKR", "KTM"], ["JMK", "JTR"], ["JMK", "LGW"], ["JMK", "LHR"], ["JMK", "MAN"], ["JMK", "MXP"], ["JMK", "VIE"], ["JMU", "KHV"], ["JMU", "PEK"], ["JMU", "PVG"], ["JMU", "SHE"], ["JMU", "TAO"], ["JNB", "KGL"], ["JNB", "KIM"], ["JNB", "LAD"], ["JNB", "LBV"], ["JNB", "LHR"], ["JNB", "LLW"], ["JNB", "LOS"], ["JNB", "LUN"], ["JNB", "LVI"], ["JNB", "MGH"], ["JNB", "MPM"], ["JNB", "MQP"], ["JNB", "MRU"], ["JNB", "MSU"], ["JNB", "MTS"], ["JNB", "MUB"], ["JNB", "MUC"], ["JNB", "NBO"], ["JNB", "NLA"], ["JNB", "PBZ"], ["JNB", "PEK"], ["JNB", "PER"], ["JNB", "PHW"], ["JNB", "PLZ"], ["JNB", "PNR"], ["JNB", "POL"], ["JNB", "PTG"], ["JNB", "PZB"], ["JNB", "RCB"], ["JNB", "RUN"], ["JNB", "SEZ"], ["JNB", "SIN"], ["JNB", "SYD"], ["JNB", "TET"], ["JNB", "TLV"], ["JNB", "TNR"], ["JNB", "UTN"], ["JNB", "UTT"], ["JNB", "VFA"], ["JNB", "VNX"], ["JNB", "WDH"], ["JNB", "WVB"], ["JNB", "ZNZ"], ["JNB", "ZRH"], ["JNG", "KMG"], ["JNG", "PEK"], ["JNG", "SHA"], ["JNG", "SHE"], ["JNG", "XIY"], ["JNN", "LLU"], ["JNS", "UAK"], ["JNU", "KTN"], ["JNU", "PSG"], ["JNU", "SEA"], ["JNU", "SGY"], ["JNU", "SIT"], ["JNU", "YAK"], ["JNZ", "PVG"], ["JNZ", "TAO"], ["JOG", "KUL"], ["JOG", "LOP"], ["JOG", "PKU"], ["JOG", "PLM"], ["JOG", "SIN"], ["JOG", "SUB"], ["JOG", "UPG"], ["JOI", "POA"], ["JOI", "VCP"], ["JOL", "ZAM"], ["JOS", "LOS"], ["JPA", "SSA"], ["JPA", "VCP"], ["JQA", "UMD"], ["JQE", "PAC"], ["JRO", "KGL"], ["JRO", "MBA"], ["JRO", "MWZ"], ["JRO", "NBO"], ["JRO", "WIL"], ["JRO", "ZNZ"], ["JSH", "KSJ"], ["JSH", "PVK"], ["JSU", "SFJ"], ["JTC", "MII"], ["JTC", "VCP"], ["JTR", "LGW"], ["JTR", "LHR"], ["JTR", "MAN"], ["JTR", "VCE"], ["JTR", "VIE"], ["JTR", "VOL"], ["JTY", "LRS"], ["JUB", "KGL"], ["JUB", "KRT"], ["JUB", "NBO"], ["JUH", "NAY"], ["JUH", "SHA"], ["JUH", "XMN"], ["JUL", "LIM"], ["JUV", "NAQ"], ["JUZ", "NAY"], ["JUZ", "SZX"], ["JUZ", "XMN"], ["JXA", "PEK"], ["JXA", "SHE"], ["JXA", "TAO"], ["JYV", "KEM"], ["JZH", "PVG"], ["JZH", "XIY"], ["KAA", "LUN"], ["KAA", "NLA"], ["KAD", "LOS"], ["KAL", "NUL"], ["KAN", "KRT"], ["KAN", "LOS"], ["KAN", "NDJ"], ["KAW", "MGZ"], ["KAZ", "MDC"], ["KBL", "KDH"], ["KBL", "KWI"], ["KBL", "MHD"], ["KBL", "MZR"], ["KBL", "PEW"], ["KBP", "KGD"], ["KBP", "KIV"], ["KBP", "LCA"], ["KBP", "LED"], ["KBP", "LGW"], ["KBP", "LHR"], ["KBP", "LIS"], ["KBP", "LWO"], ["KBP", "MAD"], ["KBP", "MSQ"], ["KBP", "MUC"], ["KBP", "MXP"], ["KBP", "NAP"], ["KBP", "NCE"], ["KBP", "ODS"], ["KBP", "OSL"], ["KBP", "OVB"], ["KBP", "PRG"], ["KBP", "RHO"], ["KBP", "RIX"], ["KBP", "ROV"], ["KBP", "SAW"], ["KBP", "SHJ"], ["KBP", "SIP"], ["KBP", "SVO"], ["KBP", "SVX"], ["KBP", "TAS"], ["KBP", "TBS"], ["KBP", "TFS"], ["KBP", "TLL"], ["KBP", "TLV"], ["KBP", "TSE"], ["KBP", "TXL"], ["KBP", "UKS"], ["KBP", "VIE"], ["KBP", "VNO"], ["KBP", "WAW"], ["KBP", "ZRH"], ["KBR", "KCH"], ["KBR", "KUL"], ["KBR", "PEN"], ["KBR", "SIN"], ["KBR", "SZB"], ["KBV", "KUL"], ["KBV", "SIN"], ["KBV", "USM"], ["KCA", "URC"], ["KCH", "KUL"], ["KCH", "LGK"], ["KCH", "MKM"], ["KCH", "MYY"], ["KCH", "MZV"], ["KCH", "PEN"], ["KCH", "PNK"], ["KCH", "SBW"], ["KCH", "SIN"], ["KCM", "SAW"], ["KCZ", "NKM"], ["KDH", "MHD"], ["KDI", "UPG"], ["KDM", "MLE"], ["KDO", "MLE"], ["KDV", "NAN"], ["KDV", "SUV"], ["KEF", "LGW"], ["KEF", "LHR"], ["KEF", "LTN"], ["KEF", "MAN"], ["KEF", "MUC"], ["KEF", "OSL"], ["KEF", "SEA"], ["KEF", "SFB"], ["KEF", "SVG"], ["KEF", "SXF"], ["KEF", "TRD"], ["KEF", "YEG"], ["KEF", "YYZ"], ["KEF", "ZRH"], ["KEJ", "SVO"], ["KEP", "KTM"], ["KER", "SYZ"], ["KER", "THR"], ["KER", "ZAH"], ["KET", "RGN"], ["KET", "THL"], ["KEW", "YRL"], ["KEW", "ZSJ"], ["KGA", "TSH"], ["KGD", "LED"], ["KGD", "MSQ"], ["KGD", "RIX"], ["KGD", "SVO"], ["KGD", "TAS"], ["KGD", "TXL"], ["KGE", "MUA"], ["KGF", "KZO"], ["KGF", "LED"], ["KGF", "SVO"], ["KGF", "UKK"], ["KGI", "MEL"], ["KGI", "PER"], ["KGL", "KME"], ["KGL", "LBV"], ["KGL", "LOS"], ["KGL", "MBA"], ["KGL", "NBO"], ["KGP", "SVX"], ["KGS", "KRK"], ["KGS", "KUN"], ["KGS", "LBA"], ["KGS", "LEJ"], ["KGS", "LGW"], ["KGS", "LPL"], ["KGS", "LUX"], ["KGS", "MAN"], ["KGS", "MUC"], ["KGS", "NUE"], ["KGS", "RHO"], ["KGS", "RYG"], ["KGS", "STN"], ["KGS", "STR"], ["KGS", "SXF"], ["KGS", "TXL"], ["KHD", "THR"], ["KHG", "NGQ"], ["KHG", "URC"], ["KHG", "XIY"], ["KHH", "KHN"], ["KHH", "KIX"], ["KHH", "KMG"], ["KHH", "KNH"], ["KHH", "MFM"], ["KHH", "MNL"], ["KHH", "MZG"], ["KHH", "NGB"], ["KHH", "NKG"], ["KHH", "NNG"], ["KHH", "NRT"], ["KHH", "OKA"], ["KHH", "PEK"], ["KHH", "PUS"], ["KHH", "PVG"], ["KHH", "SGN"], ["KHH", "SIN"], ["KHH", "SZX"], ["KHH", "TAO"], ["KHH", "TNA"], ["KHH", "TSN"], ["KHH", "WUH"], ["KHH", "XMN"], ["KHH", "XUZ"], ["KHI", "KTM"], ["KHI", "KUL"], ["KHI", "LHE"], ["KHI", "LHR"], ["KHI", "LYP"], ["KHI", "MCT"], ["KHI", "MED"], ["KHI", "MJD"], ["KHI", "MUX"], ["KHI", "PEW"], ["KHI", "PJG"], ["KHI", "RUH"], ["KHI", "RYK"], ["KHI", "SHJ"], ["KHI", "SKZ"], ["KHI", "TUK"], ["KHI", "UET"], ["KHI", "YYZ"], ["KHN", "KMG"], ["KHN", "KOW"], ["KHN", "KWE"], ["KHN", "LYA"], ["KHN", "NAY"], ["KHN", "NGB"], ["KHN", "NKG"], ["KHN", "NNG"], ["KHN", "PEK"], ["KHN", "PVG"], ["KHN", "SHA"], ["KHN", "SHE"], ["KHN", "SJW"], ["KHN", "SYX"], ["KHN", "SZX"], ["KHN", "TAO"], ["KHN", "TNA"], ["KHN", "TPE"], ["KHN", "TSN"], ["KHN", "TYN"], ["KHN", "WNZ"], ["KHN", "WUH"], ["KHN", "XIY"], ["KHN", "XMN"], ["KHN", "ZUH"], ["KHS", "MCT"], ["KHV", "KJA"], ["KHV", "NER"], ["KHV", "NGK"], ["KHV", "NRT"], ["KHV", "OVB"], ["KHV", "PEK"], ["KHV", "PKC"], ["KHV", "SVO"], ["KHV", "UUD"], ["KHV", "UUS"], ["KHV", "VVO"], ["KHV", "YKS"], ["KHY", "THR"], ["KIF", "WNN"], ["KIF", "YXL"], ["KIH", "MHD"], ["KIH", "SYZ"], ["KIH", "THR"], ["KIJ", "NGO"], ["KIJ", "NKM"], ["KIJ", "NRT"], ["KIJ", "OKA"], ["KIJ", "PVG"], ["KIN", "LGW"], ["KIN", "MBJ"], ["KIN", "MCO"], ["KIN", "MIA"], ["KIN", "NAS"], ["KIN", "PLS"], ["KIN", "POS"], ["KIN", "PTY"], ["KIN", "SDQ"], ["KIN", "SXM"], ["KIN", "YYZ"], ["KIR", "LTN"], ["KIR", "STN"], ["KIS", "NBO"], ["KIT", "KLX"], ["KIT", "ZTH"], ["KIV", "LCA"], ["KIV", "LED"], ["KIV", "LIS"], ["KIV", "MUC"], ["KIV", "MXP"], ["KIV", "OTP"], ["KIV", "RIX"], ["KIV", "SGC"], ["KIV", "STN"], ["KIV", "TSF"], ["KIV", "VCE"], ["KIV", "VIE"], ["KIV", "VRN"], ["KIX", "KOJ"], ["KIX", "KUL"], ["KIX", "MFM"], ["KIX", "MNL"], ["KIX", "MYJ"], ["KIX", "NGS"], ["KIX", "NKG"], ["KIX", "NOU"], ["KIX", "NRT"], ["KIX", "OKA"], ["KIX", "OOL"], ["KIX", "PEK"], ["KIX", "PUS"], ["KIX", "PVG"], ["KIX", "RMQ"], ["KIX", "SDJ"], ["KIX", "SFO"], ["KIX", "SGN"], ["KIX", "SHE"], ["KIX", "SIN"], ["KIX", "SPN"], ["KIX", "TAO"], ["KIX", "TNA"], ["KIX", "TPE"], ["KIX", "WUX"], ["KIX", "YNT"], ["KJA", "KRR"], ["KJA", "LBD"], ["KJA", "LED"], ["KJA", "MJZ"], ["KJA", "NMA"], ["KJA", "NSK"], ["KJA", "NZH"], ["KJA", "OSS"], ["KJA", "OVB"], ["KJA", "PEK"], ["KJA", "SKD"], ["KJA", "SVO"], ["KJA", "SVX"], ["KJA", "TAS"], ["KJA", "TGP"], ["KJA", "THX"], ["KJA", "TOF"], ["KJA", "UUD"], ["KJA", "VKO"], ["KJA", "YKS"], ["KKA", "OME"], ["KKA", "SKK"], ["KKA", "UNK"], ["KKH", "KWK"], ["KKN", "LKL"], ["KKN", "OSL"], ["KKN", "TOS"], ["KKN", "VAW"], ["KKN", "VDS"], ["KKR", "PPT"], ["KLG", "RSH"], ["KLN", "KYK"], ["KLO", "KUL"], ["KLO", "MNL"], ["KLO", "PUS"], ["KLO", "SIN"], ["KLO", "TPE"], ["KLU", "TXL"], ["KLU", "VIE"], ["KLV", "LED"], ["KLV", "SVO"], ["KLV", "SVX"], ["KLW", "KTN"], ["KLX", "LGW"], ["KLX", "MUC"], ["KLX", "SKG"], ["KLX", "VIE"], ["KMG", "KOW"], ["KMG", "KTM"], ["KMG", "KUL"], ["KMG", "KWE"], ["KMG", "KWL"], ["KMG", "LHW"], ["KMG", "LJG"], ["KMG", "LLF"], ["KMG", "LNJ"], ["KMG", "LUM"], ["KMG", "LXA"], ["KMG", "LYA"], ["KMG", "LZH"], ["KMG", "LZO"], ["KMG", "MDL"], ["KMG", "MFM"], ["KMG", "MIG"], ["KMG", "NAO"], ["KMG", "NGB"], ["KMG", "NKG"], ["KMG", "NNG"], ["KMG", "NYT"], ["KMG", "PEK"], ["KMG", "PVG"], ["KMG", "REP"], ["KMG", "RGN"], ["KMG", "SHA"], ["KMG", "SIN"], ["KMG", "SJW"], ["KMG", "SYM"], ["KMG", "SYX"], ["KMG", "SZX"], ["KMG", "TAO"], ["KMG", "TCZ"], ["KMG", "TNA"], ["KMG", "TPE"], ["KMG", "TSN"], ["KMG", "TYN"], ["KMG", "UYN"], ["KMG", "VTE"], ["KMG", "WNZ"], ["KMG", "WUH"], ["KMG", "WXN"], ["KMG", "XIC"], ["KMG", "XIY"], ["KMG", "XMN"], ["KMG", "XNN"], ["KMG", "XUZ"], ["KMG", "YBP"], ["KMG", "YCU"], ["KMG", "YIC"], ["KMG", "YIH"], ["KMG", "YIW"], ["KMG", "ZAT"], ["KMG", "ZHA"], ["KMG", "ZUH"], ["KMG", "ZYI"], ["KMI", "NGO"], ["KMI", "OKA"], ["KMI", "TPE"], ["KMJ", "NGO"], ["KMJ", "NKM"], ["KMJ", "OKA"], ["KMQ", "NRT"], ["KMQ", "OKA"], ["KMQ", "PVG"], ["KMQ", "SDJ"], ["KMQ", "TPE"], ["KNG", "NBX"], ["KNH", "MZG"], ["KNH", "RMQ"], ["KNH", "TSA"], ["KNS", "MEL"], ["KNX", "PER"], ["KOA", "LAX"], ["KOA", "OAK"], ["KOA", "OGG"], ["KOA", "PHX"], ["KOA", "SEA"], ["KOA", "SFO"], ["KOA", "SJC"], ["KOA", "YVR"], ["KOE", "LOP"], ["KOE", "MOF"], ["KOE", "SUB"], ["KOE", "TMC"], ["KOI", "LSI"], ["KOI", "NDY"], ["KOI", "NRL"], ["KOI", "PPW"], ["KOI", "SOY"], ["KOI", "WRY"], ["KOJ", "NGO"], ["KOJ", "NRT"], ["KOJ", "OKA"], ["KOJ", "PVG"], ["KOJ", "TPE"], ["KOJ", "UKB"], ["KOK", "POR"], ["KOS", "REP"], ["KOT", "KSM"], ["KOW", "PEK"], ["KOW", "SHA"], ["KOW", "SZX"], ["KOW", "XMN"], ["KOW", "ZUH"], ["KPN", "KWK"], ["KQT", "LED"], ["KQT", "OVB"], ["KQT", "REN"], ["KQT", "SVX"], ["KRK", "LBA"], ["KRK", "LGW"], ["KRK", "LPL"], ["KRK", "MAD"], ["KRK", "MAN"], ["KRK", "MLA"], ["KRK", "MUC"], ["KRK", "NCL"], ["KRK", "NYO"], ["KRK", "OSL"], ["KRK", "PFO"], ["KRK", "PSA"], ["KRK", "RYG"], ["KRK", "SEN"], ["KRK", "SNN"], ["KRK", "STN"], ["KRK", "STR"], ["KRK", "SVG"], ["KRK", "SVO"], ["KRK", "TPS"], ["KRK", "TRD"], ["KRK", "TXL"], ["KRK", "VIE"], ["KRK", "WAW"], ["KRK", "ZRH"], ["KRL", "URC"], ["KRO", "SVX"], ["KRR", "LBD"], ["KRR", "LCA"], ["KRR", "LED"], ["KRR", "MCX"], ["KRR", "MSQ"], ["KRR", "MUC"], ["KRR", "NMA"], ["KRR", "NUX"], ["KRR", "OVB"], ["KRR", "PFO"], ["KRR", "PRG"], ["KRR", "RMI"], ["KRR", "SAW"], ["KRR", "SCO"], ["KRR", "SKG"], ["KRR", "SVO"], ["KRR", "SVX"], ["KRR", "TAS"], ["KRR", "TLV"], ["KRR", "VIE"], ["KRR", "VKO"], ["KRR", "VOG"], ["KRR", "VOZ"], ["KRS", "OSL"], ["KRS", "SVG"], ["KRS", "TRD"], ["KRT", "MED"], ["KRT", "NBO"], ["KRT", "NDJ"], ["KRT", "PZU"], ["KRT", "RUH"], ["KRT", "SAH"], ["KRT", "SHJ"], ["KRT", "UYL"], ["KRY", "URC"], ["KSA", "KWA"], ["KSA", "PNI"], ["KSC", "LTN"], ["KSC", "PRG"], ["KSC", "VIE"], ["KSF", "PMI"], ["KSH", "MHD"], ["KSH", "THR"], ["KSM", "MOU"], ["KSN", "TSE"], ["KSN", "VKO"], ["KSQ", "LED"], ["KSQ", "TAS"], ["KSU", "MOL"], ["KSU", "OSL"], ["KSU", "SVG"], ["KSU", "TRD"], ["KSY", "SAW"], ["KTA", "MEL"], ["KTA", "PER"], ["KTA", "PHE"], ["KTA", "SYD"], ["KTE", "SZB"], ["KTG", "PKN"], ["KTG", "PNK"], ["KTL", "WIL"], ["KTM", "KUL"], ["KTM", "LXA"], ["KTM", "MCT"], ["KTM", "PBH"], ["KTM", "PKR"], ["KTM", "SHJ"], ["KTM", "SIN"], ["KTM", "TMI"], ["KTM", "VNS"], ["KTN", "MTM"], ["KTN", "SEA"], ["KTN", "SIT"], ["KTN", "WRG"], ["KTS", "OME"], ["KTS", "TLA"], ["KTS", "WAA"], ["KTW", "KUT"], ["KTW", "LTN"], ["KTW", "MMX"], ["KTW", "NAP"], ["KTW", "NYO"], ["KTW", "STN"], ["KTW", "SVG"], ["KTW", "TLV"], ["KTW", "TRF"], ["KTW", "WAW"], ["KUA", "KUL"], ["KUA", "PEN"], ["KUA", "SIN"], ["KUD", "SDK"], ["KUF", "LBD"], ["KUF", "LED"], ["KUF", "MSQ"], ["KUF", "NSK"], ["KUF", "OSS"], ["KUF", "PRG"], ["KUF", "ROV"], ["KUF", "SVO"], ["KUF", "SVX"], ["KUF", "TAS"], ["KUF", "VKO"], ["KUH", "TPE"], ["KUL", "KWI"], ["KUL", "KWL"], ["KUL", "LBU"], ["KUL", "LGK"], ["KUL", "LHE"], ["KUL", "LHR"], ["KUL", "LOP"], ["KUL", "MAA"], ["KUL", "MCT"], ["KUL", "MED"], ["KUL", "MEL"], ["KUL", "MFM"], ["KUL", "MLE"], ["KUL", "MNL"], ["KUL", "MRU"], ["KUL", "MYY"], ["KUL", "NGO"], ["KUL", "NNG"], ["KUL", "NRT"], ["KUL", "OOL"], ["KUL", "PDG"], ["KUL", "PEK"], ["KUL", "PEN"], ["KUL", "PER"], ["KUL", "PEW"], ["KUL", "PKU"], ["KUL", "PLM"], ["KUL", "PNH"], ["KUL", "PUS"], ["KUL", "PVG"], ["KUL", "REP"], ["KUL", "RGN"], ["KUL", "RUH"], ["KUL", "SBW"], ["KUL", "SDK"], ["KUL", "SGN"], ["KUL", "SIN"], ["KUL", "SOC"], ["KUL", "SRG"], ["KUL", "SUB"], ["KUL", "SYD"], ["KUL", "SZX"], ["KUL", "TAS"], ["KUL", "TGG"], ["KUL", "TPE"], ["KUL", "TRZ"], ["KUL", "TWU"], ["KUL", "UPG"], ["KUL", "URT"], ["KUL", "USM"], ["KUL", "VTE"], ["KUL", "XMN"], ["KUN", "LGW"], ["KUN", "LTN"], ["KUN", "MLA"], ["KUN", "NOC"], ["KUN", "PFO"], ["KUN", "PMI"], ["KUN", "RHO"], ["KUN", "RYG"], ["KUN", "STN"], ["KUN", "TPS"], ["KUT", "MSQ"], ["KUT", "TBS"], ["KUT", "VKO"], ["KUT", "VNO"], ["KUT", "WAW"], ["KVA", "MUC"], ["KVA", "STR"], ["KVD", "LED"], ["KVD", "NAJ"], ["KVG", "MAS"], ["KVG", "POM"], ["KVG", "RAB"], ["KVL", "OTZ"], ["KVL", "WTK"], ["KVX", "LED"], ["KVX", "NNM"], ["KVX", "VKO"], ["KWA", "MAJ"], ["KWA", "PNI"], ["KWE", "KWL"], ["KWE", "LHW"], ["KWE", "LJG"], ["KWE", "LZO"], ["KWE", "MIG"], ["KWE", "NKG"], ["KWE", "NNG"], ["KWE", "PEK"], ["KWE", "PVG"], ["KWE", "SHA"], ["KWE", "SIN"], ["KWE", "SWA"], ["KWE", "SYX"], ["KWE", "SZX"], ["KWE", "TAO"], ["KWE", "TEN"], ["KWE", "TNA"], ["KWE", "TPE"], ["KWE", "TYN"], ["KWE", "URC"], ["KWE", "WNZ"], ["KWE", "WUH"], ["KWE", "WUZ"], ["KWE", "XIY"], ["KWE", "XMN"], ["KWE", "XNN"], ["KWE", "XUZ"], ["KWE", "YIH"], ["KWE", "ZUH"], ["KWI", "LFM"], ["KWI", "LHE"], ["KWI", "LHR"], ["KWI", "LRR"], ["KWI", "LXR"], ["KWI", "MAA"], ["KWI", "MCT"], ["KWI", "MED"], ["KWI", "MHD"], ["KWI", "NJF"], ["KWI", "PEW"], ["KWI", "RIY"], ["KWI", "RUH"], ["KWI", "SAH"], ["KWI", "SAW"], ["KWI", "SHJ"], ["KWI", "SKT"], ["KWI", "SSH"], ["KWI", "SYZ"], ["KWI", "TIF"], ["KWI", "TRV"], ["KWI", "TUN"], ["KWL", "LHW"], ["KWL", "LJG"], ["KWL", "NGB"], ["KWL", "NKG"], ["KWL", "NNG"], ["KWL", "PEK"], ["KWL", "PUS"], ["KWL", "PVG"], ["KWL", "SHA"], ["KWL", "SHE"], ["KWL", "SJW"], ["KWL", "SWA"], ["KWL", "SYX"], ["KWL", "SZX"], ["KWL", "TNA"], ["KWL", "TPE"], ["KWL", "TSN"], ["KWL", "TYN"], ["KWL", "WNZ"], ["KWL", "WUH"], ["KWL", "XIY"], ["KWL", "XMN"], ["KWL", "ZUH"], ["KWN", "TOG"], ["KYA", "SAW"], ["KYP", "RGN"], ["KYU", "NUL"], ["KZN", "LBD"], ["KZN", "LED"], ["KZN", "OSS"], ["KZN", "SHJ"], ["KZN", "SKD"], ["KZN", "SVO"], ["KZN", "SVX"], ["KZN", "TAS"], ["KZN", "UFA"], ["KZO", "SCO"], ["KZO", "TSE"], ["KZS", "RHO"], ["LAD", "LHR"], ["LAD", "LIS"], ["LAD", "LUN"], ["LAD", "LUO"], ["LAD", "MAD"], ["LAD", "MEG"], ["LAD", "MPM"], ["LAD", "MSZ"], ["LAD", "NBO"], ["LAD", "NOV"], ["LAD", "OPO"], ["LAD", "PEK"], ["LAD", "SDD"], ["LAD", "SPP"], ["LAD", "SSY"], ["LAD", "SVP"], ["LAD", "SZA"], ["LAD", "TMS"], ["LAD", "VHC"], ["LAD", "VPE"], ["LAD", "WDH"], ["LAE", "MAG"], ["LAE", "MAS"], ["LAE", "PNP"], ["LAE", "POM"], ["LAE", "RAB"], ["LAI", "ORY"], ["LAN", "MSP"], ["LAN", "ORD"], ["LAN", "SFB"], ["LAO", "MNL"], ["LAP", "MEX"], ["LAP", "MTY"], ["LAP", "MZT"], ["LAP", "TIJ"], ["LAQ", "TIP"], ["LAQ", "TUN"], ["LAS", "LAX"], ["LAS", "LBB"], ["LAS", "LGB"], ["LAS", "LGW"], ["LAS", "LHR"], ["LAS", "LIT"], ["LAS", "LRD"], ["LAS", "MAF"], ["LAS", "MAN"], ["LAS", "MCI"], ["LAS", "MCO"], ["LAS", "MDW"], ["LAS", "MEM"], ["LAS", "MEX"], ["LAS", "MFE"], ["LAS", "MFR"], ["LAS", "MIA"], ["LAS", "MKE"], ["LAS", "MLI"], ["LAS", "MOT"], ["LAS", "MRY"], ["LAS", "MSO"], ["LAS", "MSP"], ["LAS", "MSY"], ["LAS", "MTY"], ["LAS", "OAK"], ["LAS", "OKC"], ["LAS", "OMA"], ["LAS", "ONT"], ["LAS", "ORD"], ["LAS", "PDX"], ["LAS", "PHL"], ["LAS", "PHX"], ["LAS", "PIA"], ["LAS", "PIT"], ["LAS", "PSC"], ["LAS", "PSP"], ["LAS", "PTY"], ["LAS", "PVD"], ["LAS", "RAP"], ["LAS", "RDU"], ["LAS", "RFD"], ["LAS", "RNO"], ["LAS", "SAN"], ["LAS", "SAT"], ["LAS", "SBN"], ["LAS", "SCK"], ["LAS", "SDF"], ["LAS", "SEA"], ["LAS", "SFO"], ["LAS", "SGF"], ["LAS", "SHV"], ["LAS", "SJC"], ["LAS", "SLC"], ["LAS", "SMF"], ["LAS", "SMX"], ["LAS", "SNA"], ["LAS", "STL"], ["LAS", "TLC"], ["LAS", "TPA"], ["LAS", "TUL"], ["LAS", "TUS"], ["LAS", "XNA"], ["LAS", "YEG"], ["LAS", "YQR"], ["LAS", "YUL"], ["LAS", "YVR"], ["LAS", "YWG"], ["LAS", "YXE"], ["LAS", "YYC"], ["LAS", "YYJ"], ["LAS", "YYZ"], ["LAS", "ZRH"], ["LAU", "MYD"], ["LAU", "WIL"], ["LAX", "LHR"], ["LAX", "LIH"], ["LAX", "LIM"], ["LAX", "LIR"], ["LAX", "LTO"], ["LAX", "MAD"], ["LAX", "MCE"], ["LAX", "MCI"], ["LAX", "MCO"], ["LAX", "MDW"], ["LAX", "MEL"], ["LAX", "MEM"], ["LAX", "MEX"], ["LAX", "MFR"], ["LAX", "MIA"], ["LAX", "MKE"], ["LAX", "MLM"], ["LAX", "MMH"], ["LAX", "MNL"], ["LAX", "MRY"], ["LAX", "MSP"], ["LAX", "MSY"], ["LAX", "MUC"], ["LAX", "MZT"], ["LAX", "NAN"], ["LAX", "NRT"], ["LAX", "OAK"], ["LAX", "OGG"], ["LAX", "OKC"], ["LAX", "ORD"], ["LAX", "PBI"], ["LAX", "PDX"], ["LAX", "PEK"], ["LAX", "PHL"], ["LAX", "PHX"], ["LAX", "PIT"], ["LAX", "PPT"], ["LAX", "PRC"], ["LAX", "PSP"], ["LAX", "PTY"], ["LAX", "PVG"], ["LAX", "PVR"], ["LAX", "PVU"], ["LAX", "PWM"], ["LAX", "RAR"], ["LAX", "RDM"], ["LAX", "RDU"], ["LAX", "RNO"], ["LAX", "SAF"], ["LAX", "SAL"], ["LAX", "SAN"], ["LAX", "SAT"], ["LAX", "SBA"], ["LAX", "SBP"], ["LAX", "SEA"], ["LAX", "SFO"], ["LAX", "SIN"], ["LAX", "SJC"], ["LAX", "SJD"], ["LAX", "SJO"], ["LAX", "SLC"], ["LAX", "SMF"], ["LAX", "SMX"], ["LAX", "STL"], ["LAX", "STS"], ["LAX", "SVO"], ["LAX", "SYD"], ["LAX", "TLV"], ["LAX", "TPA"], ["LAX", "TPE"], ["LAX", "TUS"], ["LAX", "UPN"], ["LAX", "VIS"], ["LAX", "VKO"], ["LAX", "XNA"], ["LAX", "YEG"], ["LAX", "YLW"], ["LAX", "YUL"], ["LAX", "YUM"], ["LAX", "YVR"], ["LAX", "YYC"], ["LAX", "YYZ"], ["LAX", "ZCL"], ["LAX", "ZIH"], ["LAX", "ZLO"], ["LAX", "ZRH"], ["LAZ", "SSA"], ["LBA", "LCA"], ["LBA", "LHR"], ["LBA", "LIG"], ["LBA", "LPA"], ["LBA", "MAH"], ["LBA", "MJV"], ["LBA", "MLA"], ["LBA", "MPL"], ["LBA", "NCE"], ["LBA", "PFO"], ["LBA", "PMI"], ["LBA", "PRG"], ["LBA", "PSA"], ["LBA", "RHO"], ["LBA", "SOU"], ["LBA", "TFS"], ["LBA", "TSF"], ["LBA", "VCE"], ["LBA", "ZTH"], ["LBC", "PMI"], ["LBC", "PSA"], ["LBD", "LED"], ["LBD", "NJC"], ["LBD", "OVB"], ["LBD", "REN"], ["LBD", "ROV"], ["LBD", "SGC"], ["LBD", "SVX"], ["LBD", "TJM"], ["LBD", "UFA"], ["LBD", "URC"], ["LBE", "MCO"], ["LBE", "MYR"], ["LBS", "NAN"], ["LBS", "SUV"], ["LBU", "MYY"], ["LBV", "LFW"], ["LBV", "LOS"], ["LBV", "NSI"], ["LBV", "PNR"], ["LBV", "SSG"], ["LCA", "LED"], ["LCA", "LGW"], ["LCA", "LHR"], ["LCA", "LPL"], ["LCA", "LTN"], ["LCA", "LWO"], ["LCA", "MAN"], ["LCA", "MLA"], ["LCA", "MSQ"], ["LCA", "MUC"], ["LCA", "MXP"], ["LCA", "ODS"], ["LCA", "OSL"], ["LCA", "OTP"], ["LCA", "RIX"], ["LCA", "SKG"], ["LCA", "SOF"], ["LCA", "SVO"], ["LCA", "SVX"], ["LCA", "SXF"], ["LCA", "TLV"], ["LCA", "VIE"], ["LCA", "WAW"], ["LCA", "ZRH"], ["LCE", "PEU"], ["LCE", "RTB"], ["LCE", "SAP"], ["LCE", "TGU"], ["LCE", "UII"], ["LCG", "LHR"], ["LCG", "LIS"], ["LCG", "MAD"], ["LCG", "SVQ"], ["LCK", "PIE"], ["LCK", "SFB"], ["LCX", "SHA"], ["LCY", "LIN"], ["LCY", "LUX"], ["LCY", "MAD"], ["LCY", "MAH"], ["LCY", "NCE"], ["LCY", "NTE"], ["LCY", "ORY"], ["LCY", "PMI"], ["LCY", "RTM"], ["LCY", "VCE"], ["LCY", "ZRH"], ["LDB", "MGF"], ["LDB", "POA"], ["LDB", "VCP"], ["LDE", "MAD"], ["LDE", "ORY"], ["LDE", "STN"], ["LDH", "PQQ"], ["LDH", "SYD"], ["LDY", "LPL"], ["LDY", "PIK"], ["LDY", "STN"], ["LEA", "PER"], ["LEC", "SSA"], ["LED", "LHR"], ["LED", "LLK"], ["LED", "MCX"], ["LED", "MLA"], ["LED", "MMK"], ["LED", "MRV"], ["LED", "MSQ"], ["LED", "MUC"], ["LED", "MXP"], ["LED", "NBC"], ["LED", "NBE"], ["LED", "NCE"], ["LED", "NMA"], ["LED", "NSK"], ["LED", "NVI"], ["LED", "OMS"], ["LED", "OSL"], ["LED", "OSS"], ["LED", "OVB"], ["LED", "PED"], ["LED", "PEE"], ["LED", "PEK"], ["LED", "PRG"], ["LED", "PUJ"], ["LED", "REN"], ["LED", "RHO"], ["LED", "RIX"], ["LED", "ROV"], ["LED", "SCW"], ["LED", "SIP"], ["LED", "SKD"], ["LED", "SKG"], ["LED", "SKX"], ["LED", "SVO"], ["LED", "SVX"], ["LED", "SXF"], ["LED", "TAS"], ["LED", "TFS"], ["LED", "TIV"], ["LED", "TJM"], ["LED", "TJU"], ["LED", "TLL"], ["LED", "TLV"], ["LED", "TSE"], ["LED", "TXL"], ["LED", "UCT"], ["LED", "UFA"], ["LED", "UGC"], ["LED", "UUA"], ["LED", "VCE"], ["LED", "VIE"], ["LED", "VKO"], ["LED", "VNO"], ["LED", "VOG"], ["LED", "VOZ"], ["LED", "WAW"], ["LED", "YKS"], ["LED", "ZRH"], ["LEH", "LYS"], ["LEI", "LGW"], ["LEI", "MAD"], ["LEI", "MAN"], ["LEI", "MLN"], ["LEI", "NRN"], ["LEI", "PMI"], ["LEI", "STN"], ["LEI", "SVQ"], ["LEJ", "LPA"], ["LEJ", "MUC"], ["LEJ", "PMI"], ["LEJ", "RHO"], ["LEJ", "STN"], ["LEJ", "STR"], ["LEJ", "TFS"], ["LEJ", "VIE"], ["LEJ", "ZRH"], ["LET", "LPD"], ["LEX", "LGA"], ["LEX", "MSP"], ["LEX", "ORD"], ["LEX", "PGD"], ["LEX", "PIE"], ["LEX", "SFB"], ["LFM", "SYZ"], ["LFW", "LOS"], ["LFW", "OUA"], ["LGA", "LIT"], ["LGA", "MCI"], ["LGA", "MCO"], ["LGA", "MDW"], ["LGA", "MEM"], ["LGA", "MHT"], ["LGA", "MIA"], ["LGA", "MKE"], ["LGA", "MSN"], ["LGA", "MSP"], ["LGA", "MSY"], ["LGA", "MYR"], ["LGA", "OMA"], ["LGA", "ORD"], ["LGA", "ORF"], ["LGA", "PBI"], ["LGA", "PHL"], ["LGA", "PIT"], ["LGA", "PWM"], ["LGA", "RDU"], ["LGA", "RIC"], ["LGA", "ROA"], ["LGA", "ROC"], ["LGA", "RSW"], ["LGA", "SAV"], ["LGA", "SDF"], ["LGA", "SRQ"], ["LGA", "STL"], ["LGA", "SYR"], ["LGA", "TPA"], ["LGA", "TYS"], ["LGA", "XNA"], ["LGA", "YHZ"], ["LGA", "YOW"], ["LGA", "YUL"], ["LGA", "YYZ"], ["LGB", "OAK"], ["LGB", "PDX"], ["LGB", "PHX"], ["LGB", "SEA"], ["LGB", "SFO"], ["LGB", "SLC"], ["LGB", "SMF"], ["LGG", "LIL"], ["LGG", "OST"], ["LGG", "PMI"], ["LGG", "RHO"], ["LGI", "NAS"], ["LGK", "PEN"], ["LGK", "SIN"], ["LGK", "SZB"], ["LGL", "MUR"], ["LGL", "MYY"], ["LGP", "MNL"], ["LGW", "LIN"], ["LGW", "LIS"], ["LGW", "LPA"], ["LGW", "LUX"], ["LGW", "LYS"], ["LGW", "MAD"], ["LGW", "MAH"], ["LGW", "MBJ"], ["LGW", "MCO"], ["LGW", "MJV"], ["LGW", "MLA"], ["LGW", "MLE"], ["LGW", "MPL"], ["LGW", "MRS"], ["LGW", "MRU"], ["LGW", "MSQ"], ["LGW", "MUC"], ["LGW", "MXP"], ["LGW", "NAP"], ["LGW", "NBE"], ["LGW", "NCE"], ["LGW", "NCL"], ["LGW", "NOC"], ["LGW", "NQY"], ["LGW", "NTE"], ["LGW", "OLB"], ["LGW", "OPO"], ["LGW", "ORK"], ["LGW", "OSL"], ["LGW", "OTP"], ["LGW", "PDL"], ["LGW", "PEK"], ["LGW", "PFO"], ["LGW", "PMI"], ["LGW", "PMO"], ["LGW", "POS"], ["LGW", "PRG"], ["LGW", "PRN"], ["LGW", "PSA"], ["LGW", "PUJ"], ["LGW", "PVK"], ["LGW", "RAK"], ["LGW", "RHO"], ["LGW", "RIX"], ["LGW", "SAW"], ["LGW", "SCQ"], ["LGW", "SID"], ["LGW", "SKG"], ["LGW", "SNN"], ["LGW", "SOF"], ["LGW", "SPU"], ["LGW", "SSH"], ["LGW", "SVG"], ["LGW", "SVQ"], ["LGW", "SXB"], ["LGW", "SXF"], ["LGW", "SZG"], ["LGW", "TFS"], ["LGW", "TIA"], ["LGW", "TIV"], ["LGW", "TLL"], ["LGW", "TLS"], ["LGW", "TLV"], ["LGW", "TNG"], ["LGW", "TOS"], ["LGW", "TPA"], ["LGW", "TRD"], ["LGW", "TRF"], ["LGW", "TRN"], ["LGW", "UVF"], ["LGW", "VCE"], ["LGW", "VIE"], ["LGW", "VLC"], ["LGW", "VRN"], ["LGW", "YUL"], ["LGW", "YVR"], ["LGW", "YYC"], ["LGW", "YYZ"], ["LGW", "ZAG"], ["LGW", "ZRH"], ["LGW", "ZTH"], ["LHE", "LHR"], ["LHE", "MAN"], ["LHE", "MCT"], ["LHE", "MED"], ["LHE", "MHD"], ["LHE", "MUX"], ["LHE", "MXP"], ["LHE", "OSL"], ["LHE", "PEW"], ["LHE", "RUH"], ["LHE", "RYK"], ["LHE", "SHJ"], ["LHE", "SKZ"], ["LHE", "UET"], ["LHE", "YYZ"], ["LHR", "LIN"], ["LHR", "LIS"], ["LHR", "LOS"], ["LHR", "LUX"], ["LHR", "LXR"], ["LHR", "LYS"], ["LHR", "MAA"], ["LHR", "MAD"], ["LHR", "MAN"], ["LHR", "MCT"], ["LHR", "MEX"], ["LHR", "MIA"], ["LHR", "MLA"], ["LHR", "MNL"], ["LHR", "MRS"], ["LHR", "MRU"], ["LHR", "MSP"], ["LHR", "MUC"], ["LHR", "MXP"], ["LHR", "NAS"], ["LHR", "NBO"], ["LHR", "NCE"], ["LHR", "NCL"], ["LHR", "NRT"], ["LHR", "OPO"], ["LHR", "ORD"], ["LHR", "ORK"], ["LHR", "ORY"], ["LHR", "OSL"], ["LHR", "OTP"], ["LHR", "PEK"], ["LHR", "PER"], ["LHR", "PHL"], ["LHR", "PHX"], ["LHR", "PMI"], ["LHR", "PRG"], ["LHR", "PSA"], ["LHR", "PVG"], ["LHR", "RDU"], ["LHR", "RJK"], ["LHR", "RTM"], ["LHR", "RUH"], ["LHR", "SAN"], ["LHR", "SEA"], ["LHR", "SFO"], ["LHR", "SIN"], ["LHR", "SNN"], ["LHR", "SOF"], ["LHR", "SPU"], ["LHR", "STR"], ["LHR", "SVG"], ["LHR", "SVO"], ["LHR", "TAS"], ["LHR", "TIP"], ["LHR", "TLS"], ["LHR", "TLV"], ["LHR", "TNG"], ["LHR", "TSE"], ["LHR", "TUN"], ["LHR", "TXL"], ["LHR", "VCE"], ["LHR", "VIE"], ["LHR", "VKO"], ["LHR", "WAW"], ["LHR", "YEG"], ["LHR", "YHZ"], ["LHR", "YOW"], ["LHR", "YUL"], ["LHR", "YVR"], ["LHR", "YYC"], ["LHR", "YYT"], ["LHR", "YYZ"], ["LHR", "ZAG"], ["LHR", "ZRH"], ["LHR", "ZYL"], ["LHW", "LXA"], ["LHW", "NKG"], ["LHW", "NNG"], ["LHW", "PEK"], ["LHW", "PVG"], ["LHW", "SHA"], ["LHW", "SHE"], ["LHW", "SJW"], ["LHW", "SZX"], ["LHW", "TNA"], ["LHW", "TPE"], ["LHW", "TSN"], ["LHW", "TYN"], ["LHW", "URC"], ["LHW", "WUH"], ["LHW", "XIY"], ["LHW", "YCU"], ["LHW", "YZY"], ["LIF", "TGJ"], ["LIF", "UVE"], ["LIG", "LPL"], ["LIG", "LYS"], ["LIG", "NCE"], ["LIG", "ORY"], ["LIG", "SOU"], ["LIG", "STN"], ["LIH", "OAK"], ["LIH", "OGG"], ["LIH", "PHX"], ["LIH", "SAN"], ["LIH", "SEA"], ["LIH", "SFO"], ["LIH", "SJC"], ["LIH", "YVR"], ["LIL", "LYS"], ["LIL", "MPL"], ["LIL", "MRS"], ["LIL", "NCE"], ["LIL", "NTE"], ["LIL", "OPO"], ["LIL", "ORN"], ["LIL", "OUD"], ["LIL", "RAK"], ["LIL", "RHO"], ["LIL", "SPU"], ["LIL", "SXB"], ["LIL", "TFS"], ["LIL", "TLS"], ["LIL", "VCE"], ["LIM", "LPB"], ["LIM", "MAD"], ["LIM", "MDE"], ["LIM", "MEX"], ["LIM", "MIA"], ["LIM", "MVD"], ["LIM", "PCL"], ["LIM", "PEM"], ["LIM", "PIU"], ["LIM", "POA"], ["LIM", "PTY"], ["LIM", "PUJ"], ["LIM", "SAL"], ["LIM", "SCL"], ["LIM", "SDQ"], ["LIM", "SJO"], ["LIM", "TBP"], ["LIM", "TCQ"], ["LIM", "TGI"], ["LIM", "TPP"], ["LIM", "TRU"], ["LIM", "UIO"], ["LIM", "VVI"], ["LIM", "YYZ"], ["LIN", "MAD"], ["LIN", "MLA"], ["LIN", "NAP"], ["LIN", "OLB"], ["LIN", "ORY"], ["LIN", "OTP"], ["LIN", "PMO"], ["LIN", "PRG"], ["LIN", "PSR"], ["LIN", "REG"], ["LIN", "SUF"], ["LIN", "TRS"], ["LIN", "TXL"], ["LIN", "VIE"], ["LIN", "WAW"], ["LIR", "MIA"], ["LIR", "PTY"], ["LIR", "SAL"], ["LIR", "SJO"], ["LIR", "SYQ"], ["LIR", "YYZ"], ["LIS", "LPA"], ["LIS", "LPL"], ["LIS", "LTN"], ["LIS", "LUX"], ["LIS", "LYS"], ["LIS", "MAD"], ["LIS", "MAN"], ["LIS", "MIA"], ["LIS", "MPM"], ["LIS", "MRS"], ["LIS", "MUC"], ["LIS", "MXP"], ["LIS", "NAT"], ["LIS", "NCE"], ["LIS", "NTE"], ["LIS", "OPO"], ["LIS", "ORK"], ["LIS", "ORY"], ["LIS", "OSL"], ["LIS", "OTP"], ["LIS", "PDL"], ["LIS", "PHL"], ["LIS", "PIX"], ["LIS", "POA"], ["LIS", "PRG"], ["LIS", "PSA"], ["LIS", "PXO"], ["LIS", "RAI"], ["LIS", "RAK"], ["LIS", "REC"], ["LIS", "SID"], ["LIS", "SMA"], ["LIS", "SSA"], ["LIS", "STN"], ["LIS", "STR"], ["LIS", "SVQ"], ["LIS", "SXF"], ["LIS", "TER"], ["LIS", "TLS"], ["LIS", "TMS"], ["LIS", "TNG"], ["LIS", "TUN"], ["LIS", "VCE"], ["LIS", "VCP"], ["LIS", "VIE"], ["LIS", "VLC"], ["LIS", "VXE"], ["LIS", "WAW"], ["LIS", "YUL"], ["LIS", "YYZ"], ["LIS", "ZRH"], ["LIT", "MDW"], ["LIT", "ORD"], ["LIT", "PHX"], ["LIT", "SFB"], ["LIT", "STL"], ["LJG", "MIG"], ["LJG", "NGB"], ["LJG", "NKG"], ["LJG", "NNG"], ["LJG", "PEK"], ["LJG", "SHA"], ["LJG", "SIN"], ["LJG", "SJW"], ["LJG", "SZX"], ["LJG", "TCZ"], ["LJG", "TNA"], ["LJG", "TPE"], ["LJG", "TYN"], ["LJG", "WUH"], ["LJG", "XIY"], ["LJU", "LTN"], ["LJU", "MUC"], ["LJU", "PRG"], ["LJU", "PRN"], ["LJU", "SJJ"], ["LJU", "SKP"], ["LJU", "STN"], ["LJU", "SVO"], ["LJU", "TGD"], ["LJU", "TIA"], ["LJU", "VIE"], ["LJU", "WAW"], ["LJU", "ZRH"], ["LKB", "SUV"], ["LKG", "WIL"], ["LKH", "MUR"], ["LKH", "MYY"], ["LKL", "TOS"], ["LKN", "RET"], ["LKN", "SVJ"], ["LKO", "MCT"], ["LKO", "PAT"], ["LKO", "RUH"], ["LLA", "PJA"], ["LLA", "SDL"], ["LLA", "UME"], ["LLF", "SZX"], ["LLW", "LUN"], ["LLW", "NBO"], ["LMM", "MEX"], ["LMM", "MZT"], ["LMM", "TIJ"], ["LMN", "MYY"], ["LMP", "PMO"], ["LMP", "VCE"], ["LMT", "PDX"], ["LMT", "SFO"], ["LNB", "VLI"], ["LNE", "LOD"], ["LNE", "SON"], ["LNE", "VLI"], ["LNK", "MSP"], ["LNK", "ORD"], ["LNY", "MKK"], ["LNY", "OGG"], ["LNZ", "PMI"], ["LNZ", "STN"], ["LNZ", "SZG"], ["LNZ", "VIE"], ["LOD", "SON"], ["LOH", "UIO"], ["LOK", "NBO"], ["LOP", "PER"], ["LOP", "SIN"], ["LOP", "SUB"], ["LOP", "UPG"], ["LOS", "MAD"], ["LOS", "NBO"], ["LOS", "PHC"], ["LOS", "QOW"], ["LOS", "QRW"], ["LOS", "QUO"], ["LOS", "ROB"], ["LOS", "SSG"], ["LPA", "LPL"], ["LPA", "LTN"], ["LPA", "LUX"], ["LPA", "MAD"], ["LPA", "MAN"], ["LPA", "MUC"], ["LPA", "NCL"], ["LPA", "NDB"], ["LPA", "NKC"], ["LPA", "NRN"], ["LPA", "NUE"], ["LPA", "OPO"], ["LPA", "ORK"], ["LPA", "ORY"], ["LPA", "OSL"], ["LPA", "PAD"], ["LPA", "PIK"], ["LPA", "PRG"], ["LPA", "PSA"], ["LPA", "RAI"], ["LPA", "RAK"], ["LPA", "SCQ"], ["LPA", "SDR"], ["LPA", "SPC"], ["LPA", "STN"], ["LPA", "STR"], ["LPA", "SVQ"], ["LPA", "SXF"], ["LPA", "SZG"], ["LPA", "TFN"], ["LPA", "TFS"], ["LPA", "TRF"], ["LPA", "TXL"], ["LPA", "VDE"], ["LPA", "VIE"], ["LPA", "VIL"], ["LPA", "VLC"], ["LPA", "ZQW"], ["LPA", "ZRH"], ["LPB", "MIA"], ["LPB", "POI"], ["LPB", "RBQ"], ["LPB", "SRE"], ["LPB", "SRZ"], ["LPB", "TDD"], ["LPB", "TJA"], ["LPB", "UYU"], ["LPB", "VVI"], ["LPL", "MAD"], ["LPL", "MLA"], ["LPL", "NAP"], ["LPL", "NCE"], ["LPL", "NOC"], ["LPL", "OPO"], ["LPL", "ORK"], ["LPL", "PMI"], ["LPL", "POZ"], ["LPL", "PSA"], ["LPL", "REU"], ["LPL", "RHO"], ["LPL", "SNN"], ["LPL", "SXF"], ["LPL", "SZZ"], ["LPL", "TFS"], ["LPL", "TRF"], ["LPL", "VNO"], ["LPL", "WAW"], ["LPL", "WMI"], ["LPL", "WRO"], ["LPM", "NUS"], ["LPM", "VLI"], ["LPP", "NRN"], ["LPQ", "PKZ"], ["LPQ", "REP"], ["LPQ", "VTE"], ["LPY", "ORY"], ["LQM", "PUU"], ["LRE", "WIN"], ["LRH", "OPO"], ["LRH", "ORY"], ["LRH", "PIS"], ["LRH", "SOU"], ["LRH", "STN"], ["LRM", "MAD"], ["LRM", "MIA"], ["LRM", "MXP"], ["LRM", "POP"], ["LRM", "SJU"], ["LRM", "YHZ"], ["LRR", "SHJ"], ["LRR", "SYZ"], ["LRR", "THR"], ["LRT", "LYS"], ["LRT", "ORY"], ["LSC", "SCL"], ["LSE", "MSP"], ["LSE", "ORD"], ["LST", "MEL"], ["LST", "SYD"], ["LSY", "SYD"], ["LTD", "TIP"], ["LTN", "LUZ"], ["LTN", "MAD"], ["LTN", "MAH"], ["LTN", "MJV"], ["LTN", "MLA"], ["LTN", "MPL"], ["LTN", "MXP"], ["LTN", "NAP"], ["LTN", "NCE"], ["LTN", "NOC"], ["LTN", "OTP"], ["LTN", "PFO"], ["LTN", "PMI"], ["LTN", "POZ"], ["LTN", "PRG"], ["LTN", "PSA"], ["LTN", "RAK"], ["LTN", "REU"], ["LTN", "RIX"], ["LTN", "RZE"], ["LTN", "SKP"], ["LTN", "SOF"], ["LTN", "SSH"], ["LTN", "SXF"], ["LTN", "TFS"], ["LTN", "TGM"], ["LTN", "TLV"], ["LTN", "TSR"], ["LTN", "VAR"], ["LTN", "VCE"], ["LTN", "VNO"], ["LTN", "WAW"], ["LTN", "WRO"], ["LTN", "ZRH"], ["LTX", "OCC"], ["LUD", "OMD"], ["LUD", "WDH"], ["LUG", "ZRH"], ["LUK", "MDW"], ["LUK", "MMU"], ["LUM", "PEK"], ["LUN", "LVI"], ["LUN", "MFU"], ["LUN", "MNS"], ["LUN", "NBO"], ["LUN", "NLA"], ["LUN", "WDH"], ["LUR", "OTZ"], ["LUV", "SXK"], ["LUW", "UPG"], ["LUX", "MAD"], ["LUX", "MLA"], ["LUX", "MUC"], ["LUX", "MXP"], ["LUX", "NAP"], ["LUX", "NBE"], ["LUX", "NCE"], ["LUX", "OPO"], ["LUX", "PMI"], ["LUX", "RAK"], ["LUX", "RHO"], ["LUX", "SCN"], ["LUX", "SID"], ["LUX", "TFS"], ["LUX", "TXL"], ["LUX", "VAR"], ["LUX", "VIE"], ["LUX", "XRY"], ["LUX", "ZRH"], ["LUZ", "MXP"], ["LUZ", "STN"], ["LUZ", "TRF"], ["LVI", "MQP"], ["LVI", "NBO"], ["LWO", "MUC"], ["LWO", "NAP"], ["LWO", "SAW"], ["LWO", "TLV"], ["LWO", "TSF"], ["LWO", "VIE"], ["LWO", "VKO"], ["LWO", "VLC"], ["LWO", "WAW"], ["LWS", "PUW"], ["LWS", "SEA"], ["LWS", "SLC"], ["LWY", "MYY"], ["LXA", "LZY"], ["LXA", "MIG"], ["LXA", "NGQ"], ["LXA", "PEK"], ["LXA", "XIY"], ["LXA", "XNN"], ["LXG", "VTE"], ["LXR", "RUH"], ["LXS", "MJT"], ["LXS", "SKG"], ["LYA", "PEK"], ["LYA", "SHA"], ["LYA", "SHE"], ["LYG", "NAY"], ["LYG", "PEK"], ["LYG", "SHA"], ["LYG", "SHE"], ["LYG", "WUH"], ["LYG", "XUZ"], ["LYI", "NAY"], ["LYI", "PEK"], ["LYI", "PVG"], ["LYI", "SHA"], ["LYI", "SHE"], ["LYI", "SZX"], ["LYI", "WNZ"], ["LYI", "WUH"], ["LYI", "XIY"], ["LYI", "YIW"], ["LYR", "OSL"], ["LYR", "TOS"], ["LYS", "MAD"], ["LYS", "MIR"], ["LYS", "MLA"], ["LYS", "MPL"], ["LYS", "MRS"], ["LYS", "MUC"], ["LYS", "MXP"], ["LYS", "NCE"], ["LYS", "NTE"], ["LYS", "OPO"], ["LYS", "ORN"], ["LYS", "ORY"], ["LYS", "OUD"], ["LYS", "PIS"], ["LYS", "PMI"], ["LYS", "PRG"], ["LYS", "PUF"], ["LYS", "PUJ"], ["LYS", "QSF"], ["LYS", "RAK"], ["LYS", "RNS"], ["LYS", "SPU"], ["LYS", "STN"], ["LYS", "SVQ"], ["LYS", "SXB"], ["LYS", "SXF"], ["LYS", "TLM"], ["LYS", "TLS"], ["LYS", "TUN"], ["LYS", "VCE"], ["LYS", "VIE"], ["LYS", "YUL"], ["LYS", "ZRH"], ["LZC", "MEX"], ["LZH", "PEK"], ["LZH", "PVG"], ["LZH", "SHA"], ["LZH", "SYX"], ["LZH", "SZX"], ["LZH", "WUH"], ["LZH", "XMN"], ["LZH", "ZUH"], ["LZO", "NNG"], ["LZO", "PEK"], ["LZO", "PVG"], ["LZO", "SZX"], ["LZO", "XIY"], ["MAA", "MCT"], ["MAA", "MLE"], ["MAA", "MRU"], ["MAA", "PNQ"], ["MAA", "RUH"], ["MAA", "RUN"], ["MAA", "SHJ"], ["MAA", "SIN"], ["MAA", "TRV"], ["MAA", "TRZ"], ["MAA", "VTZ"], ["MAB", "OIA"], ["MAB", "RDC"], ["MAB", "TUR"], ["MAD", "MAH"], ["MAD", "MAN"], ["MAD", "MDE"], ["MAD", "MEX"], ["MAD", "MIA"], ["MAD", "MJV"], ["MAD", "MLA"], ["MAD", "MLN"], ["MAD", "MRS"], ["MAD", "MUC"], ["MAD", "MVD"], ["MAD", "MXP"], ["MAD", "NCE"], ["MAD", "NTE"], ["MAD", "OPO"], ["MAD", "ORD"], ["MAD", "ORN"], ["MAD", "ORY"], ["MAD", "OTP"], ["MAD", "OVD"], ["MAD", "PEK"], ["MAD", "PHL"], ["MAD", "PMI"], ["MAD", "PMO"], ["MAD", "PNA"], ["MAD", "PRG"], ["MAD", "PSA"], ["MAD", "PTY"], ["MAD", "PUJ"], ["MAD", "RAK"], ["MAD", "RBA"], ["MAD", "RJL"], ["MAD", "RTM"], ["MAD", "RYG"], ["MAD", "SAL"], ["MAD", "SAW"], ["MAD", "SCL"], ["MAD", "SCQ"], ["MAD", "SCU"], ["MAD", "SDQ"], ["MAD", "SDR"], ["MAD", "SJO"], ["MAD", "SOF"], ["MAD", "SPC"], ["MAD", "SSA"], ["MAD", "SSG"], ["MAD", "STN"], ["MAD", "SVO"], ["MAD", "SVQ"], ["MAD", "SXB"], ["MAD", "SXF"], ["MAD", "TFN"], ["MAD", "TFS"], ["MAD", "TIP"], ["MAD", "TLS"], ["MAD", "TLV"], ["MAD", "TNG"], ["MAD", "TRN"], ["MAD", "TSR"], ["MAD", "TUN"], ["MAD", "TXL"], ["MAD", "UIO"], ["MAD", "VCE"], ["MAD", "VGO"], ["MAD", "VIE"], ["MAD", "VKO"], ["MAD", "VLC"], ["MAD", "VVI"], ["MAD", "WAW"], ["MAD", "XRY"], ["MAD", "ZRH"], ["MAG", "MAS"], ["MAG", "POM"], ["MAG", "VAI"], ["MAG", "WWK"], ["MAH", "MAN"], ["MAH", "MUC"], ["MAH", "NCL"], ["MAH", "PMI"], ["MAH", "STN"], ["MAH", "STR"], ["MAH", "TXL"], ["MAH", "VLC"], ["MAJ", "TRW"], ["MAM", "MEX"], ["MAN", "MBJ"], ["MAN", "MCO"], ["MAN", "MJV"], ["MAN", "MLA"], ["MAN", "MUC"], ["MAN", "MXP"], ["MAN", "NAP"], ["MAN", "NBE"], ["MAN", "NCE"], ["MAN", "NOC"], ["MAN", "NQY"], ["MAN", "NTE"], ["MAN", "NWI"], ["MAN", "ORD"], ["MAN", "ORK"], ["MAN", "OSL"], ["MAN", "PFO"], ["MAN", "PHL"], ["MAN", "PMI"], ["MAN", "PRG"], ["MAN", "PSA"], ["MAN", "PUJ"], ["MAN", "PUY"], ["MAN", "PVK"], ["MAN", "RAK"], ["MAN", "REU"], ["MAN", "RHO"], ["MAN", "RIX"], ["MAN", "RYG"], ["MAN", "RZE"], ["MAN", "SID"], ["MAN", "SKG"], ["MAN", "SNN"], ["MAN", "SOF"], ["MAN", "SOU"], ["MAN", "SPU"], ["MAN", "SSH"], ["MAN", "SVG"], ["MAN", "SXF"], ["MAN", "TFS"], ["MAN", "TIP"], ["MAN", "TLL"], ["MAN", "TLS"], ["MAN", "TLV"], ["MAN", "TPS"], ["MAN", "UVF"], ["MAN", "VCE"], ["MAN", "VIE"], ["MAN", "VLC"], ["MAN", "VRN"], ["MAN", "WAT"], ["MAN", "WMI"], ["MAN", "YVR"], ["MAN", "YYC"], ["MAN", "YYZ"], ["MAN", "ZAD"], ["MAN", "ZRH"], ["MAN", "ZTH"], ["MAO", "MIA"], ["MAO", "PIN"], ["MAO", "PMV"], ["MAO", "PTY"], ["MAO", "PVH"], ["MAO", "STM"], ["MAO", "TBT"], ["MAO", "TFF"], ["MAO", "VCP"], ["MAR", "MIA"], ["MAR", "PBL"], ["MAR", "PMV"], ["MAR", "PTY"], ["MAR", "VLN"], ["MAS", "POM"], ["MAS", "RAB"], ["MAU", "PPT"], ["MAU", "RFP"], ["MAZ", "SJU"], ["MBA", "NBO"], ["MBA", "ZNZ"], ["MBJ", "MCO"], ["MBJ", "MDW"], ["MBJ", "MIA"], ["MBJ", "ORD"], ["MBJ", "PHL"], ["MBJ", "PTY"], ["MBJ", "PUJ"], ["MBJ", "STL"], ["MBJ", "YHZ"], ["MBJ", "YUL"], ["MBJ", "YYZ"], ["MBL", "MDW"], ["MBS", "MSP"], ["MBS", "ORD"], ["MBT", "MNL"], ["MCG", "NIB"], ["MCG", "TLJ"], ["MCI", "MCO"], ["MCI", "MDW"], ["MCI", "MEM"], ["MCI", "MKE"], ["MCI", "MSP"], ["MCI", "MSY"], ["MCI", "OAK"], ["MCI", "ORD"], ["MCI", "PDX"], ["MCI", "PHL"], ["MCI", "PHX"], ["MCI", "SAN"], ["MCI", "SEA"], ["MCI", "SFO"], ["MCI", "SLC"], ["MCI", "SLN"], ["MCI", "STL"], ["MCI", "TPA"], ["MCI", "YYZ"], ["MCN", "MCO"], ["MCO", "MDT"], ["MCO", "MDW"], ["MCO", "MEM"], ["MCO", "MEX"], ["MCO", "MHH"], ["MCO", "MHT"], ["MCO", "MIA"], ["MCO", "MKE"], ["MCO", "MSP"], ["MCO", "MSY"], ["MCO", "NAS"], ["MCO", "OMA"], ["MCO", "ORD"], ["MCO", "ORF"], ["MCO", "ORH"], ["MCO", "PHL"], ["MCO", "PHX"], ["MCO", "PIT"], ["MCO", "PNS"], ["MCO", "POS"], ["MCO", "PSE"], ["MCO", "PTY"], ["MCO", "PVD"], ["MCO", "RDU"], ["MCO", "RIC"], ["MCO", "ROC"], ["MCO", "RSW"], ["MCO", "SAL"], ["MCO", "SAN"], ["MCO", "SAT"], ["MCO", "SDF"], ["MCO", "SDQ"], ["MCO", "SEA"], ["MCO", "SFO"], ["MCO", "SJO"], ["MCO", "SJU"], ["MCO", "SLC"], ["MCO", "STL"], ["MCO", "SWF"], ["MCO", "SYR"], ["MCO", "TLH"], ["MCO", "TTN"], ["MCO", "YHZ"], ["MCO", "YQM"], ["MCO", "YUL"], ["MCO", "YYC"], ["MCO", "YYT"], ["MCO", "YYZ"], ["MCT", "MED"], ["MCT", "MLE"], ["MCT", "MUC"], ["MCT", "MXP"], ["MCT", "PEW"], ["MCT", "RUH"], ["MCT", "SHJ"], ["MCT", "SKT"], ["MCT", "SLL"], ["MCT", "SYZ"], ["MCT", "TRV"], ["MCT", "TUK"], ["MCT", "ZBR"], ["MCT", "ZNZ"], ["MCT", "ZRH"], ["MCX", "SCO"], ["MCY", "MEL"], ["MCY", "SYD"], ["MCZ", "REC"], ["MCZ", "SSA"], ["MCZ", "VCP"], ["MDC", "MNA"], ["MDC", "NAH"], ["MDC", "SIN"], ["MDC", "SOQ"], ["MDC", "SUB"], ["MDC", "TTE"], ["MDC", "UPG"], ["MDE", "MIA"], ["MDE", "PTY"], ["MDE", "SAL"], ["MDE", "SMR"], ["MDE", "UIO"], ["MDG", "PEK"], ["MDG", "PVG"], ["MDG", "SHE"], ["MDG", "TAO"], ["MDL", "MYT"], ["MDL", "NYU"], ["MDL", "RGN"], ["MDL", "THL"], ["MDT", "ORD"], ["MDT", "PHL"], ["MDT", "PIE"], ["MDT", "SFB"], ["MDT", "YYZ"], ["MDU", "POM"], ["MDW", "MEM"], ["MDW", "MHT"], ["MDW", "MLM"], ["MDW", "MSP"], ["MDW", "MSY"], ["MDW", "OAK"], ["MDW", "OKC"], ["MDW", "OMA"], ["MDW", "ONT"], ["MDW", "ORF"], ["MDW", "PDX"], ["MDW", "PHL"], ["MDW", "PHX"], ["MDW", "PIT"], ["MDW", "PUJ"], ["MDW", "PVD"], ["MDW", "RDU"], ["MDW", "RNO"], ["MDW", "ROC"], ["MDW", "RSW"], ["MDW", "SAN"], ["MDW", "SAT"], ["MDW", "SDF"], ["MDW", "SEA"], ["MDW", "SFO"], ["MDW", "SJC"], ["MDW", "SLC"], ["MDW", "SMF"], ["MDW", "STL"], ["MDW", "TPA"], ["MDW", "TTN"], ["MDW", "TUL"], ["MDW", "TUS"], ["MDW", "YTZ"], ["MDW", "ZCL"], ["MDZ", "NQN"], ["MDZ", "SCL"], ["MDZ", "SLA"], ["MDZ", "UAQ"], ["MEA", "SDU"], ["MEA", "VCP"], ["MEB", "PTJ"], ["MEC", "UIO"], ["MED", "MHD"], ["MED", "MUX"], ["MED", "OMH"], ["MED", "ORN"], ["MED", "RAS"], ["MED", "RUH"], ["MED", "SAW"], ["MED", "SHJ"], ["MED", "SYZ"], ["MED", "TBZ"], ["MED", "THR"], ["MED", "TUN"], ["MED", "TUU"], ["MED", "ULH"], ["MEG", "VHC"], ["MEH", "VDS"], ["MEL", "MGB"], ["MEL", "MIM"], ["MEL", "MKY"], ["MEL", "MNL"], ["MEL", "MQL"], ["MEL", "NAN"], ["MEL", "NRT"], ["MEL", "NTL"], ["MEL", "OOL"], ["MEL", "PER"], ["MEL", "PHE"], ["MEL", "PVG"], ["MEL", "SCL"], ["MEL", "SGN"], ["MEL", "SIN"], ["MEL", "SYD"], ["MEL", "TSV"], ["MEL", "WGA"], ["MEL", "WLG"], ["MEL", "ZQN"], ["MEM", "MIA"], ["MEM", "MKL"], ["MEM", "MSP"], ["MEM", "MSY"], ["MEM", "ORD"], ["MEM", "PIT"], ["MEM", "RDU"], ["MEM", "SAT"], ["MEM", "SLC"], ["MEM", "TPA"], ["MEU", "ORX"], ["MEU", "STM"], ["MEX", "MFE"], ["MEX", "MIA"], ["MEX", "MID"], ["MEX", "MLM"], ["MEX", "MTT"], ["MEX", "MTY"], ["MEX", "MUC"], ["MEX", "MXL"], ["MEX", "MZT"], ["MEX", "NLD"], ["MEX", "NRT"], ["MEX", "OAX"], ["MEX", "ORD"], ["MEX", "PAZ"], ["MEX", "PDS"], ["MEX", "PHX"], ["MEX", "PQM"], ["MEX", "PTY"], ["MEX", "PVR"], ["MEX", "PXM"], ["MEX", "REX"], ["MEX", "SAL"], ["MEX", "SAN"], ["MEX", "SAP"], ["MEX", "SAT"], ["MEX", "SCL"], ["MEX", "SFO"], ["MEX", "SJD"], ["MEX", "SJO"], ["MEX", "SLP"], ["MEX", "SLW"], ["MEX", "SNA"], ["MEX", "SZX"], ["MEX", "TAM"], ["MEX", "TAP"], ["MEX", "TGZ"], ["MEX", "TIJ"], ["MEX", "TPQ"], ["MEX", "TRC"], ["MEX", "UIO"], ["MEX", "VER"], ["MEX", "VSA"], ["MEX", "YUL"], ["MEX", "YVR"], ["MEX", "YYZ"], ["MEX", "ZCL"], ["MEX", "ZIH"], ["MEX", "ZLO"], ["MFE", "SLP"], ["MFM", "MNL"], ["MFM", "MWX"], ["MFM", "NGB"], ["MFM", "NKG"], ["MFM", "NNG"], ["MFM", "NRT"], ["MFM", "OKJ"], ["MFM", "PEK"], ["MFM", "PUS"], ["MFM", "PVG"], ["MFM", "RMQ"], ["MFM", "SHA"], ["MFM", "SHE"], ["MFM", "SIN"], ["MFM", "TPE"], ["MFM", "TYN"], ["MFM", "WUH"], ["MFM", "WUX"], ["MFM", "XMN"], ["MFR", "PDX"], ["MFR", "SEA"], ["MFR", "SFO"], ["MFR", "SLC"], ["MGA", "MIA"], ["MGA", "PTY"], ["MGA", "SAL"], ["MGA", "SJO"], ["MGF", "POA"], ["MGF", "VCP"], ["MGQ", "NBO"], ["MGQ", "WJR"], ["MGS", "RAR"], ["MGT", "MNG"], ["MGZ", "TVY"], ["MHC", "PMC"], ["MHD", "MZR"], ["MHD", "NSH"], ["MHD", "RAS"], ["MHD", "RZR"], ["MHD", "SHJ"], ["MHD", "SRY"], ["MHD", "SYZ"], ["MHD", "TBZ"], ["MHD", "THR"], ["MHD", "UET"], ["MHD", "XBJ"], ["MHD", "ZAH"], ["MHD", "ZBR"], ["MHG", "TXL"], ["MHH", "MIA"], ["MHH", "NAS"], ["MHH", "PBI"], ["MHK", "ORD"], ["MHQ", "TKU"], ["MHT", "MSP"], ["MHT", "ORD"], ["MHT", "PHL"], ["MHT", "SLC"], ["MHT", "TPA"], ["MIA", "MID"], ["MIA", "MSP"], ["MIA", "MSY"], ["MIA", "MVD"], ["MIA", "MXP"], ["MIA", "NAS"], ["MIA", "ORD"], ["MIA", "ORF"], ["MIA", "PAP"], ["MIA", "PHL"], ["MIA", "PHX"], ["MIA", "PIT"], ["MIA", "PLS"], ["MIA", "PNS"], ["MIA", "POA"], ["MIA", "POP"], ["MIA", "POS"], ["MIA", "PTP"], ["MIA", "PTY"], ["MIA", "PUJ"], ["MIA", "RDU"], ["MIA", "REC"], ["MIA", "RIC"], ["MIA", "RTB"], ["MIA", "SAL"], ["MIA", "SAN"], ["MIA", "SAP"], ["MIA", "SCL"], ["MIA", "SDF"], ["MIA", "SDQ"], ["MIA", "SEA"], ["MIA", "SFB"], ["MIA", "SFO"], ["MIA", "SJO"], ["MIA", "SJU"], ["MIA", "SKB"], ["MIA", "SSA"], ["MIA", "STI"], ["MIA", "STL"], ["MIA", "STT"], ["MIA", "STX"], ["MIA", "SVO"], ["MIA", "SXM"], ["MIA", "TGU"], ["MIA", "TLH"], ["MIA", "TPA"], ["MIA", "TUL"], ["MIA", "TXL"], ["MIA", "UIO"], ["MIA", "UVF"], ["MIA", "VKO"], ["MIA", "VVI"], ["MIA", "YUL"], ["MIA", "YYZ"], ["MIA", "ZRH"], ["MID", "MTY"], ["MID", "VSA"], ["MIG", "NKG"], ["MIG", "PEK"], ["MIG", "PVG"], ["MIG", "SHA"], ["MIG", "SHE"], ["MIG", "SYX"], ["MIG", "SZX"], ["MIG", "XIY"], ["MIG", "XNN"], ["MII", "VCP"], ["MIM", "MYA"], ["MIM", "SYD"], ["MIR", "MRS"], ["MIR", "NCE"], ["MIR", "NTE"], ["MIR", "ORY"], ["MIR", "TIP"], ["MIR", "TUN"], ["MJD", "SKZ"], ["MJF", "MQN"], ["MJF", "OSY"], ["MJF", "SSJ"], ["MJF", "TRD"], ["MJN", "TNR"], ["MJT", "MUC"], ["MJT", "RHO"], ["MJT", "SKG"], ["MJV", "NCL"], ["MJV", "OSL"], ["MJV", "PIK"], ["MJV", "STN"], ["MJZ", "OVB"], ["MJZ", "PYJ"], ["MJZ", "YKS"], ["MKE", "MSP"], ["MKE", "MSY"], ["MKE", "ORD"], ["MKE", "PHL"], ["MKE", "PHX"], ["MKE", "RSW"], ["MKE", "SEA"], ["MKE", "SFO"], ["MKE", "STL"], ["MKE", "TPA"], ["MKE", "YYZ"], ["MKG", "ORD"], ["MKK", "OGG"], ["MKM", "MYY"], ["MKP", "PPT"], ["MKW", "SOQ"], ["MKW", "UPG"], ["MKY", "ROK"], ["MKY", "SYD"], ["MKY", "TSV"], ["MLA", "MRS"], ["MLA", "MUC"], ["MLA", "NBE"], ["MLA", "NCL"], ["MLA", "NTE"], ["MLA", "NWI"], ["MLA", "NYO"], ["MLA", "ORY"], ["MLA", "OSL"], ["MLA", "PIK"], ["MLA", "PRG"], ["MLA", "PSA"], ["MLA", "RIX"], ["MLA", "RYG"], ["MLA", "SAW"], ["MLA", "STN"], ["MLA", "SVO"], ["MLA", "TIP"], ["MLA", "TLS"], ["MLA", "TPS"], ["MLA", "TRN"], ["MLA", "TSF"], ["MLA", "TUN"], ["MLA", "TXL"], ["MLA", "VIE"], ["MLA", "WRO"], ["MLA", "ZRH"], ["MLE", "MXP"], ["MLE", "PEK"], ["MLE", "PVG"], ["MLE", "SIN"], ["MLE", "SVO"], ["MLE", "TRV"], ["MLE", "VKO"], ["MLI", "MSP"], ["MLI", "ORD"], ["MLI", "PIE"], ["MLI", "SFB"], ["MLL", "RSH"], ["MLM", "SFO"], ["MLM", "TIJ"], ["MLX", "SAW"], ["MMB", "NGO"], ["MMK", "SVO"], ["MMK", "TOS"], ["MMO", "RAI"], ["MMX", "ORB"], ["MMX", "SKP"], ["MMX", "STN"], ["MMX", "TZL"], ["MMX", "VBY"], ["MMX", "WAW"], ["MMY", "OKA"], ["MNL", "MPH"], ["MNL", "MYY"], ["MNL", "NGO"], ["MNL", "NRT"], ["MNL", "OZC"], ["MNL", "PAG"], ["MNL", "PEK"], ["MNL", "POM"], ["MNL", "PPS"], ["MNL", "PUS"], ["MNL", "PVG"], ["MNL", "REP"], ["MNL", "ROR"], ["MNL", "RUH"], ["MNL", "RXS"], ["MNL", "SFO"], ["MNL", "SGN"], ["MNL", "SIN"], ["MNL", "SJI"], ["MNL", "SUG"], ["MNL", "SYD"], ["MNL", "TAC"], ["MNL", "TAG"], ["MNL", "TPE"], ["MNL", "TUG"], ["MNL", "USU"], ["MNL", "VRC"], ["MNL", "WNP"], ["MNL", "XMN"], ["MNL", "YVR"], ["MNL", "ZAM"], ["MNS", "NLA"], ["MOB", "ORD"], ["MOC", "PLU"], ["MOD", "SFO"], ["MOI", "RAR"], ["MOL", "OSL"], ["MOL", "SRP"], ["MOQ", "TLE"], ["MOQ", "TNR"], ["MOT", "MSP"], ["MOV", "TSV"], ["MOZ", "PPT"], ["MOZ", "RFP"], ["MPA", "NDU"], ["MPL", "NDR"], ["MPL", "NTE"], ["MPL", "ORY"], ["MPL", "RTM"], ["MPL", "SXB"], ["MPM", "NBO"], ["MPM", "POL"], ["MPM", "TET"], ["MPM", "UEL"], ["MPM", "VNX"], ["MPM", "VPY"], ["MPN", "PUQ"], ["MPN", "RGL"], ["MQF", "SVO"], ["MQF", "SVX"], ["MQJ", "YKS"], ["MQL", "SYD"], ["MQM", "SAW"], ["MQN", "RVK"], ["MQN", "TRD"], ["MQT", "ORD"], ["MRE", "NYK"], ["MRE", "WIL"], ["MRS", "MUC"], ["MRS", "MXP"], ["MRS", "NDR"], ["MRS", "NTE"], ["MRS", "OPO"], ["MRS", "ORN"], ["MRS", "ORY"], ["MRS", "OUD"], ["MRS", "PMI"], ["MRS", "PMO"], ["MRS", "PRG"], ["MRS", "PUF"], ["MRS", "QSF"], ["MRS", "RAK"], ["MRS", "RBA"], ["MRS", "RNS"], ["MRS", "RUN"], ["MRS", "SAW"], ["MRS", "STN"], ["MRS", "SVO"], ["MRS", "SVQ"], ["MRS", "SXB"], ["MRS", "TLM"], ["MRS", "TLS"], ["MRS", "TLV"], ["MRS", "TNG"], ["MRS", "TNR"], ["MRS", "TUF"], ["MRS", "TUN"], ["MRS", "TXL"], ["MRS", "VCE"], ["MRS", "VLC"], ["MRS", "WMI"], ["MRS", "YUL"], ["MRS", "ZAD"], ["MRU", "MXP"], ["MRU", "NBO"], ["MRU", "ORY"], ["MRU", "PEK"], ["MRU", "PER"], ["MRU", "PVG"], ["MRU", "RRG"], ["MRU", "RUN"], ["MRU", "SEZ"], ["MRU", "TNR"], ["MRU", "VKO"], ["MRU", "ZSE"], ["MRV", "RTW"], ["MRV", "SAW"], ["MRV", "SCO"], ["MRV", "SVO"], ["MRV", "SVX"], ["MRV", "TAS"], ["MRV", "TLV"], ["MRV", "VKO"], ["MRX", "THR"], ["MRY", "PHX"], ["MRY", "SAN"], ["MRY", "SFO"], ["MRZ", "SYD"], ["MSA", "XBE"], ["MSA", "YXL"], ["MSA", "ZPB"], ["MSA", "ZRJ"], ["MSN", "MSP"], ["MSN", "ORD"], ["MSN", "SLC"], ["MSO", "MSP"], ["MSO", "PDX"], ["MSO", "SEA"], ["MSO", "SLC"], ["MSP", "MSY"], ["MSP", "NRT"], ["MSP", "OAK"], ["MSP", "OKC"], ["MSP", "OMA"], ["MSP", "ORD"], ["MSP", "ORF"], ["MSP", "PDX"], ["MSP", "PHL"], ["MSP", "PHX"], ["MSP", "PIA"], ["MSP", "PIT"], ["MSP", "PSC"], ["MSP", "PSP"], ["MSP", "PUJ"], ["MSP", "RAP"], ["MSP", "RDU"], ["MSP", "RHI"], ["MSP", "RIC"], ["MSP", "ROC"], ["MSP", "RST"], ["MSP", "RSW"], ["MSP", "SAN"], ["MSP", "SAT"], ["MSP", "SBN"], ["MSP", "SDF"], ["MSP", "SEA"], ["MSP", "SFO"], ["MSP", "SJC"], ["MSP", "SLC"], ["MSP", "SMF"], ["MSP", "SNA"], ["MSP", "STL"], ["MSP", "SYR"], ["MSP", "TPA"], ["MSP", "TUL"], ["MSP", "TUS"], ["MSP", "TVC"], ["MSP", "TYS"], ["MSP", "XNA"], ["MSP", "YEG"], ["MSP", "YQR"], ["MSP", "YUL"], ["MSP", "YVR"], ["MSP", "YWG"], ["MSP", "YXE"], ["MSP", "YYC"], ["MSP", "YYZ"], ["MSQ", "MXP"], ["MSQ", "NCE"], ["MSQ", "PRG"], ["MSQ", "RIX"], ["MSQ", "SVO"], ["MSQ", "SVX"], ["MSQ", "SXF"], ["MSQ", "TBS"], ["MSQ", "TLV"], ["MSQ", "TSE"], ["MSQ", "VIE"], ["MSQ", "VNO"], ["MSQ", "WAW"], ["MSR", "SAW"], ["MST", "OPO"], ["MST", "PMI"], ["MST", "TFS"], ["MST", "TPS"], ["MSY", "ORD"], ["MSY", "PHL"], ["MSY", "PHX"], ["MSY", "SAN"], ["MSY", "SFO"], ["MSY", "SLC"], ["MSY", "STL"], ["MSY", "TPA"], ["MSY", "YYZ"], ["MTV", "SLH"], ["MTV", "TOH"], ["MTV", "ZGU"], ["MTY", "MZT"], ["MTY", "OAX"], ["MTY", "ORD"], ["MTY", "PBC"], ["MTY", "PTY"], ["MTY", "PVR"], ["MTY", "QRO"], ["MTY", "SAT"], ["MTY", "SJD"], ["MTY", "TAM"], ["MTY", "TGZ"], ["MTY", "TIJ"], ["MTY", "TLC"], ["MTY", "VER"], ["MTY", "VSA"], ["MUA", "RBV"], ["MUB", "VFA"], ["MUB", "WDH"], ["MUC", "MXP"], ["MUC", "NAP"], ["MUC", "NBE"], ["MUC", "NCE"], ["MUC", "NTE"], ["MUC", "NUE"], ["MUC", "ODS"], ["MUC", "OLB"], ["MUC", "OPO"], ["MUC", "ORD"], ["MUC", "ORK"], ["MUC", "OSL"], ["MUC", "OTP"], ["MUC", "OVB"], ["MUC", "PAD"], ["MUC", "PEK"], ["MUC", "PHL"], ["MUC", "PMI"], ["MUC", "PMO"], ["MUC", "POZ"], ["MUC", "PRG"], ["MUC", "PRN"], ["MUC", "PSA"], ["MUC", "PUJ"], ["MUC", "PVG"], ["MUC", "PVK"], ["MUC", "RAK"], ["MUC", "RHO"], ["MUC", "RIX"], ["MUC", "RLG"], ["MUC", "RTM"], ["MUC", "RUH"], ["MUC", "SAW"], ["MUC", "SBZ"], ["MUC", "SFO"], ["MUC", "SID"], ["MUC", "SIN"], ["MUC", "SJJ"], ["MUC", "SKG"], ["MUC", "SMI"], ["MUC", "SOF"], ["MUC", "SPC"], ["MUC", "SPU"], ["MUC", "STN"], ["MUC", "STR"], ["MUC", "SUF"], ["MUC", "SVO"], ["MUC", "SVX"], ["MUC", "TBS"], ["MUC", "TFS"], ["MUC", "TIA"], ["MUC", "TLS"], ["MUC", "TLV"], ["MUC", "TRN"], ["MUC", "TRS"], ["MUC", "TSR"], ["MUC", "TUN"], ["MUC", "TXL"], ["MUC", "VCE"], ["MUC", "VIE"], ["MUC", "VLC"], ["MUC", "VNO"], ["MUC", "VOZ"], ["MUC", "VRN"], ["MUC", "WAW"], ["MUC", "WRO"], ["MUC", "XRY"], ["MUC", "YUL"], ["MUC", "YVR"], ["MUC", "YYZ"], ["MUC", "ZAD"], ["MUC", "ZAG"], ["MUC", "ZRH"], ["MUC", "ZTH"], ["MUE", "OGG"], ["MUK", "RAR"], ["MUN", "PMV"], ["MUR", "MYY"], ["MUR", "ODN"], ["MUW", "TID"], ["MUX", "SHJ"], ["MUX", "UET"], ["MVD", "POA"], ["MVD", "PTY"], ["MVD", "SCL"], ["MVP", "VVC"], ["MVR", "NSI"], ["MVT", "PPT"], ["MVT", "RGI"], ["MWA", "STL"], ["MWF", "SON"], ["MWX", "PEK"], ["MWX", "PVG"], ["MWX", "TSN"], ["MWZ", "NBO"], ["MXH", "POM"], ["MXH", "TIZ"], ["MXP", "NAP"], ["MXP", "NRT"], ["MXP", "NTE"], ["MXP", "OLB"], ["MXP", "OPO"], ["MXP", "OSL"], ["MXP", "OTP"], ["MXP", "PEK"], ["MXP", "PMI"], ["MXP", "PMO"], ["MXP", "PRG"], ["MXP", "PVG"], ["MXP", "RAK"], ["MXP", "RIX"], ["MXP", "RUH"], ["MXP", "SAW"], ["MXP", "SIN"], ["MXP", "SOF"], ["MXP", "SSH"], ["MXP", "STR"], ["MXP", "SUF"], ["MXP", "SVO"], ["MXP", "SXF"], ["MXP", "TAS"], ["MXP", "TFS"], ["MXP", "TIA"], ["MXP", "TLS"], ["MXP", "TLV"], ["MXP", "TUN"], ["MXP", "TXL"], ["MXP", "UGC"], ["MXP", "VIE"], ["MXP", "VKO"], ["MXP", "WAW"], ["MXP", "ZRH"], ["MXV", "ULN"], ["MXZ", "RMQ"], ["MXZ", "SZX"], ["MXZ", "ZUH"], ["MYA", "SYD"], ["MYD", "NBO"], ["MYD", "WIL"], ["MYG", "NAS"], ["MYJ", "NGO"], ["MYJ", "NRT"], ["MYJ", "OKA"], ["MYJ", "PVG"], ["MYR", "ORD"], ["MYR", "PBG"], ["MYR", "PHL"], ["MYR", "YNG"], ["MYR", "YTZ"], ["MYR", "YYZ"], ["MYT", "PBU"], ["MYT", "RGN"], ["MYU", "OOK"], ["MYY", "MZV"], ["MYY", "ODN"], ["MYY", "PEN"], ["MYY", "SBW"], ["MYY", "SIN"], ["MYY", "TGG"], ["MZG", "RMQ"], ["MZG", "TSA"], ["MZH", "SAW"], ["MZT", "PHX"], ["MZT", "TIJ"], ["NAG", "PNQ"], ["NAG", "RPR"], ["NAG", "SHJ"], ["NAN", "NOU"], ["NAN", "POM"], ["NAN", "RTA"], ["NAN", "SUV"], ["NAN", "SVU"], ["NAN", "SYD"], ["NAN", "TBU"], ["NAN", "TRW"], ["NAN", "TVU"], ["NAN", "VLI"], ["NAN", "WLS"], ["NAO", "PEK"], ["NAO", "PVG"], ["NAO", "SZX"], ["NAO", "XIY"], ["NAP", "NCE"], ["NAP", "NTE"], ["NAP", "OLB"], ["NAP", "ORY"], ["NAP", "OTP"], ["NAP", "PMO"], ["NAP", "PRG"], ["NAP", "STN"], ["NAP", "STR"], ["NAP", "SXF"], ["NAP", "TLV"], ["NAP", "TRN"], ["NAP", "TRS"], ["NAP", "TUN"], ["NAP", "TXL"], ["NAP", "VCE"], ["NAP", "VIE"], ["NAP", "VRN"], ["NAP", "ZRH"], ["NAQ", "THU"], ["NAS", "ORD"], ["NAS", "PBI"], ["NAS", "PHL"], ["NAS", "PLS"], ["NAS", "PTY"], ["NAS", "RCY"], ["NAS", "RSD"], ["NAS", "SKB"], ["NAS", "SML"], ["NAS", "TBI"], ["NAS", "YYZ"], ["NAS", "ZSA"], ["NAT", "REC"], ["NAT", "SSA"], ["NAT", "VCP"], ["NAV", "SAW"], ["NAY", "NDG"], ["NAY", "NGB"], ["NAY", "NNY"], ["NAY", "NZH"], ["NAY", "SHA"], ["NAY", "SZX"], ["NAY", "UYN"], ["NAY", "WNZ"], ["NAY", "WUA"], ["NAY", "XFN"], ["NAY", "XIL"], ["NAY", "XMN"], ["NAY", "ZHA"], ["NBC", "SVO"], ["NBC", "SVX"], ["NBE", "NCL"], ["NBE", "NUE"], ["NBE", "SVO"], ["NBE", "SXF"], ["NBE", "TXL"], ["NBE", "ZRH"], ["NBO", "NLA"], ["NBO", "NSI"], ["NBO", "POL"], ["NBO", "SAH"], ["NBO", "SEZ"], ["NBO", "SHJ"], ["NBO", "TNR"], ["NBO", "WJR"], ["NBO", "ZNZ"], ["NBO", "ZRH"], ["NBS", "PEK"], ["NBS", "SHE"], ["NBS", "TSN"], ["NCE", "NCL"], ["NCE", "NTE"], ["NCE", "OLB"], ["NCE", "ORK"], ["NCE", "ORY"], ["NCE", "OSL"], ["NCE", "OTP"], ["NCE", "PRG"], ["NCE", "RAK"], ["NCE", "RIX"], ["NCE", "RNS"], ["NCE", "RTM"], ["NCE", "SNN"], ["NCE", "SOU"], ["NCE", "STN"], ["NCE", "SVO"], ["NCE", "SXB"], ["NCE", "SXF"], ["NCE", "TLL"], ["NCE", "TLS"], ["NCE", "TLV"], ["NCE", "TRD"], ["NCE", "TRF"], ["NCE", "TUN"], ["NCE", "TXL"], ["NCE", "VCE"], ["NCE", "VIE"], ["NCE", "WAW"], ["NCE", "YUL"], ["NCE", "ZRH"], ["NCL", "ORK"], ["NCL", "PFO"], ["NCL", "PMI"], ["NCL", "PRG"], ["NCL", "PSA"], ["NCL", "REU"], ["NCL", "RHO"], ["NCL", "SOU"], ["NCL", "SSH"], ["NCL", "SVG"], ["NCL", "TFS"], ["NCL", "VCE"], ["NCU", "TAS"], ["NCU", "VKO"], ["NDB", "NKC"], ["NDB", "OUZ"], ["NDG", "PEK"], ["NDG", "PVG"], ["NDG", "TAO"], ["NDJ", "NGE"], ["NDJ", "NIM"], ["NDJ", "NSI"], ["NDR", "PMI"], ["NDY", "NRL"], ["NDY", "SOY"], ["NER", "VKO"], ["NER", "YKS"], ["NEV", "SJU"], ["NEV", "SKB"], ["NEV", "STT"], ["NEV", "SXM"], ["NGB", "PEK"], ["NGB", "RMQ"], ["NGB", "SHE"], ["NGB", "SIN"], ["NGB", "SJW"], ["NGB", "SWA"], ["NGB", "SYX"], ["NGB", "SZX"], ["NGB", "TAO"], ["NGB", "TPE"], ["NGB", "TSN"], ["NGB", "WEF"], ["NGB", "WUH"], ["NGB", "XIY"], ["NGB", "XMN"], ["NGB", "YIH"], ["NGB", "ZUH"], ["NGE", "NSI"], ["NGO", "NGS"], ["NGO", "NRT"], ["NGO", "OIT"], ["NGO", "OKA"], ["NGO", "PEK"], ["NGO", "PUS"], ["NGO", "PVG"], ["NGO", "SDJ"], ["NGO", "SGN"], ["NGO", "SHE"], ["NGO", "SIN"], ["NGO", "SPN"], ["NGO", "TAO"], ["NGO", "TPE"], ["NGO", "TSN"], ["NGS", "OKA"], ["NGS", "PVG"], ["NGS", "TSJ"], ["NGS", "UKB"], ["NHV", "PPT"], ["NHV", "UAH"], ["NHV", "UAP"], ["NIM", "OUA"], ["NJC", "OMS"], ["NJC", "OVB"], ["NJC", "SVO"], ["NJC", "SVX"], ["NJC", "TJM"], ["NJC", "UUA"], ["NJF", "SHJ"], ["NKC", "OUZ"], ["NKC", "TUN"], ["NKG", "NNG"], ["NKG", "NRT"], ["NKG", "PEK"], ["NKG", "PUS"], ["NKG", "PVG"], ["NKG", "RMQ"], ["NKG", "SHE"], ["NKG", "SIN"], ["NKG", "SJW"], ["NKG", "SWA"], ["NKG", "SYD"], ["NKG", "SYX"], ["NKG", "SZX"], ["NKG", "TAO"], ["NKG", "TGO"], ["NKG", "TPE"], ["NKG", "TYN"], ["NKG", "URC"], ["NKG", "XIY"], ["NKG", "XMN"], ["NKG", "XNN"], ["NKG", "YCU"], ["NKG", "YNT"], ["NKG", "ZYI"], ["NLK", "SYD"], ["NLT", "URC"], ["NMA", "OVB"], ["NMA", "SVX"], ["NMA", "TAS"], ["NME", "OOK"], ["NNG", "PEK"], ["NNG", "PNH"], ["NNG", "PVG"], ["NNG", "RGN"], ["NNG", "RMQ"], ["NNG", "SGN"], ["NNG", "SHA"], ["NNG", "SIN"], ["NNG", "SWA"], ["NNG", "SYX"], ["NNG", "SZX"], ["NNG", "TPE"], ["NNG", "TSA"], ["NNG", "VTE"], ["NNG", "WNZ"], ["NNG", "WUH"], ["NNG", "WUZ"], ["NNG", "XIY"], ["NNG", "XMN"], ["NNG", "ZUH"], ["NNM", "SCW"], ["NNY", "SHA"], ["NNY", "SZX"], ["NOB", "SJO"], ["NOB", "TMU"], ["NOC", "STN"], ["NOC", "TFS"], ["NOJ", "SLY"], ["NOJ", "SVX"], ["NOJ", "TJM"], ["NOJ", "UFA"], ["NOS", "RUN"], ["NOS", "TNR"], ["NOU", "NRT"], ["NOU", "PPT"], ["NOU", "SYD"], ["NOU", "VLI"], ["NOU", "WLS"], ["NOV", "SPP"], ["NOV", "VPE"], ["NOZ", "SVO"], ["NPE", "WLG"], ["NPL", "WLG"], ["NRA", "SYD"], ["NRL", "PPW"], ["NRN", "OPO"], ["NRN", "OUD"], ["NRN", "PMI"], ["NRN", "PMO"], ["NRN", "PSA"], ["NRN", "PSR"], ["NRN", "RAK"], ["NRN", "RIX"], ["NRN", "SDR"], ["NRN", "SKG"], ["NRN", "STN"], ["NRN", "SUF"], ["NRN", "TFS"], ["NRN", "TSF"], ["NRN", "VLC"], ["NRN", "ZAD"], ["NRT", "OIT"], ["NRT", "OKA"], ["NRT", "OOL"], ["NRT", "ORD"], ["NRT", "PDX"], ["NRT", "PEK"], ["NRT", "POM"], ["NRT", "PPT"], ["NRT", "PUS"], ["NRT", "PVG"], ["NRT", "RGN"], ["NRT", "ROR"], ["NRT", "SAN"], ["NRT", "SDJ"], ["NRT", "SEA"], ["NRT", "SFO"], ["NRT", "SGN"], ["NRT", "SHE"], ["NRT", "SIN"], ["NRT", "SJC"], ["NRT", "SPN"], ["NRT", "SVO"], ["NRT", "SYD"], ["NRT", "TAK"], ["NRT", "TAO"], ["NRT", "TAS"], ["NRT", "TIJ"], ["NRT", "TPE"], ["NRT", "ULN"], ["NRT", "UUS"], ["NRT", "VCE"], ["NRT", "VIE"], ["NRT", "VVO"], ["NRT", "XMN"], ["NRT", "YGJ"], ["NRT", "YVR"], ["NRT", "YYC"], ["NRT", "YYZ"], ["NRT", "ZRH"], ["NSH", "THR"], ["NSK", "OVB"], ["NSK", "SVX"], ["NSK", "UFA"], ["NSK", "VKO"], ["NSN", "PMR"], ["NSN", "WLG"], ["NTE", "OLB"], ["NTE", "OPO"], ["NTE", "ORY"], ["NTE", "PGF"], ["NTE", "PMI"], ["NTE", "PMO"], ["NTE", "PRG"], ["NTE", "PUJ"], ["NTE", "RAK"], ["NTE", "SOU"], ["NTE", "SVQ"], ["NTE", "SXB"], ["NTE", "TFS"], ["NTE", "TLS"], ["NTE", "TUN"], ["NTE", "TXL"], ["NTE", "VCE"], ["NTE", "VLC"], ["NTL", "OOL"], ["NTL", "SYD"], ["NTN", "ONG"], ["NUE", "OLB"], ["NUE", "PMI"], ["NUE", "RHO"], ["NUE", "SAW"], ["NUE", "SKG"], ["NUE", "SMI"], ["NUE", "SPU"], ["NUE", "STN"], ["NUE", "TFS"], ["NUE", "TXL"], ["NUE", "VIE"], ["NUE", "ZQW"], ["NUE", "ZRH"], ["NUI", "SCC"], ["NUS", "SON"], ["NUS", "SWJ"], ["NUS", "VLI"], ["NUX", "OMS"], ["NUX", "OVB"], ["NUX", "SLY"], ["NUX", "SVO"], ["NUX", "SVX"], ["NUX", "TJM"], ["NUX", "UFA"], ["NUX", "VKO"], ["NVI", "TAS"], ["NVT", "POA"], ["NVT", "VCP"], ["NYA", "SVX"], ["NYA", "TJM"], ["NYK", "UAS"], ["NYK", "WIL"], ["NYM", "OVS"], ["NYM", "SLY"], ["NYM", "SVX"], ["NYM", "TJM"], ["NYM", "UFA"], ["NYM", "VKO"], ["NYO", "PFO"], ["NYO", "PMI"], ["NYO", "POZ"], ["NYO", "PSA"], ["NYO", "RHO"], ["NYO", "RJK"], ["NYO", "SKG"], ["NYO", "SKP"], ["NYO", "STN"], ["NYO", "TSF"], ["NYO", "WAW"], ["NYO", "WMI"], ["NYO", "ZAD"], ["NYU", "RGN"], ["NZH", "OVB"], ["NZH", "PEK"], ["NZH", "UUD"], ["OAG", "SYD"], ["OAK", "OGG"], ["OAK", "OKC"], ["OAK", "ONT"], ["OAK", "ORD"], ["OAK", "PDX"], ["OAK", "PHX"], ["OAK", "PVU"], ["OAK", "SAN"], ["OAK", "SEA"], ["OAK", "SLC"], ["OAK", "SNA"], ["OAX", "TIJ"], ["OBU", "OTZ"], ["OBU", "SHG"], ["OCC", "UIO"], ["ODS", "SHJ"], ["ODS", "SVO"], ["ODS", "TLV"], ["ODS", "VIE"], ["ODS", "VKO"], ["ODS", "WAW"], ["ODY", "VTE"], ["OGG", "ORD"], ["OGG", "PDX"], ["OGG", "PHX"], ["OGG", "SAN"], ["OGG", "SEA"], ["OGG", "SFO"], ["OGG", "SJC"], ["OGG", "SMF"], ["OGG", "YVR"], ["OGX", "ORN"], ["OIA", "SXX"], ["OKA", "OKJ"], ["OKA", "PEK"], ["OKA", "PUS"], ["OKA", "PVG"], ["OKA", "RMQ"], ["OKA", "SDJ"], ["OKA", "TAK"], ["OKA", "TPE"], ["OKA", "UEO"], ["OKA", "UKB"], ["OKA", "YGJ"], ["OKC", "ORD"], ["OKC", "PDX"], ["OKC", "PHX"], ["OKC", "SFB"], ["OKC", "SFO"], ["OKC", "SLC"], ["OKC", "STL"], ["OKJ", "PVG"], ["OKJ", "TPE"], ["OLA", "OSL"], ["OLB", "RIX"], ["OLB", "STR"], ["OLB", "SXF"], ["OLB", "TRN"], ["OLB", "TXL"], ["OLB", "VCE"], ["OLB", "VIE"], ["OLB", "VRN"], ["OLB", "ZRH"], ["OLC", "TFF"], ["OMA", "ORD"], ["OMA", "PHX"], ["OMA", "SAN"], ["OMA", "SEA"], ["OMA", "SLC"], ["OMA", "STL"], ["OMD", "WDH"], ["OME", "OTZ"], ["OME", "SHH"], ["OME", "SKK"], ["OME", "SVA"], ["OME", "TLA"], ["OME", "TNC"], ["OME", "UNK"], ["OME", "WAA"], ["OME", "WMO"], ["OMH", "THR"], ["OMR", "OTP"], ["OMS", "OVB"], ["OMS", "SAW"], ["OMS", "SVO"], ["OMS", "TAS"], ["OMS", "TSE"], ["ONT", "PDX"], ["ONT", "PHX"], ["ONT", "SEA"], ["ONT", "SFO"], ["ONT", "SJC"], ["ONT", "SJU"], ["ONT", "SLC"], ["ONT", "SMF"], ["OOL", "SIN"], ["OOL", "SYD"], ["OPO", "ORY"], ["OPO", "PDL"], ["OPO", "PMI"], ["OPO", "STN"], ["OPO", "SXB"], ["OPO", "TER"], ["OPO", "TFS"], ["OPO", "TUF"], ["OPO", "VLC"], ["OPO", "XCR"], ["OPO", "YYZ"], ["OPO", "ZRH"], ["ORD", "ORF"], ["ORD", "PAH"], ["ORD", "PBI"], ["ORD", "PDX"], ["ORD", "PEK"], ["ORD", "PHL"], ["ORD", "PHX"], ["ORD", "PIA"], ["ORD", "PIT"], ["ORD", "PNS"], ["ORD", "PSP"], ["ORD", "PTY"], ["ORD", "PUJ"], ["ORD", "PVD"], ["ORD", "PVG"], ["ORD", "PVR"], ["ORD", "PWM"], ["ORD", "RAP"], ["ORD", "RDU"], ["ORD", "RIC"], ["ORD", "RNO"], ["ORD", "ROA"], ["ORD", "ROC"], ["ORD", "RST"], ["ORD", "RSW"], ["ORD", "SAL"], ["ORD", "SAN"], ["ORD", "SAT"], ["ORD", "SAV"], ["ORD", "SBN"], ["ORD", "SCE"], ["ORD", "SDF"], ["ORD", "SEA"], ["ORD", "SFO"], ["ORD", "SGF"], ["ORD", "SJC"], ["ORD", "SJD"], ["ORD", "SJO"], ["ORD", "SJU"], ["ORD", "SLC"], ["ORD", "SMF"], ["ORD", "SNA"], ["ORD", "SPI"], ["ORD", "SRQ"], ["ORD", "STC"], ["ORD", "STL"], ["ORD", "STT"], ["ORD", "SUX"], ["ORD", "SXM"], ["ORD", "SYR"], ["ORD", "TOL"], ["ORD", "TPA"], ["ORD", "TUL"], ["ORD", "TUS"], ["ORD", "TVC"], ["ORD", "TXL"], ["ORD", "TYS"], ["ORD", "VIE"], ["ORD", "WAW"], ["ORD", "XNA"], ["ORD", "YEG"], ["ORD", "YHZ"], ["ORD", "YKF"], ["ORD", "YOW"], ["ORD", "YQB"], ["ORD", "YQR"], ["ORD", "YUL"], ["ORD", "YVR"], ["ORD", "YWG"], ["ORD", "YXE"], ["ORD", "YXU"], ["ORD", "YYC"], ["ORD", "YYZ"], ["ORD", "ZRH"], ["ORF", "PHL"], ["ORF", "SFO"], ["ORK", "PMI"], ["ORK", "STN"], ["ORK", "TFS"], ["ORK", "VNO"], ["ORK", "WRO"], ["ORN", "ORY"], ["ORN", "TLS"], ["ORN", "TUN"], ["ORU", "SRZ"], ["ORV", "OTZ"], ["ORX", "STM"], ["ORY", "OSL"], ["ORY", "OUD"], ["ORY", "OZZ"], ["ORY", "PAP"], ["ORY", "PDL"], ["ORY", "PGF"], ["ORY", "PGX"], ["ORY", "PMI"], ["ORY", "PMO"], ["ORY", "PRG"], ["ORY", "PSA"], ["ORY", "PTP"], ["ORY", "PUF"], ["ORY", "QSF"], ["ORY", "RAK"], ["ORY", "RBA"], ["ORY", "RDZ"], ["ORY", "RUN"], ["ORY", "SAW"], ["ORY", "SCU"], ["ORY", "SDQ"], ["ORY", "SOU"], ["ORY", "SVQ"], ["ORY", "SXB"], ["ORY", "SXF"], ["ORY", "SXM"], ["ORY", "TFN"], ["ORY", "TFS"], ["ORY", "TLM"], ["ORY", "TLN"], ["ORY", "TLS"], ["ORY", "TLV"], ["ORY", "TNG"], ["ORY", "TNR"], ["ORY", "TOE"], ["ORY", "TUN"], ["ORY", "TXL"], ["ORY", "UIP"], ["ORY", "VCE"], ["ORY", "VKO"], ["ORY", "VLC"], ["ORY", "YUL"], ["OSD", "UME"], ["OSI", "SPU"], ["OSI", "STN"], ["OSI", "ZAG"], ["OSL", "PLQ"], ["OSL", "PMI"], ["OSL", "PRG"], ["OSL", "PSA"], ["OSL", "PUY"], ["OSL", "RAK"], ["OSL", "RIX"], ["OSL", "RRS"], ["OSL", "SDN"], ["OSL", "SOG"], ["OSL", "SPU"], ["OSL", "SRP"], ["OSL", "SSJ"], ["OSL", "SVG"], ["OSL", "SVO"], ["OSL", "SXF"], ["OSL", "SZZ"], ["OSL", "TFS"], ["OSL", "TLL"], ["OSL", "TOS"], ["OSL", "TRD"], ["OSL", "TXL"], ["OSL", "VCE"], ["OSL", "VDB"], ["OSL", "VIE"], ["OSL", "VNO"], ["OSL", "VXO"], ["OSL", "WAW"], ["OSL", "ZRH"], ["OSR", "PRG"], ["OSR", "STN"], ["OSS", "OVB"], ["OSS", "SGC"], ["OSS", "SVX"], ["OSS", "URC"], ["OST", "PMI"], ["OSY", "RVK"], ["OSY", "TRD"], ["OTH", "PDX"], ["OTH", "SFO"], ["OTP", "PEG"], ["OTP", "PRG"], ["OTP", "PSA"], ["OTP", "SAW"], ["OTP", "SBZ"], ["OTP", "SKG"], ["OTP", "SOF"], ["OTP", "STN"], ["OTP", "SUJ"], ["OTP", "SVO"], ["OTP", "TGM"], ["OTP", "TLV"], ["OTP", "TRF"], ["OTP", "TSF"], ["OTP", "TSR"], ["OTP", "TXL"], ["OTP", "VIE"], ["OTP", "VLC"], ["OTP", "VRN"], ["OTP", "WAW"], ["OTP", "ZAZ"], ["OTP", "ZRH"], ["OTZ", "SHG"], ["OTZ", "WLK"], ["OTZ", "WTK"], ["OUA", "TUN"], ["OVB", "PEK"], ["OVB", "PRG"], ["OVB", "PYJ"], ["OVB", "SGC"], ["OVB", "SLY"], ["OVB", "SVO"], ["OVB", "SVX"], ["OVB", "TAS"], ["OVB", "TJM"], ["OVB", "TSE"], ["OVB", "URC"], ["OVB", "UUD"], ["OVB", "VKO"], ["OVB", "VVO"], ["OVB", "YKS"], ["OVD", "PMI"], ["OVD", "STN"], ["OVD", "SVQ"], ["OVD", "TFS"], ["OVD", "VLC"], ["OVS", "SVX"], ["OVS", "TJM"], ["OVS", "VKO"], ["OWB", "SFB"], ["OWB", "STL"], ["OXB", "RAI"], ["OZH", "VKO"], ["PAC", "PUE"], ["PAD", "PMI"], ["PAD", "TFS"], ["PAP", "PLS"], ["PAP", "PTP"], ["PAP", "PTY"], ["PAP", "SDQ"], ["PAP", "SXM"], ["PAP", "YUL"], ["PAV", "SSA"], ["PAZ", "REX"], ["PAZ", "VSA"], ["PBC", "TIJ"], ["PBG", "PIE"], ["PBG", "SFB"], ["PBI", "PHL"], ["PBI", "SJU"], ["PBI", "TPA"], ["PBJ", "ULB"], ["PBJ", "VLI"], ["PBL", "PMV"], ["PBM", "POS"], ["PBO", "PER"], ["PCL", "TPP"], ["PCR", "VVC"], ["PDA", "VVC"], ["PDL", "PIX"], ["PDL", "SJZ"], ["PDL", "SMA"], ["PDL", "TER"], ["PDL", "YYZ"], ["PDP", "ROS"], ["PDT", "PDX"], ["PDV", "STN"], ["PDX", "PHL"], ["PDX", "PHX"], ["PDX", "PSC"], ["PDX", "PSP"], ["PDX", "RDM"], ["PDX", "RNO"], ["PDX", "SAN"], ["PDX", "SBA"], ["PDX", "SEA"], ["PDX", "SFO"], ["PDX", "SJC"], ["PDX", "SLC"], ["PDX", "SMF"], ["PDX", "SNA"], ["PDX", "STS"], ["PDX", "TPA"], ["PDX", "TUS"], ["PDX", "YVR"], ["PDX", "YYC"], ["PEE", "PRG"], ["PEE", "SVO"], ["PEG", "STN"], ["PEG", "TPS"], ["PEI", "PTY"], ["PEK", "PUS"], ["PEK", "PVG"], ["PEK", "REP"], ["PEK", "RGN"], ["PEK", "RLK"], ["PEK", "SEA"], ["PEK", "SFO"], ["PEK", "SGN"], ["PEK", "SHA"], ["PEK", "SHE"], ["PEK", "SIN"], ["PEK", "SPN"], ["PEK", "SVO"], ["PEK", "SVX"], ["PEK", "SWA"], ["PEK", "SYD"], ["PEK", "SYX"], ["PEK", "SZX"], ["PEK", "TAE"], ["PEK", "TAO"], ["PEK", "TAS"], ["PEK", "TEN"], ["PEK", "TGO"], ["PEK", "TLV"], ["PEK", "TNA"], ["PEK", "TPE"], ["PEK", "TSE"], ["PEK", "TXL"], ["PEK", "TXN"], ["PEK", "TYN"], ["PEK", "ULN"], ["PEK", "URC"], ["PEK", "UUD"], ["PEK", "UYN"], ["PEK", "VIE"], ["PEK", "VKO"], ["PEK", "VVO"], ["PEK", "WAW"], ["PEK", "WEF"], ["PEK", "WNZ"], ["PEK", "WUA"], ["PEK", "WUH"], ["PEK", "WUS"], ["PEK", "WUX"], ["PEK", "WXN"], ["PEK", "XFN"], ["PEK", "XIL"], ["PEK", "XIY"], ["PEK", "XMN"], ["PEK", "XNN"], ["PEK", "YBP"], ["PEK", "YCU"], ["PEK", "YIC"], ["PEK", "YIH"], ["PEK", "YIW"], ["PEK", "YKS"], ["PEK", "YNJ"], ["PEK", "YNT"], ["PEK", "YNZ"], ["PEK", "YTY"], ["PEK", "YVR"], ["PEK", "YYZ"], ["PEK", "ZHA"], ["PEK", "ZHY"], ["PEK", "ZRH"], ["PEK", "ZUH"], ["PEK", "ZYI"], ["PEN", "SIN"], ["PEN", "SUB"], ["PEN", "SZB"], ["PEN", "TPE"], ["PEN", "USM"], ["PER", "PHE"], ["PER", "RVT"], ["PER", "SIN"], ["PER", "SYD"], ["PER", "XCH"], ["PER", "ZNE"], ["PET", "POA"], ["PEU", "TGU"], ["PEW", "RUH"], ["PEW", "SHJ"], ["PFB", "POA"], ["PFB", "VCP"], ["PFO", "SKG"], ["PFO", "SOF"], ["PFO", "STN"], ["PFO", "VKO"], ["PFQ", "THR"], ["PGA", "PHX"], ["PGD", "PIA"], ["PGD", "RFD"], ["PGD", "SBN"], ["PGD", "SGF"], ["PGD", "SPI"], ["PGD", "TOL"], ["PGD", "TYS"], ["PGD", "YNG"], ["PGF", "STN"], ["PGK", "PLM"], ["PGK", "TJQ"], ["PGU", "RAS"], ["PGU", "SYZ"], ["PGU", "THR"], ["PHB", "THE"], ["PHF", "PHL"], ["PHF", "SFB"], ["PHL", "PHX"], ["PHL", "PIT"], ["PHL", "PLS"], ["PHL", "PUJ"], ["PHL", "PVD"], ["PHL", "PWM"], ["PHL", "RDU"], ["PHL", "RIC"], ["PHL", "ROA"], ["PHL", "ROC"], ["PHL", "RSW"], ["PHL", "SAN"], ["PHL", "SAT"], ["PHL", "SAV"], ["PHL", "SBY"], ["PHL", "SCE"], ["PHL", "SDF"], ["PHL", "SDQ"], ["PHL", "SEA"], ["PHL", "SFO"], ["PHL", "SJU"], ["PHL", "SLC"], ["PHL", "STL"], ["PHL", "STT"], ["PHL", "SWF"], ["PHL", "SXM"], ["PHL", "SYR"], ["PHL", "TLV"], ["PHL", "TPA"], ["PHL", "TYS"], ["PHL", "VCE"], ["PHL", "YHZ"], ["PHL", "YOW"], ["PHL", "YQB"], ["PHL", "YUL"], ["PHL", "YYZ"], ["PHL", "ZRH"], ["PHX", "PIT"], ["PHX", "PSP"], ["PHX", "PVR"], ["PHX", "RDU"], ["PHX", "RNO"], ["PHX", "SAN"], ["PHX", "SAT"], ["PHX", "SBA"], ["PHX", "SBP"], ["PHX", "SDF"], ["PHX", "SEA"], ["PHX", "SFO"], ["PHX", "SJC"], ["PHX", "SJD"], ["PHX", "SLC"], ["PHX", "SMF"], ["PHX", "SNA"], ["PHX", "SOW"], ["PHX", "STL"], ["PHX", "TPA"], ["PHX", "TUL"], ["PHX", "TUS"], ["PHX", "YEG"], ["PHX", "YUM"], ["PHX", "YVR"], ["PHX", "YYC"], ["PHX", "YYZ"], ["PHX", "ZIH"], ["PIA", "PIE"], ["PIE", "RFD"], ["PIE", "ROA"], ["PIE", "SBN"], ["PIE", "SGF"], ["PIE", "SWF"], ["PIE", "SYR"], ["PIE", "TOL"], ["PIE", "TRI"], ["PIE", "TYS"], ["PIE", "YNG"], ["PIH", "SLC"], ["PIK", "PMI"], ["PIK", "REU"], ["PIK", "RIX"], ["PIK", "TFS"], ["PIK", "WMI"], ["PIK", "WRO"], ["PIS", "SNN"], ["PIS", "STN"], ["PIT", "PUJ"], ["PIT", "RDU"], ["PIT", "RSW"], ["PIT", "SFO"], ["PIT", "STL"], ["PIT", "TPA"], ["PIT", "YYZ"], ["PIX", "TER"], ["PJA", "TLL"], ["PJM", "SJO"], ["PKA", "WNA"], ["PKC", "SVO"], ["PKC", "VVO"], ["PKE", "SYD"], ["PKN", "SOC"], ["PKN", "SRG"], ["PKN", "SUB"], ["PKU", "SIN"], ["PKU", "SZB"], ["PKY", "SUB"], ["PKZ", "REP"], ["PKZ", "SGN"], ["PKZ", "VTE"], ["PKZ", "ZVK"], ["PLM", "SIN"], ["PLM", "TKG"], ["PLQ", "RIX"], ["PLS", "POP"], ["PLS", "SDQ"], ["PLS", "SJU"], ["PLS", "STI"], ["PLS", "XSC"], ["PLS", "YUL"], ["PLS", "YYZ"], ["PLS", "ZSA"], ["PLU", "POJ"], ["PLU", "RAO"], ["PLU", "SJK"], ["PLU", "UDI"], ["PLU", "VCP"], ["PLU", "VDC"], ["PLW", "SUB"], ["PLW", "UPG"], ["PLX", "TSE"], ["PLX", "UKK"], ["PMC", "PUQ"], ["PMC", "SCL"], ["PMF", "STN"], ["PMF", "TPS"], ["PMI", "PRG"], ["PMI", "REU"], ["PMI", "RLG"], ["PMI", "RTM"], ["PMI", "RYG"], ["PMI", "SCN"], ["PMI", "SCQ"], ["PMI", "SDR"], ["PMI", "SEN"], ["PMI", "SNN"], ["PMI", "SOF"], ["PMI", "SOU"], ["PMI", "STN"], ["PMI", "STR"], ["PMI", "SVQ"], ["PMI", "SXF"], ["PMI", "SZG"], ["PMI", "TLS"], ["PMI", "TRF"], ["PMI", "TXL"], ["PMI", "VIE"], ["PMI", "VLC"], ["PMI", "VLL"], ["PMI", "WMI"], ["PMI", "XRY"], ["PMI", "ZAZ"], ["PMI", "ZQW"], ["PMI", "ZRH"], ["PMO", "PNL"], ["PMO", "PSA"], ["PMO", "STN"], ["PMO", "SVO"], ["PMO", "SVQ"], ["PMO", "SXB"], ["PMO", "TRN"], ["PMO", "TSF"], ["PMO", "TUN"], ["PMO", "TXL"], ["PMO", "VCE"], ["PMO", "VIE"], ["PMO", "VRN"], ["PMR", "WLG"], ["PMV", "POS"], ["PMV", "PZO"], ["PMV", "STD"], ["PMV", "VIG"], ["PMV", "VLN"], ["PMZ", "SJO"], ["PMZ", "XQP"], ["PNH", "PVG"], ["PNH", "REP"], ["PNH", "RGN"], ["PNH", "SGN"], ["PNH", "SIN"], ["PNH", "TPE"], ["PNH", "VTE"], ["PNI", "TKK"], ["PNL", "TPS"], ["PNL", "VCE"], ["PNP", "POM"], ["PNQ", "SHJ"], ["PNR", "POG"], ["PNS", "TPA"], ["PNZ", "REC"], ["PNZ", "SSA"], ["POA", "PTY"], ["POA", "RIA"], ["POA", "SDU"], ["POA", "SRA"], ["POA", "VCP"], ["POA", "XAP"], ["POM", "RAB"], ["POM", "SIN"], ["POM", "SYD"], ["POM", "TBG"], ["POM", "TIZ"], ["POM", "UNG"], ["POM", "VAI"], ["POM", "WBM"], ["POM", "WWK"], ["POP", "PUJ"], ["POP", "SJU"], ["POP", "YHZ"], ["POP", "YUL"], ["POP", "YYZ"], ["POS", "PTY"], ["POS", "SLU"], ["POS", "SVD"], ["POS", "TAB"], ["POS", "UVF"], ["POS", "YYZ"], ["POZ", "RYG"], ["POZ", "STN"], ["POZ", "TRF"], ["POZ", "WAW"], ["PPB", "VCP"], ["PPK", "TSE"], ["PPP", "SYD"], ["PPT", "RAR"], ["PPT", "RFP"], ["PPT", "RGI"], ["PPT", "RMT"], ["PPT", "RUR"], ["PPT", "RVV"], ["PPT", "TIH"], ["PPT", "TKX"], ["PPT", "TUB"], ["PPT", "XMH"], ["PPW", "WRY"], ["PQC", "SGN"], ["PQC", "VCA"], ["PQQ", "SYD"], ["PRG", "PSA"], ["PRG", "RHO"], ["PRG", "RIX"], ["PRG", "ROV"], ["PRG", "RTM"], ["PRG", "RTW"], ["PRG", "SOF"], ["PRG", "SPU"], ["PRG", "STN"], ["PRG", "SVO"], ["PRG", "SVX"], ["PRG", "SXB"], ["PRG", "TAS"], ["PRG", "TFS"], ["PRG", "TLV"], ["PRG", "TSF"], ["PRG", "TXL"], ["PRG", "UFA"], ["PRG", "VCE"], ["PRG", "VIE"], ["PRG", "VLC"], ["PRG", "VNO"], ["PRG", "WAW"], ["PRG", "ZRH"], ["PRI", "SEZ"], ["PRN", "SAW"], ["PRN", "STR"], ["PRN", "TXL"], ["PRN", "VIE"], ["PRN", "ZAG"], ["PRN", "ZRH"], ["PSA", "RAK"], ["PSA", "SKG"], ["PSA", "STN"], ["PSA", "SUF"], ["PSA", "SVO"], ["PSA", "SVQ"], ["PSA", "SXF"], ["PSA", "TFS"], ["PSA", "TIA"], ["PSA", "TPS"], ["PSA", "TRF"], ["PSA", "TXL"], ["PSA", "VLC"], ["PSA", "WMI"], ["PSC", "SEA"], ["PSC", "SFO"], ["PSC", "SLC"], ["PSG", "WRG"], ["PSJ", "UPG"], ["PSM", "SFB"], ["PSP", "SEA"], ["PSP", "SFO"], ["PSP", "SLC"], ["PSP", "SMF"], ["PSP", "YEG"], ["PSP", "YVR"], ["PSP", "YYC"], ["PSR", "STN"], ["PTP", "SBH"], ["PTP", "SDQ"], ["PTP", "SFG"], ["PTP", "SJU"], ["PTP", "SXM"], ["PTP", "YUL"], ["PTY", "PUJ"], ["PTY", "REC"], ["PTY", "SAL"], ["PTY", "SAP"], ["PTY", "SCL"], ["PTY", "SDQ"], ["PTY", "SJO"], ["PTY", "SJU"], ["PTY", "STI"], ["PTY", "SXM"], ["PTY", "TGU"], ["PTY", "TPA"], ["PTY", "UIO"], ["PTY", "VLN"], ["PTY", "VVI"], ["PTY", "YYZ"], ["PUJ", "SCL"], ["PUJ", "SDQ"], ["PUJ", "SJU"], ["PUJ", "STL"], ["PUJ", "SVO"], ["PUJ", "TLS"], ["PUJ", "YHZ"], ["PUJ", "YQB"], ["PUJ", "YUL"], ["PUJ", "YYZ"], ["PUJ", "ZRH"], ["PUQ", "RGL"], ["PUQ", "SCL"], ["PUS", "PVG"], ["PUS", "REP"], ["PUS", "SGN"], ["PUS", "SHE"], ["PUS", "SPN"], ["PUS", "TAO"], ["PUS", "TPE"], ["PUS", "TXN"], ["PUS", "TYN"], ["PUS", "VVO"], ["PUS", "WUH"], ["PUS", "XIY"], ["PUW", "SEA"], ["PUY", "RYG"], ["PUY", "STN"], ["PUY", "ZAD"], ["PUY", "ZAG"], ["PVD", "RSW"], ["PVD", "SAN"], ["PVD", "SLC"], ["PVD", "TPA"], ["PVG", "REP"], ["PVG", "RMQ"], ["PVG", "SDJ"], ["PVG", "SEA"], ["PVG", "SFO"], ["PVG", "SGN"], ["PVG", "SHE"], ["PVG", "SHP"], ["PVG", "SIN"], ["PVG", "SJW"], ["PVG", "SPN"], ["PVG", "SVO"], ["PVG", "SWA"], ["PVG", "SYD"], ["PVG", "SYX"], ["PVG", "SZX"], ["PVG", "TAE"], ["PVG", "TAK"], ["PVG", "TAO"], ["PVG", "TGO"], ["PVG", "TIJ"], ["PVG", "TNA"], ["PVG", "TOY"], ["PVG", "TPE"], ["PVG", "TSA"], ["PVG", "TSN"], ["PVG", "TYN"], ["PVG", "URC"], ["PVG", "WEF"], ["PVG", "WNZ"], ["PVG", "WUH"], ["PVG", "WXN"], ["PVG", "XFN"], ["PVG", "XIY"], ["PVG", "XMN"], ["PVG", "XNN"], ["PVG", "YBP"], ["PVG", "YCU"], ["PVG", "YNJ"], ["PVG", "YNT"], ["PVG", "YNY"], ["PVG", "YVR"], ["PVG", "YYZ"], ["PVG", "ZHA"], ["PVG", "ZRH"], ["PVG", "ZUH"], ["PVH", "RBR"], ["PVK", "VIE"], ["PVR", "SAN"], ["PVR", "SFO"], ["PVR", "SLC"], ["PVR", "STL"], ["PVR", "TIJ"], ["PVR", "TLC"], ["PVR", "YEG"], ["PVR", "YUL"], ["PVR", "YVR"], ["PVR", "YYC"], ["PWE", "VKO"], ["PWQ", "TSE"], ["PXU", "SGN"], ["PYJ", "YKS"], ["PZH", "UET"], ["PZO", "SNV"], ["QBC", "YAA"], ["QBC", "YVR"], ["QRO", "TIJ"], ["RAE", "RUH"], ["RAH", "RUH"], ["RAI", "SFL"], ["RAI", "SID"], ["RAI", "TMS"], ["RAI", "VXE"], ["RAK", "RTM"], ["RAK", "STN"], ["RAK", "SVQ"], ["RAK", "SXB"], ["RAK", "SXF"], ["RAK", "TLS"], ["RAK", "TUF"], ["RAK", "XCR"], ["RAK", "ZRH"], ["RAO", "SDU"], ["RAO", "SJP"], ["RAO", "UDI"], ["RAO", "VCP"], ["RAP", "SLC"], ["RAR", "SYD"], ["RAS", "SYZ"], ["RAS", "THR"], ["RBA", "STN"], ["RBQ", "TDD"], ["RDD", "SFO"], ["RDM", "SEA"], ["RDM", "SFO"], ["RDM", "SLC"], ["RDN", "SIN"], ["RDN", "SZB"], ["RDU", "SFO"], ["RDU", "SLC"], ["RDU", "STL"], ["RDU", "TPA"], ["RDU", "TTN"], ["RDU", "YYZ"], ["RDZ", "STN"], ["REC", "SSA"], ["REC", "THE"], ["REC", "VCP"], ["REG", "TRN"], ["REG", "VCE"], ["REL", "VDM"], ["REN", "SVO"], ["REP", "SGN"], ["REP", "SIN"], ["REP", "TPE"], ["REU", "STN"], ["REX", "VER"], ["RFD", "SFB"], ["RGA", "RGL"], ["RGI", "TIH"], ["RGI", "XMH"], ["RGL", "USH"], ["RGN", "SGN"], ["RGN", "SIN"], ["RGN", "SNW"], ["RGN", "THL"], ["RGN", "TPE"], ["RGN", "TVY"], ["RHO", "RTM"], ["RHO", "RYG"], ["RHO", "SKG"], ["RHO", "SMI"], ["RHO", "STN"], ["RHO", "STR"], ["RHO", "SVO"], ["RHO", "SXF"], ["RHO", "TXL"], ["RHO", "VIE"], ["RIA", "URG"], ["RIB", "TDD"], ["RIX", "RYG"], ["RIX", "SAW"], ["RIX", "STN"], ["RIX", "SVG"], ["RIX", "SVO"], ["RIX", "TAS"], ["RIX", "TBS"], ["RIX", "TFS"], ["RIX", "TKU"], ["RIX", "TLL"], ["RIX", "TLV"], ["RIX", "TRD"], ["RIX", "TRF"], ["RIX", "TXL"], ["RIX", "VCE"], ["RIX", "VIE"], ["RIX", "VKO"], ["RIX", "VNO"], ["RIX", "WAW"], ["RIX", "ZRH"], ["RIY", "SAH"], ["RIY", "SCT"], ["RIY", "SHJ"], ["RJH", "SPD"], ["RJK", "SPU"], ["RJK", "STR"], ["RJK", "ZAG"], ["RKS", "SLC"], ["RLG", "STR"], ["RLK", "XIY"], ["RMF", "VIE"], ["RMF", "ZRH"], ["RMQ", "SGN"], ["RMQ", "SZX"], ["RMQ", "TAO"], ["RMQ", "TNA"], ["RMQ", "XMN"], ["RMT", "RUR"], ["RNO", "SAN"], ["RNO", "SEA"], ["RNO", "SFO"], ["RNO", "SJC"], ["RNO", "SLC"], ["RNS", "SOU"], ["RNS", "TLS"], ["ROA", "SFB"], ["ROC", "TPA"], ["ROC", "YYZ"], ["ROP", "SPN"], ["ROR", "TPE"], ["ROR", "YAP"], ["ROT", "WLG"], ["ROV", "SHJ"], ["ROV", "SIP"], ["ROV", "SKG"], ["ROV", "SVO"], ["ROV", "SVX"], ["ROV", "TAS"], ["ROV", "TLV"], ["ROV", "VIE"], ["ROV", "VOG"], ["RPR", "VTZ"], ["RSW", "STL"], ["RSW", "TTN"], ["RSW", "YYZ"], ["RTB", "SAL"], ["RTB", "SAP"], ["RTB", "TGU"], ["RTM", "SAW"], ["RTM", "SPU"], ["RTM", "TLN"], ["RTM", "VIE"], ["RTM", "VLC"], ["RTW", "SVX"], ["RUH", "SAH"], ["RUH", "SAW"], ["RUH", "SHJ"], ["RUH", "SHW"], ["RUH", "SIN"], ["RUH", "SKT"], ["RUH", "SSH"], ["RUH", "TAI"], ["RUH", "TIF"], ["RUH", "TRV"], ["RUH", "TUI"], ["RUH", "TUU"], ["RUH", "ULH"], ["RUH", "URY"], ["RUH", "WAE"], ["RUH", "YNB"], ["RUN", "SMS"], ["RUN", "TMM"], ["RUN", "TNR"], ["RUR", "TUB"], ["RVD", "VCP"], ["RVE", "TME"], ["RVK", "TRD"], ["RVV", "TUB"], ["RYG", "RZE"], ["RYG", "SKG"], ["RYG", "STN"], ["RYG", "SXF"], ["RYG", "TLL"], ["RYG", "TSF"], ["RYG", "VNO"], ["RYG", "WMI"], ["RYG", "WRO"], ["RYG", "ZAD"], ["RZE", "STN"], ["RZE", "WAW"], ["RZR", "THR"], ["SAB", "SBH"], ["SAB", "SXM"], ["SAH", "TAI"], ["SAL", "SAP"], ["SAL", "SFO"], ["SAL", "SJO"], ["SAL", "TGU"], ["SAL", "UIO"], ["SAL", "YYZ"], ["SAN", "SAT"], ["SAN", "SDF"], ["SAN", "SEA"], ["SAN", "SFO"], ["SAN", "SJC"], ["SAN", "SJD"], ["SAN", "SLC"], ["SAN", "SMF"], ["SAN", "STL"], ["SAN", "STS"], ["SAN", "TUS"], ["SAN", "YYC"], ["SAN", "YYZ"], ["SAP", "SJO"], ["SAP", "TGU"], ["SAT", "SEA"], ["SAT", "SFO"], ["SAT", "SLC"], ["SAT", "STL"], ["SAT", "TLC"], ["SAT", "TPA"], ["SAW", "SHJ"], ["SAW", "SJJ"], ["SAW", "SKP"], ["SAW", "STN"], ["SAW", "STR"], ["SAW", "STW"], ["SAW", "SXF"], ["SAW", "TBS"], ["SAW", "TIA"], ["SAW", "TLV"], ["SAW", "TXL"], ["SAW", "TZX"], ["SAW", "VAN"], ["SAW", "VAS"], ["SAW", "VIE"], ["SAW", "ZRH"], ["SBA", "SEA"], ["SBA", "SFO"], ["SBH", "SFG"], ["SBH", "SJU"], ["SBH", "STT"], ["SBH", "SXM"], ["SBN", "SFB"], ["SBP", "SFO"], ["SBZ", "VIE"], ["SCL", "SSA"], ["SCL", "SYD"], ["SCL", "UIO"], ["SCL", "YYZ"], ["SCL", "ZAL"], ["SCL", "ZCO"], ["SCL", "ZOS"], ["SCM", "VAK"], ["SCN", "TXL"], ["SCO", "TBS"], ["SCO", "TSE"], ["SCO", "URA"], ["SCO", "VKO"], ["SCQ", "STN"], ["SCQ", "SVQ"], ["SCQ", "TFN"], ["SCQ", "TFS"], ["SCQ", "VLC"], ["SCU", "SDQ"], ["SCU", "YUL"], ["SCW", "SVO"], ["SCW", "SVX"], ["SCW", "UCT"], ["SCW", "UTS"], ["SCW", "VKT"], ["SDD", "VPE"], ["SDD", "WDH"], ["SDF", "TPA"], ["SDG", "THR"], ["SDJ", "TPE"], ["SDJ", "UKB"], ["SDK", "TWU"], ["SDN", "SOG"], ["SDQ", "SJO"], ["SDQ", "SJU"], ["SDQ", "SXM"], ["SDR", "STN"], ["SDR", "SVQ"], ["SDR", "TFS"], ["SDR", "VLC"], ["SDU", "SJK"], ["SDU", "SSA"], ["SDU", "VCP"], ["SDU", "VIX"], ["SEA", "SFO"], ["SEA", "SJC"], ["SEA", "SLC"], ["SEA", "SMF"], ["SEA", "SNA"], ["SEA", "STL"], ["SEA", "STS"], ["SEA", "TPA"], ["SEA", "TPE"], ["SEA", "TUS"], ["SEA", "YEG"], ["SEA", "YKM"], ["SEA", "YLW"], ["SEA", "YVR"], ["SEA", "YYC"], ["SEA", "YYJ"], ["SEA", "YYZ"], ["SEN", "SXF"], ["SEN", "VCE"], ["SEZ", "VKO"], ["SFA", "TIP"], ["SFA", "TUN"], ["SFB", "SGF"], ["SFB", "SPI"], ["SFB", "TOL"], ["SFB", "TRI"], ["SFB", "TUL"], ["SFB", "TYS"], ["SFB", "XNA"], ["SFB", "YNG"], ["SFJ", "UAK"], ["SFO", "SJD"], ["SFO", "SLC"], ["SFO", "SMF"], ["SFO", "SNA"], ["SFO", "STL"], ["SFO", "SYD"], ["SFO", "TPE"], ["SFO", "TUS"], ["SFO", "YEG"], ["SFO", "YUL"], ["SFO", "YVR"], ["SFO", "YYC"], ["SFO", "YYJ"], ["SFO", "YYZ"], ["SFO", "ZRH"], ["SFT", "STN"], ["SGC", "SVO"], ["SGC", "SVX"], ["SGC", "TJM"], ["SGC", "TOF"], ["SGC", "UFA"], ["SGN", "SIN"], ["SGN", "SVO"], ["SGN", "SYD"], ["SGN", "TBB"], ["SGN", "TPE"], ["SGN", "UIH"], ["SGN", "VCL"], ["SGN", "VCS"], ["SGN", "VDH"], ["SGN", "VII"], ["SGN", "VKG"], ["SGO", "TWB"], ["SGU", "SLC"], ["SHA", "SHE"], ["SHA", "SJW"], ["SHA", "SWA"], ["SHA", "SYX"], ["SHA", "SZX"], ["SHA", "TAO"], ["SHA", "TNA"], ["SHA", "TSA"], ["SHA", "TSN"], ["SHA", "TXN"], ["SHA", "TYN"], ["SHA", "URC"], ["SHA", "WNZ"], ["SHA", "WUH"], ["SHA", "WUS"], ["SHA", "XIY"], ["SHA", "XMN"], ["SHA", "XUZ"], ["SHA", "YIC"], ["SHA", "YIH"], ["SHA", "YNT"], ["SHA", "YNZ"], ["SHA", "ZUH"], ["SHA", "ZYI"], ["SHE", "SJW"], ["SHE", "SZX"], ["SHE", "TAO"], ["SHE", "TNA"], ["SHE", "TPE"], ["SHE", "TSN"], ["SHE", "TYN"], ["SHE", "WEF"], ["SHE", "WNZ"], ["SHE", "WUH"], ["SHE", "WUX"], ["SHE", "XIY"], ["SHE", "XMN"], ["SHE", "XUZ"], ["SHE", "YIW"], ["SHE", "YNT"], ["SHE", "YNZ"], ["SHE", "YVR"], ["SHH", "WAA"], ["SHJ", "SKT"], ["SHJ", "SLL"], ["SHJ", "SVX"], ["SHJ", "SYZ"], ["SHJ", "TAS"], ["SHJ", "TIF"], ["SHJ", "TRV"], ["SHJ", "TSE"], ["SHJ", "TUK"], ["SHJ", "UET"], ["SHJ", "UFA"], ["SHJ", "YNB"], ["SHP", "SJW"], ["SHP", "TAO"], ["SID", "SNE"], ["SID", "STR"], ["SID", "VXE"], ["SIN", "SOC"], ["SIN", "SRG"], ["SIN", "SUB"], ["SIN", "SWA"], ["SIN", "SYD"], ["SIN", "SZB"], ["SIN", "SZX"], ["SIN", "TAO"], ["SIN", "TAS"], ["SIN", "TGG"], ["SIN", "TPE"], ["SIN", "TRV"], ["SIN", "TRZ"], ["SIN", "TSN"], ["SIN", "UPG"], ["SIN", "USM"], ["SIN", "VTE"], ["SIN", "VTZ"], ["SIN", "WUH"], ["SIN", "WUX"], ["SIN", "XMN"], ["SIN", "ZRH"], ["SIP", "SVO"], ["SJC", "SJD"], ["SJC", "SLC"], ["SJC", "SNA"], ["SJC", "TUS"], ["SJD", "SLC"], ["SJD", "SNA"], ["SJD", "TIJ"], ["SJD", "TLC"], ["SJD", "YVR"], ["SJD", "YYC"], ["SJJ", "STR"], ["SJJ", "TXL"], ["SJJ", "VIE"], ["SJJ", "ZAG"], ["SJL", "TFF"], ["SJO", "TGU"], ["SJO", "TMU"], ["SJO", "TTQ"], ["SJO", "XQP"], ["SJO", "YYZ"], ["SJP", "VCP"], ["SJU", "SKB"], ["SJU", "STI"], ["SJU", "STT"], ["SJU", "STX"], ["SJU", "SXM"], ["SJU", "TPA"], ["SJU", "VIJ"], ["SJU", "VQS"], ["SJU", "YYZ"], ["SJW", "SYX"], ["SJW", "SZX"], ["SJW", "TAO"], ["SJW", "TPE"], ["SJW", "URC"], ["SJW", "WNZ"], ["SJW", "XIY"], ["SJW", "XMN"], ["SJW", "YNT"], ["SJW", "ZQZ"], ["SJZ", "TER"], ["SKB", "SXM"], ["SKD", "SVX"], ["SKD", "TAS"], ["SKG", "SKU"], ["SKG", "SMI"], ["SKG", "STN"], ["SKG", "STR"], ["SKG", "SVO"], ["SKG", "SXF"], ["SKG", "TXL"], ["SKG", "VIE"], ["SKG", "WMI"], ["SKK", "UNK"], ["SKN", "SVJ"], ["SKN", "TOS"], ["SKP", "SXF"], ["SKP", "TSF"], ["SKP", "VIE"], ["SKP", "ZAG"], ["SKP", "ZRH"], ["SLC", "SMF"], ["SLC", "SNA"], ["SLC", "STL"], ["SLC", "TUL"], ["SLC", "TUS"], ["SLC", "TWF"], ["SLC", "VEL"], ["SLC", "YVR"], ["SLC", "YYC"], ["SLH", "SON"], ["SLH", "TOH"], ["SLP", "TIJ"], ["SLU", "SVD"], ["SLU", "SXM"], ["SLY", "SVX"], ["SLY", "TJM"], ["SLY", "TQL"], ["SLZ", "THE"], ["SMF", "SNA"], ["SMI", "TXL"], ["SMK", "UNK"], ["SMS", "TMM"], ["SMS", "TNR"], ["SNA", "YVR"], ["SNE", "VXE"], ["SNN", "STN"], ["SNN", "SXF"], ["SNN", "TFS"], ["SNN", "WMI"], ["SNN", "WRO"], ["SNP", "STG"], ["SNU", "VRA"], ["SNU", "YHZ"], ["SNU", "YUL"], ["SNU", "YYZ"], ["SOF", "STN"], ["SOF", "SVO"], ["SOF", "SXF"], ["SOF", "TLV"], ["SOF", "TXL"], ["SOF", "VAR"], ["SOF", "VIE"], ["SOF", "VLC"], ["SOF", "WAW"], ["SOF", "ZRH"], ["SOJ", "TOS"], ["SON", "SSR"], ["SON", "VLI"], ["SON", "WLH"], ["SON", "ZGU"], ["SOQ", "UPG"], ["SPC", "TFN"], ["SPP", "VPE"], ["SPU", "STR"], ["SPU", "TLL"], ["SPU", "TXL"], ["SPU", "VIE"], ["SPU", "WAW"], ["SPU", "ZAG"], ["SPU", "ZRH"], ["SRE", "TJA"], ["SRE", "VVI"], ["SRG", "SUB"], ["SRP", "SVG"], ["SRX", "TIP"], ["SRX", "TUN"], ["SRY", "SYZ"], ["SRZ", "TDD"], ["SSA", "VCP"], ["SSA", "VDC"], ["SSA", "VIX"], ["SSH", "STN"], ["SSH", "SVO"], ["SSH", "SVX"], ["SSH", "VKO"], ["SSJ", "TRD"], ["STL", "TBN"], ["STL", "TPA"], ["STL", "TUL"], ["STL", "UIN"], ["STL", "YYZ"], ["STM", "TMT"], ["STN", "STR"], ["STN", "SUF"], ["STN", "SVQ"], ["STN", "SXB"], ["STN", "SXF"], ["STN", "SZG"], ["STN", "SZZ"], ["STN", "TFS"], ["STN", "TGD"], ["STN", "TLL"], ["STN", "TLN"], ["STN", "TMP"], ["STN", "TRF"], ["STN", "TRN"], ["STN", "TRS"], ["STN", "TSF"], ["STN", "TUF"], ["STN", "VLC"], ["STN", "VNO"], ["STN", "VST"], ["STN", "WMI"], ["STN", "WRO"], ["STN", "XRY"], ["STN", "ZAD"], ["STN", "ZAZ"], ["STR", "SUF"], ["STR", "SVO"], ["STR", "TFS"], ["STR", "TXL"], ["STR", "VCE"], ["STR", "VIE"], ["STR", "XRY"], ["STR", "ZAD"], ["STR", "ZAG"], ["STR", "ZRH"], ["STT", "STX"], ["STT", "SXM"], ["STT", "VIJ"], ["STW", "SVO"], ["STX", "SXM"], ["STX", "VQS"], ["STZ", "SXO"], ["SUB", "TPE"], ["SUB", "TRK"], ["SUB", "UPG"], ["SUF", "TRN"], ["SUF", "TSF"], ["SUF", "VCE"], ["SUF", "VIE"], ["SUF", "ZRH"], ["SUK", "YKS"], ["SUR", "WNN"], ["SUR", "YXL"], ["SUV", "SVU"], ["SUV", "SYD"], ["SUV", "TBU"], ["SUV", "TVU"], ["SUV", "VBV"], ["SVB", "TNR"], ["SVB", "WMN"], ["SVG", "SXF"], ["SVG", "SZZ"], ["SVG", "TOS"], ["SVG", "TRD"], ["SVG", "TRF"], ["SVG", "VNO"], ["SVG", "WAW"], ["SVO", "SVX"], ["SVO", "SXF"], ["SVO", "TAS"], ["SVO", "TFS"], ["SVO", "TJM"], ["SVO", "TLL"], ["SVO", "TLV"], ["SVO", "TOF"], ["SVO", "TSE"], ["SVO", "TXL"], ["SVO", "UFA"], ["SVO", "ULN"], ["SVO", "URC"], ["SVO", "UUD"], ["SVO", "UUS"], ["SVO", "VAR"], ["SVO", "VCE"], ["SVO", "VIE"], ["SVO", "VNO"], ["SVO", "VOG"], ["SVO", "VVO"], ["SVO", "WAW"], ["SVO", "YKS"], ["SVO", "YYZ"], ["SVO", "ZAG"], ["SVO", "ZRH"], ["SVP", "VPE"], ["SVQ", "TFN"], ["SVQ", "TFS"], ["SVQ", "TLS"], ["SVQ", "VLC"], ["SVU", "TVU"], ["SVX", "TAS"], ["SVX", "TJU"], ["SVX", "TLV"], ["SVX", "TSE"], ["SVX", "UFA"], ["SVX", "ULV"], ["SVX", "URJ"], ["SVX", "VKO"], ["SWA", "SYX"], ["SWA", "WUH"], ["SWA", "YIW"], ["SWA", "ZHA"], ["SWA", "ZUH"], ["SWJ", "VLI"], ["SXB", "TLS"], ["SXB", "TUN"], ["SXF", "SZG"], ["SXF", "TFS"], ["SXF", "TLV"], ["SXF", "TRD"], ["SXF", "VCE"], ["SXF", "XRY"], ["SXI", "SYZ"], ["SXM", "YYZ"], ["SYD", "TBU"], ["SYD", "TMW"], ["SYD", "TPE"], ["SYD", "TRO"], ["SYD", "TSV"], ["SYD", "TWB"], ["SYD", "VLI"], ["SYD", "WGA"], ["SYD", "WLG"], ["SYD", "YVR"], ["SYD", "ZQN"], ["SYR", "YYZ"], ["SYX", "SZX"], ["SYX", "TNA"], ["SYX", "TPE"], ["SYX", "TSN"], ["SYX", "TYN"], ["SYX", "WNZ"], ["SYX", "WUH"], ["SYX", "WUX"], ["SYX", "XIY"], ["SYX", "XMN"], ["SYX", "YBP"], ["SYX", "YCU"], ["SYX", "YIH"], ["SYX", "YTY"], ["SYX", "ZHA"], ["SYX", "ZUH"], ["SYX", "ZYI"], ["SYZ", "TBZ"], ["SYZ", "THR"], ["SYZ", "ZAH"], ["SZB", "TGG"], ["SZB", "USM"], ["SZG", "TFS"], ["SZG", "TXL"], ["SZG", "VIE"], ["SZG", "ZRH"], ["SZX", "TAO"], ["SZX", "TEN"], ["SZX", "TNA"], ["SZX", "TPE"], ["SZX", "TSN"], ["SZX", "TXN"], ["SZX", "TYN"], ["SZX", "URC"], ["SZX", "WNZ"], ["SZX", "WUH"], ["SZX", "WUX"], ["SZX", "WXN"], ["SZX", "XFN"], ["SZX", "XIY"], ["SZX", "XMN"], ["SZX", "XUZ"], ["SZX", "YBP"], ["SZX", "YCU"], ["SZX", "YIC"], ["SZX", "YIH"], ["SZX", "YNT"], ["SZX", "YTY"], ["SZX", "ZHA"], ["SZX", "ZYI"], ["SZZ", "TRF"], ["SZZ", "WAW"], ["TAH", "VLI"], ["TAK", "TPE"], ["TAM", "VER"], ["TAO", "TPE"], ["TAO", "TSN"], ["TAO", "TXN"], ["TAO", "TYN"], ["TAO", "WNZ"], ["TAO", "WUH"], ["TAO", "WUS"], ["TAO", "WUX"], ["TAO", "XIY"], ["TAO", "XMN"], ["TAO", "YCU"], ["TAO", "YNJ"], ["TAS", "TJM"], ["TAS", "TLV"], ["TAS", "TMJ"], ["TAS", "TSE"], ["TAS", "UFA"], ["TAS", "UGC"], ["TAS", "URC"], ["TAS", "VKO"], ["TAS", "VOG"], ["TBG", "UNG"], ["TBS", "TLV"], ["TBS", "URC"], ["TBS", "VIE"], ["TBS", "VKO"], ["TBS", "WAW"], ["TBW", "VKO"], ["TBZ", "THR"], ["TCG", "URC"], ["TET", "UEL"], ["TET", "VXC"], ["TFN", "VDE"], ["TFN", "VLC"], ["TFS", "TXL"], ["TFS", "VDE"], ["TFS", "VGO"], ["TFS", "VIE"], ["TFS", "VLC"], ["TFS", "VRN"], ["TFS", "ZQW"], ["TFS", "ZRH"], ["TGD", "VIE"], ["TGD", "ZRH"], ["TGH", "VLI"], ["TGO", "TNA"], ["TGZ", "TIJ"], ["THE", "VCP"], ["THR", "XBJ"], ["THR", "YES"], ["THR", "ZAH"], ["THR", "ZBR"], ["TIA", "TRN"], ["TIA", "VCE"], ["TIA", "VIE"], ["TIA", "VRN"], ["TIJ", "TPQ"], ["TIJ", "UPN"], ["TIJ", "VER"], ["TIJ", "ZCL"], ["TIJ", "ZLO"], ["TIM", "UPG"], ["TIP", "TOB"], ["TIP", "TUN"], ["TIU", "WLG"], ["TJA", "VVI"], ["TJM", "UFA"], ["TJM", "URJ"], ["TKP", "TKX"], ["TLC", "ZIH"], ["TLE", "TNR"], ["TLH", "TPA"], ["TLL", "TRD"], ["TLL", "TYF"], ["TLL", "URE"], ["TLL", "VNO"], ["TLL", "WAW"], ["TLS", "TUN"], ["TLS", "VCE"], ["TLS", "XFW"], ["TLS", "YUL"], ["TLV", "TXL"], ["TLV", "VCE"], ["TLV", "VIE"], ["TLV", "VIN"], ["TLV", "VKO"], ["TLV", "VNO"], ["TLV", "WAW"], ["TLV", "YUL"], ["TLV", "YYZ"], ["TLV", "ZRH"], ["TMM", "TNR"], ["TMM", "WMN"], ["TMM", "WMR"], ["TNA", "TPE"], ["TNA", "TYN"], ["TNA", "URC"], ["TNA", "WNZ"], ["TNA", "WUH"], ["TNA", "WUS"], ["TNA", "XIY"], ["TNA", "XMN"], ["TNA", "YNT"], ["TNC", "WAA"], ["TNR", "WMN"], ["TNW", "UIO"], ["TNW", "XMS"], ["TOB", "TUN"], ["TOE", "TUN"], ["TOH", "ZGU"], ["TOS", "TRD"], ["TOS", "VDS"], ["TOY", "TPE"], ["TPA", "TTN"], ["TPA", "YYZ"], ["TPA", "ZRH"], ["TPE", "TSN"], ["TPE", "TXN"], ["TPE", "TYN"], ["TPE", "URC"], ["TPE", "VIE"], ["TPE", "WNZ"], ["TPE", "WUH"], ["TPE", "WUX"], ["TPE", "XIY"], ["TPE", "XMN"], ["TPE", "XUZ"], ["TPE", "YNT"], ["TPE", "YNZ"], ["TPE", "YVR"], ["TPE", "YYZ"], ["TPS", "TRN"], ["TPS", "TRS"], ["TPS", "TSF"], ["TPS", "WMI"], ["TRD", "TRF"], ["TRF", "VNO"], ["TRF", "WAW"], ["TRF", "WRO"], ["TRG", "WLG"], ["TRK", "TWU"], ["TRK", "UPG"], ["TRN", "ZRH"], ["TRS", "VLC"], ["TSA", "TSN"], ["TSA", "TTT"], ["TSA", "TYN"], ["TSA", "WNZ"], ["TSA", "WUH"], ["TSA", "XMN"], ["TSE", "UKK"], ["TSE", "URA"], ["TSE", "URC"], ["TSE", "VIE"], ["TSE", "VKO"], ["TSF", "TSR"], ["TSF", "VLC"], ["TSN", "TXN"], ["TSN", "TYN"], ["TSN", "URC"], ["TSN", "UYN"], ["TSN", "WUH"], ["TSN", "XIY"], ["TSN", "XMN"], ["TSN", "XNN"], ["TSN", "YCU"], ["TSN", "YNT"], ["TSN", "ZUH"], ["TSR", "VLC"], ["TSV", "WIN"], ["TTE", "UPG"], ["TTN", "UST"], ["TUA", "UIO"], ["TUK", "UET"], ["TUN", "VCE"], ["TUN", "VIE"], ["TUN", "YUL"], ["TUN", "ZRH"], ["TUO", "WLG"], ["TXL", "UME"], ["TXL", "VCE"], ["TXL", "VIE"], ["TXL", "VKO"], ["TXL", "VNO"], ["TXL", "VRN"], ["TXL", "WAW"], ["TXL", "ZAD"], ["TXL", "ZAG"], ["TXL", "ZRH"], ["TXN", "TYN"], ["TXN", "XIY"], ["TXN", "XMN"], ["TYN", "URC"], ["TYN", "WUH"], ["TYN", "XIY"], ["TYN", "XMN"], ["TYN", "YCU"], ["UAH", "UAP"], ["UAS", "WIL"], ["UBA", "UDI"], ["UBA", "VCP"], ["UCT", "USK"], ["UCT", "VKO"], ["UDI", "VCP"], ["UGC", "VOG"], ["UIO", "XMS"], ["UKA", "WIL"], ["UKB", "YGJ"], ["ULB", "VLI"], ["ULG", "ULN"], ["ULK", "YKS"], ["ULN", "ULO"], ["ULN", "ULZ"], ["ULP", "WNR"], ["URC", "WUH"], ["URC", "XIY"], ["URC", "XNN"], ["URC", "YCU"], ["URC", "YIN"], ["URC", "YIW"], ["URS", "VKO"], ["USM", "UTP"], ["UUD", "YKS"], ["UUS", "VVO"], ["UVF", "YYZ"], ["UYN", "XIY"], ["VAI", "WWK"], ["VAR", "VIE"], ["VAW", "VDS"], ["VCA", "VCS"], ["VCE", "VIE"], ["VCE", "VKO"], ["VCE", "YUL"], ["VCE", "YYZ"], ["VCE", "ZRH"], ["VCP", "VIX"], ["VCP", "XAP"], ["VER", "VSA"], ["VFA", "WDH"], ["VIE", "VKO"], ["VIE", "VLC"], ["VIE", "VNO"], ["VIE", "VOL"], ["VIE", "WAW"], ["VIE", "YYZ"], ["VIE", "ZAG"], ["VIE", "ZRH"], ["VIE", "ZTH"], ["VII", "VTE"], ["VKO", "VNO"], ["VKO", "VOZ"], ["VKO", "YKS"], ["VKO", "YYZ"], ["VLC", "ZRH"], ["VLI", "VLS"], ["VNO", "WAW"], ["VRA", "YHZ"], ["VRA", "YUL"], ["VRA", "YYC"], ["VRA", "YYZ"], ["VTE", "XKH"], ["VTE", "ZVK"], ["VVO", "YKS"], ["WAW", "WRO"], ["WAW", "YYZ"], ["WAW", "ZAD"], ["WAW", "ZRH"], ["WDH", "WVB"], ["WIL", "WJR"], ["WLG", "WRE"], ["WLG", "WSZ"], ["WLG", "ZQN"], ["WMI", "WRO"], ["WNN", "YXL"], ["WNZ", "WUH"], ["WNZ", "XIY"], ["WNZ", "ZUH"], ["WRO", "ZRH"], ["WUA", "XIY"], ["WUH", "WUX"], ["WUH", "XFN"], ["WUH", "XIY"], ["WUH", "XMN"], ["WUH", "XNN"], ["WUH", "YCU"], ["WUH", "YNT"], ["WUH", "YNZ"], ["WUH", "YTY"], ["WUH", "ZUH"], ["WUH", "ZYI"], ["WUS", "XIY"], ["WUS", "XMN"], ["WUX", "XIY"], ["WUX", "XMN"], ["WUZ", "ZUH"], ["WXN", "XIY"], ["WXN", "XMN"], ["XBE", "YAX"], ["XBE", "YTL"], ["XBE", "YXL"], ["XFN", "XMN"], ["XGR", "YVP"], ["XIY", "XMN"], ["XIY", "XNN"], ["XIY", "YBP"], ["XIY", "YIH"], ["XIY", "YIW"], ["XIY", "YNT"], ["XIY", "YNZ"], ["XIY", "YTY"], ["XIY", "YZY"], ["XIY", "ZYI"], ["XKS", "YTL"], ["XKS", "YXL"], ["XMN", "XUZ"], ["XMN", "YIH"], ["XMN", "YIW"], ["XMN", "YNZ"], ["XMN", "YTY"], ["XMN", "ZUH"], ["XMN", "ZYI"], ["XNN", "YUS"], ["XNN", "ZHY"], ["YAA", "YVR"], ["YAB", "YFB"], ["YAB", "YRB"], ["YAC", "YXL"], ["YAC", "ZRJ"], ["YAG", "YQK"], ["YAG", "YQT"], ["YAG", "YXL"], ["YAM", "YQT"], ["YAM", "YSB"], ["YAM", "YTZ"], ["YAM", "YYZ"], ["YAT", "YPO"], ["YAT", "ZKE"], ["YAX", "YER"], ["YAX", "YTL"], ["YAX", "YXL"], ["YAY", "YBX"], ["YAY", "YYR"], ["YAY", "YYT"], ["YBC", "YQB"], ["YBC", "YUL"], ["YBC", "YWK"], ["YBC", "YYY"], ["YBG", "YHU"], ["YBG", "YQB"], ["YBG", "YUL"], ["YBG", "YWK"], ["YBG", "YZV"], ["YBK", "YCS"], ["YBK", "YRT"], ["YBK", "YUT"], ["YBK", "YXN"], ["YBL", "YQQ"], ["YBL", "YVR"], ["YBR", "YYC"], ["YBX", "YIF"], ["YBX", "YYR"], ["YCB", "YCO"], ["YCB", "YHK"], ["YCB", "YYH"], ["YCB", "YZF"], ["YCD", "YVR"], ["YCD", "YYC"], ["YCG", "YVR"], ["YCG", "YYC"], ["YCL", "YHZ"], ["YCL", "YWK"], ["YCO", "YHI"], ["YCO", "YZF"], ["YCS", "YRT"], ["YCS", "YZS"], ["YCY", "YFB"], ["YCY", "YIO"], ["YDF", "YHZ"], ["YDF", "YJT"], ["YDF", "YYR"], ["YDF", "YYT"], ["YDF", "YYZ"], ["YDP", "YNP"], ["YDP", "YYR"], ["YDQ", "YVR"], ["YDQ", "YYE"], ["YEG", "YHM"], ["YEG", "YHY"], ["YEG", "YLW"], ["YEG", "YMM"], ["YEG", "YOJ"], ["YEG", "YOP"], ["YEG", "YOW"], ["YEG", "YQQ"], ["YEG", "YQR"], ["YEG", "YQU"], ["YEG", "YSM"], ["YEG", "YUL"], ["YEG", "YVR"], ["YEG", "YWG"], ["YEG", "YXE"], ["YEG", "YXJ"], ["YEG", "YXX"], ["YEG", "YXY"], ["YEG", "YYC"], ["YEG", "YYJ"], ["YEG", "YYZ"], ["YEG", "YZF"], ["YEK", "YRT"], ["YEK", "YXN"], ["YEK", "YYQ"], ["YER", "YTL"], ["YER", "YXL"], ["YEV", "YGH"], ["YEV", "YHI"], ["YEV", "YPC"], ["YEV", "YSY"], ["YEV", "YUB"], ["YEV", "YVQ"], ["YEV", "ZFM"], ["YFA", "YMO"], ["YFA", "ZKE"], ["YFB", "YGT"], ["YFB", "YLC"], ["YFB", "YOW"], ["YFB", "YRT"], ["YFB", "YTE"], ["YFB", "YUX"], ["YFB", "YVP"], ["YFB", "YXP"], ["YFC", "YHZ"], ["YFC", "YOW"], ["YFC", "YUL"], ["YFC", "YYZ"], ["YFH", "YLH"], ["YFH", "YOG"], ["YFH", "YQT"], ["YFJ", "YZF"], ["YFO", "YQD"], ["YFO", "YTH"], ["YFO", "YWG"], ["YFS", "YZF"], ["YGH", "YVQ"], ["YGK", "YYZ"], ["YGL", "YGW"], ["YGL", "YPX"], ["YGL", "YUL"], ["YGP", "YGR"], ["YGP", "YQB"], ["YGR", "YQB"], ["YGR", "YVB"], ["YGT", "YIO"], ["YGT", "YUX"], ["YGV", "YPN"], ["YGV", "YZV"], ["YGW", "YKU"], ["YGW", "YPH"], ["YGW", "YSK"], ["YGW", "YUD"], ["YGW", "YUL"], ["YGW", "YUY"], ["YGW", "YVP"], ["YGX", "YTH"], ["YGX", "YWG"], ["YGZ", "YRB"], ["YHD", "YQK"], ["YHD", "YQT"], ["YHD", "YRL"], ["YHD", "YXL"], ["YHI", "YSY"], ["YHK", "YYH"], ["YHK", "YZF"], ["YHM", "YHZ"], ["YHM", "YQM"], ["YHM", "YYC"], ["YHO", "YMN"], ["YHO", "YNP"], ["YHO", "YSO"], ["YHP", "YNO"], ["YHP", "YPM"], ["YHP", "YRL"], ["YHR", "YIF"], ["YHR", "YNA"], ["YHR", "ZGS"], ["YHR", "ZTB"], ["YHU", "YQB"], ["YHU", "YVO"], ["YHU", "YZV"], ["YHY", "YSM"], ["YHY", "YZF"], ["YHZ", "YOW"], ["YHZ", "YQM"], ["YHZ", "YQX"], ["YHZ", "YQY"], ["YHZ", "YSJ"], ["YHZ", "YUL"], ["YHZ", "YYC"], ["YHZ", "YYG"], ["YHZ", "YYR"], ["YHZ", "YYT"], ["YHZ", "YYZ"], ["YIF", "ZGS"], ["YIF", "ZLT"], ["YIK", "YZG"], ["YIW", "ZUH"], ["YJT", "YYT"], ["YKA", "YVR"], ["YKA", "YXS"], ["YKA", "YYC"], ["YKF", "YYC"], ["YKG", "YPJ"], ["YKG", "YQC"], ["YKG", "YVP"], ["YKL", "YQB"], ["YKL", "YVP"], ["YKL", "YWK"], ["YKL", "YZV"], ["YKQ", "YKU"], ["YKQ", "YMO"], ["YKQ", "YMT"], ["YKQ", "YNS"], ["YKQ", "YVO"], ["YKQ", "ZEM"], ["YKU", "YNC"], ["YKU", "YVO"], ["YLE", "YZF"], ["YLH", "YWP"], ["YLL", "YYC"], ["YLW", "YQF"], ["YLW", "YVR"], ["YLW", "YXC"], ["YLW", "YXS"], ["YLW", "YXY"], ["YLW", "YYC"], ["YLW", "YYJ"], ["YLW", "YYZ"], ["YMM", "YPY"], ["YMM", "YQF"], ["YMM", "YVR"], ["YMM", "YYC"], ["YMM", "YYZ"], ["YMN", "YRG"], ["YMN", "YSO"], ["YMO", "YTS"], ["YMT", "YNS"], ["YMT", "YUL"], ["YNA", "YZV"], ["YNA", "ZGS"], ["YNA", "ZKG"], ["YNC", "ZEM"], ["YNO", "YPM"], ["YNO", "YRL"], ["YOJ", "YOP"], ["YOW", "YQB"], ["YOW", "YQM"], ["YOW", "YTZ"], ["YOW", "YUL"], ["YOW", "YVR"], ["YOW", "YWG"], ["YOW", "YXU"], ["YOW", "YYC"], ["YOW", "YYT"], ["YOW", "YYZ"], ["YOW", "YZF"], ["YPH", "YPX"], ["YPH", "YUD"], ["YPH", "YVP"], ["YPJ", "YTQ"], ["YPJ", "YVP"], ["YPL", "YQT"], ["YPL", "YWP"], ["YPM", "YRL"], ["YPM", "YVZ"], ["YPM", "YXL"], ["YPM", "ZSJ"], ["YPN", "YZV"], ["YPR", "YVR"], ["YPW", "YVR"], ["YPX", "YVP"], ["YPY", "YSM"], ["YQB", "YTZ"], ["YQB", "YUL"], ["YQB", "YVB"], ["YQB", "YWK"], ["YQB", "YYY"], ["YQB", "YYZ"], ["YQB", "YZV"], ["YQC", "YWB"], ["YQD", "YTH"], ["YQD", "YWG"], ["YQF", "YYC"], ["YQG", "YTZ"], ["YQG", "YYC"], ["YQG", "YYZ"], ["YQK", "YWG"], ["YQL", "YYC"], ["YQM", "YUL"], ["YQM", "YYZ"], ["YQQ", "YVR"], ["YQQ", "YYC"], ["YQR", "YVR"], ["YQR", "YWG"], ["YQR", "YYC"], ["YQR", "YYZ"], ["YQT", "YSB"], ["YQT", "YTS"], ["YQT", "YTZ"], ["YQT", "YWG"], ["YQT", "YWP"], ["YQT", "YXL"], ["YQT", "YYU"], ["YQT", "YYZ"], ["YQU", "YYC"], ["YQX", "YYR"], ["YQX", "YYT"], ["YQY", "YYZ"], ["YQZ", "YVR"], ["YQZ", "YWL"], ["YRA", "YZF"], ["YRG", "YYR"], ["YRL", "YVZ"], ["YRL", "YWG"], ["YRL", "YXL"], ["YRL", "ZSJ"], ["YRT", "YTH"], ["YRT", "YUT"], ["YRT", "YWG"], ["YRT", "YXN"], ["YRT", "YYQ"], ["YRT", "YZF"], ["YRT", "YZS"], ["YSB", "YTS"], ["YSB", "YTZ"], ["YSB", "YYB"], ["YSB", "YYZ"], ["YSG", "YZF"], ["YSJ", "YUL"], ["YSJ", "YYZ"], ["YSK", "YUD"], ["YSK", "YWG"], ["YSM", "YZF"], ["YSO", "YYR"], ["YTE", "YZS"], ["YTH", "YWG"], ["YTH", "YYQ"], ["YTL", "YXL"], ["YTQ", "YVP"], ["YTS", "YTZ"], ["YTS", "YYU"], ["YTS", "YYZ"], ["YTZ", "YUL"], ["YUL", "YUY"], ["YUL", "YVO"], ["YUL", "YVP"], ["YUL", "YVR"], ["YUL", "YWG"], ["YUL", "YWK"], ["YUL", "YYC"], ["YUL", "YYG"], ["YUL", "YYT"], ["YUL", "YYY"], ["YUL", "YYZ"], ["YUL", "YZV"], ["YUL", "ZBF"], ["YUL", "ZRH"], ["YUL", "ZSA"], ["YUT", "YZS"], ["YUY", "YVO"], ["YVB", "YWK"], ["YVB", "YYY"], ["YVB", "ZBF"], ["YVM", "YXP"], ["YVQ", "YZF"], ["YVQ", "ZFN"], ["YVR", "YWG"], ["YVR", "YWL"], ["YVR", "YXC"], ["YVR", "YXE"], ["YVR", "YXJ"], ["YVR", "YXS"], ["YVR", "YXT"], ["YVR", "YXY"], ["YVR", "YYC"], ["YVR", "YYD"], ["YVR", "YYF"], ["YVR", "YYJ"], ["YVR", "YYZ"], ["YVR", "YZP"], ["YVR", "YZT"], ["YVR", "YZZ"], ["YVR", "ZMT"], ["YVZ", "ZSJ"], ["YWB", "YZG"], ["YWG", "YXE"], ["YWG", "YXU"], ["YWG", "YYC"], ["YWG", "YYQ"], ["YWG", "YYZ"], ["YWJ", "YZF"], ["YWJ", "ZFN"], ["YWK", "YYR"], ["YWK", "YYY"], ["YWK", "YZV"], ["YWK", "ZUM"], ["YXC", "YYC"], ["YXE", "YYC"], ["YXE", "YYZ"], ["YXH", "YYC"], ["YXJ", "YXS"], ["YXJ", "YYC"], ["YXJ", "YYE"], ["YXL", "ZPB"], ["YXL", "ZRJ"], ["YXL", "ZSJ"], ["YXS", "YXT"], ["YXS", "YYC"], ["YXS", "YYD"], ["YXS", "YYE"], ["YXT", "YYD"], ["YXU", "YYC"], ["YXU", "YYZ"], ["YXX", "YYC"], ["YXY", "YYC"], ["YXY", "YZF"], ["YYB", "YYZ"], ["YYC", "YYJ"], ["YYC", "YYZ"], ["YYC", "YZF"], ["YYG", "YYZ"], ["YYH", "YZF"], ["YYJ", "YYZ"], ["YYR", "YYT"], ["YYR", "ZUM"], ["YYT", "YYZ"], ["YYY", "YZV"], ["YYZ", "YZR"], ["YYZ", "ZRH"], ["YZV", "ZGS"], ["ZAD", "ZAG"], ["ZAG", "ZRH"], ["ZAH", "ZBR"], ["ZAL", "ZOS"], ["ZGS", "ZKG"], ["ZLT", "ZTB"]];
