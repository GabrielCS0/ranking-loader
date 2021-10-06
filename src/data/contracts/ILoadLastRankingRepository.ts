import { RankingScoreDTO } from '@data/dto'

export interface ILoadLastRankingRepositoy {
  loadLastRanking(): Promise<RankingScoreDTO[]>
}
