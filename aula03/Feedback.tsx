// Para o componente de Feedback funcionar, lembre-se de instalar os ícones do bootstrap pela Bootstrap Icons.
// Instale com o seguinte comando: npm i bootstrap-icons
// Depois, adicione no layout esse import: import 'bootstrap-icons/font/bootstrap-icons.css'

export function Feedback({
  title,
  description,
  icon,
}: {
  title: string
  description?: string
  icon: string
}) {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center py-5 text-center'>
      <i className={`bi ${icon} fs-1 mb-3 text-secondary`} />

      <h5 className='mb-2'>{title}</h5>

      {description && <p className='text-body-secondary mb-0'>{description}</p>}
    </div>
  )
}
