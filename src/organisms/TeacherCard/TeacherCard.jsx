import React from "react";
import styles from "./TeacherCard.module.scss";

const TeacherCard = () => {
  return (
    <div className={styles.teacherCard}>
      <h2>Name: Jake Holmes</h2>
      <p>Sector: Primary</p>
      <p>Location: Bristol</p>
      <button>View Profile</button>
      <button>Make Favourite</button>

    </div>
  );
};

export default TeacherCard;
