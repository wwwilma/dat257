import React from 'react';
import HeatMap from '@uiw/react-heat-map';

//The calendar heatmaps are made with react-heat-map from https://uiwjs.github.io/react-heat-map/
//Value0 is the weekly data and value1 is the yearly data, each date represents a rectangle.

const value0 = [
    { date: '2023/01/01', count: 0 },
    { date: '2023/01/02', count: 20 },
    { date: '2023/01/03', count: 10 },
    { date: '2023/01/04', count: 2 },
    { date: '2023/01/05', count: 5 },
    { date: '2023/01/07', count: 11 },
];

const value1 = [
    { date: '2023/01/11', count: 2 },
    { date: '2023/01/12', count: 20 },
    { date: '2023/01/13', count: 10 },
    ...[...Array(17)].map((_, idx) => ({ date: `2023/03/${idx + 10}`, count: idx, content: '' })),
    { date: '2023/04/11', count: 2 },
    { date: '2023/05/01', count: 5 },
    { date: '2023/05/02', count: 5 },
    { date: '2023/05/04', count: 11 },
];

const Heatmap = () => {
    return (
        <div>
            <h3>Weekly statistics (example)</h3>
            <HeatMap
                value={value0}
                startDate={new Date('2023/01/01')}
                endDate={new Date('2023/01/07')}
                style={{ color: '#35524A' }}
                rectSize={14}
                legendCellSize={0}
                space={2}
                panelColors={{
                    0: '#d8d2cd',
                    2: '#aff5e0',
                    4: '#4bd7ad',
                    10: '#42A588',
                    20: '#2b5f4f',
                    30: '#213f37',
                }}
                weekLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                monthLabels={{Boolean:false}}
            />
            <h3>Yearly statistics (example)</h3>
            <HeatMap
                value={value1}
                startDate={new Date('2023/01/01')}
                style={{ color: '#35524A' }}
                monthLabels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                panelColors={{
                    0: '#d8d2cd',
                    2: '#aff5e0',
                    4: '#4bd7ad',
                    10: '#42A588',
                    20: '#2b5f4f',
                    30: '#213f37',
                }} />
        </div>
    )
};

export default Heatmap