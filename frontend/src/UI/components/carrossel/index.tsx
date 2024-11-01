import { useEffect, useRef, useState } from "react";
//import { range } from "@/app/utils/range.ts";

import Controll from "./control.tsx";

export default ({ id, steps, errors = [] }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [errs, setErrs] = useState([]);
  const Carroselref = useRef(null);
  let stepsGroup: any = [];
  const step = useRef(0);
  //  var ErrorsRef = useRef([]);

  const handleJump = ({ indx, prefix, react }) => {
    // Jump in Jump
    if (indx) {
      step.current += -indx;
    } // Especific Jump
    else if (prefix) {
      step.current = -prefix;
    }

    Carroselref.current.style.left = `${600 * step.current}px`;

    // React
    if (react) {
      react(step.current);
    }
  };

  Object.entries(steps).forEach(([name, Component], indx) => {
    id
      ? stepsGroup.push(<Component id={id} key={indx} />)
      : stepsGroup.push(<Component key={indx} />);
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setErrs(Object.keys(errors));
    }
  }, [errors]);

  return (
    <div className="overflow-hidden w-[600px] h-[450px] bg-[#0B0D0D] rounded-[15px] border-2 border-solid border-[#141717] flex flex-col justify-between">
      <div className="relative w-[600px] h-[450px]">
        <div
          ref={Carroselref}
          className="absolute top-0 left-0 min-w-min min-h-min flex transition-all duration-300"
        >
          {stepsGroup}
        </div>
      </div>

      <Controll
        max={Object.values(steps).length}
        steps={Object.keys(steps)}
        current={step.current}
        jump={handleJump}
        errors={errs}
      />
    </div>
  );
};
