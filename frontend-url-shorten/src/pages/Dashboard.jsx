import React, { useContext, useEffect, useState } from 'react'
import Graph from '../components/Graph'
import { UrlContext } from '../context-api/UrlContext'
import { AppContext } from '../context-api/AppContext'
import NewUrlModal from '../components/NewUrlModal'
import { FiCopy, FiTrash2, FiCalendar, FiBarChart2 } from 'react-icons/fi';

const Dashboard = () => {
  const {token} = useContext(AppContext);
  const {myShortUrls,getMyShortUrls,totalClicks,getTotalClicks} = useContext(UrlContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(()=>{
    if(token){
      getMyShortUrls(token);
      getTotalClicks(token);
    }
  },[token])

  return (
    <div className="lg:w-[90%] w-full mx-auto py-16">
      <div className=" h-96 relative ">
          {totalClicks && totalClicks.length === 0 && (
                <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                  No Data For This Time Period
                </h1>
                <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600 ">
                  Share your short link to view where your engagements are
                  coming from
                </h3>
              </div>
          )}
          <Graph graphData={totalClicks} />
      </div>

      {/* Action Section */}
      <div className="mt-10 flex justify-between items-center">
        <button
          onClick={() => setModalIsOpen(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
        >
          + Create New Shorten URL
        </button>
      </div>

      <NewUrlModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />

      {/* Short URLs List */}
      <div className="mt-8 grid gap-6">
        {myShortUrls && myShortUrls.map((url, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
            {/* Left Side */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600">{url.shortUrl}</h3>
              <h4 className="text-gray-700 mt-1">{url.originalUrl}</h4>

              <div className="flex gap-6 mt-4 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FiBarChart2 />
                  <p>{url.clickCount} Clicks</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar />
                  <p>{url.createdDate}</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 transition">
                <FiCopy /> Copy
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition">
                <FiTrash2 /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard