import { useState, useEffect } from "react";

const useCaffeineLevel = () => {
  // Let's start with a full cup of coffee
  const [caffeineMl, setCaffeineMl] = useState(250); // 250ml: average cup of coffee

  // The inevitable caffeine crash!
  useEffect(() => {
    const caffeineCrash = setInterval(() => {
      if (caffeineMl > 0) {
        // Decrease the caffeine by 10ml every minute (that's fast, I know!)
        setCaffeineMl((prevLevel) => prevLevel - 10);
      }
    }, 600); // 60000ms = 1 minute

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(caffeineCrash);
  }, [caffeineMl]);

  return {
    caffeineMl,
    drinkCoffee: () => {
      // Emergency coffee boost! Adds 50ml.
      setCaffeineMl((prevLevel) => prevLevel + 50);
    },
  };
};

export default useCaffeineLevel;
