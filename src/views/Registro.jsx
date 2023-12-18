import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Registro = () => {

  return (
    <div>
      <div className='login'>
        <div className='container-login'>
          <div className='card-login'>
            <div className='title-login'>
              <h3>Registrarse</h3>
              <hr />
            </div>
            <Form className="inputs-register" >
              <div className='email-password'>
                <p>Email</p>
                <Form.Control type="email" placeholder="Ingrese su Email" name="email" required />
              </div>
              <div className='email-password'>
                <p>Contraseña</p>
                <Form.Control type="password" placeholder="Nueva contraseña" name="password" required />
              </div>
              <div className='email-password'>
                <p>Repetir contraseña</p>
                <Form.Control type="password" placeholder="Nueva contraseña" name="repeatPassword" required />
              </div>
              <div className='name-validation'>
                <div>
                  <p>Nombre</p>
                  <Form.Control type="text" placeholder="Ingrese su nombre" name="name" required />
                </div>
                <div>
                  <p>Apellido</p>
                  <Form.Control type="text" placeholder="Ingrese su apellido" name="lastName" required />
                </div>
              </div>
              <Button id="btn-register" type='submit' variant='primary'>Registrarse</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro