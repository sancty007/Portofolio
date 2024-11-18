import React from "react";

export default async function page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <h1>Page</h1>
      <p>This is the Page component.</p>
      <p>You can add more content to this component as needed.</p>
    </div>
  );
}
