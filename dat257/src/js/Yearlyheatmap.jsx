import React from 'react';
import HeatMap from '@uiw/react-heat-map';
import {endOfYear, startOfYear} from 'date-fns'

//The calendar heatmaps are made with react-heat-map from https://uiwjs.github.io/react-heat-map/
//Value0 is the weekly data and value1 is the yearly data, each date represents a rectangle.

const yearStart = startOfYear(new Date());
const yearEnd = endOfYear(yearStart);

const YearlyHeatmap = ({statistics}) => {
    return (
        <div>
            <h3>Yearly statistics</h3>
            <HeatMap
                value={statistics}
                startDate={yearStart}
                endDate={yearEnd}
                width={710}
                space={2}
                rectSize={14}
                legendCellSize={20}
                style={{ color: '#35524A' }}
                monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                panelColors={{
                    1: '#C4B1E7',
                    6: '#A183D8',
                    11: '#7D54C9',
                    21: '#5F36AB',
                    31: '#45277C',
                    41: '#2B184E',
                    101: '#110A1F',
                }} //Vill vi lägga till tooltip?
            />
        </div>
    )
};

export default YearlyHeatmap