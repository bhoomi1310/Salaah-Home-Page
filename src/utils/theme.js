import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#005F73",
    200: "#0A9396",
    300: "#94D2BD",
    400: "#E9D8A6",
    500: "#EE9B00",
    600: "#CA6702",
    700: "#BB3E03",
    800: "#AE2012",
    900: "#9B2226"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;