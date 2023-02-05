import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://ullhgy.sse.codesandbox.io/'
})

export const getPurchases = () => httpClient.get('/contacts')

export const createNewPurchase = values => httpClient.post('/contacts', values)

// httpClient
//   .patch('/contacts/3599dfff-f8e1-4b88-a540-af5351ebecfe', { name: 'NewName' })
//   .then(data => console.log('data :>> ', data.data))
//   .catch(e => console.log('e :>> ', e))

export const deletePurchase = id => httpClient.delete(`/contacts/${id}`)
