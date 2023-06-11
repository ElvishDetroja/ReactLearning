import background from "./kivi.jpg";

function Picture() {
  return (
    <>
      <img
        src={require("./strawberry.jpg")}
        alt=""
        className="straw"
      />
      <img src="https://picsum.photos/200/300" alt="" className="straw" />
    </>
  );
}

function BackgroundImg() {
  return (
    <>
      <div
        className="bg"
        style={{ backgroundImage: "url('https://picsum.photos/200/300')" }}
      ></div>
      <div
        className="bg"
        style={{ backgroundImage: "url(" + background + ")" }}
      ></div>
    </>
  );
}

export { Picture, BackgroundImg };
