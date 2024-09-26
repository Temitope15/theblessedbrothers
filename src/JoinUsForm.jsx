import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const JoinUsForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // process.env.REACT_APP_EMAILJS_SERVICE_ID,
        // process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        // form.current,
        // process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className="max-w-md mx-auto my-auto p-6 bg-white rounded-lg h-full shadow-md">
      <h2 className="text-2xl font-bold mb-4">Join Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md hover:bg-primary-dark"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinUsForm;
