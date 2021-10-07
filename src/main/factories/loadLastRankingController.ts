import { IController } from '@presentation/contracts'
import { LastRankingLoaderService } from '@data/services'
import { RankingRepositoryInMemory } from '@infra/repositories/inMemory'
import { LoadLastRankingController } from '@presentation/controllers'

export const makeLoadLastRankingController = (): IController => {
  const repo = new RankingRepositoryInMemory()
  const loader = new LastRankingLoaderService(repo)
  return new LoadLastRankingController(loader)
}
