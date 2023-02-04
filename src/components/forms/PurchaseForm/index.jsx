import { ErrorMessage, Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { PURCHASE_VALIDATION_SCHEMA } from '../../../utils/validationSchemas'
import { createPurchase } from '../../../store/slices/purchasesSlice'

function PurchaseForm ({ create }) {
  const initialValues = { value: '' }

  const handleSubmit = (values, formikBag) => {
    create(values)
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

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(createPurchase(values))
})

export default connect(null, mapDispatchToProps)(PurchaseForm)
