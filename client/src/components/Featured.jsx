import React from "react";
import Card from "./Card";
import fighting from "../media/fighting.jpg";
import blog from "../media/blog.png";
import question from "../media/question.jpg";
import hangboard from "../media/hangboard.jpg";

const gridParent = {
  width: "60vw",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 1fr, 1fr)",
  gridGap: "5%",
  justifyContent: "center",
  backgroundColor: "hsl(0, 0%, 21%)",

};

const container = {
  width: '50vw',
  margin: 'auto',
  marginTop: "2rem",
  marginBottom: "5rem"
};

const row = {
  display: 'flex',
  justifyContent: 'space-around'
};

const dummyText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor";

const Featured = () => {
  return (
    <div className="container" style={container} >
      <div className="columns" style={row}>
        <div className="column">
          <Card
            pic={fighting}
            alt="Fighting Photo"
            title="Global Leagues"
            content={dummyText}
          />
        </div>

        <div className="column">
          <Card
            pic={hangboard}
            alt="Hangboard Photo"
            title="Training"
            content={dummyText}
          />
        </div>
      </div>
      <div className="columns" style={row}>
        <div className="column">
          <Card pic={blog} alt="blog Photo" title="Blog" content={dummyText} />
        </div>

        <div className="column">
          <Card
            pic={question}
            alt="something else Photo"
            title="Something Else"
            content={dummyText}
          />
        </div>
      </div>
    </div>
  );
};

// const Featured = () => {
//   return (
//     <div className="container" style={gridParent}>
//       <Card
//         pic={fighting}
//         alt="Fighting Photo"
//         title="Global Leagues"
//         content={dummyText}
//       />

//       <Card
//         pic={hangboard}
//         alt="Hangboard Photo"
//         title="Training"
//         content={dummyText}
//       />

//       <Card
//         pic={blog}
//         alt="blog Photo"
//         title="Blog"
//         content={dummyText}
//       />

//       <Card
//         pic={question}
//         alt="something else Photo"
//         title="Something Else"
//         content={dummyText}
//       />
//     </div>
//   );
// };

export default Featured;
