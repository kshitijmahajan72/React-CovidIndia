import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
                            <table className="table table-striped table-hover table-responsive">
                                <thead>
                                <tr>
                                    <th className="alert alert-dark">District Name</th>
                                    <th className="alert alert-primary" >Total</th>
                                    <th className="alert alert-danger">Active</th>
                                    <th className="alert alert-success">Recovered</th>
                                    <th className="alert alert-secondary">Deaths</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                Object.entries(district.districtData).map((districtName,index1)=><tr key={index1}><td>{districtName[0]}</td><td>{districtName[1].confirmed.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</td><td>{districtName[1].active.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</td><td>{districtName[1].deceased.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</td><td>{districtName[1].recovered.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</td></tr>)                                    
                            }
                            </tbody>
                            </table>
                            
                            </div>
                         :null
                }
            </div>
        );
    }
}


export default District;