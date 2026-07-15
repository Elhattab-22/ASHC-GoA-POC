type Props = {
  current: number;
  total: number;
};

export function ProgressIndicator({ current, total }: Props) {
  const percentage = Math.round((current / total) * 100);

  return (
    <section className="progress" aria-label="Assessment progress">
      <div className="progress-label">
        <strong>
          Step {current} of {total}
        </strong>
        <span>{percentage}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="progress-value"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </section>
  );
}