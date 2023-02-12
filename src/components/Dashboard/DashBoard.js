import React, { Component } from "react";
import './DashBoard.css'
import user from '../images/drstrange1.jpg';
import profile from '../images/profile.jpg';
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';

import NotificationBar from "../Notification/NotificationBar";
import Listing from "./Listing";
import Timeline from "./Timeline";
import  OnCall from './OnCall'
import {connect} from 'react-redux'

class DashBoard extends Component {
    state = {
         date: null,
        time:null

    }
    
    componentDidMount() {
        var mon_array = new Array();
        mon_array[0] = "Janeiro";
        mon_array[1] = "Fevereiro";
        mon_array[2] = "Março";
        mon_array[3] = "Abril";
        mon_array[4] = "Maio";
        mon_array[5] = "Junho";
        mon_array[6] = "Julho";
        mon_array[7] = "Agosto";
        mon_array[8] = "Setembro";
        mon_array[9] = "Outubro";
        mon_array[10] = "Novembro";
        mon_array[11] = "Dezembro"
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() ; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        const newdate = mon_array[month] +- + day;
        
        this.setState({date:newdate})

        var today = new Date();
        var time = today.getHours()
        this.setState({time:time})
    }


    render(){
        

        return(
            <div className="page-content px-lg-5  py-2 overflow-hidden  container " id='content'>

                <NotificationBar />
                <div className="row mt-5 ">
                    <span className='col-6 fw-bold' style={{ fontSize: '1.25rem' }}>Dashboard</span>
                    <span className='col-6  text-end'><i class="fas fa-redo-alt bg-white shadow-sm p-1 rounded-1 text-muted fs-6 "></i></span>
                </div>


                <div className="row mt-5 mx-0 ">
                    <div className="col-lg-6 col-12 pe-lg-2  px-0  overflow-hidden ">
                        <Timeline timeline_data={this.props.timeline_root} date={this.state.date} schedule_data={this.state.schedule_data} time={this.state.time}/>
                    </div>
                    <div className="col-lg-6 col-12  ps-lg-2 px-0">
                    <Listing data={this.props.data}/>
                    </div>
                </div>

                <div className="row mt-3 mx-auto  bg-white rounded shadow-sm py-3 px-1">
                    <p className='seemore'>Em atendimento</p>
                    <div className="col-12 px-5 ">
                    <OnCall oncall={this.props.oncall} />
                    </div>

                </div>
            </div>

        )
    }

}

const mapStateToProps = (state)=>{
    return {
        timeline_root: state.dashboardReducer.timeline_root,
        oncall: state.dashboardReducer.oncall,
        data: state.dashboardReducer.data
    }
}
 
export default connect(mapStateToProps)(DashBoard)