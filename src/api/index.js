import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://ullhgy.sse.codesandbox.io/'
})

export const getPurchases = () => httpClient.get('/contacts')

export const createNewPurchase = values => httpClient.post('/contacts', values)

export const updatePurchase = (id, values) =>
  httpClient.patch(`/contacts/${id}`, values)

export const deletePurchase = id => httpClient.delete(`/contacts/${id}`)
