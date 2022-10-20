import { useState } from "react";
import styles from "./App.module.css";
import poweredImg from "./assets/powered.png";
import { levels, calcImc, Level } from "./helpers/imc";
import { GridItem } from "./components/GridItem";
import arrow from "./assets/leftarrow.png";

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightFild, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);


  const handleCalcBtn = () => {
    if (heightField && weightFild) {
      setShowItem(calcImc(heightField, weightFild))
    } else {
      alert("Digite todos os campos.")
    }
  }

  const handleBackBtn = () => {

    setShowItem(null);
    setHeightField(0);
    setWeightField(0);
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
              disabled={showItem ? true : false}
            />
            <input
              type="number"
              placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
              value={weightFild > 0 ? weightFild : ''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
              disabled={showItem ? true : false}
            />
            <button onClick={handleCalcBtn} disabled={showItem ? true : false}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            {!showItem &&
              <div className={styles.grid}>
                {levels.map((item, index) => (
                  <GridItem key={index} item={item} />
                ))}
              </div>
            }
            {showItem &&
              <div className={styles.bigItem}>
                <div className={styles.leftSideArrow} onClick={handleBackBtn}>

                  <img src={arrow} alt="Left Arrow button" width={25} />

                </div>
                <GridItem item={showItem} />
              </div>

            }

          </div>

        </div>

      </div>
    </>
  )
}

export default App;
