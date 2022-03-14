export interface HttpResponse {
  status: number
  success?: boolean
  traceId?: string
  data: any
}
