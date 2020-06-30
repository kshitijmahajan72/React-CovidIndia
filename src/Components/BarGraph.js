import React from 'react';
import {Bar} from 'react-chartjs-2';
class BarGraph extends React.Component {
    constructor(props) {
        super(props);

        

        this.state = {
            
        };

    }

    render() {
        const options={
            responsive: true,
            legend: {
                display: false,
            },
            type:'bar',
            
        }
        const active = [],recovered =[], district=[]
        for(const[key,value] of Object.entries(this.props.district.districtData)){
            district.push(key)
            active.push(value.active)
            recovered.push(value.recovered)
        }
        const data={
            labels: district,
            datasets:[
                {
                    label: 'Active',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'red',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: active
                  },
                  {
                    label: 'Recovered',
                    backgroundColor: 'rgba(155,231,91,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'skyblue',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: recovered
                  }
            ]
        }

        return (
            <div>
                <Bar
                data={data}
                width={150}
                height={100}
                options={options}
            />
            </div>
        );
    }
}


export default BarGraph;