import React, { useState } from "react";
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
          if (day !== "clicks") {
            chartData.push({
              date: `${year.slice(1)}-${month}-${day.slice(1)}`,
              clicks: data[year][month][day].clicks,
            });
          }
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
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const formatDateForChart = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  return `${year}-${month}-${day}`;
};

const ClickAnalysisCard = (props) => {
  const whenData = props.whenData;
  const chartData = getChartData(whenData);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const filterData = () => {
    if (!startDate || !endDate) {
      return chartData;
    } else {
      const formattedStartDate = formatDateForChart(startDate);
      const formattedEndDate = formatDateForChart(endDate);

      const filteredData = chartData.filter((data) => {
        let [year, month, day] = data.date.split("-");
        if (month.length === 2) {
          month = month.replace("m", 0);
        } else if (month.length === 3) {
          month = month.replace("m", "");
        }

        let newDate = `${year}-${month}-${day}`;
        const date = new Date(newDate);

        return (
          date >= new Date(formattedStartDate) &&
          date <= new Date(formattedEndDate)
        );
      });
      return filteredData;
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <Card
      width={{ sm: "full", base: "90%" }}
      height={"full"}
      boxShadow={{ base: "", sm: "5px 5px 0px black" }}
      border={"2px solid black"}
    >
      <CardBody justifyContent={"center"} display={"flex"}>
        <Box width={{ base: "100%", sm: "100%" }}>
          <Text className={classes.headerText}>Click Analysis</Text>
          <Box mt={4}>
            <label>Start Date:</label>
            <input
              type="date"
              onChange={(e) => handleStartDateChange(e.target.value)}
            />

            <label>End Date:</label>
            <input
              type="date"
              onChange={(e) => handleEndDateChange(e.target.value)}
            />
          </Box>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={filterData()}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="60%" stopColor="#80C8A1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#80C8A1" stopOpacity={0} />
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
                stroke="#80C8A1"
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

export default ClickAnalysisCard;
