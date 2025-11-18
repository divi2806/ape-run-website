'use client'

export default function About() {
  const features = [
    {
      title: 'Fast-Paced Gameplay',
      description: 'Experience arcade-style action with smooth controls and responsive mechanics. Test your reflexes as the game speeds up.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Tournament System',
      description: 'Compete in public and NFT-exclusive tournaments. Climb the leaderboard and win prizes from the prize pool.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      title: 'NFT Integration',
      description: 'Own exclusive Ape Run NFTs to unlock special tournaments, bonus rewards, and unique in-game abilities.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Real Rewards',
      description: 'Earn tokens through gameplay, tournaments, daily rewards, and staking. Your skills translate to real value.',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Blockchain Powered',
      description: 'Built on Base network for fast, secure, and low-cost transactions. All scores and rewards are on-chain.',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      title: 'Community Driven',
      description: '25% of supply allocated to DAO treasury. The community decides the future direction of the project.',
      gradient: 'from-red-400 to-orange-500',
    },
  ]

  return (
    <section id="about" className="section-padding jungle-bg relative overflow-hidden">
      {/* Monkey decorations */}
      <img 
        src="/monkey2.png" 
        alt="" 
        className="absolute top-20 right-2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain z-20 opacity-80"
        style={{ transform: 'rotate(18deg)' }}
      />
      <img 
        src="/monkey1.png" 
        alt="" 
        className="absolute bottom-10 left-2 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain z-20 opacity-80"
        style={{ transform: 'rotate(-20deg)' }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-jungle-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Animated tree silhouettes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute bottom-0 left-1/4 w-2 h-1/2 bg-gradient-to-t from-green-500 to-transparent animate-float" />
        <div className="absolute bottom-0 right-1/4 w-2 h-2/3 bg-gradient-to-t from-green-600 to-transparent animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 left-1/2 w-2 h-3/4 bg-gradient-to-t from-green-400 to-transparent animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-2">
            <span className="text-white">About </span>
            <span className="text-gradient">Ape Run</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ape Run is a skill-based arcade game where players climb an endless tree, 
            dodging branches and collecting bananas. Built on Base network with Web3 integration, 
            it combines classic arcade gameplay with modern blockchain rewards.
          </p>
        </div>

        {/* Game description */}
        <div className="mb-16 sm:mb-20 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-primary-500/20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">How It Works</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                <p className="leading-relaxed">
                  Control your monkey character as it climbs an endless tree trunk. 
                  Swipe left or right to dodge incoming branches that appear from both sides. 
                  The game progressively gets faster, testing your reflexes and concentration.
                </p>
                <p className="leading-relaxed">
                  Collect bananas along the way for bonus points. Your score increases with 
                  distance traveled and collectibles gathered. Compete for the top spots on 
                  the global leaderboard or enter exclusive tournaments for bigger rewards.
                </p>
                <p className="leading-relaxed">
                  Connect your wallet to save scores on-chain, participate in tournaments, 
                  and earn token rewards. NFT holders get access to exclusive tournaments 
                  with enhanced prize pools and multiplied rewards.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-500/20 to-jungle-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary-500/30 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-jungle-500/10 rounded-full blur-3xl animate-pulse-slow" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Simple Controls</h4>
                    <p className="text-gray-400 text-sm">Swipe or use arrow keys to move left and right</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Avoid Obstacles</h4>
                    <p className="text-gray-400 text-sm">Dodge branches coming from both sides of the tree</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Collect Rewards</h4>
                    <p className="text-gray-400 text-sm">Grab bananas for bonus points and special perks</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Survive Longer</h4>
                    <p className="text-gray-400 text-sm">Speed increases over time, test your limits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 px-2">Key Features</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-primary-500/20 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4 sm:mb-5 md:mb-6 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white/20 rounded-lg" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
