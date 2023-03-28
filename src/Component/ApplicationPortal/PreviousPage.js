import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import PlusIcon from "../../images/new-images/PlusIcon.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getFormOne, submitFormOne } from "../../utils/api-calls";

const schema = yup.object({
  name_of_company: yup.string().required(),
  cac_registration_number: yup.string().required(),
  tax_identification_number: yup.string().required(),
  corporate_office_addresse: yup.string().required(),
  office_bus_stop: yup.string().required(),
  office_city: yup.string().required(),
  office_lga: yup.string().required(),
  office_state: yup.string().required(),
  postal_addresse: yup.string().required(),
  telephone: yup.string().required(),
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
  local_share_capital: yup.string().required(),
  foreign_share_capital: yup.string().required(),
  ownership_structure_equity_local: yup.string().required(),
  ownership_structure_equity_foregin: yup.string().required(),
  total_value_of_land_asset: yup.string().required(),
  total_value_of_building_asset: yup.string().required(),
  total_value_of_other_asset: yup.string().required(),
  installed_capacity: yup.string().required(),
  current_sales_turnover: yup.string().required(),
  projected_sales_turnover: yup.string().required(),
  are_your_product_exported: yup.string().required(),
  company_contact_infomation: yup.string().required(),
  designation: yup.string().required(),
  name_of_md_or_ceo_of_company: yup.string().required(),
  selectdate_of_registration: yup.string().required(),
});

const PreviousPage = ({ nextfn }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
      name_of_md_or_ceo_of_company: "",
      selectdate_of_registration: "",
      all_roduct_manufactured: [
        { product_manufactured: "product name", certificates: "value info" },
      ],
      all_raw_materials_used: [
        {
          major_raw_materials: "materials_name",
          major_raw_materials2: "materails_value",
        },
      ],
    },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "all_roduct_manufactured",
    rules: {
      required: "Please add atleast one manufactured product",
    },
  });

  const {
    fields: materailField,
    append: materailAppend,
    remove: materialRemove,
  } = useFieldArray({
    control,
    name: "all_raw_materials_used",
    rules: {
      required: "Please add atleast one material used",
    },
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

  // if (formOneData) {
  //   console.log(formOneData);
  // }

  useEffect(() => {
    let defualts;
    if (formOneData) {
      defualts = {
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
        current_sales_turnover: formOneData?.current_sales_turnover,
        projected_sales_turnover: formOneData?.projected_sales_turnover,
        are_your_product_exported: formOneData?.are_your_product_exported,
        company_contact_infomation: formOneData?.company_contact_infomation,
        designation: formOneData?.designation,
        name_of_md_or_ceo_of_company: formOneData?.name_of_md_or_ceo_of_company,
        selectdate_of_registration: formOneData?.selectdate_of_registration,
        // all_roduct_manufactured: JSON.parse(formOneData?.all_roduct_manufactured),
      };
      // const datax = formOneData?.all_roduct_manufactured;
      // console.log(JSON.parse(datax));
      // setValue("all_roduct_manufactured", formOneData?.all_roduct_manufactured);
      reset(defualts);
    }
  }, [reset, formOneData, setValue]);

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
    },
    onError: () => {
      toast.error("couldnt svae application details", {
        icon: false,
      });
    },
  });

  const onSubmitHandler = (data) => {
    let {
      upload_signature,
      all_raw_materials_used,
      all_roduct_manufactured,
      ...payload
    } = data;

    upload_signature = upload_signature[0];
    const formData = new FormData();
    Object.keys(payload)?.forEach((key) => formData.append(key, payload[key]));
    formData.append("upload_signature", upload_signature);

    mutate(formData);
  };

  return (
    <>
      {formLoading || isFetching ? (
        <h5>Loading...</h5>
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
              Office Bus stop
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
              {errors?.office_lga && <h5>Invalid input</h5>}
              Office LGA
              <input
                type={"text"}
                {...register("office_lga", { required: true })}
              />
            </label>
            <label>
              {errors?.office_state && <h5>Invalid input</h5>}
              Office State
              <input
                type={"text"}
                {...register("office_state", { required: true })}
              />
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
            {errors?.all_roduct_manufactured?.root?.message}
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
            {errors?.all_raw_materials_used?.root?.message}
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
              {errors?.number_of_male_permanent && <h5>Invalid input</h5>}
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
              {errors?.number_of_female_permanent && <h5>Invalid input</h5>}
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
                type={"text"}
                {...register("local_share_capital", { required: true })}
              />
            </label>
            <label>
              {errors?.foreign_share_capital && <h5>Invalid input</h5>}
              Foreign Share Capital
              <input
                type={"text"}
                {...register("foreign_share_capital", { required: true })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.ownership_structure_equity_local && (
                <h5>Invalid input</h5>
              )}
              Ownership Structure Equity(local)
              <input
                type={"text"}
                {...register("ownership_structure_equity_local", {
                  required: true,
                })}
              />
            </label>
            <label>
              {errors?.ownership_structure_equity_foregin && (
                <h5>Invalid input</h5>
              )}
              Ownership Structure Equity(Foreign)
              <input
                type={"text"}
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
                type={"text"}
                {...register("total_value_of_land_asset", {
                  required: true,
                })}
              />
            </label>
            <label>
              {errors?.total_value_of_building_asset && <h5>Invalid input</h5>}
              Total Value of Building Asset
              <input
                type={"text"}
                {...register("total_value_of_building_asset", {
                  required: true,
                })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.total_value_of_other_asset && <h5>Invalid input</h5>}
              Total Value of Other Asset
              <input
                type={"text"}
                {...register("total_value_of_other_asset", {
                  required: true,
                })}
              />
            </label>
            <label>
              {errors?.installed_capacity && <h5>Invalid input</h5>}
              Installed capacity(In tons, Kg, etc)
              <input
                type={"text"}
                {...register("installed_capacity", { required: true })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.current_sales_turnover && <h5>Invalid input</h5>}
              Current Sales Turnover
              <input
                type={"text"}
                {...register("current_sales_turnover", { required: true })}
              />
            </label>
            <label>
              {errors?.projected_sales_turnover && <h5>Invalid input</h5>}
              Projected Sales Turnover
              <input
                type={"text"}
                {...register("projected_sales_turnover", {
                  required: true,
                })}
              />
            </label>
          </div>

          <div className="half-input">
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
            <label>
              {errors?.company_contact_infomation && <h5>Invalid input</h5>}
              Company’s contact information
              <input
                type={"text"}
                {...register("company_contact_infomation", {
                  required: true,
                })}
              />
            </label>
          </div>

          <div className="half-input">
            <label>
              {errors?.designation && <h5>Invalid input</h5>}
              Designation
              <input
                type={"text"}
                {...register("designation", { required: true })}
              />
            </label>
            <label>
              {errors?.name_of_md_or_ceo_of_company && <h5>Invalid input</h5>}
              Name of MD/CEO of Comoany
              <input
                type={"text"}
                {...register("name_of_md_or_ceo_of_company", {
                  required: true,
                })}
              />
            </label>
          </div>

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
                required
                {...register("upload_signature", { required: true })}
              />
            </label>
          </div>
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
