const index = async (req, res) => {
  try {
    const data = [
      {
        id: 1,
        name: 'É O DADO DO DADO',
      },
      {
        id: 2,
        name: 'hurdur DADO',
      },
    ]
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default {
  index
};
