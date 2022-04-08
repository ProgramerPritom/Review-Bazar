import React from 'react';
import { Line, LineChart } from 'recharts';

const MyLineChart = (props) => {
    const {myData} = props;
    const data = myData;
    // const {sell} = myData;
    console.log(data);

    // console.log(myData);
    // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

    return (
        
            <LineChart width={400} height={400} data={data}>
            <Line dataKey='revenue' stroke="#8884d8" />
            </LineChart>
        
    );
};

export default MyLineChart;