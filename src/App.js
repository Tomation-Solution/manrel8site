import React from "react";
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

function App() {
  const { isLoading, isError, isFetching, data } = useQuery(
    "all-homepage",
    getHomepagePVC,
    {
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

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
              <HomeNewSlide data={data} />
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
