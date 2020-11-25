import { Grid, Cell } from 'react-mdl';
import styles from "../../styles/Home.module.css";

export default function Home() {

    return (
        <>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className={styles.landingGrid} >
                &nbsp; &nbsp;
                <Cell col={4}>
                
                        <img className="w-full responsive-img" src="/undraw_Home_settings_re_pkya.svg"
                            className={styles.avatarImg}
                        />
                        {/* <img 
                    src="../../public/undraw_Home_settings_re_pkya.svg"
                    alt="avatar"
                    className={styles.avatarImg}
                    /> */}
                    </Cell>
                    <Cell col={4} className="mdl-color-text--white">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    <h4 className={styles.text}> Administra todos tus bienes del hogar desde tu carro hasta el numero de puertas que tienes en tu casa
                con Inventory Managment Project</h4>
                </Cell>
                </Grid>
                

            </div >
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className={styles.landingGrid2} >
                    <Cell col={4}>
                        <img className="w-full responsive-img " src="/undraw_Meeting_re_i53h.svg"
                            className={styles.avatarImg}
                        />
                    </Cell>
                </Grid>
            </div>
        </>
    )
}
