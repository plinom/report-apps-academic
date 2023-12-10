import Header from '../../components/Header';
import Introduction from '../../components/Introduction';
import Partners from '../../components/Partners/Partners';
import AppBar from '../../components/AppBar';
import MenuBar from "../../components/MenuBar";

import styles from './MainPage.module.css';

const MainPage = () => (
  <div className={styles.main}>
    <AppBar />
    <Header />
    <MenuBar />
    <Introduction />
    <Partners />
  </div>
);

export default MainPage;
