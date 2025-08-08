import { useState } from "react";

const Chart = () => {
  // common css for the input field
  const inputFieldsStyle =
    " border-none focus-none bg-gray-100 rounded-sm w-40 h-9";

  //   collecting the data from the input
  //   const [data1, setData1] = useState([]);
  //   const [data2, setData2] = useState([]);
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  // setting data by the button click to show on the graph/chart
  const [chartData, setChartData] = useState([]);

  console.log("horizontal data ", chartData);

  // set the value of the first field
  const handleValueOfTheFirstField = (amount) => {
    const value = Number(amount.target.value);
    setData1(value);
  };

  //   set the value of the second field
  const handleValueOfTheSecondField = (amount) => {
    const value = Number(amount.target.value);
    setData2(value);
  };

  // button functionality
  const button1 = () => {
    if (data1 && data1 !== "" && data2 && data2 !== "") {
      const objectForBody = {
        firstData: `${data1}`,
        secondData: `${data2}`,
      };

      setChartData([...chartData, objectForBody]);
    }
  };

  return (
    <div>
      <div className=" flex flex-col gap-5 m-10">
        <label htmlFor="dataField1" className=" flex flex-col gap-2">
          Data 1
          <div>
            <input
              type="number"
              name="dataField1"
              id="dataField1"
              className={`${
                inputFieldsStyle && inputFieldsStyle
              } focus:outline-none hide`}
              onChange={handleValueOfTheFirstField}
            />
          </div>
        </label>

        <label htmlFor="dataField2" className=" flex flex-col gap-2">
          Data2
          <div>
            <input
              type="number"
              name="dataField2"
              id="dataField2"
              className={`${
                inputFieldsStyle && inputFieldsStyle
              } focus:outline-none`}
              onChange={handleValueOfTheSecondField}
            />
          </div>
        </label>
        <button
          className=" border rounded-sm bg-gray-200 w-[70px] h-9 border-none"
          onClick={button1}
        >
          Show
        </button>
      </div>
      <div className=" p-10 flex justify-center items-center ">
        {/* <div className=" border-b border-b-black border-l  border-r-black  w-[680px] h-[410px]">
          {chartData?.map((numbers, index) => {
            return (
              <div
                key={index}
                className="text-3xl text-black flex justify-center items-center"
              >
                {numbers}
              </div>
            );
          })}
        </div> */}

        <div className="w-full">
          <div className="flex gap-4 w-[600px] border-b overflow-auto">
            {chartData?.map((number, i) => (
              <div
                key={i}
                className={`w-[${number.firstData}px] h-[${number.secondData}px] border overflow-auto`}
              ></div>
            ))}
          </div>
          {/* <div className=" border w-full"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Chart;
