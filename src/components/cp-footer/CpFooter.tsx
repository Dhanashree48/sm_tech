import Image from 'next/image';
import Link from 'next/link';
import { footerData } from './CpFooter_mockdata';

const CpFooter = () => {
  return (
    <footer className="cp-footer">
      <div className="container">

        <div className="main">

          {/* Company */}
          <div className="company">

            <Link
              href={footerData.logo.href}
              className="logo"
            >
              <Image
                src="/assets/images/logo.png"
                alt="Company Logo"
                width={180}
                height={60}
              />
            </Link>

            <p className="description">
              {footerData.description}
            </p>

            {/* Social Links */}
            <div className="social">
              {footerData.socialLink.map((social, index) => (
                <Link
                  href={social.href}
                  key={index}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt="Social Media"
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>

          </div>

          {/* Quick Links */}
          <div className="column">

            <h3>
              {footerData.quickLinksData.title}
            </h3>

            <ul>
              {footerData.quickLinksData.links.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Our Services */}
          <div className="column">

            <h3>
              Our Services
            </h3>

            <ul>
              {footerData.servicesLinksData.link.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact Info */}
          <div className="column contact">

            <h3>
              {footerData.contactInfoData.title}
            </h3>

            {/* Address */}
            <div className="contact-item">

              <div className="contact-icon">
                <Image
                  src="/globe.svg"
                  alt="Address"
                  width={20}
                  height={20}
                />
              </div>

              <div className="contact-content">
                <span>
                  {footerData.contactInfoData.address.label}
                </span>

                <p>
                  {footerData.contactInfoData.address.value}
                </p>
              </div>

            </div>

            {/* Phone */}
            <div className="contact-item">

              <div className="contact-icon">
                <Image
                  src="/globe.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                />
              </div>

              <div className="contact-content">

                <span>
                  {footerData.contactInfoData.phone.label}
                </span>

                {footerData.contactInfoData.phone.value.map(
                  (phone, index) => (
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      key={index}
                    >
                      {phone}
                    </a>
                  )
                )}

              </div>

            </div>

            {/* Email */}
            <div className="contact-item">

              <div className="contact-icon">
                <Image
                  src="/globe.svg"
                  alt="Email"
                  width={20}
                  height={20}
                />
              </div>

              <div className="contact-content">

                <span>
                  {footerData.contactInfoData.email.label}
                </span>

                <a
                  href={`mailto:${footerData.contactInfoData.email.value}`}
                >
                  {footerData.contactInfoData.email.value}
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="bottom">
          <p>
            {footerData.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default CpFooter;