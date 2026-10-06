'use client';

import { useState } from 'react';

type CapabilityTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
};

type CapabilitesProps = {
  data: CapabilityTab[];
};

const CpCapabilites = ({ data }: CapabilitesProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeData = data[activeTab];

  return (
    <section
      className="cp-capabilities"
      id="capabilities"
    >
      <div className="container">

        {/* Tabs */}
        <div className="capabilities-tabs">
          {data.map((tab, index) => (
            <button
              type="button"
              key={tab.id}
              className={`capability-tab ${activeTab === index ? 'active' : ''
                }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {activeData && (
          <div className="capabilities-content">

            <span className="capabilities-number">
              {String(activeTab + 1).padStart(2, '0')}
            </span>

            <h3>{activeData.title}</h3>

            <p>{activeData.description}</p>

            <ul>
              {activeData.points.map((point, index) => (
                <li key={index}>
                  {point}
                </li>
              ))}
            </ul>

          </div>
        )}

      </div>
    </section>
  );
};

export default CpCapabilites;