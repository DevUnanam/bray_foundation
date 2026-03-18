type WaveDividerProps = {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
};

export function WaveDivider({
  topColor = "#ffffff",
  bottomColor = "#1cabb0",
  flip = false
}: WaveDividerProps) {
  return (
    <div className={flip ? "rotate-180" : ""} aria-hidden="true">
      <svg viewBox="0 0 1440 160" className="-mb-px h-auto w-full" preserveAspectRatio="none">
        <path fill={topColor} d="M0 0h1440v66c-124 49-246 73-367 73-177 0-286-65-457-65-130 0-243 56-391 80-80 14-155 16-225 5V0Z" />
        <path fill={bottomColor} d="M0 111c70 11 145 9 225-5 148-24 261-80 391-80 171 0 280 65 457 65 121 0 243-24 367-73v142H0V111Z" />
      </svg>
    </div>
  );
}
