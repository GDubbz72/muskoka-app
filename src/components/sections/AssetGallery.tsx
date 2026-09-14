'use client';

import { useState } from 'react';
import Image from 'next/image';

const assets = [
  {
    id: 'desk',
    name: 'Dedicated Desk',
    image: '/assets/imagery/workspace_modern.jpg',
  },
  {
    id: 'office',
    name: 'Private Office',
    image: '/assets/imagery/workspace_modern.jpg',
  },
  {
    id: 'workroom',
    name: 'Work Room',
    image: '/assets/imagery/virtual_tour.png',
  },
  {
    id: 'boardroom',
    name: 'Boardroom',
    image: '/assets/imagery/virtual_tour.png',
  },
  {
    id: 'eventspace',
    name: 'Event Space',
    image: '/assets/imagery/virtual_tour.png',
  },
];

export const AssetGallery = () => {
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);

  return (
    <div className="px-4 py-12 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-lato font-black text-3xl md:text-4xl text-[var(--lauft-darkest-grey)]">
            Explore LAUFT Muskoka
          </h2>
        </div>

        {/* Main Image Display */}
        <div className="mb-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200 shadow-sm">
            <Image
              src={selectedAsset.image}
              alt={selectedAsset.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Asset Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {assets.map((asset) => (
            <button
              key={asset.id}
              onClick={() => setSelectedAsset(asset)}
              className={`group relative rounded-lg overflow-hidden aspect-square cursor-pointer transition-all duration-200 ${
                selectedAsset.id === asset.id
                  ? 'ring-2 ring-[var(--lauft-azure)] shadow-md'
                  : 'hover:shadow-md'
              }`}
            >
              <Image
                src={asset.image}
                alt={asset.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                <span className="text-white font-lato font-semibold text-sm p-3 w-full">
                  {asset.name}
                </span>
              </div>
              {selectedAsset.id === asset.id && (
                <div className="absolute inset-0 bg-[var(--lauft-azure)]/10" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
