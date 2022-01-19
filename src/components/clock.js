export default function clock() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hand hour">{hours}</div>
        <div className="hand minute">{minutes}</div>
        <div className="hand second">{seconds}</div>
      </div>
    </div>
  );
}
