import { Formik, Form } from "formik";
import { ContactFormSchema } from "./schema/ContactFormSchema";
import { sanitizeInput } from "./utils/sanitize";
import FormField from "./components/FormField";
import ContactLinks from "./components/ContactLinks";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className="max-w-md mx-auto md:mx-0 md:max-w-full p-6 bg-gray-800 shadow-md text-center"
    >
      <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>

      {/* Contact Links Section */}
      <ContactLinks />
      <br />
      <p className="text-white mb-4">Any enquiries? Send us an email!</p>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, { resetForm }) => {
          // This will Sanitize inputs before using them
          const sanitizedValues = {
            name: sanitizeInput(values.name),
            email: sanitizeInput(values.email),
            message: sanitizeInput(values.message),
          };

          const mailtoLink = `mailto:blessedbrothers21@yahoo.com?subject=Message%20from%20the%20website.&body=Hi, my name is ${sanitizedValues.name}.%0D%0A%0D%0A${sanitizedValues.message}%0D%0A%0D%0AEmail: ${sanitizedValues.email}`;

          window.location.href = mailtoLink;

          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="md:w-3/4 mx-auto">
            <FormField label="Name" name="name" placeholder="Enter your name" />
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <FormField
              label="Message"
              name="message"
              as="textarea"
              rows="5"
              placeholder="Enter your message"
            />

            <button
              type="submit"
              className="bg-accent hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Email"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
