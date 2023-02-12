import React,{Component} from "react";
import NotificationBar from "../Notification/NotificationBar";
import DoctorInfoView from "./DoctorInfoView";
import DoctorListView from "./DoctorListView";
import '../Patients/Patients.css'
import './Doctor.css'
import ashok from '../images/ashok.jpg'
import ravi from '../images/ravi.jpg'
import sonia from '../images/sonam.jpg'

class Doctors extends Component{
    state={
        doctorlist:[
            {id:1, name:'Dr.Roberto Romano',img: ashok, age:'25', gender:'Masculino',workplace: 'B&B Hospital', qualification:'M.O.',department:'Ginecologista' ,status:'Ativo'},
            {id:2, name:'Dr.Harry Danger',img: ravi, age:'26', gender:'Masculino' ,workplace: 'B&B Hospital', qualification:'M.O.',department:'Psicologo' ,status:'Offline'},
            {id:3, name:'Drs.Sandra ',img: sonia, age:'32', gender:'Feminino' ,workplace: 'B&B Hospital', qualification:'M.O.',department:'Neurologista',status:'Offline' },
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
                    <DoctorListView doctorlist={this.state.doctorlist} handlelistclick={this.handlelistclick} hover={this.state.hover}/>
                    <DoctorInfoView currentid={this.state.currentid} doctorlist={this.state.doctorlist}/>
                </div>
                
            </div>
        )
    }
}
export default Doctors;