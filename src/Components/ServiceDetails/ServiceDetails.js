import React from 'react';
import { useParams } from 'react-router-dom';
import HookForm from '../HookForm/HookForm';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div className='container mt-3 text-center'>
            <h2>Oww Great. You Choose our plan number : {serviceId}</h2>
            <HookForm></HookForm>
        </div>
    );
};

export default ServiceDetails;