import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";
import { useField } from "formik";

const PhoneNumberInput = styled(PhoneInput)`
  width: 100%;
  height: 48px;
  border-radius: 10px;

  .flag-dropdown {
    background-color: #414238;
    border: 1px solid #414238;
  }

  .selected-flag.open {
    background: #414238;
  }

  .country:hover {
    background-color: #272822 !important;
  }

  .country-list {
    background-color: #414238;
    color: white;
  }

  .country:focus {
    background-color: #272822 !important;
  }

  .selected-flag.open {
    background-color: #272822 !important;
  }

  .selected-flag:focus {
    background-color: #414238;
  }

  .selected-flag:hover {
    background-color: #414238;
  }

  .form-control {
    width: 100%;
    height: 100%;
    background-color: #272822;
    border-radius: 10px;
    border: 2px dashed #414238;
    color: white;
  }
`;

export default () => {
  const [field, meta, helpers] = useField({ name: "phone" });

  const onchange = (e) => {
    helpers.setValue(`+${e.slice(0, 2)} (${e.slice(2, 4)}) ${e.slice(4, 14)}`);
  };

  return (
    <div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">
      <h1 className="font-RobotoMono text-[24px] text-white">
        what your phone?
      </h1>
      <p className="font-RobotoMono text-[14px] text-white opacity-70">
        This won't be public
      </p>
      <PhoneNumberInput
        inputProps={{ name: "phone" }}
        country={"br"}
        onChange={onchange}
      />
    </div>
  );
};
