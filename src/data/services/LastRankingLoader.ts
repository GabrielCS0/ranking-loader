import { RankingScore } from '@domain/entities'
import { RankingUnavailableError } from '@domain/errors'
import { ILastRankingLoader } from '@domain/useCases'
import { ILoadLastRankingRepositoy } from '@data/contracts'

export class LastRankingLoaderService implements ILastRankingLoader {
  constructor(
    private readonly loadLastRankingRepository: ILoadLastRankingRepositoy
  ) {}

  async load(): Promise<RankingScore[]> {
    const currentTime = new Date().getHours()

    if (currentTime > 21) throw new RankingUnavailableError()

    const lastRanking = await this.loadLastRankingRepository.loadLastRanking()

    return lastRanking
  }
}
