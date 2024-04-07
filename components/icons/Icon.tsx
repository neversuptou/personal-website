import Link from 'next/link';
import classNames, { type Argument } from "classnames";
import SvgHome from './home';
import SvgProject from './project';
import SvgMail from './mail';
import SvgUser from './user';
import SvgNull from './null';

export interface IconProps {
    title: string,
    href: string,
    className?: Argument,
}

const IconComponents = {
    "home": SvgHome,
    "project": SvgProject,
    "mail": SvgMail,
    "user": SvgUser,
    "null": SvgNull,
  };

  const Icon: React.FC<IconProps> = ({ title, href, className }) => {
    const SvgComponent = IconComponents[title as keyof typeof IconComponents]; // Явно указываем тип ключа
  
    if (!SvgComponent) {
      return null;
    }
  
    return (
      <Link href={href} className={classNames('svgh m-auto', className)}>
        <SvgComponent width="30" height="30"  />
      </Link>
    );
  };
  
  export default Icon;