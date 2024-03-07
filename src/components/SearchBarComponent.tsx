import { motion } from 'framer-motion'
import React, { useState } from 'react';



function SearchBar ({ sendDataToParent}:{sendDataToParent: any}) {
    const [inputData, setInputData] = useState('')

    function handeLSearch(){
        sendDataToParent(inputData)
    }

    function autoSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setInputData(event.target.value)
        sendDataToParent(event.target.value)
    }

    return (
        <>
            <motion.div
                className=" bg-gray-800 rounded-sm w-96 flex flex-row"
                whileHover={{ scale: 1.3 }}
            >
                <input
                    className="bg-transparent h-full w-full outline-none p-2 text-white"
                    value={inputData}
                    onChange={autoSearch}
                />
                <button className='bg-sky-800 text-white rounded-sm p-2' onClick={handeLSearch}>Search</button>
            </motion.div>
        </>
    );
}

export default SearchBar;