import LearningTracks from '@/components/pages/learning-tracks'
import Syntax from '@/components/pages/syntax'
import TrendingNow from '@/components/pages/trending-now'

export default function Page() {
  return (
    <section className="mt-12">
      <TrendingNow />
      <LearningTracks />
      <Syntax />
    </section>
  )
}
