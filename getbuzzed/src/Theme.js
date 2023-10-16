// color design tokens
export const colors = ({
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#cce9eb",
          200: "#99d3d6",
          300: "#66bcc2",
          400: "#33a6ad",
          500: "#009099",
          600: "#00737a",
          700: "#00565c",
          800: "#003a3d",
          900: "#001d1f",
        },
        patientColor: {
          100: "#F2F0F0",
          200: "#3F8E97",
        },
  });

// mui theme settings
export const themeSettings = {
    palette: {
            primary: {
              main: "#a5b9bc"
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              heading: "#A7B0CA",
              default: "#c4b494",
              footer: "#262c30"
            },
            text: {
              primary: "#aeb9aa",
              secondary: "#161a1d",
            }
    },
    typography: {
      fontFamily: ['"Helvetica Neue"', "sans-serif"].join(","),
      fontsize: 20,
      h1: {
        fontFamily: [
                      'Tahoma'
                    ].join(','),
        fontSize: 256,
        textShadow: "2px 2px 5px black"
      },
      h2: {
        fontFamily: ["Helvetica Neue", "sans-serif"].join(","),
        fontSize: 128,
      },
      h3: {
        fontFamily: ["Helvetica Neue", "sans-serif"].join(","),
        fontSize: 64,
      },
      h4: {
        fontFamily: ["Helvetica Neue", "sans-serif"].join(","),
        fontSize: 48,
      },
      h5: {
        fontFamily: ["Helvetica Neue", "sans-serif"].join(","),
        fontSize: 32,
      },
      h6: {
        fontFamily: ["Helvetica Neue", "sans-serif"].join(","),
        fontSize: 24,
      },
    },
};