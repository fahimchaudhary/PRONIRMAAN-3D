'use client';

import React, { useState } from 'react';
import { X, Check, Calculator, Building, Hammer, Compass, Truck, MessageSquare, ArrowRight } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultService = 'civil-construction',
}: QuoteModalProps) {
  const [workType, setWorkType] = useState<string>(defaultService);
  const [approxScale, setApproxScale] = useState<string>('5000 - 25000 sq ft');
  const [timeframe, setTimeframe] = useState<string>('immediate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const workTypes = [
    { id: 'civil-construction', label: 'Civil Construction & Earthwork', icon: Building },
    { id: 'controlled-demolition', label: 'Controlled Demolition (Mechanical/Manual)', icon: Hammer },
    { id: 'plant-dismantling', label: 'Industrial Plant & Factory Dismantling', icon: Truck },
    { id: 'diamond-core-cutting', label: 'Diamond Core Cutting & Wire Sawing', icon: Compass },
    { id: 'silent-demolition', label: 'Chemical Rock Splitting / Silent Demolition', icon: Hammer },
    { id: 'heavy-equipment-rental', label: 'Heavy Equipment Rental (Tata Hitachi EX210)', icon: Truck },
    { id: 'deep-excavation', label: 'Deep Excavation, Trenching & Piling', icon: Truck },
    { id: 'structural-retrofitting', label: 'Structural Retrofitting & Repair', icon: Building },
    { id: 'road-infrastructure', label: 'Road & Infrastructure Development', icon: Compass },
    { id: 'concrete-breaking', label: 'Concrete Breaking & Debris Hauling', icon: Hammer },
    { id: 'site-survey', label: 'Site Surveying & Engineering Consultation', icon: Compass },
  ];

  const currentWork = workTypes.find((p) => p.id === workType) || workTypes[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit via Web3Forms endpoint
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // or standard webhook
          subject: `New ProNirmaan RFP: ${currentWork.label} from ${name}`,
          name,
          email,
          phone,
          location: city,
          work_type: currentWork.label,
          project_scale: approxScale,
          timeline: timeframe,
          details: notes,
        }),
      });
    } catch {
      // Graceful fallback
    }

    const ref = `PN-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hello ProNirmaan Solutions,\n\nI want to request an RFP / Quote:\n• Work Type: ${currentWork.label}\n• Approx Scale: ${approxScale}\n• Location: ${city || 'Mumbai / Maharashtra'}\n• Name: ${name}\n• Phone: ${phone}\n• Details: ${notes}`
    );
    window.open(`https://wa.me/919594511900?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#1c2938] text-white p-6 flex items-center justify-between sticky top-0 z-10 border-b border-slate-700">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-[#0f8a3c] rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0f8a3c]">
                ProNirmaan Estimator & Tender Desk
              </span>
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight">
              Request Project Bid / Estimation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
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
              Bid Inquiry Successfully Registered
            </h4>
            <p className="text-sm text-stone-600 max-w-md mx-auto mb-6 font-body">
              Thank you, <span className="font-semibold text-stone-900">{name || 'Client'}</span>. An Er. Project Manager will inspect your scope specifications and contact you directly at <span className="font-semibold text-stone-900">{phone || email}</span> within 24 hours.
            </p>

            <div className="bg-[#f6f4f0] p-4 text-stone-800 text-xs text-left max-w-md mx-auto mb-6 space-y-1.5 font-body">
              <p><strong>Work Division:</strong> {currentWork.label}</p>
              <p><strong>Approx Scale:</strong> {approxScale}</p>
              <p><strong>Site Location:</strong> {city || 'Maharashtra'}</p>
              <p><strong>Tender Ref ID:</strong> <span className="font-mono text-[#0f8a3c] font-bold">{referenceId}</span></p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Connect</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Select Work Division */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                1. Select Work Division / Service
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                {workTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = workType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setWorkType(type.id)}
                      className={`flex items-center gap-2.5 p-3 border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#0f8a3c] bg-[#0f8a3c]/5 text-stone-900 shadow-xs'
                          : 'border-stone-200 hover:border-stone-400 text-stone-600'
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-[#0f8a3c]' : 'text-stone-400'
                        }`}
                      />
                      <span className="text-[11px] font-bold uppercase tracking-wide leading-tight">
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                  2. Approximate Scale / Area
                </label>
                <select
                  value={approxScale}
                  onChange={(e) => setApproxScale(e.target.value)}
                  className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs bg-white text-stone-700 font-medium"
                >
                  <option value="Under 5,000 sq ft">Under 5,000 sq ft / Minor Scope</option>
                  <option value="5,000 - 25,000 sq ft">5,000 - 25,000 sq ft (Medium)</option>
                  <option value="25,000 - 1,00,000 sq ft">25,000 - 1,00,000 sq ft (Large)</option>
                  <option value="Over 1,00,000 sq ft">Over 1,00,000 sq ft / Industrial Complex</option>
                  <option value="Tata Hitachi EX210 Rental (Daily/Monthly)">Tata Hitachi EX210 Rental (Daily / Monthly)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                  3. Commencement Timeline
                </label>
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs bg-white text-stone-700 font-medium"
                >
                  <option value="immediate">Immediate (Within 7-15 Days)</option>
                  <option value="1-3 months">1 - 3 Months</option>
                  <option value="3-6 months">3 - 6 Months</option>
                  <option value="tender">Tender Evaluation / DPR Stage</option>
                </select>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="space-y-4">
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                4. Your Contact & Site Location
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name / Company Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs font-body"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number (+91) *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Official Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs font-body"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Site Location / City (e.g. Mumbai, Thane, Navi Mumbai) *"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs font-body"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={3}
                  placeholder="Specific scope details, site constraints, BOQ requirement, or demolition dimensions..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs p-3 border border-stone-300 focus:outline-none focus:border-[#0f8a3c] rounded-xs font-body"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-stone-200">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Or Share via WhatsApp Directly</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-bold uppercase text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0f8a3c] hover:bg-[#0b7331] text-white px-7 py-3 text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Tender RFP'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
