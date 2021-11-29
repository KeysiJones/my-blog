// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function postsApi(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Primeiros passos com o Git",
      subtitle: "O mínimo que um dev precisa saber para trabalhar com Git",
    },
  ]);
}
