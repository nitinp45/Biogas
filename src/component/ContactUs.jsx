import React from 'react'

export const ContactUs=() =>{
  return (
    <div>
      <section className="bg-green-600 text-white py-20" style={{backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/5433129/pexels-photo-5433129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
       }}>
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        </div>
      </section>

      <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-lg font-bold text-green-600 mb-2">
              Contact Information
            </h2>
            <p className="text-5xl font-bold text-black mb-6">
              We are Available 24/7
            </p>
            <p className="text-md text-gray-400 mb-2">
              For any queries, questions, or feedback, please reach out to our
              customer support team.
            </p>
            <p className="text-md text-gray-400 mb-2">
              You can contact us via email at
              <a href="mailto:qI1JF@example.com" className="text-green-600 font-bold hover:underline">
                qI1JF@example.com
              </a>
              , or call us at
              <a href="tel:+1234567890" className="text-green-600 font-bold hover:underline">
                +1234567890
              </a>
              .
            </p>
            <p className="text-md text-gray-400 mb-2">
              We look forward to hearing from you and assisting you in any way we
              can.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold text-green-600 mb-2">
              Get in Touch
            </h2>
            <form className="mt-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 font-bold mb-2">
                  Name
                </label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 font-bold mb-2">
                  Email
                </label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}


