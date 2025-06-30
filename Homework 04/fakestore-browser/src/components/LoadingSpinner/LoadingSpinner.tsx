import "./LoadingSpinner.css";

type LoadingSpinnerProps = {
  size?: "big" | "small";
};

export const LoadingSpinner = ({ size = "big" }: LoadingSpinnerProps) => {
  return <div className={size === "big" ? "spinner big" : "spinner small"} />;
};
