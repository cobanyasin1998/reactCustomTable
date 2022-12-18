import { useState } from "react";

export default function Table({ head, body, searchable }) {
  const [search, setSearch] = useState("");
  const filteredData = body.filter((items) =>
    items.some((item) =>
      item
        .toString()
        .toLocaleLowerCase("TR")
        .includes(search.toLocaleLowerCase("TR"))
    )
  );
  return (
    <>
      {searchable && (
        <div className="mb-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Tabloda Ara"
            className="h-10 border rounded text-sm px-4 w-full border-gray-200 outline-none focus:border-black-50"
          ></input>
        </div>
      )}
      <div className="w-full border rounded p-4">
        <table className="w-full">
          <thead>
            <tr>
              {head.map((h, key) => (
                <th
                  width={h?.width}
                  className="text-left bg-gray-50 text-sm font-semibold text-gray-500 p-3 border-b"
                  key={key}
                >
                  {h.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((items, key) => (
              <tr className="group" key={key}>
                {items.map((item, keyItem) => (
                  <td
                    className="p-3 text-sm group-hover:bg-blue-100"
                    key={keyItem}
                  >
                    {Array.isArray(item) ? (
                      <div className="flex gap-x-2.5">{item}</div>
                    ) : (
                      item
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
