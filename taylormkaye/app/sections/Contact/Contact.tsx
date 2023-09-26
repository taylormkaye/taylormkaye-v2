'use client';
import Button from '@/app/components/Button/Button';
import { Field, Form, Formik } from 'formik';

const Contact = () => {
    return (
        <div className="flex flex-col gap-8">
            <p className="text-center text-2xl">Get in touch 👋</p>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.message) {
                        errors.message = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="flex flex-col gap-4 ">
                    <Field
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="form-element"
                        // onChange={this.updateInput}
                        // value={this.state.name}
                    />
                    <Field
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="form-element"
                        // onChange={this.updateInput}
                        // value={this.state.email}
                    />
                    <Field
                        rows={6}
                        as="textarea"
                        name="message"
                        id="message"
                        placeholder="Message"
                        className="form-element"
                        // onChange={this.updateInput}
                        // value={this.state.message}
                    />
                    <Button type="submit" className="form-element">
                        Send message
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default Contact;
