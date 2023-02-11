import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch('https://genesys-softwares-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='text-[#2D2929] md:tracking-[0.03em] my-5 md:my-[80px] md:mx-[90px]'>
            <h2 className='text-2xl md:text-[28px] md:leading-[38px] mx-3 md:mx-[15px] md:mb-6'>User list</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-sm md:text-[15px] capitalize font-normal bg-transparent w-1/3'>First Name</td>
                            <td className='text-sm md:text-[15px] capitalize font-normal bg-transparent w-1/3'>Last Name</td>
                            <td className='text-sm md:text-[15px] capitalize font-normal bg-transparent w-1/3'>Email</td>
                            <td className='text-sm md:text-[15px] capitalize font-normal bg-transparent w-1/3'>Password</td>
                        </tr>
                        {
                            users?.map(user =>
                                <tr key={user._id}>
                                    <td className='md:text-[17px] font-normal'>{user.fname}</td>
                                    <td className='md:text-[17px] font-normal'>{user.lname}</td>
                                    <td className='md:text-[17px] font-normal'>{user.email}</td>
                                    <td className='md:text-[17px] font-normal'>{user.password}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;