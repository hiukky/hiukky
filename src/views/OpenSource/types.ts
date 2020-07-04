import { AxiosResponse } from 'axios'

export type TRepository = {
  name: string
  description: string
  html_url: string
  node_id: string
  picture: string
  stargazers_count: number
}

export interface IGithubResponse extends AxiosResponse {
  data: TRepository[]
}
