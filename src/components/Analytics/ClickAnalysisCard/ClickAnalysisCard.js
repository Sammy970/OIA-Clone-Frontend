import React from "react";
import classes from "./ClickAnalysisCard.module.css";
import { Box, Card, CardBody, Text } from "@chakra-ui/react";

import {
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// Preprocess the data to create an array of data points
const getChartData = (data) => {
  const chartData = [];
  for (const year in data) {
    for (const month in data[year]) {
      if (month !== "clicks") {
        for (const day in data[year][month]) {
          chartData.push({
            date: `${day.slice(1)}-${month}-${year.slice(1)}`,
            clicks: data[year][month][day].clicks,
          });
        }
      }
    }
  }
  return chartData;
};

const formatDate = (dateStr) => {
  const [day, monthKey, year] = dateStr.split("-");
  const monthNames = {
    m1: "Jan",
    m2: "Feb",
    m3: "Mar",
    m4: "Apr",
    m5: "May",
    m6: "Jun",
    m7: "Jul",
    m8: "Aug",
    m9: "Sep",
    m10: "Oct",
    m11: "Nov",
    m12: "Dec",
    // Add the rest of the month names here...
  };
  const month = monthNames[monthKey];
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

const TestComp = (props) => {
  const whenData = props.whenData;
  // console.log(whenData);
  const chartData = getChartData(whenData);

  return (
    <Card width={{ sm: "full", base: "90%" }} height={"full"}>
      <CardBody justifyContent={"center"} display={"flex"}>
        <Box width={{ base: "100%", sm: "100%" }}>
          <Text className={classes.headerText}>Click Analysis</Text>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#319795" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#319795" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tickFormatter={formatDate} />
              {/* <YAxis /> */}
              <Tooltip labelFormatter={(label) => formatDate(label)} />
              {/* <Legend /> */}
              <Area
                type="monotone"
                dataKey="clicks"
                stroke="#319795"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardBody>
    </Card>
  );
};

export default TestComp;
