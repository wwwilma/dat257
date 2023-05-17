import React from 'react';
import HeatMap from '@uiw/react-heat-map';
import {endOfWeek, startOfWeek} from 'date-fns'

//The calendar heatmaps are made with react-heat-map from https://uiwjs.github.io/react-heat-map/
//Value0 is the weekly data and value1 is the yearly data, each date represents a rectangle.

const weekStart = startOfWeek(new Date(), {weekStartsOn: 0});
const weekEnd = endOfWeek(weekStart, {weekStartsOn: 0});

const WeeklyHeatmap = ({statistics}) => {
    return (
        <div>
            <h3>Weekly statistics</h3>
            <HeatMap
                value={statistics}
                startDate={weekStart}
                endDate={weekEnd}
                style={{ color: '#000000' }}
                rectSize={14}
                legendCellSize={35}
                space={2}
                panelColors={{
                    1: '#C4B1E7',
                    5: '#A183D8',
                    10: '#7D54C9',
                    20: '#5F36AB',
                    30: '#45277C',
                    40: '#2B184E',
                    100: '#110A1F',
                }}
                weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                monthLabels={{Boolean:false}}
            />
            <small>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp; 5 &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; 20 &nbsp; &nbsp; 30 &nbsp; &nbsp; 40 </small>
        </div>
    )
};

export default WeeklyHeatmap