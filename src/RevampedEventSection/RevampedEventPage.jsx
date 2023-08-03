import React from "react";
import { UIProvider } from "../Ui";
import NewNavBar from "../Component/NewNavBar/NewNavBar";
import Subscribe from "../Component/Subscribe/Subscribe";
import Wall from "../Component/Wall/Wall";
import Footer from "../Component/Footer/Footer";
import RevampedEventNavBar from "./RevampedEventNavBar/RevampedEventNavBar";
import { Outlet } from "react-router-dom";

function RevampedEventPage() {
  return (
    <>
      <UIProvider>
        <Subscribe />
        <NewNavBar />
        <RevampedEventNavBar />

        <div className="revamped-events">
          <Outlet />
        </div>

        <Wall />
        <Footer />
      </UIProvider>
    </>
  );
}

export default RevampedEventPage;
