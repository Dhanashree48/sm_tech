import { companyOverviewData } from './CpCompanyOverview_mockdata';

const CpCompanyOverview = () => {
  return (
    <section
      className="cp-company-overview"
      id="companyoverview"
    >
      <div className="container">

        {/* Heading */}
        <div className="header">
          <span className="eyebrow">
            {companyOverviewData.tag}
          </span>

          <h2>
            {companyOverviewData.title}{' '}
            <strong>
              {companyOverviewData.titleBold}
            </strong>
          </h2>
        </div>

        {/* Company Description */}
        <div className="intro">
          <p>{companyOverviewData.description}</p>
        </div>

        {/* Vision & Mission */}
        <div className="grid">

          <div className="card">
            <span className="number">
              01
            </span>

            <h3>
              {companyOverviewData.vision.title}
            </h3>

            <p>
              {companyOverviewData.vision.description}
            </p>
          </div>

          <div className="card">
            <span className="number">
              02
            </span>

            <h3>
              {companyOverviewData.mission.title}
            </h3>

            <p>
              {companyOverviewData.mission.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CpCompanyOverview;