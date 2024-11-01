import {
  ArrowRightIcon,
  CheckIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { range } from "@/app/utils/range.ts";

export default ({ steps, loading, current, max, jump, errors }) => {
  let left,
    right,
    center = [];
  const [step, setStep] = useState(0);

  const thisReact = (step) => {
    setStep(step);
  };

  // --| Left

  if (step !== 0) {
    left = (
      <ArrowLeftIcon
        className="w-[20px] h-[20px] text-[#084CCF] cursor-pointer"
        onClick={() => jump({ indx: -1, react: thisReact })}
      />
    );
  }

  // --| Center

  steps.map((stps, indx) => {
    if (-indx === step) {
      // #5c0421
      center.push(
        <button
          className="w-[12px] h-[12px] bg-[#084CCF] rounded-full"
          type="button"
          onClick={() => jump({ prefix: indx, react: thisReact })}
          key={indx}
        />,
      );
    } else {
      if (errors.includes(stps)) {
        center.push(
          <button
            className="w-[9px] h-[9px] bg-[#5c0421] rounded-full"
            type="button"
            onClick={() => jump({ prefix: indx, react: thisReact })}
            key={indx}
          />,
        );
      } else {
        center.push(
          <button
            className="w-[9px] h-[9px] bg-[#04225c] rounded-full"
            type="button"
            onClick={() => jump({ prefix: indx, react: thisReact })}
            key={indx}
          />,
        );
      }
    }
  });

  // --| Right
  if (step === -max) {
    right = (
      <button type="submit">
        <CheckIcon className="w-[20px] h-[20px] text-[#08cf29]" />
      </button>
    );
  } else {
    right = (
      <ArrowRightIcon
        className="w-[20px] h-[20px] text-[#084CCF]  cursor-pointer"
        onClick={() => jump({ indx: 1, react: thisReact })}
      />
    );
  }

  return (
    <div className="p-2 w-full h-12 flex bg-black justify-between items-center">
      <div className="w-10 h-full flex justify-end items-center">{left}</div>
      <div className="flex gap-2 items-center">{center}</div>
      <div className="w-10 h-full flex justify-start items-center">{right}</div>
    </div>
  );
};
