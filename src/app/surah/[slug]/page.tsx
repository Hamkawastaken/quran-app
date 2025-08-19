"use client";

import { SurahDetailPage } from "@/app/components/SurahDetailPage";
import React from "react";

const SurahPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = React.use(params);
  return (
    <>
      <SurahDetailPage params={{ nomor: slug }} />
    </>
  );
};

export default SurahPage;
