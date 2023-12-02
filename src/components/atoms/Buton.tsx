import Link from "next/link";

export function Button(props: any) {
  if (props.href) {
    return <Link href={props.href}>{props.children}</Link>;
  }
  return <button>{props.children}</button>;
}
