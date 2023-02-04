import * as yup from 'yup'

export const PURCHASE_VALIDATION_SCHEMA = yup.object({
  value: yup.string().trim().min(1).max(64).required()
})
