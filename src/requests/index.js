import { baseURL } from "@/constants";

export async function getData(route = "/materials") {
  const req = await fetch(baseURL + route, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
  if (req.status === 200) {
    const { data } = await req.json();
    return data;
  } else {
    window.location.reload();
  }
}
