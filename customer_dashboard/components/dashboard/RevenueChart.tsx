import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  {
    name: "May",
    revenue: 65000,
    pv: 967,
    amt: 1506,
  },
  {
    name: "June",
    revenue: 50000,
    pv: 1098,
    amt: 989,
  },
  {
    name: "July",
    revenue: 80000,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "August",
    revenue: 60000,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Sept",
    revenue: 120000,
    pv: 680,
    amt: 1700,
  },
];

// #endregion
const RevenueChart = () => {
  return (
    <ComposedChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" barSize={30} fill="#413ea0" />
      <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
      <RechartsDevtools />
    </ComposedChart>
  );
};

export default RevenueChart;
