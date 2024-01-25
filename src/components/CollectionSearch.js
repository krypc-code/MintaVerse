import React, { useState } from 'react';

//component containing our form, button and state handling logic
const CollectionSearch = ({ searchText }) => {
    const [text, setText] = useState('');

//form event handling logic - sets our state variable text
const handleSubmit = (e) => {
        e.preventDefault();
        searchText(text);
}

//jsx containing our form and button - enhanced with tailwindcss
return (
        <div className='max-w-lg w-1/2 rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="flex items-center border-b-2 border-purple-500 py-2">
                    <input onChange={e => setText(e.target.value)} className="border-none w-full  mr-3 py-1 px-2 text-black font-raleway leading-tight focus:outline-none" type="text" placeholder="Search Collection Address" />
                    <button className="flex-shrink-0 bg-purple-500 hover:bg-cyan border-purple-500 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CollectionSearch;