import { Nav } from '@/Components/Header/Nav';
import { Header } from '@/Components/Header/Header';
import { Sidebar } from '@/Components/Sidebar/Sidebar';
import { Bar } from '@/Components/Sidebar/Bar';

export default function Authenticated({ header, children }) {
   

    return (
        <div className="min-h-screen bg-secondary-900">
           <div className='bg-green-300 col-span-1'>sidebar</div>
 <div className='bg-blue-400 col-span-5'>
    <Nav/>

 </div>
        </div>
    );
}
