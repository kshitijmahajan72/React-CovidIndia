import React from 'react';
import axios from "axios";
import District from './District';
import StateCount from './StateCount';
import BarGraph from './BarGraph';


class FetchData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            covidList : [],
            dist:null
        };
        
    }

    componentDidMount(){
        axios.get('https://api.covid19india.org/state_district_wise.json')
        .then(response=>{
            console.log(response)
            this.setState({covidList: response.data}) 
            
        })
        .catch(error=>{
            console.log(error)
        })
    }
    setDistrict (x) {
        this.setState({
            dist:x
        })
    
      }
    render() {
        const {covidList,dist} = this.state
        let active=0, confirmed=0, deceased=0, recovered=0
        
        
        for (const [key, value] of Object.entries(covidList)) {
            
            const districtData1 = value.districtData;
            
            for (const [district,values] of Object.entries(districtData1)){
            
                active = active + values.active;
                confirmed = confirmed + values.confirmed;
                deceased = deceased + values.deceased;
                recovered = recovered + values.recovered;
            }
          }
        
        return (
            <div>
                {
                    
                    <div id="main">
                        <div><b>Active Cases: </b>{active}     <b>Total Cases: </b>{confirmed}     <b>Deaths:</b> {deceased}     <b>Total recovered: </b>{recovered}</div>
                        {
                            dist?
                            <BarGraph district={dist}></BarGraph>:
                            null
                        }
                        <div id="sidebar">
                    
                   <table><tbody>
                       {
                           
                       Object.entries(covidList).map((key1,index)=>
                       
                       <tr key={index} >
                           <td><b onClick={()=>this.setDistrict(key1[1])}>{key1[0]}</b></td><td><StateCount state={key1[1]}></StateCount>
                           </td>
                           </tr>
                       
                       )
                       }
                       </tbody>
                   </table>
                   </div>
                   <div id="page-wrap">
                   {
                       dist ?
                        <District district={dist}></District>:
                        null
                   }
                   </div>
                   </div>
                }              
                
            </div>
        );
    }
}


export default FetchData;