export default function dateFormat(date) {
  if (!date) return '현재';

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  if (day === 0) return `${year}.${month}`;
  return `${year}.${month}.${day}`;
}
