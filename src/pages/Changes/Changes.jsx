import { useTranslation } from 'react-i18next'
import AppBar from '../../components/AppBar/AppBar'
import styles from './Changes.module.css'
import { ChangesWrapper } from './ChangesWrapper'
import { Image } from './Image'
import { ImageContent } from './ImageContent'
import imageChange from './imageChange'

export const Changes = () => {
	const [t] = useTranslation()
	return (
		<div className={styles.main}>
			<AppBar />
			<ChangesWrapper>
				<Image path={imageChange} name='name' />
				<div className={styles.textWrapper}>
					<ImageContent content={t('changesPage.imageContent')} />
					<ImageContent content={t('changesPage.imageContent2')} />
					<ImageContent content={t('changesPage.imageContent3')} />
					<ImageContent content={t('changesPage.imageContent4')} />
					<ImageContent content={t('changesPage.imageContent5')} />
					<ImageContent content={t('changesPage.imageContent6')} />
				</div>
			</ChangesWrapper>
		</div>
	)
}
