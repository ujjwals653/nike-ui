import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" 
            width={150} height={46}/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="flex justify-center items-center bg-white rounded-full w-10 h-10">
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h4 className="text-white font-montserrat text-[24px] leading-normal font-medium mb-6 cursor-pointer">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="text-white-400 text-base font-montserrat leading-normal hover:text-slate-gray"><a href={link.link}>{link.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <p>© 2021 Nike, Inc. All Rights Reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Privacy & Terms</p>
      </div>
    </footer>
  )
}

export default Footer