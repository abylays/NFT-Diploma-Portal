import { useState, useEffect } from 'react';
import { fetchNFTs } from '../utils/fetchNFTs';

const useExplore = (owner, contractAddress) => {
  const [nfts, setNFTs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredNFTs, setFilteredNFTs] = useState([]);

  const handleSearch = (value) => {
    setSearchTerm(value);
    setFilteredNFTs(nfts); // Reset the filteredNFTs to the original list when performing a search
  };

  const handleFilterChange = (updatedFilters) => {
    setSelectedFilters(updatedFilters);
  };

  useEffect(() => {
    const getNFTs = async () => {
      try {
        const ownedNfts = await fetchNFTs(owner, contractAddress);
        setNFTs(ownedNfts);
      } catch (error) {
        console.error(error);
      }
    };

    getNFTs();
  }, [owner, contractAddress]);

  useEffect(() => {
    const filterNFTs = () => {
      let filteredNFTs = nfts;

      if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        filteredNFTs = filteredNFTs.filter((nft) =>
          nft.title.toLowerCase().includes(searchTermLower)
        );
      }

      if (Object.keys(selectedFilters).length > 0) {
        filteredNFTs = filteredNFTs.filter((nft) => {
          for (const filterType in selectedFilters) {
            const selectedValues = selectedFilters[filterType];
            if (selectedValues.length === 0) {
              continue;
            }

            const attributeValues = nft.metadata.attributes
              .filter((attr) => attr.trait_type_ru === filterType)
              .map((attr) => attr.value);

            const hasMatchingValue = selectedValues.some((value) =>
              attributeValues.includes(value)
            );

            if (!hasMatchingValue) {
              return false;
            }
          }

          return true;
        });
      }

      setFilteredNFTs(filteredNFTs);
    };

    if (nfts.length > 0) {
      filterNFTs();
    }
  }, [nfts, searchTerm, selectedFilters]);

  return {
    searchTerm,
    filteredNFTs,
    handleSearch,
    selectedFilters,
    handleFilterChange,
  };
};

export default useExplore;
