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
                startDate={new Date(yearStart.getTime()-(24 * 60 * 60 * 1000))}
                endDate={yearEnd}
                width={890}
                space={2}
                rectSize={14}
                legendCellSize={35}
                style = {{ color: '#000000' }}
                monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                panelColors={{
                    1: '#C4B1E7',
                    5: '#A183D8',
                    10: '#7D54C9',
                    20: '#5F36AB',
                    30: '#45277C',
                    40: '#2B184E',
                    100: '#110A1F',
                }}
            />
            <small>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0 &nbsp; &nbsp; &nbsp; 1 &nbsp; &nbsp; &nbsp; 5 &nbsp; &nbsp; &nbsp; 10 &nbsp; &nbsp; 20 &nbsp; &nbsp; 30 &nbsp; &nbsp; 40 </small>
        </div>
    )
};

export default YearlyHeatmap