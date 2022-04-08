import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div>
            <div className="error-main-area text-center">
                <div className="error img text-center">
                    <img src={"https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?size=626&ext=jpg&ga=GA1.1.930408535.1648299895"} alt="" />
                </div>
                <h2 className='error-text text-center'><span className='opp-cls'>Oops!</span> Page Not Found...</h2>
                <div className="return-home text-center">
                    <Button variant="success">
                        <Link className='error-link' to='/home'>Back To Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Error;