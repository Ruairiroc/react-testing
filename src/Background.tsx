import { useEffect } from "react";

interface Props {
  color: string;
  children: React.ReactNode;
}

const Background = ({ color, children }: Props) => {
  useEffect(() => {
    document.body.style.background = color;

    return () => {
      document.body.style.background = "";
    };
  }, [color]);
  return <>{children}</>;
};

export default Background;
