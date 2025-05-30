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

  return (
    <>
      {/* Google Fonts - Inter (Praetorian's likely font choice) */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
     <div className="praetorian-container">
        
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          inset: '0',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-200px',
            left: '-200px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
        </div>

        <div style={{ position: 'relative', zIndex: 10, padding: '60px 24px' }}>
          
          {/* Authentic Praetorian Header */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            
            {/* Praetorian Logo Section */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '32px'
            }}>
              
              {/* Shield Icon (Praetorian's brand element) */}
              <div style={{ 
                position: 'relative',
                marginRight: '20px'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)'
                }} />
                <Shield style={{ 
                  position: 'relative',
                  height: '48px', 
                  width: '48px', 
                  color: '#00D4FF'
                }} />
              </div>
              
              {/* Praetorian Brand Text */}
              <div>
                <h1 style={{
                  fontSize: '4rem',
                  fontWeight: '800',
                  color: 'white',
                  margin: '0',
                  letterSpacing: '-0.02em',
                  lineHeight: '1'
                }}>
                  PRAETORIAN
                </h1>
                <div style={{
                  fontSize: '1rem',
                  color: '#00D4FF',
                  marginTop: '4px',
                  letterSpacing: '0.2em',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  ROI Calculator
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p style={{
              fontSize: '1.375rem',
              color: '#e2e8f0',
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '400'
            }}>
              Calculate the financial impact of consolidating your security stack with{' '}
              <span style={{ color: '#00D4FF', fontWeight: '600' }}>
                Praetorian's unified offensive security platform
              </span>
            </p>
          </div>

          {/* Main Content Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(400px, 2fr) 3fr',
            gap: '40px',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            
            {/* Configuration Panel */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '40px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
            }}>
              
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Calculator style={{ marginRight: '12px', color: '#00D4FF' }} />
                Configuration
              </h2>

              {/* Company Size Selection */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#cbd5e1',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Company Size
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '8px'
                }}>
                  {Object.keys(companySizePresets).map((size) => (
                    <button
                      key={size}
                      onClick={() => setCompanySize(size)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'capitalize',
                        ...(companySize === size ? {
                          background: 'linear-gradient(135deg, #00D4FF 0%, #0ea5e9 100%)',
                          color: '#000',
                          boxShadow: '0 8px 25px rgba(0, 212, 255, 0.3)'
                        } : {
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#cbd5e1',
                          border: '1px solid rgba(255, 255, 255, 0.1)'
                        })
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeframe Slider */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#cbd5e1',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Analysis Timeframe: <span style={{ color: '#00D4FF', fontWeight: 'bold' }}>{timeframe} years</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={timeframe}
                  onChange={(e) => setTimeframe(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    outline: 'none',
                    cursor: 'pointer',
                    background: `linear-gradient(to right, #00D4FF 0%, #00D4FF ${(timeframe-1)*25}%, rgba(255,255,255,0.2) ${(timeframe-1)*25}%, rgba(255,255,255,0.2) 100%)`,
                    WebkitAppearance: 'none',
                    marginBottom: '8px'
                  }}
                />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.75rem',
                  color: '#64748b',
                  marginTop: '8px'
                }}>
                  <span>1 year</span>
                  <span>5 years</span>
                </div>
              </div>

              {/* Current Security Stack */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Current Security Stack
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { key: 'attackSurfaceManagement', label: 'Attack Surface Management', icon: Search },
                    { key: 'continuousPenTesting', label: 'Continuous Pen Testing', icon: Target },
                    { key: 'breachSimulation', label: 'Breach & Attack Simulation', icon: Zap },
                    { key: 'vulnerabilityManagement', label: 'Vulnerability Management', icon: Shield },
                    { key: 'annualPenTest', label: 'Annual Pen Test', icon: CheckCircle }
                  ].map(({ key, label, icon: Icon }) => (
                    <div key={key} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Icon style={{ width: '16px', height: '16px', color: '#64748b', marginRight: '12px' }} />
                        <span style={{ fontSize: '0.875rem', color: '#e2e8f0', fontWeight: '500' }}>{label}</span>
                      </div>
                      <input
                        type="number"
                        value={currentCosts[key as keyof CostState]}
                        onChange={(e) => setCurrentCosts(prev => ({
                          ...prev,
                          [key]: parseInt(e.target.value) || 0
                        }))}
                        style={{
                          width: '120px',
                          padding: '8px 12px',
                          fontSize: '0.875rem',
                          background: 'rgba(0, 0, 0, 0.3)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          color: 'white',
                          outline: 'none',
                          textAlign: 'right'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Praetorian Platform Cost */}
              <div style={{
                padding: '20px',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(0, 212, 255, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Shield style={{ width: '20px', height: '20px', color: '#00D4FF', marginRight: '12px' }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#00D4FF' }}>
                      Praetorian Platform
                    </span>
                  </div>
                  <input
                    type="number"
                    value={praetorianCost}
                    onChange={(e) => setPraetorianCost(parseInt(e.target.value) || 0)}
                    style={{
                      width: '140px',
                      padding: '8px 12px',
                      fontSize: '0.875rem',
                      background: 'rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(0, 212, 255, 0.5)',
                      borderRadius: '8px',
                      color: 'white',
                      outline: 'none',
                      textAlign: 'right'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Current Security Spend */}
              <div style={{
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '40px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '32px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Eye style={{ marginRight: '12px', color: '#f97316' }} />
                  Current Security Spend
                </h2>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px',
                  marginBottom: '32px'
                }}>
                  {[
                    { key: 'attackSurfaceManagement', title: 'Attack Surface Management', icon: Search, color: '#ef4444' },
                    { key: 'continuousPenTesting', title: 'Continuous Pen Testing', icon: Target, color: '#f97316' },
                    { key: 'breachSimulation', title: 'Breach & Attack Simulation', icon: Zap, color: '#eab308' },
                    { key: 'vulnerabilityManagement', title: 'Vulnerability Management', icon: Shield, color: '#8b5cf6' }
                  ].map(({ key, title, icon: Icon, color }) => (
                    <div key={key} style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '24px',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{
                          padding: '12px',
                          borderRadius: '12px',
                          background: `${color}20`,
                          marginRight: '16px'
                        }}>
                          <Icon style={{ width: '20px', height: '20px', color }} />
                        </div>
                        <h3 style={{
                          fontWeight: '600',
                          color: '#e2e8f0',
                          fontSize: '0.875rem',
                          lineHeight: '1.3',
                          margin: '0'
                        }}>
                          {title}
                        </h3>
                      </div>
                      <div>
                        <p style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: 'white',
                          margin: '0 0 4px 0'
                        }}>
                          {formatCurrency(currentCosts[key as keyof CostState])}
                        </p>
                        <p style={{
                          fontSize: '0.75rem',
                          color: '#64748b',
                          margin: '0'
                        }}>
                          annually
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: '24px',
                  background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)',
                  borderRadius: '16px',
                  border: '1px solid rgba(249, 115, 22, 0.2)'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '1.125rem',
                      fontWeight: '600',
                      color: '#e2e8f0'
                    }}>
                      Total Annual Investment
                    </span>
                    <span style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: '#f97316'
                    }}>
                      {formatCurrency(totalCurrentCosts)}
                    </span>
                  </div>
                </div>
              </div>

              {/* ROI with Praetorian */}
              <div style={{
                background: 'linear-gradient(145deg, rgba(0, 212, 255, 0.08) 0%, rgba(59, 130, 246, 0.05) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                padding: '40px',
                boxShadow: '0 25px 50px -12px rgba(0, 212, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                
                {/* Background glow effect */}
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%)',
                  pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '32px'
                  }}>
                    <TrendingDown style={{ width: '32px', height: '32px', color: '#00D4FF', marginRight: '16px' }} />
                    <h2 style={{
                      fontSize: '2rem',
                      fontWeight: '800',
                      color: 'white',
                      margin: '0'
                    }}>
                      ROI with Praetorian
                    </h2>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '24px',
                    marginBottom: '32px'
                  }}>
                    <div style={{
                      textAlign: 'center',
                      padding: '32px',
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                      borderRadius: '20px',
                      border: '1px solid rgba(0, 212, 255, 0.3)'
                    }}>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#cbd5e1',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: '600'
                      }}>
                        Annual Savings
                      </p>
                      <p style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: '#00D4FF',
                        marginBottom: '8px',
                        lineHeight: '1'
                      }}>
                        {formatCurrency(yearOneSavings)}
                      </p>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#22d3ee',
                        fontWeight: '600'
                      }}>
                        {savingsPercentage}% cost reduction
                      </p>
                    </div>

                    <div style={{
                      textAlign: 'center',
                      padding: '32px',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                      borderRadius: '20px',
                      border: '1px solid rgba(59, 130, 246, 0.3)'
                    }}>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#cbd5e1',
                        marginBottom: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: '600'
                      }}>
                        {timeframe}-Year Total
                      </p>
                      <p style={{
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        color: '#60a5fa',
                        marginBottom: '8px',
                        lineHeight: '1'
                      }}>
                        {formatCurrency(totalSavings)}
                      </p>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#93c5fd',
                        fontWeight: '600'
                      }}>
                        Total cost avoidance
                      </p>
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.2)',
                    borderRadius: '16px',
                    padding: '24px',
                    marginBottom: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          color: '#cbd5e1',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Lock style={{ width: '16px', height: '16px', marginRight: '8px', color: '#f97316' }} />
                          Current Fragmented Solutions
                        </span>
                        <span style={{ fontWeight: '600', color: 'white' }}>
                          {formatCurrency(totalCurrentCosts)}
                        </span>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <span style={{
                          color: '#cbd5e1',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Shield style={{ width: '16px', height: '16px', marginRight: '8px', color: '#00D4FF' }} />
                          Unified Praetorian Platform
                        </span>
                        <span style={{ fontWeight: '600', color: '#00D4FF' }}>
                          {formatCurrency(praetorianCost)}
                        </span>
                      </div>
                      <div style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        paddingTop: '16px'
                      }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <span style={{
                            fontWeight: '700',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center'
                          }}>
                            <TrendingDown style={{ width: '16px', height: '16px', marginRight: '8px', color: '#00D4FF' }} />
                            Annual Savings
                          </span>
                          <span style={{
                            fontWeight: '800',
                            fontSize: '1.5rem',
                            color: '#00D4FF'
                          }}>
                            {formatCurrency(yearOneSavings)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Unified Platform Benefits */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '1px solid rgba(0, 212, 255, 0.2)'
                  }}>
                    <h3 style={{
                      fontWeight: '700',
                      color: '#00D4FF',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '1.125rem'
                    }}>
                      <CheckCircle style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                      Unified Platform Benefits
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '16px',
                      fontSize: '0.875rem',
                      color: '#e2e8f0'
                    }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#00D4FF',
                            borderRadius: '50%',
                            marginRight: '12px'
                          }} />
                          Complete attack surface discovery
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#60a5fa',
                            borderRadius: '50%',
                            marginRight: '12px'
                          }} />
                          Continuous penetration testing
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#22d3ee',
                            borderRadius: '50%',
                            marginRight: '12px'
                          }} />
                          Advanced breach simulation
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#93c5fd',
                            borderRadius: '50%',
                            marginRight: '12px'
                          }} />
                          Vulnerability management
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#f97316',
                            borderRadius: '50%',
                            marginRight: '12px'
                          }} />
                          Annual penetration tests included
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#06b6d4',
                            borderRadius: '50%',
                            marginRight: '12px'
                          }} />
                          Expert-led remediation guidance
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#3b82f6',
                            borderRadius: '50%',
                            marginRight: '12px'
                          }} />
                          Unified dashboard & reporting
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#0ea5e9',
                            borderRadius: '50%',
                            marginRight: '12px'
                          }} />
                          24/7 security operations support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div style={{
            marginTop: '80px',
            maxWidth: '1200px',
            margin: '80px auto 0'
          }}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '60px',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              
              {/* Background effect */}
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)',
                pointerEvents: 'none'
              }} />

              <div style={{ position: 'relative', zIndex: 10 }}>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'white',
                  marginBottom: '24px',
                  lineHeight: '1.2'
                }}>
                  Ready to Transform Your Security ROI?
                </h3>
                <p style={{
                  color: '#cbd5e1',
                  marginBottom: '40px',
                  fontSize: '1.25rem',
                  maxWidth: '800px',
                  margin: '0 auto 40px',
                  lineHeight: '1.6'
                }}>
                  Join industry leaders who have consolidated their security operations with Praetorian's 
                  unified offensive security platform. Save costs while enhancing protection.
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '16px',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    border: 'none',
                    fontWeight: '700',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(249, 115, 22, 0.3)',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Schedule Strategic Demo
                    <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
                  </button>
                  <button style={{
                    border: '2px solid #00D4FF',
                    color: '#00D4FF',
                    background: 'transparent',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontWeight: '700',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    Contact Security Experts
                  </button>
                </div>
                
                {/* Research Attribution */}
                <div style={{
                  marginTop: '40px',
                  padding: '24px',
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'left'
                }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    color: '#cbd5e1',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Research-Based Pricing
                  </h4>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    lineHeight: '1.5',
                    marginBottom: '16px'
                  }}>
                    Pricing based on extensive research from Gartner Peer Insights, G2 reviews, Reddit cybersecurity discussions, and vendor websites. Key findings:
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px',
                    fontSize: '0.75rem',
                    color: '#94a3b8'
                  }}>
                    <div>
                      <p style={{ margin: '0 0 8px 0' }}>
                        <strong style={{ color: '#e2e8f0' }}>Attack Surface Management:</strong> $50K-800K+ (Microsoft Defender EASM ~$2/asset/month)
                      </p>
                      <p style={{ margin: '0 0 8px 0' }}>
                        <strong style={{ color: '#e2e8f0' }}>Continuous Pen Testing:</strong> $120K-1.2M+ (Cobalt starts ~$4K/month baseline)
                      </p>
                      <p style={{ margin: '0' }}>
                        <strong style={{ color: '#e2e8f0' }}>Breach Simulation:</strong> $80K-750K+ (AttackIQ/SafeBreach ~$100K+ entry)
                      </p>
                    </div>
                    <div>
                      <p style={{ margin: '0 0 8px 0' }}>
                        <strong style={{ color: '#e2e8f0' }}>Vulnerability Management:</strong> $60K-600K+ (Tenable/Qualys $2-4/asset/month)
                      </p>
                      <p style={{ margin: '0' }}>
                        <strong style={{ color: '#e2e8f0' }}>Annual Pen Testing:</strong> $35K-300K+ (Many enterprises run 2-3 tests/year)
                      </p>
                    </div>
                  </div>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#64748b',
                    marginTop: '12px',
                    margin: '12px 0 0 0'
                  }}>
                    Actual costs vary significantly based on asset count, scope, geographic location, and contract terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PraetorianROICalculator;