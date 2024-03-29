import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBarComponent'
import io from "socket.io-client";

import axios from 'axios';


//remember to remove it
// let items = [
//     {
//         name: "Banan",
//         amount: 100,
//         price: 10.10
//     },
//     {
//         name: "Apple",
//         amount: 200,
//         price: 9.00
//     },
//     ,
//     {
//         name: "Straberry",
//         amount: 300,
//         price: 34.00
//     },
//     ,
//     {
//         name: "BlueBerry",
//         amount: 100,
//         price: 30.00
//     },
//     ,
//     {
//         name: "SweetCorn",
//         amount: 400,
//         price: 12.00
//     },
//     {
//         name: "CheeseBerry",
//         amount: 50,
//         price: 22.00
//     },

// ];

interface items {
    product_name : string;
    product_amount : number;
    product_price : number;
}

function HomePage() {

    //const [socket, setSocket] = useState(null);

    const [searchTerm, setSearchTerm] = useState('')
    const [selectedID, setSelectedId] = useState<string | null>(null)
    const [items, setItem] = useState<items[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const socket = io("http://localhost:3000");
        //setSocket(socket);
        socket.on("updatedProduct",(data)=>{
            console.log(data.product_data);
            if(setItem){
                setItem(data.product_data);
            }
        });
        return () => {
            socket.disconnect();
        };
    },[setItem])

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                console.log("fetching data");
                const response = await axios.get('http://localhost:3000/api/products');
                setItem(response.data.product_data);
                setLoading(false);
            }catch(error){
                console.log('Error Fetching ProductData', error);
            }
        };
        fetchData();
    },[])

    console.log(items);


    function showSerachData(data: string) {
        setSearchTerm(data);
        console.log(data);
        console.log(filteredItems.length);
    }

    const filteredItems = items.filter(items => items?.product_name.toLowerCase().includes(searchTerm.toLowerCase().trim()))


    return (
        <>
            <div className='flex flex-col items-center justify-center w-screen'>
                <div className='mt-10'>
                    <SearchBar sendDataToParent={showSerachData} />
                </div>

                <div className='grid grid-cols-3 gap-4 items-center w-90 mx-auto mt-5 p-10'>
                    {loading ? <div>Loading....</div> :filteredItems.length > 0 ? filteredItems.map((item) => (
                        <motion.div
                            layoutId={item?.product_name}
                            key={item?.product_name}
                            className='bg-white p-5 rounded-sm border-2 border-emerald-600'
                            whileHover={{ scale: 1.2 }}
                            onClick={() => setSelectedId(item?.product_name || null)}
                        >
                            <h2>Name: {item?.product_name}</h2>
                            <h3>Amount: {item?.product_amount}</h3>
                            <h4>Per Item Price: {item?.product_price} /-</h4>
                            <div className='flex justify-end items-center p-2'>
                                <Link to={`/buy/${item?.product_name}`} className='bg-lime-500 rounded-sm  w-24 h-8 text-center hover:bg-lime-300 ' >Buy</Link>

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