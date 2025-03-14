import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='"/'>
                <img src={headerLogo} alt="Nike logo" width={130} height={29}/>
            </a>
            <ul className='flex-1 flex justify-center xl:justify-end items-center gap-16 max-lg:hidden'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black'>{link.label}</a>
                    </li>
                ))}
            </ul>
            <div className='cursor-pointer min-lg:hidden'>
                <img src={hamburger} alt="Ham" height={25} width={25}/>
            </div>
        </nav>
    </header>
    )
}

export default Nav