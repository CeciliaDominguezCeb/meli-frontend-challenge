
import classes from './breadcrums.module.css'

interface BreadCrumbProps {
    breadcrumbs: string[];
  }


export function Breadcrums({ breadcrumbs }: Readonly<BreadCrumbProps>) {
    return (
        <ul className={classes.breadcrumb}>
            {breadcrumbs.map((category) => (
                <li  key={category}>{category}</li>
            ))}
        </ul>
    );
}