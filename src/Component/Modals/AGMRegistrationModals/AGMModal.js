import "../../NewEvents/Modals.scss";
import { useState } from "react";
import VerifyMemberModal from "./VerifyMemberModal";
import ExhibitorModal from "./ExhibitorModal";
import VerifyMediaModal from "./VerifyMediaModal";
import GeneralRegistrationForm from "./GeneralRegistrationForm";
import { useEffect } from "react";
import {
  exhibitorBootsGetAll,
  luncheonPricesGetAll,
} from "../../../utils/csm-api-calls";
import Loader from "../../Loader/Loader";

export const AGMRegistrationModal = ({ eventId, closefn }) => {
  const [options, setoptions] = useState("member");
  const [lucheonExhibitorBoots, setLuncheonExihibitorBoots] = useState(null);

  useEffect(() => {
    Promise.all([luncheonPricesGetAll(), exhibitorBootsGetAll()])
      .then((result) => {
        const data = result.map((item) => {
          return item.data;
        });
        setLuncheonExihibitorBoots(data);
      })
      .catch((err) => console.log(err));
  }, []);

  let membersLuncheonPrice;
  let exhibitorsLuncheonPrice;
  let exhibitionBoots;

  if (lucheonExhibitorBoots) {
    membersLuncheonPrice = lucheonExhibitorBoots[0].find(
      (item) => item.type === "member"
    )?.price;
    exhibitorsLuncheonPrice = lucheonExhibitorBoots[0].find(
      (item) => item.type === "exhibitor"
    )?.price;
    exhibitionBoots = lucheonExhibitorBoots[1].map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
    }));
  }

  return (
    // <BackDrop>
    <div className="modal-cover">
      <div className="top">
        <h2 style={{ textAlign: "center" }}>
          Annual General Meeting Registration
        </h2>
        {/* <p style={{ textAlign: "center" }}>
            Let's start by entering your information.
          </p> */}

        <div className="agm">
          <div className="agm-select-card">
            <h4>Select Participant Type</h4>
            <br />

            <select
              value={options}
              onChange={(e) => setoptions(e.target.value)}
            >
              <option value={"member"}>Member</option>
              <option value={"exhibitor"}>Exhibitor</option>
              <option value={"exhibitor-participant"}>
                Exhibition Participant
              </option>
              <option value={"guest"}>Guest</option>
              <option value={"media"}>Media</option>
              <option value={"staff"}>Staff</option>
            </select>
          </div>
        </div>
      </div>

      {!lucheonExhibitorBoots ? (
        <Loader loading={true} />
      ) : (
        <section>
          {options === "member" ? (
            <VerifyMemberModal
              eventId={eventId}
              luncheonPrice={membersLuncheonPrice}
              type={options}
            />
          ) : null}
          {options === "exhibitor" ? (
            <ExhibitorModal
              eventId={eventId}
              luncheonPrice={exhibitorsLuncheonPrice}
              exhibitionBoots={exhibitionBoots}
              type={options}
            />
          ) : null}
          {options === "media" ? (
            <VerifyMediaModal eventId={eventId} type={options} />
          ) : null}
          {options === "guest" ? (
            <GeneralRegistrationForm eventId={eventId} type={options} />
          ) : null}
          {options === "staff" ? (
            <GeneralRegistrationForm eventId={eventId} type={options} />
          ) : null}
          {options === "exhibitor-participant" ? (
            <GeneralRegistrationForm eventId={eventId} type={options} />
          ) : null}
        </section>
      )}

      {/* <div className="closebtn" onClick={closefn}>
        <CloseIcon />
      </div> */}
    </div>
    // </BackDrop>
  );
};
