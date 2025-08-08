export function formatDate(time) {
    const date = new Date(time * 1000);
    return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}
