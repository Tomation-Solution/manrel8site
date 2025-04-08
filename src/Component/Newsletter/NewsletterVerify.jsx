import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { publicCmsRequest } from "../../utils/axios-utils";
import { ThemeProvider } from "@mui/system";
import { UIProvider } from "../../Ui";
import theme from "../../Styles/theme/Theme";
import Subscribe from "../Subscribe/Subscribe";
import NewNavBar from "../NewNavBar/NewNavBar";

export default function NewsletterVerify() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading"); // 'loading', 'success', 'error'
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        const token = searchParams.get("token");
        const ref = searchParams.get("ref");
        if (!token || !ref) {
          setStatus("error");
          setMessage("Missing token or reference in the verification link.");
          return;
        }

        const res = await publicCmsRequest.post(
          `/services/newsletter-email-verification?token=${token}&ref=${ref}`
        );
        setStatus("success");
        setMessage(res.data.message || "Email successfully verified.");
      } catch (err) {
        setStatus("error");
        setMessage(
          err.response?.data?.message ||
            "Verification failed. Invalid or expired link."
        );
      }
    };

    verify();
  }, [searchParams]);

  const containerStyle = {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
  };

  const iconStyle = {
    width: "48px",
    height: "48px",
  };

  const headingStyle = (color) => ({
    fontSize: "1.25rem",
    fontWeight: 600,
    color: color,
  });

  const messageStyle = {
    color: "#6b7280", // muted gray
    maxWidth: "400px",
    marginTop: "0.5rem",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#2b3513",
    color: "#ffffff",
    fontWeight: 500,
  };

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: "transparent",
    color: "#2b3513",
    border: "1px solid #2b3513",
  };

  return (
    <ThemeProvider theme={theme}>
      <UIProvider>
        {/* <Loader loading={isLoading} /> */}
        <div className="sectoral">
          <Subscribe />
          <NewNavBar />
          <div style={containerStyle}>
            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pop {
          0% { transform: scale(0.6); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        .pop {
          animation: pop 0.4s ease-out;
        }
      `}</style>

            {status === "loading" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  opacity: 0.8,
                }}
              >
                <Loader2
                  className="spin"
                  style={{ ...iconStyle, color: "#2b3513" }}
                />
                <p style={messageStyle}>Verifying your subscription...</p>
              </div>
            )}

            {status === "success" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <CheckCircle2
                  className="pop"
                  style={{ ...iconStyle, color: "green" }}
                />
                <h2 style={headingStyle("green")}>Success!</h2>
                <p style={messageStyle}>{message}</p>
                <button style={buttonStyle} onClick={() => navigate("/")}>
                  Return Home
                </button>
              </div>
            )}

            {status === "error" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <AlertCircle
                  className="pop"
                  style={{ ...iconStyle, color: "red" }}
                />
                <h2 style={headingStyle("red")}>Something went wrong</h2>
                <p style={messageStyle}>{message}</p>
                <button
                  style={outlineButtonStyle}
                  onClick={() => navigate("/")}
                >
                  Return Home
                </button>
              </div>
            )}
          </div>
        </div>
      </UIProvider>
    </ThemeProvider>
  );
}
