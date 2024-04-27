import Discord from '@/public/discord.svg'
import Instagram from '@/public/instagram.svg'
import LogoFull from '@/public/logo-full.svg'
import Twitter from '@/public/twitter.svg'

export function Footer() {
  return (
    <footer className="w-full pt-20">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-20">
          <h2 className="text-text-300 text-[32px] leading-10 font-bold w-[283px] font-next-poster">
            WEB3 programming for Everyone
          </h2>
          <LogoFull className="w-28 h-9" />
        </div>
        <div className="flex gap-20">
          <ul className="flex flex-col gap-10">
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
      <p className="flex justify-end text-sm text-text-500">
        © {new Date().getFullYear()} HackQuests. All Rights Reserved.
      </p>
      <div className="w-full h-px bg-divider my-4" />
    </footer>
  )
}
