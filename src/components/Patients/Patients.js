import React,{Component} from "react";
import NotificationBar from "../Notification/NotificationBar";
import PatientListView from './PatientListView'
import PatientInfoView from "./PatientInfoView";
import './Patients.css'
import luffy from '../images/luffy.jpg'
import zoro from '../images/zoro.jpg'
import nami from '../images/nami.jpg'

class Patients extends Component{
    state={
        patientlist:[
            {id:1, name:'Luffy',img: luffy, age:'23', gender:'Masculino',address:'East Blue', phone:'9842078988', idtype:'',citizenshipno:'014234242425'  },
            {id:2, name:'Zoro',img: zoro, age:'23', gender:'Masculino' ,address:'East Blue', phone:'9842078988', idtype:'',citizenshipno:'014234242425'},
            {id:3, name:'Nami',img: nami, age:'23', gender:'Feminino' ,address:'East Blue', phone:'9842078988', idtype:'',citizenshipno:'014234242425'},
        ],
        currentid:1,
        hover:1

    }

     handlelistclick = (id,event)=>{
       
        event.preventDefault()
        this.setState({currentid:id})
        this.setState({hover:id})
    }
    
    render(){
        
        
        
        return(
            <div className='page-content px-lg-5 py-2  container overflow-hidden' id='patients-content'>
                <NotificationBar />
                <div className='row mt-4 mx-0' >
                    <PatientListView patientlist={this.state.patientlist} handlelistclick={this.handlelistclick} hover={this.state.hover}/>
                    <PatientInfoView currentid={this.state.currentid} patientlist={this.state.patientlist}/>
                </div>
                
            </div>
        )
    }
}
export default Patients;