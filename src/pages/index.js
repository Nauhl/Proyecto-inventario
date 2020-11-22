import { Grid, Cell  } from 'react-mdl';
import styles from "../../styles/Home.module.css";

export default function Home() {

    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className={styles.landingGrid}>
                <Cell col={12}>
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zOjBMkhwToIKITS-CoVm3UstA-HSimVDvw&usqp=CAU"
                    alt="avatar"
                    className={styles.avatarImg}
                    />
                </Cell>
            </Grid>
        </div>
    )
}