import React from "react";

/** Route-level Suspense fallback — three-body spinner (AUREX theme). */
export default function PageLoader() {
  return (
    <div className="page-loading" role="status" aria-live="polite" aria-label="Loading page">
      <div className="three-body" aria-hidden>
        <div className="three-body__dot" />
        <div className="three-body__dot" />
        <div className="three-body__dot" />
      </div>
      <span className="visually-hidden">Loading</span>
    </div>
  );
}
