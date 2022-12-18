import Table from "./table";

function App() {
  const users = [
    {
      name: "Yasin",
      surname: "Çoban",
      email: "cobanyasin@gmail.com",
      age: 24,
    },
    {
      name: "Meltem",
      surname: "Çoban",
      email: "cobanmeltem@gmail.com",
      age: 25,
    },
    {
      name: "Ayça",
      surname: "Karabulut",
      email: "karabulutayca@gmail.com",
      age: 25,
    },
    {
      name: "Mesut",
      surname: "Karabulut",
      email: "karabulutcagri@gmail.com",
      age: 26,
    },
  ];
  return (
    <div className="p-4">
      <Table
        searchable={true}
        head={[
          {
            name: "Ad-Soyad",
          },
          {
            name: "E-Posta",
          },
          {
            name: "Yaş",
          },
          {
            name: "İşlemler",
            width:"200"
          },
        ]}
        body={users.map((user) => [
          user.name,
          user.email,
          user.age,
          [
            <button
              className="h-8 px-4 flex items-center rounded bg-blue-400 text-white"
              disabled
            >
              Düzenle
            </button>,
            <button
              className="h-8 px-4 flex items-center rounded bg-red-400 text-white"
              disabled
            >
              Sil
            </button>,
          ],
        ])}
      />
    </div>
  );
}

export default App;
