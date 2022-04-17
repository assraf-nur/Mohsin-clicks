import React from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const HookForm = () => {
    const handleAppoint = () =>{
        toast(`Next Sunday is your Appointment.
                Please bring enough money to hire me.
                Because many like you took appointment but dont give money.
        `)
    }
    return (
        <div className='mt-5'>
            <Button className='p-3' onClick={handleAppoint}>Take Appointment</Button>
            <ToastContainer/>
        </div>
    );
};

export default HookForm;