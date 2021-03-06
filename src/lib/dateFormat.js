export default function dateFormat(date) {
  if (!date) return '현재';

  if (typeof date === 'string') date = new Date(date);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (day === 0) return `${year}.${month}`;
  return `${year}.${month}.${day}`;
}
