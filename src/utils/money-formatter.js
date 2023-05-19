export function formatMoney(number) {
  return Number(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
