import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "./Ui";
import "./App.scss";
import theme from "./Styles/theme/Theme";
import Section from "./Component/Section";
import InfoBoard from "./Component/InfoBoard/InfoBorad";
import Article from "./Component/Article/Article";
import Wall from "./Component/Wall/Wall";
import Footer from "./Component/Footer/Footer";
import Subscribe from "./Component/Subscribe/Subscribe";
import NewNavBar from "./Component/NewNavBar/NewNavBar";
import HomeNewSlide from "./Component/HomeNewSlide/HomeNewSlide";
import { useQuery } from "react-query";
import { getHomepagePVC } from "./utils/csm-api-calls";
import Loader from "./Component/Loader/Loader";
import { FormError } from "./Component/NewEvents/FormComponents";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function App() {
  const location = useLocation();

  const { isLoading, isError, isFetching, data } = useQuery(
    "all-homepage",
    getHomepagePVC,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  useEffect(() => {
    // Parse query parameters from the URL
    const queryParams = new URLSearchParams(location.search);

    // Check for Flutterwave success parameters
    const status = queryParams.get("status");
    const txRef = queryParams.get("tx_ref");
    const transactionId = queryParams.get("transaction_id");

    // Check for Paystack success parameters
    const trxref = queryParams.get("trxref");
    const reference = queryParams.get("reference");

    // Display success message for Flutterwave
    if (status === "successful" && txRef && transactionId) {
      toast.success(
        "Payment successful! Your transaction (ID: " +
          transactionId +
          ") has been processed.",
        {
          autoClose: 5000,
          onClose: () => {
            // Optionally clear URL parameters
            window.history.replaceState({}, document.title, "/");
          },
        }
      );
    }

    // Display success message for Paystack
    if (trxref && reference) {
      toast.success(
        "Payment successful! Your transaction (Ref: " +
          reference +
          ") has been processed.",
        {
          autoClose: 5000,
          onClose: () => {
            // Optionally clear URL parameters
            window.history.replaceState({}, document.title, "/");
          },
        }
      );
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <UIProvider>
          {isLoading || isFetching ? (
            <Loader loading={isLoading || isFetching} />
          ) : !isError ? (
            <div className="home">
              <Subscribe />
              <NewNavBar />
              <HomeNewSlide />
              <Article data={data} />
              <Section renderdata={data} />
              <InfoBoard />
              <Wall />
              <Footer />
            </div>
          ) : (
            <FormError>Can't Fetch Homepage Data</FormError>
          )}
        </UIProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
