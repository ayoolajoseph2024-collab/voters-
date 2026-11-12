function checkVoterEligibility(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

  if (age >= 18) {
    return { eligible: true, age: age, yearsLeft: 0 };
  } else {
    return { eligible: false, age: age, yearsLeft: 18 - age };
  }
}
function checkVoter() {
  let birthYear = document.getElementById("input").value.trim();
  let display = document.getElementById("display");

  if (birthYear === "" || isNaN(birthYear)) {
    display.innerHTML  = "<p class='text-danger' style=color; >Error: Please enter your birth year</p>";
    return;
  }

  if (birthYear > new Date().getFullYear()) {
    display.innerHTML = "<span class='text-danger'>Error: Birth year cannot be after 2026</span>";
    return;
  }
  if (birthYear < 1900) {
    display.innerHTML = "<span class='text-danger'>Error: Enter year from 1900</span>";
    return;
  }

  const result = checkVoterEligibility(birthYear);

  if (result.eligible) {
    display.innerHTML = `<span class='text-success fw-bold'> ELIGIBLE TO VOTE<br>You are ${result.age} years old in 2026</span>`;
  } else {
    display.innerHTML = `<span class='text-danger fw-bold'> NOT ELIGIBLE<br>You are ${result.age} years old. You can vote in ${result.yearsLeft} year(s).</span>`;
  }
}