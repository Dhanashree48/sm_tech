'use client'

import BsSec from '@/components/base/BsSec';
import CpHeader from '../components/cp-header/CpHeader';
import CpBanner from '../components/cp-banner/CpBanner';
import CpServices from '@/components/cp-services/CpServices';
import { serviceData } from '@/components/cp-services/CpServices_mockdata';
import CpAboutUs from '@/components/cp-about-us/CpAboutUs';
import CpCompanyOverview from '@/components/cp-company-overview/CpCompanyOverview';
import CpCoreValue from '@/components/cp-core-value/CpCoreValue';
import { coreValueData } from '@/components/cp-core-value/CpCoreValue_mockdata';
import CpCapabilites from '@/components/cp-capabilites/CpCapabilites';
import { capabilitiesData } from '@/components/cp-capabilites/CpCapabilites_mockdata';
import CpGetInTouch from '@/components/cp-get-in-touch/CpGetInTouch';
import CpFooter from '@/components/cp-footer/CpFooter';

export default function HomePageClient() {
  return (
    <>
      <CpHeader />
      <CpBanner />
      <BsSec
        showHead={true}
        secTag={serviceData.tag}
        secTitle={serviceData.title}
        secTitleBoldTxt={serviceData.titleBold}
        secDesc={serviceData.description}
        secCont={
          <CpServices
            data={serviceData.services}
            button={serviceData.button}
          />
        }
      />
      <BsSec
        showHead={false}
        secCont={
          <CpAboutUs />
        }
      />
      <BsSec
        showHead={false}
        secCont={
          <CpCompanyOverview />
        }
      />
      <BsSec
        showHead={true}
        secTag={coreValueData.tag}
        secTitle={coreValueData.title}
        secTitleBoldTxt={coreValueData.titleBold}
        secDesc={coreValueData.description}
        secCont={
          <CpCoreValue data={coreValueData.values} />
        }
      />
      <BsSec
        showHead={true}
        secTag={coreValueData.tag}
        secTitle={coreValueData.title}
        secTitleBoldTxt={coreValueData.titleBold}
        secDesc={coreValueData.description}
        secCont={
          <CpCoreValue data={coreValueData.values} />
        }
      />
      <BsSec
        showHead={true}
        secTag={capabilitiesData.tag}
        secTitle={capabilitiesData.title}
        secTitleBoldTxt={capabilitiesData.titleBold}
        secDesc={capabilitiesData.description}
        secCont={
          <CpCapabilites
            data={capabilitiesData.tabs}
          />
        }
      />
      <BsSec
        showHead={false}
        secTypeClass={'typ-get-in-touch'}
        secCont={
          <CpGetInTouch />
        }
      />
      <CpFooter/>
    </>
  );
}
