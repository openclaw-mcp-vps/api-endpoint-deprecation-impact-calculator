export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          API Monitoring
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Calculate the Business Impact of{' '}
          <span className="text-[#58a6ff]">API Deprecations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Ingest your API usage logs, identify every customer and feature hitting deprecated endpoints, and get a clear revenue-risk report before you pull the plug.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Get Started — $18/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '100%', label: 'Endpoint coverage from raw logs' },
            { stat: 'Real-time', label: 'Customer impact segmentation' },
            { stat: '$0 surprise', label: 'Revenue risk before deprecation' },
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-[#8b949e] mb-8">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited API log ingestion',
              'Customer impact segmentation',
              'Revenue risk calculations',
              'Deprecation impact dashboard',
              'Automated email notifications',
              'CSV & JSON export',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What log formats are supported?',
              a: 'The calculator accepts standard access logs (Apache/Nginx), JSON structured logs, and CSV exports from popular API gateways like Kong, AWS API Gateway, and Apigee.',
            },
            {
              q: 'How is revenue impact calculated?',
              a: 'You map customers to MRR values in the dashboard. The tool then aggregates usage of deprecated endpoints per customer and surfaces total revenue at risk, broken down by endpoint and customer tier.',
            },
            {
              q: 'Can I notify affected customers automatically?',
              a: 'Yes. Once you configure your SMTP or SendGrid credentials, the tool can send templated deprecation notices to every customer whose integration touches a flagged endpoint.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} API Deprecation Impact Calculator. All rights reserved.
      </footer>
    </main>
  )
}
