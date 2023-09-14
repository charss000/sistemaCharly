import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800  leading-tight">Dashboard2</h2>}
        className='text-white'>
            <Head title="Dashboard2" />

            <div className="">
                
                    <div className=" overflow-hidden shadow-sm ">
                        <div className="p-6 text-white ">
                         Usuario

                        </div>
                    </div>
               
            </div>
        </AuthenticatedLayout>
    );
}
