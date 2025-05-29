'use client'

import React, { useState, useEffect } from 'react';
import { Calculator, Shield, TrendingDown, CheckCircle, Target, Search, Zap, ArrowRight, Lock, Eye } from 'lucide-react';

interface CostState {
  attackSurfaceManagement: number;
  continuousPenTesting: number;
  breachSimulation: number;
  vulnerabilityManagement: number;
  annualPenTest: number;
}

interface CompanyPreset {
  attackSurfaceManagement: number;
  continuousPenTesting: number;
  breachSimulation: number;
  vulnerabilityManagement: number;
  annualPenTest: number;
  praetorian: number;
}

const PraetorianROICalculator: React.FC = () => {
  const [currentCosts, setCurrentCosts] = useState<CostState>({
    attackSurfaceManagement: 275000,
    continuousPenTesting: 450000,
    breachSimulation: 300000,
    vulnerabilityManagement: 250000,
    annualPenTest: 112000
  });

  const [praetorianCost, setPraetorianCost] = useState<number>(650000);
  const [companySize, setCompanySize] = useState<string>('large');
  const [timeframe, setTimeframe] = useState<number>(3);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  const totalCurrentCosts = Object.values(currentCosts).reduce((sum, cost) => sum + cost, 0);
  const yearOneSavings = totalCurrentCosts - praetorianCost;
  const totalSavings = yearOneSavings * timeframe;
  const savingsPercentage = ((yearOneSavings / totalCurrentCosts) * 100).toFixed(1);

  const companySizePresets: Record<string, CompanyPreset> = {
    medium: {
      attackSurfaceManagement: 100000,
      continuousPenTesting: 200000,
      breachSimulation: 140000,
      vulnerabilityManagement: 105000,
      annualPenTest: 55000,
      praetorian: 350000
    },
    large: {
      attackSurfaceManagement: 275000,
      continuousPenTesting: 450000,
      breachSimulation: 300000,
      vulnerabilityManagement: 250000,
      annualPenTest: 112000,
      praetorian: 650000
    },
    enterprise: {
      attackSurfaceManagement: 600000,
      continuousPenTesting: 900000,
      breachSimulation: 575000,
      vulnerabilityManagement: 475000,
      annualPenTest: 225000,
      praetorian: 1200000
    }
  };

  useEffect(() => {
    const preset = companySizePresets[companySize];
    setCurrentCosts({
      attackSurfaceManagement: preset.attackSurfaceManagement,
      continuousPenTesting: preset.continuousPenTesting,
      breachSimulation: preset.breachSimulation,
      vulnerabilityManagement: preset.vulnerabilityManagement,
      annualPenTest: preset.annualPenTest
    });
    setPraetorianCost(preset.praetorian);
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 1000);
  }, [companySize]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  interface SecuritySolutionCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    cost: number;
    color: string;
  }

  const SecuritySolutionCard: React.FC<SecuritySolutionCardProps> = ({ icon: Icon, title, cost, color }) => (
    <div className="group relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-blue-950/60 backdrop-blur-sm rounded-xl border border-blue-800/30 p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg ${color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-semibold text-blue-100 text-base leading-tight">{title}</h3>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-white">{formatCurrency(cost)}</p>
          <p className="text-sm text-blue-300">annually</p>
        </div>
      </div>
    </div>
  );

  interface AnimatedNumberProps {
    value: number;
    prefix?: string;
    suffix?: string;
  }

  const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, prefix = '', suffix = '' }) => (
    <span className={`transition-all duration-700 ${isAnimated ? 'scale-110 text-cyan-300' : ''}`}>
      {prefix}{formatCurrency(value)}{suffix}
    </span>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Praetorian Brand Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDIxMiwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Praetorian Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl"></div>
              <Shield className="relative h-12 w-12 text-cyan-400 mr-4" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white">
                PRAETORIAN
              </h1>
              <p className="text-lg text-cyan-400 mt-1 tracking-wide font-medium">ROI CALCULATOR</p>
            </div>
          </div>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Calculate the financial impact of consolidating your security stack with 
            <span className="text-cyan-400 font-semibold"> Praetorian&apos;s unified offensive security platform</span>
          </p>
        </div>

        <div className="grid xl:grid-cols-5 gap-8">
          {/* Configuration Panel */}
          <div className="xl:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-blue-900/60 to-blue-950/80 backdrop-blur-xl rounded-2xl border border-blue-800/50 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Calculator className="h-7 w-7 mr-3 text-cyan-400" />
                Configuration
              </h2>

              {/* Company Size */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-blue-200 mb-4 uppercase tracking-wide">Company Size</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.keys(companySizePresets).map((size) => (
                    <button
                      key={size}
                      onClick={() => setCompanySize(size)}
                      className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                        companySize === size
                          ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-blue-900 border-transparent shadow-lg shadow-cyan-400/25'
                          : 'bg-blue-800/30 text-blue-200 border-blue-700/50 hover:bg-blue-700/50 hover:border-blue-600/50'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeframe */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-blue-200 mb-4 uppercase tracking-wide">
                  Analysis Timeframe: <span className="text-cyan-400 font-bold">{timeframe} years</span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={timeframe}
                    onChange={(e) => setTimeframe(parseInt(e.target.value))}
                    className="w-full h-3 bg-blue-800/50 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #00d4ff 0%, #00d4ff ${(timeframe-1)*25}%, #1e3a8a ${(timeframe-1)*25}%, #1e3a8a 100%)`
                    }}
                  />
                  <div className="flex justify-between text-xs text-blue-300 mt-2">
                    <span>1 year</span>
                    <span>5 years</span>
                  </div>
                </div>
              </div>

              {/* Current Solutions */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wide">Current Security Stack</h3>
                <div className="space-y-4">
                  {[
                    { key: 'attackSurfaceManagement', label: 'Attack Surface Management', icon: Search },
                    { key: 'continuousPenTesting', label: 'Continuous Pen Testing', icon: Target },
                    { key: 'breachSimulation', label: 'Breach & Attack Simulation', icon: Zap },
                    { key: 'vulnerabilityManagement', label: 'Vulnerability Management', icon: Shield },
                    { key: 'annualPenTest', label: 'Annual Pen Test', icon: CheckCircle }
                  ].map(({ key, label, icon: Icon }) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-blue-800/20 rounded-lg border border-blue-700/30">
                      <div className="flex items-center">
                        <Icon className="h-4 w-4 text-blue-300 mr-3" />
                        <span className="text-sm text-blue-100 font-medium">{label}</span>
                      </div>
                      <input
                        type="number"
                        value={currentCosts[key as keyof CostState]}
                        onChange={(e) => setCurrentCosts(prev => ({
                          ...prev,
                          [key]: parseInt(e.target.value) || 0
                        }))}
                        className="w-32 px-3 py-2 text-sm bg-blue-900/50 border border-blue-700/50 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Praetorian Cost */}
              <div className="mt-8 pt-6 border-t border-blue-700/50">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-lg border border-cyan-400/30">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-cyan-400 mr-3" />
                    <span className="text-sm font-semibold text-cyan-400">Praetorian Platform</span>
                  </div>
                  <input
                    type="number"
                    value={praetorianCost}
                    onChange={(e) => setPraetorianCost(parseInt(e.target.value) || 0)}
                    className="w-36 px-3 py-2 text-sm bg-blue-900/50 border border-blue-700/50 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="xl:col-span-3 space-y-8">
            {/* Current Solutions Grid */}
            <div className="bg-gradient-to-br from-blue-900/60 to-blue-950/80 backdrop-blur-xl rounded-2xl border border-blue-800/50 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-orange-400" />
                Current Security Spend
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <SecuritySolutionCard
                  icon={Search}
                  title="Attack Surface Management"
                  cost={currentCosts.attackSurfaceManagement}
                  color="bg-gradient-to-br from-orange-500 to-red-500"
                />
                <SecuritySolutionCard
                  icon={Target}
                  title="Continuous Pen Testing"
                  cost={currentCosts.continuousPenTesting}
                  color="bg-gradient-to-br from-red-500 to-pink-500"
                />
                <SecuritySolutionCard
                  icon={Zap}
                  title="Breach & Attack Simulation"
                  cost={currentCosts.breachSimulation}
                  color="bg-gradient-to-br from-yellow-500 to-orange-500"
                />
                <SecuritySolutionCard
                  icon={Shield}
                  title="Vulnerability Management"
                  cost={currentCosts.vulnerabilityManagement}
                  color="bg-gradient-to-br from-purple-500 to-blue-500"
                />
              </div>
              
              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-100">Total Annual Investment</span>
                  <span className="text-3xl font-bold text-orange-400">
                    <AnimatedNumber value={totalCurrentCosts} />
                  </span>
                </div>
              </div>
            </div>

            {/* Savings Summary */}
            <div className="bg-gradient-to-br from-blue-900/60 to-blue-950/80 backdrop-blur-xl rounded-2xl border border-cyan-400/30 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 animate-pulse"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <TrendingDown className="h-8 w-8 text-cyan-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">
                    ROI with Praetorian
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-xl border border-cyan-400/30">
                    <p className="text-sm text-blue-200 mb-2 uppercase tracking-wide">Annual Savings</p>
                    <p className="text-4xl font-bold text-cyan-400 mb-2">
                      <AnimatedNumber value={yearOneSavings} />
                    </p>
                    <p className="text-sm text-cyan-300 font-semibold">{savingsPercentage}% cost reduction</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                    <p className="text-sm text-blue-200 mb-2 uppercase tracking-wide">{timeframe}-Year Total</p>
                    <p className="text-4xl font-bold text-blue-300 mb-2">
                      <AnimatedNumber value={totalSavings} />
                    </p>
                    <p className="text-sm text-blue-400 font-semibold">Total cost avoidance</p>
                  </div>
                </div>

                <div className="bg-blue-900/30 rounded-xl p-6 mb-6 border border-blue-800/50">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200 flex items-center">
                        <Lock className="h-4 w-4 mr-2 text-orange-400" />
                        Current Fragmented Solutions
                      </span>
                      <span className="font-semibold text-white">{formatCurrency(totalCurrentCosts)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-200 flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-cyan-400" />
                        Unified Praetorian Platform
                      </span>
                      <span className="font-semibold text-cyan-400">{formatCurrency(praetorianCost)}</span>
                    </div>
                    <div className="border-t border-blue-700/50 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-white flex items-center">
                          <TrendingDown className="h-4 w-4 mr-2 text-cyan-400" />
                          Annual Savings
                        </span>
                        <span className="font-bold text-2xl text-cyan-400">
                          {formatCurrency(yearOneSavings)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-xl p-6 border border-cyan-400/20">
                  <h3 className="font-bold text-cyan-400 mb-4 flex items-center text-lg">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Unified Platform Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-100">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Complete attack surface discovery
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Continuous penetration testing
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                        Advanced breach simulation
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-300 rounded-full mr-3"></div>
                        Vulnerability management
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        Annual penetration tests included
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        Expert-led remediation guidance
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Unified dashboard & reporting
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                        24/7 security operations support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-900/80 via-blue-800/80 to-blue-900/80 backdrop-blur-xl rounded-2xl border border-blue-700/50 p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Security ROI?
              </h3>
              <p className="text-blue-100 mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
                Join industry leaders who have consolidated their security operations with Praetorian&apos;s 
                unified offensive security platform. Save costs while enhancing protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-400 hover:to-red-400 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 flex items-center justify-center">
                  Schedule Strategic Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300">
                  Contact Security Experts
                </button>
              </div>
              
              {/* Pricing Disclaimer */}
              <div className="mt-8 p-4 bg-blue-900/30 rounded-xl border border-blue-800/50 text-left max-w-4xl mx-auto">
                <h4 className="text-sm font-semibold text-blue-200 mb-2 uppercase tracking-wide">Research-Based Pricing</h4>
                <p className="text-xs text-blue-300 leading-relaxed mb-2">
                  Pricing based on extensive research from Gartner Peer Insights, G2 reviews, Reddit cybersecurity discussions, 
                  and vendor websites. Key findings:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-blue-300">
                  <div>
                    <p><strong className="text-blue-100">Attack Surface Management:</strong> $50K-800K+ (Microsoft Defender EASM ~$2/asset/month)</p>
                    <p><strong className="text-blue-100">Continuous Pen Testing:</strong> $120K-1.2M+ (Cobalt starts ~$4K/month baseline)</p>
                    <p><strong className="text-blue-100">Breach Simulation:</strong> $80K-750K+ (AttackIQ/SafeBreach ~$100K+ entry)</p>
                  </div>
                  <div>
                    <p><strong className="text-blue-100">Vulnerability Management:</strong> $60K-600K+ (Tenable/Qualys $2-4/asset/month)</p>
                    <p><strong className="text-blue-100">Annual Pen Testing:</strong> $35K-300K+ (Many enterprises run 2-3 tests/year)</p>
                  </div>
                </div>
                <p className="text-xs text-blue-400 mt-2">
                  Actual costs vary significantly based on asset count, scope, geographic location, and contract terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PraetorianROICalculator;