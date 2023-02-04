import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://ullhgy.sse.codesandbox.io/'
})

// httpClient
//   .get('/contacts')
//   .then(data => console.log('data :>> ', data.data))
//   .catch(e => console.log('e :>> ', e))

export const createNewPurchase = values => httpClient.post('/contacts', values)

// httpClient
//   .patch('/contacts/3599dfff-f8e1-4b88-a540-af5351ebecfe', { name: 'NewName' })
//   .then(data => console.log('data :>> ', data.data))
//   .catch(e => console.log('e :>> ', e))

// httpClient
//   .delete('/contacts/832c32d3-2dea-45b4-b162-c277b4d53b1b')
//   .then(data => console.log('data :>> ', data.data))
//   .catch(e => console.log('e :>> ', e))
