import Link from 'next/link';

type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

type CpServicesProps = {
  data: Service[];
  button?: {
    label: string;
    href: string;
  };
};

const CpServices = ({ data, button }: CpServicesProps) => {
  return (
    <div className="cp-services" id="services">

      <div className="services-list">
        {data.map((service) => (
          <article
            className="service-card"
            key={service.id}
          >
            <span className="service-number">
              {service.id}
            </span>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>

      {button && (
        <div className="services-action">
          <Link
            href={button.href}
            className="btn-default"
          >
            {button.label}
          </Link>
        </div>
      )}

    </div>
  );
};

export default CpServices;