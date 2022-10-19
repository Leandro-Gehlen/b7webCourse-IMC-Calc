import { useState } from "react";
import styles from "./App.module.css";
import poweredImg from "./assets/powered.png";

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightFild, setWeightField] = useState<number>(0);


  const handleCalcBtn = () => {
    if (heightField && weightFild) {

    } else {
      alert("Digite todos os campos.")
    }
  }

  return (
    <>
      <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img src={poweredImg} alt="Powered by b7web" width={150} />
          </div>
        </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC.</h1>
            <p>IMC é o Índice de Massa Corpórea.Parâmetro adotado pela Organização mundial da saúde para calcular o peso ideal de cada pessoa.</p>
            <input
              type="number"
              placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
              value={heightField > 0 ? heightField : ''}
              onChange={e => setHeightField(parseFloat(e.target.value))}

            />
            <input
              type="number"
              placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
              value={weightFild > 0 ? weightFild : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}

            />
            <button onClick={handleCalcBtn}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            ...
          </div>

        </div>

      </div>
    </>
  )
}

export default App;
