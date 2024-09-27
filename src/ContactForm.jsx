import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Form validation schema using Yup
const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, 'Name must be 50 characters or less')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters long')
    .required('Message is required'),
});

const ContactForm = () => {
  return (
    <div id="contact"className="max-w-md mx-auto md:mx-0 md:max-w-full  p-6 bg-gray-800 shadow-md text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
      <p className="text-white mb-4">Any questions? Send us an email!</p>
      
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, { resetForm }) => {
          // Construct the mailto link with form values
          const mailtoLink = `mailto:blessedbrothers21@yahoo.com?subject=Message%20from%20the%20website.&body=Hi, my name is ${values.name}.%0D%0A%0D%0A${values.message}%0D%0A%0D%0AEmail: ${values.email}`;

          // Redirect to mailto link (this will open the user's default email client)
          window.location.href = mailtoLink;

          // Reset form after submission
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className='md:w-3/4 mx-auto'>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                rows="5"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Enter your message"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-accent hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Email'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
