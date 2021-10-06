import { ILastRankingLoader } from '@domain/useCases'
import {
  HttpResponse,
  IController,
  serverError,
  success
} from '@presentation/contracts'
import { RankingScoreViewModel } from '@presentation/viewModels'

export class LoadLastRankingController implements IController {
  constructor(private readonly lastRankingLoader: ILastRankingLoader) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load()

      return success(RankingScoreViewModel.mapCollection(ranking))
    } catch (error) {
      return serverError(error)
    }
  }
}
