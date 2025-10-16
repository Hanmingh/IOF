import { Hero } from '@/components/Hero'

const Home = () => {
  return (
    <div className="space-y-16">
      <Hero
        heading="Transforming Industry with Cutting-Edge Algorithmic Solutions"
        description="Specializing in Machine Learning and Optimization for Finance, Logistics, Healthcare, and Beyond"
        cta={{ text: 'Learn more', url: '/services' }}
        backgroundImage="/Black_Sail_Ship.jpg"
      />
    </div>
  )
}

export default Home