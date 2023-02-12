import React from "react";
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';

import rukia from '../images/rukia.jpg'
import ichigo from '../images/ichigo.png'
import ashok from '../images/ashok.jpg'
import ravi from '../images/ravi.jpg'
import sonia from '../images/sonam.jpg'
const OnCall = (props) => {
    const { oncall } = props

    function handlefunc(code) {

        switch (code) {
            case 1:
                return {
                    name: 'Dr. Ichigo',
                    img: ichigo,
                    department: 'Odonto',
                    date: '25 Fevereiro,2023 08:00 am'

                }
            case 2:
                return {
                    name: 'Dra. Rukia',
                    img: rukia,
                    department: 'Psicóloga',
                    date: '25 Fevereiro,2023 08:00 am'

                }
            case 3:
                return {
                    name: 'Emily',
                    img: ravi,
                    department: 'Odonto',
                    date: '25 Fevereiro,2023 08:00 am'
                }
            case 4:
                return {
                    name: 'Rose',
                    img: sonia,
                    department: 'Odonto',
                    date: '25 Fevereiro,2023 08:00 am'
                }
            case 5:
                return {
                    name: 'Mattews',
                    img: ravi,
                    department: 'Cardio',
                    date: '25 Fevereiro,2023 08:00 am'
                }
            case 6:
                return {
                    name: 'Rick Mortis',
                    img: ashok,
                    department: 'Cardio',
                    date: '25 Fevereiro,2023 08:00 am'
                }
            case 7:
                return {
                    name: 'John Travolta',
                    img: ravi,
                    department: 'Neuro',
                    date: '25 Fevereiro,2023 08:00 am'
                }
            case 8:
                return {
                    name: 'Ethan Nolan',
                    img: ashok,
                    department: 'Neuro',
                    date: '25 Fevereiro,2023 08:00 am'
                }
        }
    }
    const onCalllist = oncall.map(eachdata => {

        return (
            <div key={eachdata} className="px-5">
                <Tippy content={
                    <div className='' style={{ lineHeight: '5px', height: '110px' }} >
                        <p className=' text-muted' style={{ fontSize: '0.568rem' }}>Departamento</p>
                        <p className=' fw-bold'>{handlefunc(eachdata).department}</p>
                        <p className=' text-muted' style={{ fontSize: '0.568rem' }}>Doutor</p>
                        <p className='mb-2 fw-bold'>{handlefunc(eachdata).name}</p>
                        <button className='btn btn-danger ' style={{ width: '80px', height: '30px', fontSize: '10px', textAlign: 'center' }}>AGENDAR</button>
                    </div>}
                    placement='bottom-start' theme='light' arrow={false}>
                    <img src={handlefunc(eachdata).img} alt="" className="mbsc-avatar p-0 shadow-sm border border-black" width="100" height="100" />
                </Tippy>
            </div>
        )
    })


    return (
        <div className='d-flex flex-row justify-content-between  scrollbar pt-2  mx-0 ' style={{width:'100%',overflowY:'hidden',overflowX:'auto' ,scrollbarGutter:'stable' ,borderBottom:'1px solid rgba(255,84,75,0.7)', borderTop:"1px solid rgba(255,84,75,0.7)"}}>
            {onCalllist}
        </div>
          
        
    )


}

export default OnCall;