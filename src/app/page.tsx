'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  Info, 
  DollarSign, 
  Calendar, 
  Users,
  CheckCircle,
  AlertCircle,
  PiggyBank,
  Building2,
  Coins,
  BarChart3
} from 'lucide-react'

// Tax brackets for 2025-2026 (IRS adjusted for inflation)
const TAX_BRACKETS = {
  single: [
    { min: 0, max: 48350, rate: 0 },
    { min: 48350, max: 533400, rate: 0.15 },
    { min: 533400, max: Infinity, rate: 0.20 }
  ],
  married_joint: [
    { min: 0, max: 96700, rate: 0 },
    { min: 96700, max: 600050, rate: 0.15 },
    { min: 600050, max: Infinity, rate: 0.20 }
  ],
  married_separate: [
    { min: 0, max: 48350, rate: 0 },
    { min: 48350, max: 300025, rate: 0.15 },
    { min: 300025, max: Infinity, rate: 0.20 }
  ],
  head_household: [
    { min: 0, max: 64750, rate: 0 },
    { min: 64750, max: 566700, rate: 0.15 },
    { min: 566700, max: Infinity, rate: 0.20 }
  ]
}

const ORDINARY_INCOME_BRACKETS = {
  single: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ],
  married_joint: [
    { min: 0, max: 23200, rate: 0.10 },
    { min: 23200, max: 94300, rate: 0.12 },
    { min: 94300, max: 201050, rate: 0.22 },
    { min: 201050, max: 383900, rate: 0.24 },
    { min: 383900, max: 487450, rate: 0.32 },
    { min: 487450, max: 731200, rate: 0.35 },
    { min: 731200, max: Infinity, rate: 0.37 }
  ],
  married_separate: [
    { min: 0, max: 11600, rate: 0.10 },
    { min: 11600, max: 47150, rate: 0.12 },
    { min: 47150, max: 100525, rate: 0.22 },
    { min: 100525, max: 191950, rate: 0.24 },
    { min: 191950, max: 243725, rate: 0.32 },
    { min: 243725, max: 365600, rate: 0.35 },
    { min: 365600, max: Infinity, rate: 0.37 }
  ],
  head_household: [
    { min: 0, max: 16550, rate: 0.10 },
    { min: 16550, max: 63100, rate: 0.12 },
    { min: 63100, max: 100500, rate: 0.22 },
    { min: 100500, max: 191950, rate: 0.24 },
    { min: 191950, max: 243700, rate: 0.32 },
    { min: 243700, max: 609350, rate: 0.35 },
    { min: 609350, max: Infinity, rate: 0.37 }
  ]
}

// FAQ Schema Markup
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is capital gains tax?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Capital gains tax is a tax on the profit you make from selling a capital asset such as stocks, bonds, real estate, or cryptocurrency. The tax is calculated on the difference between your purchase price (cost basis) and the selling price."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between short-term and long-term capital gains tax?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short-term capital gains (assets held for one year or less) are taxed at ordinary income tax rates (10%-37%). Long-term capital gains (assets held more than one year) are taxed at preferential rates of 0%, 15%, or 20% depending on your taxable income and filing status."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate capital gains tax?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To calculate capital gains tax: 1) Determine your cost basis (purchase price plus fees). 2) Calculate your gain (selling price minus cost basis). 3) Determine if it's short-term or long-term based on holding period. 4) Apply the appropriate tax rate based on your income and filing status."
      }
    },
    {
      "@type": "Question",
      "name": "What are the capital gains tax rates for 2025-2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For 2025-2026, long-term capital gains tax rates are 0%, 15%, and 20%. The 0% rate applies to taxable income up to $48,350 (single) or $96,700 (married filing jointly). The 15% rate applies up to $533,400 (single) or $600,050 (married filing jointly). Above these thresholds, the 20% rate applies."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to pay capital gains tax on cryptocurrency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the IRS treats cryptocurrency as property for tax purposes. When you sell, trade, or use cryptocurrency, you may owe capital gains tax on any profit. The same short-term and long-term rules apply based on how long you held the crypto."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce my capital gains tax?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strategies to reduce capital gains tax include: holding assets for more than one year, tax-loss harvesting, using tax-advantaged accounts (401k, IRA), gifting appreciated assets, utilizing the primary residence exclusion for real estate, and strategic timing of sales."
      }
    },
    {
      "@type": "Question",
      "name": "What is the capital gains tax exemption for home sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you sell your primary residence, you may exclude up to $250,000 ($500,000 for married couples filing jointly) of capital gains from taxation, provided you owned and lived in the home for at least 2 of the last 5 years before selling."
      }
    },
    {
      "@type": "Question",
      "name": "Do I pay capital gains tax if I have losses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Capital losses can offset capital gains dollar for dollar. If your losses exceed your gains, you can deduct up to $3,000 ($1,500 if married filing separately) against ordinary income annually. Excess losses can be carried forward to future years."
      }
    },
    {
      "@type": "Question",
      "name": "When do I need to pay capital gains tax?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Capital gains tax is due when you file your annual tax return by April 15th (or the extended deadline). For significant gains, you may need to make estimated quarterly tax payments to avoid underpayment penalties."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a difference in capital gains tax for stocks vs real estate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The same capital gains tax rates apply to both stocks and real estate. However, real estate has special provisions like the primary residence exclusion ($250,000/$500,000) and depreciation recapture (25% rate) for investment properties. Real estate also offers 1031 exchanges to defer gains."
      }
    }
  ]
}

