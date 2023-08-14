import React from "react";

import "./PaymentModalComponent.scss";
import CloseIcon from "@mui/icons-material/Close";
import BackDrop from "../BackDrop/BackDrop";

function PaymentModalComponent({
  closefn,
  paystackfn,
  remitafn,
  interswitchfn,
  flutterwavefn,
}) {
  const paymentGateways = [
    {
      name: "Pay with Paystack",
      method: paystackfn,
      logo: "https://user-images.githubusercontent.com/15840315/50404115-817d1500-07a4-11e9-9c73-b248a369369e.png",
    },
    {
      name: "Pay with Remita",
      method: remitafn,
      logo: "https://th.bing.com/th/id/R.01675df194076aa944ca3840ca81282f?rik=EjQe1TpXTUgz3A&pid=ImgRaw&r=0",
    },
    {
      name: "Pay with Flutterwave",
      method: flutterwavefn,
      logo: "https://th.bing.com/th/id/R.48facc1965170f9b6fceaeebc8ca7ab1?rik=hRA21AsJHRWWLg&pid=ImgRaw&r=0",
    },
    {
      name: "Pay with Interswitch",
      method: interswitchfn,
      logo: "https://www.invc.news/wp-content/uploads/2020/06/interswitch-logo.jpg",
    },
  ];

  return (
    <>
      <BackDrop>
        <div className="payment-modal">
          <div className="closebtn" onClick={closefn}>
            <CloseIcon fontSize="10" />
          </div>

          <div className="paymentTypes">
            {paymentGateways?.map((item, index) => (
              <div
                className="paymentType"
                key={index}
                onClick={
                  item?.method ? item?.method : () => alert("unavailable")
                }
              >
                {item?.name}
                <img src={item?.logo} alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </BackDrop>
    </>
  );
}

export default PaymentModalComponent;
