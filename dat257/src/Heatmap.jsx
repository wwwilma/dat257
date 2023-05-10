//import React, {useEffect, useState} from 'react';
import HeatMap from '@uiw/react-heat-map';
import {endOfWeek, endOfYear, startOfWeek, startOfYear} from 'date-fns'

//The calendar heatmaps are made with react-heat-map from https://uiwjs.github.io/react-heat-map/

const weekStart = startOfWeek(new Date(), {weekStartsOn: 1});
const weekEnd = endOfWeek(weekStart, {weekStartsOn: 1});
const yearStart = startOfYear(new Date());
const yearEnd = endOfYear(yearStart);

const Heatmap = (statistics) => {
    console.log(statistics)
    return (
        <div>
            <h3>Weekly statistics (example)</h3>
            <HeatMap
                value={Object.values(statistics)}
                startDate={weekStart}
                endDate={weekEnd}
                style={{ color: '#35524A' }}
                rectSize={14}
                legendCellSize={0}
                space={2}
                panelColors={{
                    0: '#ef0fcb',
                    2: '#2261a8',
                    4: '#3cc00e',
                    10: '#a90909',
                    20: '#c5a718',
                    30: '#213f37',
                }}
                weekLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                monthLabels={{Boolean:false}}
            />
            <h3>Yearly statistics (example)</h3>
            <HeatMap
                value={Object.values(statistics)}
                startDate={yearStart}
                endDate={yearEnd}
                style={{ color: '#35524A' }}
                monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                panelColors={{
                    0: '#ef0fcb',
                    2: '#2261a8',
                    4: '#3cc00e',
                    10: '#a90909',
                    20: '#c5a718',
                    30: '#213f37',
                }} />
        </div>
    )
};

export default Heatmap