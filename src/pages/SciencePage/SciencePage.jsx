import { useTranslation } from 'react-i18next'

import AppBar from '../../components/AppBar/AppBar'
import Container from '../../components/Container'

import styles from './SciencePage.module.css'

import {
  image1,
  image10,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from './images'

const SciencePage = () => {
  const [t] = useTranslation()

  return (
    <>
      <AppBar name={t('pages.science.title')} />
      <Container>
        <div className={styles.flexing}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>{t('scienceMainTitles.title1')}</h1>
              <div className={styles.details}>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title1')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent1.1')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent1.2')}
                    </p>
                    <a
                      target='_blank'
                      href={t('scienceContent.scienceContent1.url.content')}
                    >
                      {t('scienceContent.scienceContent1.url.preview')}
                    </a>
                    <img src={image1} alt='image' width={300} />
                  </div>
                </details>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title2')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent2.1')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent2.2')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent2.3')}
                    </p>
                    <a
                      target='_blank'
                      href={t('scienceContent.scienceContent2.url.content')}
                    >
                      {t('scienceContent.scienceContent2.url.preview')}
                    </a>
                    <img src={image2} alt='image' width={300} />
                  </div>
                </details>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title3')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent3.1')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent3.2')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent3.3')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent3.4')}
                    </p>
                    <a
                      target='_blank'
                      href={t('scienceContent.scienceContent3.url.content')}
                    >
                      {t('scienceContent.scienceContent3.url.preview')}
                    </a>
                    <img src={image3} alt='image' width={300} />
                  </div>
                </details>
              </div>
            </div>
            <div className={styles.wrapper2}>
              <h1 className={styles.title}>{t('scienceMainTitles.title2')}</h1>
              <div className={styles.details}>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title4')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent4.1')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent4.2')}
                    </p>
                    <a
                      target='_blank'
                      href={t('scienceContent.scienceContent4.url.content')}
                    >
                      {t('scienceContent.scienceContent4.url.preview')}
                    </a>
                    <img src={image4} alt='image' width={300} />
                  </div>
                </details>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title5')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent5.1')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent5.2')}
                    </p>
                    <a
                      target='_blank'
                      href={t('scienceContent.scienceContent5.url.content')}
                    >
                      {t('scienceContent.scienceContent5.url.preview')}
                    </a>
                    <img src={image5} alt='image' width={300} />
                  </div>
                </details>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title6')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent6.1')}
                    </p>
                    <a
                      target='_blank'
                      href={t('scienceContent.scienceContent6.url.content')}
                    >
                      {t('scienceContent.scienceContent6.url.preview')}
                    </a>
                    <img src={image6} alt='image' width={300} />
                  </div>
                </details>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title7')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent7.1')}
                    </p>
                    <a
                      target='_blank'
                      href={t('scienceContent.scienceContent7.url.content')}
                    >
                      {t('scienceContent.scienceContent7.url.preview')}
                    </a>
                    <img src={image7} alt='image' width={300} />
                  </div>
                </details>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title8')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent8.1')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent8.2')}
                    </p>
                    <a
                      target='_blank'
                      href={t('scienceContent.scienceContent8.url.content')}
                    >
                      {t('scienceContent.scienceContent8.url.preview')}
                    </a>
                    <img src={image8} alt='image' width={300} />
                  </div>
                </details>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title9')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent9.1')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent9.2')}
                    </p>
                    <img src={image9} alt='image' width={300} />
                  </div>
                </details>
                <details>
                  <summary className={styles.summary}>
                    {t('scienceTitles.title10')}
                  </summary>
                  <div className={styles.padding}>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent10.1')}
                    </p>
                    <p className={styles.padding_text}>
                      {t('scienceContent.scienceContent10.2')}
                    </p>
                    <img src={image10} alt='image' width={300} />
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SciencePage
