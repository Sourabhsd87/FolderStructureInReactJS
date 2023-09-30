const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "publicN1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: []
            },
            {
              id: "5",
              name: "pop.html",
              isFolder: false,
              items: []
            }
          ]
        },
        {
          id: "6",
          name: "publicN2",
          isFolder: true,
          items: [
            {
              id: "7",
              name: "push.html",
              isFolder: true,
              items: []
            }
          ]
        }
      ]
    },
    {
      id: "8",
      name: "src",
      isFolder: false,
      items: []
    }
  ]
};

export default explorer;
