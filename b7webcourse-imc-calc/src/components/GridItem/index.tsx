import { Level } from "../../helpers/imc";
import styles from "../GridItem/GridItem.module.css";
import upImg from "../../assets/up.png";
import downImg from "../../assets/down.png";


type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <img src={item.icon == "up" ? upImg : downImg} alt={item.icon == "up" ? "Very Good" : "Not Good"} width={30} />
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é {item.yourImc} Kg/m²</div>
            }
            <div className={styles.gridInfo}>
                <>
                    IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}