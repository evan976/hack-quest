import Discord from '@/public/discord.svg'
import Instagram from '@/public/instagram.svg'
import LogoFull from '@/public/logo-full.svg'
import Twitter from '@/public/twitter.svg'

export function Footer() {
  return (
    <footer className="w-full xl:pt-20 pt-10">
      <div className="flex xl:flex-row flex-col justify-between w-full">
        <div className="flex flex-col xl:gap-20 gap-6 max-sm:items-center">
          <h2 className="text-text-300 xl:text-[32px] text-xl leading-10 font-bold xl:w-[283px] font-next-poster">
            WEB3 programming for Everyone
          </h2>
          <LogoFull className="w-28 h-9" />
        </div>
        <div className="flex justify-center xl:gap-20 gap-10 mt-6 xl:mt-0">
          <ul className="flex flex-col xl:gap-10 gap-4">
            {['All Courses', 'Learning Dashboard', 'Resources Station'].map((item, index) => (
              <li key={index} className="text-text-400 text-sm font-bold">{item}</li>
            ))}
          </ul>
          <div>
            <h3 className="text-text-400 text-sm font-bold">Contact us:</h3>
            <div className="flex items-center [&_svg]:w-6 [&_svg]:h-6 [&_svg]:fill-text-400 [&_svg]:cursor-pointer gap-4 mt-4">
              <Twitter />
              <Discord />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
      <p className="flex xl:justify-end justify-center mt-10 xl:mt-0 xl:text-sm text-xs text-text-500">
        © {new Date().getFullYear()} HackQuests. All Rights Reserved.
      </p>
      <div className="w-full h-px bg-divider my-4" />
    </footer>
  )
}
