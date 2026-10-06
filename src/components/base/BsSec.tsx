import BsTitle from './BsTitle';

type props = {
  secTypeClass?: string;
  showHead?: boolean;
  secTag?: string;
  secTitle?: string;
  secTitleBoldTxt?: string;
  secDesc?: string;
  secCont?: React.ReactNode;
};

const BsSec = (prop: props) => {
  return (
    <>
      <div className={`bs-sec ${prop.secTypeClass || ""}`}>
        {prop.showHead && (
          <div
            className={`sec-head`}
          >
            <div className="container">
              <BsTitle
                tag={prop.secTag ?? ""}
                title={prop.secTitle ?? ""}
                secTitleBoldTxt={prop.secTitleBoldTxt ?? ''}
                desc={prop.secDesc ?? ""}
              />
            </div>
          </div>
        )}
        <div className={`sec-cont`}>
          {prop.secCont}
        </div>
      </div>
    </>
  );
};

export default BsSec;
