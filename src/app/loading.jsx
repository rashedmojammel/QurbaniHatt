import { Spinner } from "@heroui/react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
      </div>
  );
};

export default LoadingPage;
