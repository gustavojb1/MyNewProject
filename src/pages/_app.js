import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthConsumer, AuthProvider } from "src/contexts/auth-context";
import { useNProgress } from "src/hooks/use-nprogress";
import { createTheme } from "src/theme";
import { createEmotionCache } from "src/utils/create-emotion-cache";
import "simplebar-react/dist/simplebar.min.css";
import "../styles/style-transition.css";
import { GlobalStyles } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const scrollbarStyles = `
  .simplebar-scrollbar:before {
    background-color: #ffffff;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .simplebar-track.simplebar-vertical {
    width: 10px;
    margin-right: 5px;
  }
  .simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {
    height: 16px;
  }
`;

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme({});


  return (
    <CacheProvider value={emotionCache}>
      <GlobalStyles styles={scrollbarStyles} />
      <Head>
        <title>UniRisk360</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthConsumer>
              {(auth) =>
                auth.isLoading ? <SplashScreen /> : getLayout(<Component {...pageProps} />)
              }
            </AuthConsumer>
          </ThemeProvider>
        </AuthProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