export default function Home() {
  const [purchasePrice, setPurchasePrice] = useState<string>('')
  const [salePrice, setSalePrice] = useState<string>('')
  const [purchaseDate, setPurchaseDate] = useState<string>('')
  const [saleDate, setSaleDate] = useState<string>('')
  const [filingStatus, setFilingStatus] = useState<string>('single')
  const [annualIncome, setAnnualIncome] = useState<string>('')
  const [calculated, setCalculated] = useState(false)

  const calculateHoldingPeriod = (purchase: string, sale: string): number => {
    const purchaseDate = new Date(purchase)
    const saleDate = new Date(sale)
    const diffTime = Math.abs(saleDate.getTime() - purchaseDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const isLongTerm = (days: number): boolean => days > 365

  const calculateTax = useMemo(() => {
    if (!purchasePrice || !salePrice || !purchaseDate || !saleDate || !annualIncome) {
      return null
    }

    const purchase = parseFloat(purchasePrice)
    const sale = parseFloat(salePrice)
    const income = parseFloat(annualIncome)
    const gain = sale - purchase
    const holdingDays = calculateHoldingPeriod(purchaseDate, saleDate)
    const longTerm = isLongTerm(holdingDays)

    if (gain <= 0) {
      return {
        gain: gain,
        holdingDays,
        isLongTerm: longTerm,
        taxRate: 0,
        taxAmount: 0,
        netProceeds: sale,
        income
      }
    }

    let taxRate = 0
    let taxAmount = 0

    if (longTerm) {
      const brackets = TAX_BRACKETS[filingStatus as keyof typeof TAX_BRACKETS]
      const totalIncome = income + gain
      
      for (const bracket of brackets) {
        if (totalIncome > bracket.min) {
          if (totalIncome <= bracket.max) {
            taxRate = bracket.rate
            break
          }
          taxRate = bracket.rate
        }
      }
      taxAmount = gain * taxRate
    } else {
      // Short-term: taxed at ordinary income rates
      const brackets = ORDINARY_INCOME_BRACKETS[filingStatus as keyof typeof ORDINARY_INCOME_BRACKETS]
      const totalIncome = income + gain
      let remainingGain = gain
      let currentIncome = income
      taxAmount = 0

      for (const bracket of brackets) {
        if (totalIncome > bracket.min) {
          const taxableInBracket = Math.min(totalIncome, bracket.max) - Math.max(currentIncome, bracket.min)
          if (taxableInBracket > 0 && remainingGain > 0) {
            const gainTaxable = Math.min(taxableInBracket, remainingGain)
            taxAmount += gainTaxable * bracket.rate
            remainingGain -= gainTaxable
          }
          currentIncome = bracket.max
        }
        if (remainingGain <= 0) break
      }
      taxRate = taxAmount / gain
    }

    return {
      gain,
      holdingDays,
      isLongTerm: longTerm,
      taxRate,
      taxAmount,
      netProceeds: sale - taxAmount,
      income
    }
  }, [purchasePrice, salePrice, purchaseDate, saleDate, filingStatus, annualIncome])

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value)
  }

  const formatPercent = (value: number): string => {
    return `${(value * 100).toFixed(2)}%`
  }

  const handleCalculate = () => {
    setCalculated(true)
  }

  const resetCalculator = () => {
    setPurchasePrice('')
    setSalePrice('')
    setPurchaseDate('')
    setSaleDate('')
    setFilingStatus('single')
    setAnnualIncome('')
    setCalculated(false)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Capital Gains Tax Calculator</h1>
                  <p className="text-xs text-slate-500">USA 2025-2026</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
                <a href="#calculator" className="hover:text-blue-600 transition-colors">Calculator</a>
                <a href="#rates" className="hover:text-blue-600 transition-colors">Tax Rates</a>
                <a href="#tips" className="hover:text-blue-600 transition-colors">Tips</a>
                <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Capital Gains Tax Calculator USA 2025-2026
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Free online calculator to estimate your capital gains tax on stocks, crypto, real estate, and other investments. 
              Calculate short-term and long-term capital gains tax rates accurately.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                2025-2026 Tax Rates
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                All Filing Statuses
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free to Use
              </Badge>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Introduction */}
          <section className="mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  What is Capital Gains Tax?
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
                  <p>
                    Capital gains tax is a federal tax imposed on the profit you earn from selling a capital asset. 
                    When you sell stocks, bonds, cryptocurrency, real estate, or other investments for more than you paid for them, 
                    the difference between your selling price and purchase price is considered a capital gain and is subject to taxation.
                  </p>
                  <p>
                    Understanding how capital gains tax works is essential for every investor. The IRS distinguishes between 
                    short-term and long-term capital gains, with significantly different tax rates applied to each. Short-term gains 
                    (assets held for one year or less) are taxed at your ordinary income tax rate, which can be as high as 37%. 
                    Long-term gains (assets held for more than one year) benefit from preferential tax rates of 0%, 15%, or 20%, 
                    depending on your taxable income and filing status.
                  </p>
                  <p>
                    For the 2025-2026 tax year, these rates remain unchanged, but the income thresholds for each bracket have been 
                    adjusted for inflation. Whether you&apos;re trading stocks, investing in cryptocurrency, or selling real estate, 
                    our capital gains tax calculator helps you estimate your tax liability and plan your financial decisions accordingly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Calculator Section */}
          <section id="calculator" className="mb-16 scroll-mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Calculate Your Capital Gains Tax
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Enter your investment details below to calculate your estimated capital gains tax for the 2025-2026 tax year.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Input */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-slate-50 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    Investment Details
                  </CardTitle>
                  <CardDescription>
                    Enter your purchase and sale information
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="purchasePrice" className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-slate-400" />
                        Purchase Price
                      </Label>
                      <Input
                        id="purchasePrice"
                        type="number"
                        placeholder="e.g., 10000"
                        value={purchasePrice}
                        onChange={(e) => setPurchasePrice(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salePrice" className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-slate-400" />
                        Sale Price
                      </Label>
                      <Input
                        id="salePrice"
                        type="number"
                        placeholder="e.g., 15000"
                        value={salePrice}
                        onChange={(e) => setSalePrice(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="purchaseDate" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        Purchase Date
                      </Label>
                      <Input
                        id="purchaseDate"
                        type="date"
                        value={purchaseDate}
                        onChange={(e) => setPurchaseDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="saleDate" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        Sale Date
                      </Label>
                      <Input
                        id="saleDate"
                        type="date"
                        value={saleDate}
                        onChange={(e) => setSaleDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="filingStatus" className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-slate-400" />
                        Filing Status
                      </Label>
                      <Select value={filingStatus} onValueChange={setFilingStatus}>
                        <SelectTrigger id="filingStatus">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married_joint">Married Filing Jointly</SelectItem>
                          <SelectItem value="married_separate">Married Filing Separately</SelectItem>
                          <SelectItem value="head_household">Head of Household</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="annualIncome" className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-slate-400" />
                        Annual Taxable Income
                      </Label>
                      <Input
                        id="annualIncome"
                        type="number"
                        placeholder="e.g., 75000"
                        value={annualIncome}
                        onChange={(e) => setAnnualIncome(e.target.value)}
                        className="text-lg"
                      />
                      <p className="text-xs text-slate-500">Excluding this capital gain</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={handleCalculate} 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg"
                    >
                      Calculate Tax
                    </Button>
                    <Button 
                      onClick={resetCalculator} 
                      variant="outline"
                      className="h-12"
                    >
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Calculator Results */}
              <Card className={`border-0 shadow-lg ${calculated && calculateTax ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader className="bg-slate-50 border-b">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Calculation Results
                  </CardTitle>
                  <CardDescription>
                    Your estimated capital gains tax
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  {calculated && calculateTax ? (
                    <div className="space-y-6">
                      {/* Gain/Loss Summary */}
                      <div className={`p-4 rounded-lg ${calculateTax.gain > 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {calculateTax.gain > 0 ? (
                              <TrendingUp className="h-5 w-5 text-green-600" />
                            ) : (
                              <TrendingDown className="h-5 w-5 text-red-600" />
                            )}
                            <span className={`font-medium ${calculateTax.gain > 0 ? 'text-green-800' : 'text-red-800'}`}>
                              {calculateTax.gain > 0 ? 'Capital Gain' : 'Capital Loss'}
                            </span>
                          </div>
                          <span className={`text-2xl font-bold ${calculateTax.gain > 0 ? 'text-green-700' : 'text-red-700'}`}>
                            {formatCurrency(Math.abs(calculateTax.gain))}
                          </span>
                        </div>
                      </div>

                      {/* Holding Period */}
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div>
                          <p className="text-sm text-slate-500">Holding Period</p>
                          <p className="font-semibold text-slate-800">{calculateTax.holdingDays} days</p>
                        </div>
                        <Badge 
                          variant={calculateTax.isLongTerm ? "default" : "secondary"}
                          className={calculateTax.isLongTerm ? "bg-green-600 hover:bg-green-700" : "bg-amber-500 hover:bg-amber-600"}
                        >
                          {calculateTax.isLongTerm ? 'Long-Term' : 'Short-Term'}
                        </Badge>
                      </div>

                      {calculateTax.gain > 0 && (
                        <>
                          {/* Tax Rate */}
                          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                            <div>
                              <p className="text-sm text-blue-600">Effective Tax Rate</p>
                              <p className="text-2xl font-bold text-blue-700">{formatPercent(calculateTax.taxRate)}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-blue-600">Gain Type</p>
                              <p className="font-semibold text-blue-800">
                                {calculateTax.isLongTerm ? 'Long-Term Capital Gain' : 'Ordinary Income'}
                              </p>
                            </div>
                          </div>

                          {/* Tax Amount */}
                          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
                            <p className="text-blue-100 mb-2">Estimated Tax Owed</p>
                            <p className="text-4xl font-bold">{formatCurrency(calculateTax.taxAmount)}</p>
                          </div>

                          {/* Net Proceeds */}
                          <div className="flex items-center justify-between p-4 border-2 border-slate-200 rounded-lg">
                            <span className="font-medium text-slate-700">Net Proceeds After Tax</span>
                            <span className="text-xl font-bold text-slate-900">{formatCurrency(calculateTax.netProceeds)}</span>
                          </div>
                        </>
                      )}

                      {calculateTax.gain <= 0 && (
                        <div className="p-4 bg-slate-100 rounded-lg text-center">
                          <AlertCircle className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-600">
                            No capital gains tax is owed on a capital loss. You may be able to use this loss to offset other gains.
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center py-12">
                      <div className="text-center">
                        <Calculator className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                        <p className="text-slate-500 text-lg">Enter your investment details and click Calculate</p>
                        <p className="text-slate-400 text-sm mt-2">Results will appear here</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How Capital Gains Tax Works */}
          <section className="mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  How Capital Gains Tax Works
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
                  <p>
                    Capital gains tax is triggered when you sell a capital asset for a profit. The IRS defines capital assets broadly 
                    to include stocks, bonds, mutual funds, cryptocurrency, real estate (except your primary residence under certain 
                    conditions), collectibles, and other investment property. The tax is calculated on the difference between your 
                    adjusted basis (typically what you paid for the asset plus any improvements or fees) and the amount you received 
                    when you sold it.
                  </p>
                  <p>
                    The amount of tax you owe depends on several factors: how long you held the asset, your taxable income, your 
                    filing status, and the type of asset. For most assets, the holding period determines whether your gain is taxed 
                    at preferential long-term rates or higher short-term rates. Assets held for more than one year qualify for 
                    long-term capital gains treatment, with rates of 0%, 15%, or 20% based on your income level.
                  </p>
                  <p>
                    It&apos;s important to understand that capital gains are taxed differently from ordinary income. While wages, 
                    salaries, and interest income are taxed at progressive rates up to 37%, long-term capital gains benefit from 
                    lower maximum rates. This preferential treatment is designed to encourage long-term investment. However, 
                    short-term gains are taxed at the same rates as ordinary income, which can significantly impact your tax liability 
                    if you frequently trade investments.
                  </p>
                  <p>
                    The IRS requires you to report capital gains and losses on your tax return using Form 8949 and Schedule D. 
                    You must report each sale, including the purchase date, sale date, proceeds, cost basis, and resulting gain or loss. 
                    Proper record-keeping is essential, as the IRS can challenge your calculations if you cannot substantiate your 
                    cost basis or holding period.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Short-term vs Long-term */}
          <section className="mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  Short-Term vs Long-Term Capital Gains Tax
                </h2>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-amber-500 p-2 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800">Short-Term Capital Gains</h3>
                    </div>
                    <ul className="space-y-3 text-amber-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Assets held for <strong>one year or less</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Taxed at <strong>ordinary income tax rates</strong> (10%-37%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>Applies to frequent traders and day traders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>No preferential tax treatment</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-600 p-2 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-green-800">Long-Term Capital Gains</h3>
                    </div>
                    <ul className="space-y-3 text-green-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Assets held for <strong>more than one year</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Taxed at preferential rates: <strong>0%, 15%, or 20%</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Rewards patient, long-term investors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Significant tax savings potential</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="prose prose-slate max-w-none text-slate-700">
                  <p>
                    The difference between short-term and long-term capital gains treatment can have a substantial impact on your 
                    tax liability. For example, if you&apos;re in the 35% ordinary income tax bracket, a $10,000 short-term gain would 
                    result in $3,500 in taxes. However, if that same gain were long-term, you might pay only 15%, or $1,500 - a savings 
                    of $2,000. This is why many financial advisors recommend holding investments for at least one year when possible.
                  </p>
                  <p>
                    The holding period begins the day after you acquire the asset and ends on the day you sell it. For stocks and 
                    securities purchased through a broker, the trade date (not the settlement date) determines when the holding 
                    period begins and ends. This distinction is important for timing sales around the one-year mark.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tax Rates Table */}
          <section id="rates" className="mb-16 scroll-mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                2025-2026 Capital Gains Tax Rates
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Long-term capital gains tax brackets by filing status for the 2025-2026 tax year
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Single */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Single Filers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-slate-700">Tax Rate</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Taxable Income</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-green-50">
                        <td className="p-4 font-bold text-green-700">0%</td>
                        <td className="p-4 text-slate-700">$0 - $48,350</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-blue-700">15%</td>
                        <td className="p-4 text-slate-700">$48,351 - $533,400</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-4 font-bold text-red-700">20%</td>
                        <td className="p-4 text-slate-700">Over $533,400</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Married Filing Jointly */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Married Filing Jointly
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-slate-700">Tax Rate</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Taxable Income</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-green-50">
                        <td className="p-4 font-bold text-green-700">0%</td>
                        <td className="p-4 text-slate-700">$0 - $96,700</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-blue-700">15%</td>
                        <td className="p-4 text-slate-700">$96,701 - $600,050</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-4 font-bold text-red-700">20%</td>
                        <td className="p-4 text-slate-700">Over $600,050</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Married Filing Separately */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Married Filing Separately
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-slate-700">Tax Rate</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Taxable Income</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-green-50">
                        <td className="p-4 font-bold text-green-700">0%</td>
                        <td className="p-4 text-slate-700">$0 - $48,350</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-blue-700">15%</td>
                        <td className="p-4 text-slate-700">$48,351 - $300,025</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-4 font-bold text-red-700">20%</td>
                        <td className="p-4 text-slate-700">Over $300,025</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Head of Household */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Head of Household
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left p-4 font-semibold text-slate-700">Tax Rate</th>
                        <th className="text-left p-4 font-semibold text-slate-700">Taxable Income</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="bg-green-50">
                        <td className="p-4 font-bold text-green-700">0%</td>
                        <td className="p-4 text-slate-700">$0 - $64,750</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-blue-700">15%</td>
                        <td className="p-4 text-slate-700">$64,751 - $566,700</td>
                      </tr>
                      <tr className="bg-red-50">
                        <td className="p-4 font-bold text-red-700">20%</td>
                        <td className="p-4 text-slate-700">Over $566,700</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> These thresholds apply to your total taxable income, not just your capital gains. 
                  Your capital gains are added to your ordinary income to determine which bracket applies. 
                  An additional 3.8% Net Investment Income Tax may apply if your modified adjusted gross income exceeds 
                  $200,000 (single) or $250,000 (married filing jointly).
                </p>
              </div>
            </div>
          </section>

          {/* How to Use Calculator */}
          <section className="mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                  How to Use This Capital Gains Tax Calculator
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Enter Purchase Details</h3>
                        <p className="text-slate-600">Input the original purchase price of your asset and the date you acquired it. This establishes your cost basis.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Enter Sale Information</h3>
                        <p className="text-slate-600">Provide the selling price and sale date. The calculator determines your gain or loss and holding period automatically.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Select Filing Status</h3>
                        <p className="text-slate-600">Choose your tax filing status (Single, Married Filing Jointly, etc.) to apply the correct tax brackets.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Enter Annual Income</h3>
                        <p className="text-slate-600">Input your taxable income excluding this capital gain. This helps determine your applicable tax rate.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-4">What the Calculator Shows</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Your total capital gain or loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Exact holding period in days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Classification as short-term or long-term</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Applicable tax rate based on your income</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Estimated tax amount owed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">Net proceeds after tax</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Tips to Minimize Capital Gains Tax */}
          <section id="tips" className="mb-16 scroll-mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Tips to Minimize Your Capital Gains Tax
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Legal strategies to reduce your tax liability and keep more of your investment profits
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Hold for More Than One Year</h3>
                  <p className="text-slate-600">
                    The simplest strategy is to hold investments for over 12 months. This qualifies you for preferential long-term 
                    capital gains rates, potentially saving you 15-20% compared to short-term rates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <TrendingDown className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Tax-Loss Harvesting</h3>
                  <p className="text-slate-600">
                    Sell losing investments to offset gains. You can use capital losses to offset capital gains dollar-for-dollar, 
                    plus deduct up to $3,000 against ordinary income annually.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <PiggyBank className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Tax-Advantaged Accounts</h3>
                  <p className="text-slate-600">
                    Invest through 401(k)s, IRAs, and Roth IRAs. These accounts offer tax-deferred or tax-free growth, 
                    shielding your gains from immediate capital gains tax.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Primary Residence Exclusion</h3>
                  <p className="text-slate-600">
                    When selling your home, you may exclude up to $250,000 ($500,000 for married couples) of gains 
                    if you lived there for 2 of the last 5 years.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Coins className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Gift Appreciated Assets</h3>
                  <p className="text-slate-600">
                    Consider gifting appreciated assets to family members in lower tax brackets, or donating to charity 
                    to avoid capital gains tax entirely while claiming a charitable deduction.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-teal-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Time Your Sales Strategically</h3>
                  <p className="text-slate-600">
                    Consider timing sales in years when your income is lower. If you&apos;re near a threshold, 
                    waiting until January could keep you in a lower capital gains tax bracket.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    1031 Exchange for Real Estate
                  </h3>
                  <p className="text-slate-700">
                    Real estate investors can defer capital gains tax by using a 1031 exchange, which allows you to 
                    swap one investment property for another similar property. This powerful tool lets you defer taxes 
                    indefinitely as long as you continue exchanging properties. Strict rules apply, including 45-day 
                    identification and 180-day closing deadlines.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-slate-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-600" />
                    Opportunity Zone Investments
                  </h3>
                  <p className="text-slate-700">
                    Investing in Qualified Opportunity Zones can provide significant tax benefits. By reinvesting 
                    capital gains into these designated areas, you can defer and potentially reduce your tax liability. 
                    If held for 10+ years, any appreciation on the opportunity zone investment itself may be tax-free.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Specific Asset Types */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Capital Gains Tax for Different Asset Types
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                How capital gains apply to stocks, cryptocurrency, real estate, and other investments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Stock Capital Gains Tax
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Stocks are the most common asset subject to capital gains tax. Every time you sell a stock for a profit, 
                    you trigger a taxable event. The cost basis includes your purchase price plus any commissions or fees. 
                    Stock splits, dividends, and corporate actions can affect your basis.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Use FIFO (First In, First Out) or specific identification for shares</li>
                    <li>• Dividend reinvestments increase your cost basis</li>
                    <li>• Wash sale rules disallow losses if you repurchase within 30 days</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coins className="h-5 w-5 text-amber-600" />
                    Crypto Capital Gains Tax
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    The IRS treats cryptocurrency as property, meaning every trade, sale, or purchase using crypto can trigger 
                    capital gains tax. Even swapping one cryptocurrency for another is a taxable event. Mining rewards are 
                    taxed as ordinary income when received.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Track every transaction, including small purchases</li>
                    <li>• Crypto-to-crypto trades are taxable events</li>
                    <li>• Use crypto tax software for accurate reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-green-600" />
                    Real Estate Capital Gains Tax
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Primary Residence</h4>
                      <p className="text-slate-700 mb-3">
                        When selling your primary residence, you can exclude up to $250,000 (single) or $500,000 (married 
                        filing jointly) of capital gains if you owned and lived in the home for at least 2 of the 5 years 
                        before selling.
                      </p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Improvements increase your cost basis</li>
                        <li>• Can be used once every 2 years</li>
                        <li>• Partial exclusions available for job moves, etc.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Investment Property</h4>
                      <p className="text-slate-700 mb-3">
                        Rental and investment properties don&apos;t qualify for the primary residence exclusion. However, 
                        you can use 1031 exchanges to defer gains. Depreciation taken during ownership is &quot;recaptured&quot; 
                        at a 25% rate.
                      </p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>• Depreciation recapture taxed at 25%</li>
                        <li>• 1031 exchange defers all capital gains</li>
                        <li>• State taxes may also apply</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16 scroll-mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions About Capital Gains Tax
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Answers to common questions about calculating and paying capital gains tax
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 lg:p-8">
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">What is capital gains tax?</h3>
                    <p className="text-slate-700">
                      Capital gains tax is a federal tax imposed on the profit you make from selling a capital asset such as 
                      stocks, bonds, real estate, or cryptocurrency. The tax is calculated on the difference between your 
                      purchase price (cost basis) and the selling price. This tax applies only when you actually sell the 
                      asset - unrealized gains on investments you still hold are not taxed.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">What is the difference between short-term and long-term capital gains tax?</h3>
                    <p className="text-slate-700">
                      Short-term capital gains (assets held for one year or less) are taxed at your ordinary income tax rate, 
                      which ranges from 10% to 37% depending on your income bracket. Long-term capital gains (assets held more 
                      than one year) benefit from preferential rates of 0%, 15%, or 20% based on your taxable income and 
                      filing status. This significant difference makes holding period a crucial factor in tax planning.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">How do I calculate capital gains tax?</h3>
                    <p className="text-slate-700">
                      To calculate capital gains tax: First, determine your cost basis (purchase price plus any fees, 
                      commissions, or improvements). Next, calculate your gain by subtracting the cost basis from the 
                      selling price. Then determine if the gain is short-term or long-term based on your holding period. 
                      Finally, apply the appropriate tax rate based on your total taxable income and filing status. Our 
                      calculator above handles all these calculations automatically.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">What are the capital gains tax rates for 2025-2026?</h3>
                    <p className="text-slate-700">
                      For 2025-2026, long-term capital gains tax rates are 0%, 15%, and 20%. The 0% rate applies to taxable 
                      income up to $48,350 (single) or $96,700 (married filing jointly). The 15% rate applies up to $533,400 
                      (single) or $600,050 (married filing jointly). Above these thresholds, the 20% rate applies. Short-term 
                      gains are taxed at ordinary income rates ranging from 10% to 37%.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Do I have to pay capital gains tax on cryptocurrency?</h3>
                    <p className="text-slate-700">
                      Yes, the IRS treats cryptocurrency as property for tax purposes. When you sell, trade, or use 
                      cryptocurrency to purchase goods and services, you may owe capital gains tax on any profit. The same 
                      short-term and long-term rules apply based on how long you held the crypto. Even crypto-to-crypto 
                      trades (like Bitcoin for Ethereum) are taxable events that must be reported.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">How can I reduce my capital gains tax?</h3>
                    <p className="text-slate-700">
                      Strategies to reduce capital gains tax include: holding assets for more than one year to qualify for 
                      lower long-term rates, tax-loss harvesting (selling losing investments to offset gains), using 
                      tax-advantaged accounts like 401(k)s and IRAs, gifting appreciated assets to family members in lower 
                      tax brackets, donating appreciated assets to charity, utilizing the primary residence exclusion for 
                      home sales, and strategic timing of sales in lower-income years.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">What is the capital gains tax exemption for home sales?</h3>
                    <p className="text-slate-700">
                      If you sell your primary residence, you may exclude up to $250,000 of capital gains ($500,000 for 
                      married couples filing jointly) from taxation. To qualify, you must have owned and lived in the home 
                      for at least 2 of the 5 years before selling. This exclusion can be used once every 2 years. Partial 
                      exclusions may be available if you sell before meeting the requirements due to job relocation, health 
                      issues, or unforeseen circumstances.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Do I pay capital gains tax if I have losses?</h3>
                    <p className="text-slate-700">
                      Capital losses can offset capital gains dollar for dollar, reducing your tax liability. If your total 
                      losses exceed your gains, you can deduct up to $3,000 ($1,500 if married filing separately) against 
                      your ordinary income each year. Any excess losses beyond this annual limit can be carried forward 
                      indefinitely to offset future gains. This makes tax-loss harvesting a valuable strategy for tax planning.
                    </p>
                  </div>

                  <div className="border-b border-slate-200 pb-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">When do I need to pay capital gains tax?</h3>
                    <p className="text-slate-700">
                      Capital gains tax is typically due when you file your annual tax return by April 15th (or the extended 
                      deadline if you file an extension). However, if you have significant gains or income not subject to 
                      withholding, you may need to make estimated quarterly tax payments to avoid underpayment penalties. 
                      The quarterly due dates are typically April 15, June 15, September 15, and January 15 of the following year.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Is there a difference in capital gains tax for stocks vs real estate?</h3>
                    <p className="text-slate-700">
                      The same capital gains tax rates apply to both stocks and real estate held as investments. However, 
                      real estate has special provisions: the primary residence exclusion ($250,000/$500,000) can eliminate 
                      taxes on home sale profits, depreciation recapture on investment properties is taxed at a maximum 25% 
                      rate, and 1031 exchanges allow deferral of gains on investment property sales. Real estate also offers 
                      opportunity zone investment benefits not available for stocks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Disclaimer */}
          <section className="mb-16">
            <Card className="border border-slate-200 bg-slate-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-slate-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-slate-600">
                    <p className="font-semibold text-slate-700 mb-2">Disclaimer</p>
                    <p>
                      This calculator provides estimates for informational purposes only and should not be considered tax advice. 
                      Actual tax liability may vary based on your specific circumstances, including state taxes, the 3.8% Net 
                      Investment Income Tax, alternative minimum tax, and other factors. Please consult a qualified tax professional 
                      for advice specific to your situation. Tax laws are subject to change, and the information provided is based 
                      on current IRS guidelines for the 2025-2026 tax year.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <Calculator className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg">Capital Gains Tax Calculator</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Free online tool to help you estimate capital gains tax on your investments for the 2025-2026 tax year.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#calculator" className="hover:text-white transition-colors">Calculator</a></li>
                  <li><a href="#rates" className="hover:text-white transition-colors">Tax Rates</a></li>
                  <li><a href="#tips" className="hover:text-white transition-colors">Tax Tips</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="https://www.irs.gov/taxtopics/tc409" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">IRS Capital Gains Guide</a></li>
                  <li><a href="https://www.irs.gov/forms-pubs/about-schedule-d-form-1040" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Schedule D Instructions</a></li>
                  <li><a href="https://www.irs.gov/pub/irs-pdf/i8949.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Form 8949 Instructions</a></li>
                </ul>
              </div>
            </div>
            <Separator className="bg-slate-700 mb-8" />
            <div className="text-center text-slate-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Capital Gains Tax Calculator. All rights reserved.</p>
              <p className="mt-2">For informational purposes only. Not professional tax advice.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
