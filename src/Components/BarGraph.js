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
            legend: {
                display: true,
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
                    backgroundColor: 'rgba(124,252,0,0.5)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgb(124,252,0)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: recovered
                  }
            ]
        }

        return (
            <div>
                <Bar
                data={data}
                width={100}
                height={30}
                options={options}
            />
            </div>
        );
    }
}


export default BarGraph;