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
];