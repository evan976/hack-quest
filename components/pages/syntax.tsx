import { IconClock } from '@/components/icons/clock'
import { IconCourse } from '@/components/icons/course'
import { IconFlight } from '@/components/icons/flight'
import { Button } from '@/components/ui/button'
import { HoverCard3 } from '@/components/ui/hover-card'
import { Tag } from '@/components/ui/tag'

export default function Syntax() {
  return (
    <div className="mt-10 max-w-[1360px] mx-auto">
      <ul className="text-base border-y border-y-divider py-6 flex items-center gap-20 text-text-100">
        <li className="font-bold font-next-poster">{'< / Syntax >'}</li>
        {['Guided Project', 'Concept Learning', 'Teaser'].map((item, index) => (
          <li key={index} className="font-extralight font-next-poster ">{item}</li>
        ))}
      </ul>
      <div className="grid grid-cols-3 gap-12 mt-10">
        <HoverCard3>
          <div className="w-12 h-1 rounded-full bg-gradient-to-b from-teal-400 to-sky-500" />
          <h1 className="text-base font-bold text-text-100 mt-6">Introduction to programming</h1>
          <Tag className="scale-75 -ml-2 my-3">
            Beginner
          </Tag>
          <p className="text-text-500 text-xs pr-3">
            This course covers the most basic concepts in programming using Solidity as an example.
          </p>
          <div className="flex items-center gap-10 mt-16 text-xs">
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconClock className="-mt-1" />
              <p className="text-sm font-neue-machina">36 Hours</p>
            </span>
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconCourse className="-mt-1" />
              <p className="text-sm font-neue-machina">5 Courses</p>
            </span>
          </div>
        </HoverCard3>
        <HoverCard3>
          <div className="w-12 h-1 rounded-full bg-gradient-to-b from-teal-400 to-sky-500" />
          <h1 className="text-base font-bold text-text-100 mt-6">Introduction to programming</h1>
          <Tag className="scale-75 -ml-2 my-3">
            Beginner
          </Tag>
          <p className="text-text-500 text-xs pr-3">
            This course covers the most basic concepts in programming using Solidity as an example.
          </p>
          <div className="flex items-center gap-10 mt-16 text-xs">
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconClock className="-mt-1" />
              <p className="text-sm font-neue-machina">36 Hours</p>
            </span>
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconCourse className="-mt-1" />
              <p className="text-sm font-neue-machina">5 Courses</p>
            </span>
          </div>
        </HoverCard3>
        <HoverCard3>
          <div className="w-12 h-1 rounded-full bg-gradient-to-b from-teal-400 to-sky-500" />
          <h1 className="text-base font-bold text-text-100 mt-6">Introduction to programming</h1>
          <Tag className="scale-75 -ml-2 my-3">
            Beginner
          </Tag>
          <p className="text-text-500 text-xs pr-3">
            This course covers the most basic concepts in programming using Solidity as an example.
          </p>
          <div className="flex items-center gap-10 mt-16 text-xs">
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconClock className="-mt-1" />
              <p className="text-sm font-neue-machina">36 Hours</p>
            </span>
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconCourse className="-mt-1" />
              <p className="text-sm font-neue-machina">5 Courses</p>
            </span>
          </div>
        </HoverCard3>
        <HoverCard3>
          <div className="w-12 h-1 rounded-full bg-gradient-to-b from-teal-400 to-sky-500" />
          <h1 className="text-base font-bold text-text-100 mt-6">Introduction to programming</h1>
          <Tag className="scale-75 -ml-2 my-3">
            Beginner
          </Tag>
          <p className="text-text-500 text-xs pr-3">
            This course covers the most basic concepts in programming using Solidity as an example.
          </p>
          <div className="flex items-center justify-between mt-14 text-xs">
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconClock className="-mt-1" />
              <p className="text-sm font-neue-machina">36 Hours</p>
            </span>
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconCourse className="-mt-1" />
              <p className="text-sm font-neue-machina">5 Courses</p>
            </span>
            <Button className="text-xs">
              <IconFlight />
              <span className="scale-[0.83] -ml-2">45% COMPLETED</span>
            </Button>
          </div>
        </HoverCard3>
      </div>
    </div>
  )
}
