import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

import { Grid, Paper, Typography } from "@mui/material";

const studyData = [

  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 4 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 6 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 2 }

];

const placementData = [

  {
    name: "Projects",
    value: 30
  },

  {
    name: "DSA",
    value: 40
  },

  {
    name: "Interview",
    value: 15
  },

  {
    name: "Certificates",
    value: 15
  }

];

const COLORS = [

"#2563EB",
"#10B981",
"#F59E0B",
"#EF4444"

];

export default function ProgressCharts(){

    return(

        <Grid
        container
        spacing={3}
        mt={2}
        >
            <Grid item xs={12} md={7}>

                <Paper
                    elevation={5}
                    sx={{
                        p:3,
                        borderRadius:4
                    }}
                >

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        mb={2}
                    >
                        📚 Weekly Study Hours
                    </Typography>

                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >

                        <BarChart data={studyData}>

                            <XAxis dataKey="day"/>

                            <YAxis/>

                            <Tooltip/>

                            <Bar
                                dataKey="hours"
                                radius={[8,8,0,0]}
                                fill="#2563EB"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </Paper>

            </Grid>

            <Grid item xs={12} md={5}>

                <Paper
                    elevation={5}
                    sx={{
                        p:3,
                        borderRadius:4
                    }}
                >

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        mb={2}
                    >
                        🎯 Placement Readiness
                    </Typography>

                    <ResponsiveContainer
                        width="100%"
                        height={300}
                    >

                        <PieChart>

                            <Pie
                                data={placementData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={110}
                                label
                            >

                                {

                                    placementData.map((entry,index)=>(

                                        <Cell
                                            key={index}
                                            fill={COLORS[index]}
                                        />

                                    ))

                                }

                            </Pie>

                            <Tooltip/>

                            <Legend/>

                        </PieChart>

                    </ResponsiveContainer>

                </Paper>

            </Grid>

        </Grid>

    );

}
