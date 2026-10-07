'use client';

import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <aside
      id="floating-whatsapp-widget"
      aria-label="WhatsApp Quick Contact"
      className="fixed z-[99999] pointer-events-auto select-none"
      style={{
        bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1rem + env(safe-area-inset-right, 0px))',
      }}
    >
      <a
        href="https://wa.me/919594511900?text=Hello%20ProNirmaan%20Solutions,%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] transition-all duration-200 group cursor-pointer"
      >
        {/* Desktop Hover Tooltip */}
        <span className="hidden sm:group-hover:inline-block absolute right-18 bg-[#131c26] text-white text-xs font-heading font-bold py-1.5 px-3 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>

        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          className="drop-shadow-xs"
        >
          <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.944.557 3.763 1.527 5.309L2 22l4.829-1.488a9.98 9.98 0 0 0 5.202 1.458h.005c5.536 0 10.03-4.494 10.03-10.031C22.066 6.494 17.568 2 12.031 2zm5.845 14.195c-.244.685-1.42 1.258-1.956 1.341-.536.083-1.228.118-3.522-.782-2.934-1.15-4.81-4.144-4.956-4.337-.146-.193-1.189-1.583-1.189-3.019s.755-2.146 1.023-2.438c.268-.292.585-.365.78-.365.195 0 .39.002.56.01.182.008.424-.069.664.507.244.585.83 2.023.903 2.17.073.146.122.317.024.512-.098.195-.146.317-.293.488-.146.17-.308.38-.44.512-.146.146-.299.305-.128.598.17.293.758 1.25 1.624 2.021 1.115.992 2.053 1.3 2.346 1.446.293.146.463.122.634-.073.17-.195.731-.853.926-1.146.195-.293.39-.244.658-.146.268.098 1.706.804 1.998.951.293.146.488.22.56.341.073.122.073.707-.171 1.392z" />
        </svg>
      </a>
    </aside>
  );
}
