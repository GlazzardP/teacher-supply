import React from "react";
import styles from "./MySchoolFavourites.module.scss";

import SideNav from "../../organisms/SideNav"

import TeacherCard from "../../organisms/TeacherCard/TeacherCard";

const MySchoolFavourites = () => {
  return (
      <section className={styles.teacherCardSection}>
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </section>
  );
};

export default MySchoolFavourites;
