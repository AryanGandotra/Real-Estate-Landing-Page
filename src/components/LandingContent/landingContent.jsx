import "./landingContent.css";
import LandingFrom from "../LandingForm/landingform";
import { useEffect, useState } from "react";
import RoundedImage from "../RoundedImage/roundedimage";

const LandingContent = () => {
  const [awardWinnings, setAwardWinnings] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [premiumProducts, setPremiumProducts] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setAwardWinnings((prevCount) => {
        const randomIncrement = Math.floor(Math.random() * 5) + 1;
        const newCount = (prevCount + randomIncrement) % 281;

        if (newCount >= 280) {
          clearInterval(intervalId);
        }

        return newCount;
      });

      setHappyCustomers((prevCount) => {
        const randomIncrement = Math.floor(Math.random() * 10) + 1;
        const newCount = (prevCount + randomIncrement) % 2001;

        if (newCount >= 2000) {
          clearInterval(intervalId);
        }

        return newCount;
      });

      setPremiumProducts((prevCount) => {
        const randomIncrement = Math.floor(Math.random() * 20) + 1;
        const newCount = (prevCount + randomIncrement) % 9001;

        if (newCount >= 9000) {
          clearInterval(intervalId);
        }

        return newCount;
      });
    };

    const intervalId = setInterval(updateCount, 1);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="landingContent">
      <div className="landingContentLeft">
        <div className="landingContentLeftHeading">
          Discover Most Suitable Property
        </div>
        <div className="landingContentLeftContent">
          Find a variety of properties that suit you very easilty Forget all
          difficulties in finding a residence for you
        </div>
        <div className="landingForm">
          <LandingFrom />
        </div>
        <div className="landingContentLeftReview">
          <div className="landingContentLeftReviewContent">
            <div className="landingContentLeftReviewContentItems">
              <div className="landingContentLeftReviewContentItemsHeading">
                {premiumProducts} <span>+</span>
              </div>
              <div className="landingContentLeftReviewContentItemsContent">
                Premium Products
              </div>
            </div>
            <div className="landingContentLeftReviewContentItems">
              <div className="landingContentLeftReviewContentItemsHeading">
                {happyCustomers} <span>+</span>
              </div>
              <div className="landingContentLeftReviewContentItemsContent">
                Happy Customers
              </div>
            </div>
            <div className="landingContentLeftReviewContentItems">
              <div className="landingContentLeftReviewContentItemsHeading">
                {awardWinnings} <span>+</span>
              </div>
              <div className="landingContentLeftReviewContentItemsContent">
                Award Winnings
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landingContentRight">
        <RoundedImage img="https://www.home-designing.com/wp-content/uploads/2018/05/narrow-lot-house-exterior.jpg" />
      </div>
    </div>
  );
};

export default LandingContent;
