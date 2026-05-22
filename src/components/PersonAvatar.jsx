import React from "react";
import { getInitials } from "../utils/initials";

export default function PersonAvatar({ name, image, className = "", size = 64 }) {
  if (image?.trim()) {
    return (
      <img
        src={image}
        alt={name}
        className={className}
        loading="lazy"
        decoding="async"
        width={size}
        height={size}
      />
    );
  }

  return (
    <span
      className={`person-avatar-initials ${className}`.trim()}
      style={{ width: size, height: size, fontSize: Math.max(12, size * 0.32) }}
      aria-hidden
    >
      {getInitials(name)}
    </span>
  );
}
