import * as React from "react";
import { Range } from "react-range";

interface PriceRangeSliderProps {
  values: number[];
  setValues: (values: number[]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  values,
  setValues,
}) => {
  return (
    <Range
      label="Select your value"
      step={250}
      min={0}
      max={2000}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          className="h-2  mx-2 bg-[var(--border-light)] rounded-full"
          style={{ ...props.style }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
          className="h-4 w-4 bg-white rounded-full shadow-lg border-2 border-white hover:bg-primary-hover hover:shadow-xl transition-all duration-200 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          style={{ ...props.style }}
        />
      )}
    />
  );
};

export default PriceRangeSlider;
