import { IconClock } from '@/components/icons/clock'
import { IconCourse } from '@/components/icons/course'
import { IconFlight } from '@/components/icons/flight'
import { Button } from '@/components/ui/button'
import { HoverCard2 } from '@/components/ui/hover-card'
import { Tag } from '@/components/ui/tag'

export default function LearningTracks() {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-next-poster font-bold text-text-100">{'< / Learning Tracks >'}</h1>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 mt-6">
        <HoverCard2 className="pb-7 pr-3.5">
          <div className="w-12 h-1 rounded-full bg-gradient-to-b from-lime-400 to-green-500" />
          <h1 className="text-base font-bold text-text-100 mt-6">Web 3.0 Programming Advanced</h1>
          <Tag className="scale-75 -ml-2 my-3">
            Advanced
          </Tag>
          <p className="text-text-500 text-xs pr-3">
            Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.
          </p>
          <div className="flex items-center justify-between mt-10 text-xs">
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
        </HoverCard2>
        <HoverCard2 className="pb-7">
          <div className="w-12 h-1 rounded-full bg-gradient-to-b from-lime-400 to-green-500" />
          <h1 className="text-base font-bold text-text-100 mt-6">Web 3.0 Programming Basics</h1>
          <Tag className="scale-75 -ml-2 my-3">
            Beginner
          </Tag>
          <p className="text-text-500 text-xs pr-3">
            Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.
          </p>
          <div className="flex items-center gap-10 mt-12 text-xs">
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconClock className="-mt-1" />
              <p className="text-sm font-neue-machina">36 Hours</p>
            </span>
            <span className="flex items-center text-text-200 justify-center gap-2">
              <IconCourse className="-mt-1" />
              <p className="text-sm font-neue-machina">5 Courses</p>
            </span>
          </div>
        </HoverCard2>
      </div>
    </div>
  )
}
