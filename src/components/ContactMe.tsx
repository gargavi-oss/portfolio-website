import { useForm, type SubmitHandler } from "react-hook-form";
import Navbar from "./Navbar";
import { motion } from "motion/react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#0a0908] px-6 md:px-16 pt-24 min-h-screen w-full text-white">
      <Navbar />

      <motion.div initial={{scale:1, y:0}} animate={{scale: 1.04,y:5}} exit={{scale:1, y:0}} whileHover={{}} transition={{duration:3}} className="bg-[#2f3e46]/30 p-10 rounded-3xl shadow-md backdrop-blur-xl flex flex-col md:flex-row justify-between gap-10 mt-10">
      
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-4xl font-bold text-white hover:text-red-500">Get in Touch</h1>
          <p className="text-white/80">
            I'm open for suggestions or collaboration. Drop me a message below!
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
           
            <div>
              <label htmlFor="name" className="block hover:text-red-500 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full bg-[#1b1e1f] text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-red-400"
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block hover:text-red-500 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full bg-[#1b1e1f] text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-red-400"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block hover:text-red-500 font-medium mb-1">Message</label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows={5}
                className="w-full bg-[#1b1e1f] text-white border border-gray-600 rounded-lg p-3 focus:outline-none focus:border-red-400"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://github.com/ganraj21/Portfolio-Web-Application/assets/89139437/344fb8cc-138a-477f-bd8d-b44c57fae7e0"
            alt="Contact Illustration"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="text-center p-5 mt-10 text-white bg-[#0a0908] py-5 font-bold text-xl"
      >
        Made with ♥️ by Avi
      </motion.div>
    </div>
  );
};

export default ContactMe;
