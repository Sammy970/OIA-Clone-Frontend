import React from "react";
import classes from "./OsCard.module.css";
import { Card, CardBody, Container, Text } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const OsCard = (props) => {
  //   console.log(props.osName);

  let osNameData;
  let data;
  if (props.osName === undefined || props.osName === null) {
    // osNameData = [];
    data = [];
  } else {
    osNameData = props.osName;
    data = osNameData.map((item) => {
      const name = Object.keys(item)[0];
      const value = Object.values(item)[0];
      return { name, value };
    });
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Card width={{ sm: "full", base: "90%" }} height={"full"}>
      <CardBody justifyContent={"center"}>
        <Text className={classes.headerText}>Devices</Text>
        {data.length > 0 ? (
          <Container width={300} paddingLeft={"6px"}>
            <PieChart width={290} height={230} margin={20}>
              <Pie
                data={data}
                // cx={10}
                cy={78}
                innerRadius={30}
                outerRadius={60}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                align="center"
                verticalAlign="bottom"
                formatter={(value, entry) =>
                  `${entry.payload.name} - ${(
                    entry.payload.percent * 100
                  ).toFixed(0)} %`
                }
              />
            </PieChart>
          </Container>
        ) : (
          <Text className={classes.text}>No Clicks yet</Text>
        )}
      </CardBody>
    </Card>
  );
};

export default OsCard;
