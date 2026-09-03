import type { LoaderFunctionArgs } from "react-router-dom";
import { PROPERTIES_DATA } from "../data/propertiesData";

export function propertyDetailLoader({ params }: LoaderFunctionArgs) {
  const id = Number(params.id);

  if (!params.id || !Number.isInteger(id)) {
    throw new Response("ID de propiedad inválido", { status: 400 });
  }

  const property = PROPERTIES_DATA.find((item) => item.id === id);

  if (!property) {
    throw new Response("Propiedad no encontrada", { status: 404 });
  }

  return property;
}