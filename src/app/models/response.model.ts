export interface APIResponse<T> {
  contentDisposition: string;
  success: boolean;
  statusCode: number;
  data?: T;
  error?: Error;
}
