function calculateCalories(goal, activity, job) {
  let base = 1400;

  if (activity === "mäßig aktiv") base += 200;
  if (activity === "sehr aktiv") base += 400;

  if (job === "körperlich") base += 300;
  if (job === "Büro") base += 0;

  if (goal === "abnehmen") return base - 400;
  if (goal === "zunehmen") return base + 300;

  return base;
}
