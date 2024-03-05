import { useState } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';


function NotFoundPage() {

    const [isHoverd, setIsHoverd] = useState(false)

    const handelMouseEnter = () => {
        setIsHoverd(true);
    }

    const handelMouseLeave = () => {
        setIsHoverd(false);
    }

    return (
        <>
            <div className='w-screen h-screen'>
                <div className='container h-10 w-full bg-gray-800 rounded-lg mx-auto mt-2 flex items-center justify-end'>
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                    </div>
                    <div className='ml-2'>
                        <Link to='/' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            GO HOME
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="text text-5xl text-white text-center">
                        <motion.h1
                            onMouseEnter={handelMouseEnter}
                            onMouseLeave={handelMouseLeave}
                            whileHover={{ scale: 1.3 }}
                        >404 Page Not Found
                        </motion.h1>

                    </div>
                    <div className='mt-10 text-white text-3xl'>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHoverd ? 1 : 0 }}

                            transition={{ duration: 2, x: { duration: 1 } }}
                        >
                            Sorry seems like you entered the wrong path
                        </motion.h2>
                    </div>


                </div>

            </div>



        </>
    );

}

export default NotFoundPage;