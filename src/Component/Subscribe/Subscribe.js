import React, {useState} from "react";
import Image from "../../images/div-sub.png";
import { useUIContext } from "../../Ui";
import CloseIcon from "@mui/icons-material/Close";
import "./Subscribe.scss";
import { useForm } from "react-hook-form";
import { FormError } from "../NewEvents/FormComponents";
import { useMutation } from "react-query";
import { postNewLetter } from "../../utils/csm-api-calls";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

function Subscribe() {
  const { subscribe, setSubscribe } = useUIContext();
  const [subscribeState, setSubscribeState] = useState("subscribed to MAN newsletter");
  const {
    register,
    handleSubmit,
      reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: ""
    },

  });

  const { mutate, isLoading } = useMutation(postNewLetter, {
    onMutate: () => {
      toast.info("subscribing to MAN newsletter");
    },
    onSuccess: () => {
      setSubscribeState("Subscribed successfully")
      reset()
      toast.success(subscribeState);
    },
    onError: (data) => {
      if (
        data?.message?.response?.data?.email[0] ===
        "subscribe to news letter with this email already exists."
      ) {
        toast.error("You're already subscribed to MANs Newsletter");
      } else {
        toast.error("failed to subscribe to MAN newsletter");
      }
    },
  });

  const onSubmitHandler = (data) => {
    mutate(data);
  };

  return (
    <>
      <Loader loading={isLoading} />
      {subscribe && (
        <div className="Subscribe">
          <div className="cover">
            <CloseIcon
              onClick={() => setSubscribe(false)}
              style={{ position: "absolute", top: "10px", right: "10px" }}
            />
            <div className="left">
              <img src={Image} alt="" />
            </div>
            <div className="right">
              <div className="huo">
                <h1>{subscribeState}</h1>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div>
                    {errors?.name && <FormError>invalid input</FormError>}
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name", {required: true})}
                    />
                  </div>
                  <div>
                    {errors?.email && <FormError>invalid input</FormError>}
                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register("email", {required: true})}
                    />
                  </div>
                  <button>SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Subscribe;
