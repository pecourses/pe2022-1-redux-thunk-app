import React from 'react'
import { connect } from 'react-redux'

function PurchasesList ({ purchases, isFetching, error }) {
  return (
    <ul>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!!ERROR!!!!</div>}
      {!error && purchases.map(p => <li key={p.id}>{p.value}</li>)}
    </ul>
  )
}

const mapStateToProps = ({ purchasesData }) => purchasesData

export default connect(mapStateToProps)(PurchasesList)

// прописати чанку і builder cases для отримання даних з сервера
