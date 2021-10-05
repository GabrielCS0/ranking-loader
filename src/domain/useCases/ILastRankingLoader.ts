import { RankingScore } from '../entities'

export interface ILastRankingLoader {
  load(): Promise<RankingScore[]>
}
