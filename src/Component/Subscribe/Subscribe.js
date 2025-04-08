import React from "react";
import Image from "../../images/div-sub.png";
import { useUIContext } from "../../Ui";
import CloseIcon from "@mui/icons-material/Close";
import "./Subscribe.scss";
import { useForm } from "react-hook-form";
import { FormError } from "../NewEvents/FormComponents";
import { useMutation, useQuery } from "react-query";
import { newsletterUIGet, postNewLetter } from "../../utils/csm-api-calls";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

function Subscribe() {
  const { subscribe, setSubscribe } = useUIContext();
  const { data } = useQuery("newsletter-ui", newsletterUIGet, {
    refetchOnWindowFocus: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const { mutate, isLoading } = useMutation(postNewLetter, {
    onMutate: () => {
      toast.info("subscribing to MAN newsletter");
    },
    onSuccess: () => {
      toast.success("subscribed to MAN newsletter");
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
    reset();
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
              <img src={data?.form_image || Image} alt="" />
            </div>
            <div className="right">
              <div className="huo">
                <h1>Subscribe to our Newsletter</h1>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "100%",
                  }}
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div>
                    {errors?.name && <FormError>invalid input</FormError>}
                    <input
                      style={{ width: "100%", fontSize: "14px" }}
                      type="text"
                      placeholder="Full Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div>
                    {errors?.email && <FormError>invalid input</FormError>}
                    <input
                      style={{ width: "100%", fontSize: "14px" }}
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
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
