/**
 * City data for Shin World Clock
 * Design: Observatory / Planetarium aesthetic
 * Comprehensive database of 50+ world cities with timezone, stats, news, and challenges
 * Users can search and select cities freely
 */

export interface CityInfo {
  id: string;
  name: string;
  country: string;
  timezone: string;
  utcOffset: string;
  lat: number;
  lng: number;
  area: string;
  population: string;
  laborForce: string;
  challenge: string;
  news: string[];
  accentColor: string;
  flag: string;
  /** Search keywords (aliases, abbreviations) */
  searchKeys: string[];
}

/** Accent color palette — cycles through for variety */
const ACCENT_COLORS = [
  "oklch(0.65 0.20 15)",   // warm red
  "oklch(0.65 0.18 250)",  // blue
  "oklch(0.60 0.15 145)",  // green
  "oklch(0.65 0.18 300)",  // purple
  "oklch(0.65 0.15 185)",  // teal
  "oklch(0.70 0.16 55)",   // amber
  "oklch(0.62 0.18 340)",  // pink
  "oklch(0.68 0.14 220)",  // sky blue
  "oklch(0.60 0.16 120)",  // emerald
  "oklch(0.72 0.15 80)",   // gold
  "oklch(0.58 0.18 270)",  // indigo
  "oklch(0.66 0.14 160)",  // cyan
];

export function getAccentColor(index: number): string {
  return ACCENT_COLORS[index % ACCENT_COLORS.length];
}

