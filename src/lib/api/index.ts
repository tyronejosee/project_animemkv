import { MockDataProvider } from "./mock-provider";
import { SupabaseDataProvider } from "./supabase-provider";
import type { DataProvider } from "./types";

const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true" || true;

export const api: DataProvider = useMockData
  ? new MockDataProvider()
  : new SupabaseDataProvider();
