import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userProject: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('Thank you for your message!');
        setFormData({ userName: '', userEmail: '', userProject: '' }); // Reset form
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setError('Failed to send the message. Please try again later.');
      });
  };

  return (
    <section className="contact section py-16 bg-gray-100" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="section__title text-4xl font-bold text-center mb-2">Contact Me</h2>
        <span className="section__subtitle text-lg text-center text-gray-600">Get in touch</span>

        <div className="contact__container grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Contact Information */}
          <div className="contact__content bg-white p-6 rounded-lg shadow-md">
            <h3 className="contact__title text-2xl font-semibold mb-4">
              <i className="ri-chat-3-line mr-2"></i> Talk to me
            </h3>

            <div className="contact__info">
              <div className="contact__data mb-4">
                <span className="contact__data-title font-medium">Email</span>
                <span className="contact__data-info block">{`evaviji64@gmail.com`}</span>
              </div>

              <div className="contact__data mb-4">
                <span className="contact__data-title font-medium">Whatsapp</span>
                <span className="contact__data-info block">+8148552971</span>
                <a
                  href="https://api.whatsapp.com/send?phone=918754466139&text=Hello, more information!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__button mt-2 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__content bg-white p-6 rounded-lg shadow-md">
            <h3 className="contact__title text-2xl font-semibold mb-4">
              <i className="ri-send-plane-line mr-2"></i> Hire Me!
            </h3>

            <form onSubmit={handleSubmit} className="contact__form" id="contact-form">
              <div className="contact__form-div mb-4">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  name="userName"
                  required
                  placeholder="Write your name"
                  className="contact__form-input border rounded p-2 w-full"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form-div mb-4">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="email"
                  name="userEmail"
                  required
                  placeholder="Write your mail"
                  className="contact__form-input border rounded p-2 w-full"
                  value={formData.userEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__form-div contact__form-area mb-4">
                <label className="contact__form-tag">Project</label>
                <textarea
                  name="userProject"
                  placeholder="Write your message"
                  className="contact__form-input border rounded p-2 w-full h-32"
                  value={formData.userProject}
                  onChange={handleChange}
                ></textarea>
              </div>

              {message && <p className="contact__message text-green-600">{message}</p>}
              {error && <p className="contact__message text-red-600">{error}</p>}

              <button type="submit" className="contact__button bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                Submit <i className="ri-arrow-right-up-line"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
