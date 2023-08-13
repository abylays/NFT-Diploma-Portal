  import React from 'react';
  import { Link } from 'react-router-dom';

  const NftCard = ({ image, id, title, address, description, attributes }) => {
    return (
      <Link to={`/${id}`} className="w-1/4 p-4 mb-4 bg-white">
        <div className="relative border-5px">
          <img className="w-full h-30 object-cover rounded-t-md" key={id} src={image} alt={title} />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-center font-montserrat">{title}</h3>
          <div className="flex flex-wrap justify-center items-center">
            {attributes?.length > 0 && attributes.map(attribute => (
              <div className="w-1/2 mb-2 flex justify-start flex-col" key={attribute.trait_type}>
                <p className="text-sm font-bold">{attribute.trait_type}:</p>
                <p className="text-sm">{attribute.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  export default NftCard;
