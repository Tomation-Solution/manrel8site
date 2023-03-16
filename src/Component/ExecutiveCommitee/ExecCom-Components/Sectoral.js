import React from "react";

import Sect1 from "../../../images/new-images/executivesImg/Sect1.png";
import Sect2 from "../../../images/new-images/executivesImg/Sect2.png";
import Sect3 from "../../../images/new-images/executivesImg/Sect3.png";
import Sect4 from "../../../images/new-images/executivesImg/Sect4.png";
import Sect5 from "../../../images/new-images/executivesImg/Sect5.png";
import Sect6 from "../../../images/new-images/executivesImg/Sect6.png";
import Sect7 from "../../../images/new-images/executivesImg/Sect7.png";
import Sect8 from "../../../images/new-images/executivesImg/Sect8.png";
import Sect9 from "../../../images/new-images/executivesImg/Sect9.png";
import Sect10 from "../../../images/new-images/executivesImg/Sect10.png";
import Sect11 from "../../../images/new-images/executivesImg/Sect11.png";
import Sect12 from "../../../images/new-images/executivesImg/Sect12.png";
import Sect13 from "../../../images/new-images/executivesImg/Sect13.png";

import NoPicture from "../../../images/new-images/executivesImg/NoPicture.png";

const renderData = [
  {
    image: Sect1,
    name: "Mr. Patrick Anegbe Chairman, Food, Beverages & Tobacco Sectoral Group",
    title: "MD/CEO",
    address:
      "Intercontinental Distilleries Limited Chelsea House, Ladipo Oluwole Ind. Estate, Ikeja, Lagos",
    email: "Email: anegbe.patrick@idlng.com, anegbe.patrick@yahoo.com",
    phone: "Tel: 08034030185",
  },
  {
    image: Sect2,
    name: "Mr. Rotimi Aluko Chairman, Chemical &Pharmaceuticals Sectoral Group",
    title: "MD/CEO",
    address:
      "Voda Paints Limited Km 33, Lagos-Ibadan Exp. Way, Magboro Ind. Area. Magboro, Ogun State",
    email: "Email: rotimialuko@hotmail.com",
    phone: "Tel: 08036551445",
  },

  {
    image: Sect3,
    name: "Chief Evarist Uba Chairman, Domestic & Industrial Plastics, Foam & Rubber Sectoral Group",
    title: "Managing Director",
    address:
      "Group Enterprises Nigeria Limited (Polly Foam) 2C Uba Close, Niger Bridge Head Ind. Layout, Near Ogboefere Market Onitsha, Anambra State",
    email: "Email: polyfoam@yahoo.com, evarist.uba@pollyfoam.com",
    phone: "Tel: 08033278827",
  },
  {
    image: Sect4,
    name: "Alhaji (Dr.) Kamorudeen Yusuf Chairman, Basic Metal, Iron & Steel& Fabricated Metal Product Sectoral Group",
    title: "GMD/CEO",
    address: "Kam Industries Nigeria Limited Asa Dam Road, Ilorin, Kwara State",
    email: "Email: yusuf@kamholding.net, kamwire@yahoo.com",
    phone: "Tel:08038133830",
  },

  {
    image: Sect5,
    name: "Engr. Ilyasu Saleh Chairman, Textiles, Wearing Apparel, Carpet Leather & Leather Footwear Products Sectoral Group",
    title: "Managing Director",
    address: "Zaria Industries Limited Old Jos Road, Zaria, Kaduna.",
    email:
      "E-mail: premier_tarpaulin@yahoo.com, siazinternational@yahoo.com, ilyasaleh59@yahoo.com",
    phone: "Tel :08037016789; 08023218081",
  },

  {
    image: Sect6,
    name: "Mr. N. S. Kedarnath Chairman, Pulp, Paper & Paper Products, Printing & Publishing Sectoral Group",
    title: "Managing Director/CEO",
    address:
      "Veevee Paper Products Ltd Km 2, Ijoko Road, Sango Otta, Ogun State",
    email: "Email:nsk.md@veeveepaper.com, nskedar@gmail.com",
    phone: "Tel: 08105434965",
  },

  {
    image: Sect7,
    name: "Mrs. Ijeoma Oduonye Chairman, Electrical/ Electronic Sectoral Group",
    title: "MD/CEO",
    address: "Cutix Plc No, 17 Osita Onyejianya Street, Umuanuka Otolo Nnewi",
    email: "Email: ijeoma.oduonye@cutixplc.com.ng",
    phone: "Tel: 08035423787",
  },

  {
    image: Sect8,
    name: "Mrs. Ngozi Oyewole Chairman, Wood, Wood Products &Furniture Sectoral Group",
    title: "MD/CEO",
    address: "Noxie Limited",
    email: "Email: ngozi.oyewole@noxielimited.com",
    phone: "Tel: 08029991111",
  },

  {
    image: Sect9,
    name: "Mr. Mallinson Afam Ukatu Chairman, Non-Metallic Minerals Sectoral Group",
    title: "MD/CEO",
    address:
      "NISPO Porcelain Company Limited 3B, Ashimowu Jibowu Street, Off Johnson Street, Off Coker Road, Ilupeju, Lagos",
    email: "Email: afam65mail@yahoo.com",
    phone: "Tel: 08022243755",
  },

  {
    image: Sect10,
    name: "Mr. Robert Ugbaja Chairman, Motor Vehicle & Miscellaneous Assembly Sectoral Group",
    title: "",
    address: "Boulos Enterprises Ltd. Plot 10, Acme Road, Ogba, Ikeja",
    email: "Email: r.ugbaja@bel.groupboulos.com, ugbajarobert@hotmail.com",
    phone: "Tel: 08033005566",
  },

  {
    image: Sect11,
    name: "Mrs. Soromidayo George Chairman, MAN Export Group",
    title: "Director",
    address: "Unilever Nigeria Plc Billings Way, Oregun-Ikeja, Lagos",
    email: "Email: soromidayo.george@unilever.com",
    phone: "Tel: 08022238659",
  },
  {
    image: Sect12,
    name: "Mr. Vassily Barberopoulos Chairman, MANLOC Group",
    title: "Managing Director",
    address:
      "Nigerian Foundaries 1, Adeyemi Bero Crescent, Ilupeju Industrial Estate, Anthony, Oshodi, Ilupeju",
    email: "Email: vassily@manlocgroup.com",
    phone: "Tel: 08034026011",
  },
];

const Sectoral = () => {
  return (
    <article>
      <h1 className="article-header">Sectoral Chairmen</h1>
      <p className="article-desc">
        The Executive Committee is a group of experienced professionals duly
        elected by MAN members and entrusted with the obligation to conduct the
        affairs of the Association according to its constitution
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

        <div className="member_item_centered">
          <div className="left">
            <img alt="" src={Sect13} />
          </div>
          <div className="right">
            <p className="header">
              Dr. Michael Adebayo Chairman, MAN Gas Users
            </p>

            <p className="detail">Executive Director</p>
            <p className="detail">
              Haffar Industries Ltd. 361, Agege Motor Road, Mushin, Lagos.
            </p>
            <p className="detail">Email: madebayo2010@gmail.com </p>
            <p className="detail">Tel: 08023175695</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Sectoral;
