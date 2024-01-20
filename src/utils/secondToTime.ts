export function secondToTime(second: number) {
  if (isNaN(second) || second < 0) {
    return "00:00";
  }

  const minutes = Math.floor(second / 60);
  const secondRest = second % 60;

  const formatMin = minutes < 10 ? "0" + minutes : minutes;
  const formatSec = secondRest < 10 ? "0" + secondRest : secondRest;

  return `${formatMin}:${formatSec}`;
}