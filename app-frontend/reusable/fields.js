export const fields = [
    {
        step: 1,
        id: 'firstName',
        labelName: 'First name',
        type: 'text',
        name: 'firstName',
        validation: {
            required: 'First name is a required field',
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'First name should not contain numbers',
            },
        },
    },
    {
        step: 1,
        id: 'lastName',
        labelName: 'Last name',
        type: 'text',
        name: 'lastName',
        validation: {
            required: 'Last name is a required field',
            pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Last name should not contain numbers',
            },
        },
    },
    {
        step: 1,
        id: 'age',
        labelName: 'Age',
        type: 'number',
        name: 'age',
        validation: {
            required: 'Age must be a number',
            pattern: {
                value: /^[+]?\d+([.]\d+)?$/i,
                message: 'Age should be positive',
            },
        },
    }, 
    {
        step: 2,
        id: 'email',
        labelName: 'email',
        type: 'email',
        name: 'email',
        validation: {
            required: 'Email is a required field',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Email should have correct format',
            },
        },
    }, 
    {
        step: 2,
        id: 'phone',
        labelName: 'phone',
        type: 'tel',
        name: 'phone',
        validation: {
            required: 'Phone number is a required field',
        },
    },
    {
        step: 3,
        id: 'seat',
        labelName: 'Seat',
        type: 'text',
        name: 'seat',
        validation: {
            required: 'Seat is a required field',
        },
    },
    {
        step: 3,
        id: 'food',
        labelName: 'Food',
        type: 'text',
        name: 'food',
        validation: {
            required: 'Food is a required field',
        },
    },
    {
        step: 3,
        id: 'allergies',
        labelName: 'Allergies',
        type: 'text',
        name: 'allergies',
        validation: {
            required: 'Allergies is a required field',
        },
    }
];