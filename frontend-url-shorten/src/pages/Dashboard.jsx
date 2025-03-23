import React, { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs';
import Graph from '../components/Graph'
import { UrlContext } from '../context-api/UrlContext'
import { AppContext } from '../context-api/AppContext'
import NewUrlModal from '../components/NewUrlModal'
import { FiCopy, FiCalendar, FiBarChart2 } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { MdAnalytics} from 'react-icons/md';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const {backendUrl,token} = useContext(AppContext);
  const {myShortUrls,getMyShortUrls,totalClicks,getTotalClicks,analyticsData,getAnaylitcsDataByShortUrl} = useContext(UrlContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedShortUrl, setSelectedShortUrl] = useState(null);

  const analyticsHandler = (shortUrl) => {
    if (selectedShortUrl === shortUrl) {
      // Toggle off if the same button is clicked again
      setSelectedShortUrl(null);
    } else {
      setSelectedShortUrl(shortUrl);
      getAnaylitcsDataByShortUrl(shortUrl, token);
    }
  };


  useEffect(()=>{
    if(token){
      getMyShortUrls(token);
      getTotalClicks(token);
    }
  },[token])


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  // const handleShortUrlClick = (shortUrl) => {
  //   totalClicks[0].count++;
  //   // Optional: small delay to let state update if needed
  //   setTimeout(() => {
  //     window.open(`${backendUrl}/${shortUrl}`, '_blank');
  //   }, 300); 
  // };
  

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
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
            {/* Left Side */}
            <div className="flex justify-between items-center">
              <div>
                {/* <a
                  href={`${backendUrl}/${url.shortUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    getMyShortUrls(token);
                    getTotalClicks(token);
                  }}
                  className="text-[17px] font-montserrat font-[600] text-linkColor hover:underline"
                >
                  {url.shortUrl}
                </a> */}

                {/* <span
                  onClick={() => handleShortUrlClick(url.shortUrl)}
                  className="cursor-pointer text-[17px] font-montserrat font-[600] text-linkColor hover:underline"
                >
                  {url.shortUrl}
                </span> */}

              <Link
                target='_'
                className='text-[17px]  font-montserrat font-[600] text-linkColor'
                to={`${backendUrl}/${url.shortUrl}`}>
                    {url.shortUrl}
              </Link>
              <FaExternalLinkAlt className="text-linkColor" />
                


                <h4 className="text-gray-700 mt-1">{url.originalUrl}</h4>

                <div className="flex gap-6 mt-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <FiBarChart2 />
                    <p>{url.clickCount} Clicks</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar />
                    <p>{dayjs(url.createdDate).format("MMM DD, YYYY")}</p>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex gap-4">
                <button onClick={() => copyToClipboard(`${backendUrl}/${url.shortUrl}`)} className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 transition">
                  <FiCopy /> Copy
                </button>
                <button 
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition"
                  onClick={() => analyticsHandler(url.shortUrl)}
                >
                  <MdAnalytics /> Analytics
                </button>
              </div>
            </div>

            {/* Analytics Section */}
            {selectedShortUrl === url.shortUrl && (
              <div className="border-t-2 pt-4">
                {analyticsData.length === 0 ? (
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-slate-800 font-serif text-[15px] font-bold mb-1">No Data For This Time Period</h1>
                    <h3 className="sm:w-96 w-[90%] text-center text-[12px] text-slate-600">
                      Share your short link to view where your engagements are coming from
                    </h3>
                  </div>
                ) : (
                  <Graph graphData={analyticsData} />
                )}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Dashboard