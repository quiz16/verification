// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { data } = req.body;
  console.log(data)
  console.log(data.length)
  console.log(data[5])
  if (data.length !== 6 || data[5] != 7) {
    return res.status(400).json({ message: 'Invalid code!' });
  }
  return res.status(200).json({ message: 'Valid code!' });
}
