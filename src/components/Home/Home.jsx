import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaInstagram, FaRegStarHalfStroke } from 'react-icons/fa6';
import { IoIosStar, IoMdEye } from 'react-icons/io';
import home from '../../assets/home.png'
import { BiLeaf } from 'react-icons/bi';
import { BiDollar } from 'react-icons/bi';
import { CiHeadphones } from 'react-icons/ci';
import { FaTruck } from 'react-icons/fa';
import { PiPlant } from 'react-icons/pi';
import plant1 from '../../assets/plant-1.png'
import plant2 from '../../assets/plant-2.png'
import leaf3 from '../../assets/leaf-3.png'
import leaf4 from '../../assets/leaf-4.png'
import cart1 from '../../assets/cart-1.png'
import cart2 from '../../assets/cart-2.png'
import cart3 from '../../assets/cart-3.png'
import cart4 from '../../assets/cart-4.png'
import review1 from '../../assets/review-1.jpg'
import review2 from '../../assets/review-2.jpg'
import review3 from '../../assets/review-3.jpg'
import review4 from '../../assets/review-4.jpg'
import { IoCartOutline, IoStarOutline } from 'react-icons/io5';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {

    return (
        <>
            <section id='home'>
                <div className='container'>
                    
                    {/* blob-1 */}
                    <div className='w-64 h-64 bg-blue-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    </div>

                    {/* blob-2 */}
                    <div className='w-64 h-64 bg-blue-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-10 bottom-20'></div>
                        
                    <div className='flex flex-col items-center gap-5 lg:flex-row'>
                        <div className='w-full space-y-5 lg:w-1/2'>
                            <h1>
                                <span className='text-yellow-500'>Plants</span> make a <br /> positive
                                <span className='text-yellow-500'> impact</span> on <br />
                                your environment
                            </h1>
                            <p className='text-slate-300 font-Lobster'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos dolorem laborum omnis excepturi aperiam! Rerum dolorem doloremque ratione quas voluptates.
                            </p>
                            <div className='flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10'>
                                <button className='btn'>
                                    <span className='flex items-center'> Shop Now <IoMdEye className='text-xl ml-1'/></span>
                                </button>
                                <button className='btn btn_outline'>
                                    <span className='flex items-center'> Know More <IoMdEye className='text-xl ml-1'/></span>
                                </button>
                            </div>

                            <p className='text-xs font-Lobster text-slate-300'>
                                You will get 30-days free trail.
                            </p>
                            <div className='flex items-center gap-5 text-lg lg:pt-10'>
                                <FaFacebook className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'></FaFacebook>
                                <FaTwitter className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'></FaTwitter>
                                <FaInstagram className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'></FaInstagram>
                                <FaLinkedin className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'></FaLinkedin>
                            </div>
                        </div>

                        <div className='w-full relative lg:w-1/2'>
                            <img src={home} alt="Home_img" />

                            {/* leaf */}

                            <div className='absolute -top-6 right-0 opacity-30 animate-movingY'>
                                <BiLeaf className='text-6xl text-yellow-500'/>
                            </div>
                            <div className='absolute -top-6 right-14 opacity-30 animate-movingY'>
                                <BiLeaf className='text-6xl text-yellow-500'/>
                            </div>
                            <div className='absolute -top-6 -right-16 opacity-30 animate-movingY'>
                                <BiLeaf className='text-6xl text-yellow-500'/>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>

            {/* Services part */}

            <div className='bg-white text-green-900 py-20'>
                <div className='container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {/* card 1 */}
                    <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5'>
                        <div className='flex items-center gap-5'>
                            <FaTruck className='text-3xl md:text-4xl xl:text-5xl'></FaTruck>
                            <p className='md:text-lg font-bold'>
                                Fast <br />
                                Delivery
                            </p>
                        </div>
                        <p className='font-Lobster'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, recusandae!
                            adipisicing elit. Cupiditate, recusandae!
                        </p>
                    </div>
                    {/* card 2 */}
                    <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300'>
                        <div className='flex items-center gap-5'>
                            <CiHeadphones className='text-3xl md:text-4xl xl:text-5xl'></CiHeadphones>
                            <p className='md:text-lg font-bold'>
                                Great Customer <br />
                                Service
                            </p>
                        </div>
                        <p className='font-Lobster'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, recusandae!
                            adipisicing elit. Cupiditate, recusandae!
                        </p>
                    </div>
                    {/* card 3 */}
                    <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300'>
                        <div className='flex items-center gap-5'>
                            <PiPlant className='text-3xl md:text-4xl xl:text-5xl'></PiPlant>
                            <p className='md:text-lg font-bold'>
                                Original <br />
                                Plants
                            </p>
                        </div>
                        <p className='font-Lobster'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, recusandae!
                            adipisicing elit. Cupiditate, recusandae!
                        </p>
                    </div>
                    {/* card 4 */}
                    <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300'>
                        <div className='flex items-center gap-5'>
                            <BiDollar className='text-3xl md:text-4xl xl:text-5xl'></BiDollar>
                            <p className='md:text-lg font-bold'>
                                Affordable <br />
                                Price
                            </p>
                        </div>
                        <p className='font-Lobster'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, recusandae!
                            adipisicing elit. Cupiditate, recusandae!
                        </p>
                    </div>
                </div>
            </div>

            {/* About us */}
            <section id='about-us' className='relative overflow-hidden'>
                <div className='absolute -top-8 -right-12 opacity-50'>
                    <img src={leaf3} alt="" className='w-40 md:w-52 xl:w-64'/>
                </div>
                <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                    <h2 className='title'>About Us</h2>
                    <p className='max-w-2xl'>Follow instruction for more</p>
                </div>

                <div className='container space-y-10 xl:space-y-0'>
                    {/* item 1 */}
                    <div className='flex flex-col items-center lg:flex-row gap-3'>
                        <div className='w-full lg:w-1/2'>
                            <img src={plant1} alt="" className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' />
                        </div>

                        {/* content */}
                        <div className='w-full lg:w-1/2'>
                            <div className='space-y-5'>
                                <h3>Make Your <span className='text-yellow-500'>Organic</span> <br /> Garden</h3>
                                <p className='text-slate-300 font-Lobster'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore vero dolor id, deleniti aut. Suscipit autem in molestiae ipsum, ipsa vero pariatur ullam quis, quae eligendi mollitia? Reprehenderit, atque.
                                    molestiae ipsum, ipsa vero pariatur ullam quis, quae eligendi mollitia? Reprehenderit, atque.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* item 2 */}
                    <div className='flex flex-col items-center lg:flex-row-reverse gap-3'>
                        <div className='w-full lg:w-1/2'>
                            <img src={plant2} alt="" className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' />
                        </div>

                        {/* content */}
                        <div className='w-full lg:w-1/2'>
                            <div className='space-y-5'>
                                <h3>
                                    Come with us <span className='text-yellow-500'>grow up</span> <br /> your plant
                                </h3>
                                <p className='text-slate-300 font-Lobster'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore vero dolor id, deleniti aut. Suscipit autem in molestiae ipsum, ipsa vero pariatur ullam quis, quae eligendi mollitia? Reprehenderit, atque.
                                    molestiae ipsum, ipsa vero pariatur ullam quis, quae eligendi mollitia? Reprehenderit, atque.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className='bg-blue-900' id='popular'>
                <div className='flex flex-col items-center gap-3 text-center mb-40'>
                    <h2 className='title'>Your Choice Plant</h2>
                    <p className='max-w-2xl'>Follow instruction for more</p>
                </div>

                <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {/* card 1 */}
                    <div className='popular_card bg-blue-950 p-10 pt-24 rounded-md relative'>
                        <img src={cart1} alt="" className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'/>
                        <p>Nephrolepis exaltata</p>
                        <h3>Bostan Fern</h3>
                    
                    <div className='flex gap-1 text-yellow-500 text-xs py-3'>
                        <IoIosStar />
                        <IoIosStar />
                        <FaRegStarHalfStroke />
                        <IoStarOutline className='text-gray-400'/>
                        <IoStarOutline className='text-gray-400'/>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-xl'>$5</p>
                        <button className='bg-yellow-500 px-3 py-2 rounded-sm text-xl'>
                            <IoCartOutline />
                        </button>
                    </div>
                    </div>
                    {/* card 2 */}
                    <div className='popular_card bg-blue-950 p-10 pt-24 rounded-md relative'>
                        <img src={cart2} alt="" className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'/>
                        <p>Nephrolepis exaltata</p>
                        <h3>Bostan Fern</h3>
                    
                        <div className='flex gap-1 text-yellow-500 text-xs py-3'>
                            <IoIosStar />
                            <IoIosStar />
                            <FaRegStarHalfStroke />
                            <IoStarOutline className='text-gray-400'/>
                            <IoStarOutline className='text-gray-400'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-xl'>$5</p>
                            <button className='bg-yellow-500 px-3 py-2 rounded-sm text-xl'>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='popular_card bg-blue-950 p-10 pt-24 rounded-md relative'>
                        <img src={cart3} alt="" className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'/>
                        <p>Nephrolepis exaltata</p>
                        <h3>Bostan Fern</h3>
                    
                        <div className='flex gap-1 text-yellow-500 text-xs py-3'>
                            <IoIosStar />
                            <IoIosStar />
                            <FaRegStarHalfStroke />
                            <IoStarOutline className='text-gray-400'/>
                            <IoStarOutline className='text-gray-400'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-xl'>$5</p>
                            <button className='bg-yellow-500 px-3 py-2 rounded-sm text-xl'>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className='popular_card bg-blue-950 p-10 pt-24 rounded-md relative'>
                        <img src={cart4} alt="" className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500'/>
                        <p>Nephrolepis exaltata</p>
                        <h3>Bostan Fern</h3>
                    
                        <div className='flex gap-1 text-yellow-500 text-xs py-3'>
                            <IoIosStar />
                            <IoIosStar />
                            <FaRegStarHalfStroke />
                            <IoStarOutline className='text-gray-400'/>
                            <IoStarOutline className='text-gray-400'/>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-xl'>$5</p>
                            <button className='bg-yellow-500 px-3 py-2 rounded-sm text-xl'>
                                <IoCartOutline />
                            </button>
                        </div>
                    </div>
                </div>
                
            </section>

           {/* Review section */}

            <section className='relative mb-20 md:mb-28 overflow-hidden' id='review'>
                <div className='absolute -top-8 -left-12 opacity-50'>
                    <img src={leaf4} alt="" className='w-40 md:w-52 xl:w-64'/>
                </div>
                <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                    <h2 className='title'>Customer Review</h2>
                    <p className='max-w-2xl'>Follow instruction for more</p>
                </div>

                <div className='container '>
                    <Swiper
                        spaceBetween={50}
                        breakpoints = {
                            {
                                640:{
                                    slidesPerView: 1
                                },
                                768:{
                                    slidesPerView: 2
                                },
                                1024:{
                                    slidesPerView: 3
                                },
                            }
                        }
                    >
                
                        <div className='py-12 '>
                            <ul>
                            <SwiperSlide> <li className='mb-5 '>
                                    <div className='flex flex-col gap-5 bg-blue-900 rounded-md p-6'>
                                        <p className='font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis dolor culpa minus enim repellat.</p>
                                        <div className='flex items-center'>
                                            <img src={review1} alt="" className='w-12 h-12 rounded-full'/>
                                            <div className='ml-2'>
                                                <p className='text-yellow-500 uppercase'>John doe</p>
                                                <p>Designer</p>
                                            </div>
                                            <RiDoubleQuotesR className='text-4xl ml-auto'/>
                                        </div>
                                    </div>
                                </li></SwiperSlide>

                                <SwiperSlide><li className='mb-5'>
                                    <div className='flex flex-col gap-5 bg-blue-900 rounded-md p-6'>
                                        <p className='font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis dolor culpa minus enim repellat.</p>
                                        <div className='flex items-center'>
                                            <img src={review2} alt="" className='w-12 h-12 rounded-full'/>
                                            <div className='ml-2'>
                                                <p className='text-yellow-500 uppercase'>John doe</p>
                                                <p>Designer</p>
                                            </div>
                                            <RiDoubleQuotesR className='text-4xl ml-auto'/>
                                        </div>
                                    </div>
                                    </li></SwiperSlide>

                                    <SwiperSlide><li className='mb-5'>
                                    <div className='flex flex-col gap-5 bg-blue-900 rounded-md p-6'>
                                        <p className='font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis dolor culpa minus enim repellat.</p>
                                        <div className='flex items-center'>
                                            <img src={review3} alt="" className='w-12 h-12 rounded-full'/>
                                            <div className='ml-2'>
                                                <p className='text-yellow-500 uppercase'>John doe</p>
                                                <p>Designer</p>
                                            </div>
                                            <RiDoubleQuotesR className='text-4xl ml-auto'/>
                                        </div>
                                    </div>
                                </li></SwiperSlide>

                                <SwiperSlide><li className='mb-5'>
                                    <div className='flex flex-col gap-5 bg-blue-900 rounded-md p-6'>
                                        <p className='font-Lobster'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis dolor culpa minus enim repellat.</p>
                                        <div className='flex items-center'>
                                            <img src={review4} alt="" className='w-12 h-12 rounded-full'/>
                                            <div className='ml-2'>
                                                <p className='text-yellow-500 uppercase'>John doe</p>
                                                <p>Designer</p>
                                            </div>
                                            <RiDoubleQuotesR className='text-4xl ml-auto'/>
                                        </div>
                                    </div>
                                </li></SwiperSlide>
                            </ul>
                        </div>
                    </Swiper>
                </div>
            </section>
            

            
        </>
    );
};

export default Home;