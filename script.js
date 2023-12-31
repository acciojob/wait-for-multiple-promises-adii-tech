//your JS code here. If required.
 function getRandomPromise() {
      const randomTime = Math.floor(Math.random() * 2000) + 1000; // Random time between 1000ms and 3000ms
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(randomTime / 1000); // Resolve wi th the time taken in seconds
        }, randomTime);
      });
    }

    // Array to hold the three Promises
    const promisesArray = [getRandomPromise(), getRandomPromise(), getRandomPromise()];
Promise.all(promisesArray)
      .then((results) => {
        // Get the loading row element and remove it
        const loadingRow = document.getElementById("loading");
        loadingRow.parentNode.removeChild(loading);
 
        // Populate the table with the results
        const table = document.querySelector("table");
        results.forEach((time, index) => {
          const row = table.insertRow(); // Insert a new row for each Promise result
          const promiseCell = row.insertCell(0);
          const timeCell = row.insertCell(1);

          promiseCell.innerHTML = `Promise ${index + 1}`;
          timeCell.innerHTML = `${time.toFixed(3)}`; // Display time with 3 decimal places
        });
		   // Calculate and insert the Total row
        const totalRow = table.insertRow();
        const totalCell = totalRow.insertCell(0);
		  const totalTimeCell = totalRow.insertCell(1);
        const totalTime = results.reduce((acc, curr) => acc + curr, 0);
        // totalCell.colSpan = 2
        totalCell.innerHTML = `Total`;
		 totalTimeCell.innerHTML = `${totalTime.toFixed(3)}`;
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });