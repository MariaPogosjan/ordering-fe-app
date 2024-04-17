import React from 'react';
import { useForm } from "react-hook-form";

import Container from '../Container';
import Input from './Input';
import Label from './Label';
import Button from './Button';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });

    const onSubmit =  (data) => {
       console.log(data);
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 p-6 border border-gray-300'>
            <Container classes="flex justify-center space-x-4 mt-6">
                <Label htmlFor="firstName" labelName="First Name" />
                <Input
                    id="firstName"
                    type="text"
                           
                />
            </Container>
            <Container classes="flex justify-center space-x-4 mt-6">
                <Button type="button" buttonLabel="Back"/>
                <Button type="submit" buttonLabel="Next"/>
            </Container>
        </form>
    );
};

export default Form;