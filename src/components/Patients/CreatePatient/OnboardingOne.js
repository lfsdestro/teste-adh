const OnboardingOne = () => {
    return (
        <div className='row bg-white shadow-sm rounded p-0 m-0 ' >

            <form className='p-3 m-0 container-fluid cp-fontsizemediaquery' style={{ fontSize: '0.875rem', boxSizing: 'border-box' }}>
                <div className="row justify-content-center">
                    <div className="profile-button-circle"></div>
                </div>
                <div className=' mt-3 row p-3 m-0  ' style={{ backgroundColor: '#fbfafb' }}>
                    <div className='col-sm m-0' >
                        <div className='row '>
                            <label className='form-label col-sm-5 text-sm-end m-0 align-self-center ps-0' for='fullname'>Nome completo:</label>
                            <input type=" " className="form-control form-control-sm col" id='fullname' />
                        </div>
                        <div className='row mt-2'>   
                            <label className='form-label m-0 align-self-center text-sm-end col-sm-5 ps-0'>Data de nascimento:</label>
                            <div className='col g-0 text-start py-1 '>
                            <i class="far fa-calendar-alt fs-5 px-2 m-0" ></i>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <label className='form-label m-0 align-self-start text-sm-end col-sm-5 ps-0' for='gender'>
                                Gênero:
                            </label>
                            <div className='col d-flex justify-content-around '>


                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="radiobutton" id="flexRadioDefault1" value='male' />
                                    <label className='form-check-label ' for="flexRadioDefault1">Masculino</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="radiobutton" id="flexRadioDefault2" value='female' />
                                    <label className='form-check-label' for="flexRadioDefault2">Feminino</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type="radio" name="radiobutton" id="flexRadioDefault3" value='others' />
                                    <label className='form-check-label' for="flexRadioDefault3">Outro</label>
                                </div>


                            </div>
                        </div>
                        

                    </div>
                    <div className='col-sm m-0'>
                        <div className='row p-sm-1'>
                            <label className='form-label col-sm-5  m-0 align-self-center text-sm-end ps-0' for='idtype'>Tipo de identificação:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm col" aria-label=".form-select-sm example" id='idtype'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1">Um</option>
                                <option value="2">Dois</option>
                                <option value="3">Três</option>
                            </select>
                        </div>
                        <div className='row p-sm-1 '>
                            <label className='form-label col-sm-5 m-0 align-self-center text-sm-end ps-0' for='idnum'>Número de Identificação:</label>
                            <input type=" " className="form-control form-control-sm col" id='idnum' />
                        </div>
                        <div className='row p-sm-1'>
                            <label className='form-label  col-sm-5 m-0 align-self-center text-sm-end ps-0' for='mobile'>Celular:</label>
                            <input type="phoneno" className="form-control form-control-sm col" id='mobile' />
                        </div>
                        <div className='row p-sm-1'>
                            <label className='form-label  col-sm-5 m-0 align-self-center text-sm-end ps-0' for='email'>Email:</label>
                            <input type="Email" className="form-control form-control-sm col" id='email' />
                        </div>
                    </div>

                    <p className='fw-bold text-secondary px-0'>Endereço:</p>
                    <div className='row  g-0 gx-md-2 '>

                        <div className="col-md  d-flex flex-lg-row flex-column align-items-start align-items-lg-center">
                            <label className='form-label  m-0' for='district'>Bairro:</label>
                        
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='district'>
                                <option value="1">Um</option>
                                <option value="2">Dois</option>
                                <option value="3">Três</option>
                            </select>
                        </div>

                        <div className="col-md  d-flex flex-lg-row flex-column align-items-start align-items-lg-center" >
                            <label className='form-label m-0' for='localbody' style={{ whiteSpace: 'nowrap' }}>Orgão local:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='localbody'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1"></option>
                                <option value="2"></option>
                                <option value="3"></option>
                            </select>
                        </div>
                        <div className="col-md  d-flex flex-lg-row flex-column align-items-start align-items-lg-center">
                            <label className='form-label m-0 ' for='ward'>Ala:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='ward'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1"></option>
                                <option value="2"></option   >
                                <option value="3"></option>
                            </select>
                        </div>
                        <div className="col-md  d-flex flex-lg-row flex-column align-items-start align-items-lg-center">
                            <label className='form-label  m-0' for='street'>Rua:</label>
                            {/* <input type=" " className="form-control form-control-sm col" /> */}
                            <select class="form-select form-select-sm " aria-label=".form-select-sm example" id='street'>
                                {/* <option selected>Open this select menu</option> */}
                                <option value="1"></option>
                                <option value="2"></option>
                                <option value="3"></option>
                            </select>
                        </div>


                    </div>
                </div>
                <div className="row fw-bold  p-0 m-0 mt-3 " style={{ backgroundColor: '#fbfafb' }}>
                    <div className='col-lg col-sm-6 d-flex flex-column'>
                        <label for='pastillnesshistory '>Histórico de doenças anteriores</label>
                        <textarea id="pastillnesshistory" className='textarea' rows='4' ></textarea>
                    </div>
                    <div className='col-lg  col-sm-6 d-flex flex-column'>
                        <label for='familyandpersonalhistory'>História familiar e pessoal</label>
                        <textarea id="familyandpersonalhistory" className='textarea' rows='4'></textarea>
                    </div>
                    <div className='col-lg col-sm-6  d-flex flex-column'>
                        <label for='allergyhistory'>Histórico de alergia</label>
                        <textarea id="allergyhistory" className='textarea' rows='4'></textarea>
                    </div>
                    <div className='col-lg  col-sm-6 d-flex flex-column'>
                        <label for='medicinehistory'>Histórico médico</label>
                        <textarea id="medicinehistory" className='textarea' rows='4'></textarea>
                    </div>
                </div>



            </form>

        </div>
    );
}

export default OnboardingOne;