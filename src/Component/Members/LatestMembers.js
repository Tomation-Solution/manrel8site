import React, { useEffect, useState } from "react";
import "./Members.scss";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import NewNavBar from "../NewNavBar/NewNavBar";
import Loader from "../Loader/Loader";
// import { listOfMembers } from "./OurMembersList";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/MemberRequirement.png";
import Subscribe from "../Subscribe/Subscribe";
import { useQuery } from "react-query";
import { getMembersApi } from "../../utils/api-calls2";
import Adverts from "../Adverts/Adverts";

function LatestMembers() {
  const { isLoading, data } = useQuery("getMembersApi", getMembersApi, {
    refetchOnWindowFocus: false,
  });

  //PAGINATION LOGIC
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  let pages = [];

  //SEARCH BAR
  const [listOfMembers, setListOfMembers] = useState([]);
  for (let i = 1; i <= Math.ceil(listOfMembers?.length / postsPerPage); i++) {
    pages.push(i);
  }
  //PAGINATION LOGIC
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const searchHandler = () => {
    const searchPattern = new RegExp(searchValue, "i");
    const result = listOfMembers?.filter(
      (item) => item?.name.search(searchPattern) >= 0
    );
    return result;
  };

  const searchResult = searchHandler();

  const paginatedData = searchResult?.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    if (data) {
      setListOfMembers(data);
    }
  }, [data]);
  useEffect(() => {
    if (searchValue.length !== 0) {
      setCurrentPage(1);
    }
  }, [searchValue]);
  return (
    <UIProvider>
      <Loader loading={isLoading} />
      <div className="members">
        <Subscribe />
        <NewNavBar />

        <NewImageBanner
          image={backImage}
          header={"Our Members"}
          details={["See our esteemed members across the country"]}
        />

        <Adverts />

        <div className="wrapper">
          <div className="cover">
            <div className="search-box">
              <input
                type={"text"}
                value={searchValue}
                placeholder={"Search for company"}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            {paginatedData.length > 0 ? (
              <div className="flex">
                {paginatedData.map((item, index) => (
                  <div className="card" key={item?.name} id={item?.name}>
                    <div className="card-item">
                      {/* <span className="bold">Name:</span> */}
                      <span className="light">{item?.name}</span>
                      <br />

                      <span
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        Description
                      </span>
                      <span className="light">{item?.description}</span>
                    </div>
                    <div className="card-item">
                      <span className="light">
                        {" "}
                        <a
                          href={item?.website}
                          target={"_blank"}
                          rel={"noreferrer"}
                        >
                          {item?.website}
                        </a>
                      </span>
                    </div>
                    {/* <div className="card-item">
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
                          href={
                            item?.Column12 ? `https://${item?.Column12}` : ""
                          }
                          target={"_blank"}
                          rel={"noreferrer"}
                        >
                          {item?.Column12 ? `${item?.Column12}` : ""}
                        </a>
                      </span>
                    </div> */}
                  </div>
                ))}
              </div>
            ) : (
              <h1>No company found</h1>
            )}
          </div>
        </div>
        {/* PAGINATION LOGIC */}
        {searchValue.length === 0 ? (
          <div className="pagination">
            {pages?.splice(0, 7)?.map((page, index) => {
              return (
                <span
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  style={
                    page === currentPage ? { color: "red" } : { color: "" }
                  }
                >
                  {page}
                </span>
              );
            })}

            {currentPage >= 7 ? (
              <button
                onClick={() => {
                  if (currentPage >= pages?.length) return;
                  setCurrentPage((oldState) => oldState + 1);
                }}
              >
                Next
              </button>
            ) : null}
          </div>
        ) : (
          ""
        )}

        <Wall />
        <Footer />
      </div>
    </UIProvider>
  );
}

export default LatestMembers;
