import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import styles from "../../styles/Home.module.css";

export default function ContactPage() {

    return (

        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className={styles.landingGrid} >
                &nbsp; &nbsp;
                <Cell col={4}>
                    <img className="w-full responsive-img"
                        className={styles.avatarImg3}
                    />
                </Cell>
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                    <Cell col={4} className="mdl-color-text--white">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className={styles.text}>Hi, need a hand? Or a high five?
                    Here is how you can contact me</h2>
                </Cell>
                <Cell>
                    <img className="w-full responsive-img" className={styles.avatarImg3} src="/undraw_Astronaut_re_8c33.svg" />
                </Cell>

                <Cell>
                    <h2 className={styles.text}>Nauhl Valdez</h2>
                    <img src="perf.jpg" align="center" className={styles.avatarImg3}></img>
                </Cell>

                <Cell col={4}>
                    <h2 className={styles.text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact me</h2>
                    {/* <h2 className={styles.text}>...........</h2> */}
                    <hr />
                    <List>
                        <ListItem>
                            <ListItemContent><h4 className={styles.text} ><i class="fas fa-phone-alt"></i>&nbsp; (+52) 81 80 84 33 55</h4>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent> <h4 className={styles.text} ><i class="fab fa-facebook-square"></i>&nbsp; Nauhl Valdezz</h4>
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent> <h4 className={styles.text} ><i className="fab fa-twitter-square  "></i>&nbsp; @Nauhl9_valdezz</h4>
                            </ListItemContent>
                        </ListItem>

                    </List>
                </Cell>
            </Grid>
        </div>
    )

};