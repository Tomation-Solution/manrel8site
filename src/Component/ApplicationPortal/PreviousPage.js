import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import PlusIcon from "../../images/new-images/PlusIcon.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getFormOne, submitFormOne } from "../../utils/api-calls";
import { SelectImage } from "../../utils/ExtraComponents";
import Loader from "../Loader/Loader";
import list_of_states from "../../constants/list_of_states";
import states_with_lgas from "../../constants/states_with_lga";

const schema = yup.object({
  capacity_type: yup.string().required(),
  name_of_company: yup.string().required(),
  cac_registration_number: yup.string().required(),
  tax_identification_number: yup.string().required(),
  corporate_office_addresse: yup.string().required(),
  office_bus_stop: yup.string().required(),
  office_city: yup.string().required(),
  office_lga: yup.string().required(),
  office_state: yup.string().required(),
  postal_addresse: yup.string().required(),
  telephone: yup.string().max(13).required(),
  email_addresse: yup.string().email().required(),
  website: yup.string().url().required(),
  factoru_details: yup.string().required(),
  legal_status_of_company: yup.string().required(),
  number_of_female_permanent_staff: yup
    .number()
    .positive()
    .integer()
    .required(),
  number_of_male_permanent_staff: yup.number().positive().integer().required(),
  number_of_male_expatriates: yup.number().positive().integer().required(),
  number_of_female_expatriates: yup.number().positive().integer().required(),
  local_share_capital: yup.number().positive().integer().required(),
  foreign_share_capital: yup.number().positive().integer().required(),
  ownership_structure_equity_local: yup
    .number()
    .positive()
    .integer()
    .min(0)
    .max(100)
    .required(),
  ownership_structure_equity_foregin: yup
    .number()
    .positive()
    .integer()
    .min(0)
    .max(100)
    .required(),
  total_value_of_land_asset: yup.number().positive().integer().required(),
  total_value_of_building_asset: yup.number().positive().integer().required(),
  total_value_of_other_asset: yup.number().positive().integer().required(),
  installed_capacity: yup
    .number()
    .positive()
    .integer()
    .min(0)
    .max(100)
    .required(),
  are_your_product_exported: yup.string().required(),
  company_contact_infomation: yup.string().required(),
  designation: yup.string().required(),
  name_of_md_or_ceo_of_company: yup.string().required(),
  selectdate_of_registration: yup.string().required(),
  all_roduct_manufactured: yup
    .array()
    .of(
      yup.object().shape({
        product_manufactured: yup.string().required(),
        certificates: yup.string().required(),
      })
    )
    .min(1, "Please add atleast one manufactured product"),
  all_raw_materials_used: yup
    .array()
    .of(
      yup.object().shape({
        major_raw_materials: yup.string().required(),
        major_raw_materials2: yup.string().required(),
      })
    )
    .min(1, "Please add atleast one material used"),
});

