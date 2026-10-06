import { aboutUsData } from './CpAboutUs_mockdata';

const CpAboutUs = () => {
  return (
    <section className="cp-about-us" id="about">
      <div className="container">

        <div className="wrapper">

          {/* Left Content */}
          <div className="content">

            <span className="tag">
              {aboutUsData.tag}
            </span>

            <h2>
              {aboutUsData.title}{' '}
              <strong>{aboutUsData.titleBold}</strong>
            </h2>

            <p className="description">
              {aboutUsData.description}
            </p>

            <div className="experience">
              <strong>
                {aboutUsData.experience.value}
              </strong>

              <span>
                {aboutUsData.experience.label}
              </span>
            </div>

          </div>

          {/* Right Content */}
          <div className="highlights">

            {aboutUsData.highlights.map((item, index) => (
              <div
                className="highlight"
                key={index}
              >
                <span className="highlight-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <p>{item}</p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default CpAboutUs;