import { SiteLink } from "../SiteClickable"
import React, { Component } from "react"
import { FaTwitter } from "react-icons/fa"
import compsoc from "../../assets/images/logo/rh-white.svg"
import { CombineStyles } from "../helpers/CombineStyles"
import { ContactEmail } from "../ContactEmail"
import * as styles from "./index.module.scss"

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col col-12 col-sm-12 col-md-4">
            <img src={compsoc} className={styles.logo} />
            <p>
              Royal Hackaway is hosted by the Royal Holloway Computing Society
              that hosts hackathons and other similarly cool events.
            </p>
            <p>
              For more information about the Computing Society, visit our{" "}
              <a
                className="link-orange text-decoration-none"
                href="https://computingsociety.co.uk"
              >
                Website
              </a>
            </p>
          </div>
          <div className="col col-12 col-sm-12 col-md-8">
            <h2 className="fw-bold">Stay Connected</h2>
            <p>
              To keep up to date with all things Royal Hackaway follow our
              social media pages!
            </p>
            <ul className={styles.links}>
              <li>
                <a
                  href="https://twitter.com/RoyalHackaway"
                  className="link-light text-decoration-none"
                >
                  <FaTwitter /> Twitter
                </a>
              </li>
              {/* <li>
                <FaFacebookSquare /> Facebook
              </li> */}
              {/* <li>
                <FaInstagram /> Instantgram
              </li> */}
            </ul>

            <h3 className="fw-bold">Contact Us</h3>
            <p>
              If you have any questions, reach out to us at{" "}
              <ContactEmail className="link-orange text-decoration-none" />
            </p>

            <h3 className="fw-bold">Important Links</h3>
            <ul className={CombineStyles(styles.links, "link-orange")}>
              <li>
                <SiteLink
                  to="https://www.su.rhul.ac.uk/pageassets/intranet/staff/policies/RHSU-Data-Protection-Policy-Feb-2022.pdf"
                  className="link-orange text-decoration-none"
                >
                  Data Protection Policy
                </SiteLink>
              </li>
              <li>
                <SiteLink
                  href="/CodeOfConduct_2.pdf"
                  className="link-orange text-decoration-none"
                >
                  CompSoc Code of Conduct
                </SiteLink>
              </li>
              <li>
                <SiteLink
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                  className="link-orange text-decoration-none"
                >
                  MLH Code of Conduct
                </SiteLink>
              </li>
              <li>
                <SiteLink
                  to="/events"
                  className="link-orange text-decoration-none"
                >
                  All Events
                </SiteLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.footerContent}>
          Brought to you by the{" "}
          <a
            href="https://computingsociety.co.uk/"
            className="link-orange text-decoration-none"
          >
            Royal Holloway, Computing Society
          </a>
        </span>
      </div>
    </footer>
  )
}

export { Footer }
