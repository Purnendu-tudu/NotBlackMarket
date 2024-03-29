import { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom'

import items from '../../dummyDatabase/items';


function ProductBuyPage() {
    const params = useParams();
    const navigate = useNavigate();

    

    const [customerName, setCustomerName] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [customerAddress, setCustomerAddresss] = useState('');
    const [productAmount, setProdutAmount] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const itemNames = items.map(item => item?.name.toLowerCase());

    // useEffect(() => {
    //     setCurrentId(params.productname)
    // }, [params])

    // useEffect(() => {
    //     if (!itemNames.includes(params.productname?.toLowerCase())) {

    //         console.log('parameter changed');
    //         console.log(!itemNames.includes(params.productname))

    //         navigate('/not-found')

    //     }
    // })

    useEffect(()=>{
        setTotalPrice(productAmount*10);
    },[productAmount])

    return (
        <>
            <div className='flex items-center justify-center h-screen '>
                <div className='bg-slate-800 w-[800px] h-[500px] rounded-xl'>
                    <div className='flex flex-col p-2'>
                        <p className='text-white text-center text-xl'>Product Name: {params.productname}</p>
                        <div className='flex flex-row'>
                            {/* form secction */}
                            <div className='p-10 space-y-3'>
                                <div className='text-white flex flex-col'>
                                    <label>Customer Name:</label>
                                    <input onChange={(e) => setCustomerName(e.target.value)} className='bg-transparent border-b-2 w-60 border-blue-800 focus:outline-none '></input>
                                </div>
                                <div className='text-white flex flex-col'>
                                    <label>Customer Phonenumber:</label>
                                    <input onChange={(e) => setCustomerPhoneNumber(e.target.value)} className='bg-transparent border-b-2 w-60 border-blue-800 focus:outline-none '></input>
                                </div>
                                <div className='text-white flex flex-col'>
                                    <label>Customer Address:</label>
                                    <input onChange={(e) => setCustomerAddresss(e.target.value)} className='bg-transparent border-b-2 w-60 border-blue-800  focus:outline-none '></input>
                                </div>
                                <div className='text-white flex flex-col'>
                                    <label>ProductAmount:</label>
                                    <input type='number' onChange={(e) => setProdutAmount(Number(e.target.value))} className='bg-transparent border-b-2 w-60 border-blue-800 focus:outline-none '></input>
                                </div>
                                <div className='text-white flex flex-col'>
                                    <label>Total Price:</label>
                                    <input value={totalPrice} className='bg-transparent border-b-2 w-60 border-blue-800 focus:outline-none '></input>
                                </div>
                            </div>
                            {/* bill view section */}
                            <div className='bg-slate-300 w-full mt-10 mr-10 rounded-md'>
                                <div className='flex flex-col text-black'>
                                    <h1 className='p-2 font-semibold'>Unknown Shop</h1>
                                </div>
                                <div className='bg-blue-700 w-full h-2'></div>
                                <div className='flex flex-row justify-between p-2'>
                                    <div>Product Name: </div>
                                    <div>{params.productname}</div>
                                </div>
                                <div className='flex flex-row justify-between p-2'>
                                    <div>Buyer: </div>
                                    <div>{customerName}</div>
                                </div>
                                <div className='flex flex-row justify-between p-2'>
                                    <div>Product Amount: </div>
                                    <div>{productAmount}</div>
                                </div>
                                <div className='flex flex-row justify-between p-2'>
                                    <div>Amount: </div>
                                    <div>{totalPrice}</div>
                                </div>
                                <div className='flex flex-row justify-between p-2'>
                                    <div>Phone: </div>
                                    <div>{customerPhoneNumber}</div>
                                </div>
                                <div className='flex flex-row justify-between p-2'>
                                    <div>Address: </div>
                                    <div>{customerAddress}</div>
                                </div>

                            </div>
                        </div>
                        <div className='flex justify-center p-4'>
                            <button className='bg-lime-500 p-2 rounded-[5px] font-bold text-white hover:bg-slate-500' >Generate Bill</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductBuyPage;