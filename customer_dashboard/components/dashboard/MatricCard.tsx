import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

type MetricCardProps = {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: LucideIcon;
  trend: "up" | "down";
  iconColor: string;
  iconBackground: string;
};

export default function MetricCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  trend,
  iconColor,
  iconBackground,
}: MetricCardProps) {
  const TrendIcon = trend === "up" ? ArrowUpRight : ArrowDownRight;

  return (
    <article className="metric-card">
      <div className="metric-card-top">
        <span className="metric-title">{title}</span>

        <span
          className="metric-icon"
          style={{
            color: iconColor,
            backgroundColor: iconBackground,
          }}
        >
          <Icon size={20} />
        </span>
      </div>

      <div className="metric-value">{value}</div>

      <div className="metric-footer">
        <span className={`metric-change ${trend}`}>
          <TrendIcon size={15} />
          {change}
        </span>
        <span className="metric-description">{description}</span>
      </div>
    </article>
  );
}
