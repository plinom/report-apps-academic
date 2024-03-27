import { useTranslation } from 'react-i18next'
import AppBar from '../../components/AppBar/AppBar'
import styles from './Changes.module.css'
import { ChangesWrapper } from './ChangesWrapper'
import { Image } from './Image'
import imageChange from './imageChange'

export const Changes = () => {
  const [t] = useTranslation()
  return (
    <div className={styles.main}>
      <AppBar />
      <ChangesWrapper>
        <Image path={imageChange} name='name' />
        <div className={styles.textWrapper}>
          <details>
            <summary className={styles.summary}>
              {t('changesMains.chengeMain')}
            </summary>
            <div className={styles.padding}>
              {t('changesPage.imageContent')}
            </div>
          </details>
          <details>
            <summary className={styles.summary}>
              {t('changesMains.changeMain2')}
            </summary>
            <div className={styles.padding}>
              {t('changesPage.imageContent2')}
            </div>
          </details>
          <details>
            <summary className={styles.summary}>
              {t('changesMains.changeMain3')}
            </summary>
            <div className={styles.padding}>
              {t('changesPage.imageContent3')}
            </div>
          </details>
          <details>
            <summary className={styles.summary}>
              {t('changesMains.chengeMain4')}
            </summary>
            <div className={styles.padding}>
              {t('changesPage.imageContent4')}
            </div>
          </details>
          <details>
            <summary className={styles.summary}>
              {t('changesMains.chengeMain5')}
            </summary>
            <div className={styles.padding}>
              {t('changesPage.imageContent5')}
            </div>
          </details>
          <details>
            <summary className={styles.summary}>
              {t('changesMains.chengeMain6')}
            </summary>
            <div className={styles.padding}>
              {t('changesPage.imageContent6')}
            </div>
          </details>
        </div>
      </ChangesWrapper>
    </div>
  )
}
