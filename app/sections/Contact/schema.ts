import * as Yup from 'yup';

export const schema = Yup.object().shape({
    name: Yup.string().max(50, 'Enter a shorter name').required('Required'),
    email: Yup.string().email('Invalid email').required('An email is required'),
    message: Yup.string()
        .max(5000, 'Limit your message to under 5000 characters.')
        .required('A message is required.'),
});
