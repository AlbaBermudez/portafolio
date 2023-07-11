import { extendTheme } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
// type ThemeConfig
//fonts
const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

//theme
// const config: ThemeConfig = {
//   initialColorMode: "system",
//   useSystemColorMode: true,
// };

export const theme = extendTheme({
  //   config

  fonts: {
    heading: montserrat.style.fontFamily,
    body: montserrat.style.fontFamily,
  },

  colors: {
    palette: {
      pink: "#fe429c",
      // pink: "#ff0d81",
    },
  },
  styles: {
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "#FCF7F2" : "#1A202C",
        bg: props.colorMode === "dark" ? "#1a202c" : "rgb(252, 247, 242)",
      },
    }),
  },
});
