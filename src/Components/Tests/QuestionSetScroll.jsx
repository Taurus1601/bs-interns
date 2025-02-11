import React, { useEffect, useState } from "react";

//The questions section. Used for Scrollbar kind questions.
export const QuestionSetScroll = ({
  qNo,
  questionsData,
  result,
  setResult,
}) => {

  const [sliderValue, setSliderValue] = useState(3);

  const handleSliderChange = (event) => {
    const tempResult = {...result}
    tempResult[questionsData.id] = event.target.value
    setSliderValue(tempResult);
    setResult(tempResult)
  };

  return (
    <div className="w-full h-full pl-6 ">
      <div className="w-[90%] my-[0.7em] border-b-[2px] border-b-[#D6D6D6]">
        <h2 className="text-[1.3em] font-normal">
          {qNo + "." + " " + questionsData.question}
        </h2>

        <div className="relative mt-4 md:ml-7">
          <input
            id="labels-range-input"
            type="range"
            value={sliderValue[questionsData.id]}
            min="1"
            max="5"
            onChange={handleSliderChange}
            className="w-[100%] h-2 bg-gray-200 border-none rounded-lg cursor-pointer dark:bg-gray-700 md:w-[50%]"
          />

          <div className="w-[100%] h-6 relative mt-7 md:w-[50%]">
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-0 transform -translate-x-1/2 bottom-6">
              1
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-1/4 transform -translate-x-1/2 bottom-6">
              2
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-1/2 transform -translate-x-1/2 bottom-6">
              3
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-3/4 transform -translate-x-1/2 bottom-6">
              4
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-full transform translate-x-1/2 bottom-6">
              5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
