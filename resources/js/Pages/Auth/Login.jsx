import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { RiMailFill,RiLock2Fill } from "react-icons/ri";
import { FaBeer } from 'react-icons/fa';
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
   const classIcon='absolute top-1/2 -translate-y-1/2 left-2  text-white'
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
                  {/* <MdMail  /> */}
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
                    <RiMailFill className={classIcon} />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    {/* <InputLabel htmlFor="password" value="Password" /> */}
                    <RiLock2Fill className={classIcon}/>
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="pl-8"
                        autoComplete="current-password"
                        placeholder='Password'
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
           
            
        </GuestLayout>
    );
}
