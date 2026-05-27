export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}