import { ILoadLastRankingRepositoy } from '@data/contracts'
import { RankingScoreDTO } from '@data/dto'
import { rankingData } from '@infra/dataSources'

export class RankingRepositoryInMemory implements ILoadLastRankingRepositoy {
  async loadLastRanking(): Promise<RankingScoreDTO[]> {
    const rankingScore = rankingData.map(item => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))

    return rankingScore
  }
}
