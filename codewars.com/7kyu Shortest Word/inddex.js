function findShort(s) {
  let shortest;
  s.split(" ").map((e) =>
    e.length < shortest || !shortest ? (shortest = e.length) : ""
  );
  return shortest;
}
