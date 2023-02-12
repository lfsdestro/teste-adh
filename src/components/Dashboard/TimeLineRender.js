import React from "react";
import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';

import rukia from '../images/rukia.jpg'
import ichigo from '../images/ichigo.png'
import ashok from '../images/ashok.jpg'
import ravi from '../images/ravi.jpg'
import sonia from '../images/sonam.jpg'


const TimeLineRender = (props) => {
    const { code } = props

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
                    img: sonia,
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

    const datatodisplay = handlefunc(code);
    
    
    return (

        <>
        <Tippy content={
        <div className='' style={{ lineHeight: '5px', height: '110px' }} >
                <p className=' text-muted' style={{ fontSize: '0.563rem' }}>Departamento</p>
                <p className=' fw-bold'>{datatodisplay.department}</p>
                <p className=' text-muted' style={{ fontSize: '0.563rem' }}>Doutor</p>
                <p className='mb-2 fw-bold'>{datatodisplay.name}</p>
                <button className='btn btn-danger ' style={{ width: '80px', height: '30px', fontSize: '0.625rem', textAlign: 'center' }}>AGENDAR</button>
            </div>} 
            placement='bottom-start' interactive={true}  inlinePositioning= {true}  theme='light' arrow={false}>

        <img src={datatodisplay.img}  className="mbsc-avatar p-0 shadow-sm border border-black" width="100" height="100"     alt="" />
        </Tippy>
            
        </>
    );
}

export default TimeLineRender;