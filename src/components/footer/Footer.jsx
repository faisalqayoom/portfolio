import React from "react";
import "./Footer.scss";
import { MdKeyboardArrowRight, MdPhoneEnabled } from "react-icons/md";
import {
  FaTelegramPlane,
  FaXingSquare,
  FaMailBulk,
  FaFacebook,
  FaGooglePlus,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="header py-1 pb-0 bg-success">
        <h3 className="text-center pb-0">THOUGHT FOR LIFE</h3>
        <p className="text-center">
          "Each man must look to himself to teach him the meaning of life. It is
          not something discovered. It is something molded."
        </p>
      </div>
      <div className="row">
        <div className="col-4 under-logo">
          <a href="http://">
            <img src="./images/footer-1.png" alt="" />
            <p>
              <FaTelegramPlane /> Tral, Pulwama, Jammu & Kashmir
            </p>
            <p>
              {" "}
              <MdPhoneEnabled />
              +91-9469284664
            </p>
            <p>
              <FaXingSquare />
              01933-250142
            </p>

            <p>
              <FaMailBulk /> bhsstral@gmail.com
            </p>
          </a>
          <div>
            <a href="http://">
              <span className="m-2">
                <FaFacebook />
              </span>
              <span>
                <FaGooglePlus />
              </span>
            </a>
          </div>
        </div>
        <div className="col-4">
          <h3>Important Links</h3>
          <hr />
          <div className="row Important Links">
            <div className="col-6 footer-links">
              <a href="#">
                <MdKeyboardArrowRight />
                All school news
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                Downloads
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                School Gallery
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                Vision
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                Mission
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                Register
              </a>
            </div>
            <div className="col-6 footer-links">
              <a href="#">
                <MdKeyboardArrowRight />
                All school news
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                Downloads
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                School Gallery
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                Vision
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                Mission
              </a>
              <a href="#">
                <MdKeyboardArrowRight />
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h3>Social Presence</h3>
          <hr />
          <div>
            {/* <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbhsstral.official%2F&amp;tabs&amp;width=370&amp;height=214&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=304488196815380"
              width="340"
              height="170"
              style="border:none;overflow:hidden"
              scrolling="yes"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe> */}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="text-center py-4 bg-success">
          Copyright © 2022 All Rights Reserved | Beta Version 1.2
        </p>
      </div>
    </div>
  );
};

export default Footer;
