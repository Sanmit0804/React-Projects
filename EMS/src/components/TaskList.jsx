import React from 'react'

const TaskList = () => {
    return (
        <>
            <div className="row m-5 gap-4 justify-content-center">
                <div className="col rounded p-3 shadow" style={{ minHeight: '150px', minWidth: '200px' }}>
                    <div className="d-flex justify-content-between">
                        <button className='btn btn-sm btn-danger'>High</button>
                        <span>30-03-2025</span>
                    </div>
                    <div className="header-text pt-3 fs-5">
                        Make a YouTube video
                    </div>
                    <div className='footer-text text-muted'>
                        nesciunt repellendus blanditiis rerum reiciendis, at rem magni, omnis non. Explicabo harum maiores quod delectus neque ipsa atque dolorem cupiditate possimus? Laboriosam numquam eos culpa, commodi similique delectus!
                        nesciunt repellendus blanditiis rerum reiciendis, at rem magni, omnis non. Explicabo harum maiores quod delectus neque ipsa atque dolorem cupiditate possimus? Laboriosam numquam eos culpa, commodi similique delectus!
                        nesciunt repellendus blanditiis rerum reiciendis, at rem magni, omnis non. Explicabo harum maiores quod delectus neque ipsa atque dolorem cupiditate possimus? Laboriosam numquam eos culpa, commodi similique delectus!
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskList