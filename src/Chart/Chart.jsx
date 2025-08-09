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
  const backgroundColor = [
    "red",
    "green",
    "yellow",
    "black",
    "purple",
    "beige",
    "indigo",
    "tomato",
    "salmon",
    "teal",
  ];

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
        bg: `${
          backgroundColor[Math.round(Math.random() * backgroundColor.length)]
        }`,
      };

      setChartData([...chartData, objectForBody]);
    }
  };

  const [hidden, setHIdden]=useState(false)

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
      <div className=" p-10 flex justify-center ">
        <div className=" w-[600px] h-[300px] border-b border-l overflow-auto flex gap-3 px-4 text-xl items-end">
          {chartData &&
            chartData.map((data, i) => (
              <div
                style={{
                  width: `${data.firstData}px`,
                  height: `${data.secondData}px`,
                  backgroundColor: data.bg,
                  
                }}
                onMouseOver={()=> {setHIdden(true)}}
                key={i}
              >
               { hidden && <p>{i}</p>}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
