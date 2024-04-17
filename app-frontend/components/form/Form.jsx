import React from 'react';
import { useForm } from "react-hook-form";

import Container from '../Container';
import Input from './Input';
import Label from './Label';
import Button from './Button';

import { fields } from '../../reusable/fields';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });

    const onSubmit =  (data) => {
       console.log(data);
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 p-6 border border-gray-300'>
            <>
                {fields.map((field) => (
                    <Container key={field.id}  classes={'flex space-x-4 pt-4'}>
                        <Label htmlFor={field.id} labelName={field.labelName} />
                        <Container classes={'flex flex-col w-full'}>
                            <Input
                                id={field.id}
                                type={field.type}
                                name={field.name}
                                register={register}
                                validation={field.validation}
                            />
                            {errors[field.name] && <p className="text-red-500 pt-2 text-left text-xs">{errors[field.name].message}</p>}
                        </Container>
                    </Container>
                ))}
            </>
            <Container classes="flex justify-center space-x-4 mt-6">
                <Button type="button" buttonLabel="Back"/>
                <Button type="submit" buttonLabel="Next"/>
            </Container>
        </form>
    );
};

export default Form;