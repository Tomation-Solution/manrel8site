import React, { useEffect, useState } from "react";
import "./Members.scss";
import { UIProvider } from "../../Ui";
import Footer from "../Footer/Footer";
import Wall from "../Wall/Wall";
import NewNavBar from "../NewNavBar/NewNavBar";
import Loader from "../Loader/Loader";
import NewImageBanner from "../NewImageBanner/NewImageBanner";
import backImage from "../../images/new-images/MemberRequirement.png";
import Subscribe from "../Subscribe/Subscribe";
import { useQuery } from "react-query";
import { getMembersApi } from "../../utils/api-calls2";
import Adverts from "../Adverts/Adverts";
import { ourMembersBannerGet } from "../../utils/csm-api-calls";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="error-fallback"
          style={{
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            borderRadius: "8px",
            margin: "20px",
          }}
        >
          <h3>Something went wrong</h3>
          <p>
            We're having trouble loading this section. Please try refreshing the
            page.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Safe Adverts wrapper component
const SafeAdverts = () => {
  return (
    <ErrorBoundary>
      <Adverts />
    </ErrorBoundary>
  );
};

function LatestMembers() {
  // Enhanced query with error handling
  const {
    isLoading,
    data,
    error: membersError,
    isError: isMembersError,
  } = useQuery("getMembersApi", getMembersApi, {
    refetchOnWindowFocus: false,
    retry: 2, // Retry failed requests 2 times
    retryDelay: 1000, // Wait 1 second between retries
    onError: (error) => {
      console.error("Members API Error:", error);
    },
  });

  const ourMembersBannerResult = useQuery(
    "our-members-banner",
    ourMembersBannerGet,
    {
      refetchOnWindowFocus: false,
      retry: 2,
      retryDelay: 1000,
      onError: (error) => {
        console.error("Banner API Error:", error);
        // Don't break the app if banner fails
      },
    }
  );

  //PAGINATION LOGIC
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [listOfMembers, setListOfMembers] = useState([]);

  // Safe array access for pagination
  const safeListOfMembers = Array.isArray(listOfMembers) ? listOfMembers : [];
  let pages = [];

  for (
    let i = 1;
    i <= Math.ceil(safeListOfMembers.length / postsPerPage);
    i++
  ) {
    pages.push(i);
  }

  //PAGINATION LOGIC
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const searchHandler = () => {
    try {
      const searchPattern = new RegExp(searchValue, "i");
      const result = safeListOfMembers.filter(
        (item) => item?.name?.search(searchPattern) >= 0
      );
      return result;
    } catch (error) {
      console.error("Search error:", error);
      return safeListOfMembers;
    }
  };

  const searchResult = searchHandler();
  const paginatedData =
    searchResult?.slice(firstPostIndex, lastPostIndex) || [];

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setListOfMembers(data);
    } else if (data) {
      // Handle case where data is not an array
      console.warn("Expected array but got:", typeof data);
      setListOfMembers([]);
    }
  }, [data]);

  useEffect(() => {
    if (searchValue.length !== 0) {
      setCurrentPage(1);
    }
  }, [searchValue]);

  // Error state rendering
  if (isMembersError) {
    return (
      <UIProvider>
        <div className="members">
          <Subscribe />
          <NewNavBar />
          <div
            className="error-container"
            style={{
              padding: "40px",
              textAlign: "center",
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Unable to Load Members</h2>
            <p>
              We're experiencing technical difficulties. Please try again later.
            </p>
            <p style={{ color: "#666", fontSize: "14px" }}>
              Error: {membersError?.message || "Unknown error occurred"}
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Refresh Page
            </button>
          </div>
          <Wall />
          <Footer />
        </div>
      </UIProvider>
    );
  }

  return (
    <UIProvider>
      <Loader loading={isLoading} />
      <div className="members">
        <Subscribe />
        <NewNavBar />

        <NewImageBanner
          image={ourMembersBannerResult?.data?.banner_image || backImage}
          header={"Our Members"}
          details={["See our esteemed members across the country"]}
        />

        {/* Safe Adverts component with error boundary */}
        <SafeAdverts />

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

            {/* Enhanced content rendering with better error handling */}
            {paginatedData.length > 0 ? (
              <div className="flex">
                {paginatedData.map((item, index) => (
                  <div
                    className="card"
                    key={item?.id || item?.name || index}
                    id={item?.name}
                  >
                    <div className="card-item">
                      <span className="light">
                        {item?.name || "Company Name Not Available"}
                      </span>
                      <br />

                      <span style={{ fontWeight: "600" }}>Description</span>
                      <span className="light">
                        {item?.description || "No description available"}
                      </span>
                    </div>
                    <div className="card-item">
                      <span className="light">
                        {item?.website ? (
                          <a
                            href={
                              item.website.startsWith("http")
                                ? item.website
                                : `https://${item.website}`
                            }
                            target={"_blank"}
                            rel={"noreferrer"}
                          >
                            {item.website}
                          </a>
                        ) : (
                          "Website not available"
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px" }}>
                {isLoading ? (
                  <p>Loading members...</p>
                ) : (
                  <h1>No company found</h1>
                )}
              </div>
            )}
          </div>
        </div>

        {/* PAGINATION LOGIC with safe array access */}
        {searchValue.length === 0 && pages.length > 1 ? (
          <div className="pagination">
            {pages.slice(0, 7).map((page, index) => {
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

            {currentPage >= 7 && currentPage < pages.length ? (
              <button
                onClick={() => {
                  if (currentPage >= pages.length) return;
                  setCurrentPage((oldState) => oldState + 1);
                }}
              >
                Next
              </button>
            ) : null}
          </div>
        ) : null}

        <Wall />
        <Footer />
      </div>
    </UIProvider>
  );
}

export default LatestMembers;
