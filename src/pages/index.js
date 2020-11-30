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
                        <h1>Welcome To Your Inventory!!!</h1>
                    <h4 className={styles.text2}> Manage all your items like your cars until as many doors you have in your house with 
                    Inventory Managment Project</h4>
                </Cell>
                </Grid>
                

            </div >
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className={styles.landingGrid2} >

                <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                <Cell col={4} className="mdl-color-text--white">
                        
                    <h4 className={styles.textParrafo}> Have a very nice tool and place where you can organize everything you want.</h4>
                    <br />
                    
                    <h4 className={styles.textParrafo}> You will have the control of each single elements of your own property and you will not ever worry about lost something.</h4>
                </Cell>
                        
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
