
    /*  GOAL: Write the JavaScript code necessary to transform the HTML elements
   *  on the page into a functioning clock.
   */

    // Create references to the HTML elements that we want to transform
    (()=> {
      const
        secondHand = document.querySelector('.second-hand'),
        minuteHand = document.querySelector('.min-hand'),
        hourHand = document.querySelector('.hour-hand')

      // Helper function responsible for calculating the amount to rotate a hand
      const calcDegrees = (time, max) => ((time / max) * 360) + 90;
      // Call function once every second
      setInterval(() => {

      // Create new Date object
      const now = new Date();

      // Get current seconds, minutes, & hours and calculate the degree shift
      const
        secondHandDegrees = calcDegrees(now.getSeconds(), 60),
        minuteHandDegrees = calcDegrees(now.getMinutes(), 60),
        hourHandDegrees = calcDegrees(now.getHours(), 12);

      // Apply rotation to the clock hands corresponding with current time value
      secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
      minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
      hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
    }, 1000);
    })();