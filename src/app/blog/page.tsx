// import config from "@/src/lib/config";

export default async function Page() {
  // async function fetchBlogs(params: string) {
  //   const reqOptions = {
  //     headers: {
  //       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  //     },
  //   };
  //   const request = await fetch(
  //     `${config.api}/api/blogs?populate=*&${params}`,
  //     reqOptions
  //   );
  //   const response = await request.json();
  //   return response;
  // }

  // const [featuredBlogs, blogs] = await Promise.all([
  //   await fetchBlogs("filters[isFeatured][$eq]=true"),
  //   await fetchBlogs("filters[isFeatured][$eq]=false"),
  // ]);
  // console.log("blogs", blogs.data);
  // console.log("featuredBlogs", featuredBlogs.data);

  return <div>BLOG</div>;
}
