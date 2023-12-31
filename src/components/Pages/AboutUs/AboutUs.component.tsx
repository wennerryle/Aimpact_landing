import styles from "./AboutUs.module.scss";
import icon_1 from "../../../icons/AboutUs/logo-tpp.png";
import icon_2 from "../../../icons/AboutUs/logoRstAbali.svg";
import icon_3 from "../../../icons/AboutUs/logoSVGblueWordnoColor.png";

const AboutUs = () => {
  return (
    <div id="about_us" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text_position}>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>о нас</h1>
            </div>

            <div className={styles.main}>
              <p>
                <em className={styles.aimpact_first}>AIMPACT</em> –
                инновационное объединение профессионалов в сфере искусственного
                интеллекта и оптимизации бизнес-процессов. Наши специалисты
                обладают богатым опытом реализации важнейших проектов в ведущих
                технологических компаниях мира.
              </p>

              <p>
                Мы считаем, что успешное внедрение AI в бизнесе требует
                совмещения глубокого технического знания и понимания рыночных
                потребностей. Именно поэтому мы объединились, чтобы в полной
                мере реализовать потенциал искусственного интеллекта в решении
                сложных бизнес-задач.
              </p>

              <p>
                Наши экспертные навыки и уникальный опыт делают нас идеальным
                партнером для компаний, стремящихся преобразить свои
                бизнес-процессы и занять лидирующие позиции в своей отрасли. С
                <em className={styles.aimpact_second}>AIMPACT</em> ваш бизнес
                будет шагать в ногу со временем, используя все преимущества
                современных технологий.
              </p>
              <p>
                Мы гордимся тем, что собрали команду настоящих экспертов,
                признанных в мире IT и бизнеса, и уверены в том, что ваше
                будущее вместе с нами будет ярким и успешным.
              </p>

            </div>
          </div>
        </div>
        <div className={styles.parthers}>
          <p className={styles.accent}>Мы сотрудничаем с:</p>
          <div className={styles.images}>
            <img src={icon_1} alt="" />
            <img src={icon_2} alt="" />
            <img src={icon_3} alt="" />
          </div>
        </div>
      </div>

      {/* Мобильная версия */}

      <div className={styles.content_mobile}>
        <div className={styles.text_position}>
          <div className={styles.text}>
            <div className={styles.title}>
              <h1>о нас</h1>
            </div>

            <div className={styles.main}>
              <p>
                <em className={styles.aimpact_first}>AIMPACT</em> –
                инновационное объединение профессионалов в сфере искусственного
                интеллекта и оптимизации бизнес-процессов. Наши специалисты
                обладают богатым опытом реализации важнейших проектов в ведущих
                технологических компаниях мира.
              </p>

              <p>
                Мы считаем, что успешное внедрение AI в бизнесе требует
                совмещения глубокого технического знания и понимания рыночных
                потребностей. Именно поэтому мы объединились, чтобы в полной
                мере реализовать потенциал искусственного интеллекта в решении
                сложных бизнес-задач.
              </p>

              <p>
                Наши экспертные навыки и уникальный опыт делают нас идеальным
                партнером для компаний, стремящихся преобразить свои
                бизнес-процессы и занять лидирующие позиции в своей отрасли. С
                <em className={styles.aimpact_second}>AIMPACT</em> ваш бизнес
                будет шагать в ногу со временем, используя все преимущества
                современных технологий.
              </p>
              <p>
                Мы гордимся тем, что собрали команду настоящих экспертов,
                признанных в мире IT и бизнеса, и уверены в том, что ваше
                будущее вместе с нами будет ярким и успешным.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.parthers}>
          <p className={styles.accent}>Мы сотрудничаем с:</p>
          <div className={styles.images}>
            <img src={icon_1} alt="" />
            <img src={icon_2} alt="" />
            <img src={icon_3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
