import { FC } from "react";
import { Audio } from "react-loader-spinner";
import "./LoadingSpinner.css";

export const LoadingSpinner: FC = () => (
  <div className="loadingSpinnerWrapper">
    <Audio height="80" width="80" color="black" ariaLabel="loading" />
  </div>
);
