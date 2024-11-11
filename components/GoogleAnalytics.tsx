// GoogleAnalytics.tsx
import { useEffect } from 'react';
import Script from 'next/script';

interface GoogleAnalyticsProps {
    trackingId: string;
}

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer: any[];
    }
}

// Declare `gtag` function outside the block to avoid strict mode issues
const gtag = (...args: any[]) => {
    window.dataLayer.push(args);
};

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ trackingId }) => {
    useEffect(() => {
        // Initialize `dataLayer` and `gtag` if not already defined
        if (!window.gtag) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', trackingId);
        }
    }, [trackingId]);

    return (
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        />
    );
};

export default GoogleAnalytics;
