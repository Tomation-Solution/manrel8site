import "./RevampedEventRegister.css";
import { AGMRegistrationModal } from "../../Component/Modals/AGMRegistrationModals/AGMModal";
import { useCustomFetcher } from "../../utils/customfetcher";
import { getAGMEvent } from "../../utils/csm-api-calls";
import EmptyState from "../../Component/EmptyState/EmptyState";

const RevampedEventRegister = () => {
  const { loadingState, isError, data } = useCustomFetcher(
    "agm-event-details",
    getAGMEvent
  );

  if (loadingState) {
    return <EmptyState header="loading data" />;
  }

  if (data?.length <= 0) {
    return <EmptyState header={`There seems to be nothing here`} />;
  }

  if (isError || !data) {
    return (
      <EmptyState
        header="Oops something went wrong"
        subHeader="try again later"
      />
    );
  }

  return (
    <>
      <AGMRegistrationModal eventId={data?.id} />
    </>
  );
};

export default RevampedEventRegister;
