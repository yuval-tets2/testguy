import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LogWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
