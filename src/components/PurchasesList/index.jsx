import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  deletePurchase,
  getPurchases,
  updatePurchase
} from './../../store/slices/purchasesSlice'

function PurchasesList ({ purchases, isFetching, error, get, remove, update }) {
  useEffect(() => {
    get()
  }, [])

  const isBoughtChangeHandler = (id, checked) => {
    update(id, { isBought: checked })
  }

  return (
    <ul>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!!ERROR!!!!</div>}
      {!error &&
        purchases.map(p => (
          <li key={p.id}>
            <input
              type='checkbox'
              checked={p.isBought}
              onChange={({ target: { checked } }) =>
                isBoughtChangeHandler(p.id, checked)
              }
            />
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
  remove: id => dispatch(deletePurchase(id)),
  update: (id, values) => dispatch(updatePurchase({ id, values }))
})

export default connect(mapStateToProps, mapDispatchToProps)(PurchasesList)

// прописати чанку і builder cases для отримання даних з сервера
