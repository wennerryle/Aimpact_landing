import styles from "./MainPage.module.scss";
import { useState, useEffect } from "react";
import AboutUs from "../Pages/AboutUs/AboutUs.component";
import Project from "../Pages/Projects/Project.component";
import ActualProject from "../Pages/ActualProjects/ActualProject.component";
import Footer from "../Footer/Footer.component";
import { lazy, Suspense } from "react";
import Main from "../Pages/Directions_Industries/Main.component";
import LoadingPage from "../LoadingScreen/LoadingScreen.component";
import VideoPlayer from "../Videoplayer/Videoplayer.component";
import SmoothAnimation from "../SmoothAnim/SmothAnim.component";

const MyLazyComponent = lazy(() =>
  import("../Videoplayer/Videoplayer.component")
);

const MainPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Suspense>
        {loading ? (
          <LoadingPage />
        ) : (
          <div className={styles.content}>
            {/* <MyLazyComponent id="myVideo" async /> */}
            <VideoPlayer id="VideoPlayer" async />
            <AboutUs />
            <Main />
            {/* <SmoothAnimation /> */}
            <Project />
            <ActualProject />
            <Footer />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default MainPage;
