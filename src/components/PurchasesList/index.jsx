import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  deletePurchase,
  getPurchases
} from './../../store/slices/purchasesSlice'

function PurchasesList ({ purchases, isFetching, error, get, remove }) {
  useEffect(() => {
    get()
  }, [])

  return (
    <ul>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!!ERROR!!!!</div>}
      {!error &&
        purchases.map(p => (
          <li key={p.id}>
            <button
              onClick={() => {
                remove(p.id)
              }}
            >
              X
            </button>
            {p.value}
          </li>
        ))}
    </ul>
  )
}

const mapStateToProps = ({ purchasesData }) => purchasesData

const mapDispatchToProps = dispatch => ({
  get: () => dispatch(getPurchases()),
  remove: id => dispatch(deletePurchase(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PurchasesList)

// прописати чанку і builder cases для отримання даних з сервера
