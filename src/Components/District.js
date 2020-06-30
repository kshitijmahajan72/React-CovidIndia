import React from 'react';
import BarGraph from './BarGraph';
class District extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
        
    }

    render() {
        const {district} = this.props;

        return (
            <div>
                {
                 district?<div>
                            <table >
                                <thead>
                                <tr>
                                    <th>District Name</th><th>Total</th><th variant="danger">Active</th><th>Deaths</th><th>Recovered</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                Object.entries(district.districtData).map((districtName,index1)=><tr key={index1}><td>{districtName[0]}</td><td>{districtName[1].confirmed}</td><td>{districtName[1].active}</td><td>{districtName[1].deceased}</td><td>{districtName[1].recovered}</td></tr>)                                    
                            }
                            </tbody>
                            </table>
                            <BarGraph district={district}></BarGraph>
                            </div>
                         :null
                }
            </div>
        );
    }
}


export default District;