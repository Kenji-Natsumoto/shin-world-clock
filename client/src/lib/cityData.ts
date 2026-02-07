/**
 * City data for シン・世界時計
 * Design: Observatory / Planetarium aesthetic
 * Each city has timezone, coordinates, stats, news, and challenges
 */

export interface CityInfo {
  id: string;
  nameJa: string;
  nameEn: string;
  country: string;
  countryJa: string;
  timezone: string;
  utcOffset: string;
  lat: number;
  lng: number;
  area: string;       // km²
  population: string; // total
  laborForce: string; // working population
  challenge: string;  // key challenge
  news: string[];     // 3 headlines
  accentColor: string; // unique accent per city
  flag: string;       // emoji flag
}

export const cities: CityInfo[] = [
  {
    id: "tokyo",
    nameJa: "東京",
    nameEn: "Tokyo",
    country: "Japan",
    countryJa: "日本",
    timezone: "Asia/Tokyo",
    utcOffset: "UTC+9",
    lat: 35.6762,
    lng: 139.6503,
    area: "2,194",
    population: "1,404万人",
    laborForce: "約810万人",
    challenge: "少子高齢化と首都直下型地震への備え",
    news: [
      "東京都の出生率が過去最低を更新、少子化対策の強化へ",
      "2025年度予算案で防災インフラ整備に重点配分",
      "都心部の再開発が加速、品川・渋谷エリアで大型プロジェクト"
    ],
    accentColor: "oklch(0.65 0.20 15)",
    flag: "🇯🇵"
  },
  {
    id: "newyork",
    nameJa: "ニューヨーク",
    nameEn: "New York",
    country: "United States",
    countryJa: "アメリカ",
    timezone: "America/New_York",
    utcOffset: "UTC-5",
    lat: 40.7128,
    lng: -74.0060,
    area: "783",
    population: "841万人",
    laborForce: "約430万人",
    challenge: "住宅価格の高騰とホームレス問題",
    news: [
      "マンハッタンのオフィス回帰率が70%を超え、経済活性化の兆し",
      "地下鉄システムの大規模近代化計画を発表",
      "AI産業の集積が進み、テック企業の雇用が急増"
    ],
    accentColor: "oklch(0.65 0.18 250)",
    flag: "🇺🇸"
  },
  {
    id: "london",
    nameJa: "ロンドン",
    nameEn: "London",
    country: "United Kingdom",
    countryJa: "イギリス",
    timezone: "Europe/London",
    utcOffset: "UTC+0",
    lat: 51.5074,
    lng: -0.1278,
    area: "1,572",
    population: "961万人",
    laborForce: "約520万人",
    challenge: "Brexit後の経済調整と住宅不足",
    news: [
      "ロンドン、世界都市ランキングで首位を維持",
      "テムズ川沿いのグリーンインフラ整備が本格化",
      "フィンテック分野で欧州最大の投資額を記録"
    ],
    accentColor: "oklch(0.60 0.15 145)",
    flag: "🇬🇧"
  },
  {
    id: "paris",
    nameJa: "パリ",
    nameEn: "Paris",
    country: "France",
    countryJa: "フランス",
    timezone: "Europe/Paris",
    utcOffset: "UTC+1",
    lat: 48.8566,
    lng: 2.3522,
    area: "105",
    population: "215万人",
    laborForce: "約120万人",
    challenge: "大気汚染と交通渋滞の慢性化",
    news: [
      "パリ五輪のレガシー施設が市民に開放、スポーツ振興へ",
      "15分都市構想の実現に向けた都市改造が進行中",
      "外国企業の対仏投資が政治不安の中でも堅調に推移"
    ],
    accentColor: "oklch(0.65 0.18 300)",
    flag: "🇫🇷"
  },
  {
    id: "sydney",
    nameJa: "シドニー",
    nameEn: "Sydney",
    country: "Australia",
    countryJa: "オーストラリア",
    timezone: "Australia/Sydney",
    utcOffset: "UTC+11",
    lat: -33.8688,
    lng: 151.2093,
    area: "12,368",
    population: "564万人",
    laborForce: "約290万人",
    challenge: "山火事リスクと水資源の確保",
    news: [
      "シドニー、世界最高の都市トップ10にランクイン",
      "再生可能エネルギーへの転換が加速、太陽光発電が急成長",
      "オーバーツーリズム対策として観光客分散策を導入"
    ],
    accentColor: "oklch(0.65 0.15 185)",
    flag: "🇦🇺"
  },
  {
    id: "dubai",
    nameJa: "ドバイ",
    nameEn: "Dubai",
    country: "UAE",
    countryJa: "アラブ首長国連邦",
    timezone: "Asia/Dubai",
    utcOffset: "UTC+4",
    lat: 25.2048,
    lng: 55.2708,
    area: "4,114",
    population: "367万人",
    laborForce: "約250万人",
    challenge: "外国人労働者への依存と猛暑対策",
    news: [
      "ドバイ、世界都市パワーインデックスで4位に躍進",
      "超高級不動産市場が活況、メガディール件数が過去最高",
      "AI・スマートシティ構想で中東のテックハブ化が加速"
    ],
    accentColor: "oklch(0.70 0.16 55)",
    flag: "🇦🇪"
  }
];
