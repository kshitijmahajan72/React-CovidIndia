import React from 'react';
class StateCount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active:0
        };

    }

    render() {
        let active=0, confirmed=0, deceased=0, recovered=0
        for (const [key,values] of Object.entries(this.props.state.districtData)){
            
            active = active + values.active;
            confirmed = confirmed + values.confirmed;
            deceased = deceased + values.deceased;
            recovered = recovered + values.recovered;
        }
        
        return (
            <div>
                {active?
                active:null}
                </div>
        );
    }
}


export default StateCount;