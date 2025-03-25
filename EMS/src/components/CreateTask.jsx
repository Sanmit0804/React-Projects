import React from 'react';

const CreateTask = () => {
    return (
        <div className="admin-form mx-5 p-2">
            <form className="row border shadow p-3 rounded">
                {/* Left Side (Task Title, Date, Assign To, Category) */}
                <div className="col-md-6">
                    <div className="mb-3">
                        <label className="form-label">Task Title</label>
                        <input type="text" className="form-control" placeholder="Make a UI design" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input type="date" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Assign To</label>
                        <input type="text" className="form-control" placeholder='Employee name' />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" placeholder="Design, Development, etc..." />
                    </div>
                </div>

                {/* Right Side (Description, Submit Button) */}
                <div className="col-md-6 d-flex flex-column justify-content-between">
                    <div className="mb-3 flex-grow-1">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" rows="6" placeholder="Detailed description of task (Max 500 words)"></textarea>
                    </div>

                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Create Task</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
