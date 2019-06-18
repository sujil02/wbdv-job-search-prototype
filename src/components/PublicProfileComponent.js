import React from 'react';

class PublicProfileComponent extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h4> {this.props.user.firstName} {this.props.user.lastName} </h4>
                </div>
                <div className="card-body">
                    <div className="form">
                        <div className="form-group row">
                            <label className="col-form-label col-sm-3">
                                User type
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       value={this.props.user.role}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-3">
                                Linked In
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       value={this.props.user.linked_in}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-form-label col-sm-3">
                                Email
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       value={this.props.user.email}/>
                            </div>
                        </div>

                        {this.props.user.role === "Recruiter" ? (
                            <div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">
                                        Company
                                    </label>
                                    <div className="col-sm-9">
                                        <input className="form-control"
                                               value={this.props.user.company}/>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">
                                        University
                                    </label>
                                    <div className="col-sm-9">
                                        <input className="form-control"
                                               value={this.props.user.university}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-form-label col-sm-3">
                                        Github
                                    </label>
                                    <div className="col-sm-9">
                                        <input className="form-control"
                                               value={this.props.user.linked_in}/>
                                    </div>
                                </div>

                            </div>
                        )}


                    </div>
                </div>
                <div className="card-footer bg-transparent">
                    <button className="btn btn-success" >
                        Follow this User
                    </button>
                </div>
            </div>
        )
    }
}

export default PublicProfileComponent;