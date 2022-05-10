// console.log("8 paskaita.Formos");
const salaryCheckerForm = document.querySelector("form");
salaryCheckerForm.addEventListener("submit", handleSalaryCheckerForm);
function handleSalaryCheckerForm(event) {
  event.preventDefault();
  const gender = document.querySelector("input[name=gender]:checked").value;
  const field = document.querySelector("select[name=workingField]").value;
  const position = document.querySelector("input[name=position]").value;
  const experience = document.querySelector("input[name=experience]").value;
  //   console.log(field.value);
  //   console.log(position.value);
  //   console.log(gender.value);
  //   console.log(experience.value);

  // Management 48000, IT 91000, construction 66000, pharmacy 128000
  // Gender women get 17% less then man
  // 0-2 -50%, 2-5, 5+ +50%
//   show final salary in h2 element with position value
  if (field === `management`) {
    const genderSalary = calculateGenderSalary(gender, 48000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`Avarage salary is $${finalSalary}`);
  } else if (field === "it") {
    const genderSalary = calculateGenderSalary(gender, 91000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`Avarage salary is $${finalSalary}`);
  } else if (field === "construction") {
    const genderSalary = calculateGenderSalary(gender, 66000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`Avarage salary is $${finalSalary}`);
  } else {
    const genderSalary = calculateGenderSalary(gender, 128000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`Avarage salary is $${finalSalary}`);
  }

  function calculateGenderSalary(gender, salary) {
    if (gender === "male") {
      return salary;
    } else if (gender === "female") {
      return salary * 0.83;
    } else {
      return salary * 0.91;
    }
  }
  function calculateExperienceSalary(experience, salary) {
    const flooredExperience = Math.floor(experience);
    if (experience >= 0 && experience <= 2) {
      return salary * 0.5;
    } else if (flooredExperience >= 3 && flooredExperience <= 5) {
      return salary;
    } else {
      return salary * 1.5;
    }
  }

  console.log(field);

  console.log(position);

  console.log(gender);

  console.log(experience);
}
