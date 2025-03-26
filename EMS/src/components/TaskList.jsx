import React from 'react'

const TaskList = () => {
    return (
        <div className="m-5 task-container" style={{ overflowX: "auto", whiteSpace: "nowrap", padding: "10px" }}>
            <div className="d-inline-flex gap-4">
                <div className="border rounded p-3" style={{ minHeight: '150px', minWidth: '200px', maxWidth: '340px' }}>
                    <div className="d-flex justify-content-between">
                        <button className='btn btn-sm btn-danger'>High</button>
                        <span>30-03-2025</span>
                    </div>
                    <div className="header-text pt-3 fs-5">
                        Make a YouTube video
                    </div>
                    <div className='footer-text text-muted text-truncate text-wrap' style={{ textAlign: 'justify' }}>
                        nesciunt repellendus blanditiis rerum reiciendis, at rem magni, omnis non. Explicabo harum maiores quod
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskList;