import Header from "../../components/header/header";
import { ReactComponent as Sticker } from "../../assets/img/sale_sticker_1.svg";
import styles from "./main-page.module.css";
import ButtonArrow from "../../components/button/button-arrow";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import data from "../../data";
import { Link } from "react-router-dom";

const MainPage = () => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const allCourses = useSelector((store) => store.courses.allCourses);
  const course = allCourses ? allCourses[4] : [];

  return (
    <section className={styles.main}>
      <div className="container">
        <Header color="white" />
        <div className={styles.content}>
          <div className={styles.content_header}>
            <div>
              <p className={styles.title}>Онлайн-тренировки для занятий дома</p>
              <p className={styles.subtitle}>
                Начните заниматься спортом и улучшите качество жизни
              </p>
            </div>
            <Sticker />
          </div>
          <div className={styles.content_main}>
            <div
              className={styles.img_box}
              onClick={() => {
                navigate(`/course/${course._id}`);
              }}
            >
              <p className={styles.img_title}>Йога</p>
              <img className={styles.img} src="/img/yoga.png" alt="yoga" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Стретчинг</p>
              <img
                className={styles.img}
                src="/img/stratching.png"
                alt="stratching"
              />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Танцевальный фитнес</p>
              <img className={styles.img} src="/img/dance.png" alt="dance" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Степ-аэробика</p>
              <img className={styles.img} src="/img/stap.png" alt="stap" />
            </div>
            <div className={styles.img_box}>
              <p className={styles.img_title}>Бодифлекс</p>
              <img
                className={styles.img}
                src="/img/bodyflex.png"
                alt="bodyflex"
              />
            </div>
          </div>
        </div>
        <footer>
          <div onClick={() => handleTop()}>
            <ButtonArrow text="Наверх ↑" />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default MainPage;
