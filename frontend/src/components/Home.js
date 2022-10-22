import React from "react";

const Home = () => {
  return (
    <>
   <div className="d-flex flex-column align-items-center justify-content-center"
   style={{
     boxSizing: "border-box",
     boxShadow:
       "2px 2px 4px 2px rgb(0 0 0 / 31%), -2px -2px 3px 2px rgb(0 0 0 / 31%)",
     borderRadius: "5px",
     backgroundImage: `url(https://static.igem.org/mediawiki/2015/2/26/Amoy-MenuBar-bg.jpg)`,
     height: "100vh",
   }}
   >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPP9pJKok1CwUMqvBQFd4Jnqmvou1CtlsYA&usqp=CAU"></img>
<h1 className="d-flex flex-column align-items-center justify-content-center">THE EMBEDDED PLUGIN FOR NEWSLETTER </h1>

   </div>;
   </>
  );
};
export default Home;
