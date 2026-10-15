import { ArrowUp, ArrowDown, Info } from "lucide-react";

type MetricCardProps = {
  title: string;
  amount: string;
  change: number;
  comparisonText: string;
};

export default function MetricCard({
  title,
  amount,
  change,
  comparisonText,
}: MetricCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="mrr-container">
      <div>
        <h3>
          {title} <Info size={10} color="#D3D3D3" />
        </h3>

        <div className="mrr-amount">{amount}</div>
      </div>

      <div className="rev-card-bottom">
        <span>
          {isPositive ? (
            <ArrowUp className="w-4 h-4" />
          ) : (
            <ArrowDown className="w-4 h-4" />
          )}
          {Math.abs(change)}%
        </span>{" "}
        vs {comparisonText}
      </div>
    </div>
  );
}
