export type ThemeType = {
  colors: {
    mainBackground: string;
    headerFont: string;
    headerCircle: string;
    headerButtonBackground: string;
    resultContainer: string;
    result: string;
    buttonContainerBackground: string;
    mainButtonBackground: string;
    primaryButtonFont: string;
    secondaryButtonFont: string;
    delBackground: string;
    resetBackground: string;
    equalBackground: string;
    equalFont: string;
  };
};

export const lightTheme: ThemeType = {
  colors: {
    mainBackground: "#E6E6E6",
    headerFont: "#36362C",
    headerCircle: "#C85402",
    headerButtonBackground: "#D2CDCD",
    resultContainer: "#EEEEEE",
    result: "#36362C",
    buttonContainerBackground: "#D2CDCD",
    mainButtonBackground: "#E5E4E1",
    primaryButtonFont: "#36362C",
    secondaryButtonFont: "#FFFFFF",
    delBackground: "#378187",
    resetBackground: "#378187",
    equalBackground: "#C85402",
    equalFont: "#36362C",
  },
};

export const darkTheme: ThemeType = {
  colors: {
    mainBackground: "#3A4663",
    headerFont: "#FFFFFF",
    headerCircle: "#D03F2F",
    headerButtonBackground: "#242D44",
    resultContainer: "#181F33",
    result: "#FFFFFF",
    buttonContainerBackground: "#242D44",
    mainButtonBackground: "#EAE3DC",
    primaryButtonFont: "#434A59",
    secondaryButtonFont: "#FFFFFF",
    delBackground: "#647198",
    resetBackground: "#647198",
    equalBackground: "#D03F2F",
    equalFont: "#434A59",
  },
};

export const gamingTheme: ThemeType = {
  colors: {
    mainBackground: "#17062A",
    headerFont: "#FFE53D",
    headerCircle: "#00DED0",
    headerButtonBackground: "#1E0936",
    resultContainer: "#1E0936",
    result: "#FFE53D",
    buttonContainerBackground: "#1E0936",
    mainButtonBackground: "#331C4D",
    primaryButtonFont: "#FFE53D",
    secondaryButtonFont: "#FFFFFF",
    delBackground: "#56077C",
    resetBackground: "#56077C",
    equalBackground: "#00DED0",
    equalFont: "#1A2327",
  },
};
