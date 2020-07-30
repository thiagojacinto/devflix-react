import React from "react";

export function NotFoundMessage({ message }) {
  return (
    <div>
      <h3>
        No match for <code>{message}</code>
      </h3>
    </div>
  );
}

export default NotFoundMessage;
