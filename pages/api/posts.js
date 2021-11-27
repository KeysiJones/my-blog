// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function postsApi(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "How i got my first opportunity as a software developer",
      description: "Tips to get your first opportunity",
    },
    {
      id: 2,
      title: "Getting started with react",
      description: "Breaf react tutorial",
    },
    {
      id: 3,
      title: "Working with react state",
      description: "React state guide for newbies",
    },
  ]);
}
