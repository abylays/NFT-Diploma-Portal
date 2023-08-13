import React, { useState } from "react";
import NftCard from "../components/nftcard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import useExplore from "../utils/useExplore";
import Footer from "../components/Footer";
import "../index.css"; // Import the index.css file
import Header from "../components/Header";
import { Pagination } from "antd";
import { FaFilter } from "react-icons/fa";

const Explore = () => {
  const owner = process.env.REACT_APP_OWNER;
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
  const {
    searchTerm,
    filteredNFTs,
    handleSearch,
    selectedFilters,
    handleFilterChange,
  } = useExplore(owner, contractAddress);

  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [isFiltersOpen, setIsFiltersOpen] = useState(false); // State to track the visibility of filters accordion

  // Calculate the start and end indexes of the current page
  const itemsPerPage = 12; // Number of items to show per page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the NFTs for the current page
  const currentNFTs = filteredNFTs.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Toggle the visibility of filters accordion
  const toggleFilters = () => {
    setIsFiltersOpen((prevOpen) => !prevOpen);
  };

  // Check if it's a mobile version
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 flex-col sm:flex-row">
        <section className="sm:max-w-sm">
          <div className="ml-5 mb-4 mt-4 mr-2">
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </div>
          {isMobile ? (
            <div className="mb-4 ml-5">
              <button
                className="green-button text-white flex items-center px-3 py-2 text-sm hover:bg-blue-500 hover:text-white rounded-full"
                style={{ borderRadius: "25px" }}
                onClick={toggleFilters}
              >
                <FaFilter className="mr-2" />
                <span>Filters</span>
              </button>
              {isFiltersOpen && (
                <div className="mt-4">
                  <Filters
                    metadata={filteredNFTs.map((nft) => nft.metadata)}
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="mb-4">
              <Filters
                metadata={filteredNFTs.map((nft) => nft.metadata)}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
              />
            </div>
          )}
        </section>

        <section className="flex flex-wrap justify-center flex-1">
          {currentNFTs.length > 0 ? (
            currentNFTs.map((nft) => (
              <div className="mb-4 sm:w-1/4" key={nft.id}>
                <NftCard
                  image={nft.media[0].gateway}
                  id={nft.id.tokenId}
                  title={nft.title}
                />
              </div>
            ))
          ) : (
            <div className="text-gray-600">Поиск...</div>
          )}
        </section>
      </div>
      <div className="flex justify-center mt-4 mb-6">
        <Pagination
          current={currentPage}
          total={filteredNFTs.length}
          onChange={handlePageChange}
          pageSize={itemsPerPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
