'use client';

import React, { useState } from 'react';
import { X, Check, Calculator, Building, Hammer, Compass, Truck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultService = 'construction',
}: QuoteModalProps) {
  const [projectType, setProjectType] = useState<string>(defaultService);
  const [squareFootage, setSquareFootage] = useState<number>(15000);
  const [timeframe, setTimeframe] = useState<string>('3-6 months');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const projectTypes = [
    { id: 'construction', label: 'Commercial Construction', icon: Building, baseCost: 180 },
    { id: 'renovation', label: 'Commercial Renovation', icon: Hammer, baseCost: 120 },
    { id: 'planning', label: 'Pre-Construction & BIM', icon: Compass, baseCost: 25 },
    { id: 'concrete-works', label: 'Concrete & Heavy Civil', icon: Truck, baseCost: 95 },
  ];

  const currentType = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const estimatedMin = Math.round(squareFootage * currentType.baseCost * 0.85);
  const estimatedMax = Math.round(squareFootage * currentType.baseCost * 1.15);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReferenceId(`STW-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative">
        {/* Header */}
        <div className="bg-[#1c2938] text-white p-6 flex items-center justify-between sticky top-0 z-10 border-b border-slate-700">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-[#0f8a3c] rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0f8a3c]">
                ProNirmaan Solutions Estimator
              </span>
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight">
              Request Project Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 cursor-pointer transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-[#0f8a3c] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h4 className="font-heading font-bold text-2xl text-stone-900 mb-2">
              Quote Request Received
            </h4>
            <p className="text-sm text-stone-600 max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold">{name || 'Client'}</span>. A ProNirmaan Senior Project Estimator will review your specifications and reach out at <span className="font-semibold">{email || 'your email'}</span> within 24 business hours.
            </p>

            <div className="bg-[#f6f4f0] p-4 text-stone-800 text-xs text-left max-w-md mx-auto mb-6 space-y-1">
              <p><strong>Service:</strong> {currentType.label}</p>
              <p><strong>Scale:</strong> {squareFootage.toLocaleString()} sq. ft.</p>
              <p><strong>Estimated Range:</strong> ${estimatedMin.toLocaleString()} - ${estimatedMax.toLocaleString()}</p>
              <p><strong>Reference ID:</strong> {referenceId}</p>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Select Type */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                1. Select Construction Division
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setProjectType(type.id)}
                      className={`flex items-center gap-3 p-3.5 border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#0f8a3c] bg-[#0f8a3c]/5 text-stone-900 shadow-xs'
                          : 'border-stone-200 hover:border-stone-400 text-stone-600'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 shrink-0 ${
                          isSelected ? 'text-[#0f8a3c]' : 'text-stone-400'
                        }`}
                      />
                      <span className="text-xs font-bold uppercase tracking-wide">
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale & Footage */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  2. Approximate Footprint
                </label>
                <span className="font-heading font-black text-sm text-[#0f8a3c]">
                  {squareFootage.toLocaleString()} SQ. FT.
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={squareFootage}
                onChange={(e) => setSquareFootage(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 accent-[#0f8a3c] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>1,000 sq ft</span>
                <span>50,000 sq ft</span>
                <span>100,000+ sq ft</span>
              </div>
            </div>

            {/* Step 3: Preliminary Estimate Banner */}
            <div className="bg-[#f6f4f0] border-l-4 border-[#0f8a3c] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calculator className="w-5 h-5 text-[#0f8a3c]" />
                <div>
                  <span className="text-[10px] font-bold uppercase text-stone-500 tracking-wider block">
                    Estimated Budget Bracket
                  </span>
                  <span className="font-heading font-black text-lg text-stone-900">
                    ${(estimatedMin / 1000).toFixed(0)}k – ${(estimatedMax / 1000).toFixed(0)}k
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-stone-500 uppercase tracking-wider">
                Benchmark Rates
              </span>
            </div>

            {/* Step 4: Contact Info */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                3. Your Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs"
                  />
                </div>
                <div>
                  <select
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs bg-white text-stone-700"
                  >
                    <option value="immediate">Start Timeline: Immediate (Under 30 Days)</option>
                    <option value="3-6 months">Start Timeline: 3 - 6 Months</option>
                    <option value="6-12 months">Start Timeline: 6 - 12 Months</option>
                    <option value="feasibility">Feasibility & Preliminary RFP only</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Tell us about the project site, address or specific scope..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-stone-200">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold uppercase text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-8 py-3 text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                Submit RFP / Quote Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
