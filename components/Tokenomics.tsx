'use client'

export default function Tokenomics() {
  const distribution = [
    { label: 'Liquidity Pool', percentage: 50, color: 'from-blue-500 to-blue-600', description: 'Ensures deep liquidity and price stability' },
    { label: 'DAO Treasury', percentage: 25, color: 'from-purple-500 to-purple-600', description: 'Community-controlled funds for project growth' },
    { label: 'Player Rewards', percentage: 10, color: 'from-green-500 to-green-600', description: 'Distributed to players through gameplay' },
    { label: 'Team (Vested)', percentage: 10, color: 'from-orange-500 to-orange-600', description: 'Locked and vested over 3 years' },
    { label: 'Airdrop', percentage: 5, color: 'from-pink-500 to-pink-600', description: 'Early community rewards and marketing' },
  ]

  const utilities = [
    {
      title: 'Staking Tokens',
      description: 'Stake your tokens to earn passive rewards and participate in governance decisions.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'NFT Burn to Earn',
      description: 'Burn NFTs to receive token rewards and unlock special benefits in the ecosystem.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Powerups & Health Bars',
      description: 'Use tokens to purchase in-game powerups and extra lives to improve your performance.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      title: 'Cosmetics & Skins',
      description: 'Customize your monkey with exclusive skins and visual upgrades using tokens.',
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      title: 'Badges & Achievements',
      description: 'Unlock and display special badges that showcase your accomplishments.',
      gradient: 'from-green-400 to-cyan-500',
    },
    {
      title: 'Season Pass',
      description: 'Purchase seasonal passes for exclusive content, rewards, and tournament access.',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'Daily Raffle',
      description: 'Enter daily raffles using tokens for a chance to win big prizes and rewards.',
      gradient: 'from-red-500 to-pink-600',
    },
    {
      title: 'Tournament Entry',
      description: 'Pay entry fees for premium tournaments with larger prize pools and better odds.',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Bonus Rewards (NFT Holders)',
      description: 'NFT holders receive multiplied weekly bonuses based on their token holdings.',
      gradient: 'from-yellow-500 to-amber-600',
    },
  ]

  return (
    <section id="tokenomics" className="section-padding bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Monkey decorations */}
      <img 
        src="/monkey1.png" 
        alt="" 
        className="absolute top-10 left-5 md:left-20 w-24 h-24 md:w-36 md:h-36 object-contain z-20 opacity-70"
        style={{ transform: 'rotate(-25deg)' }}
      />
      <img 
        src="/monkey2.png" 
        alt="" 
        className="absolute top-1/3 right-5 md:right-16 w-28 h-28 md:w-40 md:h-40 object-contain z-20 opacity-70"
        style={{ transform: 'rotate(22deg)' }}
      />

      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-jungle-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating coins animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Token </span>
            <span className="text-gradient">Economics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A carefully designed token economy that rewards players, ensures liquidity, 
            and gives the community control over the project&apos;s future.
          </p>
        </div>

        {/* Supply info */}
        <div className="mb-20 text-center">
          <div className="inline-block bg-gradient-to-br from-primary-500/20 to-primary-600/10 backdrop-blur-sm rounded-3xl p-12 border border-primary-500/30">
            <div className="text-sm uppercase tracking-wider text-primary-400 mb-4 font-semibold">Total Supply</div>
            <div className="text-6xl sm:text-7xl font-black text-gradient mb-4">100,000,000,000</div>
            <div className="text-gray-400 text-lg">100 Billion Tokens</div>
          </div>
        </div>

        {/* Distribution */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Token Distribution</h3>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual representation */}
            <div className="order-2 lg:order-1">
              <div className="space-y-4">
                {distribution.map((item, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-500/50 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-semibold text-lg">{item.label}</span>
                      <span className="text-2xl font-bold text-gradient">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 mb-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pie chart representation */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-80 h-80">
                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#1f2937"
                    strokeWidth="40"
                  />
                  {(() => {
                    let currentAngle = 0
                    return distribution.map((item, index) => {
                      const angle = (item.percentage / 100) * 360
                      const startAngle = currentAngle
                      currentAngle += angle
                      const startRad = (startAngle * Math.PI) / 180
                      const endRad = (currentAngle * Math.PI) / 180
                      const largeArc = angle > 180 ? 1 : 0
                      const x1 = 100 + 80 * Math.cos(startRad)
                      const y1 = 100 + 80 * Math.sin(startRad)
                      const x2 = 100 + 80 * Math.cos(endRad)
                      const y2 = 100 + 80 * Math.sin(endRad)
                      
                      const colors = [
                        '#3b82f6',
                        '#a855f7',
                        '#22c55e',
                        '#f97316',
                        '#ec4899',
                      ]
                      
                      return (
                        <path
                          key={index}
                          d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`}
                          fill={colors[index]}
                          className="chart-segment cursor-pointer"
                          opacity="0.9"
                        />
                      )
                    })
                  })()}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white">100B</div>
                    <div className="text-sm text-gray-400">Total Supply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Token Utilities */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-4">Token Utilities</h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Multiple use cases ensure strong token demand and create a sustainable ecosystem
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilities.map((utility, index) => (
              <div
                key={index}
                className="card-hover bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-primary-500/50 relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${utility.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${utility.gradient} mb-4 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <div className="w-6 h-6 bg-white/30 rounded" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 relative z-10">{utility.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{utility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center relative">
          {/* Monkey collecting banana - left side */}
          <img 
            src="/monkey3.png" 
            alt="" 
            className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 object-contain z-20 opacity-85"
            style={{ transform: 'translateY(-50%) rotate(-8deg)' }}
          />
          
          {/* Monkey fighting hunter - right side */}
          <img 
            src="/monkey4.png" 
            alt="" 
            className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 object-contain z-20 opacity-85"
            style={{ transform: 'translateY(-50%) rotate(8deg)' }}
          />

          <div className="inline-block bg-gradient-to-br from-primary-500/10 to-primary-600/5 backdrop-blur-sm rounded-2xl p-12 border border-primary-500/30 relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Join the Jungle?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Start playing now to earn tokens, climb the leaderboard, and be part of a thriving gaming community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://farcaster.xyz/miniapps/lD8uzclJ4Cii/ape-run" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <span>Launch App</span>
              </a>
              <button className="btn-secondary w-full sm:w-auto">
                <span>Buy Tokens</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
