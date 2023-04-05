import "./PurchaseComp.scss";

export const PurchaseBanner = () => {
  return (
    <div className="purchase-banner">
      <h1>APPLICATION FOR MEMBERSHIP</h1>
      <p>
        Returning prospective member? <span>Click here to login.</span>
      </p>
    </div>
  );
};

export const PurchaseWarnBanner = ({ children }) => {
  return (
    <div className="purchase-warn-banner">
      <p>{children}</p>
    </div>
  );
};

export const ErrorMessage = ({ children }) => {
  return <small className="small-red-text">{children}</small>;
};

export const ProcessingPayment = ({ children }) => {
  return (
    <div className="processing-payment">
      <h1>Processing payment</h1>
      <p>{children}</p>
    </div>
  );
};
