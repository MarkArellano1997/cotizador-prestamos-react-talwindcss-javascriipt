import { useState } from "react"
import Header from "./components/Header"
import { calcularTotalPagar, formatCurrency } from "./helpers/app"
import Button from "./components/Button"

function App() {

  const [cantidad, setCantidad] = useState(10000)
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)

  setTimeout(()=>{
    setTotal(calcularTotalPagar(cantidad,meses));
    setPago(total/meses)
  },[cantidad, meses])

  const min = 0
  const max = 20000
  const step = 100

  const handleInput = (e) => {
    setCantidad(+e.target.value);
  }

  function handleClickDecrement() {
    const resultado = cantidad - step

    if (resultado < min) {
      alert('Cantidad no valida')
      return
    }

    setCantidad(resultado)
  }

  function handleClickIncrement() {
    const resultado = cantidad + step

    if (resultado > max) {
      alert('Cantidad no valida')
      return
    }

    setCantidad(resultado)
  }

  function handleSelect(e) {
    setMeses(+e.target.value);
    
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow my-20 p-10">
      <Header />

      <div className="flex justify-between mt-6">
        <Button
          operador={"-"}
          fn={handleClickDecrement}
        />

        <Button
          operador={"+"}
          fn={handleClickIncrement}
        />
      </div>

      <input
        type="range"
        className="w-full bg-gray-500 accent-lime-500 mt-6 hover:accent-lime-600"
        min={min}
        max={max}
        step={step}
        value={cantidad}
        onChange={handleInput}
      />
      <p className="text-center text-5xl font-extrabold mt-5 text-indigo-500">
        {formatCurrency(cantidad)}
      </p>

      <p
        className="text-center mt-6 font-bold text-gray-500"
      >
        Interés <span className="text-indigo-500">Anual:</span> 17.5%
      </p>

      <h2 className="text-center font-extrabold text-2xl text-gray-500 mt-4">
        Elige un <span className="text-indigo-500">plazo</span> a pagar
      </h2>

      <select
        name="" id=""
        className="w-full mt-6 p-2 text-center border rounded-md text-gray-500 font-bold text-xl"
        value={meses}
        onChange={handleSelect}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

      <div className="w-full text-center text-gray-500 bg-gray-100 mt-8 rounded-md shadow">
        <h3 className="text-2xl font-extrabold">Resumen de <span className="text-indigo-500">Pagos</span></h3>
        <div className="font-bold text-xl">
          <p className="py-1">Meses: {meses}</p>
          <p className="py-1">Total a Pagar: {formatCurrency(total)}</p>
          <p className="py-1">Cuotas mensuales: {formatCurrency(pago)}</p>
        </div>
      </div>

    </div>
  )
}

export default App
