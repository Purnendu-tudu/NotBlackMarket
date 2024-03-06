import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';

import SearchBar from '../components/SearchBarComponent'


//remember to remove it
let items = [
    {
        name: "Banan",
        amount: 100,
        price: 10.10
    },
    {
        name: "Apple",
        amount: 200,
        price: 9.00
    },
    ,
    {
        name: "Straberry",
        amount: 300,
        price: 34.00
    },
    ,
    {
        name: "BlueBerry",
        amount: 100,
        price: 30.00
    },
    ,
    {
        name: "SweetCorn",
        amount: 400,
        price: 12.00
    },

];

function HomePage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [selectedID, setSelectedId] = useState<string | null>(null)

    function showSerachData(data: string) {
        setSearchTerm(data);
        console.log(data);
        console.log(filteredItems.length);
    }

    const filteredItems = items.filter(items => items?.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))


    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen'>
                <div className='mt-10'>
                    <SearchBar sendDataToParent={showSerachData} />
                </div>

                <div className='grid grid-cols-3 gap-4 items-center w-90 mx-auto mt-5 p-10'>
                    {filteredItems.length > 0 ? filteredItems.map((item) => (
                        <motion.div
                            layoutId={item?.name}
                            key={item?.name}
                            className='bg-white p-5 rounded-sm border-2 border-emerald-600'
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setSelectedId(item?.name || null)}
                        >
                            <h2>Name: {item?.name}</h2>
                            <h3>Amount: {item?.amount}</h3>
                            <h4>Per Item Price: {item?.price} /-</h4>
                            <div className='flex justify-end items-center p-2'>
                                <motion.button className='bg-lime-500 rounded-sm  w-24 h-8 text-center hover:bg-lime-300 ' >Buy</motion.button>

                            </div>

                        </motion.div>
                    )) : <div className='text-white text-2xl text-center col-span-3'>No Item Found</div>}

                    <AnimatePresence>
                        {selectedID && (
                            <motion.div>
                                <motion.button onClick={() => setSelectedId(null)} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>


            </div>

        </>
    );
}

export default HomePage;