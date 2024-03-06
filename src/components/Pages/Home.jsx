import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-95 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-white">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>

            <div className="join ">
              <div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-accent join-item w-full max-w-xs"
                />
              </div>
              <div>
                <button className="btn join-item input-accent">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
