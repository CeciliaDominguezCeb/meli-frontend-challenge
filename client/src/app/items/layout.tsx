import classes from "./layout.module.css";

export default function ItemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
}
