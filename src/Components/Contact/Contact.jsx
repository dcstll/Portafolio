import style from './Contact.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser'
import swal from 'sweetalert2';
import React, { useState } from 'react';
import gato from '../../img/Logoconcolor.png'

function Contact() {
  emailjs.init("elzEwAqLAGUz1Kgbs");

  //form vars
  const [to, setTo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //form data
  const handleChangeName = (e) => {
    setTo(e.target.value);
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  //email js
  function emailDatSend() {
    emailjs.send('service_5zwx8jd', 'template_am8y4td', { //service id - template id
      to,
      email,
      message
    }, 'elzEwAqLAGUz1Kgbs') //user id
      .then(() => {
        //sweet alert send popup {
        swal("Email enviado correctamente", "Dentro de poco estare en contacto contigo", "success")
      })
      .catch(() => {
        //sweet alert error popup
        swal("No se pudo enviar el email", "revisa los datos escritos e intenta nuevamente mas tarde", "error")
      })

    setTo("")
    setEmail("")
    setMessage("")
  }

  return (
    <div data-aos="fade-left" data-aos-duration="1500">
      <section>
        <div className={style.backgroundcolor}>
          <div className={style.gato}>
            <img src={gato} alt="logo" />
          </div>
        </div>
      </section>

      <div className={style.section} > 
        <div className={style.Container_c} id='contact'>
          <div className={style.container_c1}>
            <div className="Title">
              <h1 id={style.title}>Contact me!</h1>
            </div>

            <div className={style.formcontainer}> 

              <Form onSubmit={emailDatSend}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label id={style.message}>Name</Form.Label>
                  <Form.Control
                    onChange={handleChangeName}
                    id={style.input}
                    type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label name='correo' id={style.message}>Email</Form.Label>
                  <Form.Control className={style.input}
                    onChange={handleChangeEmail}
                    id={style.input}
                    type="email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label id={style.message}>Message</Form.Label>
                  <Form.Control
                    onChange={handleChangeMessage}
                    id={style.input_m}
                    as="textarea"
                    rows={5} />
                </Form.Group>

                <div className={style.BTN_c}>
                  <Button id={style.btn} type="submit">
                    submit
                  </Button>
                </div>

              </Form>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact