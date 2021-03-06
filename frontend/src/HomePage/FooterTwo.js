import styled from "styled-components";
export const FooterTwo = () => {
  const Footer = styled.div`
    background-color: #6d787d;
    color: #ffffff;
    & .footer-sec2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 80px;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
    }
    & .footer-sec2 div:nth-of-type(1) {
      border: none;
      display: grid;
      grid-template-columns: 40% 60%;
    }
    & .footer-sec2 div:nth-of-type(1) p {
      width: 180%;
      margin-bottom: 10px;
    }

    & .footer-sec2 div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      width: 20%;
      border-right: 1px solid hsla(0, 0%, 100%, 0.5);
      border-left: 1px solid hsla(0, 0%, 100%, 0.5);
    }

    & .footer-sec2 div:nth-of-type(2) p {
      margin: 10px;
    }
    & .footer-sec2 div:nth-of-type(2) p:hover {
      text-decoration: underline;
    }
    & .footer-sec2 div:nth-of-type(3) {
      display: flex;
      flex-direction: column;
      width: 20%;
      border-right: 1px solid hsla(0, 0%, 100%, 0.5);
      /* border-left: 1px solid hsla(0, 0%, 80%, 0.5); */
    }
    & .footer-sec2 div:nth-of-type(3) p {
      margin: 10px;
    }
    & .footer-sec2 div:nth-of-type(3) p:hover {
      text-decoration: underline;
    }
    & .footer-sec3 {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      padding: 35px;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
    }

    & .footer-sec3 h3 {
      color: #ffffff;
    }
    & .footer-sec3 p {
      margin-top: 15px;
    }

    & .footer-sec5 {
      padding: 35px 35px 35px 35px;
    }
    & .footer-sec5 img {
      margin-right: 25px;
      cursor: pointer;
    }
  `;

  return (
    <>
      <Footer>
        <div className="footer-sec2">
          <div>
            <p>Download Radisson app for excitng offers.</p>
            <br />
            <img src="/Images/appstore.png" alt="applestore" />

            <img src="/Images/playstored.png" alt="playstored" />
          </div>
          <div>
            <p>About Us</p>
            <p>Blogs</p>
            <p>Official OYO Blog</p>
            <p>OYO Circle</p>
          </div>
          <div>
            <p>Teams / Careers</p>
            <p>Support</p>
            <p>Press Kit</p>
            <p>OYO Frames</p>
          </div>
          <div>
            <p>Terms and conditions</p>
            <p>Guest Policies</p>
            <p>Privacy Policy</p>
            <p>Responsible Disclosure</p>
          </div>
        </div>
        <div className="footer-sec3">
          <div>
            <h3>OYO Townhouse</h3>
            <p>Your Frendly Neighbourhood Hotel</p>
          </div>
          <div>
            <h3>OYO SilverKey</h3>
            <p>Executive Stays</p>
          </div>
          <div>
            <h3>OYO HOME</h3>
            <p>Unlocking Homes</p>
          </div>
        </div>
        <div className="footer-sec5">
          <div style={{ marginLeft: "40px" }}>
            <img src="/Images/facebookIcon.png" alt="img" />
            <img src="/Images/InstagramIcon.png" alt="img" />
            <img src="/Images/TwitterIcon.png" alt="img" />
            <img src="/Images/MediaIcon.png" alt="img" />
            <img src="/Images/PinIcon.png" alt="img" />
          </div>
        </div>
      </Footer>
    </>
  );
};
