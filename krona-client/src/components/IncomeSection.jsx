
import { useState } from 'react'

function IncomeSection() {

    //inntekte liste - tom
    const [inntekter, setInntekter] = useState([])

    //lagre midl.tidig av input 
    const [navn, setNavn] = useState('')
    const [belop, setBelop] = useState('')

    //total beløp
    const total = inntekter.reduce(
        (sum, i) => sum + i.belop, 0
    )

    function leggTil() {
        if(!navn || !belop) return

        const ny = {
            id: Date.now(),
            navn: navn,
            belop: Number(belop)
        }

        setInntekter([...inntekter, ny])
        setNavn('')
        setBelop('')
    }

   return (
    <section className="card">
      <h2>Inntekter</h2>

      
      {inntekter.map((i) => (
        <div key={i.id} className="list-row">
          <span>{i.navn}</span>
          <span>{i.belop.toLocaleString('nb-NO')} kr</span>
        </div>
      ))}

      {/* Inputfelter til ny inntekt */}
      <div className="input-row">
        <input
          className="input"
          placeholder="Navn (f.eks. Lønn)"
          value={navn}
          onChange={(e) => setNavn(e.target.value)}
        />
        <input
          className="input input-small"
          placeholder="Beløp"
          type="number"
          value={belop}
          onChange={(e) => setBelop(e.target.value)}
        />
      </div>

      <button className="btn" onClick={leggTil}>
        Legg til Inntekt
      </button>

      {/* Vis total kun hvis det finnes inntekter */}
      {inntekter.length > 0 && (
        <div className="section-total">
          Totalt: {total.toLocaleString('nb-NO')} kr
        </div>
      )}
    </section>
  )
}

export default IncomeSection