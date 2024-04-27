import Image from 'next/image'

import Logo from '@/public/logo.svg'

export function Navbar() {
  return (
    <header className="w-full flex h-[76px] max-w-[1360px] mx-auto justify-between items-center">
      <div className="flex h-full items-center gap-16">
        <Logo className="w-32 h-4" />
        <nav>
          <ul className="flex items-center gap-10 text-text-400">
            {['All Courses', 'Learning Dashboard'].map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        </nav>
      </div>
      <Image
        src="/avatar.png"
        width={40}
        height={40}
        alt="avatar"
      />
    </header>
  )
}
