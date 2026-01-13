import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Cookie Consent Banner - Play By Stats
 * Design: Purple (#a855f7) & Pink (#ec4899)
 * Professional, detailed, and user-focused cookie management
 */

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (!savedPreferences) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const minimalPreferences: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(minimalPreferences));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowBanner(false);
    setShowDetails(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-[#a855f7] shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {!showDetails ? (
              // Main Banner View
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <Cookie className="text-[#a855f7] flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-bold text-[#1a1a2e]">
                        We Use Cookies
                      </h3>
                      <p className="text-[#6b7280] text-sm mt-1">
                        We use cookies to enhance your experience, analyze site usage, and serve personalized content. By clicking "Accept All," you consent to all cookies. You can customize your preferences or learn more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
                  <Button
                    variant="outline"
                    onClick={() => setShowDetails(true)}
                    className="border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/10"
                  >
                    <Info size={16} className="mr-2" />
                    Details
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleRejectAll}
                    className="border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280]/10"
                  >
                    Reject All
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white hover:shadow-lg"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            ) : (
              // Detailed View
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">Cookie Preferences</h2>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-[#6b7280] hover:text-[#1a1a2e]"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Cookie Types */}
                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="bg-gradient-to-br from-[#a855f7]/10 to-[#ec4899]/10 rounded-lg p-4 border border-[#a855f7]/20">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-[#1a1a2e] text-lg">Necessary Cookies</h3>
                        <p className="text-[#6b7280] text-sm mt-1">
                          Essential for website functionality. These cookies enable core features like page navigation, security, and access to secure areas. The website cannot function properly without these cookies.
                        </p>
                      </div>
                      <div className="bg-[#a855f7] text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0 ml-4">
                        Always On
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-[#6b7280]">
                      <p><strong>Examples:</strong> Session tokens, security cookies, CSRF protection</p>
                      <p><strong>Duration:</strong> Session-based (deleted when you close the browser)</p>
                      <p><strong>Purpose:</strong> Protect your account and ensure website security</p>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="bg-white rounded-lg p-4 border-2 border-[#e5e7eb]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-[#1a1a2e] text-lg">Analytics Cookies</h3>
                        <p className="text-[#6b7280] text-sm mt-1">
                          Help us understand how you use our website. We collect anonymous data about page views, time spent, and user interactions to improve your experience and website performance.
                        </p>
                      </div>
                      <label className="flex items-center gap-2 cursor-pointer flex-shrink-0 ml-4">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={() => togglePreference('analytics')}
                          className="w-5 h-5 rounded border-[#a855f7] text-[#a855f7] cursor-pointer"
                        />
                        <span className="text-sm font-semibold text-[#1a1a2e]">
                          {preferences.analytics ? 'Enabled' : 'Disabled'}
                        </span>
                      </label>
                    </div>
                    <div className="space-y-2 text-sm text-[#6b7280]">
                      <p><strong>Data Collected:</strong> Page views, time on page, device type, browser, referrer</p>
                      <p><strong>Duration:</strong> 12 months</p>
                      <p><strong>Purpose:</strong> Analyze usage patterns and improve website functionality</p>
                      <p><strong>Privacy:</strong> All data is anonymized - we cannot identify you personally</p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-white rounded-lg p-4 border-2 border-[#e5e7eb]">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-[#1a1a2e] text-lg">Marketing Cookies</h3>
                        <p className="text-[#6b7280] text-sm mt-1">
                          Used to track your interests and deliver personalized advertisements. These cookies remember your preferences and show you relevant content across different websites.
                        </p>
                      </div>
                      <label className="flex items-center gap-2 cursor-pointer flex-shrink-0 ml-4">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={() => togglePreference('marketing')}
                          className="w-5 h-5 rounded border-[#a855f7] text-[#a855f7] cursor-pointer"
                        />
                        <span className="text-sm font-semibold text-[#1a1a2e]">
                          {preferences.marketing ? 'Enabled' : 'Disabled'}
                        </span>
                      </label>
                    </div>
                    <div className="space-y-2 text-sm text-[#6b7280]">
                      <p><strong>Data Collected:</strong> Browsing history, interests, preferences, demographic info</p>
                      <p><strong>Duration:</strong> 24 months</p>
                      <p><strong>Purpose:</strong> Personalize advertisements and marketing campaigns</p>
                      <p><strong>Privacy:</strong> You can opt-out at any time using this banner</p>
                    </div>
                  </div>
                </div>

                {/* Information Section */}
                <div className="bg-[#f3f4f6] rounded-lg p-4 border border-[#e5e7eb]">
                  <h4 className="font-bold text-[#1a1a2e] mb-2">Your Privacy Rights</h4>
                  <ul className="space-y-2 text-sm text-[#6b7280]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] font-bold">✓</span>
                      <span>You can change your preferences at any time by visiting this banner again</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] font-bold">✓</span>
                      <span>Necessary cookies cannot be disabled as they are required for security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] font-bold">✓</span>
                      <span>You can clear cookies from your browser settings at any time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#a855f7] font-bold">✓</span>
                      <span>Read our full <a href="/privacy" className="text-[#a855f7] font-bold hover:underline">Privacy Policy</a> for more details</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={handleRejectAll}
                    className="border-[#6b7280] text-[#6b7280] hover:bg-[#6b7280]/10"
                  >
                    Reject All
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white hover:shadow-lg"
                  >
                    Save Preferences
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-[#1a1a2e] text-white hover:bg-[#2d2d3d]"
                  >
                    Accept All
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
