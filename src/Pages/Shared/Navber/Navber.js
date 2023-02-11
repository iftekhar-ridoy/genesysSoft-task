import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png';
import { BsCart2, BsSearch } from 'react-icons/bs';
import { RxPerson } from 'react-icons/rx';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../Hook/useAdmin';

const Navber = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    const menuItems = <>
        <li className='mr-6 hover:text-blue-700 hover:font-semibold'><Link to='/'>HOME</Link></li>
        <li className='mr-6 hover:text-blue-700 hover:font-semibold'><Link to='/'>SHOP</Link></li>
        <li className='mr-6 hover:text-blue-700 hover:font-semibold'><Link to='/'>ABOUT US</Link></li>
        <li className='mr-6 hover:text-blue-700 hover:font-semibold'><Link to='/'>CONTACT US</Link></li>
    </>

    return (
        <header>
            <div className='h-[50px] bg-[#E4E1D5] flex justify-center items-center'>
                <p className='text-center text-base'>Use this banner to inform your users of something important.
                </p>
            </div>

            <nav>
                <div className="navbar flex justify-between items-center bg-[#F0F0F0] h-[100px] px-5 lg:px-[90px]">
                    <div className="navbar-start">
                        {/* for desktop */}
                        <div className='hidden lg:flex'>
                            <ul className="flex text-sm text-[#2D2929]">
                                {menuItems}
                            </ul>
                        </div>
                        {/* for mobile device */}
                        <div className="dropdown">
                            <label tabIndex={0} className="lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[275px]">
                                {menuItems}
                                <div className="flex ml-5 my-3">
                                    <BsSearch className='w-5 h-5 mr-4'></BsSearch>
                                    <BsCart2 className='w-6 h-6'></BsCart2>
                                </div>
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center">
                        {/* logo  */}
                        <Link to='/'>
                            <img className='w-[52px] h-[59px]' src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="navbar-end">
                        <BsSearch className='w-5 h-5 mr-4 hidden md:block hover:text-blue-700 cursor-pointer'></BsSearch>
                        <div className="dropdown dropdown-end">
                            {
                                user?.uid ?
                                    <label tabIndex={0} className="cursor-pointer tooltip" data-tip="profile">
                                        <div className='w-8 h-8 rounded-full mr-4 font-semibold text-2xl border border-black border-dashed bg-slate-300 hover:text-blue-700'>
                                            {user?.displayName?.slice(0, 1)}
                                        </div>
                                    </label>
                                    :
                                    <label tabIndex={0} className="cursor-pointer tooltip" data-tip="profile">
                                        <RxPerson className='w-6 h-6 mr-4 hover:text-blue-700'></RxPerson>
                                    </label>
                            }
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-sm text-[#2D2929]">
                                {
                                    user?.uid ?
                                        <div className='py-3 text-sm text-[#2D2929]'>
                                            <li className='font-semibold pl-4'>{user?.displayName}</li>
                                            <li className='divider'></li>
                                            {
                                                isAdmin &&
                                                <>
                                                    <li className=''><Link to='/allUsers'>ALL USERS</Link></li>
                                                    <li className='divider'></li>
                                                </>
                                            }
                                            <li
                                                className='pl-4 cursor-pointer hover:text-blue-700 hover:font-semibold'
                                                onClick={logout}>LOGOUT
                                            </li>
                                        </div>
                                        :
                                        <div className='py-3 text-sm text-[#2D2929]'>
                                            <li className='hover:text-blue-700'><Link className='text-center' to='/login'>LOGIN</Link></li>
                                            <li className='divider'></li>
                                            <li className='hover:text-blue-700'><Link className='text-center' to='/register'>REGISTER</Link></li>
                                        </div>
                                }
                            </ul>
                        </div>
                        <BsCart2 className='w-6 h-6 hidden md:block hover:text-blue-700 cursor-pointer'></BsCart2>
                    </div>



                </div>
            </nav>

        </header >
    );
};

export default Navber;