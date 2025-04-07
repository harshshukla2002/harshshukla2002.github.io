"use client";

import React from "react";
import { useTheme } from "../context/theme";
import { COLORS } from "../constants/Colors";

const MainProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { theme } = useTheme();

  return (
    <div
      className="w-screen h-[100%] py-5"
      style={{
        background: theme === "light" ? COLORS.lightBg : COLORS.darkBg,
      }}
    >
      {children}
    </div>
  );
};

export default MainProvider;
