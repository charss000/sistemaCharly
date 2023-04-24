import { useEffect,useState } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {RiMailOpenLine,RiLockLine,RiEyeLine,RiEyeOffLine,RiLockUnlockLine,  } from "react-icons/ri";
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    const [showPassword, setShowPassword]=useState(false)
   const classIcon='absolute top-1/2 -translate-y-1/2   text-primary-300'
   
    return (
        <GuestLayout >
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
             <h1 className='text-2xl uppercase font-bold  text-white w-full text-center mb-7'>
                Iniciar Seccion
             </h1>
            <form onSubmit={submit}>
                <button className='flex justify-center gap-4 w-full bg-secondary-900 p-2 text-white rounded-xl mb-7'>
                    <img src="/img/logos/google-svgrepo-com.svg" alt="" className='w-8 h-8' />
                    Ingrese con google
                </button>
                <div  className='relative'>
                    {/* <InputLabel htmlFor="email" value="Email"   /> */}
                    <RiMailOpenLine className={classIcon + ' left-2'} />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="pl-8"
                        placeholder='Correo Electrónico'
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    {/* <InputLabel htmlFor="password" value="Password" /> */}
                    {showPassword?(
                        <RiLockUnlockLine className={classIcon+ ' left-2'}/> 
                    ):
                   
                    <RiLockLine className={classIcon+ ' left-2'}/>
                    }
                    
                   
                    <TextInput
                        id="password"
                        type={showPassword ? 'text':'password'}
                        name="password"
                        value={data.password}
                        className="px-8"
                        autoComplete="current-password"
                        placeholder='Password'
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {showPassword ? (
                    <RiEyeOffLine className={classIcon+' right-2 hover:cursor-pointer'}  onClick={()=>setShowPassword(!showPassword)}/>

                    ):<RiEyeLine className={classIcon+' right-2 hover:cursor-pointer'} onClick={()=>setShowPassword(!showPassword)}/>
                }
                   
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Recordar</span>
                    </label>
                </div>

                <div className="flex items-center justify-center mt-4  w-full">
                    
                    <PrimaryButton className=" w-full  text-center flex justify-center"  disabled={processing}>
                   
                        Ingresar
                    </PrimaryButton>
                </div>
                <div className="flex items-center  mt-4 justify-between">
                    <p className='text-gray-600'>¿ no tienes cuenta?
                <Link href={route('register')} 
                 className="underline  text-sm text-primary-900 hover:text-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >  Registrese</Link></p>
                    
                    {canResetPassword && (
                       
                        <Link
                            href={route('password.request')}
                            className="underline  text-sm text-gray-600 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                           
                           
                           
                           
                           Olvidaste tu Contraseña?
                        </Link>
                    )}


                   
                    
                       
                  
                    
                </div>
            </form>
           
            
        </GuestLayout>
    );
}
