import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import Container from '../Container';
import Input from './Input';
import Label from './Label';
import Button from './Button';

import { fields } from '../../reusable/fields';

const Form = () => {
    const [formStep, setFormStep] = useState(1);
    const totalForms = 4;

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });

    const onSubmit =  (data) => {
        if (formStep !== totalForms) {
            setFormStep(formStep + 1);
        }
    };

    const onBack = () => {
        if (formStep > 1) {
            setFormStep(formStep - 1);
        }
    };

    const FieldRenderer = ({ formStep }) => (
        <>
            {fields.filter((field) => field.step === formStep).map((field) => (
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
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 p-6 border border-gray-300'>
            {formStep === 1 && <FieldRenderer formStep={1} />}
            {formStep === 2 && <FieldRenderer formStep={2} />}
            {formStep === 3 && <FieldRenderer formStep={3} />}
            <Container classes="flex justify-center space-x-4 mt-6">
                <Button 
                    type="button" 
                    buttonLabel="Back" 
                    onBack={onBack}
                    classes={formStep === 1 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
                />
                {formStep !== 4 &&   
                    <Button 
                        type="submit" buttonLabel="Next" 
                        disabled={formStep === totalForms}  
                        classes={formStep === totalForms ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} 
                    />
                }
            </Container>
            {formStep === 4 && <div><h2>Thank you for your order!</h2></div>}
        </form>
    );
};

export default Form;