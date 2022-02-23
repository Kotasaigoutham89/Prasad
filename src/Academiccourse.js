import './App.css';


function Academiccourse() {

    return (
        <>
            <div className="main_container" style={{ backgroundColor: "rgb(223,246,221)" }}>
                <div className='course-container'>
                    
                    <div className='academiccourse-items'>
                    <div className='course-heading'>
                        Academic Course
                    </div>
                        <div className='items'>
                            <div>
                                Sustainability Course Title
                            </div>
                            <input type="text" />
                        </div>
                        <div className='items'>
                            <div>
                                Department
                            </div>
                            <input type="text" />
                        </div>
                        <div className='items'>
                            <div>
                                Level of Course
                            </div>
                            <input type="text" />
                        </div>
                        <div className='items'>
                            <div>
                                Brief  Course Description
                            </div>
                            <input type="text" />
                        </div>
                        <div className='items'>
                            <div>
                                Course Type
                            </div>
                            <input type="text" />
                        </div>
                        <div className='items'>
                            <div>
                                Semester Offered
                            </div>
                            <input type="text" />
                        </div>
                        <div className='items'>
                            <div>
                                Year Offered
                            </div>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Academiccourse;
