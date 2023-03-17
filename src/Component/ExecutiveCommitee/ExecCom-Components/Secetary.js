import React from "react";
import NoPicture from "../../../images/new-images/executivesImg/NoPicture.png";

const renderData = [
  {
    image: "",
    name: "Mr. Femi Gbadegun Executive Secretary, MAN, Ikeja Branch",
    title: "",
    address: "MAN, Ikeja Branch No.2A, Akilo Road Ogba. Ikeja",
    email: "Email: manikeja@yahoo.com",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Sunday Okpe Executive Secretary, MAN, Apapa Branch",
    title: "",
    address: "No 3 Shalom Street, by Lagoon Estate Ark",
    email: "Email:manapapabranch@gmail.com",
    phone: "",
  },
  {
    image: "",
    name: "Miss Motunrayo Elegberun Executive Secretary, MAN, Ogun State Branch",
    title: "",
    address:
      "Km.4, (Beside Oba T. Dada Market) Ota-Idiroko Road, Sango Ogun State",
    email: "Email:manogun@yahoo.com",
    phone: "",
  },
  {
    image: "",
    name: "Klinton Offiong Executive Secretary, MAN, Cross-River Branch",
    title: "",
    address:
      "MAN, Cross River/Akwa Ibom States Branch 45B IBB Way Behind Stanbic IBTC Pension Managers Calabar, Cross River State.",
    email: "Email: mancrk@gmail .com",
    phone: "",
  },
  {
    image: "",
    name: "Muhammad Bello Muhammad Executive Secretary, MAN, Kaduna, Sokoto, Katsina, Kebbi Branch",
    title: "",
    address:
      "MAN, Kaduna, Katsina,Sokoto,Kebbi States Branch No.1, Keffi Close Opp. BOC Gases Nig. Plc Kaduna",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Adeola Gbenga Executive Secretary, MAN, Kogi/Kwara States Branch",
    title: "",
    address: "1, New Yidi Road P.O.Box 5644, Ilorin Kwara State",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Chibuzor Raphael Eze Executive Secretary, MAN, Rivers/Bayelsa States Branch",
    title: "",
    address:
      "MAN, Kaduna, Katsina,Sokoto,Kebbi States Branch Plot 26, Danjuma Drive Behind Savannah Bank Woji Housing Estate P.M.B. 082, Trans Amadi Port Harcourt.",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Goodluck Amachree Executive Secretary, MAN, Edo/Delta States Branch",
    title: "",
    address:
      "Plot 4, Alexandra Ogun Road Evboriaria Indl. Estate Opp. Palm Garden Km. 7, Sapele Road, Benin CityEdo State.",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Sunday Sotomi Executive Secretary, MAN, Anambra/Enugu/Ebonyi States Branch",
    title: "",
    address: "No.18 (Formerly 2A) Chime Avenue New Haven Uwani-Enugu.",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Lekan Edunjobi Executive Secretary, MAN Abuja, Nasarawa, Niger States Branch",
    title: "",
    address:
      "MAN Abuja Liaison Office Room 202, 2nd Floor, Adamawa Plaza Opposite The Statement Hotel By Abia House Central Area Abuja.Chairm",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Ibrahim Garba Executive Secretary, MAN, Kano State Branch",
    title: "",
    address: "No. 500 Sheikh Nasiru Kabara City (Amana City), Zaria Road Kano.",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Augustine Egili Executive Secretary, MAN, Bauchi/Benue/Plateau/ Borno, Yobe, Gombe, Taraba, Adamawa States Branch",
    title: "",
    address:
      "7, Suzi Garden Tafawa Balewa Street Bukara Road by Zaria Road, Jos Plateau State.",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Nanzing Rimdan Executive Secretary, MAN, Oyo/Ondo/Osun/Ekiti States Branch",
    title: "",
    address: "5, Ighodaro Road Jericho Ibadan.",
    email: "",
    phone: "",
  },
  {
    image: "",
    name: "Mr. Cyprian H. Nnadozie Executive Secretary, MAN, Imo/Abia States Branch",
    title: "",
    address: "Flat No.2 No.15A (19A) Wetheral Road Owerri Imo State.",
    email: "",
    phone: "",
  },
];

const Secetary = () => {
  return (
    <>
      <article>
        <h1 className="article-header">Branch Chairmen</h1>
        <p className="article-desc">
          The Executive Committee is a group of experienced professionals duly
          elected by MAN members and entrusted with the obligation to conduct
          the affairs of the Association according to its constitution
        </p>

        <div className="member_items">
          {renderData.map((item) => {
            return (
              <div className="member_item">
                <div className="left">
                  <img alt="" src={item?.image || NoPicture} />
                </div>
                <div className="right">
                  <p className="header">{item?.name}</p>
                  <p className="detail">{item?.title}</p>
                  <p className="detail">{item?.address}</p>
                  <p className="detail">{item?.email}</p>
                  <p className="detail">{item?.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Secetary;
