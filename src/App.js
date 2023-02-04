import './App.css'
import PurchaseForm from './components/forms/PurchaseForm/index'

function App () {
  return (
    <>
      <header>
        <h1>Purchases List</h1>
      </header>
      <main>
        <PurchaseForm />
        {/* <PurchasesList /> */}
      </main>
    </>
  )
}

export default App
