
export const numberToDate = (number: Date | number): Date =>
  typeof number === 'number' ? new Date(number) : number;

const TimeIndicator = ({ time, minutes, format }) => {
  const date = numberToDate(time);
  let indicator = null;

  if (minutes.includes(date.getMinutes())) {
    indicator = (
      <div style={{ whiteSpace: 'nowrap', width: '1px' }}>
        {format(date)}
      </div>
    );
  }

  return (
    <th style={{ width: '1px' }}>
      {indicator}
    </th>
  );
};

TimeIndicator.defaultProps = {
  minutes: [0],
  format: (date: Date) => [
    date.getHours().toString().padStart(2, '0'),
    date.getMinutes().toString().padStart(2, '0')
  ].join(':')
};

export default TimeIndicator;