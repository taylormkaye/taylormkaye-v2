'use client';

import Button from '@/app/components/Button/Button';
import { Field, Form, Formik } from 'formik';
import { schema } from './schema';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const onSubmit = (values: Record<string, unknown> | undefined) => {
        emailjs
            .send(
                'service_iu4808j',
                'template_8fgqvda',
                values,
                'user_LltVbwwST92SOcRB7diWe'
            )
            .then(
                () => {
                    toast.success('Message sent!');
                },
                (error) => {
                    console.error(error);
                    toast.error(
                        'Error, message unable to send, try again later or contact me via your email provider.'
                    );
                }
            );
    };

    return (
        <div className="flex min-h-screen flex-col justify-center gap-8">
            <p className="text-center text-2xl">Get in touch 👋</p>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={schema}
                onSubmit={(values, { resetForm }) => {
                    onSubmit(values);
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className="flex flex-col gap-4 ">
                        <Field
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Name"
                            className={`form-element ${
                                errors.name && touched.name
                                    ? 'border-red-600'
                                    : ''
                            }`}
                        />
                        <Field
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="form-element"
                        />
                        <Field
                            rows={6}
                            as="textarea"
                            name="message"
                            id="message"
                            placeholder="Message"
                            className="form-element"
                        />
                        <Button
                            type="submit"
                            className="form-element"
                            disabled={
                                !touched.email ||
                                !touched.message ||
                                !touched.name ||
                                !!errors.email ||
                                !!errors.message ||
                                !!errors.name
                            }
                        >
                            Send message
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;
