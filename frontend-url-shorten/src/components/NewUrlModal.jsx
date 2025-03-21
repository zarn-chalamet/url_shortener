import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Modal from 'react-modal';
import { AppContext } from '../context-api/AppContext';
import axios from 'axios';
import { UrlContext } from '../context-api/UrlContext';

const NewUrlModal = ({ modalIsOpen, setModalIsOpen }) => {

  const [originalUrl, setOriginalUrl] = useState('');
  const {backendUrl,token} = useContext(AppContext);
  const {getMyShortUrls} = useContext(UrlContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(backendUrl+"/api/urls/shorten",{originalUrl},
        {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + token,
              },
        }
      )

      // copied the shorten url link to the clipboard
      const shortenUrl =  `${import.meta.env.VITE_BACKEND_URL}/${data.shortUrl}`;
      navigator.clipboard.writeText(shortenUrl).then(()=>{
        toast.success("Short URL copied to Clipboard");
      })
      
      getMyShortUrls(token);
      setOriginalUrl("");
      setModalIsOpen(false);  
    } catch (error) {
      toast.error("Failed to shorten URL"+error);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg mx-auto mt-20 outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Short URL</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-600 mb-2">Enter URL</label>
          <input
            type="text"
            placeholder="https://example.com"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Shorten
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewUrlModal;
