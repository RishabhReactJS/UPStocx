import React from "react";
import Chart from 'react-apexcharts'

const Charts = (props) => {
    return(
        <Chart options={props.options} series={[{data: props.series}]} type={props.type} height={320} />
    )
}

export default Charts;