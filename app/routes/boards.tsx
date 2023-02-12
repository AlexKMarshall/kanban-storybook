import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return [
    { name: "Project 1", id: 1 },
    { name: "Project 2", id: 2 },
  ];
};

export default function BoardsRoute() {
  const boards = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Boards</h1>
      <ul>
        {boards.map((board) => (
          <li key={board.id}>{board.name}</li>
        ))}
      </ul>
    </div>
  );
}
