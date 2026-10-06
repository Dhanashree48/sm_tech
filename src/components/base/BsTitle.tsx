'use client'

interface props {
  tag?: string;
  title: string;
  desc?: string;
  secTitleBoldTxt?: string;
}

const BsTitle = (prop: props) => {
  return (
    <>
      {prop.tag && <span className={"sec-tag"}>{prop.tag}</span>}
      {prop.title && <h2 className={"sec-title"}>
        {prop.title} <span className={"sec-titleBold"}>{prop.secTitleBoldTxt}</span>
      </h2>
      }
      {prop.desc && <p className="sec-desc">{prop.desc}</p>}
    </>
  );
};

export default BsTitle;
