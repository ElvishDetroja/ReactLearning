function Print({ img, name, date, origin, collection }) {
  return (
    <>
      <div className="container-box">
        <img className="imgCSS" src={img} alt="" />
        <h2>Movie : {name}</h2>
        <h3>Release Date : {date}</h3>
        <h4>Origin : {origin}</h4>
        <h5>Collection : {collection}</h5>
      </div>
    </>
  );
}

export default Print;
