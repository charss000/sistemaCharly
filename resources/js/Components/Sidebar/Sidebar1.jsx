import { Link } from "@inertiajs/react";
import {React,useState} from "react";
import {RiBarChart2Line,RiMoneyDollarCircleLine,
  RiLogoutCircleLine,RiProductHuntLine,RiUser2Line,
  RiSettings2Line,RiLogoutCircleRLine,
  RiArrowRightSLine,RiMenu3Line,RiCloseLine
} from "react-icons/ri";
import { TbDisabled,TbClockEdit,TbReportAnalytics } from "react-icons/tb";
import { MdBackup } from "react-icons/md";
export const Sidebar1 = () => {
  const classLink='flex gap-4 items-center py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors  hover:text-white';
  const classIcon='text-primary-900 ';
  const classSubMenu='py-2 px-6 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary-300 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-300 hover:text-white transition-colors';
  const [showSubmenu,setShowSubmenu]=useState(false);
  const [showMenu, setShowMenu] = useState(false);
    return (
<>
  <div 
  className={`xl:h-[100vh] text-gray-100 overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-300 p-4 flex flex-col justify-between z-50 ${
    showMenu ? "left-0" : "-left-full"
} transition-all`}
  >
              <div>
                  <h1 className="text-center text-2xl font-bold text-white mb-10">
                      Admin<span className="text-primary-300 text-4xl">.</span>
                  </h1>
                  <ul>
                    <li> <Link to="/"   className={classLink}>
                    <RiBarChart2Line className={classIcon}/>
                    Analitica
                    </Link></li>
                    <li> <Link to="/" className={classLink}>
                    <RiLogoutCircleLine className={classIcon}/>
                    Historias
                    </Link></li>
                    <li> <Link to="/" className={classLink}>
                    <TbDisabled className={classIcon}/>
                    Paciente
                    </Link></li>
                    <li> <Link to="/" className={classLink}>
                    <RiMoneyDollarCircleLine className={classIcon}/>
                    Pagos
                    </Link></li>
                    <li><Link to="/" className={classLink}>
                    <RiProductHuntLine className={classIcon}/>
                    Servicio Producto
                    </Link></li>
                    <li><Link to="/" className={classLink}>
                    <TbClockEdit className={classIcon}/>
                    citas
                    </Link></li>
                    <li>
                      <button to="/" className='w-full flex items-center justify-between py-2 px-4 rounded-lg text-gray-300 hover:bg-secondary-900 transition-colors'
                      onClick={()=> setShowSubmenu(!showSubmenu)}
                      >
                        <span className="flex items-center gap-4">
                        <RiUser2Line className={classIcon}/>
                  Modulo Usuario
                        </span>
                        <RiArrowRightSLine className={`mt-1 ${showSubmenu && "rotate-90"} transition-all`}/>
                    </button>
                    <ul className={` ${
                    showSubmenu ? "h-[130px]" : "h-0"
                  } overflow-y-hidden transition-all`}>
                      <li> <Link
                      to="/"
                      className={classSubMenu}
                    >
                      Post red social
                    </Link></li>
                      <li> <Link
                      to="/"
                      className={classSubMenu}
                    >
                      Post red social
                    </Link></li>
                      <li> <Link
                      to="/"
                      className={classSubMenu}
                    >
                      Post red social
                    </Link></li>
                    </ul>
                    </li>
                    <li> <Link to="/" className={classLink}>
                    <TbReportAnalytics className={classIcon}/>
                  Reportes
                    </Link></li>
                    
                  <li> <Link to="/" className={classLink}>
                    <MdBackup className={classIcon}/>
                  Respaldo
                    </Link></li>
                  <li><Link to="/" className={classLink}>
                    <RiSettings2Line className={classIcon}/>
                Configuracon
                    </Link></li>   
                  </ul>
              </div>
              <nav className="flex justify-center">
              <Link href={route('logout')} method="post"   as="button" className="flex gap-4 items-center py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors">
                    <RiLogoutCircleRLine className={classIcon}/>
                  Cerrar Sesión
                    </Link>
              </nav>
  </div>
  <button
                onClick={() => setShowMenu(!showMenu)}
                className="xl:hidden fixed bottom-4 right-4 bg-primary-300 text-black p-3 rounded-full z-50"
            >
                {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
</>


        
    );
};
