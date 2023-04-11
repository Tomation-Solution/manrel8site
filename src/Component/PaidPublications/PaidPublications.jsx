import React from "react";
import { UIProvider } from "../../Ui";
import Wall from "../Wall/Wall";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import NewNavBar from "../NewNavBar/NewNavBar";

import "./PaidPublications.scss";
import { PublicationPayModal, SinglePublication } from "../NewEvents/Modals";
import Image from "../../images/new-images/InsightCardIMages (4).jpg";
import { useState } from "react";

const MoreInfo = [
  {
    id: "1",
    name: "Paid Publication One",
    location: "Eko Hotel, Victoria Island, Lagos",
    date: "November 13- 16, 2023",
    amount: "",
    type: "free",
  },
  {
    id: "2",
    name: "Paid Publication Two",
    location: "Eko Hotel, Victoria Island, Lagos",
    date: "November 13 - 16, 2023",
    amount: "",
    type: "free",
  },
  {
    id: "3",
    name: "Paid Publication Three",
    location: "Eko Hotel, Victoria Island, Lagos",
    date: "November 13 - 16, 2023",
    amount: "",
    type: "free",
  },
  {
    id: "4",
    name: "Paid Publication Four",
    location: "Eko Hotel, Victoria Island, Lagos",
    date: "November 13 - 16, 2023",
    amount: "",
    type: "free",
  },
];

const PaidPublications = () => {
  const [register, setRegister] = useState(false);

  const viewpaidHandler = () => {
    setRegister(!register);
  };
  return (
    <>
      {register && <PublicationPayModal closefn={viewpaidHandler} />}

      <UIProvider>
        <div className="paid-publications">
          <Subscribe />
          <NewNavBar />
          <h1 className="header">Paid Publications</h1>
          <div className="paid-publication-items">
            {MoreInfo.map((item) => (
              <SinglePublication
                image={Image}
                registerfn={() => setRegister(!register)}
                key={item.id}
                data={item}
              />
            ))}
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    </>
  );
};

export default PaidPublications;
