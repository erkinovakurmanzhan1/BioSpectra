import ReactApexChart from 'react-apexcharts';

export default function ColumnChart() {
  const chartData = {
    series: [
      {
        name: '1',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        color: '#104A0D',
      },
      {
        name: '2',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        color: '#1BBD32',
      },
      {
        name: '3',
        data: [20, 44, 32, 76, 85, 98, 2, 3, 19],
        color: '#93AAFD',
      },
    ],
    chart: {
      type: 'bar',
      height: 650,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '75%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => {
          return  val + '%';
        },
      },
    },
  };

  return (
    <div className="w-[1290px] border-2 bg-white rounded-[20px] mb-[102px]">
            {/* <div className="flex flex-col pl-[39px] pt-[10px]"> */}
        {/* <span className="text-[#9291A5] ">Статистика</span> */}
        {/* <div className="text-[20px] font-semibold pb-[32px]">
        </div> */}
      {/* </div> */}
      {/* <div className="border -[1px solid #E5E5EF]"></div> */}
      <ReactApexChart
        options={chartData}
        series={chartData.series}
        type="bar"
        height={chartData.chart.height}
      />
    </div>
  );
}
