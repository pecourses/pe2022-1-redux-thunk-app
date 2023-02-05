import './App.css'
import PurchaseForm from './components/forms/PurchaseForm/index'
import PurchasesList from './components/PurchasesList/index'

function App () {
  return (
    <>
      <header>
        <h1>Purchases List</h1>
      </header>
      <main>
        <PurchaseForm />
        <PurchasesList />
      </main>
    </>
  )
}

export default App
