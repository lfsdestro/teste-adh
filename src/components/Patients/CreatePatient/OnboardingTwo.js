const OnboardingTwo = () => {
    return (
        <div className='container-fluid m-0 py-5  px-3 bg-white shadow-sm rounded fw-bold cp-fontsizemediaquery'  style={{ fontSize: '0.875rem',boxSizing:'border-box' }}>
            <form>
                <div className="row my-2">
                    <div className="col-lg d-flex flex-column">
                        <label for='height'>Altura</label>
                        <input type="text" className="form-control form-control-sm" id="height" />
                        <div className='mt-lg-3 mt-2 d-flex flex-column'>
                            <label for='weight'>Peso</label>
                            <input type="text" id="weight" className="form-control form-control-sm" />
                        </div>

                    </div>
                    <div className="col-lg mt-2 mt-lg-0 d-flex flex-column">
                        <label for='chiefcomplaint'>Queixa principal</label>
                        <textarea name="" id="chiefcomplaint" className='textarea' rows="4"></textarea>
                    </div>
                    <div className="col-lg mt-2 mt-lg-0 d-flex flex-column">
                        <label for='presentillnesshistory'>História atual da doença</label>
                        <textarea name="" id="presentillnesshistory" className='textarea' rows="4"></textarea>
                    </div>
                    <div className="col-lg mt-2 mt-lg-0 d-flex flex-column">
                        <label for='respiration'>Respiração</label>
                        <textarea name="" id="respiration" className='textarea' rows="4"></textarea>
                    </div>
                </div>

                <div className="row  my-4">
                    <div className="col d-flex flex-column">
                        <label for='temperature'>Temperatura</label>
                        <input type="text" id="temperature" className="form-control form-control-sm" />
                    </div>
                    <div className="col d-flex flex-column">
                        <label for='bpsystolic'>PA Sistólica</label>
                        <input type="text" id="bpsystolic" className="form-control form-control-sm"/>
                    </div>
                    <div className="col d-flex flex-column">
                        <label for='bpdiastolic'>PA Diastólica</label>
                        <input type="text" id="bpdiastolic" className="form-control form-control-sm"/>
                    </div>
                    <div className="col d-flex flex-column ">
                        <label for='jaundice'>Icterícia</label>
                        <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='jaundice'>
                            {/* <option selected>Open this select menu</option> */}
                            <option value="1">Um</option>
                            <option value="2">Dois</option>
                            <option value="3">Três</option>
                        </select>
                    </div>

                </div>

                <div className="row my-4">
                    <div className="col d-flex flex-column ">
                    <label for='cyanosis'>Cianose</label>
                    <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='cyanosis'>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">Um</option>
                        <option value="2">Dois</option>
                        <option value="3">Três</option>
                    </select>
                    </div>
                    <div className="col d-flex flex-column ">
                    <label for='dehydration'>Desidratação</label>
                    <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='dehydration'>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">Um</option>
                        <option value="2">Dois</option>
                        <option value="3">Três</option>
                    </select>
                    </div>
                    <div className="col d-flex flex-column ">
                    <label for='anemia'>Anemia</label>
                    <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='anemia'>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">Um</option>
                        <option value="2">Dois</option>
                        <option value="3">Três</option>
                    </select>
                    </div>
                    <div className="col d-flex flex-column ">
                    <label for='edema'>Edema</label>
                    <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='edema'>
                        {/* <option selected>Open this select menu</option> */}
                        <option value="1">Um</option>
                        <option value="2">Dois</option>
                        <option value="3">Três</option>
                    </select>
                    </div>
                </div>
                <div className="row  my-2">
                    <div className="col-lg-3 d-flex flex-column ">
                        <label for='lymphadenopathy' >Linfadenopatia</label>
                        <div className=''>
                        <select className="form-select form-select-sm col " aria-label=".form-select-sm example" id='lymphadenopathy'>
                            {/* <option selected>Open this select menu</option> */}
                            <option value="1">Um</option>
                            <option value="2">Dois</option>
                            <option value="3">Três</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-2 mt-lg-0 d-flex flex-column">
                        <label for='finding'>Encontrando </label>
                        <textarea name="" id="finding" className='textarea' rows="4"></textarea>
                    </div>
                    <div className="col-lg-3 mt-2 mt-lg-0 d-flex flex-column">
                        <label for='remarks'>Observações</label>
                        <textarea name="" id="remarks" className='textarea' rows="4"></textarea>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default OnboardingTwo;