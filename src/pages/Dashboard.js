import React from 'react';
import {useEffect, useState } from 'react';
import axios from 'axios';
import TableComponent from '../components/TableComponent';
import Filters from '../components/Filters';
import CollectionSearch from '../components/CollectionSearch';
import NFTCard from '../components/NFTCard';


const Dashboard = () => {
  // State Variables
  const [nfts, setNFTs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [address, setAddress] = useState('0xFBc73B89EBC31a7DD27AF6fa2a45685821ed5110')

  //Fetch Collection 

  // Use effect
  useEffect(() => {
    const options = {
      mode: 'cors',
      url: `https://api.opensea.io/api/v2/chain/ethereum/account/${address}/nfts`,
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'x-api-key': process.env.REACT_APP_OPENSEAPI_KEY
      }
    };
    console.log(options)
    axios.request(options)
    .then(function (response) {
      setNFTs(response.data.nfts)
      setIsLoading(false)
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
      setNFTs([]);
    });
  }, [address]);

  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
    <h1>Dashboard</h1>
    <CollectionSearch searchText={(text) => setAddress(text)} />
    {/* <Filters />
    <TableComponent /> */}
    {!isLoading && nfts.length === 0 && <h1 className='text-5xl text-center mx-auto mt-32'>No Collection Found</h1>}
      <div className='grid grid-cols-3 gap-4'>
        {nfts.map(token => <NFTCard key={token.name} nft={token} />)}
      </div>
    {/* <Outlet /> */}
  </section>
  )
}

export default Dashboard