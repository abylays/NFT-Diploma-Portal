const apiKey = process.env.REACT_APP_API_KEY;
const endpoint = `${process.env.REACT_APP_API_ENDPOINT}${apiKey}`;

export const fetchNFTs = async (ownerAddress, contractAddress) => {
  try {
    const allNFTs = [];
    const limit = 100; // Number of NFTs to fetch in each request
    const maxTokens = 1000; // Total number of tokens to fetch

    const fetchRange = async (startToken) => {
      const response = await fetch(
        `${endpoint}/getNFTsForCollection?contractAddress=${contractAddress}&withMetadata=true&startToken=${startToken}&limit=${limit}`
      );

      const data = await response.json();
      return data.nfts || [];
    };

    // Fetch ranges in parallel
    const promises = [];
    for (let i = 0; i < maxTokens; i += limit) {
      promises.push(fetchRange(i));
    }

    const results = await Promise.all(promises);
    results.forEach((nfts) => {
      allNFTs.push(...nfts);
    });
    console.log(allNFTs);
    return allNFTs;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
