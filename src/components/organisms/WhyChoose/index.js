import React from "react";
import Subtitle from "../../atoms/Subtitle";
import Text from "../../atoms/Text";
import Grid from "../../atoms/Grid";
import GridItem from "../../atoms/GridItem";
import ChooseReason from "../../molecules/ChooseReason";
import OnlineBank from "../../../assets/first.svg";
import SimpleBudgeting from "../../../assets/second.svg";
import FastOnboarding from "../../../assets/first.svg";
import OpenAPI from "../../../assets/first.svg";
import "./style.css";

const WhyChoose = (props = {}) => {
  const reasons = [
    {
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world. ",
      icon: OnlineBank,
    },
    {
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      icon: SimpleBudgeting,
    },
    {
      title: "Fast Onboarding",
      text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away. ",
      icon: FastOnboarding,
    },
    {
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. ",
      icon: OpenAPI,
    },
  ];

  return (
    <section className="why-choose">
      <div className="why-choose__container">
        <div className="why-choose__title">
          <Subtitle>Why choose Easybank?</Subtitle>
        </div>
        <div className="why-choose__text">
          <Text>
            We leverage Open Banking to turn your bank acount into your
            financial hub.
          </Text>
          <Text>Control your finances like never before.</Text>
        </div>
        <div className="why-choose__reasons">
          <Grid columns="4">
            {reasons.map((reason, index) => (
              <GridItem key={index}>
                <ChooseReason reason={reason}></ChooseReason>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
