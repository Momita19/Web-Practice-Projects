import React from "react";
// import styles from "./stylingSheet.css";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Card from "./Card";

export default function MeetTeam() {
  return (
    <div
      className="frame1 meetFrame"
      style={{
        flexDirection: "column",
        height: "1173px",
        background:
          "linear-gradient(180deg, #F6F6F6 0%, rgba(255, 255, 255, 0.984043) 14.35%)",
      }}
    >
      <Heading content="Meet the team" />
      <Paragraph content="Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence." />
      <div className="card1">
        <Card imageSrc="/images/Frame 250.png" />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
          }} className=""
        >
          <img
            src="images/Vector (1).png"
            style={{ position: "absolute", left: "50px", top: "60px" }}
            className="vec1" alt=""
          />
          <img
            src="images/Vector (2).png"
            style={{ position: "absolute", left: "930px", bottom: "60px" }}
            className="vec2" alt=""
          />
          <div className="card1Content">
            Our vision is to make safe investments with better returns easily
            accessibly to all indians
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "1294px",
          justifyContent: "space-between",
        }} className="meetCards"
      >
        <Card imageSrc="/images/Frame 251.png" />
        <Card imageSrc="/images/Frame 252.png" />
        <Card imageSrc="/images/Frame 253.png" />
        <div className="meetBotCards" style={{display:"flex"}}>
        <Card imageSrc="/images/Frame 254.png" />
        <Card imageSrc="/images/Frame 255.png" />
        </div>
      </div>
    </div>
  );
}
