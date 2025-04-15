document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const ageInput = document.getElementById('age');
    const rankInput = document.getElementById('rank');
  
    // Confirm age before submission
    form.addEventListener('submit', (e) => {
      const age = parseInt(ageInput.value, 10);
  
      if (isNaN(age) || age < 18) {
        e.preventDefault();
        alert("You must be at least 18 years old to register.");
        ageInput.focus();
      } else {
        alert("Thanks for registering! Good luck on the Rift!");
      }
    });
  
    // Autofill League Rank field with a fun default
    rankInput.addEventListener('focus', () => {
      if (rankInput.value === '') {
        rankInput.value = "Iron IV (but climbing!)";
      }
    });
  
    // Optional: confirm before resetting the form (if you add a reset button)
    const resetBtn = document.querySelector('button[type="reset"]');
    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        const confirmReset = confirm("Are you sure you want to reset everything?");
        if (!confirmReset) {
          e.preventDefault();
        }
      });
    }
  });
  