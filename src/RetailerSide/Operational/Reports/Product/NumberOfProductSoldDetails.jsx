// import React, {useState} from "react";

// const NumberOfProductSold= ({onClose}) => {
//   const [selectedSection, setSelectedSection] = useState("time");

//   return (
//     <div className="mt-8 p-6 bg-white shadow rounded-lg">
//       <h3 className="text-xl font-medium mb-4">Number of Product Sold</h3>

//       {/* Section Tabs */}
//       <div className="flex space-x-4 mb-6">
//         <button
//           className={`py-2 px-4 rounded ${
//             selectedSection === "time"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200 text-gray-600"
//           }`}
//           onClick={() => setSelectedSection("time")}
//         >
//           Time
//         </button>
//         <button
//           className={`py-2 px-4 rounded ${
//             selectedSection === "supplier"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200 text-gray-600"
//           }`}
//           onClick={() => setSelectedSection("supplier")}
//         >
//           Supplier
//         </button>
//         <button
//           className={`py-2 px-4 rounded ${
//             selectedSection === "performance"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200 text-gray-600"
//           }`}
//           onClick={() => setSelectedSection("performance")}
//         >
//           Performance
//         </button>
//         <button
//           className={`py-2 px-4 rounded ${
//             selectedSection === "store"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-200 text-gray-600"
//           }`}
//           onClick={() => setSelectedSection("store")}
//         >
//           Store
//         </button>
//       </div>

//       {/* Dynamic Content Based on Selected Section */}
//       {selectedSection === "time" && (
//         <div>
//           <h3 className="text-lg font-medium mb-2">Filter by Time</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">From</label>
//               <input
//                 type="date"
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1">To</label>
//               <input
//                 type="date"
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedSection === "supplier" && (
//         <div>
//           <h3 className="text-lg font-medium mb-2">Filter by Supplier</h3>
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             placeholder="Enter supplier name"
//           />
//         </div>
//       )}

//       {selectedSection === "performance" && (
//         <div>
//           <h3 className="text-lg font-medium mb-2">Filter by Performance</h3>
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             placeholder="Enter performance criteria"
//           />
//         </div>
//       )}

//       {selectedSection === "store" && (
//         <div>
//           <h3 className="text-lg font-medium mb-2">Filter by Store</h3>
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             placeholder="Enter store name"
//           />
//         </div>
//       )}

//       {/* Download Button */}
//       <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
//         Download Report
//       </button>

//       {/* Close Button */}
//       <button
//         className="bg-red-500 text-white py-2 px-4 rounded mt-4 ml-4"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </div>
//   );
// };

// export default NumberOfProductSold;
import React, {useState} from "react";

const NumberOfProductSoldDetails = () => {
  const [selectedSection, setSelectedSection] = useState("time");

  return (
    <div className="mt-8 p-6 bg-white shadow rounded-lg">
      <h3 className="text-xl font-medium mb-4">Number of Product Sold</h3>
      <hr />

      {/* Section Tabs */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`py-2 px-4 rounded ${
            selectedSection === "time"
              ? " text-black font-semibold"
              : " text-gray-600"
          }`}
          onClick={() => setSelectedSection("time")}
        >
          Time
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedSection === "supplier"
              ? " text-black font-semibold"
              : " text-gray-600"
          }`}
          onClick={() => setSelectedSection("supplier")}
        >
          Supplier
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedSection === "promotions"
              ? " text-black font-semibold"
              : " text-gray-600"
          }`}
          onClick={() => setSelectedSection("promotions")}
        >
          Promotions
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedSection === "store"
              ? " text-black font-semibold"
              : " text-gray-600"
          }`}
          onClick={() => setSelectedSection("store")}
        >
          Store
        </button>
      </div>
      <hr className="mb-4" />
      {/* Dynamic Content Based on Selected Section */}
      {selectedSection === "time" && (
        <div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">From</label>
              <input
                type="date"
                className="lg:w-1/2 md:w-full sm:w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">To</label>
              <input
                type="date"
                className="lg:w-1/2 md:w-full sm:w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      )}

      {/* {selectedSection === "supplier" && (
        <div>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter supplier name"
          />
        </div>
      )} */}
      {selectedSection === "supplier" && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Supplier Name
            </label>
            <input
              type="text"
              className="lg:w-1/2 md:w-full sm:w-full p-2 border border-gray-300 rounded"
              placeholder="Enter supplier name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="lg:w-1/2 md:w-full sm:w-full p-2 border border-gray-300 rounded">
              <option value="">Select Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
              {/* Add more categories as needed */}
            </select>
          </div>
        </div>
      )}

      {selectedSection === "promotions" && (
        <div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Promotions Type
              </label>
              <input
                type="text"
                className="w-1/2 p-2 border border-gray-300 rounded"
                placeholder="Enter supplier name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="lg:w-1/2 md:w-full sm:w-full p-2 border border-gray-300 rounded">
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
                {/* Add more categories as needed */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">From</label>
              <input
                type="date"
                className="lg:w-1/2 md:w-full sm:w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">To</label>
              <input
                type="date"
                className="lg:w-1/2 md:w-full sm:w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      )}

      {selectedSection === "store" && (
        <div>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Store Name
              </label>
              <input
                type="text"
                className="w-1/2 p-2 border border-gray-300 rounded"
                placeholder="Enter store name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Store Type
              </label>
              <input
                type="text"
                className="w-1/2 p-2 border border-gray-300 rounded"
                placeholder="Enter store type"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
            Store Locations
              </label>
              <input
                type="text"
                className="w-1/2 p-2 border border-gray-300 rounded"
                placeholder="Enter store location"
              />
            </div>
          </div>
        </div>
      )}

      {/* Download Button */}
      <button className="bg-[#0D90C1] text-white py-2 px-4 rounded mt-4">
        Download Report
      </button>
    </div>
  );
};

export default NumberOfProductSoldDetails;
