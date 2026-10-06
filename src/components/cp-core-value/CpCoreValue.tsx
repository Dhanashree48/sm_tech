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

        <div className="list">
          {data.map((value) => (
            <div
              className="item"
              key={value.id}
            >
              <span className="number">
                {value.id}
              </span>

              <div className="icon">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={50}
                  height={50}
                />
              </div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CpCoreValue;