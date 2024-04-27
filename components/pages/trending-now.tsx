'use client'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IconClock } from '@/components/icons/clock'
import { IconCourse } from '@/components/icons/course'
import { IconFlight } from '@/components/icons/flight'
import { Button } from '@/components/ui/button'
import { HoverCard1, HoverCard2, HoverCard3 } from '@/components/ui/hover-card'
import { Tag } from '@/components/ui/tag'

export default function TrendingNow() {
  return (
    <div className="w-full">
      <h1 className="text-xl font-next-poster font-bold text-text-100">{'< / Trending Now >'}</h1>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={52}
        slidesPerView={3}
        className="mt-8"
      >
        <SwiperSlide className="py-1.5">
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
        </SwiperSlide>
        <SwiperSlide className="py-1.5">
          <HoverCard1 className="pr-10">
            <h1 className="text-base font-bold text-text-100">Moonshot 2023 Summer Hackathon</h1>
            <div className="flex items-center gap-3">
              {['All Tracks', 'Solidity', 'ZK'].map((item, index) => (
                <Tag key={index} className="scale-75 -ml-2 my-3">
                  {item}
                </Tag>
              ))}
            </div>
            <div className="flex items-center mt-10 pb-1 justify-between border-b border-b-divider">
              <span className="text-xs text-text-500">Signup</span>
              <span className="text-sm font-neue-machina">4/15 - 6/15</span>
            </div>
            <div className="flex items-center mt-4 pb-1 justify-between border-b border-b-divider">
              <span className="text-xs text-text-500">Event</span>
              <span className="text-sm font-neue-machina">6/15 - 7/15</span>
            </div>
            <div className="flex items-center mt-4 pb-1 justify-between border-b border-b-divider">
              <span className="text-xs text-text-500">Grant size</span>
              <span className="text-sm font-neue-machina">200K</span>
            </div>
          </HoverCard1>
        </SwiperSlide>
        <SwiperSlide className="py-1.5">
          <HoverCard2>
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
        </SwiperSlide>
        <SwiperSlide className="py-1.5">
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
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
