const OnboardingThree = () => {
    const handleAddClick=(event)=>{
            event.preventDefault()
         
    }
    return (
        <div className='container-fluid bg-white shadow-sm fw-bold p-2 cp-fontsizemediaquery' style={{ fontSize: '0.875rem', boxSizing: 'border-box' }}>
            <form action="">
                <div className="row my-2">
                    <div className="col fw-bold fs-5"><p>Relatório de laboratório</p></div>
                    <div className="col text-end">
                        <a href='#' onClick={(e)=>handleAddClick(e)} className='btn  add-btn text-white py-1'><i class="fas fa-plus px-2"></i><span className='px-2'>Add</span></a>
                    </div>
                </div>

                <div className="row my-2 labreportimgdiv mx-0">


                </div>
                <div className="row m-0 p-3" style={{ backgroundColor: '#F9F8F8' }}>
                    <p className='fw-bold fs-5 row'>Detalhes Psiquiátricos</p>

                    <div className="bg-white shadow-sm rounded m-0 p-2 row">
                        <div className="col m-2">
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='presentingcomplaintsanditshistory ' >Apresentando reclamações e sua história</label>
                                <textarea id="presentingcomplaintsanditshistory" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='objectiveexamination' style={{ whiteSpace: 'nowrap' }}>Exame Objetivo/Achados Gerais</label>
                                <textarea id="objectiveexamination" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='medicine'>Medicina</label>
                                <textarea id="medicine" rows="4" className='textarea'></textarea>
                            </div>
                        </div>
                        <div className="col m-2">
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='pastmedicalhistory'>Histórico médico</label>
                                <textarea id="pastmedicalhistory" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='diagnosis'>Diagnóstico</label>
                                <textarea id="diagnosis" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='advice'>Conselho</label>
                                <textarea id="advice" rows="4" className='textarea'></textarea>
                            </div>
                        </div>
                        <div className="col m-2">
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='pastpsychiatrichistory'>Histórico Psiquiátrico</label>
                                <textarea id="pastpsychiatrichistory" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='queries'>Consultas</label>
                                <textarea id="queries" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2  g-0'>
                                <label for="remarks" className=''>Observações</label>
                                <input type="text" placeholder='Observações' className='form-control form-control-sm' />
                            </div>
                        </div>
                        <div className="col m-2">
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='pastfamilyandpersonalhistory'>Histórico familiar e pessoal</label>
                                <textarea id="pastfamilyandpersonalhistory" rows="4" className='textarea'></textarea>
                            </div>
                            <div className='row d-flex flex-column my-2 g-0'>
                                <label for='treatment'>Tratamento</label>
                                <textarea id="treatment" rows="4" className='textarea'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-2 " style={{whiteSpace:'nowrap'}}>
                    <div className='d-flex flex-md-row flex-column'>
                      <label for='furtherreferto' className='fw-bold fs-5'>Consulte &nbsp;</label>
                        <select className="form-select form-select-sm " aria-label=".form-select-sm example" id='furtherreferto' style={{width:'18.75rem'}}>
                            {/* <option selected>Open this select menu</option> */}
                            <option value="1">Nenhum</option>
                        </select>
                    </div>
                </div>

            </form>

        </div>
    );
}

export default OnboardingThree;