export const fetchMoves = () => {
  return $.ajax({
    method: "GET",
    url: '/api/moves'
  });
};

export const createMove = (move) => {
  return $.ajax({
    method: "POST",
    url: "/api/moves",
    data: { move }
  });
};
