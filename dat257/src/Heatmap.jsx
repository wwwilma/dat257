//import React, {useEffect, useState} from 'react';
import HeatMap from '@uiw/react-heat-map';
import {endOfWeek, endOfYear, startOfWeek, startOfYear} from 'date-fns'

//The calendar heatmaps are made with react-heat-map from https://uiwjs.github.io/react-heat-map/

const weekStart = startOfWeek(new Date(), {weekStartsOn: 0});
const weekEnd = endOfWeek(weekStart, {weekStartsOn: 0});
const yearStart = startOfYear(new Date());
const yearEnd = endOfYear(yearStart);

const Heatmap = ({statistics}) => {

    return (

        <div>
            <h3>Weekly statistics</h3>
            <HeatMap
                value={statistics}
                startDate={weekStart}
                endDate={weekEnd}
                style={{ color: '#35524A' }}
                rectSize={14}
                legendCellSize={0}
                space={2}
                panelColors={{
                    1: '#c4b1e7',
                    6: '#a183d8',
                    11: '#7d54c9',
                    21: '#5f36ab',
                    31: '#45277c',
                    41: '#2b184e',
                    101: '#110a1f',
                }}
                weekLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                monthLabels={{Boolean:false}}
            />
            <h3>Yearly statistics</h3>
            <HeatMap
                value={statistics}
                startDate={yearStart}
                endDate={yearEnd}
                style={{ color: '#35524A' }}
                monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                panelColors={{
                    1: '#c4b1e7',
                    6: '#a183d8',
                    11: '#7d54c9',
                    21: '#5f36ab',
                    31: '#45277c',
                    41: '#2b184e',
                    101: '#110a1f',
                }} />
        </div>
    )
};

export default Heatmap