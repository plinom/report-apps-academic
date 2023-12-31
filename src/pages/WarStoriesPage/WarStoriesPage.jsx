import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import AppBar from '../../components/AppBar/AppBar';
import Container from '../../components/Container';
import { getLanguageImage } from '../../utils/services';

import styles from './WarStoriesPage.module.css';

import gradient2 from '../../imgs/gradient2.svg';
import gradient3 from '../../imgs/gradient3.svg';


const images = {
  AndriyKhoma: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FAndriyKhomaUK.png?alt=media&token=2c5aa993-3da9-4918-b2e3-7c85cfd0c052',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FAndriyKhomaEN.png?alt=media&token=810aaa39-c114-4bb5-be3d-2ab249aa2603'
  },
  YuriyOstapchuk: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FYuriyOstapchukUK.png?alt=media&token=3235924f-02a8-4226-a10d-ce930d563ef3',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FYuriyOstapchukEN.png?alt=media&token=193b8f17-9f1a-441a-84e7-4301787df07b'
  },
  AndriyRomanyuk: {
    uk: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FAndriyRomanyukUK.png?alt=media&token=a41cd84a-7417-4141-8343-1d22d9c45f68',
    en: 'https://firebasestorage.googleapis.com/v0/b/academic-report.appspot.com/o/images%2Fwar-stories%2FAndriyRomanyukEN.png?alt=media&token=0fdfa584-b64e-4d01-9fee-8741a12cfafa'
  }
};

const WarStoriesPage = () => {
  const [t] = useTranslation();
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <AppBar name={t('pages.warStories.title')} />
      <Container>
        <section className={styles.section}>
          <p className={styles.text}>{t('pages.warStories.subtitle')}</p>
        </section>
        <section className={styles.bannerSection}>
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.AndriyRomanyuk)} alt={'Andriy Romanyuk'} />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen1(!open1);
                }}
              >
                {open1 ? (
                  <span className="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span className="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open1 ? (
              <p className={styles.description}>
                <Trans
                  i18nKey={'pages.warStories.andriyRomanyuk'}
                  components={[
                    <br />,
                    <strong />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://tvoemisto.tv/exclusive/ya_mig_zalyshatysya_doma_ale_ya_tut__vykladach_uku_yakyy_pishov_na_front_135154.html',
                          '_blank'
                        );
                      }}
                    />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://tvoemisto.tv/exclusive/ya_mig_zalyshatysya_doma_ale_ya_tut__vykladach_uku_yakyy_pishov_na_front_135154.html',
                          '_blank'
                        );
                      }}
                    />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.AndriyKhoma)} alt={'Andriy Khoma'} />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen2(!open2);
                }}
              >
                {open2 ? (
                  <span className="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span className="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open2 ? (
              <p className={styles.description}>
                <Trans
                  i18nKey={'pages.warStories.andriyKhoma'}
                  components={[
                    <br />,
                    <strong />,
                    <span
                      className={styles.link}
                      onClick={() => {
                        window.open(
                          'https://tvoemisto.tv/news/zaraz_my_bilsh_organizovani_i_navcheni_yak_rozrobnyk_igor_perekvalifikuvatysya_u_viyskovogo_132671.html?fbclid=IwAR1ccC5Wapa6or34SY8bV4edfQGkBZoozr-NHPB5noj_EkaZ8H38FotE6hk',
                          '_blank'
                        );
                      }}
                    />
                  ]}
                />
              </p>
            ) : null}
          </div>

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src={getLanguageImage(images.YuriyOstapchuk)} alt={'Yuriy Ostapchuk'} />
              <button
                className={styles.expandBtn}
                type="button"
                onClick={() => {
                  setOpen3(!open3);
                }}
              >
                {open3 ? (
                  <span className="material-icons">keyboard_double_arrow_up</span>
                ) : (
                  <span className="material-icons">keyboard_double_arrow_down</span>
                )}
              </button>
            </div>
            {open3 ? (
              <p className={styles.description}>
                <Trans i18nKey={'pages.warStories.yuriyOstapchuk'} components={[<br />, <strong />]} />
              </p>
            ) : null}
          </div>
        </section>
        <div className={styles.gradient2}>
          <img src={gradient2} alt="" />
        </div>
        <div className={styles.gradient3}>
          <img src={gradient3} alt="" />
        </div>
      </Container>
    </>
  );
};

export default WarStoriesPage;
