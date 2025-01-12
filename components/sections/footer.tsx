import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import logo from '@/public/v8-logo.png';
import compsoc_logo from '@/public/compsoc_logo.png';

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative bg-white lg:grid lg:grid-cols-5" id="footer">
      <div className="relative block h-32 lg:col-span-2 lg:h-full mb-16">
        <Image
          src={logo}
          alt="logo"
          placeholder="blur"
          className="filter brightness-75 w-3/4 mx-auto"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="font-medium text-gray-900">CompSoc</p>
            <p className="mt-8 space-y-1 text-sm text-gray-700">Made with love by RHUL CompSoc</p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://www.instagram.com/rhulcompsoc/?hl=en"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/rhulcompsoc"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/rhul-compsoc"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/rhulcompsoc"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Linkedin</span>

                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>

              <li>
                <a
                  href="https://computingsociety.co.uk/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Website</span>

                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Information</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="https://www.su.rhul.ac.uk/pageassets/intranet/staff/policies/RHSU-Data-Protection-Policy-Feb-2022.pdf"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Data Protection
                  </a>
                </li>

                <li>
                  <a
                    href="https://royalhackaway.com/CodeOfConduct_2.pdf"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    CompSoc Code of Conduct
                  </a>
                </li>

                <li>
                  <a
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf?_gl=1*1251erg*_ga*MTEwMjE5OTUxNS4xNzAxOTY2NzYw*_ga_E5KT6TC4TK*MTcwMTk2Njc2MC4xLjEuMTcwMTk2NzI4MS4wLjAuMA"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    MLH Code of Conduct
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.hackathons.org.uk/code-of-conduct"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    Hackathons UK Code of Conduct
                  </a>
                </li>

                <li>
                  <a href="#info" className="text-gray-700 transition hover:opacity-75">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Hackaway</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#info" className="text-gray-700 transition hover:opacity-75">
                    Information
                  </a>
                </li>

                <li>
                  <a href="#faq" className="text-gray-700 transition hover:opacity-75">
                    FAQs
                  </a>
                </li>

                <li>
                  <a href="#team" className="text-gray-700 transition hover:opacity-75">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a href="#schedule" className="text-gray-700 transition hover:opacity-75">
                    Schedule
                  </a>
                </li>

                <li>
                  <a href="#sponsors" className="text-gray-700 transition hover:opacity-75">
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="mt-8 text-xs text-gray-500 sm:mt-0">RHUL Computing Society</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
