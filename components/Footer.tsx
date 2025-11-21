export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/tryrecessdotfun' },
    { name: 'Telegram', href: '#' },
    { name: 'GitHub', href: '#' },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-xl font-bold">
                AR
              </div>
              <span className="text-2xl font-bold text-gradient">Apex Runner</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The ultimate arcade game on Base network. Climb, compete, and earn rewards 
              in a skill-based gaming ecosystem powered by blockchain technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-primary-500/20 border border-gray-800 hover:border-primary-500/50 flex items-center justify-center transition-all group"
                  aria-label={link.name}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-primary-400 to-primary-600 rounded group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Tokenomics
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://farcaster.xyz/miniapps/lD8uzclJ4Cii/apex-runner" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Play Now
                </a>
              </li>
              <li>
                <a href="https://x.com/tryrecessdotfun" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Follow on X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Apex Runner. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
