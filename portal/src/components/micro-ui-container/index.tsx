import { useEffect } from "react";

export const MicroUIContainer = ({
  source,
  href,
  id,
}: {
  source: string;
  href: string;
  id: string;
}) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = source;
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link href={href} rel="stylesheet"></link>
      <div id={id}></div>
    </>
  );
};
