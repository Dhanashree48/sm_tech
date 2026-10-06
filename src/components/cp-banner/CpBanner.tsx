import Link from 'next/link';
import { bannerData } from './CpBanner_mockdata';

const CpBanner = () => {
  return (
    <section
      className={'cp-banner'}
      style={{
        backgroundImage: `url(${bannerData.backgroundImage})`,
      }}
    >
      <div className={'container'}>
        <div className={'content'}>

          <h1>
            {bannerData.title}
            <strong>{bannerData.titleBold}</strong>
          </h1>

          <p>
            {bannerData.description}
          </p>

          <div className={'actions'}>
            {bannerData.buttons.map((button) => (
              <Link
                key={button.id}
                href={button.href}
                className={
                  'btn-default'
                }
              >
                {button.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CpBanner;