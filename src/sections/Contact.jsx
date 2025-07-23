import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

const Contact = () => {
  const formRef = useRef()

  const [Loading, setLoading] = useState(false)
  const [form, setform] = useState({
    name:'',
    email:'',
    message:'',
  })
  const handleChange = (e) => {
  const { name, value } = e.target;
  setform((prevForm) => ({
    ...prevForm,
    [name]: value,
  }));
}
  const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)

    try{
       await emailjs.send(
    'service_dggacuy',
    'template_mewwy4p',
    {
      from_name: form.name,
      to_name: 'Aryan',
      from_email: form.email,
      to_email: 'aj375067@gmail.com',
      message: form.message,

    },'OgozbHEDrCgsJRkrd')
    alert('Thank you for your message! I will get back to you as soon as possible.')
    setform({
      name:'',
      email:'',
      message:'',
    })
    }catch (error) {
      setLoading(false)
      console.log(error)
      alert('Something went wrong, Please try again later')
    }


     
  }
  

  return (
    <section className="c-space my-20" id="contact">
      <h3 className="head-text">Contact Me</h3>

      <div className="relative min-h-screen flex items-center justify-center flex-col  mt-5 ">
          <img src="/3d_Protfolio/assets/terminal.png" alt="" className="absolute inset-0 min-h-screen"/>
          <div className="contact-container">
            <h3 className="head-text mt-10">Let's Talk</h3>
            <p className="text-lg text-white-600 mt-3">
              Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
              life, I’m here to help.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                <label htmlFor="" className="space-y-3 ">
                  <span className="field-label">Full Name</span>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="John xyz"/>
                </label>
                <label htmlFor="" className="space-y-3 ">
                  <span className="field-label">Email</span>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="Johnxyz@email.com"/>
                </label>
                <label htmlFor="" className="space-y-3 ">
                  <span className="field-label">Your Message</span>
                  <textarea  name="message" value={form.message} onChange={handleChange} required className="field-input" placeholder="Hi We Want to..." rows={4}/>
                </label>
                <button className={`field-btn cursor-${Loading ? "progress" : "pointer"}`} type="submit" disabled={Loading}>
                  {Loading ? "Sending..." : "Send Message"}
                  <img src="/3d_Protfolio/arrow-up.png" alt="" className={`field-btn_arrow`} />
                </button>
            </form>
          </div>
      </div>

    </section>
  )
}

export default Contact