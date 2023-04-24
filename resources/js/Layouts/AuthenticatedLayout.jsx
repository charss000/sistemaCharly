

import { Header } from '@/Components/Header/Header';
import Sidebar from '@/Components/Sidebar/Sidebar';
import Nav from '@/Components/Header/Nav';
export default function Authenticated({ user, header, children }) {
    

    return (
        <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
         <Sidebar/>   
        
        <div className='xl:col-span-5   '>
        {/* <Nav user={user}/> */}
        <Nav/>
        <main className='h-[90vh] overflow-y-scroll p-8' >
      
      {/* <Header header={header}/> */}
      
       {children}
       </main>
        </div>
      
      </div>
    );
}
