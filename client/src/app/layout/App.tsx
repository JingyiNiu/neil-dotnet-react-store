import { useEffect, useState } from "react";
import Header from "./Header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { red, teal } from "@mui/material/colors";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from "../utils/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { setBasket } from "../../features/basket/basketSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket])
  
  const [darkMode, setDarkMode] = useState(false);

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  const palleteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "Roboto", "Helvetica Neue", "sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: palleteType === "light" ? teal[400] : teal[600],
        light: palleteType === "light" ? teal[50] : teal[200],
        dark: palleteType === "light" ? teal[600] : teal[900],
      },
      secondary: {
        main: palleteType === "light" ? red[400] : red[500],
        light: palleteType === "light" ? red[200] : red[300],
        dark: palleteType === "light" ? red[600] : red[800],
      },
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  if (loading) return <LoadingComponent message='Initiasing app...' />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored'  />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
