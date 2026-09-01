import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
}

export function Button({
  children,
  to,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2";
  const variantClasses = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 shadow-sm",
    secondary: "bg-purple-50 text-purple-700 hover:bg-purple-100",
    outline:
      "border border-gray-300 text-gray-700 hover:border-purple-500 hover:text-purple-600",
    ghost: "text-gray-700 hover:text-purple-600 hover:bg-purple-50",
  };
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  variant?: "available" | "sold" | "featured" | "score" | "custom";
  color?: string;
  className?: string;
}

export function Badge({ children, variant = "available", color, className = "" }: BadgeProps) {
  const variantClasses = {
    available: "bg-emerald-50 text-emerald-700 border-emerald-200",
    sold: "bg-gray-100 text-gray-500 border-gray-200",
    featured: "bg-purple-50 text-purple-700 border-purple-200",
    score: "bg-amber-50 text-amber-700 border-amber-200",
    custom: "",
  };

  const customStyle = variant === "custom" && color ? { backgroundColor: `${color}1A`, color, borderColor: `${color}40` } : undefined;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium border rounded-full ${variantClasses[variant]} ${className}`}
      style={customStyle}
    >
      {children}
    </span>
  );
}

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "right";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-right";
  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-purple-500" />
          <span className="text-xs font-semibold text-purple-600 tracking-wide">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
