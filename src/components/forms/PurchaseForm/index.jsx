import { ErrorMessage, Field, Form, Formik } from 'formik'
import { PURCHASE_VALIDATION_SCHEMA } from '../../../utils/validationSchemas'

function PurchaseForm () {
  const initialValues = { value: '' }

  const handleSubmit = (values, formikBag) => {
    console.log(values)
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={PURCHASE_VALIDATION_SCHEMA}
    >
      <Form>
        <Field name='value' type='text' placeholder='new purchase' autoFocus />
        <ErrorMessage name='value' component='span' />
        <button type='submit'>Add</button>
      </Form>
    </Formik>
  )
}

export default PurchaseForm
