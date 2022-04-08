import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import useData from '../Hooks/useData';
import MyLineChart from '../MylineChart/MyLineChart';

const Dashboard = () => {
    const [data,setData] = useData([])
    return (
        <div>
            <div className="mylineChart">
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey='sell' stroke="#8884d8"></Line>
                    <XAxis dataKey='month' />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;