export const allCities: CityInfo[] = [
  // ===== ASIA =====
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    timezone: "Asia/Tokyo",
    utcOffset: "UTC+9",
    lat: 35.6762,
    lng: 139.6503,
    area: "2,194",
    population: "14.04M",
    laborForce: "~8.1M",
    challenge: "Aging population and earthquake preparedness",
    news: [
      "Tokyo's birth rate hits record low, prompting new policy measures",
      "Major disaster infrastructure investment in FY2025 budget",
      "Urban redevelopment accelerates in Shinagawa and Shibuya districts"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇯🇵",
    searchKeys: ["tokyo", "japan", "jp"]
  },
  {
    id: "osaka",
    name: "Osaka",
    country: "Japan",
    timezone: "Asia/Tokyo",
    utcOffset: "UTC+9",
    lat: 34.6937,
    lng: 135.5023,
    area: "225",
    population: "2.75M",
    laborForce: "~1.5M",
    challenge: "Post-Expo economic sustainability and earthquake risk",
    news: [
      "Expo 2025 visitor numbers on track to exceed targets",
      "Umekita Phase 2 fully opens as new urban hub",
      "Inbound tourism surge creates hotel shortage"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇯🇵",
    searchKeys: ["osaka", "japan"]
  },
  {
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    timezone: "Asia/Seoul",
    utcOffset: "UTC+9",
    lat: 37.5665,
    lng: 126.9780,
    area: "605",
    population: "9.5M",
    laborForce: "~5.3M",
    challenge: "Soaring housing prices and severe population decline",
    news: [
      "Seoul's fertility rate drops to 0.55, world's lowest",
      "Major semiconductor investment plan announced",
      "K-Culture's global influence continues to expand"
    ],
    accentColor: "oklch(0.65 0.18 250)",
    flag: "🇰🇷",
    searchKeys: ["seoul", "korea", "south korea"]
  },
  {
    id: "beijing",
    name: "Beijing",
    country: "China",
    timezone: "Asia/Shanghai",
    utcOffset: "UTC+8",
    lat: 39.9042,
    lng: 116.4074,
    area: "16,411",
    population: "21.89M",
    laborForce: "~12M",
    challenge: "Air pollution and real estate market downturn",
    news: [
      "Beijing GDP surpasses 5 trillion yuan, sustaining growth",
      "Heavy investment in AI industry accelerates tech hub status",
      "Winter Olympics venues repurposed for tourism promotion"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇨🇳",
    searchKeys: ["beijing", "china", "peking"]
  },
  {
    id: "shanghai",
    name: "Shanghai",
    country: "China",
    timezone: "Asia/Shanghai",
    utcOffset: "UTC+8",
    lat: 31.2304,
    lng: 121.4737,
    area: "6,341",
    population: "24.89M",
    laborForce: "~14M",
    challenge: "Overcrowding and environmental pollution",
    news: [
      "Shanghai Free Trade Zone expansion attracts foreign investment",
      "EV industry booms, becoming world's largest production hub",
      "Pudong redevelopment strengthens international finance center"
    ],
    accentColor: "oklch(0.62 0.18 340)",
    flag: "🇨🇳",
    searchKeys: ["shanghai", "china"]
  },
  {
    id: "hongkong",
    name: "Hong Kong",
    country: "China (SAR)",
    timezone: "Asia/Hong_Kong",
    utcOffset: "UTC+8",
    lat: 22.3193,
    lng: 114.1694,
    area: "1,114",
    population: "7.5M",
    laborForce: "~3.9M",
    challenge: "Declining political autonomy and talent exodus",
    news: [
      "Hong Kong financial markets recover, IPO numbers rise",
      "Greater Bay Area initiative strengthens Shenzhen ties",
      "Tourism recovery reaches pre-COVID levels"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇭🇰",
    searchKeys: ["hong kong", "hongkong", "hk"]
  },
  {
    id: "taipei",
    name: "Taipei",
    country: "Taiwan",
    timezone: "Asia/Taipei",
    utcOffset: "UTC+8",
    lat: 25.0330,
    lng: 121.5654,
    area: "272",
    population: "2.64M",
    laborForce: "~1.4M",
    challenge: "Earthquake risk and cross-strait tensions",
    news: [
      "Taiwan's semiconductor industry expands global market share",
      "New Taipei Metro line opens, improving transit access",
      "Accelerating transition to renewable energy"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇹🇼",
    searchKeys: ["taipei", "taiwan"]
  },
  {
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    timezone: "Asia/Singapore",
    utcOffset: "UTC+8",
    lat: 1.3521,
    lng: 103.8198,
    area: "734",
    population: "5.64M",
    laborForce: "~3.7M",
    challenge: "Limited land area and dependence on foreign labor",
    news: [
      "Singapore maintains top 5 in global city rankings",
      "Strengthening position as green finance hub",
      "Major expansion of AI and digital economy investments"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇸🇬",
    searchKeys: ["singapore", "sg"]
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    timezone: "Asia/Bangkok",
    utcOffset: "UTC+7",
    lat: 13.7563,
    lng: 100.5018,
    area: "1,569",
    population: "10.57M",
    laborForce: "~5.8M",
    challenge: "Flood risk and severe traffic congestion",
    news: [
      "Bangkok tourism fully recovers, hitting record visitor numbers",
      "BTS and MRT extensions expand urban transit network",
      "Rising global popularity as a digital nomad destination"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇹🇭",
    searchKeys: ["bangkok", "thailand"]
  },
  {
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    timezone: "Asia/Kolkata",
    utcOffset: "UTC+5:30",
    lat: 19.0760,
    lng: 72.8777,
    area: "603",
    population: "20.94M",
    laborForce: "~9M",
    challenge: "Slum conditions and severe air pollution",
    news: [
      "Mumbai financial markets surge with rising foreign investment",
      "New metro lines improve transportation infrastructure",
      "Bollywood expands international influence"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇮🇳",
    searchKeys: ["mumbai", "india", "bombay"]
  },
  {
    id: "delhi",
    name: "Delhi",
    country: "India",
    timezone: "Asia/Kolkata",
    utcOffset: "UTC+5:30",
    lat: 28.7041,
    lng: 77.1025,
    area: "1,484",
    population: "32.9M",
    laborForce: "~15M",
    challenge: "World's worst air pollution and water scarcity",
    news: [
      "Delhi deploys electric buses en masse to combat air pollution",
      "India's IT industry growth drives Delhi economy",
      "New urban plan expands green spaces across the city"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇮🇳",
    searchKeys: ["delhi", "new delhi", "india"]
  },
  {
    id: "bangalore",
    name: "Bangalore",
    country: "India",
    timezone: "Asia/Kolkata",
    utcOffset: "UTC+5:30",
    lat: 12.9716,
    lng: 77.5946,
    area: "741",
    population: "13.2M",
    laborForce: "~6.5M",
    challenge: "Water crisis and rapid unplanned urbanization",
    news: [
      "Bangalore cements its status as India's Silicon Valley with record startup funding",
      "Metro Phase 2 expansion aims to ease chronic traffic congestion",
      "Tech giants expand campuses as AI talent demand surges"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇮🇳",
    searchKeys: ["bangalore", "bengaluru", "india", "silicon valley of india"]
  },
  {
    id: "jakarta",
    name: "Jakarta",
    country: "Indonesia",
    timezone: "Asia/Jakarta",
    utcOffset: "UTC+7",
    lat: -6.2088,
    lng: 106.8456,
    area: "662",
    population: "42M",
    laborForce: "~20M",
    challenge: "Land subsidence and capital relocation delays",
    news: [
      "Jakarta named world's most populous city (UN report)",
      "New capital Nusantara relocation plan progresses",
      "Digital economy boom positions city as Southeast Asian hub"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇮🇩",
    searchKeys: ["jakarta", "indonesia"]
  },
  // ===== MIDDLE EAST =====
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    timezone: "Asia/Dubai",
    utcOffset: "UTC+4",
    lat: 25.2048,
    lng: 55.2708,
    area: "4,114",
    population: "3.67M",
    laborForce: "~2.5M",
    challenge: "Dependence on foreign labor and extreme heat",
    news: [
      "Dubai jumps to 4th in Global City Power Index",
      "Ultra-luxury real estate market booms with record mega-deals",
      "AI and smart city initiative accelerates Middle East tech hub status"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇦🇪",
    searchKeys: ["dubai", "uae", "united arab emirates"]
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    timezone: "Europe/Istanbul",
    utcOffset: "UTC+3",
    lat: 41.0082,
    lng: 28.9784,
    area: "5,461",
    population: "15.84M",
    laborForce: "~8M",
    challenge: "Earthquake risk and high inflation",
    news: [
      "Istanbul enters top 5 most-visited cities worldwide",
      "New Istanbul Airport sees rapid passenger growth",
      "Historic building restoration projects underway"
    ],
    accentColor: "oklch(0.62 0.18 340)",
    flag: "🇹🇷",
    searchKeys: ["istanbul", "turkey", "turkiye"]
  },
  // ===== EUROPE =====
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    timezone: "Europe/London",
    utcOffset: "UTC+0",
    lat: 51.5074,
    lng: -0.1278,
    area: "1,572",
    population: "9.61M",
    laborForce: "~5.2M",
    challenge: "Post-Brexit economic adjustment and housing shortage",
    news: [
      "London maintains top position in global city rankings",
      "Thames-side green infrastructure development ramps up",
      "Fintech sector records Europe's largest investment volume"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇬🇧",
    searchKeys: ["london", "uk", "england", "united kingdom"]
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    timezone: "Europe/Paris",
    utcOffset: "UTC+1",
    lat: 48.8566,
    lng: 2.3522,
    area: "105",
    population: "2.15M",
    laborForce: "~1.2M",
    challenge: "Air pollution and chronic traffic congestion",
    news: [
      "Olympic legacy venues open to public, boosting sports culture",
      "15-minute city concept drives major urban transformation",
      "Foreign corporate investment remains strong despite political uncertainty"
    ],
    accentColor: "oklch(0.65 0.18 300)",
    flag: "🇫🇷",
    searchKeys: ["paris", "france"]
  },
  {
    id: "berlin",
    name: "Berlin",
    country: "Germany",
    timezone: "Europe/Berlin",
    utcOffset: "UTC+1",
    lat: 52.5200,
    lng: 13.4050,
    area: "892",
    population: "3.76M",
    laborForce: "~2M",
    challenge: "Housing shortage and energy transition challenges",
    news: [
      "Berlin's startup ecosystem ranks among Europe's top 3",
      "Renewable energy share surpasses 50%",
      "Culture and arts industry grows as economic pillar"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇩🇪",
    searchKeys: ["berlin", "germany"]
  },
  {
    id: "madrid",
    name: "Madrid",
    country: "Spain",
    timezone: "Europe/Madrid",
    utcOffset: "UTC+1",
    lat: 40.4168,
    lng: -3.7038,
    area: "604",
    population: "3.34M",
    laborForce: "~1.8M",
    challenge: "High youth unemployment and water scarcity",
    news: [
      "Madrid gains attention as European tech investment destination",
      "Redevelopment projects modernize the city",
      "Tourism industry records highest-ever revenue"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇪🇸",
    searchKeys: ["madrid", "spain"]
  },
  {
    id: "rome",
    name: "Rome",
    country: "Italy",
    timezone: "Europe/Rome",
    utcOffset: "UTC+1",
    lat: 41.9028,
    lng: 12.4964,
    area: "1,285",
    population: "2.87M",
    laborForce: "~1.4M",
    challenge: "Aging infrastructure and fiscal deficit",
    news: [
      "Rome sees major pilgrim increase during 2025 Jubilee Year",
      "Colosseum pedestrian zone expansion plan progresses",
      "Italian fashion industry accelerates digital transformation"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇮🇹",
    searchKeys: ["rome", "italy", "roma"]
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    timezone: "Europe/Amsterdam",
    utcOffset: "UTC+1",
    lat: 52.3676,
    lng: 4.9041,
    area: "219",
    population: "920K",
    laborForce: "~500K",
    challenge: "Soaring housing prices and overtourism",
    news: [
      "Amsterdam leads the world in cycling infrastructure",
      "Tourist tax raised to combat overtourism",
      "Maintains top position in sustainable city rankings"
    ],
    accentColor: "oklch(0.65 0.18 250)",
    flag: "🇳🇱",
    searchKeys: ["amsterdam", "netherlands", "holland"]
  },
  {
    id: "moscow",
    name: "Moscow",
    country: "Russia",
    timezone: "Europe/Moscow",
    utcOffset: "UTC+3",
    lat: 55.7558,
    lng: 37.6173,
    area: "2,562",
    population: "12.62M",
    laborForce: "~7M",
    challenge: "International isolation and economic sanctions",
    news: [
      "Moscow urban development projects continue",
      "Russian IT talent exodus accelerates",
      "Metro network expansion improves transit access"
    ],
    accentColor: "oklch(0.62 0.18 340)",
    flag: "🇷🇺",
    searchKeys: ["moscow", "russia"]
  },
  {
    id: "zurich",
    name: "Zurich",
    country: "Switzerland",
    timezone: "Europe/Zurich",
    utcOffset: "UTC+1",
    lat: 47.3769,
    lng: 8.5417,
    area: "88",
    population: "430K",
    laborForce: "~250K",
    challenge: "Extremely high cost of living and housing shortage",
    news: [
      "Zurich ranks in world's top 3 most livable cities",
      "Fintech and crypto industry continues to grow",
      "Sets international standard for sustainable urban development"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇨🇭",
    searchKeys: ["zurich", "switzerland"]
  },
  {
    id: "stockholm",
    name: "Stockholm",
    country: "Sweden",
    timezone: "Europe/Stockholm",
    utcOffset: "UTC+1",
    lat: 59.3293,
    lng: 18.0686,
    area: "188",
    population: "980K",
    laborForce: "~550K",
    challenge: "Immigrant integration and winter daylight scarcity",
    news: [
      "Stockholm ranks 2nd globally for unicorn production rate",
      "On track to meet carbon neutrality goals",
      "Nordic design's international influence continues to grow"
    ],
    accentColor: "oklch(0.68 0.14 220)",
    flag: "🇸🇪",
    searchKeys: ["stockholm", "sweden"]
  },
  // ===== NORTH AMERICA =====
  {
    id: "newyork",
    name: "New York",
    country: "United States",
    timezone: "America/New_York",
    utcOffset: "UTC-5",
    lat: 40.7128,
    lng: -74.0060,
    area: "783",
    population: "8.41M",
    laborForce: "~4.3M",
    challenge: "Soaring housing costs and homelessness crisis",
    news: [
      "Manhattan office return rate exceeds 70%, signaling economic revival",
      "Major subway modernization plan announced",
      "AI industry cluster grows, tech hiring surges"
    ],
    accentColor: "oklch(0.65 0.18 250)",
    flag: "🇺🇸",
    searchKeys: ["new york", "newyork", "nyc", "usa"]
  },
  {
    id: "losangeles",
    name: "Los Angeles",
    country: "United States",
    timezone: "America/Los_Angeles",
    utcOffset: "UTC-8",
    lat: 34.0522,
    lng: -118.2437,
    area: "1,302",
    population: "3.97M",
    laborForce: "~2.1M",
    challenge: "Wildfire risk, water scarcity, and homelessness",
    news: [
      "LA wildfire damage expands, recovery plans drafted",
      "Infrastructure upgrades accelerate ahead of 2028 Olympics",
      "Entertainment industry embraces AI technology"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇺🇸",
    searchKeys: ["los angeles", "losangeles", "la", "usa"]
  },
  {
    id: "seattle",
    name: "Seattle",
    country: "United States",
    timezone: "America/Los_Angeles",
    utcOffset: "UTC-8",
    lat: 47.6062,
    lng: -122.3321,
    area: "369",
    population: "750K",
    laborForce: "~450K",
    challenge: "Surging housing prices and homelessness",
    news: [
      "Amazon and Microsoft HQs drive continued tech hub growth",
      "Seattle housing prices among highest in the nation",
      "Green energy policy targets carbon neutrality by 2030"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇺🇸",
    searchKeys: ["seattle", "washington state", "usa"]
  },
  {
    id: "phoenix",
    name: "Phoenix",
    country: "United States",
    timezone: "America/Phoenix",
    utcOffset: "UTC-7",
    lat: 33.4484,
    lng: -112.0740,
    area: "1,341",
    population: "1.73M",
    laborForce: "~900K",
    challenge: "Extreme heat and water resource depletion risk",
    news: [
      "Phoenix population growth rate among highest in the US",
      "TSMC new fab begins operations after successful recruitment",
      "Large-scale urban greening project launched to combat heat"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇺🇸",
    searchKeys: ["phoenix", "arizona", "usa"]
  },
  {
    id: "chicago",
    name: "Chicago",
    country: "United States",
    timezone: "America/Chicago",
    utcOffset: "UTC-6",
    lat: 41.8781,
    lng: -87.6298,
    area: "606",
    population: "2.69M",
    laborForce: "~1.4M",
    challenge: "Gun violence and population decline",
    news: [
      "Chicago architecture tours gain global tourism recognition",
      "Green infrastructure investment strengthens sustainability",
      "Maintains position as financial and commodities trading center"
    ],
    accentColor: "oklch(0.68 0.14 220)",
    flag: "🇺🇸",
    searchKeys: ["chicago", "illinois", "usa"]
  },
  {
    id: "sanfrancisco",
    name: "San Francisco",
    country: "United States",
    timezone: "America/Los_Angeles",
    utcOffset: "UTC-8",
    lat: 37.7749,
    lng: -122.4194,
    area: "121",
    population: "870K",
    laborForce: "~500K",
    challenge: "High cost of living and tech company exodus",
    news: [
      "AI industry epicenter attracts global investment",
      "Downtown revitalization plan tackles rising vacancy rates",
      "Autonomous taxi services expand commercial operations"
    ],
    accentColor: "oklch(0.65 0.18 300)",
    flag: "🇺🇸",
    searchKeys: ["san francisco", "sanfrancisco", "sf", "silicon valley", "usa"]
  },
  {
    id: "toronto",
    name: "Toronto",
    country: "Canada",
    timezone: "America/Toronto",
    utcOffset: "UTC-5",
    lat: 43.6532,
    lng: -79.3832,
    area: "630",
    population: "2.93M",
    laborForce: "~1.6M",
    challenge: "Housing affordability crisis and immigration capacity",
    news: [
      "Toronto's multicultural model gains global recognition",
      "AI research hub strengthens university-industry partnerships",
      "Housing supply policy revised amid market correction"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇨🇦",
    searchKeys: ["toronto", "canada"]
  },
  {
    id: "vancouver",
    name: "Vancouver",
    country: "Canada",
    timezone: "America/Vancouver",
    utcOffset: "UTC-8",
    lat: 49.2827,
    lng: -123.1207,
    area: "115",
    population: "660K",
    laborForce: "~360K",
    challenge: "World-class housing costs and opioid crisis",
    news: [
      "Vancouver ranks in world's top 5 most livable cities",
      "Film and VFX industry grows as 'Hollywood North'",
      "Climate action plan sets 2030 green targets"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇨🇦",
    searchKeys: ["vancouver", "canada"]
  },
  {
    id: "mexicocity",
    name: "Mexico City",
    country: "Mexico",
    timezone: "America/Mexico_City",
    utcOffset: "UTC-6",
    lat: 19.4326,
    lng: -99.1332,
    area: "1,485",
    population: "21.81M",
    laborForce: "~10M",
    challenge: "Air pollution, water scarcity, and public safety",
    news: [
      "Mexico City surges in popularity as digital nomad destination",
      "Nearshoring effect drives manufacturing investment boom",
      "Historic center restoration project underway"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇲🇽",
    searchKeys: ["mexico city", "mexicocity", "cdmx", "mexico"]
  },
  // ===== SOUTH AMERICA =====
  {
    id: "saopaulo",
    name: "São Paulo",
    country: "Brazil",
    timezone: "America/Sao_Paulo",
    utcOffset: "UTC-3",
    lat: -23.5505,
    lng: -46.6333,
    area: "1,521",
    population: "12.33M",
    laborForce: "~6.5M",
    challenge: "Public safety concerns and economic inequality",
    news: [
      "São Paulo fintech industry grows to largest in South America",
      "Metro expansion plan progresses to improve urban transit",
      "International recognition rises as culture and food capital"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇧🇷",
    searchKeys: ["sao paulo", "saopaulo", "brazil"]
  },
  {
    id: "buenosaires",
    name: "Buenos Aires",
    country: "Argentina",
    timezone: "America/Argentina/Buenos_Aires",
    utcOffset: "UTC-3",
    lat: -34.6037,
    lng: -58.3816,
    area: "203",
    population: "3.06M",
    laborForce: "~1.6M",
    challenge: "Hyperinflation and economic instability",
    news: [
      "Argentina's economic reforms progress, inflation trending down",
      "Buenos Aires tango culture recognized as UNESCO heritage",
      "Tech industry growth improves youth employment"
    ],
    accentColor: "oklch(0.68 0.14 220)",
    flag: "🇦🇷",
    searchKeys: ["buenos aires", "buenosaires", "argentina"]
  },
  // ===== OCEANIA =====
  {
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    timezone: "Australia/Sydney",
    utcOffset: "UTC+11",
    lat: -33.8688,
    lng: 151.2093,
    area: "12,368",
    population: "5.64M",
    laborForce: "~2.9M",
    challenge: "Bushfire risk and water resource security",
    news: [
      "Sydney ranks in world's top 10 best cities",
      "Renewable energy transition accelerates with solar boom",
      "Overtourism measures introduce visitor dispersal strategies"
    ],
    accentColor: "oklch(0.65 0.15 185)",
    flag: "🇦🇺",
    searchKeys: ["sydney", "australia"]
  },
  {
    id: "melbourne",
    name: "Melbourne",
    country: "Australia",
    timezone: "Australia/Melbourne",
    utcOffset: "UTC+11",
    lat: -37.8136,
    lng: 144.9631,
    area: "9,993",
    population: "5.16M",
    laborForce: "~2.7M",
    challenge: "Urban sprawl and transit infrastructure gaps",
    news: [
      "Melbourne re-elected as world's most livable city",
      "Art and café culture drives tourism appeal",
      "Major suburban rail network expansion approved"
    ],
    accentColor: "oklch(0.58 0.18 270)",
    flag: "🇦🇺",
    searchKeys: ["melbourne", "australia"]
  },
  {
    id: "auckland",
    name: "Auckland",
    country: "New Zealand",
    timezone: "Pacific/Auckland",
    utcOffset: "UTC+13",
    lat: -36.8485,
    lng: 174.7633,
    area: "1,086",
    population: "1.71M",
    laborForce: "~900K",
    challenge: "Housing affordability and traffic congestion",
    news: [
      "Auckland maintains top quality-of-life global ranking",
      "Tech industry growth develops startup ecosystem",
      "Coastal disaster resilience strengthened for climate change"
    ],
    accentColor: "oklch(0.66 0.14 160)",
    flag: "🇳🇿",
    searchKeys: ["auckland", "new zealand", "nz"]
  },
  // ===== AFRICA =====
  {
    id: "cairo",
    name: "Cairo",
    country: "Egypt",
    timezone: "Africa/Cairo",
    utcOffset: "UTC+2",
    lat: 30.0444,
    lng: 31.2357,
    area: "3,085",
    population: "21.28M",
    laborForce: "~9M",
    challenge: "Overcrowding and water resource scarcity",
    news: [
      "New administrative capital construction progresses, government relocation begins",
      "Egyptian tourism recovers with surge in pyramid visitors",
      "Renewable energy investment stabilizes power supply"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇪🇬",
    searchKeys: ["cairo", "egypt"]
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    timezone: "Africa/Nairobi",
    utcOffset: "UTC+3",
    lat: -1.2921,
    lng: 36.8219,
    area: "696",
    population: "4.91M",
    laborForce: "~2.2M",
    challenge: "Urbanization-driven inequality and infrastructure gaps",
    news: [
      "Nairobi grows as Africa's tech hub 'Silicon Savannah'",
      "M-Pesa mobile payment adoption rate continues to rise",
      "Urban greening project launched for climate action"
    ],
    accentColor: "oklch(0.60 0.16 120)",
    flag: "🇰🇪",
    searchKeys: ["nairobi", "kenya"]
  },
  {
    id: "capetown",
    name: "Cape Town",
    country: "South Africa",
    timezone: "Africa/Johannesburg",
    utcOffset: "UTC+2",
    lat: -33.9249,
    lng: 18.4241,
    area: "2,461",
    population: "4.71M",
    laborForce: "~2M",
    challenge: "Water scarcity, economic inequality, and safety concerns",
    news: [
      "Cape Town named Africa's top tourist destination",
      "Renewable energy industry experiences rapid growth",
      "Tech industry growth positions city as African innovation hub"
    ],
    accentColor: "oklch(0.65 0.15 185)",
    flag: "🇿🇦",
    searchKeys: ["cape town", "capetown", "south africa"]
  },
  // ===== ADDITIONAL POPULAR CITIES =====
  {
    id: "honolulu",
    name: "Honolulu",
    country: "United States (Hawaii)",
    timezone: "Pacific/Honolulu",
    utcOffset: "UTC-10",
    lat: 21.3069,
    lng: -157.8583,
    area: "177",
    population: "350K",
    laborForce: "~200K",
    challenge: "High cost of living and sea level rise from climate change",
    news: [
      "Hawaii tourism fully recovers, promoting sustainable travel",
      "100% renewable energy goal accelerates progress",
      "Soaring housing prices drive local resident outmigration"
    ],
    accentColor: "oklch(0.65 0.15 185)",
    flag: "🇺🇸",
    searchKeys: ["honolulu", "hawaii", "usa"]
  },
  {
    id: "denver",
    name: "Denver",
    country: "United States",
    timezone: "America/Denver",
    utcOffset: "UTC-7",
    lat: 39.7392,
    lng: -104.9903,
    area: "401",
    population: "720K",
    laborForce: "~400K",
    challenge: "Rapid population growth and water resource scarcity",
    news: [
      "Denver tech industry booms with Silicon Valley relocations",
      "Mile High City real estate market remains strong",
      "Outdoor tourism and wellness industry drive economy"
    ],
    accentColor: "oklch(0.58 0.18 270)",
    flag: "🇺🇸",
    searchKeys: ["denver", "colorado", "usa"]
  },
  {
    id: "miami",
    name: "Miami",
    country: "United States",
    timezone: "America/New_York",
    utcOffset: "UTC-5",
    lat: 25.7617,
    lng: -80.1918,
    area: "143",
    population: "440K",
    laborForce: "~250K",
    challenge: "Sea level rise risk and hurricane damage",
    news: [
      "Miami emerges as crypto and Web3 industry hub",
      "Economic ties with Latin America strengthen",
      "Large-scale flood barrier infrastructure under construction"
    ],
    accentColor: "oklch(0.65 0.18 300)",
    flag: "🇺🇸",
    searchKeys: ["miami", "florida", "usa"]
  },
  {
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    timezone: "Europe/Lisbon",
    utcOffset: "UTC+0",
    lat: 38.7223,
    lng: -9.1393,
    area: "100",
    population: "550K",
    laborForce: "~300K",
    challenge: "Housing affordability and gentrification",
    news: [
      "Lisbon surges in popularity as Europe's digital nomad capital",
      "Web Summit continues to attract global tech events",
      "Balancing historic preservation with modernization"
    ],
    accentColor: "oklch(0.72 0.15 80)",
    flag: "🇵🇹",
    searchKeys: ["lisbon", "portugal", "lisboa"]
  },
  {
    id: "helsinki",
    name: "Helsinki",
    country: "Finland",
    timezone: "Europe/Helsinki",
    utcOffset: "UTC+2",
    lat: 60.1699,
    lng: 24.9384,
    area: "214",
    population: "660K",
    laborForce: "~360K",
    challenge: "High cost of living and harsh winter climate",
    news: [
      "Finland tops World Happiness Report for 7th consecutive year",
      "Helsinki startup ecosystem experiences rapid growth",
      "EdTech exports emerge as new economic pillar"
    ],
    accentColor: "oklch(0.68 0.14 220)",
    flag: "🇫🇮",
    searchKeys: ["helsinki", "finland"]
  },
  {
    id: "vienna",
    name: "Vienna",
    country: "Austria",
    timezone: "Europe/Vienna",
    utcOffset: "UTC+1",
    lat: 48.2082,
    lng: 16.3738,
    area: "415",
    population: "1.97M",
    laborForce: "~1M",
    challenge: "Immigrant integration and rising housing demand",
    news: [
      "Vienna maintains top position in most livable city rankings",
      "Music and cultural industry drives tourism",
      "Affordable annual transit pass supports citizen mobility"
    ],
    accentColor: "oklch(0.62 0.18 340)",
    flag: "🇦🇹",
    searchKeys: ["vienna", "austria", "wien"]
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    timezone: "Europe/Madrid",
    utcOffset: "UTC+1",
    lat: 41.3874,
    lng: 2.1686,
    area: "101",
    population: "1.62M",
    laborForce: "~850K",
    challenge: "Overtourism and soaring housing prices",
    news: [
      "Barcelona strengthens tourist restrictions for sustainable tourism",
      "Smart city technology improves urban management efficiency",
      "Tech industry growth positions city as southern European innovation hub"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇪🇸",
    searchKeys: ["barcelona", "spain"]
  },
  {
    id: "kualalumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    timezone: "Asia/Kuala_Lumpur",
    utcOffset: "UTC+8",
    lat: 3.1390,
    lng: 101.6869,
    area: "243",
    population: "1.83M",
    laborForce: "~1M",
    challenge: "Traffic congestion and rapid urbanization impacts",
    news: [
      "Kuala Lumpur grows as Southeast Asian digital economy hub",
      "Petronas Twin Towers area redevelopment progresses",
      "Strengthens position as global halal industry center"
    ],
    accentColor: "oklch(0.66 0.14 160)",
    flag: "🇲🇾",
    searchKeys: ["kuala lumpur", "kualalumpur", "kl", "malaysia"]
  },
  {
    id: "hanoi",
    name: "Hanoi",
    country: "Vietnam",
    timezone: "Asia/Ho_Chi_Minh",
    utcOffset: "UTC+7",
    lat: 21.0285,
    lng: 105.8542,
    area: "3,329",
    population: "8.5M",
    laborForce: "~4.5M",
    challenge: "Air pollution and rapid urbanization",
    news: [
      "Vietnam GDP growth rate maintains ASEAN's highest level",
      "Hanoi manufacturing benefits from supply chain diversification",
      "Urban rail opening significantly improves transit infrastructure"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇻🇳",
    searchKeys: ["hanoi", "vietnam"]
  },
];

/** Default cities shown on first visit */
export const DEFAULT_CITY_IDS = ["sanfrancisco", "london", "paris", "bangalore"];

/** Search cities by query */
export function searchCities(query: string): CityInfo[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  return allCities.filter(city =>
    city.name.toLowerCase().includes(q) ||
    city.country.toLowerCase().includes(q) ||
    city.searchKeys.some(key => key.toLowerCase().includes(q))
  );
}
