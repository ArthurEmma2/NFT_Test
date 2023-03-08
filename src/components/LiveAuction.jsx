import React, { useState } from "react";
import { NFT__DATA } from "../assets/data";

function LiveAuction() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleCardClick = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  return (
    <main className="mt-[150px] container">
      <p className="text-3xl font-bold text-green-400 my-8">Live Auctions</p>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4 ">
        {NFT__DATA.map((data) => {
          return (
            <div
              key={data.id}
              className="shadow-md shadow-slate-500 rounded-lg bg-[#d69db6] h-[480px] lg:h-[350px] w-full hover:scale-90 duration-500"
              onClick={() => handleCardClick(data)}
            >
              <img
                loading="lazy"
                width="400px"
                className="rounded-lg cursor-pointer"
                src={data.imgUrl}
                alt=""
              />
              <aside className="m-4">
                <p className="font-bold">{data.name}</p>
                <p className="font-bold">{data.price}</p>
              </aside>
            </div>
          );
        })}
      </section>
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 max-w-lg">
            <h2 className="text-xl font-bold mb-4">{modalData.name}</h2>
            <p className="mb-4">{modalData.desc}</p>
            <p className=" font-semibold">
              {" "}
              <span className=" opacity-80">Price :</span>{" "}
              <span className="font-bold">{modalData.price}</span>
            </p>
            <p className=" font-semibold">
              {" "}
              <span className=" opacity-80">Address :</span>{" "}
              <span className="font-bold"> {modalData.address}</span>
            </p>
            <p className=" font-semibold">
              {" "}
              <span className=" opacity-80">Category :</span>{" "}
              <span className="font-bold">{modalData.category}</span>
            </p>

            <div className="flex gap-6">
              <button className="mt-4 bg-gray-800 text-white rounded-lg py-2 px-4 hover:bg-gray-700">
                <a target="_blank" rel="noreferrer" href={modalData.link}>
                  Buy
                </a>
              </button>
              <button
                className="mt-4 bg-transparent border-[1px] border-zinc-800 text-black rounded-lg py-2 px-4 hover:bg-gray-800 hover:text-white"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default LiveAuction;
