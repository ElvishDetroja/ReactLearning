//
// props stands for properties.
// props are used to transfer data from one component to another component.
// Props are like function arguments, and we send them into the component as attributes.
// HTML ma jem class,id che. tem j JSX ma component ne props che.
//
//
//
//
// props is object.

function Post(props) {
  console.log(props);

  return (
    <>
      <h3>{props.title}</h3>
    </>
  );
}

//
//
//
//

function Post2({ title, textColor, num = 58 }) {
  console.log(title);
  console.log(typeof num);

  return (
    <>
      <h3 style={{ color: textColor }}>
        {title} {num}
      </h3>
    </>
  );
}

//
//
//
//
//

function Post3({ pip }) {
  return (
    <>
      <h3>{pip.num}</h3>
    </>
  );
}

// function Post3({title, textColor, num})
// this is not possible in Post3.

// props is read only.

// jo return phela textColor change kariye to textColor change thase.
// pan ek vakhat DOM render thai jay pachi, dynamically change nai kari sakay.
//
// in props, at attribute time, number is enter in expression.
//
//
//
//

function Post4({ children, name }) {
  console.log(children);
  return (
    <div>
      {children}
      {name}
      <Post5 />
    </div>
  );
}

//
// children name specific children mate set karel che.
//
//
//
// 

function Post5() {
  return (
    <>
      <h3>Be Positive</h3>
    </>
  );
}

//
// Post5 ne export karvani jarur nathi.
//
//
//
//
//

export { Post, Post2, Post3, Post4 };
