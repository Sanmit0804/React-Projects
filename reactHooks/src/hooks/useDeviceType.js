import { useEffect, useState } from "react";

// Helper function to determine device type based on window width
const getDeviceType = () => {
    const width = window.innerWidth;

    if (width <= 768) {
        return 'mobile'; // Mobile screens
    } else if (width <= 1024) {
        return 'tablet'; // Tablets (Small tablets or large phones in landscape mode)
    } else {
        return 'desktop'; // Desktops or large screens
    }
};

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState(getDeviceType());

    const updateDeviceType = () => {
      setDeviceType(getDeviceType());
    };
  

    useEffect(() => {
        // Listen for window resize events
        window.addEventListener('resize', updateDeviceType);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, []);

    return deviceType;
}

export default useDeviceType;