import { months } from "@/app/utils/months.ts";
import { range } from "@/app/utils/range.ts";
import { Field, ErrorMessage } from "formik";
import { Birthdate } from "../styled";

export default () => {
  let Days = [],
    Months = [],
    Years = [];

  range(30, 1).map((itms, indx) => {
    Days.push(
      <option value={itms} key={indx}>
        {itms}
      </option>,
    );
  });

  months.map((itms, indx) => {
    Months.push(
      <option value={indx + 1} key={indx}>
        {itms}
      </option>,
    );
  });

  range(2024, 1960).map((itms, indx) => {
    Years.push(
      <option value={itms} key={indx}>
        {itms}
      </option>,
    );
  });

  return (
    <Birthdate>
      <div>
        <small>day</small>
        <Field
          component="select"
          name="day"
          className="w-full h-full text-[20px] bg-transparent text-white px-3 pt-4 outline-none cursor-pointer"
        >
          {Days}
        </Field>
      </div>
      <div>
        <small>month</small>
        <Field
          component="select"
          name="month"
          className="w-full h-full text-[20px] bg-transparent text-white px-3 pt-4 outline-none cursor-pointer"
        >
          {Months}
        </Field>
      </div>
      <div>
        <small>year</small>
        <Field
          component="select"
          name="year"
          className="w-full h-full text-[20px] bg-transparent text-white px-3 pt-4 outline-none cursor-pointer"
        >
          {Years}
        </Field>
      </div>
    </Birthdate>
  );
};
