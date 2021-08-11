import { useContext, useEffect, useRef, useState } from "react";
import { NavigationContext } from "../../context/navigation";
import style from "./nav.module.scss";
import Link from 'next/link'

export default function Nav() {
  const [navigation, setNavigation] = useContext(NavigationContext);
  const [target, setTarget] = useState(null);
  const sub = useRef();
  const FilterByTarget = (targetID) => {
    const filter = navigation.filter((cat) => cat.parent == targetID);
    setTarget(filter);
  };

  const Links = ({ items }) => {
    return (
      <>
        {items.map((links, i) => {
          if (links.parent != 0) return null;
          return (
            <Link href={`/${links.id}`}>
              <li onClick={() => FilterByTarget(links.id)} key={i}>
                <p>{links.name}</p>
              </li>
            </Link>
          );
        })}
      </>
    );
  };

  const SubLinks = ({ sublinks }) => {
    console.log(sublinks);
    return (
      <>
        {sublinks.map((data, i) => {
          <li  key={i}>
            <p>{data.name}</p>
          </li>;
        })}
      </>
    );
  };

  useEffect(() => {
    if (target) {
      sub.current.style.left = 0;
    } else {
      sub.current.style.left = "-100%";
    }
  }, [target]);
  //
  return (
    <nav className={style.wrapper}>
      <div className={style.logo}>logo</div>
      <div className={style.menu_item}>
        <ul>{navigation ? <Links items={navigation} /> : null}</ul>
        <div ref={sub} className={style.sub}>
            <div onClick={() => setTarget(null)} className={style.back}><p>{"<"}</p></div>
          {target ? <SubLinks sublinks={target} /> : null}
        </div>
      </div>
    </nav>
  );
}
