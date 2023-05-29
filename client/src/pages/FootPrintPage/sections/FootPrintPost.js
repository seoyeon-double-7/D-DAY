// import "../../styles/FootPrintPage.css";

function FootPrintPage({ key, postContents }) {
  console.log("key : ", key);
  return (
    <div className="footprint-post-box">
      <span className="footprint-post-name">{postContents.name}</span>
      <br />
      <span className="footprint-post-contents">{postContents.contents}</span>
      <br />
      <span className="footprint-post-date">{postContents.date}</span>
    </div>
  );
}

export default FootPrintPage;
