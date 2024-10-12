 // Form validation schema using Yup

 import * as Yup from "yup";
 
export const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters long")
    .required("Message is required"),
});