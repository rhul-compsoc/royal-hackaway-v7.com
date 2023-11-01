import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="hackaway.png"
          alt="Royal Hackaway"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                Royal
              </span>

              <a
                href="#"
                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
              >
                Hackaway
              </a>
            </p>

            <p className="mt-8 space-y-1 text-sm text-gray-700">
              made with love in egham
            </p>

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
                  <a href="#dp_section" className="text-gray-700 transition hover:opacity-75">
                    Data Protection
                  </a>
                </li>

                <li>
                  <a href="#ccoc_section" className="text-gray-700 transition hover:opacity-75">
                    CompSoc Code of Conduct
                  </a>
                </li>

                <li>
                  <a href="#mcoc_section" className="text-gray-700 transition hover:opacity-75">
                    MLH Code of Conduct
                  </a>
                </li>

                <li>
                  <a href="#sponsors_section" className="text-gray-700 transition hover:opacity-75">
                    Sponsors
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">CompSoc</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#about_section" target="_blank" className="text-gray-700 transition hover:opacity-75">
                    About
                  </a>
                </li>

                <li>
                  <a href="#team_section" className="text-gray-700 transition hover:opacity-75">
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a href="#schedule_section" className="text-gray-700 transition hover:opacity-75">
                    Schedule
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              RHUL Computing Society
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};