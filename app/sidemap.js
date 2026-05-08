export default function sitemap() {
  const baseUrl = "https://learning.digroz.com";

  // List all your static routes here
  const routes = [
    '',
    '/contact',
    '/policy',
    '/courses', // Add your actual main pages here
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly', // Options: always, hourly, daily, weekly, monthly, yearly, never
    priority: route === '' ? 1 : 0.8, // 1 is highest priority (usually homepage)
  }));

  // If you have dynamic routes (like specific courses or quizzes), 
  // you would fetch them from your database here and add them to the array.
  // Example (Pseudo-code):
  // const courses = await getCoursesFromDatabase();
  // const dynamicRoutes = courses.map(course => ({
  //   url: `${baseUrl}/courses/${course.slug}`,
  //   lastModified: course.updatedAt,
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }));
  // return [...routes, ...dynamicRoutes];

  return routes;
}