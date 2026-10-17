"use client"

import Image from "next/image"

export default function ProductDetail() {
  return (
    <main>
      <div className='container p-5'>
        <div className='card border-0 shadow-sm rounded-4 mb-4'>
          <div className='card-body p-4 p-md-5'>
            <h5 className='card-title mb-4 fw-bold'>Detalhes do produto</h5>

            <div className='row g-5 align-items-center'>
              <div className='col-12 col-md-5 text-center'>
                <Image
                  key={""}
                  src={""}
                  alt={""}
                  width={300}
                  height={320}
                  className='img-fluid rounded-3'
                />
              </div>

              <div className='col-12 col-md-7'>
                <h5 className='card-title mb-4 fw-bold fs-2'>Nome produto</h5>

                <p className='card-text fs-4 fw-bold mb-3'>
                  Valor: R${Number(2000).toFixed(2)}
                </p>
                <p className='card-text text-body-secondary mb-2'>
                  Descrição: ""
                </p>
                <p className='card-text text-body-secondary mb-0'>
                  Anunciado por: ""
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
