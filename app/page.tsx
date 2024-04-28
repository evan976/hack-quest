import LearningTracks from '@/components/pages/learning-tracks'
import Syntax from '@/components/pages/syntax'
import TrendingNow from '@/components/pages/trending-now'

export default function Page() {
  return (
    <section className="xl:mt-12 mt-4 px-4 xl:px-0">
      <TrendingNow />
      <LearningTracks />
      <Syntax />
    </section>
  )
}
