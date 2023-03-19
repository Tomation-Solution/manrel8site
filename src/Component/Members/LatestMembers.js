import React, { useState } from "react";
import "./Members.scss";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import NewNavBar from "../NewNavBar/NewNavBar";
import { listOfMembers } from "./OurMembersList";

function LatestMembers() {
  //PAGINATION LOGIC
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  let pages = [];

  for (let i = 1; i <= Math.ceil(listOfMembers?.length / postsPerPage); i++) {
    pages.push(i);
  }
  //PAGINATION LOGIC
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const paginatedData = listOfMembers?.slice(firstPostIndex, lastPostIndex);

  return (
    <UIProvider>
      <div className="members">
        <NewNavBar />
        <div className="hero_image latest">
          <div className="cover">
            <div className="tag"></div>
            <h1>Our Members</h1>
            <p>See our esteemed across the country</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="cover">
            <h1>Our Members</h1>
            <div className="flex">
              {paginatedData.map((item, index) => (
                <div className="card" key={index} id={item?.Column2}>
                  <div className="card-item">
                    <span className="bold">Name:</span>
                    <span className="light">{item?.Column2}</span>
                  </div>
                  <div className="card-item">
                    <span className="bold">MAN Registration Number:</span>
                    <span className="light"> {item?.Column3}</span>
                  </div>
                  <div className="card-item">
                    <span className="bold">EMAIL &amp; WEB ADDRESS: </span>
                    <span className="light"> {item?.Column10}</span>
                  </div>
                  <div className="card-item">
                    <span className="bold">E-mail: </span>
                    <span className="light"> {item?.Column11}</span>
                  </div>
                  <div className="card-item">
                    <span className="bold">Website:</span>
                    <span className="light">
                      <a
                        href={item?.Column12 ? `https://${item?.Column12}` : ""}
                        target={"_blank"}
                        rel={"noreferrer"}
                      >
                        {item?.Column12 ? `${item?.Column12}` : ""}
                      </a>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* PAGINATION LOGIC */}
        <div className="pagination">
          {pages.map((page, index) => {
            return (
              <span
                key={index}
                onClick={() => setCurrentPage(page)}
                style={page === currentPage ? { color: "red" } : { color: "" }}
              >
                {page}
              </span>
            );
          })}
        </div>
        <Wall />
        <Footer />
      </div>
    </UIProvider>
  );
}

export default LatestMembers;
