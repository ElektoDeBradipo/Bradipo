import { Breadcrumb as AntdBreadcrumb } from "antd";
import Link from "next/link";
import { withRouter } from "next/router";

const getBreadcrumbData = route => {
  const routes = ["home", ...route.split("/").splice(1)];
  const result = [];
  let href = "";
  for (const r of routes) {
    href += `/${r}`;
    result.push({
      href,
      text: r.charAt(0).toUpperCase() + r.slice(1)
    });
  }

  return result;
};

const Breadcrumb = withRouter(({ children, router }) => (
  <AntdBreadcrumb style={{ margin: "16px 0" }}>
    {getBreadcrumbData(router.route).map(({ href, text }, index) => (
      <AntdBreadcrumb.Item key={index}>
        <Link href={href}>
          <a>{text}</a>
        </Link>
      </AntdBreadcrumb.Item>
    ))}
  </AntdBreadcrumb>
));

export default Breadcrumb;
