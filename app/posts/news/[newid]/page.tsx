"use client";
import React from "react";

type Props = {
  params: { newid: string };
};

const NewsId = ({ params }: Props) => {
  return <div>NewsId {params.newid}</div>;
};

export default NewsId;
