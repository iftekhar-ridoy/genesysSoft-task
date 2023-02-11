import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BiError } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hook/useTitle';

const Login = () => {
    useTitle('Login');

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signInUser, setUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        signInUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                if (user.emailVerified) {
                    setUser(user);
                    navigate('/');
                    toast.success('Login successful.')
                }
                else {
                    toast.error('Please Verify Your Email Address');
                }
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message);
            })
    }

    return (
        <div className='w-full mt-8 md:mt-[100px]'>
            <div className='flex flex-col items-center md:tracking-[0.03em]'>
                <h2 className='text-xl md:text-[32px] text-[#2D2929] md:leading-[48px] mb-4 md:mb-12'>LOGIN</h2>

                <form className="w-full px-3" onSubmit={handleSubmit(handleLogin)}>

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

                    {/* loginError  */}
                    {
                        loginError &&
                        <p className='text-red-600 text-xs md:text-sm flex items-center gap-1 mb-2 w-full max-w-[686px] mx-auto'>
                            <BiError></BiError>
                            {loginError}
                        </p>
                    }


                    <div className='w-full max-w-[686px] h-[47px] mx-auto mb-3 md:mb-6'>
                        <button
                            className="w-full max-w-[686px] h-[47px] mx-auto md:leading-[27px] p-2 bg-[#4E4534] hover:bg-black text-white text-base md:text-xl"
                            type="submit">
                            LOGIN
                        </button>
                    </div>


                    <div className='w-full max-w-[686px] h-[47px] mx-auto'>
                        <p className='text-center text-[#2D2929] md:leading-[26px] text-sm md:text-[17px]'>
                            <span className='mr-4 hover:underline'><Link to='/register'>Create Account</Link></span>
                            /
                            <span className='ml-4 hover:underline'><Link to='/recover-password'>Forget your password?</Link></span>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;