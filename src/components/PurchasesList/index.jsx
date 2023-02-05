import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPurchases } from './../../store/slices/purchasesSlice'

function PurchasesList ({ purchases, isFetching, error, get }) {
  useEffect(() => {
    get()
  }, [])

  return (
    <ul>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!!ERROR!!!!</div>}
      {!error && purchases.map(p => <li key={p.id}>{p.value}</li>)}
    </ul>
  )
}

const mapStateToProps = ({ purchasesData }) => purchasesData

const mapDispatchToProps = dispatch => ({ get: () => dispatch(getPurchases()) })

export default connect(mapStateToProps, mapDispatchToProps)(PurchasesList)

// прописати чанку і builder cases для отримання даних з сервера
