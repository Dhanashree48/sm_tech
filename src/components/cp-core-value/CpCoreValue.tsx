import Image from 'next/image';

type CoreValue = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

type CpCoreValueProps = {
  data: CoreValue[];
};

const CpCoreValue = ({ data }: CpCoreValueProps) => {
  return (
    <section
      className="cp-core-value"
      id="CpCoreValue"
    >
      <div className="container">

        <ul className="core-list">
          {data.map((value) => (
            <li
              className="core-item"
              key={value.id}
            >
              <div className="core-card">
                <span className={`icon ${value.icon}`}></span>
                <h3 className="core-title">{value.title}</h3>
                <p className="core-desc">{value.description}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default CpCoreValue;