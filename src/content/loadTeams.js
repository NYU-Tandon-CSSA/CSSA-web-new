import { contentUrl, memberPhoto } from "./paths";

function withPhoto(member) {
  if (!member || typeof member !== "object") {
    return member;
  }
  const photo = member.photo || "unknow.png";
  return {
    ...member,
    image: memberPhoto(photo),
  };
}

function mapList(list) {
  return Array.isArray(list) ? list.map(withPhoto) : [];
}

export async function loadTeams() {
  const res = await fetch(`${contentUrl("teams.json")}?t=${Date.now()}`);
  if (!res.ok) {
    throw new Error("无法加载 teams.json");
  }
  const data = await res.json();
  return {
    cabinetTeam: mapList(data.cabinetTeam),
    boardTeam: mapList(data.boardTeam),
    wallOfFame: mapList(data.wallOfFame),
    advisorTeam: mapList(data.advisorTeam),
    devTeam: mapList(data.devTeam),
  };
}
