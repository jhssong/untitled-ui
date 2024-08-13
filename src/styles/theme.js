const color = {
  white: "#FFFFFF",
  black: "#000000",

  gray25: "#FCFCFD",
  gray50: "#F9FAFB",
  gray100: "#F2F4F7",
  gray200: "#E4E7EC",
  gray300: "#D0D5DD",
  gray400: "#98A2B3",
  gray500: "#667085",
  gray600: "#475467",
  gray700: "#344054",
  gray800: "#1D2939",
  gray900: "#101828",

  brand25: "#FCFAFF",
  brand50: "#F9F5FF",
  brand100: "#F4EBFF",
  brand200: "#E9D7FE",
  brand300: "#D6BBFB",
  brand400: "#B692F6",
  brand500: "#9E77ED",
  brand600: "#7F56D9",
  brand700: "#6941C6",
  brand800: "#53389E",
  brand900: "42307D",

  error25: "#FFFBFA",
  error50: "#FEF3F2",
  error100: "#FEE4E2",
  error200: "#FECDCA",
  error300: "#FDA29B",
  error400: "#F97066",
  error500: "#F04438",
  error600: "#D92D20",
  error700: "#B42318",
  error800: "#912018",
  error900: "#7A271A",

  warning25: "#FFFCF5",
  warning50: "#FFFAEB",
  warning100: "#FEF0C7",
  warning200: "#FEDF89",
  warning300: "#FEC84B",
  warning400: "#FDB022",
  warning500: "#F79009",
  warning600: "#DC6803",
  warning700: "#B54708",
  warning800: "#93370D",
  warning900: "#7A2E0E",

  success25: "#F6FEF9",
  success50: "#ECFDF3",
  success100: "#D1FADF",
  success200: "#A6F4C5",
  success300: "#6CE9A6",
  success400: "#32D583",
  success500: "#12B76A",
  success600: "#039855",
  success700: "#027A48",
  success800: "#05603A",
  success900: "#054F31",

  blueGray25: "#FCFCFD",
  blueGray50: "#F8F9FC",
  blueGray100: "#EAECF5",
  blueGray200: "#D5D9EB",
  blueGray300: "#AFB5D9",
  blueGray400: "#717BBC",
  blueGray500: "#4E5BA6",
  blueGray600: "#3E4784",
  blueGray700: "#363F72",
  blueGray800: "#293056",
  blueGray900: "#101323",

  blueLight25: "#F5FBFF",
  blueLight50: "#F0F9FF",
  blueLight100: "#E0F2FE",
  blueLight200: "#B9E6FE",
  blueLight300: "#7CD4FD",
  blueLight400: "#36BFFA",
  blueLight500: "#0BA5EC",
  blueLight600: "#0086C9",
  blueLight700: "#026AA2",
  blueLight800: "#065986",
  blueLight900: "#0B4A6F",

  blue25: "#F5FAFF",
  blue50: "#EFF8FF",
  blue100: "#D1E9FF",
  blue200: "#B2DDFF",
  blue300: "#84CAFF",
  blue400: "#53B1FD",
  blue500: "#2E90FA",
  blue600: "#1570EF",
  blue700: "#175CD3",
  blue800: "#1849A9",
  blue900: "#194185",

  indigo25: "#F5F8FF",
  indigo50: "#EEF4FF",
  indigo100: "#E0EAFF",
  indigo200: "#C7D7FE",
  indigo300: "#A4BCFD",
  indigo400: "#8098F9",
  indigo500: "#6172F3",
  indigo600: "#444CE7",
  indigo700: "#3538CD",
  indigo800: "#2D31A6",
  indigo900: "#2D3282",

  purple25: "#FAFAFF",
  purple50: "#F4F3FF",
  purple100: "#EBE9FE",
  purple200: "#D9D6FE",
  purple300: "#BDB4FE",
  purple400: "#9B8AFB",
  purple500: "#7A5AF8",
  purple600: "#6938EF",
  purple700: "#5925DC",
  purple800: "#4A1FB8",
  purple900: "#3E1C96",

  pink25: "#FEF6FB",
  pink50: "#FDF2FA",
  pink100: "#FCE7F6",
  pink200: "#FCCEEE",
  pink300: "#FAA7E0",
  pink400: "#F670C7",
  pink500: "#EE46BC",
  pink600: "#DD2590",
  pink700: "#C11574",
  pink800: "#9E165F",
  pink900: "#851651",

  rose25: "#FFF5F6",
  rose50: "#FFF1F3",
  rose100: "#FFE4E8",
  rose200: "#FECDD6",
  rose300: "#FEA3B4",
  rose400: "#FD6F8E",
  rose500: "#F63D68",
  rose600: "#E31B54",
  rose700: "#C01048",
  rose800: "#A11043",
  rose900: "#89123E",

  orange25: "#FFFAF5",
  orange50: "#FFF6ED",
  orange100: "#FFEAD5",
  orange200: "#FDDCAB",
  orange300: "#FEB273",
  orange400: "#FD853A",
  orange500: "#FB6514",
  orange600: "#EC4A0A",
  orange700: "#C4320A",
  orange800: "#9C2A10",
  orange900: "#7E2410",
};

const weight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

const text = {
  display2XL: `
    font-size: 72px;
    line-height: 90px;
    letter-spacing: -0.02em;
  `,
  displayXL: `
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.02em;
    `,
  displayLG: `
    font-size: 48px;
    line-height: 60px;
    letter-spacing: -0.02em;
    `,
  displayMD: `
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    `,
  displaySM: `
    font-size: 30px;
    line-height: 38px;
    letter-spacing: -0.02em;
    `,
  displayXS: `
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    `,
  textXL: `
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.02em;
    `,
  textLG: `
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.02em;
    `,
  textMD: `
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.02em;
    `,
  textSM: `
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    `,
  textXS: `
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.02em;
    `,
};

const theme = {
  colors: color,
  weights: weight,
  fontSizes: text,
};

export default theme;
