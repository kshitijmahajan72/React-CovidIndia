import React from 'react';
import axios from "axios";
import District from './District';
import StateCount from './StateCount';
import BarGraph from './BarGraph';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      hide(){
        this.setState({
            dist:false
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
                    <div>
                    <div className="jumbotron">
                    <span className="display-3">CoVID-19 Cases India</span> <img className="App-logo" height="10" padding="5%" alt="corona"src="/Resources/coronavirus.png"></img>
                    
                    </div>
                    <div id="main">
                        <table className="row justify-content-center display-4 mb-1">
                            <tbody>
                            <tr><td><b>Total: </b></td><td><span className="badge badge-pill badge-primary">{confirmed.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span></td></tr>
                            <tr><td><b>Active: </b></td><td><span className="badge badge-pill badge-danger" >{active.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span></td></tr>     
                            <tr><td><b>Recovered: </b></td><td><span className="badge badge-pill badge-success">{recovered.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span></td></tr>
                            <tr><td><b>Deaths:</b></td><td><span className="badge badge-pill badge-dark">{deceased.toLocaleString('en-IN', { minimumFractionDigits: 0 })}</span></td></tr>     
                            </tbody>
                        </table>
                        <div className="mt-md-3 ">
                        {
                            dist?
                            <button class="btn btn-info float-right" onClick={this.hide.bind(this) }>Hide</button>:null
                        }{
                            dist?
                            <BarGraph district={dist} class="container"></BarGraph>:
                            null
                        }
                        </div>
                        <div id="sidebar">
                    
                   <table className="table table-striped table-hover table-responsive m-md-5 ">
                       <thead className="thead-dark"><tr><th colSpan="2" >STATES</th></tr></thead>
                       <tbody>
                       {
                           
                       Object.entries(covidList).map((key1,index)=>
                       
                       <tr key={index} >
                           <td><b onClick={()=>this.setDistrict(key1[1])}>{key1[0]}</b></td><td className="text-danger"><StateCount state={key1[1]}></StateCount>
                           </td>
                           </tr>
                       
                       )
                       }
                       </tbody>
                   </table>
                   </div>
                   <div id="page-wrap" className=" m-md-5 ">
                   {
                       dist ?
                        <District district={dist}></District>:
                        null
                   }
                   </div>
                   </div>
                   </div>
                }              
                
            </div>
        );
    }
}


export default FetchData;