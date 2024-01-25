import React from 'react';
import { useState, useEffect } from 'react';
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
  file_validation,
  supply_validation
} from '../utils/InputValidations'
import { Input } from '../components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { GrFireball } from 'react-icons/gr';



const Nft = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)
  const [collection, setCollection] = useState('ERC721')


  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
      <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
      <div className='py-10 px-10 place-content-center'>
        <div>
          <h1 className='text-center font-raleway font-extrabold text-white text-xl'>Let's mint an NFT.</h1>
        </div>
        <h1>Collections</h1>
        <div className="flex justify-between">
              <label className='font-semibold capitalize font-raleway'>
                Collections:
                <select defaultValue={"ERC721"} className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-black dark:bg-gray-700">
                  <option value="ERC721">MintaVerse721</option>
                  <option value="ERC1155" >MintaVerse1155</option>
                </select>
              </label>
            </div>
        
        <div className="container mt-5 text-center">
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} />
          <Input {...email_validation} />
          <Input {...supply_validation} />
          <Input {...desc_validation} className="md:col-span-2" />
          <Input {...file_validation} className="md:col-span-2" />
          <Input {...password_validation} />
          {/* <Input
            label="Quantity"
            type="number"
            id="quantity"
            placeholder="NFT Quantity"
          />
          <Input
            label="File"
            type="file"
            id="file"
            placeholder="Upload your file."
          /> */}
        </div>
        </div>
         
      </div>
      <div className="flex flex-col p-5 items-center text-xl text-center">
            <button
              onClick={onSubmit}
              className="flex w-2/4 gap-1 p-5 font-semibold text-nowrap border-2 border-cyan font-raleway text-white rounded-md  hover:bg-cyan"
            >
              <GrFireball/>Mint
            </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default Nft