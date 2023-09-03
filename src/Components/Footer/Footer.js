import React from "react";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CallMadeIcon from "@mui/icons-material/CallMade";
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="community-container">
          <div>
            <h4>Subscribe to Aesop communications</h4>
            <hr />
            <span className="email-address">
              Email address
              <ArrowForwardIcon />
            </span>
            <div className="checked">
              <div>
                <Checkbox />
              </div>
              <div>
                {" "}
                Subscribe to receive communications from Aesop. By subscribing,
                you confirm you have read and understood our privacy policy.
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4>Sustainability</h4>
              <hr />
              <p>
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation. Learn more
              </p>
            </div>
          </div>
        </div>

        <div className="order-about">
          <div>
            <h4>Order and Support</h4>
            <hr />
            <div>
              Contact Us <CallMadeIcon className="call-arrow" />
            </div>
            <div>
              FAQs <CallMadeIcon className="call-arrow" />
            </div>
            <div>
              Shipping <CallMadeIcon className="call-arrow" />
            </div>
            <div>
              Returns <CallMadeIcon className="call-arrow" />
            </div>
            <div>Order History</div>
            <div>Terms and Conditions</div>
          </div>
          <div>
            <h4>About</h4>
            <hr />
            <div>Our Story</div>
            <div>Foundation</div>
            <div>Careers</div>
            <div>Privacy Policy</div>
            <div>Accessibility</div>
            <div>Cookie Policy</div>
          </div>
        </div>

        <div className="services-socialMedia">
          <div>
            <h4>Services</h4>
            <hr />
            <div>Live Assistance</div>
            <div>Corporate Gifts</div>
            <div>Facial Appointments</div>
            <div>Click and Collectables</div>
            <div>Video Consultation</div>
          </div>
          <div>
            <h4>Social Media</h4>
            <hr />
            <div>
              Instagram
              <CallMadeIcon className="call-arrow" />
            </div>
            <div>
              Twitter
              <CallMadeIcon className="call-arrow" />
            </div>
            <div>
              LinkedIn
              <CallMadeIcon className="call-arrow" />
            </div>
            <div>WeChat</div>
            <div>
              Weibo
              <CallMadeIcon className="call-arrow" />
            </div>
          </div>
        </div>

        <div className="location-preferences">
          <div>
            <h4>Location Preferences</h4>
            <hr />
            <div className="shipping">
              <div>Shipping:</div>
              <div>Hong Kong SAR, China</div>
            </div>
            <div>Language:</div>
            <div className="languages">
              <div>English</div>
              <div>繁體中文</div>
            </div>
          </div>
        </div>
      </div>
      <div className="message-container">
        <ModeCommentOutlinedIcon className="message-icon"/>
      </div>
      <div>
        <hr/>
      </div>
      <div className="aesop-icon">© Aesop</div>
    </div>
  );
};

export default Footer;
