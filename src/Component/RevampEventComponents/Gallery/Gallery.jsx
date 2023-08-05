import "./Gallery.css";

import img1 from "../../../assets/reusedimages/Galleryimages/img1.svg";
import img2 from "../../../assets/reusedimages/Galleryimages/img2.svg";
import img3 from "../../../assets/reusedimages/Galleryimages/img3.svg";
import img4 from "../../../assets/reusedimages/Galleryimages/img4.svg";
import img5 from "../../../assets/reusedimages/Galleryimages/img5.svg";
import img6 from "../../../assets/reusedimages/Galleryimages/img6.svg";
import img7 from "../../../assets/reusedimages/Galleryimages/img8.svg";
import img8 from "../../../assets/reusedimages/Galleryimages/img8.svg";
import img9 from "../../../assets/reusedimages/Galleryimages/img9.svg";
import img10 from "../../../assets/reusedimages/Galleryimages/img10.svg";
import img11 from "../../../assets/reusedimages/Galleryimages/img11.svg";
import img12 from "../../../assets/reusedimages/Galleryimages/img12.svg";

import CompanyLogo1 from "../../../assets/past-exhibition-companies/CompanyLogo1.jpeg";
import CompanyLogo2 from "../../../assets/past-exhibition-companies/CompanyLogo2.jpg";
import CompanyLogo3 from "../../../assets/past-exhibition-companies/CompanyLogo3.png";
import CompanyLogo4 from "../../../assets/past-exhibition-companies/CompanyLogo4.jpeg";
import CompanyLogo5 from "../../../assets/past-exhibition-companies/CompanyLogo5.jpg";
import CompanyLogo6 from "../../../assets/past-exhibition-companies/CompanyLogo6.png";
import CompanyLogo7 from "../../../assets/past-exhibition-companies/CompanyLogo7.jpeg";
import CompanyLogo8 from "../../../assets/past-exhibition-companies/CompanyLogo8.jpg";
import CompanyLogo9 from "../../../assets/past-exhibition-companies/CompanyLogo9.png";
import CompanyLogo10 from "../../../assets/past-exhibition-companies/CompanyLogo10.jpg";
import CompanyLogo11 from "../../../assets/past-exhibition-companies/CompanyLogo11.png";
import CompanyLogo12 from "../../../assets/past-exhibition-companies/CompanyLogo12.jpg";
import CompanyLogo13 from "../../../assets/past-exhibition-companies/CompanyLogo13.png";
import CompanyLogo14 from "../../../assets/past-exhibition-companies/CompanyLogo14.jpg";
import CompanyLogo15 from "../../../assets/past-exhibition-companies/CompanyLogo15.png";
import CompanyLogo16 from "../../../assets/past-exhibition-companies/CompanyLogo16.jpg";
import CompanyLogo17 from "../../../assets/past-exhibition-companies/CompanyLogo17.png";
import CompanyLogo18 from "../../../assets/past-exhibition-companies/CompanyLogo18.jpg";
import CompanyLogo19 from "../../../assets/past-exhibition-companies/CompanyLogo19.png";
import CompanyLogo20 from "../../../assets/past-exhibition-companies/CompanyLogo20.jpg";
import CompanyLogo21 from "../../../assets/past-exhibition-companies/CompanyLogo21.png";
import CompanyLogo22 from "../../../assets/past-exhibition-companies/CompanyLogo22.jpg";
import CompanyLogo23 from "../../../assets/past-exhibition-companies/CompanyLogo23.jpg";
import CompanyLogo24 from "../../../assets/past-exhibition-companies/CompanyLogo24.jpg";
import CompanyLogo25 from "../../../assets/past-exhibition-companies/CompanyLogo25.jpg";
import CompanyLogo26 from "../../../assets/past-exhibition-companies/CompanyLogo26.jpg";
import CompanyLogo27 from "../../../assets/past-exhibition-companies/CompanyLogo27.jpg";
import CompanyLogo28 from "../../../assets/past-exhibition-companies/CompanyLogo28.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="Gallerycontainer">
      <h1>Past Exhibition Gallery</h1>
      <div className="imagecontainer">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
        <img src={img10} alt="" />
        <img src={img11} alt="" />
        <img src={img12} alt="" />
      </div>

      <h1>Companies</h1>
      <div className="imagecontainer">
        <img src={CompanyLogo1} alt="" />
        <img src={CompanyLogo2} alt="" />
        <img src={CompanyLogo3} alt="" />
        <img src={CompanyLogo4} alt="" />
        <img src={CompanyLogo5} alt="" />
        <img src={CompanyLogo6} alt="" />
        <img src={CompanyLogo7} alt="" />
        <img src={CompanyLogo8} alt="" />
        <img src={CompanyLogo9} alt="" />
        <img src={CompanyLogo10} alt="" />
        <img src={CompanyLogo11} alt="" />
        <img src={CompanyLogo12} alt="" />
        <img src={CompanyLogo13} alt="" />
        <img src={CompanyLogo14} alt="" />
        <img src={CompanyLogo15} alt="" />
        <img src={CompanyLogo16} alt="" />
        <img src={CompanyLogo17} alt="" />
        <img src={CompanyLogo18} alt="" />
        <img src={CompanyLogo19} alt="" />
        <img src={CompanyLogo20} alt="" />
        <img src={CompanyLogo21} alt="" />
        <img src={CompanyLogo22} alt="" />
        <img src={CompanyLogo23} alt="" />
        <img src={CompanyLogo24} alt="" />
        <img src={CompanyLogo25} alt="" />
        <img src={CompanyLogo26} alt="" />
        <img src={CompanyLogo27} alt="" />
        <img src={CompanyLogo28} alt="" />
      </div>

      <br />
      <br />

      <Link to={"/revamped-events/register"}>
        <Button content="Register Now" variants="graysquarebackground" />
      </Link>
    </div>
  );
};

export default Gallery;
