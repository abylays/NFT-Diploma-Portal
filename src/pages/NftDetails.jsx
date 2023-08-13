import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Network, Alchemy } from "alchemy-sdk";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialMedias from "../components/SocialMedias";
import { FaSave } from "react-icons/fa";

const apiKey = process.env.REACT_APP_API_KEY;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const alchemy = new Alchemy({ apiKey, network: Network.ETH_GOERLI });

const NftDetails = () => {
  const { id } = useParams();
  const [nftMetadata, setNftMetadata] = useState(null);

  useEffect(() => {
    const fetchNFTMetadata = async () => {
      try {
        const metadata = await alchemy.nft.getNftMetadata(contractAddress, id);
        setNftMetadata(metadata);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNFTMetadata();
  }, [id]);
  const handleDownload = () => {
    const link = document.createElement("a");
    window.open(nftMetadata.media[0].gateway, "_blank");
    link.download = "nft_image.png";
    link.click();
  };

  if (!nftMetadata) {
    return <div>Загрузка...</div>;
  }

  const attributesRu = nftMetadata.rawMetadata.attributes.filter(
    (attribute) => attribute.trait_type_ru
  );

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <div className="card grid grid-cols-2 gap-6 card-mobile">
          <div className="left-section">
            <h2 className="card-title text-2xl mb-4">{nftMetadata.title}</h2>
            <img
              className="card-image w-full h-auto"
              src={nftMetadata.media[0].gateway}
              alt={nftMetadata.title}
            />
          </div>

          <div className="right-section card-description-left">
            <div className="flex flex-wrap justify-start card-mobile:text-align-right">
              {attributesRu.map((attribute, index) => (
                <div className="w-full mb-2 flex justify-start" key={index}>
                  <p className="text-sm font-bold">
                    {attribute.trait_type_ru}:
                  </p>
                  <p className="text-sm ml-2">{attribute.value}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="save-icon-button text-black rounded-full flex items-center justify-center"
                onClick={handleDownload}
              >
                <FaSave size={16} />
              </button>
            </div>
            <p className="card-info mb-2">Диплом #: {nftMetadata.tokenId}</p>
            <SocialMedias />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NftDetails;
