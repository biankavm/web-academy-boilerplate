'use client'

import Link from 'next/link'

export default function Login() {
  return (
    <main>
      <div className='container-fluid d-flex min-vh-100'>
        <div className='row min-vw-100 g-0'>
          <div className='col-12 col-md-4 bg-body-tertiary d-flex flex-column justify-content-center align-items-center p-5'>
            <h2 className='fw-bold mb-2 text-center'>Bem vindo à WA Loja!</h2>
            <p className='text-body-secondary text-center mb-0'>
              Que bom ter você de volta.
            </p>
          </div>

          <div className='col-12 col-md-8 d-flex justify-content-center align-items-center p-4'>
            <div
              className='card border-0 shadow-sm rounded-4 w-100'
              style={{ maxWidth: 420 }}
            >
              <div className='card-body p-4 p-md-5'>
                <h4 className='card-title fw-bold mb-4'>Entrar</h4>

                <form>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      className='form-control form-control-lg'
                      id='email'
                      aria-describedby='email'
                      required
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>
                      Senha
                    </label>
                    <input
                      type='password'
                      className='form-control form-control-lg'
                      id='password'
                      required
                    />
                  </div>

                  <div className='d-grid col-12'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-lg rounded-3'
                    >
                      Entrar
                    </button>
                  </div>

                  <div className='text-center mt-3'>
                    <Link href='/register' className='btn btn-link'>
                      não tenho cadastro
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
