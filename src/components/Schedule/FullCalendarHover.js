import React from 'react'

const FullCalendarHover = (props) => {
    
    const ids = [...props.data.groupId]
    const id = ids.filter(word => word !== ',')
 
    

    const patient = [{
        name: 'Nico Robin',
        img: '',
        age: '25',
        gender: 'feminino',
        status: 'terminado',
        pid:'1'

    }, {
        name: 'Nami',
        img: '',
        age: '25',
        gender: 'feminino',
        status: 'em processo',
        pid: '2'
    }, {
        name: 'Boa Hancok',
        img: '',
        age: '25',
        gender: 'female',
        status: 'esperando',
        pid: '3'
    }]

    function getParticipant(id ) {
        return(    
        patient.find(data=> data.pid === id))
    }
    const handleClick=(e)=>{
        e.preventDefault()
    }
 

    return( 
        <div>
            <span className='text-muted ' style={{ fontSize: '10px' }}>Esperando paciente</span>
            <div className="md-cutom-event-img-cont mt-2 overflow-auto " style={{ height: '300px', width: '250px' }} >
            {id && id.map(function (p) {
                    return (
                        <div key={p} className='d-flex flex-row py-2 border-bottom' >
                            <img className="md-custom-event-img" src={getParticipant(p).img} />

                            <div className="d-flex flex-column">
                                <div className="d-flex flex-row justify-content-between">
                                    <span className='fw-bold'> {getParticipant(p).name}</span>
                                    <span className='badge' id={getParticipant(p).status}>{getParticipant(p).status}</span>
                                </div>
                                <div className="d-flex text-muted ">
                                    <span className='pe-2'>{getParticipant(p).age}years</span>
                                    <span className='pe-4'>{getParticipant(p).gender}</span>
                                    <a href="#" className='' onClick={handleClick}>Veja mais</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
        
         </div>
        </div>
     );
}

export default FullCalendarHover;