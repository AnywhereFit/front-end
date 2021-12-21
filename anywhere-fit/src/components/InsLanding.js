import React from "react";
import InstructorCSS from "./InsLanding.module.css";
function InsLanding() {
  return (
    <div className={InstructorCSS.container}>
      <header className={InstructorCSS.header}>Your classes</header>
      <div className={InstructorCSS.wrapper}>
        <h2>Yoga</h2>
        <div className={InstructorCSS.containerContent}>
          <p className={InstructorCSS.subtitle}>Start time:</p>
          <p className={InstructorCSS.content}>09:00pm</p>
          <p className={InstructorCSS.subtitle}>Duration:</p>
          <p className={InstructorCSS.content}>60 Minutes</p>
          <p className={InstructorCSS.subtitle}>Intensity Level:</p>
          <p className={InstructorCSS.content}>Beginner</p>
          <p className={InstructorCSS.subtitle}>Registered:</p>
          <p className={InstructorCSS.content}>10 people have registered</p>
          <p className={InstructorCSS.subtitle}>Location:</p>
          <address className={InstructorCSS.content}>
            921 Crescent Ct, San Ramon, Ca
          </address>
        </div>
        <div className={InstructorCSS.buttons}>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default InsLanding;
