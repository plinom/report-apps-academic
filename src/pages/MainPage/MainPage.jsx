import AppBar from '../../components/AppBar/AppBar'
import Header from '../../components/Header/Header'
import Introduction from '../../components/Introduction/Introduction'
import MenuBar from '../../components/MenuBar/MenuBar'
import Partners from '../../components/Partners/Partners'
import styles from './MainPage.module.css'

const MainPage = () => (
	<div className={styles.main}>
		<AppBar />
		<Header />
		<MenuBar />
		<Introduction />
		<Partners />
	</div>
)

export default MainPage
