const initializeChargebee = () => {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (window.Chargebee) {
          clearInterval(interval);
          window.Chargebee.init({
            site: "your-site" // replace with your Chargebee site name
          });
          resolve(window.Chargebee);
        }
      }, 100);
    });
  };
  
  export default initializeChargebee;
  