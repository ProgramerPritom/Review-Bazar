import React from 'react';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../Hooks/useData';
import MyLineChart from '../MylineChart/MyLineChart';
import './Dashboard.css';

const Dashboard = () => {
    const [data,setData] = useData([])
    return (
        <div className='chart-area'>
            <div className="mylineChart">
                {/* {
                    data.map(myData => <MyLineChart key={myData.revenue} myData = {myData}></MyLineChart>)
                } */}
                <LineChart width={500} height={400} data={data}>
                    <Line dataKey='sell' stroke="#8884d8"></Line>
                    <XAxis dataKey='month' />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            <div className="bar-chart">
                {/* {
                    data.map(myData => <MyLineChart key={myData.revenue} myData = {myData}></MyLineChart>)
                } */}
                
                    <BarChart width={450} height={430} data={data}>
                        <Bar dataKey='sell' fill="#8884d8" />
                        <XAxis dataKey='month' />
                        <YAxis />
                        <Tooltip/>
                    </BarChart>
                
            </div>
        </div>
    );
};

export default Dashboard;