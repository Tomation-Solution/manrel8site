import React from "react";

import Branch1 from "../../../images/new-images/executivesImg/Branch1.png";
import Branch2 from "../../../images/new-images/executivesImg/Branch2.png";
import Branch3 from "../../../images/new-images/executivesImg/Branch3.png";
import Branch4 from "../../../images/new-images/executivesImg/Branch4.png";
import Branch5 from "../../../images/new-images/executivesImg/Branch5.png";
import Branch6 from "../../../images/new-images/executivesImg/Branch6.png";
import Branch7 from "../../../images/new-images/executivesImg/Branch7.png";
import Branch8 from "../../../images/new-images/executivesImg/Branch8.png";
import Branch9 from "../../../images/new-images/executivesImg/Branch9.png";
import Branch10 from "../../../images/new-images/executivesImg/Branch10.png";

import NoPicture from "../../../images/new-images/executivesImg/NoPicture.png";

const renderData = [
  {
    image: Branch1,
    name: "Engr. Frank OnyebuChairman, Apapa Branch",
    title: "",
    address: "Universal Luggages Ltd. C33, AmuwoOdofin Ind. Zone Lagos.",
    email: "Email:ike_onyebu@yahoo.com nocchairman@yahoo.com",
    phone: "Tel: 08121647278",
  },
  {
    image: Branch2,
    name: "Mr. George Onafowokan Chairman, Ogun State Branch",
    title: "Managing Director",
    address:
      "Coleman Wires and cables Km 34, Lagos Ibadan Expressway, Arepo, Ogun State",
    email: "E-mail : george@colemancables.com",
    phone: "Tel.: 08035608585",
  },
  {
    image: Branch3,
    name: "Mr. Robert Ugbaja Chairman Ikeja Branch",
    title: "Chairman",
    address: "Boulos Enterprises Ltd. Plot 10, Acme Road Ogba, Ikeja",
    email: "Email: r.ugbaja@boulos.ng",
    phone: "Tel: 08033005566",
  },
  {
    image: Branch4,
    name: "Alhaji Ahmad Adamu Chairman, Kano, Sharada/Challawa Branch",
    title: "Managing Director",
    address: "African Textile Ltd. Kano",
    email: "Email: ahmadmohammadadam@gmail.com, amirah196533@gmail.com",
    phone: "Tel: 08033175451",
  },
  {
    image: "",
    name: "Alhaji Muhammed Umar Chairman, Kano Bompai Branch",
    title: "",
    address: "Tofa Textile Limited 5, independence Road, Bompai Ind. Area Kano",
    email: "Email: bellom007@hotmail.com",
    phone: "Tel: 08038840359",
  },
  {
    image: Branch5,
    name: "Mr. Raymond Anyanwu Chairman, Kaduna South-East Branch",
    title: "",
    address:
      "Arewa Metal Containers Ltd. 1, Mohammed Ladan Road, P. O. Box 270 Kaduna",
    email: "Email: rayanyanwu2003@yahoo.co.uk",
    phone: "Tel: 08036974299",
  },
  {
    image: "",
    name: "Alh. Umar Mala Chairman, Kaduna North-West Branch",
    title: "",
    address:
      "Falhum Investment Ltd Km 1, Kaduna International Airport Road, Kaduna State, Kaduna",
    email: "Email: mala8338@gmail.com",
    phone: "Tel: 08033138679",
  },
  {
    image: "",
    name: "Mr. Vincent Okuku Chairman, Rivers/Bayelsa States Branch",
    title: "",
    address:
      "Eastern Enamelware Factory Ltd. Plot 31, Trans Amadi Ind. Estate. Port Harcourt",
    email: "Email: elebaokuku1@yahoo.com, enamelware@yahoo.co.uk",
    phone: "Tel: 08033104363",
  },

  {
    image: "",
    name: "Mr. Lanre Popoola Chairman, Oyo/Osun/Ekiti/OndoStates Branch",
    title: "General Manager",
    address:
      "Extreme Manufacturing Nig. Ltd. Essuso Village, Ibadan-Ijebu Ode Road,Oluyola LGA, Ibadan, Oyo State.",
    email: "Email: lanre@extremenigeria.com",
    phone: "Tel: 08060969191",
  },
  {
    image: Branch6,
    name: "Alh. Shehu Sule Nyelum Chairman, Bauchi/Benue/Plateau/G/N/Branch",
    title: "GM Admin/Human Resource",
    address: "Nasco Foods Ltd, Makurdi.",
    email: "Email: shehu@nasco.net",
    phone: "Tel: 08037150514",
  },
  {
    image: "",
    name: "Engr. Okwara Udensi Chairman, Edo/Delta Branch",
    title: "Managing Director/CEO",
    address:
      "Equitax Integrated Oil Ltd. DSC Road before Orhunwhorun Junction Warri",
    email: "Email: equitaxintegratedoil@gmail.com",
    phone: "Tel: 08055500078; 08038749054",
  },
  {
    image: Branch7,
    name: "Pharm. Bioku Rahmon Chairman, Kwara/ Kogi Branch",
    title: "Managing Director",
    address:
      "Bioraj Pharmaceutical Ltd. Okolowo Road, Beside WAEC Office, Ilorin, Kwara State",
    email: "E-mail: biorajpharmaceuticalltd@yahoo.com",
    phone: "Tel : 08038099594",
  },
  {
    image: "",
    name: "Alhaji Abubakare Minjibir Chairman, Abuja Branch",
    title: "CEO",
    address: "Tawada Limited Plot 862, Area 11, Abuja",
    email: "Email: aminjibir@yahoo.com",
    phone: "Tel: 08037178677",
  },
  {
    image: Branch8,
    name: "Mr. Akin Oyediran Chairman, Cross River/Akwa Ibom Branch",
    title: "Managing Director",
    address:
      "Syringe Manufacturing Co. 1, Jubilee Close, Off Jubilee Road Awa, Onna",
    email: "Email: akin.oyediran@jubileesyringe.com info@jubileesyringe.com",
    phone: "Tel: 07088976155",
  },
  {
    image: Branch9,
    name: "Lady Ada Chukwudozie Chairman, Anambra/Enugu Branch",
    title: "Managing Director",
    address:
      "Dozzy Oil & Gas Limited Plot 1, Niger Bridge Head, Industrial Layout, Onitsha.",
    email: "E-mail: ladyada@dozzygroup.com",
    phone: "Tel: 08033206899",
  },
  {
    image: Branch10,
    name: "Dr. Jude O. Eluma Chairman, Imo/Abia Branch",
    title: "CEO",
    address:
      "Elchem Limited 15, Industrial Road, P. O. Box 395, Mgbidi, Imo State",
    email: "Email: judeeluma@yahoo.com, elchemltd@yahoo.co.uk",
    phone: "Tel: 07036710525; 08117674482",
  },
];

const Branch = () => {
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

export default Branch;