const PreviousPage = ({ nextfn }) => {
  const [salesTurnover, setSalesTurnover] = useState("current");
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      capacity_type: "",
      name_of_company: "",
      cac_registration_number: "",
      tax_identification_number: "",
      corporate_office_addresse: "",
      office_bus_stop: "",
      office_city: "",
      office_lga: "",
      office_state: "",
      postal_addresse: "",
      telephone: "",
      email_addresse: "",
      website: "",
      factoru_details: "",
      legal_status_of_company: "",
      number_of_female_permanent_staff: "",
      number_of_male_permanent_staff: "",
      number_of_male_expatriates: "",
      number_of_female_expatriates: "",
      local_share_capital: "",
      foreign_share_capital: "",
      ownership_structure_equity_local: "",
      ownership_structure_equity_foregin: "",
      total_value_of_land_asset: "",
      total_value_of_building_asset: "",
      total_value_of_other_asset: "",
      installed_capacity: "",
      current_sales_turnover: "",
      projected_sales_turnover: "",
      are_your_product_exported: "",
      company_contact_infomation: "",
      designation: "",
      upload_signature: "",
      name_of_md_or_ceo_of_company: "",
      selectdate_of_registration: "",
      all_roduct_manufactured: [
        {
          product_manufactured: "New Product Name",
          certificates: "New Product Value",
        },
      ],
      all_raw_materials_used: [
        {
          major_raw_materials: "New Material Name",
          major_raw_materials2: "New Material Value",
        },
      ],
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "all_roduct_manufactured",
  });

  const {
    fields: materailField,
    append: materailAppend,
    remove: materialRemove,
  } = useFieldArray({
    control,
    name: "all_raw_materials_used",
  });

  const {
    data: formOneData,
    isLoading: formLoading,
    isFetching,
    isError,
  } = useQuery("formone-details", getFormOne, {
    refetchOnWindowFocus: false,
    select: (data) => data.results[0],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    let defualts;
    if (formOneData) {
      defualts = {
        capacity_type: formOneData?.capacity_type,
        name_of_company: formOneData?.name_of_company,
        cac_registration_number: formOneData?.cac_registration_number,
        tax_identification_number: formOneData?.tax_identification_number,
        corporate_office_addresse: formOneData?.corporate_office_addresse,
        office_bus_stop: formOneData?.office_bus_stop,
        office_city: formOneData?.office_city,
        office_lga: formOneData?.office_lga,
        office_state: formOneData?.office_state,
        postal_addresse: formOneData?.postal_addresse,
        telephone: formOneData?.telephone,
        email_addresse: formOneData?.email_addresse,
        website: formOneData?.website,
        factoru_details: formOneData?.factoru_details,
        legal_status_of_company: formOneData?.legal_status_of_company,
        number_of_male_permanent_staff:
          formOneData?.number_of_male_permanent_staff,
        number_of_female_permanent_staff:
          formOneData?.number_of_female_permanent_staff,
        number_of_male_expatriates: formOneData?.number_of_male_expatriates,
        number_of_female_expatriates: formOneData?.number_of_female_expatriates,
        local_share_capital: formOneData?.local_share_capital,
        foreign_share_capital: formOneData?.foreign_share_capital,
        ownership_structure_equity_local:
          formOneData?.ownership_structure_equity_local,
        ownership_structure_equity_foregin:
          formOneData?.ownership_structure_equity_foregin,
        total_value_of_land_asset: formOneData?.total_value_of_land_asset,
        total_value_of_building_asset:
          formOneData?.total_value_of_building_asset,
        total_value_of_other_asset: formOneData?.total_value_of_building_asset,
        installed_capacity: formOneData?.installed_capacity,
        are_your_product_exported: formOneData?.are_your_product_exported,
        company_contact_infomation: formOneData?.company_contact_infomation,
        designation: formOneData?.designation,
        name_of_md_or_ceo_of_company: formOneData?.name_of_md_or_ceo_of_company,
        selectdate_of_registration: formOneData?.selectdate_of_registration,
        all_roduct_manufactured: formOneData?.all_roduct_manufactured,
        all_raw_materials_used: formOneData?.all_raw_materials_used,
        current_sales_turnover: formOneData?.current_sales_turnover,
        projected_sales_turnover: formOneData?.projected_sales_turnover,
      };
      if (formOneData?.projected_sales_turnover.length > 1) {
        setSalesTurnover("projected");
      } else {
        setSalesTurnover("current");
      }
      reset(defualts);
    }
  }, [reset, formOneData]);

  const { mutate, isLoading } = useMutation((data) => submitFormOne(data), {
    onMutate: () => {
      toast.info("saving appliction details", {
        icon: false,
      });
    },
    onSuccess: () => {
      toast.success("application details saved", {
        icon: false,
      });
      queryClient.invalidateQueries("formone-details");
    },
    onError: () => {
      toast.error("couldnt svae application details", {
        icon: false,
      });
    },
  });

  // const onChangeHandler = (key, value) => {
  //   setValue(key, value, {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //     shouldTouch: true,
  //   });
  // };

  const onSubmitHandler = (data) => {
    let {
      upload_signature,
      all_raw_materials_used,
      all_roduct_manufactured,
      current_sales_turnover,
      projected_sales_turnover,
      ...payload
    } = data;

    upload_signature = upload_signature[0];

    const formData = new FormData();

    if (salesTurnover === "current") {
      formData.append("current_sales_turnover", current_sales_turnover);
    }
    formData.append("projected_sales_turnover", projected_sales_turnover);

    Object.keys(payload)?.forEach((key) => formData.append(key, payload[key]));
    if (!formOneData?.upload_signature) {
      formData.append("upload_signature", upload_signature);
    }
    formData.append(
      "all_roduct_manufactured",
      JSON.stringify(all_roduct_manufactured)
    );
    formData.append(
      "all_raw_materials_used",
      JSON.stringify(all_raw_materials_used)
    );

    mutate(formData);
  };

  const signatureImage = formOneData?.upload_signature;

  return (
    <>
      {formLoading || isFetching || isLoading ? (
        <Loader loading={formLoading || isLoading || isFetching} />
      ) : !isError ? (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="status-track">
            <div className="status-item">1</div>
            <div className="status-separator"></div>
            <div className="status-item dotted">2</div>
          </div>
          <div className="half-input">
            <label>
              {errors?.name_of_company && <h5>Invalid input</h5>}
              Name of Company
              <input
                type={"text"}
                {...register("name_of_company", { required: true })}
              />
            </label>
            <label>
              {errors?.cac_registration_number && <h5>Invalid input</h5>}
              CAC Registration Number
              <input
                type={"text"}
                {...register("cac_registration_number", {
                  required: true,
                })}
              />
            </label>
          </div>
          <div className="half-input">
            <label>
              {errors?.tax_identification_number && <h5>Invalid input</h5>}
              Tax Identification Number (TIN)
              <input
                type={"text"}
                {...register("tax_identification_number", {
                  required: true,
                })}
              />
            </label>
            <label>
              {errors?.corporate_office_addresse && <h5>Invalid input</h5>}
              Corporate office Address
              <input
                type={"text"}
                {...register("corporate_office_addresse", {
                  required: true,
                })}
              />
            </label>
          </div>
          <div className="half-input">
            <label>
              {errors?.office_bus_stop && <h5>Invalid input</h5>}
              Nearest Bus Stop/ Community
              <input
                type={"text"}
                {...register("office_bus_stop", { required: true })}
              />
            </label>
            <label>
              {errors?.office_city && <h5>Invalid input</h5>}
              Office City
              <input
                type={"text"}
                {...register("office_city", { required: true })}
              />
            </label>
          </div>
          <div className="half-input">
            <label>
              {errors?.office_state && <h5>Invalid input</h5>}
              Office State
              <select
                defaultValue=""
                {...register("office_state", { required: true })}
              >
                <option disabled value="">
                  select an option
                </option>
                {list_of_states.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              {errors?.office_lga && <h5>Invalid input</h5>}
              Office LGA
              <select
                defaultValue=""
                {...register("office_lga", { required: true })}
              >
                <option disabled value="">
                  select an option
                </option>
                {states_with_lgas
                  .find((item) => item.name === watch("office_state"))
                  ?.lgas.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
              </select>
            </label>
          </div>
          <div className="half-input">
            <label>
              {errors?.postal_addresse && <h5>Invalid input</h5>}
              Postal Address (If Any)
              <input
                type={"text"}
                {...register("postal_addresse", { required: true })}
              />
            </label>
            <label>
              {errors?.telephone && <h5>Invalid input</h5>}
              Telephone Number(s) Inc. Mobile
              <input
                type={"text"}
                {...register("telephone", { required: true })}
              />
            </label>
          </div>
          <div className="half-input">
            <label>
              {errors?.email_addresse && <h5>Invalid input</h5>}
              Email Address
              <input
                type={"text"}
                required
                {...register("email_addresse", { required: true })}
              />
            </label>
            <label>
              {errors?.website && <h5>Invalid input</h5>}
              Website Address
              <input
                type={"text"}
                {...register("website", { required: true })}
              />
            </label>
          </div>
          <div className="half-input">
            <label>
              {errors?.factoru_details && <h5>Invalid input</h5>}
              Email AddressFactory Details(Phone No., Email)
              <input
                type={"text"}
                {...register("factoru_details", { required: true })}
              />
            </label>
            <label>
              {errors?.legal_status_of_company && <h5>Invalid input</h5>}
              Legal Status of Company
              <select
                defaultValue=""
                // defaultValue="sole_proprietorship"
                {...register("legal_status_of_company", { required: true })}
              >
                <option disabled value="">
                  select an option
                </option>
                <option value="sole_proprietorship">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="private_company">Private Company</option>
                <option value="public_limited_company">
                  Public Limited Company
                </option>
              </select>
            </label>
          </div>
          {fields.map((fields, index) => (
            <section key={fields.id}>
              <div className="half-input">
                <label>
                  Products Manufactured
                  <input
                    type={"text"}
                    {...register(
                      `all_roduct_manufactured.${index}.product_manufactured`,
                      {
                        required: true,
                      }
                    )}
                  />
                </label>
                <label>
                  SON/ ISON/NAFDAC Certificates (If Any)
                  <input
                    type={"text"}
                    {...register(
                      `all_roduct_manufactured.${index}.certificates`,
                      {
                        required: true,
                      }
                    )}
                  />
                </label>
              </div>
              <div className="delete-btn">
                <button onClick={() => remove(index)}>Delete</button>
              </div>
            </section>
          ))}
          <h5 style={{ textAlign: "center" }}>
            {errors?.all_roduct_manufactured?.message}
          </h5>
          <div className="add-more">
            <img
              src={PlusIcon}
              alt=""
              onClick={() =>
                append({
                  product_manufactured: "New Product",
                  certificates: "New Product Value",
                })
              }
            />
            <p>Add Product Manufactured</p>
          </div>

          {materailField.map((fields, index) => (
            <section key={fields.id}>
              <div className="half-input">
                <label>
                  Major Raw Materials Used(Indicate if Impoted/HS Code)
                  <input
                    type={"text"}
                    {...register(
                      `all_raw_materials_used.${index}.major_raw_materials`,
                      {
                        required: true,
                      }
                    )}
                  />
                </label>
                <label>
                  % of Local Raw Materials
                  <input
                    type={"text"}
                    {...register(
                      `all_raw_materials_used.${index}.major_raw_materials2`,
                      {
                        required: true,
                      }
                    )}
                  />
                </label>
              </div>
              <div className="delete-btn">
                <button onClick={() => materialRemove(index)}>Delete</button>
              </div>
            </section>
          ))}
          <h5 style={{ textAlign: "center" }}>
            {errors?.all_raw_materials_used?.message}
          </h5>
          <div className="add-more">
            <img
              src={PlusIcon}
              alt=""
              onClick={() =>
                materailAppend({
                  major_raw_materials: "New Material Name",
                  major_raw_materials2: "New Material Value",
                })
              }
            />
            <p>Add Raw Materials Used</p>
          </div>

          <div className="half-input">
            <label>
              {errors?.number_of_male_permanent_staff && <h5>Invalid input</h5>}
              Number of Male Permanent Staff
              <input
                type={"number"}
                min={0}
                {...register("number_of_male_permanent_staff", {
                  required: true,
                })}
              />
            </label>
            <label>
              {errors?.number_of_female_permanent_staff && (
                <h5>Invalid input</h5>
              )}
              Number of Female Permanent Staff
              <input
                type={"number"}
                min={0}
                {...register("number_of_female_permanent_staff", {
                  required: true,
                })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.number_of_male_expatriates && <h5>Invalid input</h5>}
              Number of Male Expatriates
              <input
                type={"number"}
                min={0}
                {...register("number_of_male_expatriates", { required: true })}
              />
            </label>
            <label>
              {errors?.number_of_female_expatriates && <h5>Invalid input</h5>}
              Number of Female Expatriates
              <input
                type={"number"}
                min={0}
                {...register("number_of_female_expatriates", {
                  required: true,
                })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.local_share_capital && <h5>Invalid input</h5>}
              Local Share Capital
              <input
                type={"number"}
                min={0}
                {...register("local_share_capital", { required: true })}
              />
            </label>
            <label>
              {errors?.foreign_share_capital && <h5>Invalid input</h5>}
              Foreign Share Capital
              <input
                type={"number"}
                min={0}
                {...register("foreign_share_capital", { required: true })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.ownership_structure_equity_local && (
                <h5>Invalid input</h5>
              )}
              Ownership Structure Equity(local; range:0-100)
              <input
                type={"number"}
                min={0}
                max={100}
                {...register("ownership_structure_equity_local", {
                  required: true,
                })}
              />
            </label>
            <label>
              {errors?.ownership_structure_equity_foregin && (
                <h5>Invalid input</h5>
              )}
              Ownership Structure Equity(Foreign; range:0-100)
              <input
                type={"number"}
                min={0}
                max={100}
                {...register("ownership_structure_equity_foregin", {
                  required: true,
                })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.total_value_of_land_asset && <h5>Invalid input</h5>}
              Total Value of Land Asset
              <input
                type={"number"}
                min={0}
                {...register("total_value_of_land_asset", {
                  required: true,
                })}
              />
            </label>
            <label>
              {errors?.total_value_of_building_asset && <h5>Invalid input</h5>}
              Total Value of Building Asset
              <input
                type={"number"}
                min={0}
                {...register("total_value_of_building_asset", {
                  required: true,
                })}
              />
            </label>
          </div>

          <h4 style={{ color: "#2b3513", textAlign: "center" }}>
            Select Installed Capacity Type
          </h4>
          <div className="installed-style">
            {errors?.capacity_type && <h5>Invalid input</h5>}
            <label>
              KG
              <input
                type="radio"
                value={"kg"}
                {...register("capacity_type", { required: true })}
              />
            </label>

            <label>
              TON
              <input
                type="radio"
                value={"ton"}
                {...register("capacity_type", { required: true })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.total_value_of_other_asset && <h5>Invalid input</h5>}
              Total Value of Other Asset
              <input
                type={"number"}
                min={0}
                {...register("total_value_of_other_asset", {
                  required: true,
                })}
              />
            </label>

            <label>
              {errors?.installed_capacity && <h5>Invalid input</h5>}
              Installed capacity(In tons, Kg; range:0-100)
              <input
                type={"number"}
                min={0}
                max={100}
                {...register("installed_capacity", { required: true })}
              />
            </label>
          </div>

          <h4 style={{ color: "#2b3513", textAlign: "center" }}>
            Select a Sales Turnover Type
          </h4>
          <div className="installed-style">
            <label>
              Current
              <input
                type="radio"
                value={"current"}
                name="installed_type"
                checked={salesTurnover === "current"}
                onChange={(e) => setSalesTurnover(e.target.value)}
              />
            </label>

            <label>
              Projected
              <input
                type="radio"
                value={"projected"}
                name="installed_type"
                checked={salesTurnover === "projected"}
                onChange={(e) => setSalesTurnover(e.target.value)}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.current_sales_turnover && <h5>Invalid input</h5>}
              Current Sales Turnover (As stated in your lastest audited account)
              <input
                type={"number"}
                min={100000000}
                disabled={salesTurnover === "current" ? false : true}
                required={salesTurnover === "current" ? true : false}
                {...register("current_sales_turnover")}
              />
            </label>
            <label>
              {errors?.projected_sales_turnover && <h5>Invalid input</h5>}
              Projected Sales Turnover (As stated in your business plan)
              <input
                type={"number"}
                min={100000000}
                disabled={salesTurnover === "projected" ? false : true}
                required={salesTurnover === "projected" ? true : false}
                {...register("projected_sales_turnover", {
                  required: true,
                })}
              />
            </label>
          </div>

          <label>
            {errors?.are_your_product_exported && <h5>Invalid input</h5>}
            Are your products exported?
            <select
              defaultValue=""
              {...register("are_your_product_exported", {
                required: true,
              })}
            >
              <option disabled value="">
                select an option
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </label>

          <div className="half-input">
            <label>
              {errors?.company_contact_infomation && <h5>Invalid input</h5>}
              Company’s Contact (Representative)
              <input
                type={"text"}
                {...register("company_contact_infomation", {
                  required: true,
                })}
              />
            </label>

            <label>
              {errors?.designation && <h5>Invalid input</h5>}
              Designation
              <input
                type={"text"}
                {...register("designation", { required: true })}
              />
            </label>
          </div>

          <h1 style={{ textDecoration: "underline" }}>Undertaking</h1>
          <p style={{ color: "#2b3513" }}>
            We undertake to pay promptly our annual subscriptions which is due
            on 1st January of each year and is based on our annual turnover as
            reflected in Audited Accounts, copy (to be submitted to the
            Association) for the preceding year; and also such levies as may be
            approved by the National or Branch Council of the Association
          </p>
          <br />
          <br />

          <label>
            {errors?.name_of_md_or_ceo_of_company && <h5>Invalid input</h5>}
            Name of MD/CEO of Company
            <input
              type={"text"}
              {...register("name_of_md_or_ceo_of_company", {
                required: true,
              })}
            />
          </label>

          <div className="half-input">
            <label>
              {errors?.selectdate_of_registration && <h5>Invalid input</h5>}
              Select Date of Registration
              <input
                type={"date"}
                {...register("selectdate_of_registration", {
                  required: true,
                })}
              />
            </label>

            <label>
              {errors?.upload_signature && <h5>Invalid input</h5>}
              Upload Signature
              <input
                type={"file"}
                accept="image/*"
                required={
                  formOneData?.upload_signature?.length > 5 ? false : true
                }
                {...register("upload_signature", { required: true })}
              />
            </label>
          </div>
          <SelectImage text={"signature"} image={signatureImage} />
          <h5 style={{ textAlign: "center" }}>
            {errors?.materails?.root?.message}
          </h5>
          <div className="btn-con align-center">
            <button disabled={isLoading}>Save & Continue Later</button>
            <button disabled={isLoading} onClick={nextfn}>
              Next
            </button>
          </div>
        </form>
      ) : (
        <h5>cant fetch application data kindly refresh</h5>
      )}
    </>
  );
};

export default PreviousPage;
