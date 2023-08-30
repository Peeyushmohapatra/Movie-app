import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeletons = () => {
  return (
    <div className="skeleton-container">
    <Skeleton
      style={{ borderRadius: " 30px" }}
      width={200}
      height={300}
    />
    <Skeleton
      style={{ borderRadius: "30px" }}
      width={200}
      height={300}
    />
    <Skeleton
      style={{ borderRadius: "30px" }}
      width={200}
      height={300}
    />
    <Skeleton
      style={{ borderRadius: "30px" }}
      width={200}
      height={300}
    />
    <Skeleton
      style={{ borderRadius: "30px" }}
      width={200}
      height={300}
    />
  </div>
  )
}

export default Skeletons