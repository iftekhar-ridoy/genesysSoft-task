import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { BiError } from "react-icons/bi";
import useTitle from '../../../Hook/useTitle';

const Register = () => {
    useTitle('Register')
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signUpUser, updateUser, verifyEmail } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();


    const handleRegister = data => {
        console.log(data);
        setSignUpError('');



        signUpUser(data.email, data.password)

            .then(res => {
                const user = res.user;
                console.log(user);
                toast.error('Verify Your Email Address');

                const userInfo = {
                    displayName: data.fname + ' ' + data.lname
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.fname, data.lname, data.email, data.password);
                    })
                    .catch(err => console.error(err))

                verifyEmail()
                    .then(() => { })
                    .catch(err => console.error(err));

                navigate('/');
            })
            .catch(err => {
                console.error(err.message)
                setSignUpError(err.message)
            })
    }

    const saveUser = (fname, lname, email, password) => {
        const user = {
            fname,
            lname,
            email,
            password
        };
        fetch('https://genesys-softwares-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUserEmail(email);
                navigate('/');
            })
    }

    return (
        <div className='w-full mt-8 md:mt-[100px]'>
            <div className='flex flex-col items-center md:tracking-[0.03em]'>
                <h2 className='text-xl md:text-[32px] text-[#2D2929] md:leading-[48px] mb-4'>CREATE ACCOUNT</h2>
                <h3 className='text-xs md:text-[17px] md:leading-[26px] text-center text-[#2D2929] mb-6 md:mb-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>

                <form className="w-full px-3" onSubmit={handleSubmit(handleRegister)}>

                    {/* first name  */}
                    <div className='form-control w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-6'>
                        <input type="text"
                            {...register("fname", { required: "First name is required" })}
                            placeholder="First Name"
                            className="w-full max-w-[686px] h-[47px] mx-auto outline-none p-2 px-5 border border-solid border-[#D2D2D2] text-sm md:text-[17px] text-[black] placeholder-[#888888] md:leading-[23px] focus:border-black" />
                        {
                            errors.fname &&
                            <p className='text-red-600 text-xs md:text-sm flex items-center gap-1'>
                                <BiError></BiError>{errors.fname?.message}
                            </p>
                        }
                    </div>

                    {/* last name  */}
                    <div className='form-control w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-6'>
                        <input type="text"
                            {...register("lname", { required: "Last name is required" })}
                            placeholder="Last Name"
                            className="w-full max-w-[686px] h-[47px] mx-auto outline-none p-2 px-5 border border-solid border-[#D2D2D2] text-sm md:text-[17px] text-[black] placeholder-[#888888] md:leading-[23px] focus:border-black" />
                        {
                            errors.lname &&
                            <p className='text-red-600 text-xs md:text-sm flex items-center gap-1'>
                                <BiError></BiError>
                                {errors.lname?.message}
                            </p>
                        }
                    </div>

                    {/* email  */}
                    <div className='form-control w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-6'>
                        <input type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Email"
                            className="w-full max-w-[686px] h-[47px] mx-auto outline-none p-2 px-5 border border-solid border-[#D2D2D2] text-sm md:text-[17px] text-[black] placeholder-[#888888] md:leading-[23px] focus:border-black" />
                        {
                            errors.email &&
                            <p className='text-red-600 text-xs md:text-sm flex items-center gap-1'>
                                <BiError></BiError>
                                {errors.email?.message}
                            </p>
                        }
                    </div>

                    {/* password  */}
                    <div className='form-control w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-12'>
                        <input type="password"
                            {...register("password", { required: "Password is required" })}
                            placeholder="Password"
                            className="w-full max-w-[686px] h-[47px] mx-auto outline-none p-2 px-5 border border-solid border-[#D2D2D2] text-sm md:text-[17px] text-[black] placeholder-[#888888] md:leading-[23px] focus:border-black" />
                        {
                            errors.password &&
                            <p className='text-red-600 text-xs md:text-sm flex items-center gap-1'>
                                <BiError></BiError>
                                {errors.password?.message}
                            </p>
                        }
                    </div>

                    {/* signUpError  */}
                    {
                        signUpError &&
                        <p className='text-red-600 text-xs md:text-sm flex items-center gap-1 mb-2 w-full max-w-[686px] mx-auto'>
                            <BiError></BiError>
                            {signUpError}
                        </p>
                    }

                    {/* create button */}
                    <div className='w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-6'>
                        <button
                            className="w-full max-w-[686px] h-[47px] mx-auto md:leading-[27px] p-2 bg-[#4E4534] hover:bg-black text-white text-base md:text-xl"
                            type="submit">
                            CREATE
                        </button>
                    </div>



                    <div className='w-full max-w-[686px] h-[47px] mx-auto'>
                        <p className='text-[#2D2929] md:leading-[26px] text-sm md:text-[17px]'>Already have an account?
                            <span className='underline ml-3'><Link to='/login'>Back to login</Link></span>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;