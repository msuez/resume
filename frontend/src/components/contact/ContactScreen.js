import React from 'react'

export const ContactScreen = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7 col-sm-12">
                <h3>Contact form</h3>
                <form>
                    <label for="email">Email:</label>
                    <div className="form-group">
                    <input type="email" id="email" className="form-control" />
                    </div>
                    <label for="comment" className="mt-3">Comment:</label>
                    <div className="form-group">
                    <input type="text" id="comment" className="form-control" />
                    </div>
                    <button className="btn btn-primary btn-lg mt-3">
                    Send comment
                    </button>
                </form>
                </div>
                <div className="col-md-5 col-sm-12">
                <h3>Contact info</h3>
                <ul>
                    <li>Name: Matias</li>
                    <li>Surname: Suez</li>
                    <li>Email: <a href="mailto:msuez.dev@gmail.com">msuez.dev@gmail.com</a></li>
                    <li>Phone: <a href="tel:+54 9 11 6928 1176">+54 9 11 6928 1176</a></li>
                    <li>Language: Spanish / English</li>
                </ul>
                </div>
            </div>
        </div>
    )
}
