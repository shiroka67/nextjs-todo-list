---
to: <%= directory %>/<%= name %>/<%= name %>.tsx
---

export const <%= name %> = () => {
  return (
    <div className="<%= name.toLowerCase() %>">
      {/* Your component content */}
    </div>
  );
};
