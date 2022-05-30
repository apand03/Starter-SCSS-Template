export function getRatingColor(rating) {
  if (rating >= 7) return "green";
  else if (rating >= 5) return "orange";
  else return "red";
}
