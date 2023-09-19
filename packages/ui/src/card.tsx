import * as React from "react";

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href?: string;
}): JSX.Element {
  return (
<div>
      <h2 className="ui-mb-3 ui-text-2xl ui-font-semibold">
        {title}{" "}
        <span className="ui-inline-block ui-transition-transform group-hover:ui-translate-x-1 motion-reduce:ui-transform-none">
          -&gt;
        </span>
      </h2>
      <p className="ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50">
        {children}
      </p>
</div>    
  );
}
